import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../caseStudyData";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const faqs = [
    {
        question: "What is Salesforce Financial Services Cloud?",
        answer:
            "Salesforce Financial Services Cloud is a Salesforce CRM solution designed for financial-service teams that need secure client views, advisor productivity tools, relationship tracking and compliant workflows.",
    },
    {
        question: "What are permission set groups in Salesforce?",
        answer:
            "Permission set groups combine related permission sets so Salesforce admins can assign access faster while keeping profiles lean and scalable.",
    },
    {
        question: "How does Sales Cadence work in Salesforce?",
        answer:
            "Sales Cadence guides sales users through structured outreach steps such as emails, calls and follow-ups, helping teams reduce manual effort and improve consistency.",
    },
    {
        question: "Why use Customer 360?",
        answer:
            "Customer 360 helps teams see customer data, interactions and service history in one place so they can make faster decisions and deliver better experiences.",
    },
    {
        question: "How does Salesforce improve productivity?",
        answer:
            "Salesforce improves productivity by centralizing data, automating repetitive tasks, improving reporting and connecting sales, service, marketing and operations workflows.",
    },
];

const serviceIcons: Record<string, string> = {
    "Salesforce Consulting": "fa-solid fa-cloud",
    "Agentforce AI": "fa-solid fa-robot",
    "Financial Services Cloud": "fa-solid fa-building-columns",
    "CRM Integration": "fa-solid fa-plug-circle-bolt",
    "Education Cloud": "fa-solid fa-graduation-cap",
    "Staff Augmentation": "fa-solid fa-users-gear",
};

const keywordIcons = [
    { keyword: "license", icon: "fa-solid fa-id-card" },
    { keyword: "cost", icon: "fa-solid fa-coins" },
    { keyword: "external", icon: "fa-solid fa-users-gear" },
    { keyword: "field", icon: "fa-solid fa-route" },
    { keyword: "manual", icon: "fa-solid fa-hand" },
    { keyword: "address", icon: "fa-solid fa-map-location-dot" },
    { keyword: "location", icon: "fa-solid fa-location-dot" },
    { keyword: "geolocation", icon: "fa-solid fa-location-crosshairs" },
    { keyword: "territory", icon: "fa-solid fa-map" },
    { keyword: "governance", icon: "fa-solid fa-shield-halved" },
    { keyword: "validated", icon: "fa-solid fa-clipboard-check" },
    { keyword: "approval", icon: "fa-solid fa-clipboard-check" },
    { keyword: "report", icon: "fa-solid fa-chart-line" },
    { keyword: "visibility", icon: "fa-solid fa-eye" },
    { keyword: "data", icon: "fa-solid fa-database" },
    { keyword: "duplicate", icon: "fa-solid fa-clone" },
    { keyword: "fragmented", icon: "fa-solid fa-code-branch" },
    { keyword: "disconnected", icon: "fa-solid fa-link-slash" },
    { keyword: "conversion", icon: "fa-solid fa-arrow-right-arrow-left" },
    { keyword: "follow-up", icon: "fa-solid fa-envelope-open-text" },
    { keyword: "outreach", icon: "fa-solid fa-paper-plane" },
    { keyword: "response", icon: "fa-solid fa-reply" },
    { keyword: "template", icon: "fa-solid fa-file-lines" },
    { keyword: "workflow", icon: "fa-solid fa-gears" },
    { keyword: "sync", icon: "fa-solid fa-rotate" },
    { keyword: "integration", icon: "fa-solid fa-plug-circle-bolt" },
    { keyword: "performance", icon: "fa-solid fa-gauge-high" },
    { keyword: "bandwidth", icon: "fa-solid fa-tower-broadcast" },
    { keyword: "release", icon: "fa-solid fa-rocket" },
    { keyword: "QA", icon: "fa-solid fa-vial-circle-check" },
    { keyword: "specialized", icon: "fa-solid fa-user-graduate" },
    { keyword: "sensitive", icon: "fa-solid fa-user-lock" },
    { keyword: "access", icon: "fa-solid fa-key" },
    { keyword: "security", icon: "fa-solid fa-shield-halved" },
    { keyword: "slow", icon: "fa-solid fa-hourglass-half" },
    { keyword: "inconsistent", icon: "fa-solid fa-triangle-exclamation" },
    { keyword: "limited", icon: "fa-solid fa-circle-nodes" },
    { keyword: "AI", icon: "fa-solid fa-robot" },
    { keyword: "Agentforce", icon: "fa-solid fa-robot" },
    { keyword: "Financial", icon: "fa-solid fa-building-columns" },
    { keyword: "FSC", icon: "fa-solid fa-building-columns" },
    { keyword: "Cloud", icon: "fa-solid fa-cloud" },
    { keyword: "API", icon: "fa-solid fa-code-branch" },
    { keyword: "REST", icon: "fa-solid fa-code-branch" },
    { keyword: "Cadence", icon: "fa-solid fa-route" },
    { keyword: "Permission", icon: "fa-solid fa-key" },
    { keyword: "Role", icon: "fa-solid fa-sitemap" },
    { keyword: "Dashboard", icon: "fa-solid fa-chart-line" },
    { keyword: "Education", icon: "fa-solid fa-graduation-cap" },
    { keyword: "Client", icon: "fa-solid fa-user-check" },
    { keyword: "Customer", icon: "fa-solid fa-users-viewfinder" },
    { keyword: "Staff", icon: "fa-solid fa-user-plus" },
    { keyword: "LWC", icon: "fa-solid fa-layer-group" },
    { keyword: "Apex", icon: "fa-solid fa-code" },
    { keyword: "Lightning", icon: "fa-solid fa-bolt" },
];

const getIcon = (label: string) => {
    const match = keywordIcons.find((item) => label.toLowerCase().includes(item.keyword.toLowerCase()));
    return match?.icon || serviceIcons[label] || "fa-solid fa-cloud";
};

const processIcons = [
    "fa-solid fa-magnifying-glass-chart",
    "fa-solid fa-list-check",
    "fa-solid fa-diagram-project",
    "fa-solid fa-sliders",
    "fa-solid fa-vial-circle-check",
    "fa-solid fa-life-ring",
];

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) {
        return {
            title: "Case Study Not Found | CodM Software",
        };
    }

    return {
        title: study.seoTitle,
        description: study.description,
        keywords: `${study.category}, Salesforce case study, ${study.services.join(", ")}, CodM Software`,
        alternates: {
            canonical: `/case-studies/${study.slug}`,
        },
        openGraph: {
            title: study.seoTitle,
            description: study.description,
            url: `https://codmsoftware.com/case-studies/${study.slug}`,
            type: "article",
            images: [
                {
                    url: study.image,
                    alt: study.imageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: study.seoTitle,
            description: study.description,
        },
    };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) {
        notFound();
    }

    const relatedStudies = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://codmsoftware.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Case Studies",
                item: "https://codmsoftware.com/case-studies",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: study.title,
                item: `https://codmsoftware.com/case-studies/${study.slug}`,
            },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: study.title,
        description: study.description,
        image: `https://codmsoftware.com${study.image}`,
        author: {
            "@type": "Organization",
            name: "CodM Software",
        },
        publisher: {
            "@type": "Organization",
            name: "CodM Software",
            url: "https://codmsoftware.com",
        },
        mainEntityOfPage: `https://codmsoftware.com/case-studies/${study.slug}`,
        about: study.services,
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

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
        description:
            "CodM Software provides Salesforce consulting, CRM implementation, Agentforce AI, Financial Services Cloud, integrations and staffing solutions.",
    };

    return (
        <Layout>
            <Script
                id={`${study.slug}-breadcrumb-schema`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id={`${study.slug}-article-schema`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id={`${study.slug}-faq-schema`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id={`${study.slug}-organization-schema`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <SectionHeader title={study.title} group_page="Case Studies" current_page={study.title} display="d-none" />

            <main className="codm-case-detail">
                <section className="codm-case-detail-hero" aria-labelledby="case-study-title">
                    <div className="container">
                        <div className="codm-case-detail-hero-grid">
                            <div>
                                <span className="codm-case-system-badge">
                                    <i className={getIcon(study.industry)} aria-hidden="true" />
                                    {study.industry} Case Study
                                </span>
                                <h2 id="case-study-title">{study.title}</h2>
                                <p>{study.description}</p>
                                <div className="codm-case-detail-tech">
                                    {study.technologies.slice(0, 5).map((tech) => (
                                        <span key={tech}>
                                            <i className={getIcon(tech)} aria-hidden="true" />
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="codm-case-system-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Schedule Consultation
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="/case-studies" className="theme-btn2">
                                        More Case Studies
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="codm-case-detail-visual">
                                <Image src={study.image} alt={study.imageAlt} fill priority sizes="(max-width: 991px) 100vw, 42vw" />
                                <div className="codm-case-detail-logo">Client Logo</div>
                            </div>
                        </div>
                        <div className="codm-case-detail-metrics">
                            {study.metrics.map((metric) => (
                                <article key={metric.label}>
                                    <i className="fa-solid fa-chart-simple" aria-hidden="true" />
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="client-overview">
                    <div className="container">
                        <div className="codm-case-detail-split">
                            <div className="codm-case-detail-illustration" aria-hidden="true">
                                <i className="fa-solid fa-cloud" />
                                <span />
                                <span />
                                <span />
                            </div>
                            <div>
                                <span className="codm-case-detail-eyebrow">
                                    <i className="fa-solid fa-building-user" aria-hidden="true" />
                                    Client Overview
                                </span>
                                <h2 id="client-overview">{study.client.name}</h2>
                                <p>{study.client.overview}</p>
                                <div className="codm-case-detail-profile">
                                    <span><strong>Industry:</strong> {study.industry}</span>
                                    <span><strong>Business model:</strong> {study.client.businessModel}</span>
                                    <span><strong>Services:</strong> {study.services.join(", ")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-muted codm-case-challenge-section" aria-labelledby="business-challenges">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-triangle-exclamation" aria-hidden="true" /> Business Challenges</span>
                            <h2 id="business-challenges">The Salesforce barriers that needed a scalable solution.</h2>
                        </div>
                        <div className="codm-case-detail-card-grid">
                            {study.challenges.map((challenge) => (
                                <article key={challenge}>
                                    <i className={getIcon(challenge)} aria-hidden="true" />
                                    <h3>{challenge}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="solution-architecture">
                    <div className="container">
                        <div className="codm-case-detail-split align-items-start">
                            <div>
                                <span className="codm-case-detail-eyebrow">
                                    <i className="fa-solid fa-sitemap" aria-hidden="true" />
                                    Solution Architecture
                                </span>
                                <h2 id="solution-architecture">A Salesforce architecture designed for performance, governance and growth.</h2>
                                <div className="codm-case-detail-solution-list">
                                    {study.solution.map((item) => (
                                        <p key={item}>
                                            <i className="fa-solid fa-circle-check" aria-hidden="true" />
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <aside className="codm-case-detail-flow" aria-label="Salesforce architecture flow">
                                {study.services.slice(0, 4).map((service, index) => (
                                    <span key={service}>
                                        <i className={getIcon(service)} aria-hidden="true" />
                                        {service}
                                    </span>
                                ))}
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-dark" aria-labelledby="implementation-process">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-timeline" aria-hidden="true" /> Implementation Process</span>
                            <h2 id="implementation-process">A practical delivery timeline from discovery to support.</h2>
                        </div>
                        <div className="codm-case-detail-timeline">
                            {study.process.map((step, index) => (
                                <article key={step}>
                                    <i className={processIcons[index] || "fa-solid fa-circle-check"} aria-hidden="true" />
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{step}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="technology-stack">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-microchip" aria-hidden="true" /> Technology Stack</span>
                            <h2 id="technology-stack">Salesforce technology used to deliver the solution.</h2>
                        </div>
                        <div className="codm-case-detail-tech-grid">
                            {study.technologies.map((tech) => (
                                <span key={tech}>
                                    <i className={getIcon(tech)} aria-hidden="true" />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-muted" aria-labelledby="features-results">
                    <div className="container">
                        <div className="codm-case-detail-result-grid">
                            <div>
                                <span className="codm-case-detail-eyebrow">
                                    <i className="fa-solid fa-cubes-stacked" aria-hidden="true" />
                                    Key Features Delivered
                                </span>
                                <h2 id="features-results">High-impact Salesforce capabilities delivered for measurable outcomes.</h2>
                                <div className="codm-case-detail-feature-grid">
                                    {study.features.map((feature) => (
                                        <span key={feature}>
                                            <i className="fa-solid fa-check" aria-hidden="true" />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="codm-case-detail-results">
                                {study.metrics.map((metric) => (
                                    <article key={metric.label}>
                                        <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
                                        <strong>{metric.value}</strong>
                                        <span>{metric.label}</span>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="before-after">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-code-compare" aria-hidden="true" /> Before vs After</span>
                            <h2 id="before-after">A clearer view of the business transformation.</h2>
                        </div>
                        <div className="codm-case-detail-table" role="table" aria-label="Before and after Salesforce comparison">
                            <div role="row">
                                <strong role="columnheader">Before</strong>
                                <strong role="columnheader">After</strong>
                            </div>
                            {study.comparison.map((item) => (
                                <div role="row" key={item.before}>
                                    <span role="cell"><i className="fa-solid fa-circle-minus" aria-hidden="true" /> {item.before}</span>
                                    <span role="cell"><i className="fa-solid fa-circle-check" aria-hidden="true" /> {item.after}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-muted" aria-labelledby="visual-proof">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-images" aria-hidden="true" /> Screenshots & Visual Proof</span>
                            <h2 id="visual-proof">CRM visuals that show the solution experience.</h2>
                        </div>
                        <div className="codm-case-detail-gallery">
                            {["Salesforce Dashboard", "Architecture Diagram", "CRM Workflow", "Analytics Dashboard"].map((item) => (
                                <article key={item}>
                                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                                    <h3>{item}</h3>
                                    <p>{study.category} visual mockup for stakeholder review and solution storytelling.</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="testimonial">
                    <div className="container">
                        <article className="codm-case-detail-testimonial">
                            <div className="codm-case-detail-avatar" aria-hidden="true">CM</div>
                            <div>
                                <span id="testimonial"><i className="fa-solid fa-quote-left" aria-hidden="true" /> Client Testimonial</span>
                                <p>“{study.testimonial}”</p>
                                <strong>Client Stakeholder</strong>
                                <small>{study.client.name}</small>
                                <div aria-label="Five star rating">★★★★★</div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-muted" aria-labelledby="case-faq">
                    <div className="container">
                        <div className="codm-case-detail-split align-items-start">
                            <div>
                                <span className="codm-case-detail-eyebrow">
                                    <i className="fa-solid fa-circle-question" aria-hidden="true" />
                                    FAQ
                                </span>
                                <h2 id="case-faq">Salesforce case study questions</h2>
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
                    </div>
                </section>

                <section className="codm-case-detail-section" aria-labelledby="related-services">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-link" aria-hidden="true" /> Related Services</span>
                            <h2 id="related-services">Explore services connected to this Salesforce transformation.</h2>
                        </div>
                        <div className="codm-case-system-service-grid">
                            {study.relatedServices.map((service) => (
                                <Link href={service.href} key={service.label}>
                                    <i className={getIcon(service.label)} aria-hidden="true" />
                                    <span>{service.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-case-detail-section codm-case-detail-muted" aria-labelledby="related-case-studies">
                    <div className="container">
                        <div className="codm-case-system-heading">
                            <span><i className="fa-solid fa-folder-open" aria-hidden="true" /> Related Case Studies</span>
                            <h2 id="related-case-studies">Keep exploring Salesforce implementation outcomes.</h2>
                        </div>
                        <div className="row">
                            {relatedStudies.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.slug}>
                                    <article className="codm-case-system-card">
                                        <div className="codm-case-system-card-image">
                                            <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" />
                                            <span>{item.industry}</span>
                                        </div>
                                        <div className="codm-case-system-card-body">
                                            <span className="codm-case-system-card-icon" aria-hidden="true">
                                                <i className={getIcon(item.category)} />
                                            </span>
                                            <span className="codm-case-system-card-tag">{item.category}</span>
                                            <h3><Link href={`/case-studies/${item.slug}`}>{item.title}</Link></h3>
                                            <p>{item.summary}</p>
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

                <section className="codm-case-system-cta" aria-labelledby="case-study-final-cta">
                    <div className="container">
                        <div>
                            <span><i className="fa-solid fa-rocket" aria-hidden="true" /> Ready to Transform Your Salesforce Ecosystem?</span>
                            <h2 id="case-study-final-cta">Partner with CodM Software to automate workflows, improve customer experiences and accelerate digital transformation.</h2>
                            <div className="codm-case-system-actions justify-content-center">
                                <Link href="/contact" className="theme-btn1">
                                    Contact Us
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                                <Link href="/contact" className="theme-btn2">
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
