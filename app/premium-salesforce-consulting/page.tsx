import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Premium Salesforce Consulting Company | CodM Software",
    description:
        "Create scalable Salesforce CRM solutions with CodM Software. Expert consulting, implementation, integration, automation and managed services for growing businesses.",
    keywords:
        "Salesforce Consulting Company, Salesforce CRM Solutions, Salesforce Experts, Salesforce Integration Services, Salesforce Implementation Partner",
    alternates: {
        canonical: "/premium-salesforce-consulting",
    },
};

const expertise = [
    { title: "Salesforce Consulting", text: "Turn CRM goals into a practical roadmap with clear priorities, governance and adoption planning.", icon: "fa-solid fa-compass-drafting" },
    { title: "Salesforce Implementation", text: "Launch Salesforce with clean configuration, useful workflows and a rollout plan your team can follow.", icon: "fa-solid fa-rocket" },
    { title: "CRM Customization", text: "Shape objects, flows, dashboards, approvals and user experiences around your real operating model.", icon: "fa-solid fa-pen-ruler" },
    { title: "Salesforce Integration", text: "Connect Salesforce with ERP, websites, finance systems, marketing tools and customer platforms.", icon: "fa-solid fa-plug-circle-bolt" },
    { title: "Managed Services", text: "Keep your Salesforce org secure, optimized and aligned with business changes after go-live.", icon: "fa-solid fa-shield-halved" },
    { title: "Automation Solutions", text: "Reduce manual work with smart flows, alerts, approvals, reporting and repeatable CRM processes.", icon: "fa-solid fa-gears" },
];

const reasons = [
    { title: "Certified Experts", text: "Salesforce specialists with practical delivery experience across CRM strategy, implementation and support.", icon: "fa-solid fa-certificate" },
    { title: "Agile Delivery", text: "Transparent sprints, fast feedback cycles and focused releases that keep the project moving.", icon: "fa-solid fa-arrows-spin" },
    { title: "Scalable Solutions", text: "Architecture designed for more users, more data, more automation and long-term growth.", icon: "fa-solid fa-layer-group" },
    { title: "Industry Experience", text: "CRM workflows shaped around the sales, service and reporting needs of different industries.", icon: "fa-solid fa-briefcase" },
    { title: "Long-Term Support", text: "Post-launch support for enhancements, reporting improvements, admin help and release readiness.", icon: "fa-solid fa-life-ring" },
    { title: "ROI-Focused Strategy", text: "Every build decision is connected to productivity, visibility, conversion and customer experience.", icon: "fa-solid fa-bullseye" },
];

const industries = [
    { title: "Healthcare", text: "Secure patient journeys, care coordination and service visibility." },
    { title: "SaaS", text: "Lead-to-renewal visibility for product-led and subscription teams." },
    { title: "Finance", text: "Client onboarding, compliance workflows and relationship tracking." },
    { title: "Retail", text: "Customer engagement, order visibility and loyalty workflows." },
    { title: "Real Estate", text: "Lead management, site visit tracking and buyer follow-up automation." },
    { title: "Education", text: "Admissions, student support and engagement workflows in one CRM." },
    { title: "IT Services", text: "Pipeline, delivery handoff and account management transparency." },
];

const process = [
    { step: "01", title: "Discovery", text: "Map business goals, users, processes, data quality and current CRM gaps." },
    { step: "02", title: "Planning", text: "Define milestones, architecture, roles, integrations, reporting and adoption priorities." },
    { step: "03", title: "Development", text: "Build custom objects, flows, dashboards, permissions and user journeys." },
    { step: "04", title: "Integration", text: "Connect Salesforce with the systems that already power your business." },
    { step: "05", title: "Testing", text: "Validate automation, data, permissions, reports and real user scenarios." },
    { step: "06", title: "Deployment", text: "Launch with rollout support, change management and guided enablement." },
    { step: "07", title: "Optimization", text: "Improve adoption, performance, reporting and automation after launch." },
];

const metrics = [
    { value: "40%", label: "workflow efficiency improvement through automation" },
    { value: "30%", label: "better pipeline and opportunity visibility" },
    { value: "25%", label: "faster reporting and management decisions" },
    { value: "360°", label: "customer view across sales and service teams" },
];

const testimonials = [
    {
        quote: "CodM Software helped us move from scattered spreadsheets to a Salesforce process our sales team actually uses.",
        name: "Operations Director",
        role: "SaaS Business",
    },
    {
        quote: "Their team understood our workflows quickly and delivered a practical CRM setup with clean reporting.",
        name: "CRM Lead",
        role: "IT Services",
    },
    {
        quote: "The implementation improved follow-ups, visibility and confidence in our customer data.",
        name: "Growth Manager",
        role: "Retail Company",
    },
];

const faqs = [
    {
        question: "What makes CodM Software a reliable Salesforce consulting company?",
        answer: "CodM Software combines Salesforce implementation skills with business process understanding, helping teams design CRM systems that are scalable, usable and aligned with measurable outcomes.",
    },
    {
        question: "Can you customize Salesforce for our business process?",
        answer: "Yes. We customize Salesforce objects, dashboards, automation, roles, permissions, reports and integrations around your workflows instead of forcing a generic template.",
    },
    {
        question: "Do you provide Salesforce integration services?",
        answer: "Yes. We connect Salesforce with websites, ERP systems, marketing platforms, finance tools, support systems and custom APIs to improve data flow and reduce manual effort.",
    },
    {
        question: "Do you support Salesforce after implementation?",
        answer: "Yes. Our managed services include admin support, enhancements, issue resolution, reporting improvements, release readiness and continuous optimization.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodM Software Premium Salesforce Consulting",
    url: "https://codmsoftware.com/premium-salesforce-consulting",
    description:
        "Premium Salesforce consulting, implementation, integration, CRM customization, automation and managed services by CodM Software.",
    serviceType: [
        "Salesforce Consulting Company",
        "Salesforce CRM Solutions",
        "Salesforce Integration Services",
        "Salesforce Implementation Partner",
    ],
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
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

export default function PremiumSalesforceConsultingPage() {
    return (
        <Layout>
            <Script
                id="premium-salesforce-consulting-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="premium-salesforce-consulting-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader title="Premium Salesforce Consulting" group_page="" current_page="Premium Salesforce Consulting" display="d-none" />

            <main className="codm-premium-home codm-consulting-page">
                <section className="codm-premium-hero" aria-labelledby="premium-salesforce-title">
                    <div className="container">
                        <div className="codm-premium-hero-grid">
                            <div className="codm-premium-hero-copy">
                                <span className="codm-premium-eyebrow">Salesforce consulting company</span>
                                <h2 id="premium-salesforce-title">Build a Salesforce CRM engine that connects teams, data and growth.</h2>
                                <p>
                                    CodM Software helps businesses plan, implement, customize and optimize Salesforce
                                    with an enterprise-ready experience built for adoption, automation and measurable ROI.
                                </p>
                                <div className="codm-premium-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Book Free Consultation
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="tel:+919871717425" className="theme-btn2">
                                        Talk to Salesforce Experts
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                                <div className="codm-premium-badges" aria-label="Salesforce service badges">
                                    <span>CRM Strategy</span>
                                    <span>Implementation</span>
                                    <span>Integration</span>
                                    <span>Managed Support</span>
                                </div>
                            </div>
                            <div className="codm-premium-visual" aria-label="Salesforce CRM architecture illustration">
                                <svg className="codm-premium-orbit" viewBox="0 0 520 420" role="img" aria-label="Connected Salesforce CRM workflow">
                                    <path d="M70 214C130 86 310 56 430 170" />
                                    <path d="M90 280c92 86 244 80 344-4" />
                                    <path d="M260 82v260" />
                                    <circle cx="150" cy="230" r="24" />
                                    <circle cx="260" cy="82" r="26" />
                                    <circle cx="414" cy="178" r="22" />
                                    <circle cx="260" cy="342" r="26" />
                                </svg>
                                <div className="codm-premium-cloud-card">
                                    <img
                                        src="/assets/img/logo/srplogo.png"
                                        alt="CodM Software Salesforce Ridge Partner badge"
                                        width="512"
                                        height="512"
                                        decoding="async"
                                        loading="eager"
                                    />
                                    <strong>Premium Salesforce delivery</strong>
                                    <span>Strategy, build, integration, launch and optimization handled with one connected team.</span>
                                </div>
                                <div className="codm-premium-float-card one">
                                    <i className="fa-solid fa-cloud" aria-hidden="true" />
                                    <span>Cloud CRM</span>
                                </div>
                                <div className="codm-premium-float-card two">
                                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                                    <span>ROI Visibility</span>
                                </div>
                            </div>
                        </div>
                        <div className="codm-premium-stats" aria-label="Salesforce consulting success metrics">
                            {metrics.map((metric) => (
                                <article key={metric.label}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="premium-salesforce-expertise">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Salesforce expertise</span>
                            <h2 id="premium-salesforce-expertise">Everything your Salesforce CRM needs to work better.</h2>
                        </div>
                        <div className="codm-premium-service-grid">
                            {expertise.map((item) => (
                                <article className="codm-premium-service-card" key={item.title}>
                                    <i className={item.icon} aria-hidden="true" />
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="premium-salesforce-why">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Why choose CODM Software</span>
                            <h2 id="premium-salesforce-why">A Salesforce partner focused on clarity, speed and long-term value.</h2>
                        </div>
                        <div className="codm-premium-icon-grid">
                            {reasons.map((reason) => (
                                <article key={reason.title}>
                                    <div className="codm-premium-icon"><i className={reason.icon} aria-hidden="true" /></div>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="premium-salesforce-industries">
                    <div className="container">
                        <div className="codm-premium-split codm-premium-split-sticky">
                            <div>
                                <span className="codm-premium-eyebrow">Industry solutions</span>
                                <h2 id="premium-salesforce-industries">Salesforce experiences shaped for real business teams.</h2>
                                <p>
                                    From lead management to service visibility, we shape CRM workflows around the way
                                    each industry sells, supports, reports and grows.
                                </p>
                            </div>
                            <div className="codm-premium-industry-grid">
                                {industries.map((industry, index) => (
                                    <article key={industry.title}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <h3>{industry.title}</h3>
                                        <p>{industry.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="premium-salesforce-process">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Process timeline</span>
                            <h2 id="premium-salesforce-process">A clean Salesforce workflow from discovery to optimization.</h2>
                        </div>
                        <div className="codm-premium-process codm-premium-process-seven">
                            {process.map((item) => (
                                <article key={item.step}>
                                    <span>{item.step}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section codm-premium-results" aria-labelledby="premium-salesforce-success">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Success metrics</span>
                            <h2 id="premium-salesforce-success">CRM improvements designed to show up in daily work.</h2>
                        </div>
                        <div className="codm-premium-outcomes">
                            {metrics.slice(0, 3).map((metric) => (
                                <article key={metric.label}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="premium-salesforce-testimonials">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Testimonials</span>
                            <h2 id="premium-salesforce-testimonials">Teams trust CodM Software for practical Salesforce momentum.</h2>
                        </div>
                        <div className="codm-premium-testimonials codm-premium-slider" aria-label="Client testimonials">
                            {testimonials.map((item) => (
                                <article key={item.name}>
                                    <p>"{item.quote}"</p>
                                    <h3>{item.name}</h3>
                                    <span>{item.role}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="premium-salesforce-faq">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">FAQ</span>
                            <h2 id="premium-salesforce-faq">Salesforce consulting questions answered.</h2>
                        </div>
                        <div className="codm-premium-faq">
                            {faqs.map((faq) => (
                                <details key={faq.question}>
                                    <summary>{faq.question}</summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-final-cta" aria-labelledby="premium-salesforce-final">
                    <div className="container">
                        <div className="codm-premium-final-inner">
                            <span className="codm-premium-eyebrow">Start your CRM journey</span>
                            <h2 id="premium-salesforce-final">Ready to create a Salesforce CRM your team can trust?</h2>
                            <p>
                                Book a consultation with CodM Software to plan your Salesforce implementation,
                                integration, customization or managed services roadmap.
                            </p>
                            <div className="codm-premium-actions">
                                <Link href="/contact" className="theme-btn1">
                                    Request Demo
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                                <Link href="tel:+919871717425" className="theme-btn2">
                                    Start Your CRM Journey
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
