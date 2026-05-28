import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Salesforce Ridge Partner | CodM Software Silver Consulting Partner",
    description:
        "CodM Software is a Salesforce Ridge Consulting Partner and AppExchange-listed company delivering Salesforce consulting, implementation, integration and CRM solutions.",
    keywords:
        "Salesforce Ridge Partner, Salesforce Silver Consulting Partner, CodM Software Salesforce Partner, Salesforce Consulting Company in Noida, Salesforce Implementation Services, Salesforce CRM Solutions",
    alternates: {
        canonical: "/salesforce-ridge-partner",
    },
};

const partnerTiers = [
    {
        title: "Base Partner",
        oldName: "Previously Registered Partner",
        text: "The entry stage for partners starting their Salesforce journey, building foundational expertise and first successful implementations.",
        icon: "fa-solid fa-seedling",
    },
    {
        title: "Ridge Partner",
        oldName: "Previously Silver Partner",
        text: "Recognizes partners with successful Salesforce projects, certified experts, consistent delivery and strong customer satisfaction.",
        icon: "fa-solid fa-medal",
        active: true,
    },
    {
        title: "Crest Partner",
        oldName: "Previously Gold Partner",
        text: "Awarded to partners with advanced Salesforce expertise, large-scale delivery and measurable business impact.",
        icon: "fa-solid fa-award",
    },
    {
        title: "Summit Partner",
        oldName: "Previously Platinum Partner",
        text: "The highest Salesforce ecosystem recognition for exceptional innovation, customer success and leadership.",
        icon: "fa-solid fa-mountain-sun",
    },
];

const clientBenefits = [
    {
        title: "Proven Expertise",
        text: "Our certified Salesforce professionals bring hands-on expertise across Salesforce clouds, from consultation to implementation.",
        icon: "fa-solid fa-certificate",
    },
    {
        title: "Reliable Quality",
        text: "Clients trust us for timely, high-quality delivery with clear processes and careful attention to every implementation detail.",
        icon: "fa-solid fa-shield-halved",
    },
    {
        title: "Transparent Collaboration",
        text: "We keep clients informed and involved from planning to post-deployment because success is a shared goal.",
        icon: "fa-solid fa-comments",
    },
    {
        title: "Scalable Solutions",
        text: "We build flexible Salesforce solutions that adapt to diverse business requirements and grow with your organization.",
        icon: "fa-solid fa-layer-group",
    },
    {
        title: "Global Recognition",
        text: "Our AppExchange listing makes CodM Software globally visible to businesses seeking reliable Salesforce expertise.",
        icon: "fa-solid fa-globe",
    },
];

const expertise = [
    "Salesforce Consulting & Strategy",
    "CRM Implementation & Customization",
    "Financial Services Cloud (FSC)",
    "Salesforce Integration with external platforms",
    "Lightning Web Components (LWC) Development",
    "AppExchange App Development",
    "Salesforce Data Migration & Optimization",
    "Admin, Support, and Maintenance Services",
];

const successApproach = [
    {
        title: "Listen deeply",
        text: "We understand your business goals before we act.",
        icon: "fa-solid fa-ear-listen",
    },
    {
        title: "Build smart",
        text: "We create solutions that fit your requirements, not just the technology.",
        icon: "fa-solid fa-screwdriver-wrench",
    },
    {
        title: "Deliver value",
        text: "We measure success through your satisfaction and growth.",
        icon: "fa-solid fa-chart-line",
    },
];

const milestones = [
    { year: "2021", title: "CodM Software Established", text: "Started with a focused vision to help businesses use Salesforce to grow smarter." },
    { year: "2025", title: "Salesforce Ridge Partner", text: "Recognized as a Salesforce Ridge Consulting Partner for delivery, expertise and client trust." },
    { year: "2025", title: "AppExchange Listed", text: "Officially listed on Salesforce AppExchange, increasing global visibility and credibility." },
];

const faqs = [
    {
        question: "What does Salesforce Ridge Partner mean?",
        answer: "Salesforce Ridge Partner, previously known as Silver Partner, recognizes consulting partners with proven Salesforce project experience, certified expertise, reliable delivery and strong customer satisfaction.",
    },
    {
        question: "Is CodM Software listed on Salesforce AppExchange?",
        answer: "Yes. In 2025, CodM Software became officially listed on Salesforce AppExchange, making our services and expertise visible to businesses looking for trusted Salesforce partners.",
    },
    {
        question: "How does this recognition help clients?",
        answer: "It gives clients more confidence that CodM Software offers verified Salesforce expertise, scalable CRM implementation services, transparent collaboration and business-ready solutions.",
    },
    {
        question: "Which Salesforce services does CodM Software provide?",
        answer: "CodM Software provides Salesforce consulting, CRM implementation, customization, integration, Financial Services Cloud, LWC development, AppExchange app development, data migration, admin support and maintenance.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Ridge Consulting Partner Services",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    serviceType: "Salesforce consulting, Salesforce implementation, Salesforce CRM solutions and AppExchange development",
    url: "https://codmsoftware.com/salesforce-ridge-partner",
    description:
        "CodM Software is a Salesforce Ridge Consulting Partner and AppExchange-listed company delivering Salesforce consulting, implementation, integration, customization and CRM support services.",
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
            <SectionHeader
                title="Salesforce Ridge Partner"
                group_page=""
                current_page="Salesforce Ridge Partner"
                display="d-none"
            />

            <div className="salesforce-ridge-page">
                <section className="salesforce-ridge-hero" aria-labelledby="salesforce-ridge-title">
                    <div className="container">
                        <div className="salesforce-ridge-hero-grid">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Salesforce Ridge Consulting Partner</span>
                                <h2 id="salesforce-ridge-title">
                                    Salesforce Ridge (Silver) Consulting Partner: CodM Software Reaches a New Milestone
                                </h2>
                                <p>
                                    CodM Software is proud to be recognized as a Salesforce Ridge Consulting Partner in
                                    2025 and officially listed on Salesforce AppExchange, strengthening our global
                                    visibility and client trust.
                                </p>
                                <div className="salesforce-ridge-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Start Your Salesforce Project
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link href="/salesforce-consulting-company-in-noida" className="salesforce-ridge-link">
                                        Salesforce Consulting in Noida
                                    </Link>
                                </div>
                            </div>
                            <div className="salesforce-ridge-hero-card">
                                <svg className="salesforce-ridge-orbit" viewBox="0 0 420 320" aria-hidden="true">
                                    <path d="M64 160C118 58 302 58 356 160C302 262 118 262 64 160Z" />
                                    <path d="M112 220C164 122 256 122 308 220" />
                                    <circle cx="210" cy="160" r="54" />
                                    <circle cx="92" cy="160" r="16" />
                                    <circle cx="210" cy="78" r="16" />
                                    <circle cx="328" cy="160" r="16" />
                                    <circle cx="210" cy="242" r="16" />
                                </svg>
                                <img
                                    src="/assets/img/logo/srplogo.png"
                                    alt="Salesforce Ridge Partner logo for CodM Software"
                                    width="512"
                                    height="512"
                                    loading="eager"
                                    decoding="async"
                                />
                                <strong>Ridge Partner 2025</strong>
                                <span>Recognized Salesforce consulting capability with AppExchange visibility.</span>
                            </div>
                        </div>
                        <div className="salesforce-ridge-proof">
                            <article>
                                <strong>2021</strong>
                                <span>CodM Software founded</span>
                            </article>
                            <article>
                                <strong>2025</strong>
                                <span>Salesforce Ridge Partner</span>
                            </article>
                            <article>
                                <strong>AppExchange</strong>
                                <span>Globally discoverable expertise</span>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-new-milestone">
                    <div className="container">
                        <div className="salesforce-ridge-story">
                            <div>
                                <span className="salesforce-ridge-eyebrow">A New Milestone in our Salesforce Journey</span>
                                <h2 id="ridge-new-milestone">Recognition Built on Delivery, Trust and Customer Success</h2>
                                <p>
                                    This achievement reflects our continuous growth, excellence and dedication to
                                    customer service. It is proof of our team's hard work, dedication and the trust our
                                    clients place in us to deliver Salesforce solutions that make a real difference.
                                </p>
                                <p>
                                    Being AppExchange-listed means our expertise and offerings are now globally
                                    accessible to businesses looking for certified, reliable and innovative Salesforce
                                    partners.
                                </p>
                            </div>
                            <div className="salesforce-ridge-image-card">
                                <img
                                    src="/assets/img/service/service-details-img1.png"
                                    alt="CodM Software Salesforce consulting team milestone and CRM solution planning"
                                    width="696"
                                    height="522"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-partner-tiers">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Understanding the Salesforce Partner Tiers</span>
                            <h2 id="ridge-partner-tiers">Where Ridge Fits in the Salesforce Partner Journey</h2>
                            <p>
                                Salesforce evaluates partners based on performance, certifications, innovation and
                                client success. The Ridge badge validates CodM Software's capabilities, experience and
                                commitment to excellence.
                            </p>
                        </div>
                        <div className="salesforce-ridge-tier-guide">
                            {partnerTiers.map((tier) => (
                                <article className={tier.active ? "active" : ""} key={tier.title}>
                                    <div className="salesforce-ridge-icon">
                                        <i className={tier.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{tier.title}</h3>
                                    <span>{tier.oldName}</span>
                                    <p>{tier.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-journey">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Our Journey</span>
                            <h2 id="ridge-journey">From a Focused Salesforce Team to a Recognized Consulting Partner</h2>
                        </div>
                        <div className="salesforce-ridge-timeline">
                            {milestones.map((milestone) => (
                                <article key={milestone.title}>
                                    <span>{milestone.year}</span>
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-client-benefits">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Client Benefits</span>
                            <h2 id="ridge-client-benefits">How This Partnership Benefits Our Clients</h2>
                            <p>
                                As a Salesforce Ridge Consulting Partner and AppExchange-listed company, CodM Software
                                delivers verified Salesforce services with more trust, confidence and long-term value.
                            </p>
                        </div>
                        <div className="salesforce-ridge-card-grid">
                            {clientBenefits.map((benefit) => (
                                <article key={benefit.title}>
                                    <div className="salesforce-ridge-icon">
                                        <i className={benefit.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.text}</p>
                                </article>
                            ))}
                        </div>
                        <details className="salesforce-ridge-read-more">
                            <summary>Read more about why Ridge recognition matters</summary>
                            <p>
                                These recognitions validate our dedication to delivering Salesforce CRM solutions that
                                are secure, scalable and business-ready. For clients, it means working with a partner
                                that has proven capabilities and a growing presence in the Salesforce ecosystem.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="salesforce-ridge-cta" aria-labelledby="ridge-cta">
                    <div className="container">
                        <div className="salesforce-ridge-cta-inner">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Salesforce CRM Solutions</span>
                                <h2 id="ridge-cta">Work with a Salesforce Ridge Partner for your next CRM milestone.</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Book a Consultation
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-expertise">
                    <div className="container">
                        <div className="salesforce-ridge-expertise">
                            <div>
                                <span className="salesforce-ridge-eyebrow">Salesforce Expertise</span>
                                <h2 id="ridge-expertise">How We Help You with Salesforce</h2>
                                <p>
                                    We provide end-to-end Salesforce services from consultation to implementation,
                                    integration and post-deployment support. Whether you are starting your Salesforce
                                    journey or expanding an existing setup, we provide technical depth and strategic
                                    guidance.
                                </p>
                                <Link href="/service" className="salesforce-ridge-link">Explore Salesforce Services</Link>
                            </div>
                            <ul>
                                {expertise.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-success">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">Client Success</span>
                            <h2 id="ridge-success">Our Commitment to Client Success</h2>
                            <p>
                                Every milestone we achieve, from Salesforce certifications to Ridge partnership and
                                AppExchange listing, is rooted in our focus on client success.
                            </p>
                        </div>
                        <div className="salesforce-ridge-success-grid">
                            {successApproach.map((item) => (
                                <article key={item.title}>
                                    <div className="salesforce-ridge-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section" aria-labelledby="ridge-looking-ahead">
                    <div className="container">
                        <div className="salesforce-ridge-looking-ahead">
                            <span className="salesforce-ridge-eyebrow">Looking Ahead</span>
                            <h2 id="ridge-looking-ahead">Beyond Ridge Consulting Partner</h2>
                            <p>
                                Becoming a Salesforce Ridge Consulting Partner and joining Salesforce AppExchange are
                                proud achievements, but they are just the beginning. Our next goal is to reach the Crest
                                and Summit Partner tiers, expand our global reach and continue delivering innovative
                                Salesforce implementation services that transform the way businesses operate.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="salesforce-ridge-section salesforce-ridge-muted" aria-labelledby="ridge-faq">
                    <div className="container">
                        <div className="salesforce-ridge-heading">
                            <span className="salesforce-ridge-eyebrow">FAQ</span>
                            <h2 id="ridge-faq">Salesforce Ridge Partner Questions</h2>
                        </div>
                        <div className="salesforce-ridge-faq">
                            {faqs.map((faq) => (
                                <article key={faq.question}>
                                    <div className="salesforce-ridge-icon">
                                        <i className="fa-solid fa-circle-question" aria-hidden="true" />
                                    </div>
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
