import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-lg-8">
                            <div className="service-details-area left-padding">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>How to use Field History Tracking in Salesforce</h2>
                                        <div className="space16" />
                                        <p>Updating fields for Objects in Salesforce is routine as customer
                                            information changes. Being able to remember what certain values were a week or month ago would
                                            be quite handy. But remembering this data becomes impossible with hundreds of customers and many
                                            teammates using Salesforce. <b>What’s the solution? That’s where Field History Tracking comes in.</b></p>
                                        <div className="space30" />
                                        <h3>How our Field History Tracking be useful for your business?</h3>
                                        <div className="space16" />
                                        <p>Our Field History Tracking Application enables users to track field history of as many
                                            fields for an object they want.</p>
                                        <div className="space5" />
                                        <p>The object can be standard or custom as per user's choice.</p>
                                        <div className="space5" />
                                        <p>As per the Salesforce Standard Functionality, a user is able to track field
                                            history of only 20 fields at a time. This limitation enables
                                            our FHT to stand out as it allows every existing field in a salesforce org to be
                                            available for Field History Tracking.</p>
                                        <div className="space5" />
                                        <p>It is a user friendly application which enables tracking for both standard
                                            and custom objects.</p>
                                        <div className="space30" />
                                        <h3>Audit Trails</h3>
                                        <div className="space16" />
                                        <p>This feature helps you with a useful audit trail for reviewing or
                                            troubleshooting past changes. Changes to tracked fields are displayed in the Objects History
                                            Related list and the data is retained for 18 months.</p>
                                        <div className="space16" />
                                        <p>Salesforce Field History Tracking can also help you understand when a non-human 'user' is making
                                            updates to fields, such as when a process builder makes a change to a field value or an
                                            integration user updates a record from an external web site form.</p>
                                        <div className="space30" />
                                        <h3>Let’s Get Tracking</h3>
                                    </div>
                                </article>
                                <article>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="space30" />
                                            <div className="image">
                                                <img src="assets/img/service/service-details-img2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="space16" />
                                            <div className="project-details-list">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        To enable Field History Tracking
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Select any Standard/Custom Object
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Select fields for Field History Tracking
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Preview the fields and Submit them
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Go to any of the selected object's record
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Place the LWC Component
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Make changes to the record's selected fields
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Make sure to save the record
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        You will be able to see the list of FHT Records
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="space10" />
                                    <div className="porgress-line-all">
                                        <div className="progress-line">
                                            <h6>Consulting</h6>
                                            <div id="progress1" data-init="true" />
                                        </div>
                                        <div className="progress-line">
                                            <h6>Marketing</h6>
                                            <div id="progress2" data-init="true" />
                                        </div>
                                    </div> */}
                                    <div className="space30" />
                                    <div className="heading1">
                                        <h3>FHT Features</h3>
                                    </div>
                                    <div className="row align-items-center">
                                        {/* <div className="space16" /> */}
                                        <div className="col-lg-6">
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
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Performance Monitoring
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Comprehensive Reporting
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="space30" />
                                            <div className="image">
                                                <img src="assets/img/service/service-details-img2.png" alt="" />
                                            </div>
                                            <div className="space30" />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box2">
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
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+919871717425" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 9871717425
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Download Brochure</h3>
                                    <p>Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and scalable growth we deliver innovations for your success.</p>
                                    <div className="space10" />
                                    <Link href="/assets/img/codmsoftware_pdf/CodM_Software_Portfolio_Profile.pdf" className="download-btn1">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Get A Free Quote</h3>
                                    <div className="space10" />
                                    <div className="form">
                                        <form action="#">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="email" placeholder="Email Address" />
                                            <input type="number" placeholder="Phone Number" />
                                            <textarea placeholder="Your Message" rows={3} defaultValue={""} />
                                            <div className="space10" />
                                            <button className="theme-btn1">
                                                Submit Now
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </button>
                                        </form>
                                    </div>
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
