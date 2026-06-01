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
    { value: "8", label: "Salesforce service tracks" },
    { value: "360°", label: "customer visibility focus" },
];

const services = [
    { title: "Salesforce Consulting", text: "Define the right CRM roadmap, governance model and success metrics.", icon: "fa-solid fa-compass-drafting", href: "/contact" },
    { title: "Salesforce Implementation", text: "Launch Salesforce with clean configuration, useful automation and adoption-ready workflows.", icon: "fa-solid fa-rocket", href: "/service" },
    { title: "Salesforce Integration", text: "Connect Salesforce with ERP, websites, marketing tools, payment systems and APIs.", icon: "fa-solid fa-plug-circle-bolt", href: "/service" },
    { title: "CRM Customization", text: "Customize objects, dashboards, flows, roles and experiences around your business process.", icon: "fa-solid fa-pen-ruler", href: "/service" },
    { title: "Sales Cloud", text: "Improve pipeline visibility, lead follow-up and sales productivity.", icon: "fa-solid fa-chart-line", href: "/service" },
    { title: "Service Cloud", text: "Streamline case management, support automation and customer response.", icon: "fa-solid fa-headset", href: "/service" },
    { title: "Marketing Cloud", text: "Build smarter engagement journeys and customer communication workflows.", icon: "fa-solid fa-bullhorn", href: "/service" },
    { title: "Managed Services", text: "Keep Salesforce secure, optimized and aligned with business growth after launch.", icon: "fa-solid fa-shield-halved", href: "/contact" },
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
                            <span className="codm-premium-eyebrow">Salesforce services</span>
                            <h2 id="codm-consulting-services">A complete Salesforce service model from strategy to managed support.</h2>
                        </div>
                        <div className="codm-premium-service-grid">
                            {services.map((service) => (
                                <Link href={service.href} className="codm-premium-service-card" key={service.title}>
                                    <i className={service.icon} aria-hidden="true" />
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                    <span>Explore service</span>
                                </Link>
                            ))}
                        </div>
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
