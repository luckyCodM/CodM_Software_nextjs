import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work1 sp overflow-hidden" id="work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-img reveal overlay-anim">
                                <img src="assets/img/work/work1-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 work1-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    What We Do
                                </span>
                                <h2 className="text-anime-style-3">Expand Without Limits with Staff Augmentation</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    CodM will help you to scale your team and improve performance with Salesforce-certified experts through staff augmentation service. 
                                    We can help you access the right talent tailored to the business need and cost-effective. 
                                </p>
                                <div className="space10" />
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="#">Sourcing the Best</Link>
                                            </h4>
                                            <p>Access to skilled and certified talent.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="#">Volume Hiring</Link>
                                            </h4>
                                            <p>Flexible and scalable team as per business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="#">Partners in Team Building</Link>
                                            </h4>
                                            <p>Cost-effective and effortless resource management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}
