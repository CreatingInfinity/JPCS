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
  heroVideo2,
  ITServiceImage,
  marketingImage,
} from "../utils";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    gsap.from(".fade-in", {
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="relative bg-black text-white">
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
      <div className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6 snap-start">
        <h1 className="text-6xl josefin font-bold leading-snug fade-in">
          Empowering businesses, <br /> one solution at a time.
        </h1>
        <p className="max-w-3xl mt-6 text-xl fade-in">
          At JP Consulting & Services, we provide tailored, high-impact solutions for business growth, efficiency, and innovation.
        </p>
        <Link
          to="/Contact"
          className="mt-8 bg-white text-black px-8 py-3 rounded-full font-bold josefin transition-all hover:bg-orange-500 hover:text-white fade-in"
        >
          Get in Touch
        </Link>
      </div>

      {/* Quick Stats Section */}
      <div className="flex justify-around items-center py-16 bg-black fade-in text-center">
        <div>
          <h2 className="text-4xl font-bold text-orange-400">100+</h2>
          <p className="text-lg">Clients Served</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-orange-400">50+</h2>
          <p className="text-lg">Custom Solutions</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-orange-400">10 Years</h2>
          <p className="text-lg">Industry Experience</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-24 pb-20 text-white snap-start">
        <h2 className="text-5xl text-orange-500 font-bold text-center fade-in">OUR PRODUCTS & SERVICES</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          className="mt-10 max-w-6xl mx-auto"
        >
          {[{
            title: "Business Setup",
            image: businessImage,
            link: "/Business"
          }, {
            title: "Employment & Recruitment Services",
            image: employmentImage,
            link: "/EmploymentServices"
          }, {
            title: "IT Services",
            image: ITServiceImage,
            link: "/ITServices"
          }, {
            title: "Marketing Strategies & Management",
            image: marketingImage,
            link: "/MarketingStrategies"
          }].map(({ title, image, link }, i) => (
            <SwiperSlide key={i}>
              <Link to={link} reloadDocument className="relative group block">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-96 object-cover opacity-70 group-hover:opacity-100 transition duration-300"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
                  {title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scroll Indicator */}
      <div
        id="prim"
        className="fixed z-20 bottom-5 left-1/2 transform -translate-x-1/2 opacity-40 text-xs text-gray-300 poppins-semibold grid justify-items-center"
      >
        <span>SCROLL DOWN</span>
        <img className="h-10 invert" src={downArrow} alt="Scroll Indicator" />
      </div>
    </div>
  );
};

export default Hero;
