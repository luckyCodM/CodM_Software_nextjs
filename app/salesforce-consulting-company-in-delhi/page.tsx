import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Trusted Salesforce Consulting Company in Delhi | CodM Software",
    description:
        "CodM Software, your trusted Salesforce consulting company in Delhi, delivers expert implementation, customization, integration and support to grow your business.",
    keywords:
        "Salesforce Consulting Company in Delhi, Salesforce Ridge Partner, Salesforce CRM Solutions, Salesforce Implementation Services, Salesforce Consulting Company in Noida, Salesforce consultant Delhi",
    alternates: {
        canonical: "/salesforce-consulting-company-in-delhi",
    },
    openGraph: {
        title: "Trusted Salesforce Consulting Company in Delhi | CodM Software",
        description:
            "Expert Salesforce implementation, customization, integration and support for growing businesses in Delhi.",
        url: "https://codmsoftware.com/salesforce-consulting-company-in-delhi",
        siteName: "CodM Software",
        type: "website",
    },
};

const challenges = [
    "Disconnected systems leading to scattered data",
    "Poor visibility into sales activities and pipeline",
    "Manual processes slowing down daily operations",
    "Difficulty managing leads and customer interactions",
];

const benefits = [
    {
        title: "Centralized Data",
        text: "All customer information is stored in one place, ensuring teams have accurate and up-to-date data at all times.",
        icon: "fa-solid fa-database",
    },
    {
        title: "Automation",
        text: "Salesforce automates repetitive tasks, enabling staff to focus on higher-value and revenue-generating activities.",
        icon: "fa-solid fa-gears",
    },
    {
        title: "Real-Time Reporting",
        text: "Gain instant insights from performance dashboards and reports, enabling informed and timely decisions.",
        icon: "fa-solid fa-chart-line",
    },
    {
        title: "Improved Engagement",
        text: "Personalized interactions and consistent follow-ups enhance customer satisfaction and loyalty.",
        icon: "fa-solid fa-handshake",
    },
    {
        title: "Team Collaboration",
        text: "Sales, marketing and support teams work together efficiently within a single connected system.",
        icon: "fa-solid fa-people-group",
    },
    {
        title: "Scalable Growth",
        text: "Salesforce evolves with your business, supporting expansion without requiring major overhauls.",
        icon: "fa-solid fa-arrow-trend-up",
    },
];

const customSolutions = [
    {
        title: "End-to-End Setup",
        text: "Complete Salesforce deployment aligned with your processes for seamless adoption.",
        icon: "fa-solid fa-rocket",
    },
    {
        title: "Custom Workflows",
        text: "Tailored automation improves efficiency and reduces manual effort across teams.",
        icon: "fa-solid fa-diagram-project",
    },
    {
        title: "Tool Integration",
        text: "Connect Salesforce with ERP, marketing and accounting tools for a unified ecosystem.",
        icon: "fa-solid fa-plug-circle-bolt",
    },
    {
        title: "Data Migration",
        text: "Securely and accurately transfer critical business data to Salesforce without loss.",
        icon: "fa-solid fa-database",
    },
    {
        title: "Continuous Enhancements",
        text: "Keep improving your CRM so it stays efficient and grows with business needs.",
        icon: "fa-solid fa-repeat",
    },
    {
        title: "Flexible Solutions",
        text: "Build systems that adapt as your business changes without slowing operations.",
        icon: "fa-solid fa-layer-group",
    },
];

const whyChooseUs = [
    {
        title: "Certified Expertise",
        text: "Salesforce-certified professionals combine strong technical skills with real business understanding.",
        icon: "fa-solid fa-certificate",
    },
    {
        title: "Scalable Solutions",
        text: "We design systems that grow with your business as operations expand over time.",
        icon: "fa-solid fa-up-right-and-down-left-from-center",
    },
    {
        title: "Industry Insight",
        text: "Deep business understanding helps us create relevant, practical and aligned CRM solutions.",
        icon: "fa-solid fa-lightbulb",
    },
    {
        title: "Clear Communication",
        text: "We keep you informed at every step with updates, progress visibility and next actions.",
        icon: "fa-solid fa-comments",
    },
    {
        title: "Post-Implementation Support",
        text: "Our support continues after launch through maintenance, improvements and optimization.",
        icon: "fa-solid fa-headset",
    },
    {
        title: "Customer-Centric Approach",
        text: "Every solution is focused on your goals, outcomes and long-term return on investment.",
        icon: "fa-solid fa-bullseye",
    },
];

const approach = [
    {
        title: "Requirement Analysis",
        text: "We understand your workflows, challenges and goals in detail before designing the right solution.",
        icon: "fa-solid fa-magnifying-glass-chart",
    },
    {
        title: "Tailored Design",
        text: "Your Salesforce setup is customized to fit your daily operations and business processes.",
        icon: "fa-solid fa-compass-drafting",
    },
    {
        title: "Seamless Implementation",
        text: "We implement carefully to minimize downtime and avoid disruption to business activities.",
        icon: "fa-solid fa-screwdriver-wrench",
    },
    {
        title: "Validation & Testing",
        text: "Every feature is tested to make sure the system performs accurately from day one.",
        icon: "fa-solid fa-circle-check",
    },
    {
        title: "Continuous Optimization",
        text: "We improve the system based on feedback and performance so it stays efficient.",
        icon: "fa-solid fa-chart-simple",
    },
    {
        title: "Collaborative Partnership",
        text: "We stay connected with your team as your Salesforce system evolves with your business.",
        icon: "fa-solid fa-people-arrows",
    },
];

const outcomes = [
    {
        title: "Sales Productivity",
        text: "Automate repetitive tasks so your sales team can focus more on closing deals.",
        icon: "fa-solid fa-bolt",
    },
    {
        title: "Data Visibility",
        text: "Centralized data and clear insights give a complete view of customers, leads and opportunities.",
        icon: "fa-solid fa-eye",
    },
    {
        title: "Reduced Workload",
        text: "Streamline processes and reduce manual work so teams operate more efficiently.",
        icon: "fa-solid fa-robot",
    },
    {
        title: "Faster Decisions",
        text: "Real-time dashboards and reports enable quick, informed and data-driven decisions.",
        icon: "fa-solid fa-gauge-high",
    },
    {
        title: "Enhanced Customer Experience",
        text: "Consistent communication and personalized interactions improve long-term retention.",
        icon: "fa-solid fa-heart",
    },
    {
        title: "ROI Maximization",
        text: "An optimized Salesforce system helps you get stronger value from your CRM investment.",
        icon: "fa-solid fa-chart-pie",
    },
];

const processFlow = ["Data", "Automation", "Insights", "Growth"];

const successMetrics = [
    { value: "360°", label: "customer visibility" },
    { value: "6+", label: "core CRM outcomes" },
    { value: "24/7", label: "cloud CRM access" },
];

const faqs = [
    {
        question: "What does a Salesforce consulting company do?",
        answer:
            "A Salesforce consulting company helps businesses implement, customize and optimize Salesforce according to business requirements by analyzing processes, designing suitable solutions and ensuring smooth deployment. As your Salesforce consultant, our role also includes integration, automation and ongoing system improvements. This helps businesses use Salesforce effectively for long-term growth.",
    },
    {
        question: "How long does Salesforce implementation take?",
        answer:
            "The timeline depends on the complexity of your business requirements and customization needs. Smaller implementations can take a few weeks, while larger projects can take a few months. We follow a structured approach to ensure timely delivery with quality, accuracy and minimal disruption.",
    },
    {
        question: "Can Salesforce be customized for my business?",
        answer:
            "Yes, Salesforce is highly flexible and can be tailored to match your workflows and processes. From custom objects to automation and dashboards, everything can be configured so the system fits your business instead of forcing you to adapt.",
    },
    {
        question: "Do you provide support after implementation?",
        answer:
            "Yes, we provide ongoing support for maintaining and improving your Salesforce system. This includes troubleshooting, updates and performance optimization so the system continues to meet evolving business needs and helps maximize long-term ROI.",
    },
    {
        question: "Is Salesforce suitable for small and mid-sized businesses?",
        answer:
            "Yes, Salesforce is designed to scale according to business size and requirements. Small and mid-sized businesses benefit from flexibility and automation without requiring large operational changes. As the business grows, the Salesforce system can expand accordingly.",
    },
    {
        question: "How does Salesforce improve sales performance?",
        answer:
            "Salesforce provides better visibility into leads, opportunities and customer interactions. It automates follow-ups and tracks the entire sales pipeline efficiently, helping sales teams prioritize the right opportunities, close deals faster and improve performance through data-driven insights.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Consulting Company in Delhi",
    serviceType: "Salesforce consulting, implementation, customization, integration and support",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    areaServed: {
        "@type": "City",
        name: "Delhi",
    },
    url: "https://codmsoftware.com/salesforce-consulting-company-in-delhi",
    description:
        "CodM Software provides Salesforce consulting services in Delhi, including CRM implementation, customization, integrations, workflow automation, reporting and ongoing support.",
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

export default function SalesforceConsultingCompanyInDelhi() {
    return (
        <Layout>
            <Script
                id="salesforce-delhi-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="salesforce-delhi-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader
                title="Salesforce Consulting Company in Delhi"
                group_page=""
                current_page="Salesforce Consulting Delhi"
                display="d-none"
            />

            <div className="salesforce-noida-page salesforce-delhi-page">
                <section className="salesforce-noida-hero" aria-labelledby="salesforce-delhi-title">
                    <div className="container">
                        <div className="salesforce-noida-hero-grid">
                            <div className="salesforce-noida-hero-content">
                                <span className="salesforce-noida-eyebrow">Salesforce Consulting in Delhi</span>
                                <h2 id="salesforce-delhi-title">Top Salesforce Consulting Company in Delhi for Growing Businesses</h2>
                                <p>
                                    Helping businesses streamline operations with customized Salesforce solutions that
                                    improve visibility, automate workflows and support scalable growth.
                                </p>
                                <div className="salesforce-noida-actions">
                                    <Link href="/contact" className="theme-btn1">
                                        Book Consultation
                                        <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                    <Link href="tel:+919871717425" className="salesforce-noida-secondary-link">
                                        Talk to Salesforce Experts
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
                                    aria-label="Salesforce CRM solutions workflow for Delhi businesses"
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
                                    alt="Salesforce consulting company in Delhi helping a growing business optimize CRM workflows"
                                    width="696"
                                    height="522"
                                    loading="eager"
                                    decoding="async"
                                />
                                <div className="salesforce-noida-media-card">
                                    <strong>CRM built for Delhi businesses</strong>
                                    <span>Connected data, automation and smarter customer engagement in one platform.</span>
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

                <section className="salesforce-noida-section" aria-labelledby="salesforce-delhi-challenges">
                    <div className="container">
                        <div className="salesforce-noida-two-column">
                            <div>
                                <span className="salesforce-noida-eyebrow">Key Challenges</span>
                                <h2 id="salesforce-delhi-challenges">Business Challenges We Solve for Businesses in Delhi</h2>
                                <h3>Struggling with Inefficient Systems and Processes?</h3>
                                <p>
                                    Many growing businesses face challenges when their systems are not connected or
                                    optimized, leading to inefficiencies across operations. When data is scattered,
                                    teams spend more time managing it than using it, which reduces productivity and
                                    slows decision-making.
                                </p>
                                <p>
                                    Limited visibility into sales and customer interactions makes it difficult to track
                                    opportunities and maintain consistent growth. Manual processes further increase
                                    workload and errors, making it harder for businesses to scale smoothly.
                                </p>
                            </div>
                            <ul className="salesforce-noida-check-list">
                                {challenges.map((challenge) => (
                                    <li key={challenge}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="salesforce-noida-flow-guide" aria-label="CRM transformation flow">
                            {processFlow.map((item, index) => (
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

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-delhi-benefits">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Real Benefits</span>
                            <h2 id="salesforce-delhi-benefits">How Salesforce Helps Your Business</h2>
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
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-delhi-custom">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Custom Solutions</span>
                            <h2 id="salesforce-delhi-custom">Tailored Salesforce Solutions for Delhi Businesses</h2>
                            <p>
                                Every business has unique workflows, and a one-size-fits-all approach rarely works.
                                We at CodM Software design Salesforce solutions that are specifically customized
                                according to your processes, ensuring better adoption and efficiency.
                            </p>
                            <p>
                                Our focus is on creating systems that are practical, easy to use and aligned with your
                                business objectives to ensure you get maximum value from your Salesforce investment.
                            </p>
                        </div>
                        <div className="salesforce-noida-card-grid">
                            {customSolutions.map((solution, index) => (
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

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-delhi-trusted">
                    <div className="container">
                        <div className="salesforce-noida-two-column salesforce-noida-two-column-reverse">
                            <div className="salesforce-noida-highlight-panel">
                                <span>Trusted Partner</span>
                                <strong>Practical, scalable and easy-to-use Salesforce CRM solutions for Delhi businesses.</strong>
                                <Link href="/salesforce-ridge-partner">View Salesforce Ridge Partner milestone</Link>
                            </div>
                            <div>
                                <span className="salesforce-noida-eyebrow">Trusted Partner</span>
                                <h2 id="salesforce-delhi-trusted">Why Businesses in Delhi Choose Us</h2>
                                <p>
                                    Choosing the right Salesforce partner plays a very important role in the success of
                                    your CRM journey. It is not just about implementation but about building a system
                                    that truly supports your business goals and objectives.
                                </p>
                                <p>
                                    We at CodM Software focus on delivering solutions that are practical, scalable and
                                    easy for your team to use. We believe in building long-term partnerships and not
                                    just completing projects.
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

                <section className="salesforce-noida-section" aria-labelledby="salesforce-delhi-approach">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Proven Approach</span>
                            <h2 id="salesforce-delhi-approach">Our Approach to Delivering Results</h2>
                            <p>
                                A structured approach ensures successful Salesforce implementation and long-term
                                usability. We focus on understanding your business in detail before designing any
                                solution, so the system fits your processes and is easy for your team to adopt.
                            </p>
                        </div>
                        <div className="salesforce-noida-process">
                            {approach.map((step, index) => (
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

                <section className="salesforce-noida-cta" aria-labelledby="salesforce-delhi-cta-title">
                    <div className="container">
                        <div className="salesforce-noida-cta-inner">
                            <div>
                                <span className="salesforce-noida-eyebrow">Salesforce CRM Solutions</span>
                                <h2 id="salesforce-delhi-cta-title">Ready to streamline operations with Salesforce?</h2>
                            </div>
                            <Link href="/contact" className="theme-btn2">
                                Request Free Demo
                                <span><i className="fa-solid fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="salesforce-noida-section salesforce-noida-muted" aria-labelledby="salesforce-delhi-impact">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">Measurable Impact</span>
                            <h2 id="salesforce-delhi-impact">Business Outcomes You Can Achieve with Salesforce</h2>
                            <p>
                                Our goal is to deliver results that create a real and lasting impact on your business
                                performance. With the right Salesforce setup, your teams can work more efficiently,
                                reduce manual effort and gain better visibility into data for smarter decisions.
                            </p>
                        </div>
                        <div className="salesforce-noida-results-grid">
                            {outcomes.map((result) => (
                                <article key={result.title}>
                                    <div className="salesforce-noida-icon">
                                        <i className={result.icon} aria-hidden="true" />
                                    </div>
                                    <h3>{result.title}</h3>
                                    <p>{result.text}</p>
                                </article>
                            ))}
                        </div>
                        <details className="salesforce-noida-read-more">
                            <summary>Read more about measurable Salesforce outcomes</summary>
                            <p>
                                Stronger customer relationships are built through consistent and personalized
                                interactions. Ultimately, everything is focused on delivering measurable outcomes that
                                support long-term growth and maximize the value of your CRM investment.
                            </p>
                        </details>
                    </div>
                </section>

                <section className="salesforce-noida-section" aria-labelledby="salesforce-delhi-faq">
                    <div className="container">
                        <div className="salesforce-noida-section-heading">
                            <span className="salesforce-noida-eyebrow">FAQ</span>
                            <h2 id="salesforce-delhi-faq">Salesforce Consulting Company in Delhi Questions</h2>
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

                <section className="salesforce-noida-cta" aria-labelledby="salesforce-delhi-final-cta">
                    <div className="container">
                        <div className="salesforce-noida-cta-inner">
                            <div>
                                <span className="salesforce-noida-eyebrow">Get Started Today</span>
                                <h2 id="salesforce-delhi-final-cta">Build a Salesforce CRM your team will actually use.</h2>
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
