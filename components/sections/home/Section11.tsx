import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog1 sp overflow-hidden" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Our Blog
                                </span>
                                <h2 className="text-anime-style-3">Blogs, News & AI  Updates</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={800}>
                                    Our blog shares IT insights, industry trends, and expert tips to help businesses and professionals grow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="image">
                                    <img src="assets/img/blog/blog1-img1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                  <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Bhav
                                        </Link>
                                    </div>
                                    <div className="heading1">
                                        <h4>
                                            <Link href="/blog-details">Best Practices While Developing Omniscript &amp;  Data Mapper and IP</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Salesforce OmniStudio empowers you to create guided interactions, integrate data, and streamline workflows with ease.</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
                                            Explore Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog1-box overlay-anim" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image">
                                    <img src="assets/img/blog/blog1-img2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Tannu Singh
                                        </Link>
                                    </div>
                                    <div className="heading1">
                                        <h4>
                                            <Link href="/blog-details">Financial Services Cloud: Key Features for 2025 </Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Salesforce Financial Services Cloud is a CRM built for banks, insurers, wealth managers, and lenders to manage clients.</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
                                            Learn More
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
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
