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
                                            <img src="assets/img/blog/blog-details-img3.png" alt="" />
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
                                        <h3>2. Fix Invalid Template Usage to Avoid Warning When Component Loading</h3>
                                        <div className="space16" />
                                        <p>Loading an LWC component results in a warning if your component includes a  <code>&lt;template&gt;</code> element includes an invalid attribute. For non-root <code>&lt;template&gt;</code> elements, only the following directives are supported: <code>for:each</code>, <code>iterator:iteratorName</code>, and <code>if:true|false</code>. We strongly recommend resolving any issues by removing any invalid attributes from your component's <code>&lt;template&gt;</code> element.</p>
                                        <div className="space16" />
                                        {/* <p>In Spring’23, this invalid usage of the <code>&lt;template&gt;</code> element doesn’t render correctly, and loading a component that contains this invalid usage will result in an error. For example, the non-root <code>&lt;template&gt;</code> element in this example contains an invalid attribute.</p> */}
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/blog/SF_23Picture3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>In Spring’23, this invalid usage of the <code>&lt;template&gt;</code> element doesn’t render correctly, and loading a component that contains this invalid usage will result in an error. For example, the non-root <code>&lt;template&gt;</code> element in this example contains an invalid attribute.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/blog/SF_23Picture4.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>To fix the warning and ensure that your component continues to load correctly in future releases, remove the invalid attribute or use another element like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, depending on your use case.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>3.Be Ready for Multi-Factor Authentication Auto-Enablement</h3>
                                        <div className="space16" />
                                        <p>The requirement to use multi-factor authentication (MFA) when accessing Salesforce products went into effect on February 1, 2022. All users must now use MFA when they login to Salesforce, whether they’re logging in directly or using single sign-on (SSO). To help customers satisfy this requirement, in the first half of 2023, Salesforce is automatically enabling MFA for direct logins. In the September 2023 timeframe, we’re enforcing MFA by making it a permanent part of the Salesforce login process. To avoid disruptions to your users when these milestones occur, enable MFA as soon as possible.</p>
                                        <div className="space16" />
                                        <p>There are several enhancements in Salesforce Flow  as follows:</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p><b>Cut and Paste Flow Elements:</b> Change the order of flow elements auto-layout faster by using cut and paste.Change the order of flow elements auto-layout faster by using cut and paste. Previously, to move an element on the canvas, you copied and pasted the element then deleted the original element, and then you updated the API name of the pasted element. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p><b>Use Formula Builder in Flow Resources and Collection Filter Elements:</b> You can now use an enhanced formula builder in Flow Formula-type resources and the Collection Filter element. The builder guides you through the syntax so that you can create an expression more easily. Instead of waiting until you save a flow, you can check the formula syntax and catch errors as you work.</p>
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
                                    <h3>Salesforce Flow Enhancements</h3>
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
                                                        <Link href="#"> Select Multiple Records in the Lookup Flow Screen Component :</Link>
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
                                            <p>Now you can search and then select more than one record with the Lookup flow screen component. You can specify a selection maximum and one or more default records.</p>
                                            <div className="space10" />
                                            <p>Add the Lookup component to your screen flow and set the Maximum Selections field to a value greater than 1.</p>

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
                                                        <Link href="#">Use Record-Triggered Flows to Update Related Records:</Link>
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
                                            <p>Now you can use record-triggered flows to update any records related to the triggering record.</p>
                                            <div className="space10" />
                                            <p><b>Launch Screen Flows With Lightning Web Components : </b> Embed a screen flow from any Lightning Web Component with the new lightning-flow component. Developers can supercharge their flows by customizing finish behavior, setting custom styling, or launching flows from their Lightning Web Components. And they can offload complex input collection and branching logic to Flow, saving time and money.</p>
                                            <div className="space10" />
                                            <p><b>Example shows an LWC component with the Survey_customers flow API name.</b></p>
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
                                                        <Link href="#">Use In and Not In Operators in Flows to Find Related Records :</Link>
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
                                            <p> With the new In and Not In operators, a flow accesses a collection of primitive values to get related records without using the Loop element. The flow uses fewer SOQL queries and DML statements and performs faster. The new operators support accessing collections of type Text, Number, Date, Date/Time, Currency, and Boolean. The operators are available in the Get Records, Update Records, and Delete Records elements.</p>
                                            <div className="space10" />
                                            <p><b>Test One, Two, Three, Flow (Generally Available): </b>Before you activate a record-triggered flow, you can now test it to quickly verify its expected results and identify flow run-time failures. In Flow Builder, you create, save, and run flow tests. Previously, you debugged a flow manually to troubleshoot failures each time they occurred. Now, you create and save a flow test from a debug run. Then each time you modify the flow, you can run the test. Flow tests don’t support flows that run when a record is deleted. This feature, now generally available, includes some changes since the last release. Flow tests now support scheduled paths. Previously, flow tests</p>

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
                                                        <Link href="#">Filter Your Picklists By Record Type in Flow Screens: </Link>
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
                                            <p>Now you only see relevant picklist values when using Dynamic Forms for Flow. Previously, all the picklist values for a field appeared, regardless of whether a record type was provided, and could show irrelevant values. </p>
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
                                                        <Link href="#">Select Multiple Records from a Table in a Flow Screen :</Link>
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
                                            <p>Leverage the new Data Table (beta) flow screen component to display a list of records on a flow screen. You can set the table to read-only, or enable your users to select one or more records and use their selections later in the flow. And users can change the width of table columns and wrap or truncate overflowing text.</p>
                                            <div className="space10" />
                                            <p>Add the Data Table (beta) component to your screen flow and configure the fields.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="details-contact-form">
                                    <div className="heading1">
                                        <h3>Get In Touch</h3>
                                        <div className="space16" />
                                        <p>We are just a message away—let’s understand how we can help your business.</p>
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
                                    <h3>Our Services</h3>
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
                                            <Link href="/education-cloud">
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
                                                    <Link href="/blog">Financial Services Cloud: Key Features for 2025</Link>
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
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 28 Aug, 2025
                                                </Link>
                                                <h5>
                                                    <Link href="/blog">Best Practices Omniscript & Data Mapper and IP</Link>
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
                                                    <img src="assets/img/icons/recent-date.png" alt="" /> 2 Oct, 2024
                                                </Link>
                                                <h5>
                                                    <Link href="/blog">Salesforce winter 24 release</Link>
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
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
