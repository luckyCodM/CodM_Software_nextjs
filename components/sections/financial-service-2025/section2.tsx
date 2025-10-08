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
                                        <Link href="/error">Price Rule</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>A systematic approach guiding businesses in setting prices for products or services, balancing factors like demand, costs </p>
                                    <div className="space16" />
                                    <Link href="/error" className="learn">
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
                                        <Link href="/error">Salesforce winter 23 release</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>In Salesforce CPQ, Product Validation Rules empower businesses to enforce specific criteria or conditions to ensure accurate configuration</p>
                                    <div className="space16" />
                                    <Link href="/error" className="learn">
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
                                        <Link href="/error">Salesforce winter 24 release</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Winter ’24 Release brings powerful new features, enhancements, and innovations to elevate productivity and customer experiences.</p>
                                    <div className="space16" />
                                    <Link href="/error" className="learn">
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
