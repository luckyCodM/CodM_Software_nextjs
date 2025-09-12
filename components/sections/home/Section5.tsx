"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section5() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/*=====PROJECT AREA START=======*/}
              <div className="work8 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                     DEVELOPMENT LIFE CYCLE 
                                </span>
                                <h2 className="text-anime-style-3">How it works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row _relative">
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon3.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Define Requirements</Link>
                                    </h4>
                                    <p>The applicant review process is vital step in ensuring that only.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow1.png" alt="" className="shape1" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon4.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Planning</Link>
                                    </h4>
                                    <p>Job analysis is a critical process understanding defining specific.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow2.png" alt="" className="shape2" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon5.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Development</Link>
                                    </h4>
                                    <p>Job Place Check is an essential component our best Recrute. </p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon3.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Testing</Link>
                                    </h4>
                                    <p>The applicant review process is vital step in ensuring that only.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow1.png" alt="" className="shape1" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon4.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Designing & Software Development</Link>
                                    </h4>
                                    <p>Job analysis is a critical process understanding defining specific.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow2.png" alt="" className="shape2" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon5.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Operations & maintenance </Link>
                                    </h4>
                                    <p>Job Place Check is an essential component our best Recrute. </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            {/*=====PROJECT AREA END=======*/}
        </>
    );
}
