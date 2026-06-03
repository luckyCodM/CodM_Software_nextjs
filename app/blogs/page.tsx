import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { blogCategories, blogPosts } from "./blogData";

type BlogsPageProps = {
    searchParams?: Promise<{
        category?: string;
        q?: string;
    }>;
};

export const metadata = {
    title: "Salesforce Insights, CRM Trends & Digital Transformation Blogs | CodM Software",
    description:
        "Read CodM Software blogs on Salesforce, Agentforce AI, Financial Services Cloud, Education Cloud, CRM automation, integrations and Customer 360.",
    keywords:
        "Salesforce blogs, CRM trends, Agentforce AI blogs, Salesforce implementation, Financial Services Cloud, Customer 360, CRM automation",
    alternates: {
        canonical: "/blogs",
    },
    openGraph: {
        title: "Salesforce Insights, CRM Trends & Digital Transformation Blogs | CodM Software",
        description:
            "Explore Salesforce consulting insights, CRM automation guides, Agentforce AI strategies and enterprise digital transformation blogs.",
        url: "https://codmsoftware.com/blogs",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salesforce Insights, CRM Trends & Digital Transformation Blogs | CodM Software",
        description:
            "Read premium Salesforce, CRM and AI insights from CodM Software.",
    },
};

const categoryIcons: Record<string, string> = {
    All: "fa-solid fa-layer-group",
    Salesforce: "fa-solid fa-cloud",
    "Agentforce AI": "fa-solid fa-robot",
    "Financial Services Cloud": "fa-solid fa-building-columns",
    "Education Cloud": "fa-solid fa-graduation-cap",
    "CRM Automation": "fa-solid fa-gears",
    Integrations: "fa-solid fa-plug-circle-bolt",
    "Customer 360": "fa-solid fa-users-viewfinder",
    "Staff Augmentation": "fa-solid fa-users-gear",
};

const faqs = [
    {
        question: "What topics does the CodM Software blog cover?",
        answer:
            "The CodM Software blog covers Salesforce consulting, CRM implementation, Agentforce AI, Financial Services Cloud, Education Cloud, Customer 360, integrations, automation and staffing insights.",
    },
    {
        question: "Are these blogs useful for Salesforce implementation planning?",
        answer:
            "Yes. The blog is structured around practical Salesforce implementation, architecture, automation, data, adoption and integration guidance for growing businesses.",
    },
    {
        question: "Can CodM Software help after I read a blog?",
        answer:
            "Yes. You can contact CodM Software to discuss Salesforce consulting, CRM implementation, AI automation, integrations or staff augmentation for your business.",
    },
];

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodM Software Blogs",
    url: "https://codmsoftware.com/blogs",
    description: metadata.description,
    publisher: {
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
    },
    blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `https://codmsoftware.com/blogs/${post.slug}`,
        datePublished: post.publishedDate,
        author: {
            "@type": "Organization",
            name: "CodM Software",
        },
    })),
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

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
    const params = await searchParams;
    const selectedCategory = params?.category || "All";
    const query = (params?.q || "").trim().toLowerCase();
    const featured = blogPosts[0];
    const categories = ["All", ...blogCategories];

    const filteredPosts = blogPosts.filter((post) => {
        const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
        const queryMatch =
            !query ||
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.keywords.some((keyword) => keyword.toLowerCase().includes(query));

        return categoryMatch && queryMatch;
    });

    return (
        <Layout>
            <Script
                id="codm-blog-collection-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <Script
                id="codm-blog-faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SectionHeader title="Blogs" group_page="" current_page="Blogs" display="d-none" />

            <main className="codm-blog-system">
                <section className="codm-blog-hero" aria-labelledby="blogs-title">
                    <div className="container">
                        <div className="codm-blog-hero-grid">
                            <div>
                                <span className="codm-blog-badge">
                                    <i className="fa-solid fa-newspaper" aria-hidden="true" />
                                    Salesforce Knowledge Hub
                                </span>
                                <h2 id="blogs-title">Salesforce Insights, CRM Trends & Digital Transformation Blogs</h2>
                                <p>
                                    Explore practical guides on Salesforce implementation, Agentforce AI, CRM automation,
                                    integrations, Customer 360 and enterprise digital transformation.
                                </p>
                                <form className="codm-blog-search" action="/blogs" role="search">
                                    {selectedCategory !== "All" ? <input type="hidden" name="category" value={selectedCategory} /> : null}
                                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                                    <input name="q" type="search" placeholder="Search Salesforce, AI, CRM automation..." defaultValue={params?.q || ""} aria-label="Search blogs" />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="codm-blog-visual" aria-label="Salesforce and AI blog visual">
                                <div className="codm-blog-dashboard">
                                    <i className="fa-solid fa-cloud" aria-hidden="true" />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <article className="codm-blog-float one">
                                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                                    <strong>SEO</strong>
                                    <span>CRM Insights</span>
                                </article>
                                <article className="codm-blog-float two">
                                    <i className="fa-solid fa-robot" aria-hidden="true" />
                                    <strong>AI</strong>
                                    <span>Agentforce Trends</span>
                                </article>
                            </div>
                        </div>
                        <div className="codm-blog-tabs" aria-label="Blog category filters">
                            {categories.map((category) => (
                                <Link className={selectedCategory === category ? "active" : ""} href={category === "All" ? "/blogs" : `/blogs?category=${encodeURIComponent(category)}`} key={category}>
                                    <i className={categoryIcons[category] || "fa-solid fa-cloud"} aria-hidden="true" />
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-blog-section" aria-labelledby="featured-blog">
                    <div className="container">
                        <div className="codm-blog-heading">
                            <span><i className="fa-solid fa-star" aria-hidden="true" /> Featured Blog</span>
                            <h2 id="featured-blog">Start with a practical Salesforce implementation roadmap.</h2>
                        </div>
                        <article className="codm-blog-featured">
                            <div className="codm-blog-featured-image">
                                <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 991px) 100vw, 45vw" priority />
                            </div>
                            <div>
                                <span className="codm-blog-badge">
                                    <i className={categoryIcons[featured.category]} aria-hidden="true" />
                                    {featured.category}
                                </span>
                                <h3>{featured.title}</h3>
                                <p>{featured.excerpt}</p>
                                <div className="codm-blog-meta">
                                    <span><i className="fa-solid fa-calendar-days" aria-hidden="true" /> {featured.publishedDate}</span>
                                    <span><i className="fa-solid fa-clock" aria-hidden="true" /> {featured.readTime}</span>
                                    <span><i className="fa-solid fa-user" aria-hidden="true" /> {featured.author.name}</span>
                                </div>
                                <Link href={`/blogs/${featured.slug}`} className="theme-btn1">
                                    Read Featured Blog
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="codm-blog-section codm-blog-muted" aria-labelledby="blog-grid">
                    <div className="container">
                        <div className="codm-blog-grid-header">
                            <div className="codm-blog-heading">
                                <span><i className="fa-solid fa-book-open" aria-hidden="true" /> Blog Library</span>
                                <h2 id="blog-grid">Explore Salesforce content clusters built for business growth.</h2>
                            </div>
                            <Link href="/contact" className="codm-blog-sticky-cta">Talk to Salesforce Experts</Link>
                        </div>
                        <div className="row">
                            {filteredPosts.map((post) => (
                                <div className="col-xl-4 col-md-6" key={post.slug}>
                                    <article className="codm-blog-card">
                                        <div className="codm-blog-card-image">
                                            <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" />
                                            <span><i className={categoryIcons[post.category]} aria-hidden="true" /> {post.category}</span>
                                        </div>
                                        <div className="codm-blog-card-body">
                                            <div className="codm-blog-meta">
                                                <span><i className="fa-solid fa-calendar-days" aria-hidden="true" /> {post.publishedDate}</span>
                                                <span><i className="fa-solid fa-clock" aria-hidden="true" /> {post.readTime}</span>
                                            </div>
                                            <h3><Link href={`/blogs/${post.slug}`}>{post.title}</Link></h3>
                                            <p>{post.excerpt}</p>
                                            <div className="codm-blog-author-mini">
                                                <i className="fa-solid fa-user-tie" aria-hidden="true" />
                                                <span>{post.author.name}</span>
                                            </div>
                                            <Link href={`/blogs/${post.slug}`} className="learn">
                                                Read More
                                                <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                        {filteredPosts.length === 0 ? (
                            <div className="codm-blog-empty">
                                <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                                <h3>No blogs found</h3>
                                <p>Try a different Salesforce topic or clear the category filter.</p>
                                <Link href="/blogs" className="theme-btn1">View All Blogs</Link>
                            </div>
                        ) : null}
                    </div>
                </section>

                <section className="codm-blog-section" aria-labelledby="blog-services">
                    <div className="container">
                        <div className="codm-blog-heading">
                            <span><i className="fa-solid fa-link" aria-hidden="true" /> Related Services</span>
                            <h2 id="blog-services">Turn Salesforce insights into a production-ready roadmap.</h2>
                        </div>
                        <div className="codm-blog-service-grid">
                            {featured.relatedServices.map((service) => (
                                <Link href={service.href} key={service.label}>
                                    <i className="fa-solid fa-cloud" aria-hidden="true" />
                                    <span>{service.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="codm-blog-section codm-blog-muted" aria-labelledby="blog-faq">
                    <div className="container">
                        <div className="codm-blog-lead-grid">
                            <div>
                                <div className="codm-blog-heading">
                                    <span><i className="fa-solid fa-circle-question" aria-hidden="true" /> FAQ</span>
                                    <h2 id="blog-faq">Questions about Salesforce content and consulting?</h2>
                                </div>
                                <div className="codm-blog-faq">
                                    {faqs.map((faq, index) => (
                                        <details key={faq.question} open={index === 0}>
                                            <summary><i className="fa-solid fa-message" aria-hidden="true" /> {faq.question}</summary>
                                            <p>{faq.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                            <aside className="codm-blog-lead-card">
                                <i className="fa-solid fa-headset" aria-hidden="true" />
                                <span>Need Salesforce guidance?</span>
                                <h3>Talk to CodM Software about your CRM roadmap.</h3>
                                <p>Get help with Salesforce implementation, Agentforce AI, integrations, automation and staff augmentation.</p>
                                <Link href="/contact" className="theme-btn1">
                                    Book Consultation
                                    <span><i className="fa-solid fa-arrow-right" /></span>
                                </Link>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
