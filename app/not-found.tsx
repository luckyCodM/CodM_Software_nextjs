
import Link from "next/link";import Layout from "@/components/layout/Layout";

export default function NotFound() {
    return (
        <Layout>
            <section className="codm-not-found">
                <div className="container">
                    <div className="codm-not-found-content">
                        <span className="codm-not-found-kicker">Page Not Found</span>

                        <div className="codm-not-found-image">
                            <img src="/assets/img/others/error.png" alt="Page not found illustration" decoding="async" loading="lazy" />
                        </div>

                        <h1>Looks like this page moved</h1>
                        <p>
                            The link may be old, renamed, or no longer available. You can return home,
                            explore our Salesforce services, or contact the CodM Software team.
                        </p>

                        <div className="codm-not-found-actions">
                            <Link className="theme-btn1" href="/">
                                Go Back Home
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                            <Link className="theme-btn2" href="/service">
                                View Services
                                <span>
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                        </div>

                        <div className="codm-not-found-links" aria-label="Helpful links">
                            <Link href="/salesforce-agentforce-ai-company-india">Agentforce AI</Link>
                            <Link href="/financial-service">Financial Services Cloud</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}