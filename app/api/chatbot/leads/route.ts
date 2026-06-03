import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    source?: string;
    pageUrl?: string;
};

type StoredLead = Required<Pick<LeadPayload, "name" | "email" | "phone" | "company" | "message">> & {
    id: string;
    source: string;
    pageUrl: string;
    createdAt: string;
};

const leadFilePath = path.join(process.cwd(), "data", "chatbot-leads.json");

function cleanValue(value: unknown) {
    return typeof value === "string" ? value.trim().slice(0, 1000) : "";
}

function validateLead(payload: LeadPayload) {
    const lead = {
        name: cleanValue(payload.name),
        email: cleanValue(payload.email),
        phone: cleanValue(payload.phone),
        company: cleanValue(payload.company),
        message: cleanValue(payload.message),
        source: cleanValue(payload.source) || "Website chatbot",
        pageUrl: cleanValue(payload.pageUrl),
    };

    const missingFields = ["name", "email", "phone", "company", "message"].filter((field) => !lead[field as keyof typeof lead]);
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);

    return { lead, missingFields, emailLooksValid };
}

async function readStoredLeads() {
    try {
        const content = await readFile(leadFilePath, "utf8");
        return JSON.parse(content) as StoredLead[];
    } catch {
        return [];
    }
}

async function storeLead(lead: StoredLead) {
    await mkdir(path.dirname(leadFilePath), { recursive: true });
    const existingLeads = await readStoredLeads();
    existingLeads.unshift(lead);
    await writeFile(leadFilePath, JSON.stringify(existingLeads.slice(0, 500), null, 2));
}

async function forwardLead(lead: StoredLead) {
    const requests: Promise<Response>[] = [];

    if (process.env.CODM_LEAD_WEBHOOK_URL) {
        requests.push(fetch(process.env.CODM_LEAD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lead),
        }));
    }

    if (process.env.SALESFORCE_LEAD_API_URL && process.env.SALESFORCE_ACCESS_TOKEN) {
        requests.push(fetch(process.env.SALESFORCE_LEAD_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.SALESFORCE_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({
                FirstName: lead.name.split(" ").slice(0, -1).join(" ") || lead.name,
                LastName: lead.name.split(" ").slice(-1)[0] || "Website Lead",
                Email: lead.email,
                Phone: lead.phone,
                Company: lead.company,
                Description: lead.message,
                LeadSource: lead.source,
                Website: lead.pageUrl,
            }),
        }));
    }

    if (requests.length) {
        await Promise.allSettled(requests);
    }
}

export async function POST(request: NextRequest) {
    try {
        const payload = await request.json() as LeadPayload;
        const { lead, missingFields, emailLooksValid } = validateLead(payload);

        if (missingFields.length || !emailLooksValid) {
            return NextResponse.json({
                ok: false,
                message: "Please provide a valid name, email, phone, company and requirement.",
                missingFields,
            }, { status: 400 });
        }

        const storedLead: StoredLead = {
            id: `lead_${Date.now()}`,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            company: lead.company,
            message: lead.message,
            source: lead.source,
            pageUrl: lead.pageUrl,
            createdAt: new Date().toISOString(),
        };

        await storeLead(storedLead);
        await forwardLead(storedLead);

        return NextResponse.json({ ok: true, id: storedLead.id });
    } catch {
        return NextResponse.json({ ok: false, message: "Unable to save chatbot lead." }, { status: 500 });
    }
}
