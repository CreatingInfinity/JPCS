import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import {
  businessImage,
  downArrow,
  employmentImage,
  heroVideo,
  heroVideo2,
  ITServiceImage,
  marketingImage,
} from "../utils";

const img = {
  businessImage,
  employmentImage,
  ITServiceImage,
  marketingImage,
};

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.to("#prim", {
      y: 10,
      duration: 1,
      ease: "bounce.in",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative overflow-hidden snap-y snap-mandatory">
      {/* Hero Section */}
      <div className="relative z-10 h-screen flex flex-col items-center snap-start justify-center text-white">
        <span className="text-6xl p-10 josefin text-cente font-bold">
          Empowering businesses, one solution at a time.
        </span>
        <div className="p-10 px-40 grid justify-items-center gap-10">
          <p className="text-center josefin text-xl font-medium">
            JP Consulting & Services, we believe in empowering businesses by
            offering tailored solutions that meet their unique challenges. With
            every project we undertake, we focus on delivering impact strategies
            that drive growth, efficiency, and success.
          </p>
          <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>

      {/* Background Video */}
      <video
        className="absolute z-0 h-screen w-full object-cover top-0 left-0"
        src={heroVideo2}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Products & Services Section */}
      <div className="h-full bg-black text-white pb-20 snap-start">
        <div className="flex w-full justify-center items-center">
          <p className="pt-40 text-5xl bold">OUR PRODUCTS & SERVICES</p>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          className="mt-10 "
        >
          <SwiperSlide>
            <span className="absolute top-20 bold text-6xl">Business Setup</span>
            <img
              src={businessImage}
              alt="Business"
              className="w-full h-110 opacity-70 cursor-pointer  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={employmentImage}
              alt="Employment"
              className="w-full h-110 opacity-70 cursor-pointer object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ITServiceImage}
              alt="IT Service"
              className="w-full h-110 opacity-70 cursor-pointer object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={marketingImage}
              alt="Marketing"
              className="w-full h-110 opacity-70 cursor-pointer object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-screen snap-start"></div>

      {/* Scroll Down Indicator */}
      <div
        id="prim"
        className="fixed grid justify-items-center opacity-40 text-gray-70 cursor-pointer0 text-xs poppins-semibold z-20 bottom-5 right-[47%]"
      >
        <span>SCROLL DOWN</span>
        <img className="h-10 invert" src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
