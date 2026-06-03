import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../blogData";

type BlogDetailProps = {
    params: Promise<{
        slug: string;
    }>;
};

const categoryIcons: Record<string, string> = {
    Salesforce: "fa-solid fa-cloud",
    "Agentforce AI": "fa-solid fa-robot",
    "Financial Services Cloud": "fa-solid fa-building-columns",
    "Education Cloud": "fa-solid fa-graduation-cap",
    "CRM Automation": "fa-solid fa-gears",
    Integrations: "fa-solid fa-plug-circle-bolt",
    "Customer 360": "fa-solid fa-users-viewfinder",
    "Staff Augmentation": "fa-solid fa-users-gear",
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogDetailProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: "Blog Not Found | CodM Software",
        };
    }

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        keywords: post.keywords.join(", "),
        alternates: {
            canonical: `/blogs/${post.slug}`,
        },
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            url: `https://codmsoftware.com/blogs/${post.slug}`,
            type: "article",
            publishedTime: post.publishedDate,
            authors: [post.author.name],
            images: [
                {
                    url: post.image,
                    alt: post.imageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedBlogs = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).concat(blogPosts.filter((item) => item.slug !== post.slug && item.category !== post.category)).slice(0, 3);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://codmsoftware.com" },
            { "@type": "ListItem", position: 2, name: "Blogs", item: "https://codmsoftware.com/blogs" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://codmsoftware.com/blogs/${post.slug}` },
        ],
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: `https://codmsoftware.com${post.image}`,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.role,
        },
        publisher: {
            "@type": "Organization",
            name: "CodM Software",
            url: "https://codmsoftware.com",
        },
        mainEntityOfPage: `https://codmsoftware.com/blogs/${post.slug}`,
        keywords: post.keywords.join(", "),
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "CodM Software",
        url: "https://codmsoftware.com",
        description:
            "CodM Software provides Salesforce consulting, CRM implementation, Agentforce AI, Financial Services Cloud, Education Cloud, Customer 360, integrations and staff augmentation.",
    };

    return (
        <Layout>
            <Script id={`${post.slug}-breadcrumb-schema`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id={`${post.slug}-article-schema`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id={`${post.slug}-faq-schema`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id={`${post.slug}-organization-schema`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <SectionHeader title={post.title} group_page="Blogs" current_page={post.title} display="d-none" />

            <main className="codm-blog-detail">
                <section className="codm-blog-detail-hero" aria-labelledby="blog-title">
                    <div className="container">
                        <nav className="codm-blog-breadcrumb" aria-label="Breadcrumb">
                            <Link href="/">Home</Link>
                            <i className="fa-solid fa-angle-right" aria-hidden="true" />
                            <Link href="/blogs">Blogs</Link>
                            <i className="fa-solid fa-angle-right" aria-hidden="true" />
                            <span>{post.category}</span>
                        </nav>
                        <div className="codm-blog-detail-hero-grid">
                            <div>
                                <span className="codm-blog-badge">
                                    <i className={categoryIcons[post.category]} aria-hidden="true" />
                                    {post.category}
                                </span>
                                <h1 id="blog-title">{post.title}</h1>
                                <p>{post.excerpt}</p>
                                <div className="codm-blog-meta">
                                    <span><i className="fa-solid fa-user" aria-hidden="true" /> {post.author.name}</span>
                                    <span><i className="fa-solid fa-calendar-days" aria-hidden="true" /> {post.publishedDate}</span>
                                    <span><i className="fa-solid fa-clock" aria-hidden="true" /> {post.readTime}</span>
                                </div>
                                <div className="codm-blog-share" aria-label="Share this blog">
                                    <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=https://codmsoftware.com/blogs/${post.slug}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href={`https://x.com/intent/tweet?url=https://codmsoftware.com/blogs/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter" /></Link>
                                    <Link href="/contact"><i className="fa-solid fa-envelope" /></Link>
                                </div>
                            </div>
                            <div className="codm-blog-detail-image">
                                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 991px) 100vw, 42vw" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-blog-detail-section">
                    <div className="container">
                        <div className="codm-blog-detail-layout">
                            <aside className="codm-blog-toc" aria-label="Table of contents">
                                <span>Table of Contents</span>
                                {post.sections.map((section) => (
                                    <Link href={`#${section.id}`} key={section.id}>{section.heading}</Link>
                                ))}
                                <Link href="#blog-faq">FAQs</Link>
                            </aside>
                            <article className="codm-blog-content">
                                {post.sections.map((section, index) => (
                                    <section id={section.id} key={section.id}>
                                        <span className="codm-blog-content-eyebrow">{section.eyebrow}</span>
                                        <h2>{section.heading}</h2>
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                        {section.bullets ? (
                                            <ul>
                                                {section.bullets.map((bullet) => (
                                                    <li key={bullet}><i className="fa-solid fa-circle-check" aria-hidden="true" /> {bullet}</li>
                                                ))}
                                            </ul>
                                        ) : null}
                                        {index === 1 || index === 3 ? (
                                            <div className="codm-blog-inline-cta">
                                                <i className="fa-solid fa-headset" aria-hidden="true" />
                                                <div>
                                                    <h3>Need help applying this to your Salesforce org?</h3>
                                                    <p>CodM Software can help you plan, implement and optimize Salesforce with a practical roadmap.</p>
                                                </div>
                                                <Link href="/contact">Talk to Experts</Link>
                                            </div>
                                        ) : null}
                                    </section>
                                ))}

                                <section id="blog-faq">
                                    <span className="codm-blog-content-eyebrow">FAQ</span>
                                    <h2>Frequently asked questions</h2>
                                    <div className="codm-blog-faq">
                                        {post.faqs.map((faq, index) => (
                                            <details key={faq.question} open={index === 0}>
                                                <summary><i className="fa-solid fa-message" aria-hidden="true" /> {faq.question}</summary>
                                                <p>{faq.answer}</p>
                                            </details>
                                        ))}
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="codm-blog-section codm-blog-muted" aria-labelledby="author">
                    <div className="container">
                        <article className="codm-blog-author-card">
                            <Image src={post.author.image} alt={`${post.author.name} author profile`} width={92} height={92} />
                            <div>
                                <span id="author">Author</span>
                                <h2>{post.author.name}</h2>
                                <p>{post.author.bio}</p>
                                <Link href={post.author.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" /> Follow CodM Software
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="codm-blog-section codm-blog-related-section" aria-labelledby="related-links">
                    <div className="container">
                        <div className="codm-blog-related-grid">
                            <div>
                                <div className="codm-blog-heading">
                                    <span><i className="fa-solid fa-link" aria-hidden="true" /> Related Services</span>
                                    <h2 id="related-links">Build on this blog with expert Salesforce support.</h2>
                                </div>
                                <div className="codm-blog-service-grid">
                                    {post.relatedServices.map((service) => (
                                        <Link href={service.href} key={service.label}>
                                            <i className="fa-solid fa-cloud" aria-hidden="true" />
                                            <span>{service.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="codm-blog-heading">
                                    <span><i className="fa-solid fa-briefcase" aria-hidden="true" /> Related Case Studies</span>
                                    <h2>See similar Salesforce outcomes.</h2>
                                </div>
                                <div className="codm-blog-case-links">
                                    {post.relatedCaseStudies.map((study) => (
                                        <Link href={study.href} key={study.label}>
                                            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                                            {study.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="codm-blog-section codm-blog-muted" aria-labelledby="related-blogs">
                    <div className="container">
                        <div className="codm-blog-heading">
                            <span><i className="fa-solid fa-book-open" aria-hidden="true" /> Related Blogs</span>
                            <h2 id="related-blogs">Recommended Salesforce insights</h2>
                        </div>
                        <div className="row">
                            {relatedBlogs.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.slug}>
                                    <article className="codm-blog-card">
                                        <div className="codm-blog-card-image">
                                            <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" />
                                            <span><i className={categoryIcons[item.category]} aria-hidden="true" /> {item.category}</span>
                                        </div>
                                        <div className="codm-blog-card-body">
                                            <h3><Link href={`/blogs/${item.slug}`}>{item.title}</Link></h3>
                                            <p>{item.excerpt}</p>
                                            <Link href={`/blogs/${item.slug}`} className="learn">
                                                Read More
                                                <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
