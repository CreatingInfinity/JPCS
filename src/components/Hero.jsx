import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import {
  businessImage,
  downArrow,
  employmentImage,
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
    gsap.to("#ball", {
      scrollTrigger: {
        trigger: "#ball",
        start: "bottom bottom",
        end: "bottom top",
        markers: true,
        scrub: 1,
      },
      scale: 100,
      duration: 1, // Animation duration
      ease: "power1.inOut", // Smooth easing
    });
    gsap.to("#prim", {
      y: 10,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative top z-1 h-screen w-full bg-white py-30">
        <span className="bold text-6xl p-10">
          Empowering businesses, one solution at a time.
        </span>        
        <div
          id="ball"
          className="absolute -bottom-10 -right-10 z-5 bg-amber-400 h-10 w-10 rounded-full"
        ></div>
      </div>
      <div className="relative h-screen z-9 p-20">
        <span className="text-white bold text-5xl ">
          OUR PRODUCTS & SERVICES
        </span>
        <div>
          <div>
            <img className="imgWeb" src={ITServiceImage} alt="" />
          </div>
          <div>
            <img className="imgWeb" src={businessImage} alt="" />
          </div>
          <div>
            <img className="imgWeb" src={marketingImage} alt="" />
          </div>
          <div>
            <img className="imgWeb" src={employmentImage} alt="" />
          </div>
        </div>
      </div>
      <div className="h-screen"></div>

      <div
        id="prim"
        className="fixed grid justify-items-center opacity-40 text-xs poppins-semibold z-20 bottom-5 right-[50%]"
      >
        <span>SCROLL DOWN</span>
        <img className="h-10" src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
