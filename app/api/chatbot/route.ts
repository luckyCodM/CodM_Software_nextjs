import { NextRequest, NextResponse } from "next/server";
import { formatRetrievedContext, retrieveKnowledge, type ChatMessage } from "@/lib/chatbot/knowledge";

type ChatbotPayload = {
    messages?: unknown;
    sessionId?: unknown;
    pageUrl?: unknown;
};

type OpenAIStreamError = {
    type?: string;
    code?: string;
    message?: string;
};

type OpenAIStreamEvent = {
    type?: string;
    delta?: string;
    text?: string;
    error?: OpenAIStreamError;
    response?: {
        output_text?: string;
        error?: OpenAIStreamError | null;
    };
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function cleanText(value: unknown, maxLength = 4000) {
    return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, maxLength) : "";
}

function normalizeMessages(value: unknown): ChatMessage[] {
    if (!Array.isArray(value)) return [];

    return value
        .map((message) => {
            if (!message || typeof message !== "object") return null;
            const record = message as Record<string, unknown>;
            const role = record.role === "assistant" ? "assistant" : record.role === "user" ? "user" : null;
            const content = cleanText(record.content);

            return role && content ? { role, content } : null;
        })
        .filter((message): message is ChatMessage => Boolean(message))
        .slice(-14);
}

function buildInstructions(context: string, intent: string, pageUrl: string) {
    return [
        "You are CodM AI Assistant, a professional Salesforce and AI consultant for CodM Software.",
        "Answer naturally like a capable ChatGPT-style consultant, not like a scripted FAQ bot.",
        "Use the supplied CodM website knowledge first. Connect the answer to relevant services, case studies, blogs or solutions when useful.",
        "Keep conversation memory: use prior user messages to understand follow-up questions and avoid repeating the same generic introduction.",
        "Do not invent pricing, guarantees, timelines, private client details or certifications that are not in the context.",
        "If the retrieved context is not enough, say what you can infer from CodM's services, then ask one focused follow-up question or offer a consultation.",
        "For sales-ready users, suggest booking a consultation or contacting sales@codmsoftware.com / WhatsApp +91 9871717425.",
        "Use concise paragraphs and bullets only when they make the answer easier to scan.",
        `Detected intent: ${intent}`,
        pageUrl ? `Current website page: ${pageUrl}` : "Current website page: unknown",
        "Retrieved CodM knowledge:",
        context,
    ].join("\n\n");
}

function parseOpenAIError(errorBody: string) {
    try {
        const parsed = JSON.parse(errorBody) as { error?: OpenAIStreamError };
        return parsed.error ?? {};
    } catch {
        return {};
    }
}

function userFacingQuotaMessage() {
    return "CodM AI is connected to OpenAI, but the API project has no available quota or billing credits right now. Please add billing/credits in OpenAI Platform, then try again.";
}

function userFacingOpenAIError(status: number, body: string) {
    const error = parseOpenAIError(body);

    if (status === 401) {
        return "CodM AI is connected, but the OpenAI API key is invalid or not authorized. Please update OPENAI_API_KEY in .env.local.";
    }

    if (status === 429 && (error.code === "insufficient_quota" || error.type === "insufficient_quota")) {
        return userFacingQuotaMessage();
    }

    if (status === 429) {
        return "CodM AI is receiving too many OpenAI requests right now. Please wait a moment and try again.";
    }

    return "CodM AI could not get a live OpenAI response right now. Please try again, or contact sales@codmsoftware.com.";
}

function userFacingStreamError(error?: OpenAIStreamError | null) {
    if (error?.code === "insufficient_quota" || error?.type === "insufficient_quota") {
        return userFacingQuotaMessage();
    }

    return error?.message || "CodM AI could not get a live OpenAI response right now. Please try again, or contact sales@codmsoftware.com.";
}

async function createOpenAIStream(messages: ChatMessage[], pageUrl: string) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return NextResponse.json({
            ok: false,
            message: "OPENAI_API_KEY is missing. Add it to .env.local and restart the Next.js server.",
        }, { status: 503 });
    }

    const retrieval = retrieveKnowledge(messages);
    const context = formatRetrievedContext(retrieval);
    const model = process.env.OPENAI_MODEL || "gpt-5-mini";

    const upstream = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model,
            instructions: buildInstructions(context, retrieval.intent, pageUrl),
            input: messages.map((message) => ({
                role: message.role,
                content: message.content,
            })),
            max_output_tokens: 900,
            stream: true,
        }),
    });

    if (!upstream.ok || !upstream.body) {
        const errorBody = await upstream.text();
        const error = parseOpenAIError(errorBody);
        console.error("OpenAI chatbot error", {
            status: upstream.status,
            type: error.type,
            code: error.code,
            message: error.message,
        });

        return NextResponse.json({
            ok: false,
            message: userFacingOpenAIError(upstream.status, errorBody),
        }, { status: upstream.status === 429 ? 503 : 502 });
    }

    const stream = new ReadableStream<Uint8Array>({
        async start(controller) {
            const reader = upstream.body!.getReader();
            let buffer = "";
            let streamErrorSent = false;

            const emitEvent = (rawEvent: string) => {
                const lines = rawEvent.split("\n");

                for (const line of lines) {
                    if (!line.startsWith("data:")) continue;
                    const data = line.slice(5).trim();

                    if (!data || data === "[DONE]") continue;

                    try {
                        const event = JSON.parse(data) as OpenAIStreamEvent;

                        if (event.type === "error" || event.type === "response.failed") {
                            const streamError = event.error ?? event.response?.error;
                            console.error("OpenAI chatbot stream error", {
                                type: streamError?.type,
                                code: streamError?.code,
                                message: streamError?.message,
                            });

                            if (!streamErrorSent) {
                                streamErrorSent = true;
                                controller.enqueue(encoder.encode(userFacingStreamError(streamError)));
                            }
                            return;
                        }

                        const delta = event.type === "response.output_text.delta"
                            ? event.delta
                            : event.type === "response.output_text.done"
                                ? event.text
                                : undefined;

                        if (delta) controller.enqueue(encoder.encode(delta));
                    } catch {
                        // Ignore malformed SSE fragments and continue streaming valid chunks.
                    }
                }
            };

            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });
                    const events = buffer.split("\n\n");
                    buffer = events.pop() ?? "";
                    events.forEach(emitEvent);
                }

                if (buffer) emitEvent(buffer);
                controller.close();
            } catch (error) {
                console.error("OpenAI chatbot stream error", error);
                controller.enqueue(encoder.encode("I lost the live AI connection for a moment. Please send your message again, or contact sales@codmsoftware.com."));
                controller.close();
            }
        },
    });

    return new Response(stream, {
        headers: {
            "Cache-Control": "no-store, no-transform",
            "Content-Type": "text/plain; charset=utf-8",
            "X-Accel-Buffering": "no",
        },
    });
}

export async function POST(request: NextRequest) {
    try {
        const payload = await request.json() as ChatbotPayload;
        const messages = normalizeMessages(payload.messages);
        const pageUrl = cleanText(payload.pageUrl, 500);

        if (!messages.length || messages[messages.length - 1].role !== "user") {
            return NextResponse.json({ ok: false, message: "Please send a valid user message." }, { status: 400 });
        }

        return await createOpenAIStream(messages, pageUrl);
    } catch (error) {
        console.error("Chatbot API error", error);
        return NextResponse.json({
            ok: false,
            message: "CodM AI could not process this message. Please try again.",
        }, { status: 500 });
    }
}
