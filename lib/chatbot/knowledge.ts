import { blogPosts } from "@/app/blogs/blogData";
import { caseStudies } from "@/app/case-studies/caseStudyData";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
    role: ChatRole;
    content: string;
};

export type KnowledgeDocument = {
    id: string;
    title: string;
    type: "service" | "industry" | "case-study" | "blog" | "solution";
    url: string;
    summary: string;
    keywords: string[];
    body: string;
};

export type RetrievalResult = {
    query: string;
    intent: string;
    documents: KnowledgeDocument[];
};

const stopWords = new Set([
    "a", "about", "an", "and", "are", "as", "at", "be", "but", "by", "can", "do", "for", "from",
    "help", "how", "i", "in", "is", "it", "me", "my", "need", "of", "on", "or", "our", "please",
    "the", "to", "we", "what", "with", "you", "your",
]);

const serviceDocuments: KnowledgeDocument[] = [
    {
        id: "service-salesforce-consulting",
        title: "Salesforce Consulting and CRM Implementation",
        type: "service",
        url: "/salesforce-consulting",
        summary: "CodM Software provides Salesforce consulting, CRM implementation, configuration, customization, automation, integrations, data migration, testing, training and managed support.",
        keywords: ["salesforce", "consulting", "crm", "implementation", "automation", "configuration", "customization"],
        body: "CodM Software helps companies plan, implement and optimize Salesforce around real business workflows. Typical work includes discovery workshops, solution architecture, data model design, Lightning configuration, Flow automation, Apex and LWC customization, dashboards, security, testing, training and post-launch support.",
    },
    {
        id: "service-agentforce-ai",
        title: "Agentforce AI and Salesforce AI Solutions",
        type: "solution",
        url: "/salesforce-agentforce-ai-company-india",
        summary: "CodM Software helps businesses implement Agentforce AI, AI chatbots, CRM-aware automation, prompt workflows, service routing, lead capture and governed AI responses.",
        keywords: ["agentforce", "ai", "chatbot", "salesforce ai", "automation", "prompt", "agent"],
        body: "CodM Software builds AI-powered Salesforce experiences that answer questions, qualify leads, reduce repeated support work, guide users through business processes and escalate complex requests to human teams. The implementation should include governance, fallback handling, CRM context, testing and analytics.",
    },
    {
        id: "service-financial-services-cloud",
        title: "Salesforce Financial Services Cloud",
        type: "industry",
        url: "/salesforce-financial-services-cloud-consultant",
        summary: "Financial Services Cloud work includes Client 360, advisor workflows, role-based access, sales cadence, secure data models, integrations, onboarding and reporting.",
        keywords: ["financial services cloud", "fsc", "banking", "wealth", "asset management", "advisor", "client 360"],
        body: "For financial service teams, CodM Software implements Financial Services Cloud with secure relationship management, client lifecycle tracking, advisor productivity tools, permission architecture, compliance-aware access, automation and dashboards.",
    },
    {
        id: "service-education-cloud",
        title: "Salesforce Education Cloud",
        type: "industry",
        url: "/education-cloud",
        summary: "Education Cloud solutions support admissions, student lifecycle, engagement, service workflows, communication, reporting and connected campus operations.",
        keywords: ["education cloud", "admissions", "student", "university", "college", "campus"],
        body: "CodM Software helps education teams use Salesforce to manage admissions, student support, engagement journeys, communication, case handling, lifecycle visibility and reporting across departments.",
    },
    {
        id: "service-customer-360",
        title: "Salesforce Customer 360 and CRM Integrations",
        type: "service",
        url: "/customer-360-degree",
        summary: "Customer 360 connects sales, service, marketing and operations data into a unified Salesforce view with cleaner reporting and automation.",
        keywords: ["customer 360", "integration", "api", "data migration", "crm", "single customer view"],
        body: "CodM Software connects Salesforce with websites, ERP, finance systems, marketing tools, support platforms and custom APIs so teams can see a trusted customer record, reduce duplicate work and make faster decisions.",
    },
    {
        id: "service-omnistudio-vlocity",
        title: "OmniStudio and Salesforce Industry Cloud",
        type: "service",
        url: "/omnistudio-vlocity",
        summary: "OmniStudio and Vlocity work includes guided flows, OmniScripts, DataRaptors, Integration Procedures and industry-specific customer journeys.",
        keywords: ["omnistudio", "vlocity", "industry cloud", "omniscript", "dataraptor", "integration procedure"],
        body: "CodM Software supports Salesforce Industry Cloud and OmniStudio implementations for guided digital journeys, quote or intake flows, data transformations, integrations and reusable industry processes.",
    },
    {
        id: "service-staff-augmentation",
        title: "Salesforce Staff Augmentation",
        type: "service",
        url: "/contact",
        summary: "CodM Software can provide Salesforce admins, developers, consultants, QA engineers, architects and support resources for project-based or ongoing needs.",
        keywords: ["staff", "augmentation", "developer", "admin", "consultant", "architect", "qa", "hiring"],
        body: "For teams that need delivery capacity, CodM Software can support with Salesforce developers, administrators, consultants, architects, QA and support resources aligned to project scope, timeline and skills.",
    },
    {
        id: "service-field-history-tracking",
        title: "Salesforce Field History Tracking",
        type: "solution",
        url: "/salesforce-field-history-tracking",
        summary: "CodM Software offers Salesforce field history tracking guidance and tools to audit important data changes and improve CRM governance.",
        keywords: ["field history tracking", "audit", "governance", "salesforce fields", "tracking"],
        body: "Salesforce field history tracking helps organizations monitor important field changes, support audits and understand data updates. CodM Software can help configure tracking and governance around critical CRM objects.",
    },
];

function compactText(value: string) {
    return value.replace(/\s+/g, " ").trim();
}

function tokenize(value: string) {
    return compactText(value)
        .toLowerCase()
        .replace(/[^a-z0-9+#.\s-]/g, " ")
        .split(/\s+/)
        .filter((token) => token.length > 2 && !stopWords.has(token));
}

function detectIntent(query: string) {
    const value = query.toLowerCase();

    if (/(price|pricing|cost|quote|proposal|budget)/.test(value)) return "pricing";
    if (/(demo|consultation|call|contact|talk|meeting|book)/.test(value)) return "consultation";
    if (/(agentforce|ai|chatbot|automation)/.test(value)) return "agentforce-ai";
    if (/(financial|fsc|bank|wealth|asset|insurance)/.test(value)) return "financial-services";
    if (/(education|student|admission|university|college)/.test(value)) return "education";
    if (/(integration|api|mulesoft|erp|website|third-party)/.test(value)) return "integration";
    if (/(case study|example|result|client|proof)/.test(value)) return "case-study";
    if (/(staff|developer|admin|architect|resource|hire)/.test(value)) return "staffing";

    return "general-consulting";
}

const blogDocuments: KnowledgeDocument[] = blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    type: "blog",
    url: `/blogs/${post.slug}`,
    summary: post.excerpt,
    keywords: [post.category, ...post.keywords, ...post.relatedServices.map((service) => service.label)],
    body: compactText([
        post.metaDescription,
        post.sections.map((section) => [
            section.heading,
            ...section.body,
            ...(section.bullets ?? []),
        ].join(" ")).join(" "),
        post.faqs.map((faq) => `${faq.question} ${faq.answer}`).join(" "),
    ].join(" ")),
}));

const caseStudyDocuments: KnowledgeDocument[] = caseStudies.map((study) => ({
    id: `case-${study.slug}`,
    title: study.title,
    type: "case-study",
    url: `/case-studies/${study.slug}`,
    summary: study.summary,
    keywords: [study.category, study.industry, ...study.services, ...study.technologies],
    body: compactText([
        study.description,
        study.client.name,
        study.client.overview,
        study.challenges.join(" "),
        study.solution.join(" "),
        study.features.join(" "),
        study.metrics.map((metric) => `${metric.value} ${metric.label}`).join(" "),
        study.comparison.map((item) => `${item.before} became ${item.after}`).join(" "),
    ].join(" ")),
}));

const knowledgeBase = [...serviceDocuments, ...blogDocuments, ...caseStudyDocuments];

function scoreDocument(document: KnowledgeDocument, query: string, tokens: string[], intent: string) {
    const haystack = `${document.title} ${document.summary} ${document.keywords.join(" ")} ${document.body}`.toLowerCase();
    let score = 0;

    for (const token of tokens) {
        if (document.title.toLowerCase().includes(token)) score += 8;
        if (document.keywords.join(" ").toLowerCase().includes(token)) score += 5;
        if (document.summary.toLowerCase().includes(token)) score += 3;
        if (haystack.includes(token)) score += 1;
    }

    if (query.length > 8 && haystack.includes(query.toLowerCase())) score += 12;
    if (intent === "case-study" && document.type === "case-study") score += 8;
    if (intent === "agentforce-ai" && /agentforce|ai|automation/.test(haystack)) score += 8;
    if (intent === "financial-services" && /financial|fsc|bank|wealth|asset|insurance/.test(haystack)) score += 8;
    if (intent === "education" && /education|student|admission|campus/.test(haystack)) score += 8;
    if (intent === "integration" && /integration|api|mulesoft|customer 360/.test(haystack)) score += 8;
    if (intent === "staffing" && /staff|developer|admin|architect|resource/.test(haystack)) score += 8;

    return score;
}

export function retrieveKnowledge(messages: ChatMessage[], limit = 7): RetrievalResult {
    const userMessages = messages.filter((message) => message.role === "user");
    const latestQuestion = userMessages.at(-1)?.content ?? "";
    const previousContext = userMessages.slice(-4, -1).map((message) => message.content).join(" ");
    const query = compactText(`${latestQuestion} ${previousContext}`);
    const intent = detectIntent(query);
    const tokens = tokenize(query);

    const scored = knowledgeBase
        .map((document) => ({
            document,
            score: scoreDocument(document, query, tokens, intent),
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.document);

    return {
        query,
        intent,
        documents: scored.length ? scored : serviceDocuments.slice(0, limit),
    };
}

export function formatRetrievedContext(result: RetrievalResult) {
    return result.documents
        .map((document, index) => [
            `[${index + 1}] ${document.title}`,
            `Type: ${document.type}`,
            `URL: ${document.url}`,
            `Summary: ${document.summary}`,
            `Details: ${document.body.slice(0, 900)}`,
        ].join("\n"))
        .join("\n\n");
}
