import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Salesforce Consulting Company in Noida | Expert Salesforce Consultants",
    description:
        "Your trusted Salesforce consulting company in Noida offering implementation, customization, integrations and support. Partner with expert Salesforce consultants to drive your business growth.",
    keywords:
        "Salesforce consulting company in Noida, Salesforce consultant in Noida, Salesforce implementation Noida, Salesforce customization, Salesforce integration, CRM consulting Noida",
    alternates: {
        canonical: "/salesforce-consulting-company-in-noida",
    },
};

const challenges = [
    "Scattered customer data across systems",
    "Manual processes slowing down operations",
    "Limited visibility into sales pipelines",
    "Inefficient lead tracking and follow-ups",
    "Difficulty integrating business tools",
];

const solutions = [
    {
        title: "Centralized Data Management",
        text: "Bring all customer information into a single Salesforce platform for better visibility and decision-making.",
        icon: "fa-solid fa-database",
    },
    {
        title: "Workflow Automation",
        text: "Automate repetitive tasks and business processes to save time, reduce errors and increase team productivity.",
        icon: "fa-solid fa-gears",
    },
    {
        title: "Real-Time Dashboards And Reporting",
        text: "Gain instant insights into sales, performance and customer data through customizable dashboards and reports.",
        icon: "fa-solid fa-chart-line",
    },
    {
        title: "Seamless System Integrations",
        text: "Connect Salesforce with your existing tools and systems to ensure smooth data flow and eliminate operational silos.",
        icon: "fa-solid fa-plug-circle-bolt",
    },
    {
        title: "Lead And Pipeline Optimization",
        text: "Improve lead tracking, nurturing and conversion with structured pipeline management and automation.",
        icon: "fa-solid fa-filter-circle-dollar",
    },
    {
        title: "Scalable CRM Architecture",
        text: "Build flexible Salesforce solutions that adapt and grow with your business requirements without performance limitations.",
        icon: "fa-solid fa-layer-group",
    },
];

const benefits = [
    {
        title: "Improved Sales Efficiency",
        text: "Streamline sales processes and eliminate manual work so your team can close deals faster and more effectively.",
        icon: "fa-solid fa-bolt",
    },
    {
        title: "Better Customer Insights",
        text: "Gain a complete 360-degree view of customer data to understand behavior, preferences and engagement patterns.",
        icon: "fa-solid fa-users-viewfinder",
    },
    {
        title: "Faster Decision-Making",
        text: "Use real-time reports and analytics to help management make informed business decisions quickly and confidently.",
        icon: "fa-solid fa-gauge-high",
    },
    {
        title: "Increased Team Productivity",
        text: "Reduce repetitive tasks and empower your team to focus on high-value activities that drive growth.",
        icon: "fa-solid fa-people-arrows",
    },
    {
        title: "Enhanced Customer Experience",
        text: "Deliver personalized interactions and timely responses to improve customer satisfaction and retention.",
        icon: "fa-solid fa-handshake",
    },
    {
        title: "Scalable Business Growth",
        text: "Create a CRM system that grows with your business and adapts to changing requirements.",
        icon: "fa-solid fa-arrow-trend-up",
    },
];

const useCases = [
    {
        title: "Efficient Lead Management",
        text: "Organize, track and nurture sales leads effectively to improve conversion rates and sales outcomes.",
        icon: "fa-solid fa-address-card",
    },
    {
        title: "Improved Sales Pipeline Visibility",
        text: "Monitor every stage of your sales process to forecast revenue and identify opportunities and risks.",
        icon: "fa-solid fa-diagram-project",
    },
    {
        title: "Automated Customer Support",
        text: "Streamline case management and resolve customer issues faster with automation.",
        icon: "fa-solid fa-headset",
    },
    {
        title: "Streamlined Marketing Campaigns",
        text: "Plan, execute and track marketing campaigns efficiently with better targeting and insights.",
        icon: "fa-solid fa-bullhorn",
    },
    {
        title: "Centralized Data Management",
        text: "Maintain accurate and consistent data across all departments in one unified system.",
        icon: "fa-solid fa-server",
    },
    {
        title: "Enhanced Team Collaboration",
        text: "Enable seamless communication and coordination across teams for better performance.",
        icon: "fa-solid fa-people-group",
    },
];

const whyChooseUs = [
    {
        title: "Certified Salesforce Experts",
        text: "Work with professionals who have hands-on experience delivering successful CRM projects.",
        icon: "fa-solid fa-certificate",
    },
    {
        title: "Tailored Solutions",
        text: "Get customized Salesforce solutions aligned with your specific business goals.",
        icon: "fa-solid fa-pen-ruler",
    },
    {
        title: "Cost-Effective Services",
        text: "Maximize ROI with efficient and budget-friendly implementation strategies.",
        icon: "fa-solid fa-scale-balanced",
    },
    {
        title: "Agile Development Approach",
        text: "Benefit from faster delivery and flexibility through our adaptive development process.",
        icon: "fa-solid fa-code-branch",
    },
    {
        title: "Quality and Scalability Focus",
        text: "Receive high-performing solutions that are built to scale with your business.",
        icon: "fa-solid fa-shield-halved",
    },
    {
        title: "Dedicated Support",
        text: "Get continuous assistance and long-term support to keep your system performing smoothly.",
        icon: "fa-solid fa-life-ring",
    },
];

const results = [
    {
        title: "Reduced Manual Workload",
        text: "Automate repetitive manual tasks to save time and improve operational efficiency.",
        icon: "fa-solid fa-robot",
    },
    {
        title: "Improved Lead Conversion Rates",
        text: "Enhance lead management processes to convert more prospects into customers.",
        icon: "fa-solid fa-arrow-up-right-dots",
    },
    {
        title: "Faster Response Times",
        text: "Respond to customer queries quickly to improve satisfaction and retention.",
        icon: "fa-solid fa-stopwatch",
    },
    {
        title: "Increased Operational Efficiency",
        text: "Streamline workflows and eliminate bottlenecks across teams.",
        icon: "fa-solid fa-sitemap",
    },
    {
        title: "Higher ROI",
        text: "Maximize returns with a CRM that actively supports your business goals.",
        icon: "fa-solid fa-chart-pie",
    },
    {
        title: "Data-Driven Decisions",
        text: "Use real-time insights to make smarter and more effective business decisions.",
        icon: "fa-solid fa-chart-simple",
    },
];

const processSteps = [
    {
        title: "Discover",
        text: "We map your current CRM gaps, team workflows, data sources and business goals before recommending a Salesforce roadmap.",
        icon: "fa-solid fa-magnifying-glass-chart",
    },
    {
        title: "Design",
        text: "We create a practical CRM architecture with clear automations, dashboards, integrations and user journeys.",
        icon: "fa-solid fa-compass-drafting",
    },
    {
        title: "Deliver",
        text: "We implement, test and refine Salesforce so your team can work faster with cleaner data and better visibility.",
        icon: "fa-solid fa-rocket",
    },
    {
        title: "Improve",
        text: "We provide support and optimization as your processes, teams and business requirements evolve.",
        icon: "fa-solid fa-repeat",
    },
];

const successMetrics = [
    { value: "360°", label: "customer visibility" },
    { value: "24/7", label: "CRM access and reporting" },
    { value: "6+", label: "core Salesforce outcomes" },
];

const crmFlowGuide = [
    "Data",
    "Automation",
    "Insights",
    "Growth",
];

const faqs = [
    {
        question: "Why should I hire a Salesforce consultant in Noida?",
        answer: "Hiring a Salesforce consultant in Noida gives you localized expertise, cost-effective services and easier communication. A nearby consulting team can understand regional business challenges, provide tailored CRM solutions and offer faster support for smoother implementation.",
    },
    {
        question: "How much does Salesforce consulting cost?",
        answer: "Salesforce consulting cost depends on the scope, complexity and requirements of your project. Basic implementations may cost less, while advanced customizations and integrations require higher investment. CodM Software offers flexible pricing models to provide strong value within your budget.",
    },
    {
        question: "Do you provide ongoing Salesforce support?",
        answer: "Yes, CodM Software provides Salesforce support and maintenance services to keep your CRM running smoothly. We monitor performance, resolve issues, implement updates and optimize your system as your business grows.",
    },
    {
        question: "How long does Salesforce implementation take?",
        answer: "The Salesforce implementation timeline depends on the size and complexity of the project. A basic setup may take a few weeks, while more complex solutions can take several months. We follow a structured process focused on quality, accuracy and minimal disruption.",
    },
    {
        question: "Can you customize Salesforce for my business needs?",
        answer: "Yes, we customize Salesforce to match your business processes and requirements. From workflows and dashboards to automation and integrations, we tailor Salesforce so it works the way your business needs it to work.",
    },
    {
        question: "Which industries do you serve?",
        answer: "We work with businesses across real estate, healthcare, finance, e-commerce, IT and education. Our team studies each industry's unique challenges to build CRM systems that are relevant, effective and aligned with business goals.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Consulting Company in Noida",
    serviceType: "Salesforce consulting, implementation, customization, integration and support",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    areaServed: {
        "@type": "City",
        name: "Noida",
    },
    url: "https://codmsoftware.com/salesforce-consulting-company-in-noida",
    description:
        "CodM Software provides Salesforce consulting services in Noida, including CRM implementation, customization, integrations, workflow automation, reporting and ongoing support.",
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

export default function SalesforceConsultingCompanyInNoida() {
    return (
        <Layout>
            <Script
                id="salesforce-noida-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="salesforce-noida-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader
                title="Salesforce Consulting Company in Noida"
                group_page=""
                current_page="Salesforce Consulting Noida"
                display="d-none"
            />

            <div className="salesforce-noida-page">
                <section className="salesforce-noida-hero" aria-labelledby="salesforce-noida-title">
                    <div className="container">
                        <div className="salesforce-noida-hero-grid">
                            <div className="salesforce-noida-hero-content">
                                <span className="salesforce-noida-eyebrow">Salesforce Consulting in Noida</span>
                                <h2 id="salesforce-noida-title">Accelerate Growth with Salesforce Consulting in Noida</h2>
                                <p>
                                    Work with a trusted Salesforce consultant in Noida to implement, customize and
                                    optimize your CRM for better efficiency, visibility and growth.
                                </p>
                                <div className="salesforce-noida-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Talk to a Consultant
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link href="/service" className="salesforce-noida-secondary-link">
                                        Explore Services
                                    </Link>
                                </div>
                                <div className="salesforce-noida-trust-points" aria-label="Salesforce consulting highlights">
                                    <span>Implementation</span>
                                    <span>Customization</span>
                                    <span>Integration</span>
                                    <span>Support</span>
                                </div>
                            </div>
                            <div className="salesforce-noida-hero-media">
                                <svg
                                    className="salesforce-noida-hero-guide"
                                    viewBox="0 0 420 320"
                                    role="img"
                                    aria-label="Salesforce CRM workflow guide"
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
                                    src="/assets/img/service/service-details-img1.png"
                                    alt="Salesforce consultant in Noida helping a business optimize CRM workflows"
                                    width="696"
                                    height="522"
                                    loading="eager"
                                    decoding="async"
                                />
                                <div className="salesforce-noida-media-card">
                                    <strong>CRM built for growth</strong>
                                    <span>Better visibility, automation and customer engagement in one platform.</span>
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

                <section className="salesforce-noida-section" aria-labelledby="salesforce-noida-challenges">
                    <div className="container">
                        <div className="salesforce-noida-two-column">
                            <div>
                                <span className="salesforce-noida-eyebrow">Key Challenges</span>
                                <h2 id="salesforce-noida-challenges">Struggling With Inefficient CRM Processes</h2>
                                <h3>Common CRM Challenges Businesses Face</h3>
                                <p>
                                    Many businesses in India face inefficiencies due to disconnected systems, manual
                                    workflows and a lack of real-time data visibility. These challenges slow down
                                    operations, reduce team productivity and negatively impact customer experience.
                                </p>
                                <p>
                                    As a Salesforce consulting company in Noida, we help businesses overcome these
                                    challenges with scalable, efficient and future-ready solutions.
                                </p>
                            </div>
                            <ul className="salesforce-noida-check-list">
                                {challenges.map((challenge) => (
                                    <li key={challenge}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="salesforce-noida-flow-guide" aria-label="CRM transformation flow">
                            {crmFlowGuide.map((item, index) => (
                                <div className="salesforce-noida-flow-step" key={item}>
                                    <span>
                                        <i className={index === 0 ? "fa-solid fa-database" : index === 1 ? "fa-solid fa-gears" : index === 2 ? "fa-solid fa-chart-line" : "fa-solid fa-arrow-trend-up"} />
                                    </span>
                                    <strong>{item}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-noida-solutions">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Our Solutions</span>
                            <h2 id="salesforce-noida-solutions">How Our Salesforce Solutions Improve Your Business Operations</h2>
                        </div>
                        <div className="salesforce-noida-card-grid">
                            {solutions.map((solution, index) => (
                                <article className="salesforce-noida-card" key={solution.title}>
                                    <div className="salesforce-noida-card-top">
                                        <i className={solution.icon} aria-hidden="true" />
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-noida-process">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Consulting Journey</span>
                            <h2 id="salesforce-noida-process">A Clear Salesforce Roadmap From Strategy to Scale</h2>
                            <p>
                                We keep the Salesforce consulting process simple, transparent and business-focused so
                                every decision supports measurable CRM improvement.
                            </p>
                        </div>
                        <div className="salesforce-noida-process">
                            {processSteps.map((step, index) => (
                                <article key={step.title}>
                                    <div className="salesforce-noida-process-icon">
                                        <i className={step.icon} aria-hidden="true" />
                                    </div>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-noida-benefits">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Business Benefits</span>
                            <h2 id="salesforce-noida-benefits">Key Benefits of Salesforce Consulting</h2>
                            <p>
                                Implementing Salesforce with expert guidance can significantly improve your business
                                performance. With the right strategy, Salesforce becomes a powerful growth engine for
                                your business.
                            </p>
                        </div>
                        <div className="salesforce-noida-feature-list">
                            {benefits.map((benefit) => (
                                <article key={benefit.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={benefit.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.text}</p>
                                </article>
                            ))}
                        </div>
                        <details className="salesforce-noida-read-more">
                            <summary>Read more about how Salesforce consulting improves CRM performance</summary>
                            <p>
                                Salesforce consulting helps your business move from disconnected activity to a unified,
                                measurable operating system. With the right setup, sales teams can prioritize leads,
                                service teams can resolve cases faster and leadership can see performance clearly
                                through real-time dashboards.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="salesforce-noida-cta" aria-labelledby="salesforce-noida-cta-title">
                    <div className="container">
                        <div className="salesforce-noida-cta-inner">
                            <div>
                                <span className="salesforce-noida-eyebrow">CRM Strategy</span>
                                <h2 id="salesforce-noida-cta-title">Ready to make Salesforce work better for your business?</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Get Consultation
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-noida-use-cases">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Use Cases</span>
                            <h2 id="salesforce-noida-use-cases">What You Can Achieve With Salesforce</h2>
                            <p>
                                Salesforce can be tailored to support a wide range of business functions across multiple
                                departments, from managing leads to automating customer support.
                            </p>
                        </div>
                        <div className="salesforce-noida-use-grid">
                            {useCases.map((useCase) => (
                                <article key={useCase.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={useCase.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{useCase.title}</h3>
                                    <p>{useCase.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-noida-why-us">
                    <div className="container">
                        <div className="salesforce-noida-two-column salesforce-noida-two-column-reverse">
                            <div className="salesforce-noida-highlight-panel">
                                <span>CodM Software</span>
                                <strong>Trusted Salesforce consultants for practical, scalable and result-driven CRM solutions.</strong>
                                <Link href="/about-us">Learn about CodM Software</Link>
                            </div>
                            <div>
                                <span className="salesforce-noida-eyebrow">Why Us</span>
                                <h2 id="salesforce-noida-why-us">Why Choose CodM Software</h2>
                                <p>
                                    Choosing the right Salesforce consulting company in Noida is important for CRM
                                    success. CodM Software combines technical expertise with a strong understanding of
                                    business processes and long-term partnership needs.
                                </p>
                                <div className="salesforce-noida-mini-grid">
                                    {whyChooseUs.map((item) => (
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
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-noida-results">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Key Results</span>
                            <h2 id="salesforce-noida-results">Delivering Measurable Results That Matter for Your Business</h2>
                            <p>
                                Our Salesforce consulting services focus on improving efficiency, enhancing customer
                                experience and driving measurable growth.
                            </p>
                        </div>
                        <div className="salesforce-noida-results-grid">
                            {results.map((result) => (
                                <article key={result.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={result.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{result.title}</h3>
                                    <p>{result.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-noida-faq">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">FAQ</span>
                            <h2 id="salesforce-noida-faq">Salesforce Consulting in Noida Questions</h2>
                        </div>
                        <div className="salesforce-noida-faq-list">
                            {faqs.map((faq) => (
                                <article key={faq.question}>
                                    <div className="salesforce-noida-icon">
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
