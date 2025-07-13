import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import {
  businessImage,
  castImage,
  setImage,
  marketingImage,
  downArrow,
  heroVideo2,
} from "../utils";
import WhyChooseUs from "./WhyChooseUs";
import Australia from "./Australia";

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

    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      if (!video) return;
      entry.isIntersecting ? video.play().catch(console.log) : video.pause();
    }, { threshold: 0.5 });

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src={heroVideo2}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/40 to-black/90 z-0" />

      {/* Hero Text */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center  text-center px-4 sm:px-8 md:px-16 snap-start">
        <h1 className="text-3xl sm:text-5xl md:text-6xl/14 font-bold leading-snug fade-in">
          Empowering businesses, <br /> one solution at a time.
        </h1>
        <p className="max-w-md sm:max-w-2xl mt-6 text-base sm:text-lg md:text-xl fade-in">
          At JP Consulting & Services, we provide tailored, high-impact solutions for business growth, efficiency, and innovation.
        </p>
        <Link
          to="/Contact"
          className="mt-8 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold  transition-all hover:bg-orange-500 hover:text-white fade-in"
        >
          Get in Touch
        </Link>
      </div>

      {/* Services Section */}
      <div className="pt-24 text-white bg-black snap-start">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={5}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          className="mt-10"
        >
          {[
            { title: "BUSINESS SETUP", image: businessImage, link: "/Business" },
            { title: "INNOVATION AND ARTIFICIAL INTELLIGENCE", image: castImage, link: "/ITServices" },
            { title: "EMPLOYMENT AND RECRUITMENT SERVICES", image: setImage, link: "/EmploymentServices" },
            { title: "AUSTRALIAN IMMIGRATION CONSULTANCY", image: marketingImage, link: "/Australia" }, 
          ].map(({ title, image, link }, i) => (
            <SwiperSlide key={i}>
              <Link to={link} reloadDocument className="relative group block">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 sm:h-80 md:h-140 object-cover group-hover:opacity-90 transition duration-300 opacity-40 rounded"
                />
                <span className="text-7xl font-bold left-15 z-99 absolute top-10 drop-shadow-lg">
                  {title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>  

      {/* Why Choose Us Section */}
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
          What Makes Us Different?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg sm:max-w-2xl">
          We are committed to delivering exceptional service and innovative solutions tailored to your unique needs.
        </p>
        <Link
          to="/About"
          reloadDocument
          className="mt-8 bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all hover:bg-orange-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
