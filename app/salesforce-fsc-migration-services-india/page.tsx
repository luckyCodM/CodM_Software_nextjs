import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

const route = "/salesforce-fsc-migration-services-india";

export const metadata: Metadata = {
    title: "Salesforce Financial Services Cloud Migration Services India",
    description:
        "We help financial institutions migrate to Salesforce FSC with secure data transfer, strategic planning, system integrations, compliance guidance and ongoing support.",
    keywords:
        "Salesforce Financial Services Cloud migration India, Salesforce FSC migration services, financial data migration Salesforce, legacy system modernization FSC, Salesforce banking migration",
    alternates: {
        canonical: route,
    },
    openGraph: {
        title: "Salesforce Financial Services Cloud Migration Services India",
        description:
            "Securely migrate financial data, workflows and connected systems to Salesforce Financial Services Cloud with CodM Software.",
        url: `https://codmsoftware.com${route}`,
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/blog/Financial_Services_Cloud.png",
                width: 750,
                height: 400,
                alt: "Salesforce Financial Services Cloud migration services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce FSC Migration Services India",
        description:
            "Strategic planning, secure data transfer, integrations, compliance and adoption support for Salesforce FSC migrations.",
        images: ["/assets/img/blog/Financial_Services_Cloud.png"],
    },
};

type MigrationArea = {
    eyebrow: string;
    title: string;
    description: string;
    icon: string;
    items: Array<{
        title: string;
        description: string;
    }>;
};

const planningBenefits = [
    "Existing system assessment",
    "Migration readiness evaluation",
    "Business requirement analysis",
    "Risk identification planning",
    "Timeline and milestone definition",
    "Resource allocation strategy",
];

const migrationAreas: MigrationArea[] = [
    {
        eyebrow: "Data Migration",
        title: "Migrate Financial Data with Accuracy and Security",
        description:
            "Financial data is one of an institution's most valuable assets. CodM Software follows structured migration practices that protect accuracy, integrity, security and business continuity throughout the transition.",
        icon: "fa-solid fa-database",
        items: [
            {
                title: "Customer Data Migration Consulting",
                description: "Plan and execute secure transfers of customer information while preserving quality and integrity.",
            },
            {
                title: "Financial Record Migration Services",
                description: "Move financial accounts, transactions and related records accurately into Salesforce FSC.",
            },
            {
                title: "Data Validation Support",
                description: "Verify data accuracy and resolve inconsistencies before and after migration.",
            },
            {
                title: "Data Cleansing Guidance",
                description: "Remove duplicate, incomplete and outdated records to improve overall data quality.",
            },
            {
                title: "Migration Risk Management",
                description: "Reduce data loss, migration risk and operational disruption through planned controls.",
            },
            {
                title: "Secure Data Transfer Consulting",
                description: "Protect sensitive financial information with security-focused transfer practices.",
            },
        ],
    },
    {
        eyebrow: "Platform Modernization",
        title: "Transform Legacy Systems into a Modern Financial Platform",
        description:
            "Legacy platforms can restrict visibility, automation and customer responsiveness. We help organizations transition to a connected Salesforce FSC environment designed for efficient operations and future growth.",
        icon: "fa-solid fa-server",
        items: [
            {
                title: "Legacy System Assessment Services",
                description: "Evaluate platforms, processes and infrastructure to clarify modernization opportunities and requirements.",
            },
            {
                title: "Migration Strategy Consulting",
                description: "Create a transition plan aligned with business priorities and technology objectives.",
            },
            {
                title: "Workflow Optimization Support",
                description: "Streamline processes and eliminate inefficiencies before they move into the new environment.",
            },
            {
                title: "Automation Implementation Guidance",
                description: "Identify automation opportunities that improve productivity and reduce manual effort.",
            },
            {
                title: "Scalability Planning Services",
                description: "Design the Salesforce environment to support future growth and evolving needs.",
            },
            {
                title: "Technology Modernization Consulting",
                description: "Use modern Salesforce capabilities to increase innovation and operational efficiency.",
            },
        ],
    },
    {
        eyebrow: "Integration Services",
        title: "Connect Financial Systems for Seamless Operations",
        description:
            "Financial institutions rely on multiple business-critical applications. CodM Software establishes reliable connections between Salesforce FSC and existing systems to improve visibility, collaboration and operational continuity.",
        icon: "fa-solid fa-link",
        items: [
            {
                title: "System Integration Consulting",
                description: "Connect critical systems with a strategy built for continuity and long-term performance.",
            },
            {
                title: "API Implementation Services",
                description: "Securely connect Salesforce with external platforms for smooth, reliable data exchange.",
            },
            {
                title: "Third-Party Application Integration",
                description: "Integrate business applications into a more connected financial-services ecosystem.",
            },
            {
                title: "Data Synchronization Support",
                description: "Keep information accurate and consistent across systems while reducing manual updates.",
            },
            {
                title: "Workflow Integration Guidance",
                description: "Align cross-application workflows to strengthen collaboration and daily operations.",
            },
            {
                title: "Integration Performance Reviews",
                description: "Assess integrations and improve reliability, efficiency and user experience.",
            },
        ],
    },
    {
        eyebrow: "Compliance Support",
        title: "Maintain Regulatory Compliance Throughout Migration",
        description:
            "Security and regulatory obligations remain critical during digital transformation. We help financial institutions protect sensitive information, strengthen governance and prepare controls for confident review.",
        icon: "fa-solid fa-shield-check",
        items: [
            {
                title: "Compliance Assessment Consulting",
                description: "Review relevant obligations and align migration activities with applicable standards.",
            },
            {
                title: "Security Framework Reviews",
                description: "Assess current security controls and recommend improvements that reduce exposure.",
            },
            {
                title: "Data Protection Strategy Support",
                description: "Safeguard sensitive financial information throughout migration using proven practices.",
            },
            {
                title: "Access Control Planning Services",
                description: "Design access structures that balance operational needs with security and compliance.",
            },
            {
                title: "Governance Process Consulting",
                description: "Establish governance practices that support accountability after migration.",
            },
            {
                title: "Audit Readiness Guidance",
                description: "Prepare documentation, controls and processes for internal and regulatory audits.",
            },
        ],
    },
    {
        eyebrow: "User Adoption",
        title: "Maximize Business Value Through Successful Adoption",
        description:
            "Migration succeeds when teams can confidently use the new platform. CodM Software combines role-focused training, change management and knowledge transfer to support a durable transition.",
        icon: "fa-solid fa-users",
        items: [
            {
                title: "User Training Consulting",
                description: "Develop tailored training that helps users apply Salesforce FSC effectively in daily work.",
            },
            {
                title: "Change Management Support",
                description: "Help teams adapt smoothly to new processes, responsibilities and technology.",
            },
            {
                title: "Adoption Strategy Development",
                description: "Create practical plans that encourage platform usage and cross-team engagement.",
            },
            {
                title: "Knowledge Transfer Services",
                description: "Equip internal teams with the resources needed to manage FSC after migration.",
            },
            {
                title: "Process Documentation Support",
                description: "Prepare clear documentation for onboarding, training and ongoing operations.",
            },
            {
                title: "Continuous Improvement Guidance",
                description: "Recommend ongoing enhancements that strengthen adoption and long-term platform value.",
            },
        ],
    },
];

const migrationPhases = [
    ["01", "Discover", "Inventory systems, data, integrations, controls and business dependencies."],
    ["02", "Prepare", "Cleanse data, map relationships, define governance and build migration runbooks."],
    ["03", "Validate", "Test transfers, reconcile records, verify security and confirm operational readiness."],
    ["04", "Cut Over", "Execute the transition with controlled sequencing, communication and support."],
    ["05", "Stabilize", "Monitor data, integrations and adoption while resolving post-launch priorities."],
];

const readinessChecks = [
    ["Data quality", "Validated", "fa-solid fa-circle-check"],
    ["Security controls", "Reviewed", "fa-solid fa-shield-halved"],
    ["Integration maps", "Connected", "fa-solid fa-diagram-project"],
    ["Cutover runbook", "Ready", "fa-solid fa-list-check"],
];

const faqs = [
    {
        question: "What is Salesforce Financial Services Cloud migration?",
        answer:
            "Salesforce Financial Services Cloud migration transfers customer data, financial records, business processes and workflows from legacy or existing platforms into Salesforce FSC. The goal is a unified, scalable environment with stronger relationship management, efficiency and visibility.",
    },
    {
        question: "Why do financial institutions migrate to Salesforce Financial Services Cloud?",
        answer:
            "Financial institutions migrate to gain industry-specific capabilities for banking, lending, insurance and wealth management. FSC can centralize customer information, automate processes, improve engagement and provide greater flexibility for evolving business needs.",
    },
    {
        question: "How long does a Financial Services Cloud migration project take?",
        answer:
            "Timelines depend on data volume, source-system complexity, integration requirements and business scope. Focused migrations may take weeks, while large enterprise programs can take several months. Detailed planning, testing and validation are essential.",
    },
    {
        question: "Can sensitive financial data be migrated securely?",
        answer:
            "Yes. Sensitive financial data can be migrated securely with appropriate access controls, encryption and transfer practices, validation procedures, governance and audit documentation. A structured approach helps preserve data integrity and compliance.",
    },
    {
        question: "Will migration impact daily business operations?",
        answer:
            "A carefully designed migration minimizes disruption through phased delivery, testing environments, reconciliation, cutover planning and change management. Business continuity requirements should be defined early and verified throughout the program.",
    },
    {
        question: "Why choose CodM Software for Salesforce Financial Services Cloud migration in India?",
        answer:
            "CodM Software provides Salesforce expertise and structured migration methods across planning, data transfer, modernization, integrations, compliance and adoption. We focus on secure, scalable and business-aligned outcomes.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Financial Services Cloud Migration Services India",
    serviceType: "Salesforce Financial Services Cloud Migration",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    areaServed: {
        "@type": "Country",
        name: "India",
    },
    url: `https://codmsoftware.com${route}`,
    description:
        "Salesforce FSC migration planning, secure financial data transfer, platform modernization, integrations, compliance and user adoption services.",
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

function MigrationAreaSection({ area, index }: { area: MigrationArea; index: number }) {
    return (
        <section className={`fsc-migration-section fsc-migration-area ${index % 2 === 1 ? "fsc-migration-area-soft" : ""}`}>
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-start">
                    <div className="col-lg-4">
                        <div className="fsc-migration-area-intro">
                            <span className="fsc-migration-area-icon" aria-hidden="true">
                                <i className={area.icon} />
                            </span>
                            <p className="fsc-migration-eyebrow">{area.eyebrow}</p>
                            <h2>{area.title}</h2>
                            <p>{area.description}</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="fsc-migration-capability-grid tw-grid tw-gap-4">
                            {area.items.map((item, itemIndex) => (
                                <article className="fsc-migration-capability" key={item.title}>
                                    <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function SalesforceFscMigrationServicesIndiaPage() {
    return (
        <Layout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="fsc-migration-page tw-overflow-hidden">
                <section className="fsc-migration-hero">
                    <div className="container tw-relative tw-z-[2]">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <p className="fsc-migration-eyebrow">Salesforce Financial Services Cloud Migration, India</p>
                                <h1>Accelerate Your Salesforce FSC Migration with Trusted Experts in India</h1>
                                <p className="fsc-migration-lead">
                                    Modernize financial operations with secure Salesforce Financial Services Cloud migration services covering data, processes, integrations, compliance and adoption.
                                </p>
                                <div className="fsc-migration-actions tw-flex tw-flex-wrap tw-gap-3">
                                    <Link href="/contact" className="fsc-migration-primary">
                                        Assess Migration Readiness
                                        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link href="/salesforce-fsc-strategy-advisory-india" className="fsc-migration-secondary">
                                        Explore FSC Advisory
                                    </Link>
                                </div>
                                <div className="fsc-migration-assurance tw-flex tw-flex-wrap">
                                    <span><i className="fa-solid fa-shield-check" aria-hidden="true" /> Secure transfer</span>
                                    <span><i className="fa-solid fa-scale-balanced" aria-hidden="true" /> Compliance aligned</span>
                                    <span><i className="fa-solid fa-arrows-rotate" aria-hidden="true" /> Continuity focused</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fsc-migration-console">
                                    <div className="fsc-migration-console-top">
                                        <div>
                                            <span>Migration control center</span>
                                            <strong>FSC Transition Readiness</strong>
                                        </div>
                                        <span className="fsc-migration-live"><i aria-hidden="true" /> Protected</span>
                                    </div>
                                    <div className="fsc-migration-flow">
                                        <div className="fsc-migration-system">
                                            <i className="fa-solid fa-server" aria-hidden="true" />
                                            <span>Legacy systems</span>
                                            <small>Core + CRM + files</small>
                                        </div>
                                        <div className="fsc-migration-pipeline" aria-hidden="true">
                                            <i /><i /><i />
                                            <span>Validate and transfer</span>
                                        </div>
                                        <div className="fsc-migration-system fsc-migration-system-target">
                                            <i className="fa-brands fa-salesforce" aria-hidden="true" />
                                            <span>Salesforce FSC</span>
                                            <small>Connected platform</small>
                                        </div>
                                    </div>
                                    <div className="fsc-migration-checks">
                                        {readinessChecks.map(([label, status, icon]) => (
                                            <div key={label}>
                                                <i className={icon} aria-hidden="true" />
                                                <span>{label}</span>
                                                <b>{status}</b>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="fsc-migration-console-footer">
                                        <span>Readiness score</span>
                                        <strong>92%</strong>
                                        <i><b /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-migration-section fsc-migration-planning">
                    <div className="container">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="fsc-migration-image">
                                    <Image
                                        src="/assets/img/blog/Financial_Services_Cloud.png"
                                        alt="Salesforce Financial Services Cloud migration planning"
                                        width={750}
                                        height={400}
                                        sizes="(max-width: 991px) 90vw, 47vw"
                                    />
                                    <div className="fsc-migration-image-label">
                                        <i className="fa-solid fa-route" aria-hidden="true" />
                                        <div>
                                            <strong>Migration roadmap</strong>
                                            <span>Dependencies, risks and milestones aligned</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="fsc-migration-eyebrow">Migration Planning</p>
                                <h2>Build a Strategic Migration Roadmap</h2>
                                <h3>Establish a Clear Foundation for a Successful Salesforce Migration</h3>
                                <p>
                                    A successful FSC migration begins with a detailed assessment of systems, processes, data structures and business objectives. CodM Software identifies priorities, dependencies, integration requirements, risks and compliance considerations before execution begins.
                                </p>
                                <p>
                                    Clear timelines, milestones and governance practices help financial institutions minimize disruption and build a transition plan that supports long-term success.
                                </p>
                            </div>
                        </div>
                        <div className="fsc-migration-benefit-grid tw-grid tw-gap-4">
                            {planningBenefits.map((benefit) => (
                                <div className="fsc-migration-benefit" key={benefit}>
                                    <i className="fa-solid fa-check" aria-hidden="true" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fsc-migration-section fsc-migration-phases">
                    <div className="container">
                        <div className="fsc-migration-heading tw-mx-auto tw-text-center">
                            <p className="fsc-migration-eyebrow">Migration Lifecycle</p>
                            <h2>A Controlled Path from Discovery to Stabilization</h2>
                            <p>Each phase adds evidence, reduces uncertainty and protects business continuity before the next decision point.</p>
                        </div>
                        <div className="fsc-migration-phase-grid tw-grid">
                            {migrationPhases.map(([number, title, description]) => (
                                <article className="fsc-migration-phase" key={number}>
                                    <span>{number}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {migrationAreas.map((area, index) => (
                    <MigrationAreaSection area={area} index={index} key={area.eyebrow} />
                ))}

                <section className="fsc-migration-section fsc-migration-cta">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-8">
                                <p className="fsc-migration-eyebrow">Plan a Confident Transition</p>
                                <h2>Move Financial Data and Operations to Salesforce FSC with Control</h2>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <Link href="/contact" className="fsc-migration-primary">
                                    Start Your Migration Plan
                                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-migration-section fsc-migration-faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="fsc-migration-heading tw-mx-auto tw-text-center">
                                    <p className="fsc-migration-eyebrow">FAQ</p>
                                    <h2>Salesforce Financial Services Cloud Migration Questions</h2>
                                </div>
                                <div className="accordion fsc-migration-accordion" id="fscMigrationFaq">
                                    {faqs.map((faq, index) => {
                                        const collapseId = `fsc-migration-faq-${index}`;
                                        const headingId = `fsc-migration-heading-${index}`;

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
                                                    data-bs-parent="#fscMigrationFaq"
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
            </div>
        </Layout>
    );
}
