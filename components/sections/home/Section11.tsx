import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}            
             <div className="blog5 sp overflow-hidden" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                   Blogs &amp; AI Updates
                                </span>
                                <h2 className="text-anime-style-3"> The Knowledge Hub </h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Stay updated with the latest trends, tips, and tech insights from our experts.
                                    Discover ideas that drive innovation and smarter business decisions.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img1.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 26 August 2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Bhav Malhotra
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog">Best Practices Omniscript &amp;  Data Mapper and IP </Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our blog shares IT insights, industry trends, and expert tips to help businesses and professionals grow. </p>
                                    <div className="space16" />
                                    <Link href="/blog" className="learn">
                                         Explore Now
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img2.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 28 August 2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Tannu Singh
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog">Financial Services Cloud: Key Features for 2025</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Salesforce Financial Services Cloud (FSC) is a specialized CRM platform designed to meet the unique needs </p>
                                    <div className="space16" />
                                    <Link href="/blog" className="learn">
                                        Explore Now
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img3.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ankit Rawat
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog">Configuring Custom Domains in Salesforce</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Setting up a custom domain in Salesforce allows companies to personalize their Salesforce URLs, </p>
                                    <div className="space16" />
                                    <Link href="/blog" className="learn">
                                        Explore Now
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
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
