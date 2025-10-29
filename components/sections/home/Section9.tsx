import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            
            <div className="contact3 sp overflow-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    Contact Us
                                </span>
                                <h2 className="text-anime-style-3">Let’s Start the conversation</h2>
                                <div className="space16" />
                                <p>Have a project in mind? Let’s connect and discover how CodM Software can help you achieve your goals.</p>
                                <div className="space10" />
                                <div className="" data-aos="fade-right" data-aos-duration={900}>
                                    <div className="contact3-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact3-icon1.png" alt="" />
                                        </div>
                                        <div className="heading3">
                                            <h6>Call Us</h6>
                                            <h5>
                                                <Link href="tel:+91 9871717425">+91 9871717425</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-right" data-aos-duration={700}>
                                    <div className="contact3-box">
                                        <div className="icon">
                                            <img src="assets/img/icons/contact3-icon2.png" alt="" />
                                        </div>
                                        <div className="heading3">
                                            <h6>Mail Us</h6>
                                            <h5>
                                                <Link href="mailto:sales@codmsoftware.com">sales@codmsoftware.com</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact3-form" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="heading3-w">
                                    <h5>Let’s Build Something Great</h5>
                                    <div className="space16" />
                                    <p>Looking for the right Salesforce or CRM solution? Send us your query and we’ll guide you through.</p>
                                </div>
                                <div className="space10" />
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
                <img className="shape" src="assets/img/shapes/sec3-shape.png" alt="" />
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
