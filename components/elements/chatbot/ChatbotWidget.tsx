"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Role = "bot" | "user";

type Message = {
    id: number;
    role: Role;
    text: string;
};

type ApiMessage = {
    role: "user" | "assistant";
    content: string;
};

type LeadField = "name" | "email" | "phone" | "company" | "message";

type LeadData = Record<LeadField, string>;

const storageKey = "codm-chatbot-messages-v2";
const sessionKey = "codm-chatbot-session-id";

const welcomeMessage: Message = {
    id: 1,
    role: "bot",
    text: "Hi, I am CodM AI Assistant. Ask me about Salesforce consulting, CRM implementation, Agentforce AI, integrations, case studies, or how CodM Software can help your business.",
};

const initialLead: LeadData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
};

const fieldPrompts: Record<LeadField, string> = {
    name: "Great. May I have your full name?",
    email: "Thanks. What email address should our team use?",
    phone: "Please share your phone number.",
    company: "What is your company name?",
    message: "Briefly tell me what you need help with.",
};

const fieldLabels: Record<LeadField, string> = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    message: "Requirement",
};

const leadFields: LeadField[] = ["name", "email", "phone", "company", "message"];

const quickReplies = [
    "How can CodM improve my Salesforce setup?",
    "Explain Agentforce AI for my business",
    "Show me relevant Salesforce case studies",
    "How do you handle Salesforce integrations?",
    "Do you provide Salesforce developers?",
    "Book consultation",
];

function shouldStartLeadCapture(input: string): boolean {
    const value = input.toLowerCase();
    return ["book", "consultation", "demo", "contact sales", "talk to", "call me", "lead", "pricing", "quote"].some((keyword) => value.includes(keyword));
}

function toApiMessages(messages: Message[]): ApiMessage[] {
    return messages
        .filter((message) => message.text.trim())
        .map((message): ApiMessage => ({
            role: message.role === "bot" ? "assistant" : "user",
            content: message.text,
        }))
        .slice(-14);
}

function readStoredSessionId() {
    const existing = window.sessionStorage.getItem(sessionKey);

    if (existing) return existing;

    const nextId = `codm_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    window.sessionStorage.setItem(sessionKey, nextId);
    return nextId;
}

function readStoredMessages() {
    try {
        const raw = window.sessionStorage.getItem(storageKey);
        if (!raw) return [welcomeMessage];

        const parsed = JSON.parse(raw) as Message[];
        const validMessages = parsed.filter((message) => (
            message
            && typeof message.id === "number"
            && (message.role === "bot" || message.role === "user")
            && typeof message.text === "string"
        ));

        return validMessages.length ? validMessages.slice(-30) : [welcomeMessage];
    } catch {
        return [welcomeMessage];
    }
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
    const [isTyping, setIsTyping] = useState(false);
    const [leadMode, setLeadMode] = useState(false);
    const [leadData, setLeadData] = useState<LeadData>(initialLead);
    const [activeField, setActiveField] = useState<LeadField | null>(null);
    const messageId = useRef(2);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const sessionId = useRef<string>("");

    const nextMissingField = useMemo(() => leadFields.find((field) => !leadData[field].trim()) ?? null, [leadData]);

    useEffect(() => {
        const storedMessages = readStoredMessages();
        setMessages(storedMessages);
        messageId.current = Math.max(...storedMessages.map((message) => message.id), 1) + 1;
        sessionId.current = readStoredSessionId();
    }, []);

    useEffect(() => {
        window.sessionStorage.setItem(storageKey, JSON.stringify(messages.slice(-30)));
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, isTyping]);

    const addMessage = (role: Role, text: string) => {
        const id = messageId.current++;
        setMessages((previous) => [...previous, { id, role, text }]);
        return id;
    };

    const replaceMessage = (id: number, text: string) => {
        setMessages((previous) => previous.map((message) => (message.id === id ? { ...message, text } : message)));
    };

    const addBotMessage = (text: string) => {
        setIsTyping(true);
        window.setTimeout(() => {
            setIsTyping(false);
            addMessage("bot", text);
        }, 350);
    };

    const startLeadCapture = () => {
        setLeadMode(true);
        const firstField = nextMissingField ?? "name";
        setActiveField(firstField);
        addBotMessage(fieldPrompts[firstField]);
    };

    const submitLead = async (data: LeadData) => {
        try {
            const response = await fetch("/api/chatbot/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    source: "Website chatbot",
                    pageUrl: window.location.href,
                }),
            });

            if (!response.ok) {
                throw new Error("Lead submission failed");
            }

            addBotMessage("Thank you. Your details have been shared with the CodM Software team. We will contact you shortly.");
            setLeadData(initialLead);
            setLeadMode(false);
            setActiveField(null);
        } catch {
            addBotMessage("I saved your details in the chat, but the lead submission did not complete. Please contact sales@codmsoftware.com or WhatsApp +91 9871717425.");
        }
    };

    const handleLeadInput = async (value: string) => {
        if (!activeField) {
            startLeadCapture();
            return;
        }

        const updatedLead = { ...leadData, [activeField]: value };
        setLeadData(updatedLead);

        const missingField = leadFields.find((field) => !updatedLead[field].trim());

        if (missingField) {
            setActiveField(missingField);
            addBotMessage(fieldPrompts[missingField]);
            return;
        }

        const summary = leadFields.map((field) => `${fieldLabels[field]}: ${updatedLead[field]}`).join("\n");
        addBotMessage(`Perfect. I have captured your details:\n${summary}`);
        await submitLead(updatedLead);
    };

    const streamAiResponse = async (nextMessages: Message[]) => {
        const botMessageId = addMessage("bot", "");
        setIsTyping(true);
        let streamedText = "";

        try {
            const response = await fetch("/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId: sessionId.current,
                    pageUrl: window.location.href,
                    messages: toApiMessages(nextMessages),
                }),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => null) as { message?: string } | null;
                throw new Error(error?.message || "CodM AI could not answer right now.");
            }

            if (!response.body) {
                throw new Error("CodM AI did not return a response body.");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                streamedText += decoder.decode(value, { stream: true });
                replaceMessage(botMessageId, streamedText);
            }

            if (!streamedText.trim()) {
                throw new Error("CodM AI returned an empty response.");
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "CodM AI could not answer right now.";
            replaceMessage(botMessageId, `${message} You can still reach CodM at sales@codmsoftware.com or WhatsApp +91 9871717425.`);
        } finally {
            setIsTyping(false);
        }
    };

    const sendMessage = async (text: string) => {
        const cleanText = text.trim();
        if (!cleanText || isTyping) return;

        const userMessage: Message = { id: messageId.current++, role: "user", text: cleanText };
        const nextMessages = [...messages, userMessage];

        setMessages(nextMessages);
        setInput("");

        if (leadMode) {
            await handleLeadInput(cleanText);
            return;
        }

        await streamAiResponse(nextMessages);

        if (shouldStartLeadCapture(cleanText)) {
            window.setTimeout(startLeadCapture, 500);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void sendMessage(input);
    };

    return (
        <div className={`codm-chatbot ${isOpen ? "is-open" : ""}`} aria-live="polite">
            {isOpen && (
                <section className="codm-chatbot-panel" aria-label="CodM Software chatbot">
                    <header className="codm-chatbot-header">
                        <div>
                            <span>CodM Software&apos;s AI</span>
                            <strong>CodM AI Assistant</strong>
                        </div>
                        <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
                            <i className="fa-solid fa-xmark" aria-hidden="true" />
                        </button>
                    </header>

                    <div className="codm-chatbot-messages" role="log" aria-label="Chat messages">
                        {messages.map((message) => (
                            <div className={`codm-chatbot-message ${message.role}`} key={message.id}>
                                {message.text
                                    ? message.text.split("\n").map((line, index) => <p key={`${message.id}-${index}`}>{line}</p>)
                                    : <p>Thinking...</p>}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="codm-chatbot-message bot typing" aria-label="CodM AI is typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="codm-chatbot-quick-replies" aria-label="Suggested questions">
                        {quickReplies.map((reply) => (
                            <button type="button" key={reply} onClick={() => void sendMessage(reply)} disabled={isTyping}>
                                {reply}
                            </button>
                        ))}
                    </div>

                    <div className="codm-chatbot-ctas">
                        <button type="button" onClick={startLeadCapture} disabled={isTyping}>Book Consultation</button>
                        <button type="button" onClick={() => void sendMessage("Request demo")} disabled={isTyping}>Request Demo</button>
                        <a href="mailto:sales@codmsoftware.com">Contact Sales</a>
                    </div>

                    <form className="codm-chatbot-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder={leadMode && activeField ? fieldPrompts[activeField] : "Ask CodM AI anything..."}
                            aria-label="Chat message"
                            disabled={isTyping}
                        />
                        <button type="submit" aria-label="Send message" disabled={isTyping || !input.trim()}>
                            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                        </button>
                    </form>
                </section>
            )}

            <button className="codm-chatbot-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label="Open CodM chatbot">
                <i className="fa-solid fa-comments" aria-hidden="true" />
                <span>AI Chat</span>
            </button>
        </div>
    );
}
