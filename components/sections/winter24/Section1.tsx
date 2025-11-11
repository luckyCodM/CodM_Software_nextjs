"use client";
import Link from "next/link";
import { useState } from "react";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.css";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* <ModalVideo channel="youtube" isOpen={isOpen} videoId="Y8XpQpW5OVY" onClose={() => setIsOpen(false)} /> */}

            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <div className="blog-details-all left-padding">
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            {/* <img src="assets/img/blog/winter-23.png" alt="" /> */}
                                        </div>
                                        <ul className="users">
                                            <li>
                                                <img className="author" src="assets/img/blog/blog-details-othor.png" alt="" /> <Link href="#">Bhav Malhotra </Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon1.png" alt="" /> <Link href="#"> October 11, 2023</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon2.png" alt="" /> <Link href="#">Winter 24 release</Link>
                                            </li>
                                            <li>
                                                <img src="assets/img/icons/blog-details-icon3.png" alt="" /> <Link href="#"> 2 Comments</Link>
                                            </li>
                                        </ul>
                                        <div className="space10" />
                                        <div className="heading1">
                                            <h2>Salesforce Winter ’24 Release Date + Preview Information</h2>
                                            <div className="space16" />
                                            <p>The peak of excitement in the Salesforce ecosystem is right around the corner! Dreamforce and
                                                the Winter ’24 release coincide in the same 30-day period, and with this comes a lot of exciting
                                                news.</p>
                                            <div className="space16" />
                                            <p>There are many agenda items you need to prepare for with each release, but at this stage, there
                                                are only a couple of things you need to know:
                                                1. how to prepare your sandbox
                                                2. when your instance will get upgraded.</p>
                                        </div>
                                    </div>
                                </article>
                                <div className="space10" />
                                <div className="blog-details-border" />
                                <div className="space20" />
                                <article>
                                    <div className="blog-details-box">
                                        <div className="image">
                                            {/* <img src="assets/img/blog/blog-details-img3.png" alt="" /> */}
                                        </div>
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h3>Salesforce Winter ’24 Release Date</h3>
                                            <div className="space10" />
                                            <p>The first thing you should be aware of is when your production instance will be upgraded to the
                                                Salesforce Winter ’24 release. It’s important that you test all the main use cases in your org
                                                before this date to ensure that everything continues to work. Although Salesforce releases
                                                rarely have any major bugs, these checks should still be carried out.</p>
                                            <div className="space10" />
                                            <p>The release date for Winter ’24 will depend on your instance of Salesforce, but the main release weekends are on:</p>
                                            <div className="space10" />
                                            <p>Sep. 02, 2023</p>
                                            <p>Oct. 07, 2023</p>
                                            <p>Oct. 14, 2023</p>
                                            <div className="space10" />
                                            <p>If you already know the instance your production org is located on, you can head over to Salesforce Trust,
                                                click on your instance name, and hit “Maintenance”. This will show you the date of the Salesforce Winter ’24 release hitting your org.</p>
                                            <div className="space10" />
                                            <p>If you don’t know your instance, the quickest way to find out is to head to “company information” within “Setup” in your Salesforce.
                                                If you want to know more about Salesforce instances, check out our comprehensive post about how to find yours.</p>
                                        </div>
                                        <div className="space20" />
                                    </div>
                                </article>
                                <div className="after-box-details">
                                    <div className="heading1">
                                        <p>Our blog is your go-to resource for the latest trends, best practices and expert advice in the staffing industry. From articles on optimizing your hiring process and navigating employment law changes to career development</p>
                                    </div>
                                </div>
                                {/* <div className="row align-items-center">
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
                                </div> */}
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>Winter ’24 Sandbox Preview Information</h3>
                                        <div className="space16" />
                                        <p>The second thing you should be aware of is how (and when) your sandbox is going to be upgraded. This is extremely important as this is the first opportunity you will get to test your system on the new release. You can sign up for a pre-release org, but these, of course, will not have any of your configurations.</p>
                                        <div className="space16" />
                                        <p>Salesforce has two release windows for sandboxes, which depends on whether your sandbox is a “Preview” instance or a “Non-Preview” instance. Stay tuned for more information on Sandbox previews, but it looks like most sandboxes will be upgraded on Aug 26th 2023.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/SF_23Picture3.png" alt="" /> */}
                                                </div>
                                                <div className="space30" />
                                                <h4>Winter ’24 Pre-Release Org</h4>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>As mentioned above, pre-release orgs are a great way to get familiar with the new release before it hits your sandboxes. For those with existing preview orgs, these are now upgraded with the Winter ’24 release, and you can login to get access to the latest features.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/blog/SF_23Picture4.png" alt="" /> */}
                                                </div>
                                                <div className="space30" />
                                                <h4>Winter ’24 Pre-Release Notes</h4>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Although the dates mentioned above are some of the most important of the Salesforce release cycle, the most anticipated date is for the official “Salesforce Release Notes”. This is the first glimpse of the features and upgrades that are being applied across the Salesforce suite of products. Salesforce have yet to announce a date for the release notes, but they should be here in early August.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>1. Display Custom Error Messages in Record-Triggered Flows</h3>
                                        <div className="space16" />
                                        <p>Salesforce introduced a new element called Custom Error. Using this new element, you can display custom error messages in record-triggered flows. It is possible to use this element to build complex validation rules, display error messages in fault paths, and even block deleting records.</p>
                                        <div className="space16" />
                                        <h3>2. Filter Flows in Flow Trigger Explorer</h3>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img2.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>To help you easily view all of your record-triggered flows by the object, Salesforce introduced Flow Trigger Explorer in the Spring '22 release. It is a great tool that displays record-triggered flows in a single place.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img3.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>If you have a lot of flows (active or inactive), it can be hard to see them in a single place. In the Winter '24 release, Salesforce added an option to filter flows in Flow Trigger Explorer. Using this feature,
                                                        you can filter flows by their status, package state, or process type.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>4. HTTP Callout Supports More Methods</h3>
                                        <div className="space16" />
                                        <p>HTTP Callout is an amazing feature that Salesforce introduced in the Spring '23 release. In the previous release, they added a POST method as well. Starting with the Winter '24 release, HTTP Callout supports other methods as well (PUT, PATCH, DELETE).</p>
                                        <div className="space16" />
                                        <h3>5. Transform (Beta) Element</h3>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img2.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Salesforce introduced a new element called Transform (Beta).
                                                        This element transforms source data to target data.
                                                        For source and target data, you can select resources like outputs from actions, record variables, and Apex-defined variables.
                                                        Then, map the data using the circled bullet icons.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img3.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>In the screenshot below, this element transforms a lead record to a contact record.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>It is also possible to use a formula for the mapping.</h3>
                                        <div className="space16" />
                                        <p>Output of this element is a variable (single or collection). For example, here the output is a Contact record variable and then it is used to create a Contact record.</p>
                                        <div className="space16" />
                                        <p>Here is another example that transforms Contact records to Opportunity Contact Role records. It transforms a record collection to another type of record collection. Before this release, you had to use Loop and Assignment elements in order to achieve this.</p>
                                        <div className="space16" />
                                        <h3>6. More Components Are Reactive</h3>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img2.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Salesforce introduced reactive screen components in the Spring '23 release.
                                                        With reactive screen components, your screen components can react to a user’s actions on the same screen.
                                                        However, some of the standard screen components were not reactive. In the Winter '24 release, more components start to support reactivity.
                                                        For instance, selection components are now reactive. On the other hand, display text component starts to be reactive too. However, it is a beta program and you have to opt in from Process Automation Settings in Salesforce setup.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img3.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>As you can see from the screenshot below, reactive screen components is not a beta program anymore.
                                                        If you are using API version 59, you don't need to enable reactive screen components.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>7. Pause Element is Replaced By Wait Elements</h3>
                                        <div className="space16" />
                                        <p>Salesforce introduced 3 new Wait elements to replace the Pause element.</p>
                                        <div className="space16" />
                                        <p><b>The Wait for Conditions</b> element replaces the Pause element, there is nothing different here.</p>
                                        <div className="space16" />
                                        <p><b>Wait for the Amount of Time </b>element lets you wait for a specified amount of time. Valid values are Minutes, Hours, Days, and Months. Moreover, you can resume at a specific time of day.</p>
                                        <p><b>Wait Until Date </b>element lets you wait until a specific date and time.</p>
                                        <div className="space16" />
                                        <h3>8. Product Selector Screen Component</h3>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img2.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>There is a new screen component called Product Selector. This input component lets you select products with quantities.
                                                        In order to configure this component, you have to provide the available products and price book entries.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img3.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>This element stores the output in an Apex-defined collection variable.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article>
                                    <div className="heading1">
                                        <div className="space30" />
                                        <h3>11. Disable Access to Session IDs in Flows (Release Update)</h3>
                                        <div className="space16" />
                                        <p>To improve security, this update prevents flow interviews from resolving the $Api.Session_ID variable at run time.
                                            Previously, when a flow screen included the $Api.Session_ID variable, the browser session ID of the user that ran the flow appeared on the screen.
                                            A user was able to employ the session ID to bypass security controls. This update was first made available in Winter ’23 and was scheduled to be enforced in Summer ’23,
                                            but we postponed the enforcement date to Winter ’24.</p>
                                        <div className="space16" />
                                        <p>Where: This change applies to Lightning Experience and Salesforce Classic in Enterprise, Performance, Unlimited, and Developer editions.</p>
                                        <div className="space16" />
                                        <p>When: Salesforce enforces this update in Winter ’24. To get the major release upgrade date for your instance, go to Trust Status, search for your instance, and click the maintenance tab.</p>
                                        <p>How: Before you apply this update, remove all dependencies on the $Api.Session_ID variable from your flows. Then, from Setup, in the Quick Find box, enter Release Updates, and then select Release Updates.
                                            To get the Disable Access to Browser Session IDs in Flows release update, follow the testing and activation steps.</p>
                                        <div className="space16" />
                                        <h3>10. Dynamic Actions on Mobile for Standard Objects</h3>
                                        <div className="space16" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img2.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Currently, you can define different Dynamic Actions for mobile (versus desktop) for<b> custom objects.</b> This idea is advocating for this flexibility to be extended for<b>standard objects.</b></p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    {/* <img src="assets/img/service/service-details-img3.png" alt="" /> */}
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>This element stores the output in an Apex-defined collection variable.</p>
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
                                {/* <div className="heading1">
                                        <h3 />
                                        <h3>Salesforce Flow Enhancements</h3>
                                    </div> */}
                                {/* <div className="blog-details-commnet-boxs">
                                        <div className="commnet-box">
                                            <div className="top-area">
                                                <div className="author-area">
                                                    <div className="image"> */}
                                {/* <img src="assets/img/blog/comment-img1.png" alt="" /> */}
                                {/* </div>
                                                    <div className="heading">
                                                        <h5>
                                                            <Link href="#"> Select Multiple Records in the Lookup Flow Screen Component :</Link>
                                                        </h5> */}
                                {/* <p>8/01/2023</p> */}
                                {/* </div>
                                                </div> */}
                                {/* <Link href="#" className="reply-btn">
                                                    <span>
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    Reply
                                                </Link> */}
                                {/* </div>
                                            <div className="space16" />
                                            <div className="heading1">
                                                <p>Now you can search and then select more than one record with the Lookup flow screen component. You can specify a selection maximum and one or more default records.</p>
                                                <div className="space10" />
                                                <p>Add the Lookup component to your screen flow and set the Maximum Selections field to a value greater than 1.</p>

                                            </div>
                                        </div> */}

                                {/* <div className="commnet-box commnet-box2">
                                            <div className="top-area">
                                                <div className="author-area">
                                                    <div className="image"> */}
                                {/* <img src="assets/img/blog/comment-img2.png" alt="" /> */}
                                {/* </div>
                                                    <div className="heading">
                                                        <h5>
                                                            <Link href="#">Use Record-Triggered Flows to Update Related Records:</Link>
                                                        </h5> */}
                                {/* <p>8/01/2023</p> */}
                                {/* </div>
                                                </div> */}
                                {/* <Link href="#" className="reply-btn">
                                                    <span>
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    Reply
                                                </Link> */}
                                {/* </div>
                                            <div className="space16" />
                                            <div className="heading1">
                                                <p>Now you can use record-triggered flows to update any records related to the triggering record.</p>
                                                <div className="space10" />
                                                <p><b>Launch Screen Flows With Lightning Web Components : </b> Embed a screen flow from any Lightning Web Component with the new lightning-flow component. Developers can supercharge their flows by customizing finish behavior, setting custom styling or launching flows from their Lightning Web Components. And they can offload complex input collection and branching logic to Flow, saving time and money.</p>
                                                <div className="space10" />
                                                <p><b>Example shows an LWC component with the Survey_customers flow API name.</b></p>
                                            </div>
                                        </div> */}
                                {/* <div className="commnet-box">
                                            <div className="top-area">
                                                <div className="author-area">
                                                    <div className="image"> */}
                                {/* <img src="assets/img/blog/comment-img1.png" alt="" /> */}
                                {/* </div>
                                                    <div className="heading">
                                                        <h5>
                                                            <Link href="#">Use In and Not In Operators in Flows to Find Related Records :</Link>
                                                        </h5> */}
                                {/* <p>8/01/2023</p> */}
                                {/* </div>
                                                </div> */}
                                {/* <Link href="#" className="reply-btn">
                                                    <span>
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    Reply
                                                </Link> */}
                                {/* </div>
                                            <div className="space16" />
                                            <div className="heading1">
                                                <p> With the new In and Not In operators, a flow accesses a collection of primitive values to get related records without using the Loop element. The flow uses fewer SOQL queries and DML statements and performs faster. The new operators support accessing collections of type Text, Number, Date, Date/Time, Currency and Boolean. The operators are available in the Get Records, Update Records and Delete Records elements.</p>
                                                <div className="space10" />
                                                <p><b>Test One, Two, Three, Flow (Generally Available): </b>Before you activate a record-triggered flow, you can now test it to quickly verify its expected results and identify flow run-time failures. In Flow Builder, you create, save and run flow tests. Previously, you debugged a flow manually to troubleshoot failures each time they occurred. Now, you create and save a flow test from a debug run. Then each time you modify the flow, you can run the test. Flow tests don’t support flows that run when a record is deleted. This feature, now generally available, includes some changes since the last release. Flow tests now support scheduled paths. Previously, flow tests</p>

                                            </div>
                                        </div> */}

                                {/* <div className="commnet-box commnet-box2">
                                            <div className="top-area">
                                                <div className="author-area">
                                                    <div className="image"> */}
                                {/* <img src="assets/img/blog/comment-img2.png" alt="" /> */}
                                {/* </div>
                                                    <div className="heading"> */}
                                {/* <h5> */}
                                {/* <Link href="#">Filter Your Picklists By Record Type in Flow Screens: </Link> */}
                                {/* </h5> */}
                                {/* <p>8/01/2023</p> */}
                                {/* </div>
                                                </div> */}
                                {/* <Link href="#" className="reply-btn">
                                                    <span>
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    Reply
                                                </Link> */}
                                {/* </div>
                                            <div className="space16" />
                                            <div className="heading1">
                                                <p>Now you only see relevant picklist values when using Dynamic Forms for Flow. Previously, all the picklist values for a field appeared, regardless of whether a record type was provided and could show irrelevant values. </p>
                                                <div className="space10" />
                                                <p>Use Integration Procedures to process and transform data before displaying it in OmniScript.</p>
                                            </div>
                                        </div> */}

                                {/* <div className="commnet-box">
                                            <div className="top-area">
                                                <div className="author-area">
                                                    <div className="image"> */}
                                {/* <img src="assets/img/blog/comment-img1.png" alt="" /> */}
                                {/* </div> */}
                                {/* <div className="heading">
                                                        <h5>
                                                            <Link href="#">Select Multiple Records from a Table in a Flow Screen :</Link>
                                                        </h5> */}
                                {/* <p>8/01/2023</p> */}
                                {/* </div>
                                                </div> */}
                                {/* <Link href="#" className="reply-btn">
                                                    <span>
                                                        <i className="fa-solid fa-reply" />
                                                    </span>
                                                    Reply
                                                </Link> */}
                                {/* </div>
                                            <div className="space16" />
                                            <div className="heading1">
                                                <p>Leverage the new Data Table (beta) flow screen component to display a list of records on a flow screen. You can set the table to read-only or enable your users to select one or more records and use their selections later in the flow. And users can change the width of table columns and wrap or truncate overflowing text.</p>
                                                <div className="space10" />
                                                <p>Add the Data Table (beta) component to your screen flow and configure the fields.</p>
                                            </div>
                                        </div>
                                    </div> */}
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
                                                    <Link href="/error">Configuring Custom Domains in Salesforce</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        {/* <div className="single-recent-post">
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
                                                    <Link href="#">Configuring Custom Domains in Salesforce</Link>
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
                                                    <Link href="#">Best Practices Omniscript & Data Mapper and IP</Link>
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
                                                    <Link href="#">Salesforce winter 24 release</Link>
                                                </h5>
                                            </div>
                                        </div> */}
                                    </ul>
                                </div>
                                <div className="details-box2">
                                    <h3>Blog Categories</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="#">
                                                Salesforce winter 24 release
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/omnistudio-vlocity">
                                                Best Practices Omniscript & Data Mapper and IP
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/financial-service">
                                                Financial Services Cloud: Key Features for 2025
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/winter23">
                                                Salesforce winter 23 release
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/error">
                                                Configuring Custom Domains in Salesforce
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
