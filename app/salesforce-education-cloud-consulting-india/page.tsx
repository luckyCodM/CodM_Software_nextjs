import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";

export const metadata: Metadata = {
    title: "Salesforce Education Cloud Consulting India | CodM Software",
    description:
        "Looking for Salesforce Education Cloud consultants in India? We provide implementation, customization, integration, support, and optimization services for educational institutes.",
    keywords:
        "Salesforce Education Cloud consulting India, Salesforce Education Cloud consultants, Education Cloud implementation, Salesforce for educational institutes, student recruitment CRM, admissions CRM",
    alternates: {
        canonical: "/salesforce-education-cloud-consulting-india",
    },
    openGraph: {
        title: "Salesforce Education Cloud Consulting India | CodM Software",
        description:
            "Implementation, customization, integration, support, and optimization services for educational institutes using Salesforce Education Cloud.",
        url: "https://codmsoftware.com/salesforce-education-cloud-consulting-india",
        siteName: "CodM Software",
        type: "website",
        images: [
            {
                url: "/assets/img/service/Education_Cloud.png",
                width: 1200,
                height: 630,
                alt: "Salesforce Education Cloud consulting by CodM Software",
            },
        ],
    },
};

const benefits = [
    "Manage all student information in one place",
    "Streamline admissions and enrollment processes",
    "Improve communication with students and applicants",
    "Track student progress and engagement",
    "Reduce manual work through automation",
    "Gain better insights with real-time reporting",
];

const implementationServices = [
    {
        title: "Education Cloud Implementation",
        text: "CodM Software designs and deploys Salesforce Education Cloud solutions tailored to universities, colleges, schools, and training institutes.",
    },
    {
        title: "Platform Customization",
        text: "Our certified consultants configure objects, workflows, automations, and user experiences to meet institution-specific requirements.",
    },
    {
        title: "Data Migration Services",
        text: "We ensure secure migration of student, faculty, admissions, and alumni data from legacy systems.",
    },
    {
        title: "Process Automation",
        text: "We streamline admissions, advising, case management, and operational workflows to improve overall efficiency.",
    },
    {
        title: "System Architecture Consulting",
        text: "Our experts design scalable Salesforce environments that support future growth and innovation.",
    },
    {
        title: "Ongoing Optimization",
        text: "CodM Software continuously improves your platform performance, usability, and adoption after implementation.",
    },
];

const solutionAreas = [
    {
        eyebrow: "Student Recruitment",
        title: "Streamline Student Recruitment & Admissions",
        text: "Managing inquiries, applications, and enrollment processes can be challenging without the right technology. Salesforce Education Cloud helps institutions attract, engage, and convert prospective students through a connected admissions experience.",
        items: [
            ["Lead Management", "Capture and manage student inquiries from multiple recruitment channels."],
            ["Application Tracking", "Give admissions teams visibility into applicant progress at every stage."],
            ["Workflow Automation", "Automate admissions reviews, approvals, notifications, and follow-up activities."],
            ["Communication Management", "Build personalized journeys that keep prospective students informed."],
            ["Document Management", "Enable secure collection and organization of admissions documents."],
            ["Enrollment Analytics", "Measure recruitment performance and enrollment outcomes with reporting."],
        ],
    },
    {
        eyebrow: "Student Success",
        title: "Solutions to Improve Student Engagement and Retention",
        text: "Student success depends on proactive support, meaningful engagement, and timely interventions. Education Cloud enables institutions to deliver personalized experiences that improve satisfaction, retention, and academic outcomes.",
        items: [
            ["Student Journey Management", "Track the complete student journey from onboarding to graduation and beyond."],
            ["Academic Advising", "Help advisors, faculty, and support teams collaborate with timely student guidance."],
            ["Case Management", "Resolve student inquiries, requests, and concerns faster with consistent support."],
            ["Personalized Communications", "Create targeted communication strategies for each student journey stage."],
            ["Success Monitoring", "Identify students who need support and enable proactive interventions."],
            ["Retention Analytics", "Understand engagement patterns and improve student success with dashboards."],
        ],
    },
    {
        eyebrow: "Alumni Engagement",
        title: "Build Stronger Relationships with Alumni and Donors",
        text: "Building lasting relationships with alumni and donors is essential for institutional growth. Salesforce Education Cloud helps institutions maintain meaningful connections long after graduation.",
        items: [
            ["Alumni Relationship Management", "Support communications, networking opportunities, events, and engagement from one platform."],
            ["Donor Management", "Strengthen donor relationships, streamline fundraising, and track contributions."],
            ["Event Management", "Plan and manage alumni events, reunions, webinars, and community programs."],
            ["Targeted Outreach", "Create personalized outreach that encourages stronger alumni engagement."],
            ["Engagement Tracking", "View alumni interactions, event participation, donations, and related activities."],
            ["Fundraising Insights", "Measure campaign performance and identify data-driven fundraising opportunities."],
        ],
    },
];

const whyCodm = [
    ["Salesforce-Certified Experts", "Experienced consultants with deep Salesforce implementation, customization, and support expertise."],
    ["Education Industry Knowledge", "A team that understands the operational and engagement challenges of educational institutions."],
    ["Custom-Built Solutions", "Tailored Education Cloud solutions aligned with your institution's goals and processes."],
    ["Integration Expertise", "Connected LMS, ERP, finance, marketing, and third-party systems for a stronger digital ecosystem."],
    ["Flexible Engagement Models", "Consulting, implementation, integration, managed services, and dedicated resource support options."],
    ["Long-Term Partnership Approach", "Continuous support, optimization, and guidance to ensure lasting success."],
];

const faqs = [
    {
        question: "What is Salesforce Education Cloud?",
        answer: "Salesforce Education Cloud is a CRM platform designed for educational institutions to manage student recruitment, admissions, engagement, academic success, and alumni relationships. It provides a unified view of the student journey and helps institutions improve efficiency through automation, analytics, and personalized experiences.",
    },
    {
        question: "Which institutions can benefit from Salesforce Education Cloud?",
        answer: "Salesforce Education Cloud is suitable for universities, colleges, schools, training institutes, coaching centers, and higher education organizations. Any institution looking to improve student engagement, streamline administrative processes, and centralize data can benefit from implementing Education Cloud.",
    },
    {
        question: "How does Salesforce Education Cloud improve admissions management?",
        answer: "Education Cloud helps institutions manage the admissions process from inquiry to enrollment. It automates application workflows, centralizes applicant information, improves communication with prospective students, and provides real-time visibility into recruitment and enrollment activities.",
    },
    {
        question: "Can Education Cloud integrate with existing campus systems?",
        answer: "Yes, Salesforce Education Cloud can integrate with Learning Management Systems, ERP platforms, finance applications, student information systems, and other third-party tools. These integrations help institutions maintain accurate data, reduce manual work, and create a connected digital ecosystem.",
    },
    {
        question: "Why choose CodM Software for Salesforce Education Cloud consulting?",
        answer: "CodM Software offers Salesforce-certified consultants with experience in implementation, customization, integration, and support services. We work closely with educational institutions to understand their goals, design tailored solutions, and support successful adoption.",
    },
    {
        question: "Do you provide post-implementation support for Education Cloud?",
        answer: "Yes, we provide ongoing support and maintenance services after implementation. Our team assists with platform optimization, user training, enhancements, troubleshooting, and system updates so institutions continue to maximize Salesforce value.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Salesforce Education Cloud Consulting Services in India",
    provider: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    areaServed: "India",
    serviceType: "Salesforce Education Cloud Consulting",
    url: "https://codmsoftware.com/salesforce-education-cloud-consulting-india",
    description:
        "Salesforce Education Cloud implementation, customization, integration, support, and optimization services for educational institutions.",
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

export default function SalesforceEducationCloudConsultingIndiaPage() {
    return (
        <Layout>
            <SectionHeader
                title="Salesforce Education Cloud Consulting Services in India"
                group_page=""
                current_page="Education Cloud Consulting"
                display="d-none"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="education-consulting-page">
                <section className="education-consulting-hero">
                    <div className="container">
                        <div className="row align-items-center g-4 g-xl-5">
                            <div className="col-lg-6">
                                <p className="education-consulting-eyebrow">Salesforce Education Cloud Consulting Services in India</p>
                                <h1>Transform Student Experiences with Salesforce Education Cloud</h1>
                                <p className="education-consulting-lead">
                                    Empower student recruitment, admissions, engagement, and alumni management with Salesforce Education Cloud consulting services from CodM.
                                </p>
                                <div className="education-consulting-actions">
                                    <Link href="/contact" className="education-consulting-primary">
                                        Start Your Project <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                    <Link href="/education-cloud" className="education-consulting-secondary">
                                        View Education Cloud
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="education-consulting-visual" aria-label="Education Cloud consulting dashboard preview">
                                    <img
                                        src="/assets/img/service/Education_Cloud.png"
                                        alt="Salesforce Education Cloud consulting service"
                                        decoding="async"
                                        loading="eager"
                                    />
                                    <div className="education-consulting-metric education-consulting-metric-one">
                                        <strong>360</strong>
                                        <span>student view</span>
                                    </div>
                                    <div className="education-consulting-metric education-consulting-metric-two">
                                        <strong>CRM</strong>
                                        <span>connected campus</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="education-consulting-section education-consulting-intro">
                    <div className="container">
                        <div className="row g-4 align-items-start">
                            <div className="col-lg-6">
                                <p className="education-consulting-eyebrow">Education Cloud</p>
                                <h2>Why Educational Institutions Choose Salesforce Education Cloud</h2>
                                <h3>Enhance student experiences and streamline operations with a unified CRM platform</h3>
                            </div>
                            <div className="col-lg-6">
                                <p>
                                    Educational institutions today face increasing pressure to deliver better student experiences while managing complex administrative processes. From student recruitment and admissions to academic support and alumni engagement, institutions need a connected system that brings everything together.
                                </p>
                                <p>
                                    Salesforce Education Cloud centralizes data and automates routine tasks, helping schools, colleges, universities, and training institutes improve collaboration, enhance communication, and make informed decisions with real-time insights.
                                </p>
                            </div>
                        </div>
                        <div className="education-consulting-benefits">
                            {benefits.map((benefit) => (
                                <div className="education-consulting-benefit" key={benefit}>
                                    <i className="fa-solid fa-check" aria-hidden="true" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="education-consulting-section education-consulting-soft">
                    <div className="container">
                        <div className="education-consulting-section-heading">
                            <p className="education-consulting-eyebrow">Implementation Service</p>
                            <h2>Transform Education Operations with Salesforce Education Cloud</h2>
                        </div>
                        <div className="row g-4">
                            {implementationServices.map((service) => (
                                <div className="col-md-6 col-xl-4" key={service.title}>
                                    <div className="education-consulting-card h-100">
                                        <span className="education-consulting-card-icon">
                                            <i className="fa-regular fa-layer-group" aria-hidden="true" />
                                        </span>
                                        <h3>{service.title}</h3>
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {solutionAreas.map((area, index) => (
                    <section className="education-consulting-section" key={area.eyebrow}>
                        <div className="container">
                            <div className={`row align-items-center g-4 g-xl-5 ${index % 2 === 1 ? "flex-lg-row-reverse" : ""}`}>
                                <div className="col-lg-5">
                                    <div className="education-consulting-story">
                                        <p className="education-consulting-eyebrow">{area.eyebrow}</p>
                                        <h2>{area.title}</h2>
                                        <p>{area.text}</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="education-consulting-feature-grid">
                                        {area.items.map(([title, text]) => (
                                            <div className="education-consulting-feature" key={title}>
                                                <i className="fa-regular fa-circle-check" aria-hidden="true" />
                                                <div>
                                                    <h3>{title}</h3>
                                                    <p>{text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                <section className="education-consulting-section education-consulting-why">
                    <div className="container">
                        <div className="row g-4 g-xl-5 align-items-start">
                            <div className="col-lg-5">
                                <p className="education-consulting-eyebrow">Why CodM</p>
                                <h2>Why Choose CodM Software for Salesforce Education Cloud Consulting in India</h2>
                                <p>
                                    Educational institutions need a consulting partner that understands both Salesforce technology and the unique challenges of the education sector. CodM Software combines technical expertise with a customer-focused approach to deliver successful Education Cloud implementations.
                                </p>
                                <Link href="/contact" className="education-consulting-primary">
                                    Talk to an Expert <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                                </Link>
                            </div>
                            <div className="col-lg-7">
                                <div className="education-consulting-why-list">
                                    {whyCodm.map(([title, text]) => (
                                        <div className="education-consulting-why-item" key={title}>
                                            <span>{title.slice(0, 2)}</span>
                                            <div>
                                                <h3>{title}</h3>
                                                <p>{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="education-consulting-section education-consulting-faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                <div className="education-consulting-section-heading">
                                    <p className="education-consulting-eyebrow">FAQ</p>
                                    <h2>Salesforce Education Cloud Consulting Questions</h2>
                                </div>
                                <div className="accordion education-consulting-accordion" id="educationConsultingFaq">
                                    {faqs.map((faq, index) => {
                                        const collapseId = `education-consulting-faq-${index}`;
                                        const headingId = `education-consulting-heading-${index}`;

                                        return (
                                            <div className="accordion-item" key={faq.question}>
                                                <h3 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={index === 0 ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h3>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#educationConsultingFaq"
                                                >
                                                    <div className="accordion-body">{faq.answer}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
