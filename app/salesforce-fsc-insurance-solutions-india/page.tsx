import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

const route = "/salesforce-fsc-insurance-solutions-india";

export const metadata: Metadata = {
    title: "Salesforce Financial Services Cloud for Insurance in India",
    description:
        "Transform insurance operations with Salesforce Financial Services Cloud. Improve customer engagement, automate processes and enhance policy management.",
    keywords:
        "Salesforce Financial Services Cloud insurance India, Salesforce FSC insurance solutions, insurance CRM Salesforce, policyholder relationship management, insurance policy servicing Salesforce",
    alternates: { canonical: route },
    openGraph: {
        title: "Salesforce Financial Services Cloud for Insurance in India",
        description:
            "Unify policyholder data, streamline policy servicing and improve insurance customer experiences with Salesforce FSC.",
        url: `https://codmsoftware.com${route}`,
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/blog/Financial_Services_Cloud.png",
                width: 750,
                height: 400,
                alt: "Salesforce Financial Services Cloud for insurance",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce FSC for Insurance in India",
        description:
            "Connected policyholder data, efficient policy servicing, intelligent automation and personalized insurance engagement.",
        images: ["/assets/img/blog/Financial_Services_Cloud.png"],
    },
};

type InsuranceArea = {
    eyebrow: string;
    title: string;
    description: string;
    icon: string;
    items: Array<{ title: string; description: string }>;
};

const challenges = [
    "Fragmented customer information management",
    "Slow policy servicing processes",
    "Limited visibility into customer interactions",
    "Increasing compliance requirements",
    "Rising customer service expectations",
    "Manual and repetitive workflows",
];

const insuranceAreas: InsuranceArea[] = [
    {
        eyebrow: "Unified Platform",
        title: "Build a Complete View of Policyholders and Relationships",
        description:
            "Bring customer, policy and interaction data together so insurance teams can make informed decisions, collaborate effectively and deliver consistent service across every touchpoint.",
        icon: "fa-solid fa-circle-nodes",
        items: [
            { title: "Customer Data Consolidation", description: "Centralize customer and policy information so teams can access and manage it more easily." },
            { title: "360-Degree Customer Visibility", description: "Create a complete view of policyholder relationships, policies and interactions." },
            { title: "Relationship Management Strategy", description: "Track policyholders, beneficiaries and related stakeholders with useful context." },
            { title: "Personalized Service Enablement", description: "Use customer insights to deliver relevant communications and service experiences." },
            { title: "Cross-Team Collaboration Support", description: "Improve information sharing and coordination across insurance teams." },
            { title: "Reporting and Analytics Consulting", description: "Build dashboards that clarify engagement, service and business performance." },
        ],
    },
    {
        eyebrow: "Policy Management",
        title: "Optimize Policy Servicing and Lifecycle Management",
        description:
            "Streamline policy-related activities, reduce manual effort and improve responsiveness throughout the customer lifecycle with well-designed Salesforce workflows.",
        icon: "fa-solid fa-file-shield",
        items: [
            { title: "Policy Process Consulting", description: "Design efficient workflows for policy servicing and day-to-day management." },
            { title: "Renewal Management Support", description: "Streamline renewals to strengthen retention and improve renewal experiences." },
            { title: "Service Request Optimization", description: "Handle inquiries and policy-related requests faster and more consistently." },
            { title: "Workflow Automation Services", description: "Reduce manual tasks and let teams focus on higher-value policyholder work." },
            { title: "Document Management Integration", description: "Provide secure, convenient access to policy documents and customer records." },
            { title: "Operational Efficiency Improvements", description: "Simplify processes and improve consistency across policy operations." },
        ],
    },
    {
        eyebrow: "Customer Experience",
        title: "Deliver Personalized Engagement Across Customer Journeys",
        description:
            "Use connected policyholder insight to create timely, relevant experiences that increase satisfaction, loyalty and long-term relationship value.",
        icon: "fa-solid fa-heart-circle-check",
        items: [
            { title: "Customer Engagement Consulting", description: "Create personalized communication strategies that strengthen relationships." },
            { title: "Agent Productivity Enhancement", description: "Equip agents and advisors to respond faster with better customer context." },
            { title: "Journey Mapping Support", description: "Map and improve customer journeys across important insurance moments." },
            { title: "Omnichannel Experience Planning", description: "Connect interactions across phone, email, web and other service channels." },
            { title: "Customer Retention Strategies", description: "Improve satisfaction and encourage durable policyholder loyalty." },
            { title: "Relationship Growth Enablement", description: "Identify relevant engagement and relationship growth opportunities." },
        ],
    },
    {
        eyebrow: "Intelligent Automation",
        title: "Improve Efficiency Through Automation and Compliance",
        description:
            "Automate routine insurance processes while preserving governance, accountability and operational control across teams.",
        icon: "fa-solid fa-gears",
        items: [
            { title: "Workflow Automation Consulting", description: "Automate business processes to reduce manual effort and improve accuracy." },
            { title: "Approval Process Optimization", description: "Accelerate reviews and decisions with streamlined approval workflows." },
            { title: "Compliance Support Services", description: "Configure processes that support governance and operational consistency." },
            { title: "Task Management Automation", description: "Automate repetitive activities so teams can focus on customer value." },
            { title: "Activity Tracking Configuration", description: "Improve progress visibility and accountability across operations." },
            { title: "Process Improvement Recommendations", description: "Refine workflows and eliminate inefficiencies through continuous review." },
        ],
    },
    {
        eyebrow: "Expert Services",
        title: "End-to-End Salesforce Financial Services Cloud Consulting",
        description:
            "CodM Software combines strategic planning, insurance-focused solution design and continuous optimization to help organizations realize lasting FSC value.",
        icon: "fa-solid fa-people-group",
        items: [
            { title: "Implementation Consulting Services", description: "Deploy FSC efficiently with structured delivery and minimal disruption." },
            { title: "Solution Design Expertise", description: "Design scalable solutions aligned with insurance business objectives." },
            { title: "Platform Customization Services", description: "Tailor FSC features and workflows to insurance operating needs." },
            { title: "Integration Consulting Support", description: "Connect Salesforce with policy, claims, document and business systems." },
            { title: "User Adoption Enablement", description: "Support adoption through training, knowledge sharing and practical guidance." },
            { title: "Managed Services and Optimization", description: "Continuously support and improve the Salesforce investment." },
        ],
    },
];

const operatingModel = [
    ["01", "Understand", "Map policyholder journeys, service gaps, systems and regulatory needs."],
    ["02", "Connect", "Unify customer, policy, relationship and interaction information."],
    ["03", "Optimize", "Improve servicing, renewals, engagement and agent productivity."],
    ["04", "Automate", "Reduce repetitive work while maintaining controls and visibility."],
];

const policySignals = [
    ["Policy portfolio", "Connected", "fa-solid fa-folder-tree"],
    ["Renewal activity", "12 upcoming", "fa-solid fa-arrows-rotate"],
    ["Service requests", "8 active", "fa-solid fa-headset"],
    ["Policyholder health", "Strong", "fa-solid fa-heart-pulse"],
];

const faqs = [
    {
        question: "What is Salesforce Financial Services Cloud for Insurance?",
        answer:
            "Salesforce Financial Services Cloud is an industry-focused CRM platform that helps insurance organizations manage policyholder relationships, policies and service operations. It centralizes customer information and interactions to improve visibility, efficiency and personalized service.",
    },
    {
        question: "How does Financial Services Cloud benefit insurance companies in India?",
        answer:
            "FSC helps insurers centralize data, automate routine processes, improve policyholder visibility and deliver more responsive service. These capabilities support stronger engagement, operational efficiency and scalable growth.",
    },
    {
        question: "Can Financial Services Cloud integrate with existing insurance systems?",
        answer:
            "Yes. FSC can connect with policy administration, claims management, document repositories and other insurance applications. Integration improves data consistency, reduces silos and creates a more connected operating environment.",
    },
    {
        question: "Is Salesforce Financial Services Cloud suitable for insurance brokers and agencies?",
        answer:
            "Yes. Brokers, agencies and advisors can use FSC to manage client relationships, track opportunities, coordinate service and gain deeper visibility into customer needs and policyholder interactions.",
    },
    {
        question: "How does the platform support compliance and governance requirements?",
        answer:
            "Organizations can configure workflows, approvals, activity tracking, access controls and reporting aligned with internal governance practices. Better audit visibility and process consistency support compliance-focused operations.",
    },
    {
        question: "Why choose CodM Software for Salesforce Financial Services Cloud consulting?",
        answer:
            "CodM Software provides Salesforce planning, implementation, customization, integration, adoption and optimization expertise. We focus on scalable insurance solutions that deliver practical and measurable value.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Financial Services Cloud for Insurance in India",
    serviceType: "Salesforce FSC Insurance Consulting",
    provider: { "@type": "Organization", name: "CodM Software", url: "https://codmsoftware.com" },
    areaServed: { "@type": "Country", name: "India" },
    url: `https://codmsoftware.com${route}`,
    description:
        "Salesforce FSC consulting for unified policyholder data, policy servicing, insurance customer experience, automation, compliance and managed optimization.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

function InsuranceAreaSection({ area, index }: { area: InsuranceArea; index: number }) {
    return (
        <section className={`fsc-insurance-section fsc-insurance-area ${index % 2 === 1 ? "fsc-insurance-area-soft" : ""}`}>
            <div className="container">
                <div className="fsc-insurance-area-heading">
                    <span className="fsc-insurance-area-icon" aria-hidden="true"><i className={area.icon} /></span>
                    <div>
                        <p className="fsc-insurance-eyebrow">{area.eyebrow}</p>
                        <h2>{area.title}</h2>
                    </div>
                    <p>{area.description}</p>
                </div>
                <div className="fsc-insurance-capability-grid tw-grid tw-gap-4">
                    {area.items.map((item, itemIndex) => (
                        <article className="fsc-insurance-capability" key={item.title}>
                            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                            <div><h3>{item.title}</h3><p>{item.description}</p></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function SalesforceFscInsuranceSolutionsIndiaPage() {
    return (
        <Layout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="fsc-insurance-page tw-overflow-hidden">
                <section className="fsc-insurance-hero">
                    <div className="container tw-relative tw-z-[2]">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <p className="fsc-insurance-eyebrow">Salesforce Financial Services Cloud for Insurance, India</p>
                                <h1>Transform Insurance Operations with Salesforce Financial Services Cloud</h1>
                                <p className="fsc-insurance-lead">
                                    Empower your insurance business with connected policyholder insight, efficient servicing, intelligent automation and personalized customer experiences.
                                </p>
                                <div className="fsc-insurance-actions tw-flex tw-flex-wrap tw-gap-3">
                                    <Link href="/contact" className="fsc-insurance-primary">
                                        Plan Your Insurance Solution <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link href="/case-studies/insurance-salesforce-platform-modernization" className="fsc-insurance-secondary">
                                        View Insurance Case Study
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fsc-insurance-console">
                                    <div className="fsc-insurance-console-top">
                                        <div><span>Policyholder workspace</span><strong>Relationship and Service View</strong></div>
                                        <span className="fsc-insurance-status"><i aria-hidden="true" /> Connected</span>
                                    </div>
                                    <div className="fsc-insurance-profile">
                                        <span className="fsc-insurance-avatar"><i className="fa-solid fa-user-shield" aria-hidden="true" /></span>
                                        <div><strong>Policyholder 360</strong><span>Household, policies and interactions</span></div>
                                        <b>Active</b>
                                    </div>
                                    <div className="fsc-insurance-signal-grid">
                                        {policySignals.map(([label, value, icon]) => (
                                            <div key={label}><i className={icon} aria-hidden="true" /><span>{label}</span><strong>{value}</strong></div>
                                        ))}
                                    </div>
                                    <div className="fsc-insurance-timeline">
                                        <p>Recent relationship activity</p>
                                        <div><i /><span>Renewal review completed</span><time>Today</time></div>
                                        <div><i /><span>Policy document shared</span><time>Yesterday</time></div>
                                        <div><i /><span>Service request resolved</span><time>3 days</time></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-insurance-section fsc-insurance-challenges">
                    <div className="container">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <p className="fsc-insurance-eyebrow">Insurance Challenges</p>
                                <h2>Address Modern Insurance Industry Challenges with Confidence</h2>
                                <h3>Navigate Evolving Customer and Regulatory Expectations</h3>
                                <p>
                                    Insurance customers expect responsive, personalized and connected service while providers manage growing data volumes, regulatory requirements and operational pressure. FSC brings customer, policy and interaction data together to improve visibility, trust and long-term growth.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="fsc-insurance-image">
                                    <Image
                                        src="/assets/img/blog/Financial_Services_Cloud.png"
                                        alt="Salesforce Financial Services Cloud insurance operations"
                                        width={750}
                                        height={400}
                                        sizes="(max-width: 991px) 90vw, 47vw"
                                    />
                                    <div className="fsc-insurance-image-label">
                                        <i className="fa-solid fa-shield-heart" aria-hidden="true" />
                                        <div><strong>Connected policyholder service</strong><span>Customer, policy and interaction context in one place</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fsc-insurance-challenge-grid tw-grid tw-gap-4">
                            {challenges.map((challenge) => (
                                <div className="fsc-insurance-challenge" key={challenge}>
                                    <i className="fa-solid fa-check" aria-hidden="true" /><span>{challenge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fsc-insurance-section fsc-insurance-model">
                    <div className="container">
                        <div className="fsc-insurance-heading tw-mx-auto tw-text-center">
                            <p className="fsc-insurance-eyebrow">Insurance Operating Model</p>
                            <h2>From Fragmented Service to Connected Policyholder Value</h2>
                        </div>
                        <div className="fsc-insurance-model-grid tw-grid">
                            {operatingModel.map(([number, title, description]) => (
                                <article className="fsc-insurance-model-step" key={number}>
                                    <span>{number}</span><h3>{title}</h3><p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {insuranceAreas.map((area, index) => <InsuranceAreaSection area={area} index={index} key={area.eyebrow} />)}

                <section className="fsc-insurance-section fsc-insurance-cta">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-8">
                                <p className="fsc-insurance-eyebrow">Modernize Insurance Service</p>
                                <h2>Build Stronger Policyholder Relationships on Salesforce FSC</h2>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <Link href="/contact" className="fsc-insurance-primary">
                                    Talk to an FSC Insurance Expert <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-insurance-section fsc-insurance-faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="fsc-insurance-heading tw-mx-auto tw-text-center">
                                    <p className="fsc-insurance-eyebrow">FAQ</p>
                                    <h2>Salesforce Financial Services Cloud for Insurance Questions</h2>
                                </div>
                                <div className="accordion fsc-insurance-accordion" id="fscInsuranceFaq">
                                    {faqs.map((faq, index) => {
                                        const collapseId = `fsc-insurance-faq-${index}`;
                                        const headingId = `fsc-insurance-heading-${index}`;
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
                                                    >{faq.question}</button>
                                                </h3>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#fscInsuranceFaq"
                                                ><div className="accordion-body">{faq.answer}</div></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
