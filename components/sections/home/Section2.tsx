// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Link from "next/link";
// import "swiper/css";
// import "swiper/css/autoplay";

// const swiperOptions = {
//     modules: [Autoplay],
//     slidesPerView: 1,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoints: {
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         576: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 4,
//             spaceBetween: 25,
//         },
//         992: {
//             slidesPerView: 4,
//             spaceBetween: 25,
//         },
//         1200: {
//             slidesPerView: 5,
//             spaceBetween: 30,
//         },
//         1400: {
//             slidesPerView: 6,
//             spaceBetween: 30,
//         },
//         1600: {
//             slidesPerView: 7,
//             spaceBetween: 30,
//         },
//         1800: {
//             slidesPerView: 8,
//             spaceBetween: 30,
//         },
//          2000: {
//             slidesPerView: 9,
//             spaceBetween: 30,
//         },
//     },
// };

// export default function Section2({ backgroundColor }: { backgroundColor: string }) {
//     return (
//         <>
//             {/*=====HERO SLIDER AREA END=======*/}
//             <hr />
//             <div className={`hero1-slider ${!backgroundColor ? "" : backgroundColor}`}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <Swiper {...swiperOptions}>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo1.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo2.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo3.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo4.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo5.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo6.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo7.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo8.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo9.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo10.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo1.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo2.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo3.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo4.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo5.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo6.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo7.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo8.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo9.png" alt="recrute" />
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                     <img src="assets/img/logo/slider-logo10.png" alt="recrute" />
//                                 </SwiperSlide>

//                             </Swiper>
//                         </div>
//                     </div>
                   
//                 </div>
                 
//             </div>
//             <hr/>
//             {/*=====HERO SLIDER AREA END=======*/}
//         </>
//     );
// }



"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
};

export default function Section8() {
    return (
        <>
            {/*=====LOGO SLIDER AREA START=======*/}
            <hr/>
            <div className="logo-slider-area sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="slider-pera">
                            <p> More Than 5K+ Brands With Work CodM Software</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-all">
                                <Swiper {...swiperOptions} modules={[Autoplay, Navigation]} autoplay={{ delay: 5000, disableOnInteraction: false }} centeredSlides={true} className="logo-slider3">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo1.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo2.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo3.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo4.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo5.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo6.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo7.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo8.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo9.png" alt="" />
                                    </SwiperSlide><SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider-logo10.png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                                {/* <Swiper {...swiperOptions} className="logo-slider4">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo8.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo7.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo6.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo5.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo4.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo3.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo2.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo1.png" alt="" />
                                    </SwiperSlide>
                                </Swiper> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {/*=====LOGO SLIDER AREA END=======*/}
        </>
    );
}

