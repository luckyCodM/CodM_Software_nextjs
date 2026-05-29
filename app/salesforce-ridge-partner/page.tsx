import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Salesforce Ridge Partner | Salesforce Consulting Company in Noida",
    description:
        "CodM Software is a Salesforce Ridge Partner and Salesforce consulting company in Noida delivering Salesforce implementation services, CRM solutions, integrations and support.",
    keywords:
        "Salesforce Ridge Partner, Salesforce Consulting Company in Noida, Salesforce Implementation Services, Salesforce CRM Solutions, Salesforce Partner India, Salesforce CRM consulting",
    alternates: {
        canonical: "/salesforce-ridge-partner",
    },
    openGraph: {
        title: "Salesforce Ridge Partner | CodM Software",
        description:
            "Work with CodM Software, a Salesforce Ridge Partner delivering trusted Salesforce implementation services and scalable CRM solutions.",
        url: "https://codmsoftware.com/salesforce-ridge-partner",
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/logo/srplogo.png",
                width: 512,
                height: 512,
                alt: "Salesforce Ridge Partner badge for CodM Software",
            },
        ],
    },
};

const trustMetrics = [
    { value: "2025", label: "Salesforce Ridge Partner recognition" },
    { value: "AppExchange", label: "Globally discoverable Salesforce expertise" },
    { value: "Noida", label: "Salesforce consulting company serving India and global clients" },
];

const serviceHighlights = [
    {
        title: "Salesforce CRM Strategy",
        text: "Map business goals, customer journeys and operational gaps before configuring Salesforce.",
        icon: "fa-solid fa-compass-drafting",
    },
    {
        title: "Implementation Services",
        text: "Launch Sales Cloud, Service Cloud, Experience Cloud and industry solutions with clean architecture.",
        icon: "fa-solid fa-rocket",
    },
    {
        title: "Custom CRM Solutions",
        text: "Build workflows, automations, Lightning components and dashboards around the way your teams work.",
        icon: "fa-solid fa-diagram-project",
    },
    {
        title: "Integration & Data",
        text: "Connect Salesforce with websites, ERPs, marketing tools, payment systems and external APIs.",
        icon: "fa-solid fa-code-branch",
    },
    {
        title: "Support & Optimization",
        text: "Improve adoption, performance, reporting quality and long-term platform governance.",
        icon: "fa-solid fa-headset",
    },
    {
        title: "AppExchange Readiness",
        text: "Plan scalable Salesforce apps with security, packaging and customer trust in mind.",
        icon: "fa-solid fa-store",
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discover",
        text: "We study your business model, CRM users, data flow, revenue process and support needs.",
    },
    {
        step: "02",
        title: "Design",
        text: "We define the right Salesforce architecture, objects, automations, integrations and release plan.",
    },
    {
        step: "03",
        title: "Implement",
        text: "Certified specialists configure, customize, migrate and test the solution with clear checkpoints.",
    },
    {
        step: "04",
        title: "Optimize",
        text: "After launch, we help teams adopt Salesforce, improve reporting and scale the platform safely.",
    },
];

const partnerTiers = [
    { title: "Base", label: "Foundation", text: "Early Salesforce consulting capability and initial delivery history." },
    { title: "Ridge", label: "CodM milestone", text: "Proven delivery, customer success, certifications and trusted implementation experience.", active: true },
    { title: "Crest", label: "Advanced growth", text: "Larger scale delivery, stronger innovation and deeper Salesforce ecosystem impact." },
    { title: "Summit", label: "Top tier", text: "Highest partner excellence with broad customer success and strategic leadership." },
];

const successCards = [
    {
        title: "Faster CRM Decisions",
        text: "Leadership gets cleaner dashboards, connected customer data and reliable reports for daily decisions.",
        icon: "fa-solid fa-chart-simple",
    },
    {
        title: "Better User Adoption",
        text: "Teams receive CRM workflows that feel practical, simple and aligned with the real sales or service process.",
        icon: "fa-solid fa-users-gear",
    },
    {
        title: "Scalable Salesforce Foundation",
        text: "Your implementation is structured for future apps, automation, integration and business expansion.",
        icon: "fa-solid fa-layer-group",
    },
];

const faqs = [
    {
        question: "What is a Salesforce Ridge Partner?",
        answer:
            "A Salesforce Ridge Partner is a consulting partner recognized for proven Salesforce delivery, certified capability, client success and growing ecosystem contribution.",
    },
    {
        question: "Why choose CodM Software for Salesforce implementation services?",
        answer:
            "CodM Software combines consulting, implementation, integration, customization and support experience so clients can move from CRM planning to measurable business outcomes.",
    },
    {
        question: "Does CodM Software work with businesses outside Noida?",
        answer:
            "Yes. CodM Software is a Salesforce consulting company in Noida serving clients across India and global markets through remote and hybrid delivery models.",
    },
    {
        question: "Can CodM Software improve an existing Salesforce CRM setup?",
        answer:
            "Yes. We review your current configuration, data model, automation, integrations and reporting, then improve performance, usability and scalability.",
    },
];

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

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodM Software Salesforce Ridge Partner Services",
    url: "https://codmsoftware.com/salesforce-ridge-partner",
    image: "https://codmsoftware.com/assets/img/logo/srplogo.png",
    description:
        "Salesforce Ridge Partner services including Salesforce implementation, CRM consulting, integration, customization, optimization and support.",
    areaServed: ["India", "United States", "United Kingdom", "Global"],
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    serviceType: [
        "Salesforce Ridge Partner",
        "Salesforce Implementation Services",
        "Salesforce CRM Solutions",
        "Salesforce Consulting Company in Noida",
    ],
};

export default function SalesforceRidgePartner() {
    return (
        <Layout>
            <Script
                id="salesforce-ridge-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="salesforce-ridge-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader title="Salesforce Ridge Partner" group_page="" current_page="Salesforce Ridge Partner" display="d-none" />

            <main className="salesforce-ridge-page">
                <section className="salesforce-ridge-hero" aria-labelledby="ridge-hero-title">
                    <div className="container">
                        <div className="salesforce-ridge-hero-grid">
                            <div className="salesforce-ridge-hero-copy" data-aos="fade-right">
                                <span className="salesforce-ridge-eyebrow">Certified Salesforce partner milestone</span>
                                <h2 id="ridge-hero-title">A Salesforce Ridge Partner built for confident CRM growth.</h2>
                                <p>
                                    CodM Software is recognized as a Salesforce Ridge Partner and trusted Salesforce
                                    consulting company in Noida, helping businesses implement, customize and scale
                                    Salesforce CRM solutions with clarity, speed and long-term reliability.
                                </p>
                                <div className="salesforce-ridge-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Start Your Salesforce Project
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="/salesforce-consulting-company-in-noida" className="salesforce-ridge-link">
                                        Explore Noida Consulting
                                    </Link>
                                </div>
                            </div>
                            <div className="salesforce-ridge-visual" data-aos="zoom-in">
                                <svg className="salesforce-ridge-map" viewBox="0 0 520 420" aria-hidden="true">
                                    <path d="M68 252C105 128 205 72 314 96c82 18 137 82 145 164" />
                                    <path d="M96 284c70 77 213 92 318 10" />
                                    <circle cx="152" cy="236" r="16" />
                                    <circle cx="296" cy="112" r="18" />
                                    <circle cx="428" cy="270" r="16" />
                                </svg>
                                <div className="salesforce-ridge-badge-card">
                                    <img
                                        src="/assets/img/logo/srplogo.png"
                                        alt="Salesforce Ridge Partner badge for CodM Software"
                                        width="512"
                                        height="512"
                                        decoding="async"
                                        loading="eager"
                                    />
                                    <span>Ridge Partner</span>
                                </div>
                                <div className="salesforce-ridge-mini-card one">
                                    <i className="fa-solid fa-shield-check" aria-hidden="true" />
                                    <span>Trusted Delivery</span>
                                </div>
                                <div className="salesforce-ridge-mini-card two">
                                    <i className="fa-solid fa-cloud" aria-hidden="true" />
                                    <span>CRM Solutions</span>
                                </div>
                            </div>
                        </div>
                        <div className="salesforce-ridge-proof" aria-label="Salesforce Ridge Partner trust indicators">
                            {trustMetrics.map((metric) => (
                                <article key={metric.value}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-story-title">
                    <div className="container">
                        <div className="salesforce-ridge-story">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Recognition with responsibility</span>
                                <h2 id="ridge-story-title">Ridge recognition is a signal of delivery discipline.</h2>
                                <p>
                                    This milestone reflects the work behind every successful Salesforce implementation:
                                    careful discovery, clean configuration, reliable data migration, useful automation
                                    and post-launch support that keeps teams moving.
                                </p>
                                <p>
                                    For clients, the Ridge badge means more than a logo. It means working with a
                                    partner that understands Salesforce CRM solutions from business strategy through
                                    technical execution.
                                </p>
                            </div>
                            <div className="salesforce-ridge-story-panel" data-aos="fade-left">
                                <h3>What clients gain</h3>
                                <ul>
                                    <li>Structured Salesforce implementation services</li>
                                    <li>CRM architecture aligned with business goals</li>
                                    <li>Transparent communication and delivery checkpoints</li>
                                    <li>Long-term optimization, support and platform governance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-services-title">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Salesforce implementation services</span>
                            <h2 id="ridge-services-title">Everything you need to launch and scale Salesforce with confidence.</h2>
                            <p>
                                From first-time CRM implementation to complex integrations and ongoing support, CodM
                                Software builds Salesforce systems that teams can trust and leaders can measure.
                            </p>
                        </div>
                        <div className="salesforce-ridge-card-grid">
                            {serviceHighlights.map((service) => (
                                <article key={service.title} data-aos="fade-up">
                                    <div className="salesforce-ridge-icon"><i className={service.icon} aria-hidden="true" /></div>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-process-title">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Delivery process</span>
                            <h2 id="ridge-process-title">A practical CRM implementation path from idea to adoption.</h2>
                        </div>
                        <div className="salesforce-ridge-process">
                            {processSteps.map((item) => (
                                <article key={item.step}>
                                    <span>{item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-tier-title">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Salesforce partner guide</span>
                            <h2 id="ridge-tier-title">Where Ridge fits in the Salesforce partner journey.</h2>
                            <p>
                                Ridge confirms that CodM Software has moved beyond foundational delivery into a more
                                trusted level of Salesforce consulting, implementation and client success.
                            </p>
                        </div>
                        <div className="salesforce-ridge-tier-guide">
                            {partnerTiers.map((tier) => (
                                <article className={tier.active ? "active" : ""} key={tier.title}>
                                    <span>{tier.label}</span>
                                    <h3>{tier.title}</h3>
                                    <p>{tier.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-cta" aria-labelledby="ridge-cta-title">
                    <div className="container">
                        <div className="salesforce-ridge-cta-inner">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Need Salesforce CRM solutions?</span>
                                <h2 id="ridge-cta-title">Plan your next Salesforce milestone with a Ridge Partner.</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Book a Consultation
                                <span><i className="fa-solid fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-success-title">
                    <div className="container">
                        <div className="salesforce-ridge-success-layout">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Client success focus</span>
                                <h2 id="ridge-success-title">We build Salesforce around outcomes, not just features.</h2>
                                <p>
                                    A successful CRM system should simplify work, increase visibility and help teams
                                    act faster. Our Salesforce consultants focus on practical adoption, clean data,
                                    secure integrations and measurable business value.
                                </p>
                                <details className="salesforce-ridge-read-more">
                                    <summary>Read more about our Salesforce delivery mindset</summary>
                                    <p>
                                        We treat Salesforce as a long-term business platform. That means documenting
                                        decisions, preparing users, testing critical workflows and improving the system
                                        after launch as teams discover new opportunities.
                                    </p>
                                </details>
                            </div>
                            <div className="salesforce-ridge-success-grid">
                                {successCards.map((card) => (
                                    <article key={card.title}>
                                        <div className="salesforce-ridge-icon"><i className={card.icon} aria-hidden="true" /></div>
                                        <h3>{card.title}</h3>
                                        <p>{card.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-internal-links-title">
                    <div className="container">
                        <div className="salesforce-ridge-link-band">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Explore related expertise</span>
                                <h2 id="ridge-internal-links-title">Continue your Salesforce research with CodM Software.</h2>
                            </div>
                            <div className="salesforce-ridge-link-list">
                                <Link href="/service">Salesforce Services</Link>
                                <Link href="/salesforce-consulting-company-in-noida">Salesforce Consulting Company in Noida</Link>
                                <Link href="/salesforce-financial-services-cloud-consultant">Financial Services Cloud</Link>
                                <Link href="/salesforce-agentforce-ai-company-india">Agentforce AI Services</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-faq-title">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">FAQ</span>
                            <h2 id="ridge-faq-title">Salesforce Ridge Partner questions.</h2>
                        </div>
                        <div className="salesforce-ridge-faq">
                            {faqs.map((faq) => (
                                <details key={faq.question}>
                                    <summary>{faq.question}</summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}