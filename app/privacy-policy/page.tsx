import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";

export const metadata = {
    title: "Privacy Policy | CodM Software",
    description:
        "Read CodM Software's Privacy Policy to understand how we collect, use, protect, retain, and share personal information.",
    keywords:
        "CodM Software privacy policy, data protection, GDPR, CCPA, DPDPA, cookies, data rights",
};

const policySections = [
    {
        title: "Purpose",
        paragraphs: [
            "The purpose of this Privacy Policy is to be completely transparent about how CodM Software collects, stores, processes and uses your personal information. Your privacy matters to us, and we take every reasonable step to safeguard the confidentiality of the information you share with us.",
            "Using our services means you understand and accept these practices, which are designed to give you clarity and confidence when interacting with us.",
        ],
        list: [
            "What type of information we collect",
            "How and why we use your information",
            "When, why and with whom we may share it",
            "Your legal rights and options and how you can exercise them",
        ],
    },
    {
        title: "Scope",
        paragraphs: [
            "This Privacy Policy applies to every individual or organization interacting with CodM Software, whether directly or indirectly. It covers all people, systems and processes involved in collecting or handling personal information on behalf of CodM Software.",
            "This policy binds everyone who interacts with CodM Software or handles data on our behalf without exception.",
        ],
        list: [
            "Users and customers",
            "Employees and internal teams",
            "Clients and partners",
            "Contractors, consultants and freelancers",
            "Third-party vendors and service providers",
            "All systems, software, tools and infrastructure managed by CodM Software",
        ],
    },
    {
        title: "Definitions",
        paragraphs: [
            "These terms help ensure consistency and transparency in how we communicate our privacy practices.",
        ],
        list: [
            "CodM Software / We / Us / Our: CodM Software, a registered software development and service company located at Noida, Sector 94, India, including its subsidiaries, affiliates and legally connected entities.",
            "Affiliate: Any organization or entity that controls, is controlled by or is under common control with CodM Software.",
            "Client: Any individual, business or organization that uses or subscribes to our software, tools, or managed services.",
            "Third Party: External companies or individuals that provide services, integrations or tools that support our operations.",
            "Employee: Any individual directly employed by CodM Software.",
            "Data Subject / Customer: Any person whose personal data is collected, processed, or stored through our Services.",
            "Product: All software, platforms, tools, applications and digital assets created or maintained by CodM Software.",
            "Service Providers: External vendors assisting with functions such as hosting, analytics, security, messaging, support and infrastructure.",
        ],
    },
    {
        title: "Regulatory References",
        paragraphs: [
            "CodM Software follows both global and regional privacy and data protection regulations. We aim to maintain compliance with the highest international standards to ensure your data remains secure and your rights are protected.",
        ],
        list: [
            "ISO 27001 Information Security Standards",
            "GDPR, the General Data Protection Regulation for the European Union",
            "CCPA, the California Consumer Privacy Act",
            "India's Digital Personal Data Protection Act (DPDPA), where applicable",
        ],
    },
    {
        title: "Data Collection & Usage",
        paragraphs: [
            "CodM Software collects information for the primary purpose of delivering, improving and personalizing our services. We only collect data that is relevant, necessary and reasonably required for our business functions.",
        ],
        list: [
            "Personal data we may collect includes name, email address, phone number, company information, device identifiers, account details, usage information and activity information.",
            "You may provide this information when you register for services, use our applications, contact customer support, participate in demos or trials, or communicate with us.",
            "Usage data may include IP address, browser version, device and operating system details, pages visited, time spent, log files, diagnostic data and mobile device identifiers.",
        ],
    },
    {
        title: "How We Use Personal Data",
        paragraphs: [
            "Your information is used with the intention of improving your experience, supporting service delivery and fulfilling legal requirements. We never use your data irresponsibly.",
        ],
        list: [
            "To provide and improve our Services",
            "To manage user accounts",
            "To enhance product performance and features",
            "For customer support and communication",
            "For fraud detection and prevention",
            "To meet contractual and legal obligations",
            "For analytics and user experience improvement",
            "For marketing or service updates",
        ],
    },
    {
        title: "Disclosure of Personal Data",
        paragraphs: [
            "We do not sell or rent your personal information. However, in specific circumstances, we may need to share it with trusted stakeholders.",
            "If CodM Software is involved in a merger, acquisition or asset sale, your data may be transferred and you will be notified where required.",
            "We may share your information with government authorities, courts or legal processes if legally obligated.",
        ],
        list: [
            "Protect our legal rights",
            "Prevent fraud or misuse",
            "Ensure safety of users and systems",
            "Comply with applicable local or international laws",
        ],
    },
    {
        title: "International Data Transfer & Retention",
        paragraphs: [
            "Your information may be processed in countries where privacy laws differ from those in your country. By using our Services, you acknowledge that such transfers may occur.",
            "We retain information only for as long as needed to fulfill operational, legal and regulatory requirements. We delete or anonymize your details securely once they are no longer required.",
        ],
        list: [
            "Legal safeguards are in place",
            "Transfers follow international privacy standards",
            "Data is encrypted and protected",
            "Only authorized personnel access your information",
        ],
    },
    {
        title: "Privacy & Security Governance",
        paragraphs: [
            "We operate a structured privacy and security program to safeguard data at every stage, from collection to storage to deletion. These measures ensure that only authorized personnel access your information on a need-to-know basis.",
        ],
        list: [
            "Data classification controls and labeling",
            "Restricted access",
            "Security audits",
            "Encryption protocols",
            "Vulnerability and risk management",
            "Incident response procedures",
            "Network and cloud security monitoring",
            "Employee confidentiality protocols",
            "Vendor security assessments",
        ],
    },
    {
        title: "Security Commitments",
        paragraphs: [
            "CodM Software uses industry-standard security measures and only stores data when necessary and with proper authorization.",
        ],
        list: [
            "End-to-end encryption",
            "Secure APIs and transmission protocols",
            "Cloud-based secure hosting",
            "Regular penetration tests",
            "Strong access controls",
        ],
    },
    {
        title: "Data Subject Rights",
        paragraphs: [
            "You have the right to request information about how your data is collected, processed and used. We respond to all requests within legally required timeframes.",
        ],
        list: [
            "Access to your data",
            "Correction of inaccurate information",
            "Deletion, including the right to be forgotten where applicable",
            "Restriction of processing",
            "Objection to processing",
            "Data portability",
            "Withdrawal of consent",
            "Filing complaints with regulators",
        ],
    },
    {
        title: "Jurisdiction-Specific Rights",
        paragraphs: [
            "EU users may have additional rights under GDPR, including rectification, data portability, objection to automated decision-making and the right to complain to a Data Protection Authority.",
            "California residents may request details about categories of personal data collected, request deletion, opt out of data sale and request information about third-party sharing. CodM Software does not sell user data.",
            "Users from India may exercise rights granted under the Digital Personal Data Protection Act (DPDPA), where applicable.",
        ],
    },
    {
        title: "Compliance Measures",
        paragraphs: [
            "CodM Software maintains dedicated processes and teams to ensure legal and security compliance.",
        ],
        list: [
            "Privacy Officers",
            "Security teams",
            "Compliance audits",
            "Incident response mechanisms",
            "Training for employees",
            "Secure change management",
        ],
    },
    {
        title: "Third-Party Websites, Platforms and Services",
        paragraphs: [
            "Our website and software may link to or integrate with third-party pages, platforms or services. These third parties have their own terms, privacy policies and security practices. CodM Software is not responsible for the content or data handling practices of external websites or platforms.",
        ],
    },
    {
        title: "Privacy Rights and Data Removal",
        paragraphs: [
            "You may request access to your personal information or ask us to update, correct or delete it. We provide transparent access processes and prompt removal upon valid request.",
            "CodM Software does not intentionally collect data from minors under 18. If we discover such data, it is deleted immediately.",
        ],
    },
    {
        title: "Data Minimization & Purpose Limitation",
        paragraphs: [
            "We adhere to the principle of collecting the minimum information required to deliver services effectively.",
        ],
        list: [
            "No unnecessary data is collected",
            "Data is only processed for clearly stated purposes",
            "Access to information is restricted",
        ],
    },
    {
        title: "Data Sharing with Third Parties",
        paragraphs: [
            "We may share data with third-party service providers who assist in delivering our services. All third parties must comply with strict contractual privacy and security requirements.",
        ],
        list: [
            "Cloud hosting providers",
            "Security and analytics vendors",
            "Infrastructure and operational partners",
            "Approved processors",
        ],
    },
    {
        title: "Cookies & Tracking Technologies",
        paragraphs: [
            "We use cookies and tracking technologies to enhance user experience, analyze usage trends, improve system performance and support security. You may disable cookies at any time through your browser settings.",
        ],
        list: [
            "Analytics",
            "Personalization",
            "Session tracking",
            "Security and fraud prevention",
        ],
    },
    {
        title: "Data Breach & Incident Response",
        paragraphs: [
            "Despite strong safeguards, no system is completely immune to security incidents. If a data breach occurs, CodM Software will notify affected customers promptly, inform regulatory bodies where required, investigate the cause, apply corrective actions and provide transparency throughout the process.",
            "CodM Software is not responsible for breaches caused by third-party attacks, service outages or user negligence.",
        ],
    },
    {
        title: "User Responsibilities",
        paragraphs: [
            "We expect users to keep their login credentials confidential, inform us of unauthorized account activity, use our platform responsibly and follow applicable laws in their region.",
        ],
    },
    {
        title: "Dispute Resolution & Arbitration",
        paragraphs: [
            "If a dispute arises regarding your privacy rights, it may be resolved through mediation, arbitration or local legal processes. Details may vary by jurisdiction.",
        ],
    },
    {
        title: "Limitation of Liability",
        paragraphs: [
            "CodM Software is not responsible for indirect or consequential damages, loss of profits, issues caused by third-party systems, user negligence or misuse. Our total liability is limited to the service fees paid during the previous month.",
        ],
    },
    {
        title: "User Consent",
        paragraphs: [
            "By using our Services, you consent to data collection, data processing, data storage, international data transfers and use of cookies. You may withdraw your consent anytime.",
        ],
    },
    {
        title: "Transparency",
        paragraphs: [
            "We may update this Privacy Policy as required. If changes significantly affect your rights, we will notify you through email, service notifications, application or system alerts, or website announcements.",
        ],
    },
    {
        title: "Disclaimer",
        paragraphs: [
            "All content on our website, applications and documentation belongs to CodM Software. Unauthorized reproduction, redistribution or modification is prohibited.",
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <SectionHeader title="Privacy Policy" group_page="" current_page="Privacy Policy" display="d-none" />
            <section className="privacy-policy-area sp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-policy-content">
                                <p>
                                    CodM Software is committed to respecting and protecting your personal information
                                    and privacy while ensuring complete transparency. This Privacy Policy explains what
                                    information we collect, how we use it, why we process it and the rights available
                                    to you as a user of our software, applications, website and services in a clear and
                                    understandable manner.
                                </p>
                                <p>
                                    All sections of this Privacy Policy apply to every user of our Services, unless
                                    specifically stated otherwise.
                                </p>

                                {policySections.map((section) => (
                                    <div className="privacy-policy-section" key={section.title}>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
