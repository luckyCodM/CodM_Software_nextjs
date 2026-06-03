"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type Role = "bot" | "user";

type Message = {
    id: number;
    role: Role;
    text: string;
};

type LeadField = "name" | "email" | "phone" | "company" | "message";

type LeadData = Record<LeadField, string>;

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
    "Salesforce implementation",
    "Agentforce AI services",
    "Financial Services Cloud",
    "Education Cloud",
    "Integrations",
    "Staff augmentation",
    "Book consultation",
];

function getServiceResponse(input: string): string {
    const value = input.toLowerCase();

    if (value.includes("agentforce") || value.includes(" ai")) {
        return "CodM Software helps businesses use Agentforce AI to automate workflows, improve service productivity, and create smarter Salesforce experiences. We can help with AI strategy, setup, integration, testing, and ongoing optimization.";
    }

    if (value.includes("financial") || value.includes("fsc") || value.includes("banking")) {
        return "For Financial Services Cloud, CodM Software supports implementation, client lifecycle management, advisor workflows, secure role-based access, integrations, automation, and reporting for financial teams.";
    }

    if (value.includes("education")) {
        return "CodM Software implements Salesforce Education Cloud for admissions, student engagement, support workflows, lifecycle tracking, communication, and connected campus operations.";
    }

    if (value.includes("integration") || value.includes("api") || value.includes("mulesoft")) {
        return "We help integrate Salesforce with websites, ERP systems, finance platforms, marketing tools, service platforms, REST APIs, and third-party business applications to create reliable data flow.";
    }

    if (value.includes("staff") || value.includes("augmentation") || value.includes("developer")) {
        return "CodM Software provides Salesforce staffing and staff augmentation for admins, developers, consultants, QA, architects, and support resources based on your project needs.";
    }

    if (value.includes("implementation") || value.includes("crm") || value.includes("consulting")) {
        return "CodM Software provides Salesforce consulting and CRM implementation services including discovery, solution architecture, configuration, customization, automation, migration, integrations, testing, training, and support.";
    }

    if (value.includes("demo") || value.includes("consultation") || value.includes("sales") || value.includes("contact")) {
        return "Absolutely. I can collect a few details and have our Salesforce team contact you for a consultation or demo.";
    }

    if (value.includes("whatsapp")) {
        return "You can also reach CodM Software on WhatsApp at +91 9871717425. I can still capture your details here for faster follow-up.";
    }

    return "CodM Software helps businesses with Salesforce consulting, CRM implementation, Agentforce AI, Financial Services Cloud, Education Cloud, integrations, Customer 360, automation, and staffing solutions. Tell me what you are trying to solve, and I will guide you.";
}

function shouldStartLeadCapture(input: string): boolean {
    const value = input.toLowerCase();
    return ["book", "consultation", "demo", "contact sales", "talk to", "call me", "lead", "pricing", "quote"].some((keyword) => value.includes(keyword));
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: "bot",
            text: "Hi, I am CodM Assistant. I can help with Salesforce consulting, CRM implementation, Agentforce AI, integrations, and connect you with our sales team.",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [leadMode, setLeadMode] = useState(false);
    const [leadData, setLeadData] = useState<LeadData>(initialLead);
    const [activeField, setActiveField] = useState<LeadField | null>(null);
    const messageId = useRef(2);

    const nextMissingField = useMemo(() => leadFields.find((field) => !leadData[field].trim()) ?? null, [leadData]);

    const addMessage = (role: Role, text: string) => {
        setMessages((previous) => [...previous, { id: messageId.current++, role, text }]);
    };

    const addBotMessage = (text: string) => {
        setIsTyping(true);
        window.setTimeout(() => {
            setIsTyping(false);
            addMessage("bot", text);
        }, 450);
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

    const sendMessage = async (text: string) => {
        const cleanText = text.trim();
        if (!cleanText) return;

        addMessage("user", cleanText);
        setInput("");

        if (leadMode) {
            await handleLeadInput(cleanText);
            return;
        }

        const response = getServiceResponse(cleanText);
        addBotMessage(response);

        if (shouldStartLeadCapture(cleanText)) {
            window.setTimeout(startLeadCapture, 700);
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
                            <span>CodM Assistant</span>
                            <strong>Salesforce help desk</strong>
                        </div>
                        <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
                            <i className="fa-solid fa-xmark" aria-hidden="true" />
                        </button>
                    </header>

                    <div className="codm-chatbot-messages">
                        {messages.map((message) => (
                            <div className={`codm-chatbot-message ${message.role}`} key={message.id}>
                                {message.text.split("\n").map((line) => <p key={line}>{line}</p>)}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="codm-chatbot-message bot typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        )}
                    </div>

                    <div className="codm-chatbot-quick-replies" aria-label="Suggested questions">
                        {quickReplies.map((reply) => (
                            <button type="button" key={reply} onClick={() => void sendMessage(reply)}>
                                {reply}
                            </button>
                        ))}
                    </div>

                    <div className="codm-chatbot-ctas">
                        <button type="button" onClick={startLeadCapture}>Book Consultation</button>
                        <button type="button" onClick={() => void sendMessage("Request demo")}>Request Demo</button>
                        <a href="mailto:sales@codmsoftware.com">Contact Sales</a>
                    </div>

                    <form className="codm-chatbot-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder={leadMode && activeField ? fieldPrompts[activeField] : "Ask about Salesforce services..."}
                            aria-label="Chat message"
                        />
                        <button type="submit" aria-label="Send message">
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
