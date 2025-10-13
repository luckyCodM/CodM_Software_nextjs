import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*===== BLOG AREA START =======*/}
            <div className="blog-page pb120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <h2>View More Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img1.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Financial Services Cloud: Key Features for 2025</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Salesforce Financial Services Cloud (FSC) is a specialized CRM platform designed to meet the unique needs </p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img2.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Configuring Custom Domains in Salesforce</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Setting up a custom domain in Salesforce allows companies to personalize their Salesforce URLs,</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
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
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Named Credentials</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition.</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
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
            {/*===== BLOG AREA END =======*/}
        </>
    );
}
