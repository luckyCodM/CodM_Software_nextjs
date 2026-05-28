import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";

export const metadata = {
    title: "Terms of Service | CodM Software",
    description:
        "Read CodM Software's Terms of Service covering website usage, intellectual property, third-party links, liability, project timelines and client responsibilities.",
    keywords:
        "CodM Software terms of service, CodM Software terms and conditions, website terms, software service terms",
    alternates: {
        canonical: "/terms-of-service",
    },
};

const termsSections = [
    {
        title: "Purpose",
        paragraphs: [
            'The website "codmsoftware.com", including any affiliated or official domain used by Codm Software, is owned and operated by Codm Software Private Limited ("we", "our" or "us"). This website has been created to share information about our services, software solutions, expertise and resources that may be valuable to users and visitors.',
            "All content made available on this website, including written materials, graphics, images, videos, code snippets, documents and downloadable files, is the copyrighted property of Codm Software unless otherwise stated. All rights remain strictly reserved to CodM Software.",
            "By continuing to browse or use this website, you acknowledge that you have read, understood and agreed to be bound by the terms stated below. If you do not agree with these terms, you are advised to stop using the website immediately.",
        ],
    },
    {
        title: "Definitions",
        paragraphs: [
            "For these Terms & Conditions, the following terms carry the meanings assigned below. These definitions ensure clarity and consistency throughout this document.",
        ],
        list: [
            "Codm Software refers to Codm Software Private Limited, including its employees, management, affiliates and authorized representatives acting on its behalf.",
            "Website refers to codmsoftware.com and any related domain, subdomain or digital platform operated and maintained by Codm Software.",
            "User, You, or Visitor refers to any individual, customer, client or entity who accesses, browses or interacts with the website or its content.",
        ],
    },
    {
        title: "Use of Website Content",
        paragraphs: [
            "The content available on this website has been carefully curated and created to provide value to our users. However, it remains protected under applicable copyright, trademark and intellectual property laws.",
            "No part of the website, including but not limited to text, images, designs, code, illustrations, templates, product descriptions or downloadable materials, may be copied, distributed, reproduced, modified, republished, uploaded or transmitted in any form without prior written permission from Codm Software.",
            "All rights that are not explicitly granted to users remain reserved. Unauthorized use of any website materials may lead to legal action under applicable laws, and Codm Software may pursue remedies in case of copyright or trademark violations.",
        ],
    },
    {
        title: "Trademarks",
        paragraphs: [
            "All branding elements, including the Codm Software name, logo, design assets, product names and service marks, are trademarks owned exclusively by Codm Software.",
            "These trademarks may not be used, copied, imitated or incorporated into any product, service or marketing material without our explicit written consent.",
            "Any third-party logos, brand names or trademarks shown on this website are used strictly for identification or descriptive purposes. They remain the property of their respective owners, and Codm Software does not claim ownership of them.",
        ],
    },
    {
        title: "Website Access & Termination",
        paragraphs: [
            "We aim to provide a smooth and uninterrupted experience for our users. However, Codm Software reserves full rights to manage the website as needed.",
            "By continuing to use the website after updates are made, you agree to the revised terms. It is your responsibility to review this page periodically.",
        ],
        list: [
            "Terminate or restrict access to the website for any user, with or without notice.",
            "Modify or remove content, services, features, pages or technical elements at any time.",
            "Temporarily or permanently discontinue any section of the website.",
            "Update or revise these Terms & Conditions whenever required.",
        ],
    },
    {
        title: "Accuracy of Information",
        paragraphs: [
            "We make every effort to ensure that the information shared on the website is correct, relevant and up-to-date. Content is sourced from verified and credible references whenever possible.",
            "However, Codm Software does not guarantee that all information on the site is completely error-free, fully accurate, updated in real time or suitable for every purpose.",
            "We may revise content or update these terms at any time without notice. Your continued use of the website signifies acceptance of the latest version of all terms and information presented.",
        ],
    },
    {
        title: "Limitation of Liability",
        paragraphs: [
            "By using this website, you acknowledge that Codm Software shall not be held liable for any direct or indirect damages resulting from your use of the site or its materials.",
            "We are not responsible for loss of revenue, profits, data, goodwill or any consequential or incidental damages resulting from website usage.",
        ],
        list: [
            "Inability to access or use the website due to technical issues",
            "Loss of data, files or stored information",
            "Business disruption or workflow delays",
            "Errors or omissions in website content",
            "Downloading or interacting with website materials",
            "System failures, bugs or viruses despite security precautions",
        ],
    },
    {
        title: "Device & Data Responsibility",
        paragraphs: [
            "Accessing or interacting with the website is entirely at the user's own risk. Users are responsible for ensuring suitable device protection, including antivirus software, secure networks and proper maintenance.",
        ],
        list: [
            "Physical or technical damage caused to your device, including mobile, laptop, PC or tablet",
            "Corruption or loss of files or data stored on your device",
            "Any issues arising from downloads, scripts or content interactions",
        ],
    },
    {
        title: "Third-Party Links",
        paragraphs: [
            "The website may include links to third-party websites, tools, platforms or resources for user convenience. These links are provided solely to offer additional information.",
            "Any interaction with third-party platforms is done at your own risk, and Codm Software will not be held liable for any outcomes resulting from such access.",
        ],
        list: [
            "Codm Software does not own, operate or control external websites.",
            "Codm Software is not responsible for their content, services, practices or availability.",
            "Codm Software does not guarantee safety, accuracy or reliability of third-party materials.",
            "Users should review the Terms & Conditions and Privacy Policies of external websites before using them.",
        ],
    },
    {
        title: "Project Delivery & Service Timelines",
        paragraphs: [
            "We always work diligently to meet agreed timelines and deliver high-quality software, consultation and IT services. However, service or project delivery timelines may vary depending on multiple factors.",
            "In such cases, timelines may be adjusted to ensure quality and accuracy. Codm Software shall not be held liable for delays arising from unavoidable circumstances.",
        ],
        list: [
            "Technical challenges such as bugs, development cycles or dependencies",
            "Third-party or vendor-related dependencies",
            "Complex development bottlenecks requiring additional testing or refinement",
            "Delayed communication or feedback from stakeholders or clients",
            "Unforeseen operational issues or environmental challenges",
        ],
    },
    {
        title: "Client Responsibilities & Copyright Permissions",
        paragraphs: [
            "Clients who share materials such as documents, designs, branding assets, images, data files, written content or intellectual property with Codm Software retain full copyright ownership of their materials.",
            "By sharing such materials, clients grant Codm Software permission to use, modify, store and publish them strictly for project execution and delivery. Clients must ensure they possess legal rights or licenses for any third-party content they submit.",
            "Codm Software may request verification or written proof of copyright permissions at any time.",
        ],
        list: [
            "Clients agree to indemnify Codm Software from claims, disputes or legal actions arising from unauthorized use of copyrighted materials.",
            "Clients are responsible for issues caused by lack of proper permissions.",
            "Clients are responsible for liabilities associated with misuse of third-party intellectual property.",
        ],
    },
    {
        title: "Acceptance of Terms",
        paragraphs: [
            "By visiting or using this website, you confirm that you have read, understood and agreed to these Terms & Conditions. If at any point you disagree with any section, you should stop using the website immediately.",
            "Continued use after updates or modifications indicates that you accept the revised terms.",
        ],
    },
];

export default function TermsOfService() {
    return (
        <Layout>
            <SectionHeader title="Terms of Service" group_page="" current_page="Terms of Service" display="d-none" />
            <section className="privacy-policy-area" aria-labelledby="terms-of-service-title">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <article className="privacy-policy-content">
                                <h1 id="terms-of-service-title">Terms of Service</h1>
                                <p>
                                    These Terms of Service explain the rules, rights and responsibilities that apply when
                                    you access or use the CodM Software website, content and related digital resources.
                                </p>

                                {termsSections.map((section) => (
                                    <section className="privacy-policy-section" key={section.title}>
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
                                    </section>
                                ))}
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
