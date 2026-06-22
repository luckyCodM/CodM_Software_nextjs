import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

const route = "/salesforce-fsc-strategy-advisory-india";

export const metadata: Metadata = {
    title: "Salesforce Certified FSC Consulting in India | CodM Software",
    description:
        "CodM Software helps financial institutions optimize operations, improve adoption, enhance customer engagement and maximize Salesforce FSC performance.",
    keywords:
        "Salesforce FSC strategy consulting India, Financial Services Cloud advisory, Salesforce FSC optimization, FSC user adoption consulting, financial CRM strategy India",
    alternates: {
        canonical: route,
    },
    openGraph: {
        title: "Salesforce FSC Strategy and Advisory Consulting in India",
        description:
            "Align Salesforce Financial Services Cloud with operational goals, client engagement, analytics, adoption and long-term growth.",
        url: `https://codmsoftware.com${route}`,
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/service/financial-services.png",
                width: 750,
                height: 404,
                alt: "Salesforce Financial Services Cloud strategy consulting",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Certified FSC Consulting in India",
        description:
            "Strategic Salesforce FSC consulting for operations, analytics, adoption, client engagement and continuous optimization.",
        images: ["/assets/img/service/financial-services.png"],
    },
};

type AdvisoryArea = {
    eyebrow: string;
    title: string;
    description: string;
    icon: string;
    items: Array<{
        title: string;
        description: string;
    }>;
};

const strategyBenefits = [
    "Business process assessment and analysis",
    "Salesforce capability evaluation",
    "Digital transformation consulting",
    "Future-state architecture planning",
    "Growth-focused technology roadmap",
    "Stakeholder alignment workshops",
];

const advisoryAreas: AdvisoryArea[] = [
    {
        eyebrow: "Process Excellence",
        title: "Optimize Financial Operations with Salesforce FSC",
        description:
            "Efficient operations are critical for exceptional financial services. Our consultants streamline workflows, eliminate friction and improve collaboration so teams gain productivity, speed and operational visibility.",
        icon: "fa-solid fa-gears",
        items: [
            {
                title: "Workflow Optimization Consulting",
                description: "Evaluate existing processes and recommend improvements that reduce manual effort and improve operational efficiency.",
            },
            {
                title: "Client Onboarding Enhancement",
                description: "Streamline onboarding journeys to create a faster, clearer and more consistent customer experience.",
            },
            {
                title: "Service Process Improvement",
                description: "Identify process gaps and practical improvements that help teams deliver better service.",
            },
            {
                title: "Productivity Assessment",
                description: "Improve employee productivity through stronger Salesforce usage and process alignment.",
            },
            {
                title: "Operational Efficiency Reviews",
                description: "Analyze workflows and remove bottlenecks that slow delivery, decisions and customer response.",
            },
            {
                title: "Collaboration Framework Design",
                description: "Improve communication and workflow coordination across financial service teams.",
            },
        ],
    },
    {
        eyebrow: "Data Intelligence",
        title: "Transform Financial Data into Actionable Insights",
        description:
            "Financial organizations process vast amounts of data every day. CodM Software builds reporting and analytics frameworks that improve performance visibility, customer understanding and decision confidence.",
        icon: "fa-solid fa-chart-mixed",
        items: [
            {
                title: "Dashboard Strategy Consulting",
                description: "Design reporting frameworks that clarify business performance and customer activity.",
            },
            {
                title: "Performance Tracking Solutions",
                description: "Define meaningful KPIs and metrics that make business success easier to measure.",
            },
            {
                title: "Customer Analytics Guidance",
                description: "Turn customer data into useful insights that support stronger relationships and engagement.",
            },
            {
                title: "Data-Driven Decision Support",
                description: "Help leadership teams use Salesforce data to make informed, confident decisions.",
            },
            {
                title: "Reporting Optimization Services",
                description: "Improve reporting structures so teams can access accurate information with less effort.",
            },
            {
                title: "Business Intelligence Consulting",
                description: "Transform everyday business data into practical insights for growth and improvement.",
            },
        ],
    },
    {
        eyebrow: "User Adoption",
        title: "Drive Salesforce Adoption Across Financial Teams",
        description:
            "Platform value depends on confident, consistent use. We combine adoption assessment, enablement and change guidance to help financial teams engage with Salesforce and sustain better ways of working.",
        icon: "fa-solid fa-users-gear",
        items: [
            {
                title: "User Adoption Assessment",
                description: "Evaluate usage patterns and identify opportunities to improve engagement and productivity.",
            },
            {
                title: "Training and Enablement Support",
                description: "Provide practical guidance that helps users become more confident and effective in Salesforce.",
            },
            {
                title: "Change Management Consulting",
                description: "Support smooth transitions, encourage user acceptance and reduce resistance to change.",
            },
            {
                title: "Best Practice Recommendations",
                description: "Share proven Salesforce practices that help teams work efficiently and gain more platform value.",
            },
            {
                title: "Role-Based Usage Optimization",
                description: "Align Salesforce features with the responsibilities and workflows of each team.",
            },
            {
                title: "Continuous Adoption Monitoring",
                description: "Monitor adoption trends and recommend improvements that sustain long-term engagement.",
            },
        ],
    },
    {
        eyebrow: "Client Engagement",
        title: "Strengthen Customer Relationships with Salesforce FSC",
        description:
            "Salesforce Financial Services Cloud helps institutions understand client needs and relationship dynamics. We shape engagement strategies that improve communication, service consistency, trust and retention.",
        icon: "fa-solid fa-handshake",
        items: [
            {
                title: "Relationship Management Consulting",
                description: "Build stronger client relationships through engagement strategies focused on long-term trust.",
            },
            {
                title: "Customer Journey Optimization",
                description: "Improve customer interactions throughout the financial services lifecycle.",
            },
            {
                title: "Engagement Strategy Development",
                description: "Establish consistent communication approaches that strengthen customer experiences.",
            },
            {
                title: "Service Experience Enhancement",
                description: "Improve responsiveness, service quality and overall client satisfaction.",
            },
            {
                title: "Retention Improvement Support",
                description: "Develop practical strategies that encourage loyalty and durable client relationships.",
            },
            {
                title: "Customer-Centric Process Design",
                description: "Align Salesforce processes with customer expectations and business objectives.",
            },
        ],
    },
    {
        eyebrow: "Continuous Growth",
        title: "Ongoing Salesforce FSC Optimization and Enhancement",
        description:
            "As business needs evolve, Salesforce should evolve with them. Our ongoing advisory support identifies improvement opportunities, strengthens performance and prepares your FSC environment for future growth.",
        icon: "fa-solid fa-arrow-trend-up",
        items: [
            {
                title: "Platform Health Reviews",
                description: "Assess the environment regularly and identify improvements that support business goals.",
            },
            {
                title: "Performance Enhancement Consulting",
                description: "Recommend practical strategies that improve efficiency, usability and user experience.",
            },
            {
                title: "Scalability Planning Support",
                description: "Prepare Salesforce for future growth and changing business requirements.",
            },
            {
                title: "Release Readiness Guidance",
                description: "Evaluate new Salesforce features and adopt relevant capabilities with minimal disruption.",
            },
            {
                title: "Continuous Improvement Consulting",
                description: "Provide ongoing recommendations that keep FSC aligned with changing business needs.",
            },
            {
                title: "Long-Term Success Planning",
                description: "Maximize Salesforce value through proactive planning and continuous optimization.",
            },
        ],
    },
];

const roadmap = [
    ["01", "Assess", "Review processes, platform usage, data, stakeholders and transformation goals."],
    ["02", "Align", "Connect FSC capabilities with business priorities and measurable outcomes."],
    ["03", "Activate", "Improve workflows, insights, engagement and role-based platform use."],
    ["04", "Advance", "Monitor performance and continuously refine the roadmap as needs evolve."],
];

const institutions = [
    ["Banking", "Relationship-led retail, commercial and business banking experiences.", "fa-solid fa-building-columns"],
    ["Wealth Management", "Advisor productivity, household context and personalized client engagement.", "fa-solid fa-chart-line"],
    ["Insurance", "Connected policyholder service, relationship visibility and operational coordination.", "fa-solid fa-shield-halved"],
    ["Lending", "Clearer borrower journeys, onboarding workflows and service collaboration.", "fa-solid fa-hand-holding-dollar"],
    ["Investment Advisory", "Consistent communications, relationship planning and client retention.", "fa-solid fa-briefcase"],
    ["Financial Services", "Scalable operating models supported by data, adoption and continuous improvement.", "fa-solid fa-coins"],
];

const faqs = [
    {
        question: "What is Salesforce Financial Services Cloud consulting?",
        answer:
            "Salesforce Financial Services Cloud consulting helps financial institutions align FSC capabilities with business goals. Consultants assess processes, define strategic priorities, improve platform usage and guide optimization so organizations achieve measurable, sustainable value.",
    },
    {
        question: "Why should financial institutions hire Salesforce FSC consultants?",
        answer:
            "FSC consultants bring Salesforce knowledge together with an understanding of financial services operations. They help reduce transformation risk, improve workflows, strengthen adoption and apply relevant best practices to business challenges.",
    },
    {
        question: "How does Salesforce FSC improve financial operations?",
        answer:
            "Financial Services Cloud centralizes client and relationship information, supports connected workflows and improves collaboration across teams. Better visibility and process alignment can increase efficiency, speed service delivery and support stronger customer outcomes.",
    },
    {
        question: "Can Salesforce FSC support banks, wealth managers and insurance companies?",
        answer:
            "Yes. Salesforce Financial Services Cloud supports banks, wealth management firms, insurance providers, lenders and investment advisory organizations. Its industry capabilities can be aligned with each institution's processes and client relationships.",
    },
    {
        question: "How can consulting services improve Salesforce user adoption?",
        answer:
            "Consultants assess usage barriers, provide role-based enablement, guide change management and recommend practical improvements. A structured adoption approach helps users gain confidence, work more consistently and realize greater platform value.",
    },
    {
        question: "Why choose CodM Software for Salesforce Financial Cloud consulting in India?",
        answer:
            "CodM Software combines certified Salesforce expertise with experience supporting financial services organizations. Our advisory approach focuses on strategic alignment, operational efficiency, adoption, client engagement and long-term optimization.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce FSC Strategy and Advisory Consulting in India",
    serviceType: "Salesforce Financial Services Cloud Strategy and Advisory Consulting",
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
        "Salesforce FSC strategy, process optimization, analytics, user adoption, client engagement and continuous improvement consulting.",
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

function AdvisorySection({ area, index }: { area: AdvisoryArea; index: number }) {
    return (
        <section className={`fsc-advisory-section fsc-advisory-area ${index % 2 === 1 ? "fsc-advisory-area-soft" : ""}`}>
            <div className="container">
                <div className="fsc-advisory-area-heading">
                    <span className="fsc-advisory-area-icon" aria-hidden="true">
                        <i className={area.icon} />
                    </span>
                    <div>
                        <p className="fsc-advisory-eyebrow">{area.eyebrow}</p>
                        <h2>{area.title}</h2>
                    </div>
                    <p>{area.description}</p>
                </div>
                <div className="fsc-advisory-capability-grid tw-grid tw-gap-4">
                    {area.items.map((item, itemIndex) => (
                        <article className="fsc-advisory-capability" key={item.title}>
                            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function SalesforceFscStrategyAdvisoryIndiaPage() {
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

            <div className="fsc-advisory-page tw-overflow-hidden">
                <section className="fsc-advisory-hero">
                    <div className="container tw-relative tw-z-[2]">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <p className="fsc-advisory-eyebrow">Salesforce FSC Strategy and Advisory in India</p>
                                <h1>Your Salesforce Financial Cloud Consulting Partner in India</h1>
                                <p className="fsc-advisory-lead">
                                    Unlock the full potential of Salesforce Financial Services Cloud with expert consulting tailored to your business goals. Improve efficiency, adoption, engagement and long-term platform success.
                                </p>
                                <div className="fsc-advisory-actions tw-flex tw-flex-wrap tw-gap-3">
                                    <Link href="/contact" className="fsc-advisory-primary">
                                        Plan Your FSC Roadmap
                                        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link href="/salesforce-fsc-consulting-experts-india" className="fsc-advisory-secondary">
                                        Explore FSC Implementation
                                    </Link>
                                </div>
                                <div className="fsc-advisory-proof tw-grid">
                                    <div><strong>360°</strong><span>client context</span></div>
                                    <div><strong>5</strong><span>advisory pillars</span></div>
                                    <div><strong>FSC</strong><span>certified guidance</span></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="fsc-advisory-workspace">
                                    <div className="fsc-advisory-workspace-top">
                                        <div>
                                            <span>Advisory workspace</span>
                                            <strong>FSC Transformation Outlook</strong>
                                        </div>
                                        <span className="fsc-advisory-status"><i aria-hidden="true" /> On track</span>
                                    </div>
                                    <div className="fsc-advisory-score-row">
                                        <div>
                                            <span>Platform alignment</span>
                                            <strong>84%</strong>
                                            <i><b style={{ width: "84%" }} /></i>
                                        </div>
                                        <div>
                                            <span>User adoption</span>
                                            <strong>76%</strong>
                                            <i><b style={{ width: "76%" }} /></i>
                                        </div>
                                        <div>
                                            <span>Client engagement</span>
                                            <strong>91%</strong>
                                            <i><b style={{ width: "91%" }} /></i>
                                        </div>
                                    </div>
                                    <div className="fsc-advisory-priority-list">
                                        <p>Transformation priorities</p>
                                        <div><i className="fa-solid fa-route" aria-hidden="true" /><span>Future-state roadmap</span><b>Strategy</b></div>
                                        <div><i className="fa-solid fa-chart-pie" aria-hidden="true" /><span>Executive insights</span><b>Data</b></div>
                                        <div><i className="fa-solid fa-users" aria-hidden="true" /><span>Role-based enablement</span><b>Adoption</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-advisory-section fsc-advisory-strategy">
                    <div className="container">
                        <div className="row g-4 g-xl-5 align-items-center">
                            <div className="col-lg-6">
                                <p className="fsc-advisory-eyebrow">Strategic Advisory</p>
                                <h2>Financial Services Cloud Strategy and Roadmap Planning</h2>
                                <h3>Align Salesforce FSC with Your Financial Services Business Goals</h3>
                                <p>
                                    A successful FSC initiative needs a clear strategy as well as capable technology. CodM Software evaluates current processes, operational challenges, stakeholder needs and growth plans to define a practical transformation roadmap.
                                </p>
                                <p>
                                    Through structured planning, financial institutions can prioritize initiatives, reduce risk and build a scalable foundation for operational excellence, customer experience and data-driven decisions.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="fsc-advisory-image">
                                    <Image
                                        src="/assets/img/service/financial-services.png"
                                        alt="Salesforce Financial Services Cloud strategy and roadmap"
                                        width={750}
                                        height={404}
                                        sizes="(max-width: 991px) 90vw, 47vw"
                                    />
                                    <div className="fsc-advisory-image-label">
                                        <i className="fa-solid fa-compass-drafting" aria-hidden="true" />
                                        <div>
                                            <strong>Business-led FSC roadmap</strong>
                                            <span>Priorities connected to measurable outcomes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fsc-advisory-benefit-grid tw-grid tw-gap-4">
                            {strategyBenefits.map((benefit) => (
                                <div className="fsc-advisory-benefit" key={benefit}>
                                    <i className="fa-solid fa-check" aria-hidden="true" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fsc-advisory-section fsc-advisory-roadmap">
                    <div className="container">
                        <div className="fsc-advisory-heading tw-mx-auto tw-text-center">
                            <p className="fsc-advisory-eyebrow">Advisory Journey</p>
                            <h2>A Clear Path from Current State to Continuous Value</h2>
                            <p>Every recommendation stays connected to people, processes, data and measurable financial-services outcomes.</p>
                        </div>
                        <div className="fsc-advisory-roadmap-grid tw-grid">
                            {roadmap.map(([number, title, description]) => (
                                <article className="fsc-advisory-roadmap-step" key={number}>
                                    <span>{number}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {advisoryAreas.map((area, index) => (
                    <AdvisorySection area={area} index={index} key={area.eyebrow} />
                ))}

                <section className="fsc-advisory-section fsc-advisory-institutions">
                    <div className="container">
                        <div className="fsc-advisory-heading tw-mx-auto tw-text-center">
                            <p className="fsc-advisory-eyebrow">Financial Services Focus</p>
                            <h2>Advisory Support for Connected Financial Institutions</h2>
                        </div>
                        <div className="fsc-advisory-institution-grid tw-grid tw-gap-4">
                            {institutions.map(([title, description, icon]) => (
                                <article className="fsc-advisory-institution" key={title}>
                                    <i className={icon} aria-hidden="true" />
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fsc-advisory-section fsc-advisory-cta">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-8">
                                <p className="fsc-advisory-eyebrow">Your Next FSC Priority</p>
                                <h2>Turn Salesforce Financial Services Cloud into a Long-Term Business Advantage</h2>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <Link href="/contact" className="fsc-advisory-primary">
                                    Talk to an FSC Advisor
                                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fsc-advisory-section fsc-advisory-faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="fsc-advisory-heading tw-mx-auto tw-text-center">
                                    <p className="fsc-advisory-eyebrow">FAQ</p>
                                    <h2>Salesforce FSC Strategy and Advisory Questions</h2>
                                </div>
                                <div className="accordion fsc-advisory-accordion" id="fscAdvisoryFaq">
                                    {faqs.map((faq, index) => {
                                        const collapseId = `fsc-advisory-faq-${index}`;
                                        const headingId = `fsc-advisory-heading-${index}`;

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
                                                    data-bs-parent="#fscAdvisoryFaq"
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
