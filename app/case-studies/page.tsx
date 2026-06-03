import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { caseStudies } from "./caseStudyData";

export const metadata = {
    title: "Salesforce Case Studies & Success Stories | CodM Software",
    description:
        "Explore CodM Software Salesforce case studies across FSC, Agentforce AI, Customer 360, Education Cloud, CRM automation, integrations and staffing.",
    keywords:
        "Salesforce case studies, CodM Software case studies, Salesforce success stories, CRM transformation case study, Agentforce AI case study",
    alternates: {
        canonical: "/case-studies",
    },
    openGraph: {
        title: "Salesforce Case Studies & Success Stories | CodM Software",
        description:
            "Explore Salesforce transformation stories covering Financial Services Cloud, Agentforce AI, Customer 360, automation and integrations.",
        url: "https://codmsoftware.com/case-studies",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Case Studies & Success Stories | CodM Software",
        description:
            "Browse premium Salesforce case studies and CRM transformation outcomes from CodM Software.",
    },
};

const featured = caseStudies[0];
const categories = ["All", ...Array.from(new Set(caseStudies.map((item) => item.category)))];

const categoryIcons: Record<string, string> = {
    All: "fa-solid fa-layer-group",
    "Financial Services Cloud": "fa-solid fa-building-columns",
    "Salesforce Integration": "fa-solid fa-plug-circle-bolt",
    "Insurance Cloud": "fa-solid fa-shield-halved",
    "Agentforce AI": "fa-solid fa-robot",
    "Customer 360": "fa-solid fa-users-viewfinder",
    "Education Cloud": "fa-solid fa-graduation-cap",
    "Sales Cadence": "fa-solid fa-route",
    "CRM Integration": "fa-solid fa-diagram-project",
    "Staff Augmentation": "fa-solid fa-user-plus",
    "Lead Management": "fa-solid fa-location-crosshairs",
};

const serviceIcons: Record<string, string> = {
    "Salesforce Consulting": "fa-solid fa-cloud",
    "Agentforce AI": "fa-solid fa-robot",
    "Financial Services Cloud": "fa-solid fa-building-columns",
    "CRM Integration": "fa-solid fa-plug-circle-bolt",
    "Education Cloud": "fa-solid fa-graduation-cap",
    "Staff Augmentation": "fa-solid fa-users-gear",
};

const getIcon = (label: string) => categoryIcons[label] || serviceIcons[label] || "fa-solid fa-cloud";

const faqs = [
    {
        question: "What type of Salesforce case studies does CodM Software publish?",
        answer:
            "CodM Software publishes case studies across Salesforce Financial Services Cloud, Agentforce AI, Customer 360, Education Cloud, Sales Cadence, CRM automation, integrations and staffing solutions.",
    },
    {
        question: "Can CodM Software build a similar Salesforce solution for my business?",
        answer:
            "Yes. Our team reviews your goals, existing CRM setup, data model, integrations and workflows before designing a scalable Salesforce solution aligned with your business requirements.",
    },
    {
        question: "Do these case studies include measurable results?",
        answer:
            "Yes. Each case study highlights business challenges, solution architecture, implementation approach, before-and-after improvements and measurable Salesforce outcomes.",
    },
];

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Salesforce Case Studies & Digital Transformation Success Stories",
    url: "https://codmsoftware.com/case-studies",
    description: metadata.description,
    publisher: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    mainEntity: caseStudies.map((item) => ({
        "@type": "Article",
        headline: item.title,
        about: item.category,
        url: `https://codmsoftware.com/case-studies/${item.slug}`,
    })),
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

export default function CaseStudiesPage() {
    return (
        <Layout>
            <Script
                id="codm-case-study-collection-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <Script
                id="codm-case-study-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader title="Case Studies" group_page="" current_page="Case Studies" display="d-none" />

            <main className="codm-case-system">
                <section className="codm-case-system-hero" aria-labelledby="case-studies-title">
                    <div className="container">
                        <div className="codm-case-system-hero-grid">
                            <div>
                                <span className="codm-case-system-badge">
                                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                                    Success Stories
                                </span>
                                <h2 id="case-studies-title">Salesforce Case Studies & Digital Transformation Success Stories</h2>
                                <p>
                                    Explore how CodM Software helps businesses implement Salesforce solutions, automate
                                    workflows, improve customer engagement, and accelerate digital transformation.
                                </p>
                                <div className="codm-case-system-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Book Free Consultation
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="#case-study-grid" className="theme-btn2">
                                        Explore Case Studies
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="codm-case-system-visual" aria-label="Salesforce dashboard and CRM automation visual">
                                <div className="codm-case-system-browser">
                                    <span />
                                    <span />
                                    <span />
                                    <div className="codm-case-system-chart" />
                                    <div className="codm-case-system-lines">
                                        <i />
                                        <i />
                                        <i />
                                    </div>
                                </div>
                                <article className="codm-case-system-float one">
                                    <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
                                    <strong>60%</strong>
                                    <span>Productivity Lift</span>
                                </article>
                                <article className="codm-case-system-float two">
                                    <i className="fa-solid fa-robot" aria-hidden="true" />
                                    <strong>AI</strong>
                                    <span>Workflow Automation</span>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-case-system-section" aria-labelledby="featured-case-study">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-star" aria-hidden="true" /> Featured Case Study</span>
                            <h2 id="featured-case-study">A secure Salesforce Financial Services Cloud transformation.</h2>
                        </div>
                        <article className="codm-case-system-featured">
                            <div className="codm-case-system-featured-image">
                                <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 991px) 100vw, 45vw" />
                            </div>
                            <div>
                                <span className="codm-case-system-badge">
                                    <i className={getIcon(featured.category)} aria-hidden="true" />
                                    {featured.category}
                                </span>
                                <h3>{featured.title}</h3>
                                <p>{featured.summary}</p>
                                <div className="codm-case-system-mini-grid">
                                    {featured.metrics.slice(0, 3).map((metric) => (
                                        <span key={metric.label}>
                                            <i className="fa-solid fa-gauge-high" aria-hidden="true" />
                                            <strong>{metric.value}</strong>
                                            {metric.label}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/case-studies/${featured.slug}`} className="theme-btn1">
                                    Read More
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="codm-case-system-section codm-case-system-muted" aria-labelledby="case-study-grid">
                    <div className="container">
                        <div className="codm-case-system-grid-header">
                            <div className="codm-case-system-heading">
                                <span><i className="fa-solid fa-folder-open" aria-hidden="true" /> Case Study Library</span>
                                <h2 id="case-study-grid">Explore Salesforce outcomes by service, industry and solution.</h2>
                            </div>
                            <Link href="/contact" className="codm-case-system-sticky-cta">Talk to Salesforce Experts</Link>
                        </div>
                        <div className="codm-case-system-filters" aria-label="Case study categories">
                            {categories.map((category) => (
                                <span key={category}>
                                    <i className={getIcon(category)} aria-hidden="true" />
                                    {category}
                                </span>
                            ))}
                        </div>
                        <div className="row">
                            {caseStudies.map((item) => (
                                <div className="col-xl-4 col-md-6" key={item.slug}>
                                    <article className="codm-case-system-card">
                                        <div className="codm-case-system-card-image">
                                            <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
                                            <span>{item.industry}</span>
                                        </div>
                                        <div className="codm-case-system-card-body">
                                            <span className="codm-case-system-card-icon" aria-hidden="true">
                                                <i className={getIcon(item.category)} />
                                            </span>
                                            <span className="codm-case-system-card-tag">{item.category}</span>
                                            <h3>
                                                <Link href={`/case-studies/${item.slug}`}>{item.title}</Link>
                                            </h3>
                                            <p>{item.summary}</p>
                                            <div className="codm-case-system-services">
                                                {item.services.slice(0, 3).map((service) => (
                                                    <span key={service}>
                                                        <i className={getIcon(service)} aria-hidden="true" />
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="codm-case-system-card-metric">
                                                <i className="fa-solid fa-bullseye" aria-hidden="true" />
                                                <strong>{item.metrics[0].value}</strong>
                                                <span>{item.metrics[0].label}</span>
                                            </div>
                                            <Link href={`/case-studies/${item.slug}`} className="learn">
                                                Read More
                                                <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-system-section" aria-labelledby="related-services">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-link" aria-hidden="true" /> Related Services</span>
                            <h2 id="related-services">Build the next Salesforce success story with the right team.</h2>
                        </div>
                        <div className="codm-case-system-service-grid">
                            {featured.relatedServices.map((service) => (
                                <Link href={service.href} key={service.label}>
                                    <i className={getIcon(service.label)} aria-hidden="true" />
                                    <span>{service.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-system-section codm-case-system-muted" aria-labelledby="case-study-faq">
                    <div className="container">
                        <div className="codm-case-system-lead-grid">
                            <div>
                                <div className="codm-case-system-heading">
                                    <span><i className="fa-solid fa-circle-question" aria-hidden="true" /> FAQ</span>
                                    <h2 id="case-study-faq">Questions before starting a Salesforce project?</h2>
                                </div>
                                <div className="codm-case-system-faq">
                                    {faqs.map((faq, index) => (
                                        <details key={faq.question} open={index === 0}>
                                            <summary><i className="fa-solid fa-message" aria-hidden="true" /> {faq.question}</summary>
                                            <p>{faq.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                            <aside className="codm-case-system-lead-card" aria-label="Case study lead form">
                                <i className="fa-solid fa-headset codm-case-system-lead-icon" aria-hidden="true" />
                                <span>Get Salesforce guidance</span>
                                <h3>Discuss your CRM roadmap with CodM Software.</h3>
                                <p>Share your business goal and our Salesforce experts will help you choose the right architecture, cloud and implementation plan.</p>
                                <Link href="/contact" className="theme-btn1">
                                    Schedule Consultation
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="codm-case-system-cta" aria-labelledby="case-study-final-cta">
                    <div className="container">
                        <div>
                            <span><i className="fa-solid fa-rocket" aria-hidden="true" /> Ready to Transform Your Salesforce Ecosystem?</span>
                            <h2 id="case-study-final-cta">Partner with CodM Software to automate workflows and accelerate digital transformation.</h2>
                            <div className="codm-case-system-actions justify-content-center">
                                <Link href="/contact" className="theme-btn1">
                                    Contact Us
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                                <Link href="/salesforce-consulting" className="theme-btn2">
                                    Schedule Consultation
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
