import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
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
import { Link } from "react-router-dom";

const img = {
  businessImage,
  employmentImage,
  ITServiceImage,
  marketingImage,
};

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.to("#prim", {
      y: 10,
      duration: 1,
      ease: "bounce.in",
      repeat: -1,
      yoyo: true,
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((e) => console.log("Video play error:", e));
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // trigger when 50% visible
      }
    );
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden snap-y snap-mandatory">
      {/* Hero Section */}
      <div className="relative select-none z-10 h-screen flex flex-col items-center snap-start justify-center text-white">
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
          <button className="bg-white text-black px-10 py-2 rounded-full josefin font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}        className="absolute z-0 h-screen w-full object-cover top-0 left-0"
        src={heroVideo2}
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Products & Services Section */}
      <div className="h-full bg-black text-white pb-20 snap-start">
        <div className="flex w-full justify-center items-center">
          <p className="pt-40 text-5xl text-orange-500 bold select-none">
            OUR PRODUCTS & SERVICES
          </p>
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
            <Link to="/Business" reloadDocument>
              <span className="absolute top-20 bold text-6xl">
                Business Setup
              </span>
              <img
                src={businessImage}
                alt="Business"
                className="w-full h-110 opacity-70 cursor-pointer  object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/EmploymentServices" reloadDocument>
              <span className="absolute top-20 bold text-6xl">
                Employment & Recruitment Services
              </span>
              <img
                src={employmentImage}
                alt="Employment"
                className="w-full h-110 opacity-70 cursor-pointer object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/ITServices" reloadDocument>
              <span className="absolute top-20 bold text-6xl">IT Services</span>
              <img
                src={ITServiceImage}
                alt="IT Service"
                className="w-full h-110 opacity-70 cursor-pointer object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/MarketingStrategies" reloadDocument>
              <span className="absolute top-20 bold text-6xl">
                Marketing Strategies & Management
              </span>
              <img
                src={marketingImage}
                alt="Marketing"
                className="w-full h-110 opacity-70 cursor-pointer object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-screen"></div>

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
