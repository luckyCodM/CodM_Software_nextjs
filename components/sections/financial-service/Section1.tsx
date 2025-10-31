"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="Y8XpQpW5OVY" onClose={() => setIsOpen(false)} />

            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-8">
                            <div className="blog-details-all left-padding">
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/blog2-fin1.png" alt="" />
                                        </div>
                                        <ul className="users">
                                            <li>
                                                <img className="author" src="assets/img/blog/blogF-img1.png" alt="" /> <Link href="#"> Tannu Singh </Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon1.png" alt="" /> <Link href="#"> March 11, 2025</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon2.png" alt="" /> <Link href="#">Financial Services Cloud 2025 </Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon3.png" alt="" /> <Link href="#"> 2 Comments</Link>
                                            </li>
                                        </ul>
                                        <div className="space10" />
                                        <div className="heading1">
                                            <h2>What is Salesforce Financial Services Cloud?</h2>
                                            <div className="space16" />
                                            <p>Salesforce Financial Services Cloud (FSC) is a specialized CRM platform built on Salesforce's core infrastructure, designed to help financial institutions
                                                deliver personalized advice, manage customer interactions and streamline operations across banking, wealth management and insurance. Financial Services Cloud
                                                provides your users with the tools that let them focus on high-value customer activities instead of routine, administrative tasks. As an admin, you get the
                                                trusted power, security and scalability of the Salesforce platform-tailored to streamline implementation for financial institutions. Start with a Financial
                                                Services Cloud trial org. Or install the Financial Services Cloud managed package and the unmanaged extension package. Connect data from your banking, portfolio
                                                management, financial planning and other systems. And then configure the app to suit how your users like to work.</p>
                                            <div className="space16" />
                                            <p>Key Components of Financial Services Cloud:</p>
                                            <div className="space16" />
                                            <div className="project-details-list">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        AI-Driven Insights & Automation
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        360-Degree Customer View
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Enhanced Compliance & Security
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Omnichannel Engagement & Client Servicing
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Embedded Financial Products & Ecosystem Integration
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="space10" />
                                <div className="blog-details-border" />
                                <div className="space20" />
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/Financial_Services_Cloud.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="heading1">
                                            {/* <h3>Introduction</h3>
                                            <div className="space16" /> */}
                                            <p>Salesforce Financial Services Cloud (FSC) is a specialized CRM platform designed to meet the unique needs
                                                of financial institutions such as banks, wealth management firms, insurance companies and lenders.
                                                It continues to be a game-changer for financial institutions, offering innovative tools to enhance
                                                customer engagement, streamline operations and ensure compliance. In 2025, FSC introduces new AI-driven
                                                capabilities, automation enhancements and compliance tools that revolutionize the financial industry.</p>
                                        </div>
                                        <div className="space20" />
                                        <h3>Key Features:–</h3>
                                        <div className="project-details-list">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Einstein for Banking and Wealth
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Einstein for Insurance
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Data Cloud for Insurance
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Business Relationship Planning
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Contextual Alerts
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-check" />
                                                    </span>
                                                    Fact Finding for Wealth Managers
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                                <div className="after-box-details">
                                    <div className="heading1">
                                        <p>Our blogs are your go-to resources for the latest trends, industry best practices and expert insights in the Salesforce ecosystem. From implementation tips to services deep dives to technology updates and project success stories and explore how we can help your businesses to lead the digital world</p>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="space30" />
                                        <div className="video-details-area">
                                            <div className="image">
                                                <img src="assets/img/blog/blog-details-video-img.png" alt="" />
                                            </div>
                                            <div className="video-buttton play-btn">
                                                <Link href="https://youtu.be/sSYxWnBm6Vk?si=QY3wC15k110tXzxf" onClick={() => setIsOpen(true)} id="play-video play-btn" className="video-play-button">
                                                    <span />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h3>Field History Tracking </h3>
                                            <div className="space16" />
                                            <p>Refine Operational Insights with Advanced Field History Tracking Capabilities.</p>
                                            <div className="space20" />
                                            <div className="project-details-list">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Enhanced Visibility
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Improved Audit Trail
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Data Analysis and Insights
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Efficient Troubleshooting
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tags-icons">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            {/* <div className="details-tags">
                                                <ul>
                                                    <li className="text">Post Tags:</li>
                                                    <li>
                                                        <Link href="#">Staffing agency</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">Business</Link>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-icons">
                                                <ul>
                                                    <li className="text">Follow Us</li>
                                                    <li>
                                                        <Link href="https://x.com/CodMSoftware" target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-x-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.linkedin.com/company/codmsoftware/" target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.youtube.com/@CodMSoftware"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-youtube" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details-border" />
                                <div className="heading1">
                                    <h3>Security and Compliance of Salesforce Financial Cloud Services</h3>
                                </div>
                                <div className="space16" />
                                <div className="heading1">
                                    <p>Salesforce Financial Services Cloud (FSC) is designed to meet the stringent security and compliance requirements of the financial industry. Key aspects include:</p>
                                </div>

                                <div className="blog-details-commnet-boxs">
                                    <div className="commnet-box">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/comment-img1.png" alt="" /> */}
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">1. Compliance Certifications and Attestations</Link>
                                                    </h5>
                                                    {/* <p>8/01/2023</p> */}
                                                </div>
                                            </div>
                                            {/* <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link> */}
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>Salesforce Financial Services Cloud (FSC) addresses the aspect of trust by providing a list of compliance certifications and attestations. It complies with internationally accepted best practices like ISO 27001, ISO 27017 and ISO 27018.</p>
                                            <div className="space10" />
                                            <p>Moreover, being SOC 1, SOC 2 and PCI DSS compliant assures that the FSC has taken necessary measures to protect financial data. These certifications provide the necessary assurance to financial institutions that FSC can depend on compliance and data protection.</p>

                                        </div>
                                    </div>

                                    <div className="commnet-box commnet-box2">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/comment-img2.png" alt="" /> */}
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">2. Data Security Measures</Link>
                                                    </h5>
                                                    {/* <p>8/01/2023</p> */}
                                                </div>
                                            </div>
                                            {/* <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link> */}
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>Data security measures have been adopted widely in FSC to ensure that important information is well protected. Platform Encryption guarantees information's safety if stored and this incorporates specific information such as PII and financial details.</p>
                                            <div className="space10" />
                                            <p>The Field Audit Trail feature provides data history for 10 years, allowing the company to meet retention frameworks where data history is mandatory.</p>
                                        </div>
                                    </div>
                                    <div className="commnet-box">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/comment-img1.png" alt="" /> */}
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">3. Support for Regulatory Compliance</Link>
                                                    </h5>
                                                    {/* <p>8/01/2023</p> */}
                                                </div>
                                            </div>
                                            {/* <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link> */}
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>FSC is designed primarily to assist financial institutions in maximal compliance with industry regulations. Most of them provide compliance features that help to simplify adherence to complex financial services compliance standards.</p>
                                            <div className="space10" />
                                            <p>Such support empowers organizations to be assured of compliance with their regulatory requirements while attending to their primary business.</p>

                                        </div>
                                    </div>

                                    <div className="commnet-box commnet-box2">
                                        <div className="top-area">
                                            <div className="author-area">
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/comment-img2.png" alt="" /> */}
                                                </div>
                                                <div className="heading">
                                                    <h5>
                                                        <Link href="#">4. Security Best Practices</Link>
                                                    </h5>
                                                    {/* <p>8/01/2023</p> */}
                                                </div>
                                            </div>
                                            {/* <Link href="#" className="reply-btn">
                                                <span>
                                                    <i className="fa-solid fa-reply" />
                                                </span>
                                                Reply
                                            </Link> */}
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1">
                                            <p>Salesforce also offers guidelines on how to enhance data ownership & protection within FSC. They include advice on how to handle user privileges and the guidelines that should be followed when setting and enforcing password requirements.</p>
                                            <div className="space10" />
                                            <p>Through these practices, financial institutions can improve their overall security profile and eliminate possible weaknesses.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="details-contact-form">
                                    <div className="heading1">
                                        <h3>Talk to Our Experts</h3>
                                        <div className="space16" />
                                        <p>Connect with our specialists and uncover how we can help optimise your process.</p>
                                    </div>
                                    <form
                                        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                                        method="POST"
                                        autoComplete="off"
                                        name="ContactForm">
                                        {/* Required hidden Salesforce fields */}
                                        <input type="hidden" name="oid" value="00D5i000008yVNX" />
                                        <input type="hidden" name="retURL" value="codmsoftware.com" />
                                        <input type="hidden" name="lead_source" value="Web" />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" name="first_name" placeholder="Your Name" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="text" name="last_name" placeholder="Last Name" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="email" name="email" placeholder="Email" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <input type="tel" name="phone" placeholder="Phone" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <input type="text" name="subject" placeholder="Company" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <textarea rows={5} name="description" placeholder="Message"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="button">
                                                    <button type="submit" className="theme-btn1">
                                                        Submit Now
                                                        <span>
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box2 search">
                                    <h3>Search</h3>
                                    <div className="space10" />
                                    <div className="search-area">
                                        <form action="#">
                                            <input type="search" placeholder="Search..." />
                                            <button>
                                                <i className="fa-solid fa-magnifying-glass" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="details-box2">
                                    <h3>Recent Posts</h3>
                                    <div className="space10" />
                                    <ul className="recent-posts">
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/omnistudio-vlocity">Best Practices Omniscript & Data Mapper and IP</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post2.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog">Configuring Custom Domains in Salesforce</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post3.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog-details">Salesforce CPQ Product Validation Rule</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="single-recent-post">
                                            <div className="">
                                                <div className="image">
                                                    <img src="assets/img/blog/recent-post4.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <Link href="#" className="date">
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 20 Apr, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/winter23">Salesforce winter 24 release</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="details-box2">
                                    <h3>Categories</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/financial-services-cloud">
                                                Financial Services Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/agentforce-&-ai">
                                                Agentforce & AI
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                Education Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                Salesforce Customer 360

                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                OmniStudio Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+91 9871717425" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 9871717425
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3> About Us </h3>
                                    <p>Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and
                                        scalable growth we deliver innovations for your success.</p>
                                    <div className="space10" />
                                    <Link href="/assets/img/codmsoftware_pdf/CodM_Software_Portfolio_Profile.pdf" className="download-btn1">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
