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
                                <h2 className="text-anime-style-3">We offer customized solutions for various industries</h2>
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
                                        <Link href="/service-details">Financial Services Cloud</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
                                        <Link href="/service-details">Agentforce & AI</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
                                        <Link href="/service-details">Education Cloud</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
                                        <Link href="/service-details">Salesforce Customer 360</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
                                        <Link href="/service-details">Industries Services</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
                                        <Link href="/service-details">Banking</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
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
