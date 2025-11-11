import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 service-page-service pb120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <h2>View More Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon6.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/salesforce-agentforce-ai-company-India">Agentforce & AI</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Enhancing customer support using Agentforce & AI. real-time data, faster automation and smarter service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box active">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon2.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/education-cloud"> Education Cloud </Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>A platform for everything you need from streamlined operations to enhanced student engagement with the education cloud. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img3.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon3.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/customer_360_degree">Salesforce Customer 360</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Helping businesses deliver the seamless, personalized solutions with Salesforce Customer 360 degree. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
