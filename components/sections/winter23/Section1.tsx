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
                                                    <Link href="/blog-details">Financial Services Cloud: Key Features for 2025</Link>
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
                                                    <Link href="/blog-details">Configuring Custom Domains in Salesforce</Link>
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
                                                    <Link href="/blog-details">Salesforce winter 23 release</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+91 9871717425" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 9871717425
                                    </Link>
                                </div>
                                {/* <div className="details-box2">
                                    <h3>Our Tags</h3>
                                    <div className="space10" />
                                    <ul className="tags">
                                        <li>
                                            <Link href="#">Staffing</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Creative</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Design</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Art</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Image</Link>
                                        </li>
                                        <li>
                                            <Link href="#">People</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Tech</Link>
                                        </li>
                                        <li>
                                            <Link href="#">3D Images</Link>
                                        </li>
                                    </ul>
                                </div> */}
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
                        <div className="col-lg-8">
                            <div className="blog-details-all left-padding">
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/winter-23.png" alt="" />
                                        </div>
                                        <ul className="users">
                                            <li>
                                                <img className="author" src="assets/img/blog/blog-details-othor.png" alt="" /> <Link href="#">Bhav Malhotra </Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon1.png" alt="" /> <Link href="#"> October 11, 2023</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon2.png" alt="" /> <Link href="#">Winter 23 release</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon3.png" alt="" /> <Link href="#"> 2 Comments</Link>
                                            </li>
                                        </ul>
                                        <div className="space10" />
                                        <div className="heading1">
                                            <h2>Salesforce winter 23 release</h2>
                                            <div className="space16" />
                                            <p>The release includes new features and improvements for Lightning Experience, Salesforce Flow,
                                                Lightning Web Component, Apex, Experience Cloud, Einstein Automate, Customer Data Platform,
                                                Field Service, Marketing Cloud Account Engagement, Quip, and CRM Analytics.</p>
                                        </div>
                                    </div>
                                </article>
                                <div className="space10" />
                                <div className="blog-details-border" />
                                <div className="space20" />
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            <img src="assets/img/blog/blog-details-img2.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h3>1. Create Overlays with the New Modal Component</h3>
                                            <div className="space10" />
                                            <p>Use modals to interrupt a user’s workflow and draw attention to an important message.
                                                A modal, which displays the message on top of the current app window, requires a
                                                user to interact with it to regain control over the app.</p>
                                            <div className="space10" />
                                            <p> To create a modal component, import LightningModal from lightning/modal in your JavaScript file. Then, create a component class that extends LightningModal.</p>
                                            <div className="space10" />
                                            <p>This component doesn’t use a lightning-modal tag. Instead, the modal’s HTML template uses helper lightning-modal-* components to make the modal’s header, footer, and body. The lightning-modal-body component is required, and the others are optional.</p>
                                        </div>
                                        <div className="space20" />

                                    </div>
                                </article>
                                <div className="after-box-details">
                                    <div className="heading1">
                                        <p>Our blog is your go-to resource for the latest trends, best practices, and expert advice in the staffing industry. From articles on optimizing your hiring process and navigating employment law changes to career development</p>
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
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>FAQ</h3>
                                        <div className="space16" />
                                        <p>Our temp-to-hire programs offer the flexibility to assess candidates on the job before making a permanent hiring decision, minimizing risk &amp; ensuring a cultural fit.</p>
                                        <div className="space16" />
                                        <p>Our executive search services specialize in identifying and attracting top-level executives and leadership talent to drive your organization's success and growth.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our direct hire solutions streamline the recruitment process, delivering qualified candidates directly to your organization</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Our temporary staffing services provide flexible workforce solutions to meet short-term staffing needs, whether for seasonal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
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
                                                    <li className="text">Post Tags:</li>
                                                    <li>
                                                        <Link href="https://x.com/CodMSoftware"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-x-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.linkedin.com/company/codmsoftware/"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.youtube.com/@CodMSoftware"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-youtube" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://in.pinterest.com/codmsoftware"
                                                            target="_blank" rel="noopener noreferrer">
                                                            <i className="fa-brands fa-pinterest" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details-border" />
                                <div className="heading1">
                                    <h3 />
                                    <h3>OmniScripts</h3>
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
                                                        <Link href="#">1. Design for Modularity and Reusability</Link>
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
                                            <p>Break down OmniScripts into reusable components (e.g., use child OmniScripts and reusable FlexCards).</p>
                                            <div className="space10" />
                                            <p>Leverage reusable actions and templates to minimize redundant configurations.</p>

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
                                                        <Link href="#">2. Optimize Performance</Link>
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
                                            <p>Reduce the number of steps and elements to enhance user experience.</p>
                                            <div className="space10" />
                                            <p>Use conditional rendering and pre-fill data to minimize unnecessary API calls.</p>
                                            <div className="space10" />
                                            <p>Avoid unnecessary data retrieval by using Integration Procedures for backend processing.</p>
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
                                                        <Link href="#">3. Enable Error Handling and Logging</Link>
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
                                            <p>Implement clear error messages to guide users.</p>
                                            <div className="space10" />
                                            <p>Use the OmniScript Debugger to troubleshoot issues effectively.</p>

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
                                                        <Link href="#">4. Utilize DataRaptor and Integration Procedures Efficiently</Link>
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
                                            <p>Use DataRaptor Extract to retrieve data instead of making API calls directly.</p>
                                            <div className="space10" />
                                            <p>Use Integration Procedures to process and transform data before displaying it in OmniScript.</p>
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
                                                        <Link href="#">5. Follow UI/UX Best Practices</Link>
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
                                            <p>Keep OmniScripts intuitive with clear labels and guided steps.</p>
                                            <div className="space10" />
                                            <p>Use Progress Bars and Conditional Views to enhance user experience.</p>
                                            <div className="space10" />
                                            <p>Minimize the number of clicks required for users to complete tasks.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="details-contact-form">
                                    <div className="heading1">
                                        <h3>Leave a Reply</h3>
                                        <div className="space16" />
                                        <p>Real difference in navigating the complexities of hiring and career development. Keep up the fantastic work</p>
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
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
