import Image from "next/image";
import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero-area1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="fade-right" data-aos-duration={800}>
                                    No Code Low Code
                                </span>
                                <h1 className="text-anime-style-3">Expert Salesforce Consulting Company</h1>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={1000}>
                                    Salesforce Consulting Partner for CRM, Automation, and AI
                                    We help businesses implement, customize, and scale Salesforce across Financial Services, Education, Banking, and Customer 360.
                                </p>
                                <div className="space30" />
                                <div className="hero1-buttons" data-aos="fade-right" data-aos-duration={1200}>
                                    <Link className="theme-btn1" href="/service">
                                        Explore Salesforce Services
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link className="theme-btn2" href="tel:+91 9871717425">
                                        Talk to a Salesforce Expert
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero1-images">
                                <div className="image1">
                                    <Image src="/assets/img/bg/hero1-main-bg.png" alt="Salesforce CRM consulting background design" width={614} height={540} priority sizes="(max-width: 991px) 92vw, 42vw" />
                                </div>
                                <div className="image2 overlay-anim" data-aos="zoom-in-up" data-aos-duration={700}>
                                    <Image src="/assets/img/hero/hero1-main-img.png" alt="CodM Software Salesforce consulting services hero image" width={500} height={500} priority sizes="(max-width: 991px) 68vw, 32vw" />
                                </div>
                                <div className="image3 shape-animaiton2" data-aos="zoom-in-up" data-aos-duration={700}>
                                    <Image src="/assets/img/shapes/review-img.png" alt="Client review rating graphic for CodM Software" width={360} height={224} sizes="(max-width: 991px) 42vw, 18vw" />
                                </div>
                                <div className="image4 shape-animaiton3">
                                    <Image src="/assets/img/shapes/hero1-shape.png" alt="Decorative Salesforce consulting shape" width={37} height={48} sizes="48px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
