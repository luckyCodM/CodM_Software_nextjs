import Link from "next/link";
import Layout from "@/components/layout/Layout";

export const metadata = {
    title: "Coming Soon | CodM Software",
    description:
        "This CodM Software page is being prepared. Visit our Salesforce services, blogs, or contact page while we finish building it.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "/comingsoon",
    },
};

export default function ComingSoon() {
    return (
        <Layout>
            <section className="codm-coming-soon">
                <div className="container">
                    <div className="codm-coming-soon-content">
                        <span className="codm-coming-soon-kicker">Coming Soon</span>

                        <div className="codm-coming-soon-image">
                            <img src="/assets/img/others/error2.png" alt="Coming soon page under development" />
                        </div>

                        <h1>We are building something useful here</h1>
                        <p>
                            This page is currently in development. Our team is preparing the content,
                            design, and details so the final page feels complete and helpful.
                        </p>

                        <div className="codm-coming-soon-actions">
                            <Link className="theme-btn1" href="/service">
                                Explore Services
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                            <Link className="theme-btn2" href="/contact">
                                Contact Us
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                        </div>

                        <div className="codm-coming-soon-links" aria-label="Helpful pages">
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blogs</Link>
                            <Link href="/salesforce-agentforce-ai-company-india">Agentforce AI</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}