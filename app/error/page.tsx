import Link from "next/link";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2 from "@/components/sections/about-us/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Coming soon" group_page="" current_page="Coming soon" display="d-none" />
                <>
                    {/*=====ERROR AREA START=======*/}
                    <div className="error-page sp">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="error-page-content">
                                        <div className="image text-center">
                                            <img src="assets/img/others/error.png" alt="" />
                                        </div>
                                        <div className="space50" />
                                        <div className="heading1 text-center">
                                            <h2> Coming soon</h2>
                                            <div className="space16" />
                                            <p>
                                                Our website is under construction. We’re working hard to give you the best experience. Stay tuned!
                                            </p>
                                            <div className="space30" />
                                            <div className="button">
                                                <Link className="theme-btn1" href="/">
                                                    Take Me Home
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
                    {/*=====ERROR AREA END=======*/}
                </>

                <Section2 />
            </Layout>
        </>
    );
}
