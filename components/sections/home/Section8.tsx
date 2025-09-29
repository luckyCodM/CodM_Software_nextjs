"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
};

export default function Section8({ classList }: any) {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className={`tes1 sp overflow-hidden ${classList}`}>

                 <div className="tes9 sp overflow-hidden" id="tes" style={{ backgroundColor: "#eacdc7" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1">
                                <span className="span" data-aos="fade-right" data-aos-duration={900}>
                                     Client Testimonials
                                </span>
                                <h2 className="text-anime-style-3">Voices of Our Clients</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tes7-buttons" data-aos="fade-right" data-aos-duration={900}>
                                <button className="testimonial-prev-arrow1">
                                    <i className="fa-regular fa-arrow-left" />
                                </button>
                                <button className="testimonial-next-arrow1">
                                    <i className="fa-regular fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tes6-all-slider" data-aos="fade-up" data-aos-duration={800}>
                                <Swiper {...swiperOptions} className="tes6-slider">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        
                                        <p>“At Recrute, we pride ourselves on the positive impact we make for our clients and candidates. But don’t just take our word for it-hear from those who have experienced our staffing solutions.”</p>

                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Tina Wilkinson</Link>
                                                <p className="text">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        
                                        <p>"Success stories from our clients and candidates are at the heart of what we do. Our testimonials provide insight to into how Recrute has helped your own businesses find top talent individuals.”</p>
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alex Ferguson</Link>
                                                <p className="text">CEO, Ranboz Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        
                                        <p>"Our success is best told through the experiences of those we've had the on privilege to work with. At Recrute best Company Name], our testimonials are a collection of real-life success stories.”</p>
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alzari Joseph</Link>
                                                <p className="text">CEO, BIGS Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                        
                                        <p>“At Recrute, we pride ourselves on the positive impact we make for our clients and candidates. But don’t just take our word for it-hear from those who have experienced our staffing solutions.”</p>
                                        <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img1.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Tina Wilkinson</Link>
                                                <p className="text">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                       
                                        <p>"Success stories from our clients and candidates are at the heart of what we do. Our testimonials provide insight to into how Recrute has helped your own businesses find top talent individuals.”</p>
                                         <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img2.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alex Ferguson</Link>
                                                <p className="text">CEO, Ranboz Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/icons/qute9.png" alt="" className="qute" />
                                      
                                        <p>"Our success is best told through the experiences of those we've had the on privilege to work with. At Recrute best Company Name], our testimonials are a collection of real-life success stories.”</p>
                                         <div className="stars">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes6-img3.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <Link href="#">Alzari Joseph</Link>
                                                <p className="text">CEO, BIGS Ltd</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

             
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}






