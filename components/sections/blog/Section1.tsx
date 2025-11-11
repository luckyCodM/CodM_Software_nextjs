import Link from "next/link";

export const metadata = {
  title: "Salesforce Implementation & Consulting Blogs",
  description:
    "Explore Codm Software blogs for Salesforce implementation tips, consulting insights, and updates to grow your business in the coming years.",
  keywords: "Blog",
};

export default function Section1() {
    return (
        <>
            {/*===== BLOG AREA START =======*/}
            <div className="blog-page sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/omniscript-data.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 28 August 2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Bhav Malhotra
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/omnistudio-vlocity">Best Practices Omniscript & Data Mapper and IP</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our blog shares IT insights, industry trends and expert tips to help businesses and professionals grow.</p>
                                    <div className="space16" />
                                    <Link href="/omnistudio-vlocity" className="learn">
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
                                    <img src="assets/img/blog/financial-services-cloud.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 26 August 2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Tannu Singh
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/financial-service"> Financial Services Cloud: Key Features for 2025 </Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Financial Services Cloud (FSC) is a specialized CRM platform designed to meet the unique needs </p>
                                    <div className="space16" />
                                    <Link href="/" className="learn">
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
                                    <img src="assets/img/blog/custom-domains.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ankit Rawat
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/error">Configuring Custom Domains in Salesforce</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Setting up a custom domain in Salesforce allows companies to personalize their Salesforce URLs </p>
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
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img4.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 2 September  2024
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ankit Rawat
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/">Price Rule</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>A systematic approach guiding businesses in setting prices for products or services, balancing factors like demand, costs</p>
                                    <div className="space16" />
                                    <Link href="/" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img5.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Bhav Malhotra
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/">Salesforce CPQ Product Validation Rule</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>In Salesforce CPQ, Product Validation Rules empower businesses to enforce specific criteria or conditions to ensure accurate configuration and pricing, </p>
                                    <div className="space16" />
                                    <Link href="/" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img6.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 10 October 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Tannu Singh
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/winter23">Salesforce winter 23 release</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Winter ’23 Release brings powerful new features, enhancements and innovations to elevate productivity and customer experiences.</p>
                                    <div className="space16" />
                                    <Link href="/winter23" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img7.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 July 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/">Named Credentials</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition.</p>
                                    <div className="space16" />
                                    <Link href="/" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/winter24-blog.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 2 October 2024
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ankit Rawat
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/winter24">Salesforce winter 24 release</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p> Winter ’24 Release brings powerful new features, enhancements and innovations to elevate productivity and customer experiences.</p>
                                    <div className="space16" />
                                    <Link href="/winter24" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img9.png" alt="" />
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
                                        <Link href="/blog-details">The Staffing Strategist: Your Guide to Talent Acquisition</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Staffing professionals, as we strive to help you succeed in your staffing endeavors.</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="space30" />
                </div>
            </div>
            {/*===== BLOG AREA END =======*/}
        </>
    );
}
