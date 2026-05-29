import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Best Salesforce Consultants in Pune | Expert CRM Solutions",
    description:
        "Partner with a leading Salesforce consulting company in Pune for customized CRM solutions, integrations and long-term support to drive business growth.",
    keywords:
        "Salesforce Consulting Company in Pune, Salesforce CRM Solutions, Salesforce Consultants in Pune, Salesforce Implementation Services, CRM Consulting Services",
    alternates: {
        canonical: "/salesforce-consulting-company-in-pune",
    },
    openGraph: {
        title: "Best Salesforce Consultants in Pune | Expert CRM Solutions",
        description:
            "Customized Salesforce CRM solutions, integrations, implementation and long-term support for growing businesses in Pune.",
        url: "https://codmsoftware.com/salesforce-consulting-company-in-pune",
        siteName: "CodM Software",
        type: "website",
    },
};

const businessValues = [
    "Tailored solutions for your business needs",
    "Experienced Salesforce experts",
    "Scalable systems for future growth",
    "Reliable and consistent support",
];

const puneEdge = [
    {
        title: "Market Understanding",
        text: "We understand Pune's fast-growing IT and startup ecosystem, helping us design solutions aligned with local market dynamics and business challenges.",
        icon: "fa-solid fa-map-location-dot",
    },
    {
        title: "Domain Expertise",
        text: "Our team has hands-on experience with SaaS, technology and service-based companies, helping streamline operations and improve workflows.",
        icon: "fa-solid fa-briefcase",
    },
    {
        title: "Flexible Engagement",
        text: "Adaptive engagement models let you scale teams and resources as needed at every stage of growth.",
        icon: "fa-solid fa-arrows-spin",
    },
    {
        title: "Faster Execution",
        text: "Our efficient implementation approach minimizes disruption while delivering results quickly.",
        icon: "fa-solid fa-stopwatch",
    },
    {
        title: "Tailored Solutions",
        text: "Customized Salesforce solutions are built around your processes for stronger alignment and higher adoption.",
        icon: "fa-solid fa-pen-ruler",
    },
    {
        title: "Long-Term Support",
        text: "Ongoing support and optimization help Salesforce evolve, adapt and deliver value as your business grows.",
        icon: "fa-solid fa-headset",
    },
];

const crmExpertise = [
    {
        title: "End-to-End Setup",
        text: "We handle complete Salesforce implementation from start to finish, aligned with workflows and business goals.",
        icon: "fa-solid fa-rocket",
    },
    {
        title: "Custom Solutions",
        text: "Tailored features and functionality fit your exact needs instead of using one-size-fits-all solutions.",
        icon: "fa-solid fa-code",
    },
    {
        title: "Seamless Integrations",
        text: "Connect Salesforce with existing tools and systems for smoother data flow and efficient operations.",
        icon: "fa-solid fa-plug-circle-bolt",
    },
    {
        title: "Secure Migration",
        text: "Move existing data into Salesforce securely with minimal risk and no disruption to your work.",
        icon: "fa-solid fa-database",
    },
    {
        title: "Workflow Automation",
        text: "Automate repetitive tasks so teams save time, reduce errors and focus on high-value work.",
        icon: "fa-solid fa-gears",
    },
    {
        title: "System Upgrades",
        text: "Continuously improve Salesforce as your business evolves so it keeps supporting growth effectively.",
        icon: "fa-solid fa-arrow-up-right-dots",
    },
];

const industries = [
    {
        title: "IT & SaaS Growth",
        text: "Simplify sales processes, improve lead tracking and get a clear view of the customer journey.",
        icon: "fa-solid fa-cloud",
    },
    {
        title: "Real Estate Solutions",
        text: "Manage property listings, leads and customer interactions from one organized CRM system.",
        icon: "fa-solid fa-building",
    },
    {
        title: "Healthcare Management",
        text: "Support secure patient data management and smooth communication across teams.",
        icon: "fa-solid fa-notes-medical",
    },
    {
        title: "Financial Operations",
        text: "Manage client relationships, reporting and compliance with greater accuracy and transparency.",
        icon: "fa-solid fa-coins",
    },
    {
        title: "Retail Transformation",
        text: "Enhance engagement, streamline order management and automate marketing for connected shopping experiences.",
        icon: "fa-solid fa-cart-shopping",
    },
    {
        title: "Service Businesses",
        text: "Improve response times, streamline operations and deliver consistent customer experiences.",
        icon: "fa-solid fa-screwdriver-wrench",
    },
];

const outcomes = [
    {
        title: "Improved Productivity",
        text: "Automate repetitive tasks so your team can focus on meaningful work that drives results.",
        icon: "fa-solid fa-bolt",
    },
    {
        title: "Better Insights",
        text: "Access real-time data and dashboards for a complete view of your business at any time.",
        icon: "fa-solid fa-eye",
    },
    {
        title: "Reduced Costs",
        text: "Streamline processes and reduce manual effort to lower operational costs while improving efficiency.",
        icon: "fa-solid fa-scale-balanced",
    },
    {
        title: "Stronger Engagement",
        text: "Build meaningful customer relationships through personalized communication and better customer understanding.",
        icon: "fa-solid fa-handshake",
    },
    {
        title: "Smarter Decisions",
        text: "Use accurate data and analytics to make faster and more confident decisions.",
        icon: "fa-solid fa-gauge-high",
    },
    {
        title: "Increased Returns",
        text: "Align Salesforce with your business strategy to maximize ROI and long-term value.",
        icon: "fa-solid fa-chart-pie",
    },
];

const supportItems = [
    {
        title: "System Monitoring",
        text: "Continuously monitor Salesforce to resolve potential issues early and keep operations smooth.",
        icon: "fa-solid fa-shield-halved",
    },
    {
        title: "Timely Updates",
        text: "Keep Salesforce updated with the latest features and improvements.",
        icon: "fa-solid fa-arrows-rotate",
    },
    {
        title: "Performance Tuning",
        text: "Optimize system performance and usability for a smoother team experience.",
        icon: "fa-solid fa-chart-line",
    },
    {
        title: "Team Enablement",
        text: "Guide and train your team so they use Salesforce confidently and effectively.",
        icon: "fa-solid fa-user-graduate",
    },
    {
        title: "Data Protection",
        text: "Strong security practices keep business data safe, secure and well managed.",
        icon: "fa-solid fa-lock",
    },
    {
        title: "Continuous Upgrades",
        text: "Enhance Salesforce as your business grows so it continues delivering long-term value.",
        icon: "fa-solid fa-arrow-trend-up",
    },
];

const processFlow = ["Strategy", "CRM Setup", "Automation", "Growth"];

const successMetrics = [
    { value: "360°", label: "customer data visibility" },
    { value: "6+", label: "Salesforce capability areas" },
    { value: "24/7", label: "cloud CRM access" },
];

const faqs = [
    {
        question: "How long does it take to implement Salesforce?",
        answer:
            "The implementation timeline depends on your business requirements and the complexity of the solution. Smaller projects can be completed within a few weeks, while larger implementations may take a few months. We follow a structured process to ensure timely delivery and keep you informed at every stage.",
    },
    {
        question: "Do you offer support after implementation?",
        answer:
            "Yes, we provide continuous support and maintenance services including system updates, issue resolution and performance improvements. We also help with future enhancements so Salesforce continues to run smoothly.",
    },
    {
        question: "Can you improve our existing Salesforce setup?",
        answer:
            "Yes, we can enhance your current system by identifying gaps and optimizing performance. We analyze your setup and implement improvements that help you get better results without rebuilding everything.",
    },
    {
        question: "Are your solutions customized?",
        answer:
            "Yes, all our solutions are tailored to your business needs. We understand that every organization has unique workflows, so we build customized features and processes for better alignment and efficiency.",
    },
    {
        question: "Which industries do you work with?",
        answer:
            "We work with industries such as IT, SaaS, real estate, healthcare, finance and more. Our experience helps us understand industry-specific challenges and design solutions that address them effectively.",
    },
    {
        question: "How do you ensure data security?",
        answer:
            "We follow strict security standards to protect your data, including secure migration, controlled access and compliance practices. Our processes are designed to maintain data integrity and keep business information safe.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Consulting Company in Pune",
    serviceType: "Salesforce consulting, CRM implementation, customization, integration and support",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    areaServed: {
        "@type": "City",
        name: "Pune",
    },
    url: "https://codmsoftware.com/salesforce-consulting-company-in-pune",
    description:
        "CodM Software provides Salesforce consulting services in Pune, including customized CRM solutions, implementation, integrations, automation, data migration and long-term support.",
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

export default function SalesforceConsultingCompanyInPune() {
    return (
        <Layout>
            <Script
                id="salesforce-pune-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="salesforce-pune-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader
                title="Salesforce Consulting Company in Pune"
                group_page=""
                current_page="Salesforce Consulting Pune"
                display="d-none"
            />

            <div className="salesforce-noida-page salesforce-pune-page">
                <section className="salesforce-noida-hero" aria-labelledby="salesforce-pune-title">
                    <div className="container">
                        <div className="salesforce-noida-hero-grid">
                            <div className="salesforce-noida-hero-content">
                                <span className="salesforce-noida-eyebrow">Salesforce Consulting in Pune</span>
                                <h2 id="salesforce-pune-title">Leading Salesforce Consulting Company in Pune</h2>
                                <p>
                                    Accelerate your business growth with customized Salesforce solutions designed to
                                    improve efficiency, streamline processes and deliver better customer experiences.
                                </p>
                                <div className="salesforce-noida-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Schedule Free Consultation
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="tel:+919871717425" className="salesforce-noida-secondary-link">
                                        Talk to Salesforce Experts
                                    </Link>
                                </div>
                                <div className="salesforce-noida-trust-points" aria-label="Salesforce consulting highlights">
                                    <span>CRM Strategy</span>
                                    <span>Implementation</span>
                                    <span>Integration</span>
                                    <span>Support</span>
                                </div>
                            </div>
                            <div className="salesforce-noida-hero-media">
                                <svg
                                    className="salesforce-noida-hero-guide"
                                    viewBox="0 0 420 320"
                                    role="img"
                                    aria-label="Salesforce CRM consulting guide for Pune businesses"
                                >
                                    <path d="M70 160 C130 55 290 55 350 160 C290 265 130 265 70 160Z" />
                                    <path d="M120 160 H300" />
                                    <path d="M210 70 V250" />
                                    <circle cx="120" cy="160" r="18" />
                                    <circle cx="210" cy="70" r="18" />
                                    <circle cx="300" cy="160" r="18" />
                                    <circle cx="210" cy="250" r="18" />
                                </svg>
                                <img
                                    src="/assets/img/service/service-details-img3.png"
                                    alt="Salesforce consulting company in Pune building scalable CRM solutions"
                                    width="696"
                                    height="522"
                                    loading="eager"
                                    decoding="async"
                                />
                                <div className="salesforce-noida-media-card">
                                    <strong>CRM built for measurable growth</strong>
                                    <span>Customized Salesforce systems for Pune-based IT, SaaS and service businesses.</span>
                                </div>
                            </div>
                        </div>
                        <div className="salesforce-noida-metrics" aria-label="Salesforce consulting outcomes">
                            {successMetrics.map((metric) => (
                                <article key={metric.label}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-pune-value">
                    <div className="container">
                        <div className="salesforce-noida-two-column">
                            <div>
                                <span className="salesforce-noida-eyebrow">Business Value</span>
                                <h2 id="salesforce-pune-value">Driving Growth with the Right Salesforce Strategy</h2>
                                <h3>Why the Right Consulting Partner Makes a Difference</h3>
                                <p>
                                    Choosing the right Salesforce consulting partner is very important and can make a
                                    real difference in how effectively your business uses the platform. From planning
                                    and implementation to ongoing improvements, having the right team by your side keeps
                                    everything running smoothly.
                                </p>
                                <p>
                                    We at CodM Software focus on understanding your business goals and building
                                    solutions that truly fit, with seamless integrations, simpler workflows and better
                                    team adoption.
                                </p>
                            </div>
                            <ul className="salesforce-noida-check-list">
                                {businessValues.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="salesforce-noida-flow-guide" aria-label="Salesforce growth strategy flow">
                            {processFlow.map((item, index) => (
                                <div className="salesforce-noida-flow-step" key={item}>
                                    <span>
                                        <i className={index === 0 ? "fa-solid fa-compass-drafting" : index === 1 ? "fa-solid fa-cloud" : index === 2 ? "fa-solid fa-gears" : "fa-solid fa-arrow-trend-up"} />
                                    </span>
                                    <strong>{item}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-pune-edge">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Pune Edge</span>
                            <h2 id="salesforce-pune-edge">Why Pune Businesses Prefer Working With Us</h2>
                        </div>
                        <div className="salesforce-noida-card-grid">
                            {puneEdge.map((item, index) => (
                                <article className="salesforce-noida-card" key={item.title}>
                                    <div className="salesforce-noida-card-top">
                                        <i className={item.icon} aria-hidden="true" />
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-pune-expertise">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">CRM Expertise</span>
                            <h2 id="salesforce-pune-expertise">Comprehensive Salesforce Capabilities</h2>
                            <p>
                                We provide end-to-end Salesforce expertise to help you build, customize and optimize
                                your CRM system in a way that supports your business. From integrations to everyday
                                automation, we ensure everything works together effortlessly.
                            </p>
                        </div>
                        <div className="salesforce-noida-feature-list">
                            {crmExpertise.map((item) => (
                                <article key={item.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-pune-industries">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Industry Expertise</span>
                            <h2 id="salesforce-pune-industries">Supporting Diverse Business Sectors</h2>
                            <p>
                                We work with businesses across multiple industries and understand their unique
                                challenges, processes and goals. Instead of a generic approach, we build Salesforce
                                systems that fit the way your business works.
                            </p>
                        </div>
                        <div className="salesforce-noida-use-grid">
                            {industries.map((item) => (
                                <article key={item.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-pune-outcomes">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Business Outcomes</span>
                            <h2 id="salesforce-pune-outcomes">Achieving Real Results with Salesforce</h2>
                            <p>
                                At CodM Software, we design solutions that deliver measurable improvements in daily
                                business performance. With the right setup, businesses in Pune can scale smoothly,
                                adapt quickly and build a strong foundation for long-term growth.
                            </p>
                        </div>
                        <div className="salesforce-noida-results-grid">
                            {outcomes.map((item) => (
                                <article key={item.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                        <details className="salesforce-noida-read-more">
                            <summary>Read more about measurable Salesforce outcomes</summary>
                            <p>
                                It is not just about implementing a system, but making your work easier and more
                                effective. Better visibility, automated workflows and smarter decisions help your teams
                                operate with more confidence.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="salesforce-noida-cta" aria-labelledby="salesforce-pune-cta-title">
                    <div className="container">
                        <div className="salesforce-noida-cta-inner">
                            <div>
                                <span className="salesforce-noida-eyebrow">CRM Consulting Services</span>
                                <h2 id="salesforce-pune-cta-title">Ready to build a Salesforce system that supports real growth?</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Request Demo
                                <span><i className="fa-solid fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-pune-support">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Reliable Support</span>
                            <h2 id="salesforce-pune-support">Continuous Salesforce Support & Optimization</h2>
                            <p>
                                A successful Salesforce setup is not just about getting things running. We provide
                                continuous support to monitor, maintain and improve your system over time so it stays
                                efficient, secure and aligned with changing needs.
                            </p>
                        </div>
                        <div className="salesforce-noida-mini-grid">
                            {supportItems.map((item) => (
                                <article key={item.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={item.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-pune-faq">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">FAQ</span>
                            <h2 id="salesforce-pune-faq">Salesforce Consulting Company in Pune Questions</h2>
                        </div>
                        <div className="salesforce-delhi-faq-accordion">
                            {faqs.map((faq) => (
                                <details key={faq.question}>
                                    <summary>{faq.question}</summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-cta" aria-labelledby="salesforce-pune-final-cta">
                    <div className="container">
                        <div className="salesforce-noida-cta-inner">
                            <div>
                                <span className="salesforce-noida-eyebrow">Get Started Today</span>
                                <h2 id="salesforce-pune-final-cta">Partner with Salesforce consultants who design for long-term value.</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Get Started Today
                                <span><i className="fa-solid fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
