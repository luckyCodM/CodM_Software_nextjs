import Link from "next/link";

export const metadata = {
  title: "About us CodM Software",
  description:
    "Codm Software is your trusted Salesforce consulting partner empowering global businesses with innovation and seamless CRM solutions.",
  keywords: "About us CodM Software",
};

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about-page-sec1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about3-images">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img1.png" alt="" />
                                        </div>
                                        <div className="conter-box conter-box1">
                                            <h3>
                                                <span className="counter">20</span>+
                                            </h3>
                                            <p>Project Completed</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="conter-box conter-box2">
                                            <h3>
                                                <span className="counter">10</span>+
                                            </h3>
                                            <p>Years of Experienced</p>
                                        </div>
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 about3-heading">
                                <span className="span">About Us CodM Software</span>
                                <h2>Your Trusted Salesforce Consulting Partner Since 2021</h2>
                                <div className="space16" />
                                <p>Founded in 2021, CodM Software was established with the vision that technology should make business easier and smarter. We began as a small team of passionate Salesforce developers and professionals who have since become an integral part of the organization and evolved into trusted partners for our clients across industries and geographies. We specialize in Salesforce CRM consulting, integration, customization and implementation, helping businesses streamline their operations, strengthen customer relationships and drive growth with adaptable and scalable solutions.</p>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Empowering People, Building Salesforce Excellence</Link>
                                        </h5>
                                        <p>We encourage innovation and growth, empowering our Salesforce experts to deliver impactful solutions.</p>
                                    </div>
                                </div>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Driven by Innovation, Committed to Growth</Link>
                                        </h5>
                                        <p>Our team brings proactive ideas to build scalable, result-oriented solutions that boost business growth.</p>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="">
                                    <Link className="theme-btn1" href="/contact">
                                        Contact Us
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
