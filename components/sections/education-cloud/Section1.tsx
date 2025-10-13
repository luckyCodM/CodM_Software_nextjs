import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box3">
                                    <h3>Our Services</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="#">
                                                Education Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/financial-services-cloud">
                                                Financial Services Cloud
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/agentforce-ai">
                                                Agentforce & AI
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
                                    <h3>Follow Us</h3>
                                    <div className="space10" />
                                    <ul className="icons">
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
                        <div className="col-lg-8">
                            <div className="service-details-area left-padding">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>What is Salesforce Education Cloud?</h2>
                                        <div className="space16" />
                                        <p>Salesforce Education Cloud is a platform designed for educational institutions to streamline their end-to-end processes from staff recruitment, admissions, student success, alumni engagement, and other operations in a single platform. It gives a complete view of every student and stakeholder.</p>
                                        <div className="space10" />
                                        <p>Whether you’re a school, college, university, or training institute, Education Cloud helps you:</p>
                                        <div className="space10" />
                                        <p>✔ Personalize student experiences</p>
                                        <p>✔ Improve communication and engagement</p>
                                        <p>✔ Streamline administrative tasks</p>
                                        <p>✔ Make data-driven decisions for better outcomes</p>
                                        <div className="space30" />
                                        <h3>Benefits of Education Cloud</h3>
                                        <div className="space16" />
                                        <p>1. 360-degree Student View: It helps you to track every interaction with students from enrollment to graduation in one platform.</p>
                                        <div className="space10" />
                                        <p>2. Improved Student Engagement: It helps you to use personalized communication and automation to boost student involvement, engagement, and satisfaction.</p>
                                        <div className="space10" />
                                        <p>3. Streamlined admission and recruitment process: Education Cloud helps institutions to simplify their admission and recruitment processes by managing applications, compiling leads, and converting them into enrolled students and staff.</p>
                                        <div className="space10" />
                                        <p>4. Enhanced Efficiency: It helps you to automate your daily manual tasks, manage all the data, and free the staff from manual data management tasks to focus on student success.</p>
                                        <div className="space10" />
                                        <p>5. Stronger Alumni and Donor Relationships: Education Cloud can effectively manage the institute's alumni database, fundraising and other campaigns, and donor engagements from a single platform.</p>
                                        <div className="space10" />
                                        <p>6. Scalable and Customizable: You can tailor the system according to your institution's unique needs and processes, ensuring the system evolves as the organization grows.</p>
                                        <div className="space30" />
                                        <h3>Why choose CodM Software for Salesforce Education Cloud implementation?</h3>
                                        <div className="space16" />
                                        <p>1. Education-Focused Expertise: Our expert team at CodM understands the unique challenges and needs of educational institutions and customizes Salesforce solutions to meet those needs.</p>
                                        <div className="space16" />
                                        <p>2. Certified Salesforce Professional: We bring technical expertise, Salesforce certifications, and industry knowledge to deliver reliable, scalable Education Cloud solutions.</p>
                                        <div className="space16" />
                                        <p>3. End-to-End Support: From strategy, system design, implementation, training, and support, we provide support and guide you in every step of the journey.</p>
                                        <div className="space16" />
                                        <p>4. Custom solutions for every institution: We understand that no two institutions are the same; that’s why we built the Education Cloud solutions that align with your institute’s processes, students’ needs, and organizational goals.</p>
                                        <div className="space16" />
                                        <p>5. Security & Compliance- To ensure that the data and information of your customers is safe and secure, we follow best industry practices for data protection and regulatory compliance.</p>
                                        <div className="space16" />
                                        <p>6. Proven Track Record: We have helped multiple institutions implement Education Cloud and helped them improve their operations, student engagement, and outcomes.</p>
                                    </div>
                                </article>
                                <div className="space30" />
                                <article>
                                    <div className="heading1">
                                        <h3>FAQ</h3>
                                        {/* <div className="space16" />
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
                                        </div> */}
                                    </div>
                                </article>
                                <div className="space20" />
                                <div className="faq-all-area">
                                    <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item active">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Who can use Salesforce Education Cloud?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Education Cloud is ideal for schools, colleges, universities, training institutes, online education institutions, etc. It can be used by all educational institutions that are looking to streamline their processes and improve engagement, operations, and student success.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Can CodM Software customize Education Cloud to our requirements?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Yes, we can tailor Salesforce Education Cloud to align with your unique needs and requirements, whether it is the admission process, communication workflow, support service for students and administrative staff, etc. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Can Education Cloud help with student retention?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Definitely, with real-time data and personalized engagement tools, institutions can proactively support at-risk students, improving retention and graduation rates. </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    How secure is the data on Education Cloud?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Salesforce provides enterprise-grade security, and CodM Software follows best practices to ensure your data is protected, compliant, and accessible only to authorized users. </div>
                                            </div>
                                        </div>
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
