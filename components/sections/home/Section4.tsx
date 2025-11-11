import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
             <div className="service8 sp overflow-hidden" id="service" style={{ backgroundColor: "#b7533a" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Customized solutions crafted to meet industry-specific needs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon1.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/salesforce-financial-services-cloud-consultant">Financial Services Cloud</Link>
                                    </h4>
                                    <p>Leveraging FSC to provide a 360 degree view of clients by integrating data and automating processes to deliver smarter services.</p>
                                    <Link href="/salesforce-financial-services-cloud-consultant" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon2.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/salesforce-agentforce-ai-company-India">Agentforce & AI</Link>
                                    </h4>
                                    <p>Enhancing customer support using Agentforce & AI, real-time data, faster automation, and smarter service.</p>
                                    <Link href="/salesforce-agentforce-ai-company-India" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon3.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/education-cloud">Education Cloud</Link>
                                    </h4>
                                    <p>A platform for everything you need from streamlined operations to enhanced student engagement with the education cloud.</p>
                                    <Link href="/education-cloud" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon4.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/customer_360_degree">Salesforce Customer 360</Link>
                                    </h4>
                                    <p> Helping businesses deliver the seamless, personalized solutions with Salesforce Customer 360 degree. </p>
                                    <Link href="/customer_360_degree" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon5.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/Industry-cloud">Industries Services</Link>
                                    </h4>
                                    <p>Accelerate growth using the industry cloud tailored solutions and integration build for your unique requirements.</p>
                                    <Link href="/Industry-cloud" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon6.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/banking_service">Banking Services</Link>
                                    </h4>
                                    <p>Helping banks to enhance their customer relationship and streamline processes using Salesforce Banking Service.</p>
                                    <Link href="/banking_service" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space40" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="button text-center">
                                <Link className="theme-btn3" href="/service">
                                    view more services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
