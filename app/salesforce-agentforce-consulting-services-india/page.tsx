import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

const pageUrl = "https://codmsoftware.com/salesforce-agentforce-consulting-services-india";

export const metadata: Metadata = {
    title: "Salesforce Agentforce Consulting Services in India",
    description:
        "Accelerate AI adoption with Salesforce Agentforce consulting services from CodM Software. Implement, customize, optimize and support Agentforce solutions across India.",
    keywords:
        "Salesforce Agentforce consulting services India, Agentforce strategy consulting, Agentforce architecture, custom AI agent development, Agentforce managed services, Salesforce AI consulting India",
    alternates: {
        canonical: "/salesforce-agentforce-consulting-services-india",
    },
    openGraph: {
        title: "Salesforce Agentforce Consulting Services in India",
        description:
            "Plan, implement, customize and optimize Salesforce Agentforce with experienced consultants in India.",
        url: pageUrl,
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/service/agentforce_ai.png",
                width: 1200,
                height: 630,
                alt: "Salesforce Agentforce consulting services by CodM Software",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Agentforce Consulting Services in India",
        description:
            "Build secure, scalable AI agents with Agentforce strategy, implementation and managed services.",
        images: ["https://codmsoftware.com/assets/img/service/agentforce_ai.png"],
    },
};

const strategyPoints = [
    ["Readiness Assessment", "Evaluate your Salesforce environment, data, teams and processes before introducing AI agents."],
    ["Process Evaluation", "Identify repetitive work, service bottlenecks and high-value opportunities for intelligent automation."],
    ["AI Opportunity Mapping", "Prioritize use cases according to business impact, feasibility, risk and user value."],
    ["Automation Strategy", "Define how agents, workflows and human teams should work together across the organization."],
    ["Ecosystem Alignment", "Connect the Agentforce roadmap with your Salesforce clouds, data model and existing integrations."],
    ["Implementation Roadmap", "Create phased milestones for design, testing, deployment, adoption and continuous improvement."],
];

const consultingTracks = [
    {
        eyebrow: "Solution Design",
        title: "Agentforce Architecture & Solution Design",
        intro:
            "A strong technical foundation is essential for Agentforce success. We design secure, scalable architectures that fit your Salesforce environment and support long-term business growth.",
        icon: "fa-solid fa-sitemap",
        items: [
            ["Salesforce Architecture Consulting", "Design an Agentforce architecture that supports current requirements and future platform growth."],
            ["Data Model Optimization", "Structure Salesforce data so agents can produce accurate, contextual and reliable outcomes."],
            ["Integration Strategy", "Plan secure connectivity between Agentforce, Salesforce products and third-party systems."],
            ["Security & Compliance", "Define access controls, governance practices and safeguards aligned with organizational requirements."],
            ["Workflow Design", "Create consistent automation frameworks that reduce manual effort and support human oversight."],
            ["Scalability Planning", "Prepare the platform for additional agents, users, data volumes and evolving business use cases."],
        ],
    },
    {
        eyebrow: "Platform Setup",
        title: "Salesforce Agentforce Implementation Services",
        intro:
            "Our consultants manage the path from platform configuration through validation and deployment, keeping each AI agent aligned with real operational goals.",
        icon: "fa-solid fa-gears",
        items: [
            ["Agentforce Configuration", "Configure Agentforce capabilities around your business processes and service requirements."],
            ["Workflow Automation Setup", "Implement automated workflows that increase productivity and reduce repetitive tasks."],
            ["Salesforce Integration", "Connect Agentforce with existing Salesforce applications for consistent, governed data flow."],
            ["AI Agent Deployment", "Release reliable agents with controlled access, clear responsibilities and measurable objectives."],
            ["Business Rule Configuration", "Translate policies and operating logic into dependable agent actions and automation rules."],
            ["Testing & Validation", "Test conversations, actions, data access, escalation paths and edge cases before launch."],
        ],
    },
    {
        eyebrow: "Intelligent Automation",
        title: "Custom AI Agent Development & Customization",
        intro:
            "Every organization has distinct workflows and customer expectations. We tailor Agentforce experiences to automate complex processes while preserving clarity and control.",
        icon: "fa-solid fa-wand-magic-sparkles",
        items: [
            ["Custom Agent Development", "Build agents around the tasks, teams and customer journeys that matter to your business."],
            ["Conversation Design", "Create natural interactions that help users find information and complete work efficiently."],
            ["Business Logic Customization", "Align agent behaviors with your operational processes, policies and approval requirements."],
            ["Prompt Optimization", "Refine instructions and prompts for more accurate, relevant and consistent agent responses."],
            ["Industry-Specific Solutions", "Adapt Agentforce to sector-specific workflows, terminology, governance and service expectations."],
            ["Performance Tuning", "Improve response quality, workflow completion and user experience using measured outcomes."],
        ],
    },
    {
        eyebrow: "User Adoption",
        title: "Drive Successful Agentforce Adoption",
        intro:
            "AI creates value when people understand how to use it. We prepare teams with practical training, change support, documentation and ownership models.",
        icon: "fa-solid fa-people-group",
        items: [
            ["User Training Programs", "Deliver hands-on training that helps employees use Agentforce confidently in daily work."],
            ["Adoption Strategy", "Create a practical engagement plan that supports meaningful use across business teams."],
            ["Change Management", "Address concerns, communicate value and guide teams through new AI-assisted workflows."],
            ["Knowledge Transfer", "Equip internal owners to manage, monitor and improve Agentforce after launch."],
            ["Documentation Assistance", "Produce clear operating guides, onboarding resources and support documentation."],
            ["Best-Practice Guidance", "Apply proven recommendations for governance, adoption and sustainable Agentforce value."],
        ],
    },
    {
        eyebrow: "Ongoing Support",
        title: "Agentforce Optimization & Managed Services",
        intro:
            "Agentforce environments need continuous attention as data, business requirements and platform capabilities evolve. Our managed services keep performance and value moving forward.",
        icon: "fa-solid fa-chart-line",
        items: [
            ["Platform Health Assessments", "Review configurations, workflows and usage to identify practical improvement opportunities."],
            ["Performance Monitoring", "Track reliability and efficiency, then recommend focused enhancements."],
            ["Feature Enhancement", "Evaluate new Agentforce capabilities against changing business requirements."],
            ["Continuous Improvement", "Maintain a prioritized optimization backlog based on adoption and performance evidence."],
            ["Issue Resolution", "Troubleshoot platform and automation issues quickly to reduce operational disruption."],
            ["Scalability Consulting", "Adapt architecture, governance and support models as Agentforce usage expands."],
        ],
    },
];

const faqs = [
    {
        question: "What is Salesforce Agentforce?",
        answer:
            "Salesforce Agentforce is an AI-powered platform for building and deploying intelligent agents that automate tasks, assist employees and improve customer interactions using governed Salesforce data and automation.",
    },
    {
        question: "How can Agentforce benefit my business?",
        answer:
            "Agentforce can reduce repetitive work, improve response times, support employees with contextual recommendations and help organizations scale customer and operational processes more consistently.",
    },
    {
        question: "Do you provide Agentforce implementation services in India?",
        answer:
            "Yes. CodM Software provides Agentforce strategy, architecture, configuration, customization, integration, testing, deployment, adoption and managed support services across India.",
    },
    {
        question: "Can Agentforce integrate with existing Salesforce products?",
        answer:
            "Yes. Agentforce can work with Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud and other Salesforce products, as well as approved external systems and third-party applications.",
    },
    {
        question: "Do you customize AI agents for specific industries?",
        answer:
            "Yes. We tailor agents to industry processes, terminology, service models and governance requirements across financial services, healthcare, education, retail, manufacturing and other sectors.",
    },
    {
        question: "Do you provide post-implementation support?",
        answer:
            "Yes. Our post-launch services include monitoring, issue resolution, prompt and workflow optimization, platform health reviews, feature planning and ongoing scalability guidance.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Agentforce Consulting Services in India",
    url: pageUrl,
    description:
        "Salesforce Agentforce strategy, architecture, implementation, customization, adoption and managed services from CodM Software.",
    serviceType: "Salesforce Agentforce Consulting Services",
    areaServed: {
        "@type": "Country",
        name: "India",
    },
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Agentforce Consulting Capabilities",
        itemListElement: consultingTracks.map((track) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: track.title,
                description: track.intro,
            },
        })),
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function SalesforceAgentforceConsultingServicesIndiaPage() {
    return (
        <Layout>
            <Script
                id="agentforce-consulting-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="agentforce-consulting-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="agentforce-consulting-page tw-overflow-hidden">
                <section className="agentforce-consulting-hero tw-relative" aria-labelledby="agentforce-consulting-title">
                    <div className="container tw-relative tw-z-[2]">
                        <div className="row align-items-center g-4 g-xl-5">
                            <div className="col-lg-7">
                                <p className="agentforce-consulting-eyebrow">Salesforce Agentforce Consulting Services in India</p>
                                <h1 id="agentforce-consulting-title">Drive Business Growth with Trusted AI Agents</h1>
                                <p className="agentforce-consulting-lead">
                                    Transform customer experiences and streamline operations with Salesforce Agentforce.
                                    CodM Software helps businesses plan, implement and optimize AI-powered agents that
                                    improve efficiency, adoption and measurable growth.
                                </p>
                                <div className="agentforce-consulting-actions tw-flex tw-flex-wrap tw-gap-3">
                                    <Link href="/contact" className="agentforce-consulting-primary">
                                        Plan Your Agentforce Strategy
                                        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link
                                        href="/salesforce-agentforce-implementation-partner-india"
                                        className="agentforce-consulting-secondary"
                                    >
                                        Explore Implementation
                                    </Link>
                                </div>
                                <div className="agentforce-consulting-trust tw-grid tw-gap-3" aria-label="Agentforce consulting capabilities">
                                    <span><i className="fa-solid fa-shield-halved" aria-hidden="true" /> Secure by design</span>
                                    <span><i className="fa-solid fa-diagram-project" aria-hidden="true" /> Salesforce aligned</span>
                                    <span><i className="fa-solid fa-arrow-trend-up" aria-hidden="true" /> Built to scale</span>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="agentforce-consulting-visual tw-relative">
                                    <Image
                                        src="/assets/img/service/agentforce_ai.png"
                                        alt="Salesforce Agentforce AI consulting and automation"
                                        width={700}
                                        height={560}
                                        priority
                                    />
                                    <div className="agentforce-consulting-signal signal-one">
                                        <i className="fa-solid fa-compass" aria-hidden="true" />
                                        <span>Strategy</span>
                                    </div>
                                    <div className="agentforce-consulting-signal signal-two">
                                        <i className="fa-solid fa-robot" aria-hidden="true" />
                                        <span>Custom agents</span>
                                    </div>
                                    <div className="agentforce-consulting-signal signal-three">
                                        <i className="fa-solid fa-infinity" aria-hidden="true" />
                                        <span>Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="agentforce-consulting-section agentforce-consulting-strategy" aria-labelledby="agentforce-strategy-title">
                    <div className="container">
                        <div className="row g-4 g-xl-5 align-items-start">
                            <div className="col-lg-5">
                                <div className="agentforce-consulting-intro">
                                    <p className="agentforce-consulting-eyebrow">Strategic Planning</p>
                                    <h2 id="agentforce-strategy-title">Salesforce Agentforce Strategy & Consulting</h2>
                                    <h3>Build a strong foundation for successful Agentforce adoption.</h3>
                                    <p>
                                        Successful adoption starts with understanding how your business operates and
                                        where AI can make the greatest impact. We evaluate processes, identify automation
                                        opportunities and create a practical roadmap aligned with operational priorities
                                        and future growth.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="agentforce-consulting-strategy-grid tw-grid tw-gap-4">
                                    {strategyPoints.map(([title, text], index) => (
                                        <article key={title}>
                                            <span>{String(index + 1).padStart(2, "0")}</span>
                                            <div>
                                                <h3>{title}</h3>
                                                <p>{text}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {consultingTracks.map((track, index) => (
                    <section
                        className={`agentforce-consulting-section ${index % 2 === 0 ? "agentforce-consulting-soft" : ""}`}
                        key={track.title}
                        aria-labelledby={`agentforce-track-${index}`}
                    >
                        <div className="container">
                            <div className={`row g-4 g-xl-5 align-items-start ${index % 2 === 1 ? "flex-lg-row-reverse" : ""}`}>
                                <div className="col-lg-4">
                                    <div className="agentforce-consulting-track-head">
                                        <div className="agentforce-consulting-track-icon">
                                            <i className={track.icon} aria-hidden="true" />
                                        </div>
                                        <p className="agentforce-consulting-eyebrow">{track.eyebrow}</p>
                                        <h2 id={`agentforce-track-${index}`}>{track.title}</h2>
                                        <p>{track.intro}</p>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="agentforce-consulting-service-grid tw-grid tw-gap-4">
                                        {track.items.map(([title, text]) => (
                                            <article key={title}>
                                                <i className="fa-solid fa-check" aria-hidden="true" />
                                                <div>
                                                    <h3>{title}</h3>
                                                    <p>{text}</p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                <section className="agentforce-consulting-outcome" aria-labelledby="agentforce-outcome-title">
                    <div className="container">
                        <div className="agentforce-consulting-outcome-inner">
                            <div>
                                <p className="agentforce-consulting-eyebrow">From Idea to Impact</p>
                                <h2 id="agentforce-outcome-title">One consulting partner across the Agentforce lifecycle.</h2>
                                <p>
                                    Bring strategy, architecture, deployment, adoption and optimization into one
                                    connected program with clear ownership and measurable outcomes.
                                </p>
                            </div>
                            <div className="agentforce-consulting-lifecycle" aria-label="Agentforce consulting lifecycle">
                                {["Discover", "Design", "Deploy", "Adopt", "Optimize"].map((step, index) => (
                                    <div key={step}>
                                        <span>{index + 1}</span>
                                        <strong>{step}</strong>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="agentforce-consulting-primary">
                                Start a Consultation
                                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="agentforce-consulting-section agentforce-consulting-faq" aria-labelledby="agentforce-faq-title">
                    <div className="container">
                        <div className="agentforce-consulting-heading tw-mx-auto tw-text-center">
                            <p className="agentforce-consulting-eyebrow">Frequently Asked Questions</p>
                            <h2 id="agentforce-faq-title">Salesforce Agentforce Consulting Questions</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="accordion agentforce-consulting-accordion" id="agentforceConsultingFaq">
                                    {faqs.map((faq, index) => {
                                        const collapseId = `agentforce-consulting-faq-${index}`;
                                        const headingId = `agentforce-consulting-heading-${index}`;

                                        return (
                                            <div className="accordion-item" key={faq.question}>
                                                <h3 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={index === 0 ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h3>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#agentforceConsultingFaq"
                                                >
                                                    <div className="accordion-body">{faq.answer}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
