import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Script from "next/script";

export const metadata = {
    title: "Women's Safety & Workplace Well-Being | CodM Software",
    description:
        "Learn how CodM Software supports women's safety, POSH awareness, inclusive workplace conduct, confidential reporting, and employee well-being.",
    keywords:
        "women safety at workplace, workplace well-being, POSH policy, inclusive workplace, CodM Software women safety",
    alternates: {
        canonical: "/womens-safety-workplace-well-being",
    },
};

const pageSections = [
    {
        eyebrow: "Our Purpose",
        title: "Our Approach to Women's Safety and Inclusion",
        paragraphs: [
            "At CodM Software, we believe that a safe and respectful workplace is important for people to do their work to the best of their capabilities. Women's safety, dignity and well-being are core values that shape our culture, policies and daily interactions.",
            "We are committed to building an environment where women feel safe, comfortable, supported, confident and free from harassment, discrimination or fear. CodM Software ensures women's safety and promotes a positive, inclusive work culture for all employees.",
        ],
    },
    {
        eyebrow: "Our Promise",
        title: "Our Commitment to Women's Safety",
        paragraphs: [
            "At CodM Software, women's safety is not just a policy requirement, it is a responsibility that we take seriously every day.",
            "We follow a zero-tolerance policy toward sexual harassment and inappropriate behavior. Any concern raised by an employee is addressed promptly, fairly and with complete sensitivity.",
        ],
        list: [
            "Safe, professional and harassment-free",
            "Built on respect, equality and ethical conduct",
            "Supportive of women's physical, mental and emotional well-being",
        ],
    },
    {
        eyebrow: "Work Culture",
        title: "Inclusive & Respectful Work Environment",
        paragraphs: [
            "We strive to create a work culture where everyone feels respected and valued regardless of gender, role or background. Mutual respect, professionalism and ethical conduct guide all interactions, ensuring that every individual feels safe, heard and supported.",
            "Our leadership team actively promotes these values and ensures they are reflected in everyday work practices.",
        ],
        list: [
            "Every employee is treated with dignity and fairness",
            "Gender-based discrimination or bias is not tolerated",
            "Professional behavior is expected in the office, client interactions, work events, travel and virtual meetings",
            "Personal boundaries, privacy and consent are always respected",
        ],
    },
    {
        eyebrow: "Legal Framework",
        title: "Prevention of Sexual Harassment (POSH) Policy",
        paragraphs: [
            "CodM Software strictly adheres to the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 in India and complies with applicable workplace safety and anti-harassment laws in all other regions where we operate.",
        ],
        list: [
            "Prevent acts of sexual harassment",
            "Provide a safe mechanism for reporting concerns",
            "Ensure timely, unbiased and confidential resolution of complaints",
            "Address unwelcome physical, verbal or non-verbal conduct, inappropriate remarks, requests for sexual favors and behavior that creates a hostile work environment",
        ],
    },
    {
        eyebrow: "Support System",
        title: "Complaint Handling & Resolution Process",
        paragraphs: [
            "CodM Software takes concerns related to inappropriate behavior, misconduct or harassment seriously and ensures they are addressed with sensitivity and responsibility.",
            "Until formal statutory mechanisms under applicable laws are fully constituted, employees are encouraged to report concerns through designated internal reporting channels managed by the HR function.",
        ],
        list: [
            "Confidential and secure handling of complaints",
            "Respect for the dignity and privacy of everyone involved",
            "Fair and unbiased review of concerns",
            "Timely action based on the nature and severity of the issue",
            "Protection against retaliation or victimization",
        ],
    },
    {
        eyebrow: "Raise Concerns",
        title: "Reporting & Grievance Redressal Mechanism",
        paragraphs: [
            "We encourage women employees to report concerns without fear of retaliation. Workplace-related grievances are currently reported to the Human Resources department, which serves as the primary point of contact for grievance handling.",
            "As our organization grows, CodM Software remains committed to strengthening its grievance redressal mechanisms in line with applicable laws and best practices.",
        ],
        list: [
            "Confidential and respectful handling of concerns",
            "Timely acknowledgment and appropriate follow-up",
            "Protection against victimization or retaliation",
            "Clear and transparent communication throughout the review process",
        ],
    },
    {
        eyebrow: "Inclusive Safety",
        title: "Inclusive Workplace Conduct & Anti-Harassment Policy",
        paragraphs: [
            "While the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 is applicable to women employees as per law, CodM Software is committed to maintaining a safe and respectful workplace for all employees.",
            "Internal workplace conduct and anti-harassment policies apply to everyone, regardless of gender, role or designation.",
        ],
    },
    {
        eyebrow: "Safe Reporting",
        title: "Confidentiality & Non-Retaliation",
        paragraphs: [
            "CodM Software strictly maintains confidentiality related to the identity of the complainant, the respondent, witnesses, investigation details and outcomes.",
            "Any form of retaliation, intimidation or adverse action against a complainant, witness or anyone involved in an investigation is strictly prohibited and may result in disciplinary measures.",
        ],
    },
    {
        eyebrow: "Prevention Action",
        title: "Awareness, Training & Sensitization",
        paragraphs: [
            "We believe prevention begins with awareness. Employees are expected to understand and comply with company policies about harassment, workplace behavior and POSH.",
        ],
        list: [
            "POSH awareness sessions",
            "Workplace behavior and ethics training",
            "Sensitization programs to promote gender respect and inclusivity",
        ],
    },
    {
        eyebrow: "Daily Safety",
        title: "Workplace Safety Measures",
        paragraphs: [
            "To further support women's safety, CodM Software emphasizes practical safeguards across everyday work settings.",
        ],
        list: [
            "Secure office premises",
            "Clear reporting structures",
            "Professional conduct during late working hours or client interactions",
            "Responsible use of official communication platforms",
        ],
    },
    {
        eyebrow: "Fair Growth",
        title: "Equal Opportunity & Supportive Policies",
        paragraphs: [
            "CodM Software is dedicated to fostering an environment where women can thrive and achieve their full potential.",
        ],
        list: [
            "Equal opportunities in hiring, growth and leadership roles",
            "Performance-based evaluations without gender bias",
            "Flexible work arrangements where feasible",
            "A supportive approach toward work-life balance",
        ],
    },
    {
        eyebrow: "Emotional Care",
        title: "Mental & Emotional Well-Being",
        paragraphs: [
            "We recognize that safety also includes mental and emotional well-being. CodM Software encourages open communication and a healthy work-life balance.",
        ],
        list: [
            "Open communication with managers and HR",
            "A supportive environment for discussing concerns",
            "Respect for individual challenges and responsibilities",
        ],
    },
    {
        eyebrow: "Continuous Improvement",
        title: "Our Ongoing Responsibility",
        paragraphs: [
            "Women's safety is an ongoing responsibility. CodM Software continuously reviews and strengthens policies to ensure compliance, effectiveness and alignment with best practices.",
        ],
        list: ["Safe", "Respected", "Confident", "Empowered"],
    },
    {
        eyebrow: "Company Values",
        title: "Our Promise",
        paragraphs: [
            "At CodM Software, women's safety is not just a policy, it is a commitment we live by every day. We stand firmly against harassment and discrimination and strive to create a workplace that reflects trust, respect and professionalism for everyone.",
        ],
    },
];

const workplaceSafetySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Women's Safety & Workplace Well-Being at CodM Software",
    url: "https://codmsoftware.com/womens-safety-workplace-well-being",
    description:
        "CodM Software's workplace safety, POSH awareness, grievance reporting, inclusion, and employee well-being commitments.",
    publisher: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
};

export default function WomensSafetyWorkplaceWellBeing() {
    return (
        <Layout>
            <Script
                id="womens-safety-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(workplaceSafetySchema),
                }}
            />
            <SectionHeader
                title="Women's Safety & Workplace Well-Being"
                group_page=""
                current_page="Women's Safety"
                display="d-none"
            />
            <section className="womens-safety-page" aria-labelledby="womens-safety-title">
                <div className="container">
                    <div className="womens-safety-hero">
                        <span className="womens-safety-kicker">Workplace Well-Being</span>
                        <h2 id="womens-safety-title">Women's Safety & Workplace Well-Being at CodM Software</h2>
                        <p>
                            Creating a safe, respectful and inclusive workplace for women in IT through clear policies,
                            confidential reporting, ethical conduct and continuous support.
                        </p>
                        <div className="womens-safety-hero-points" aria-label="Core commitments">
                            <span>Safe</span>
                            <span>Respectful</span>
                            <span>Inclusive</span>
                            <span>Supportive</span>
                        </div>
                    </div>

                    <div className="womens-safety-summary" aria-label="Policy highlights">
                        <article>
                            <strong>Zero Tolerance</strong>
                            <span>Harassment, discrimination and inappropriate behavior are not accepted.</span>
                        </article>
                        <article>
                            <strong>Confidential Reporting</strong>
                            <span>Concerns are handled with discretion, sensitivity and fair review.</span>
                        </article>
                        <article>
                            <strong>Ongoing Awareness</strong>
                            <span>Training, sensitization and workplace ethics support prevention.</span>
                        </article>
                    </div>

                    <div className="womens-safety-grid">
                        {pageSections.map((section, index) => (
                            <article className="womens-safety-card" key={section.title + section.eyebrow}>
                                <div className="womens-safety-card-number">{String(index + 1).padStart(2, "0")}</div>
                                <span className="womens-safety-eyebrow">{section.eyebrow}</span>
                                <h2>{section.title}</h2>
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                {section.list ? (
                                    <ul>
                                        {section.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
