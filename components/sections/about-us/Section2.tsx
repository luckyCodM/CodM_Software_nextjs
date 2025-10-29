import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====OUR MISSION AREA START=======*/}
            <div className="mission sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span"> Beyond Vision</span>
                                <h2>The Foundation of CodM</h2>
                                <div className="space16" />
                                <p> We are dedicated to delivering high-quality services and ensuring client satisfaction. We believe in innovation, integrity and collaboration that drives everything we do as we help businesses to unlock the full potential of Salesforce. </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Our Vision</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>At CodM, we believe in building lasting relationships and partnerships with our clients, where collaboration and trust drive innovation and deliver exceptional results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon2.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Our Mission</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Our mission is to deliver innovative Salesforce solutions that enhance efficiency, strengthen customer relationships and accelerate our clients’ business growth. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Our Goal</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Our goal is to make CodM a leading global name in Salesforce consulting and implementation through innovation, excellence and client-focused solutions. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====OUR MISSION AREA END=======*/}
        </>
    );
}
