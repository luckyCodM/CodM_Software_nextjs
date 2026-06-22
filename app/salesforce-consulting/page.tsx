import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Salesforce Consulting Company | Salesforce Experts | CodM Software",
    description:
        "CodM Software is a Salesforce consulting company helping businesses with CRM solutions, implementation, integration, customization and managed services.",
    keywords:
        "Salesforce Consulting Company, Salesforce CRM Solutions, Salesforce Experts, Salesforce Integration Services, Salesforce Implementation Partner",
    alternates: {
        canonical: "/salesforce-consulting",
    },
};

const stats = [
    { value: "35+", label: "Salesforce-certified specialists" },
    { value: "20+", label: "CRM transformation projects" },
    { value: "14", label: "specialist Salesforce service pages" },
    { value: "360°", label: "customer visibility focus" },
];

const services = [
    {
        title: "Agentforce Consulting Services",
        text: "Plan Agentforce strategy, architecture, adoption and continuous optimization with expert guidance.",
        icon: "fa-solid fa-brain",
        href: "/salesforce-agentforce-consulting-services-india",
        category: "AI Strategy",
    },
    {
        title: "Agentforce AI Implementation",
        text: "Deploy trusted Salesforce AI agents that automate work and improve customer engagement.",
        icon: "fa-solid fa-robot",
        href: "/salesforce-agentforce-implementation-partner-india",
        category: "AI & Automation",
    },
    {
        title: "Education Cloud Consulting",
        text: "Connect recruitment, admissions, student success and alumni engagement in one platform.",
        icon: "fa-solid fa-graduation-cap",
        href: "/salesforce-education-cloud-consulting-india",
        category: "Industry Cloud",
    },
    {
        title: "Financial Services Cloud",
        text: "Create connected client experiences for banking, insurance and wealth management teams.",
        icon: "fa-solid fa-landmark",
        href: "/salesforce-financial-services-cloud-consultant",
        category: "Financial Services",
    },
    {
        title: "FSC Consulting Experts",
        text: "Work with specialists who align Financial Services Cloud with your client lifecycle.",
        icon: "fa-solid fa-user-tie",
        href: "/salesforce-fsc-consulting-experts-india",
        category: "Financial Services",
    },
    {
        title: "FSC Strategy & Advisory",
        text: "Build a practical Financial Services Cloud roadmap, operating model and rollout plan.",
        icon: "fa-solid fa-compass-drafting",
        href: "/salesforce-fsc-strategy-advisory-india",
        category: "Strategy",
    },
    {
        title: "FSC Migration Services",
        text: "Move financial data and workflows to Salesforce with validation, governance and control.",
        icon: "fa-solid fa-database",
        href: "/salesforce-fsc-migration-services-india",
        category: "Data & Migration",
    },
    {
        title: "Industry Cloud Consulting",
        text: "Configure Salesforce industry solutions around your data, processes and customer journeys.",
        icon: "fa-solid fa-layer-group",
        href: "/salesforce-industry-cloud-consulting-services-india",
        category: "Industry Cloud",
    },
    {
        title: "Field History Tracking",
        text: "Strengthen audit visibility, compliance and long-term Salesforce field change reporting.",
        icon: "fa-solid fa-clock-rotate-left",
        href: "/salesforce-field-history-tracking-consulting-india",
        category: "Compliance",
    },
    {
        title: "Salesforce Ridge Partner",
        text: "Explore CodM Software's Salesforce expertise, certifications and partner capabilities.",
        icon: "fa-solid fa-award",
        href: "/salesforce-ridge-partner",
        category: "Our Credentials",
    },
    {
        title: "Salesforce Consulting in Bangalore",
        text: "Local Salesforce consulting and implementation support for businesses in Bangalore.",
        icon: "fa-solid fa-location-dot",
        href: "/salesforce-consulting-company-in-bangalore",
        category: "Bangalore",
    },
    {
        title: "Salesforce Consulting in Delhi",
        text: "Salesforce strategy, implementation and optimization services for teams in Delhi.",
        icon: "fa-solid fa-location-dot",
        href: "/salesforce-consulting-company-in-delhi",
        category: "Delhi",
    },
    {
        title: "Salesforce Consulting in Noida",
        text: "Build scalable Salesforce solutions with an experienced consulting team in Noida.",
        icon: "fa-solid fa-location-dot",
        href: "/salesforce-consulting-company-in-noida",
        category: "Noida",
    },
    {
        title: "Salesforce Consulting in Pune",
        text: "Modernize sales, service and CRM operations with Salesforce specialists in Pune.",
        icon: "fa-solid fa-location-dot",
        href: "/salesforce-consulting-company-in-pune",
        category: "Pune",
    },
    {
        title: "FSC Insurance Solutions in India",
        text: "Design and implement Financial Services Cloud for insurance companies in India.",
        icon: "fa-solid fa-location-dot",
        href: "/salesforce-fsc-insurance-solutions-india",
        category: "India",
    },
];

const reasons = [
    { title: "Certified Experts", text: "Hands-on Salesforce professionals who understand both CRM architecture and business operations.", icon: "fa-solid fa-certificate" },
    { title: "Agile Delivery", text: "Clear milestones, faster feedback and practical release planning.", icon: "fa-solid fa-arrows-spin" },
    { title: "ROI-Focused Solutions", text: "Every workflow, dashboard and integration is mapped to measurable value.", icon: "fa-solid fa-bullseye" },
    { title: "Long-Term Support", text: "Admin support, enhancements, reporting fixes and release readiness after go-live.", icon: "fa-solid fa-life-ring" },
    { title: "Scalable Architecture", text: "Salesforce systems designed for more users, more data and more business complexity.", icon: "fa-solid fa-layer-group" },
    { title: "Industry Expertise", text: "CRM patterns tailored to healthcare, SaaS, finance, education, retail and more.", icon: "fa-solid fa-briefcase" },
];

const industries = ["Healthcare", "Real Estate", "SaaS", "Retail", "Finance", "Education", "IT Services"];

const process = [
    { step: "01", title: "Discovery", text: "Understand goals, users, processes, data quality and CRM gaps." },
    { step: "02", title: "Planning", text: "Define architecture, milestones, integrations, roles and implementation priorities." },
    { step: "03", title: "Flexibility", text: "Configure objects, fields, flows, dashboards and business-specific user journeys." },
    { step: "04", title: "Integration", text: "Connect Salesforce with the surrounding tools your teams already use." },
    { step: "05", title: "Testing", text: "Validate data, automation, permissions, reports and edge cases before launch." },
    { step: "06", title: "Deployment", text: "Launch with change management, user enablement and rollout support." },
    { step: "07", title: "Optimization", text: "Improve adoption, performance, reporting and ROI after go-live." },
];

const outcomes = [
    { value: "40%", label: "workflow efficiency lift through automation" },
    { value: "30%", label: "stronger lead and opportunity visibility" },
    { value: "25%", label: "faster reporting and management decisions" },
];

const testimonials = [
    {
        quote: "CodM brought structure to our Salesforce roadmap and helped our users adopt the system with confidence.",
        name: "Business Operations Lead",
        role: "IT Services",
    },
    {
        quote: "The implementation was practical, clean and aligned with how our sales and support teams actually work.",
        name: "Head of Growth",
        role: "SaaS Company",
    },
    {
        quote: "They helped us connect data, automate follow-ups and make Salesforce easier for leadership to trust.",
        name: "CRM Owner",
        role: "Retail Business",
    },
];

const faqs = [
    {
        question: "Why should I hire a Salesforce consulting company?",
        answer: "A Salesforce consulting company helps you plan, implement, customize and optimize Salesforce so it fits your business process, improves adoption and delivers measurable CRM value.",
    },
    {
        question: "Can CodM Software integrate Salesforce with existing tools?",
        answer: "Yes. We integrate Salesforce with websites, ERP systems, marketing tools, finance platforms, service tools and APIs to improve data flow and reduce manual work.",
    },
    {
        question: "Do you provide Salesforce managed services?",
        answer: "Yes. CodM Software provides ongoing Salesforce support, admin help, enhancements, reporting improvements, release support and performance optimization.",
    },
    {
        question: "Can you customize Salesforce for our industry?",
        answer: "Yes. We design Salesforce workflows, dashboards and data models around industry-specific needs across healthcare, real estate, SaaS, retail, finance, education and IT services.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodM Software Salesforce Consulting",
    url: "https://codmsoftware.com/salesforce-consulting",
    description:
        "Salesforce consulting, CRM implementation, integration, customization and managed services from CodM Software.",
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
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Salesforce Consulting Services",
        itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.text,
                url: `https://codmsoftware.com${service.href}`,
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

export default function SalesforceConsultingPage() {
    return (
        <Layout>
            <Script
                id="salesforce-consulting-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="salesforce-consulting-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader title="Salesforce Consulting" group_page="" current_page="Salesforce Consulting" display="d-none" />

            <main className="codm-premium-home codm-consulting-page">
                <section className="codm-premium-hero" aria-labelledby="codm-consulting-title">
                    <div className="container">
                        <div className="codm-premium-hero-grid">
                            <div className="codm-premium-hero-copy">
                                <span className="codm-premium-eyebrow">Salesforce implementation partner</span>
                                <h2 id="codm-consulting-title">Enterprise-grade Salesforce consulting for teams ready to scale.</h2>
                                <p>
                                    CodM Software designs, implements and optimizes Salesforce CRM solutions that
                                    connect teams, automate operations and give leadership reliable visibility into
                                    customer growth.
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
                                <div className="codm-premium-badges" aria-label="Salesforce consulting trust badges">
                                    <span>Consulting</span>
                                    <span>Implementation</span>
                                    <span>Integration</span>
                                    <span>Managed Services</span>
                                </div>
                            </div>
                            <div className="codm-premium-visual" aria-label="Salesforce consulting visual system">
                                <svg className="codm-premium-orbit" viewBox="0 0 520 420" aria-hidden="true">
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
                                    <strong>Salesforce consulting system</strong>
                                    <span>Plan, build, integrate, deploy and optimize your CRM with one expert team.</span>
                                </div>
                                <div className="codm-premium-float-card one">
                                    <i className="fa-solid fa-cloud" aria-hidden="true" />
                                    <span>Cloud CRM</span>
                                </div>
                                <div className="codm-premium-float-card two">
                                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                                    <span>Measurable ROI</span>
                                </div>
                            </div>
                        </div>
                        <div className="codm-premium-stats" aria-label="Salesforce consulting statistics">
                            {stats.map((stat) => (
                                <article key={stat.label}>
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="codm-consulting-partner">
                    <div className="container">
                        <div className="codm-premium-split">
                            <div>
                                <span className="codm-premium-eyebrow">Trusted Salesforce partner</span>
                                <h2 id="codm-consulting-partner">Salesforce expertise built around architecture, adoption and business value.</h2>
                                <p>
                                    Salesforce success depends on more than setup. Your CRM needs the right data model,
                                    automation plan, integration strategy, reporting structure and user experience.
                                </p>
                                <p>
                                    CodM Software helps companies move from scattered processes to a connected CRM
                                    system designed for growth, governance and measurable outcomes.
                                </p>
                                <Link href="/salesforce-ridge-partner" className="codm-premium-text-link">
                                    Explore our Salesforce Ridge Partner recognition
                                </Link>
                            </div>
                            <div className="codm-premium-proof-panel">
                                <h3>Consulting outcomes we focus on</h3>
                                <ul>
                                    <li>Better CRM adoption across business teams</li>
                                    <li>Cleaner customer, lead and opportunity data</li>
                                    <li>Stronger pipeline, reporting and service visibility</li>
                                    <li>Lower manual workload through practical automation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="codm-consulting-services">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Explore our Salesforce expertise</span>
                            <h2 id="codm-consulting-services">Specialist Salesforce solutions for every stage of your CRM journey.</h2>
                            <p>
                                Browse our consulting capabilities, industry solutions, migration services and
                                location-specific Salesforce teams.
                            </p>
                        </div>
                        <nav className="codm-premium-service-grid" aria-label="Salesforce consulting services and locations">
                            {services.map((service) => (
                                <Link href={service.href} className="codm-premium-service-card" key={service.title}>
                                    <i className={service.icon} aria-hidden="true" />
                                    <span className="codm-premium-service-category">{service.category}</span>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                    <span className="codm-premium-service-link">
                                        Explore page <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="codm-consulting-why">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Why choose CODM Software</span>
                            <h2 id="codm-consulting-why">Premium Salesforce delivery that stays practical after launch.</h2>
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

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="codm-consulting-industries">
                    <div className="container">
                        <div className="codm-premium-split codm-premium-split-sticky">
                            <div>
                                <span className="codm-premium-eyebrow">Industry solutions</span>
                                <h2 id="codm-consulting-industries">CRM workflows shaped for your operating model.</h2>
                                <p>
                                    We design Salesforce around how each industry manages leads, service, reporting,
                                    customer engagement and operational accountability.
                                </p>
                            </div>
                            <div className="codm-premium-industry-grid">
                                {industries.map((industry, index) => (
                                    <article key={industry}>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <h3>{industry}</h3>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="codm-consulting-process">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Workflow timeline</span>
                            <h2 id="codm-consulting-process">A structured Salesforce process from discovery to optimization.</h2>
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

                <section className="codm-premium-section codm-premium-results" aria-labelledby="codm-consulting-results">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Client success metrics</span>
                            <h2 id="codm-consulting-results">Salesforce outcomes designed to show up in daily work.</h2>
                        </div>
                        <div className="codm-premium-outcomes">
                            {outcomes.map((outcome) => (
                                <article key={outcome.label}>
                                    <strong>{outcome.value}</strong>
                                    <span>{outcome.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-premium-section" aria-labelledby="codm-consulting-testimonials">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">Testimonials</span>
                            <h2 id="codm-consulting-testimonials">A practical Salesforce partner for teams that need momentum.</h2>
                        </div>
                        <div className="codm-premium-testimonials">
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

                <section className="codm-premium-section codm-premium-muted" aria-labelledby="codm-consulting-faq">
                    <div className="container">
                        <div className="codm-premium-heading">
                            <span className="codm-premium-eyebrow">FAQ</span>
                            <h2 id="codm-consulting-faq">Salesforce consulting questions.</h2>
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

                <section className="codm-premium-final-cta" aria-labelledby="codm-consulting-final">
                    <div className="container">
                        <div className="codm-premium-final-inner">
                            <span className="codm-premium-eyebrow">Start your CRM journey</span>
                            <h2 id="codm-consulting-final">Ready to make Salesforce easier to use, measure and scale?</h2>
                            <p>
                                Talk to CodM Software and get a clear consulting path for implementation, integration,
                                customization or managed Salesforce services.
                            </p>
                            <div className="codm-premium-actions">
                                <Link href="/contact" className="theme-btn1">
                                    Schedule Demo
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
