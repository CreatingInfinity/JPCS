import React from "react";
import { callIcon, emailIcon, locationImage, logo, qr } from "../utils";

const Footer = () => {
  return (
    <div className="relative z-20 bg-white text-gray-800">
      <div className="flex p-10">
        <div className="flex-2 space-y-10">
          <div className="flex gap-2 items-center">
            <img className="h-12 py-1" src={logo} alt="logo" />
            <span className="josefin font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
              <span className="font-bold text-amber-600">JP</span> CONSULTING &
              SERVICES
            </span>
          </div>
          <p className="w-170 josefin text-lg font-medium">
            JP Consulting & Services is a dynamic consulting firm dedicated to
            helping businesses grow, adapt, and lead in an ever-evolving market.
            We specialize in delivering innovative, results-driven solutions
            tailored to meet the unique needs of each client — from startups to
            established enterprises.
          </p>
        </div>
        <div className="flex-1 josefin flex flex-col ml-15">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <ul id="liFooter" className="pt-5">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="josefin flex-1 flex flex-col">
          <p className="text-2xl font-bold">Contact Us</p>

          <div className="flex pt-2 gap-3">
            <img className="h-7" src={locationImage} alt="" />
            <span className="font-semibold">
              Sharjah Media City, Al Messaned, Al Bataeh, Sharjah, United Arab
              Emritates
            </span>
          </div>
          <div className="flex pt-2 gap-3">
            <img className="h-7" src={callIcon} alt="" />
            <span className="font-semibold">+971 50 846 8709</span>
          </div>
          <div className="flex pt-2 gap-3">
            <img className="h-7" src={emailIcon} alt="" />
            <span className="font-semibold">jpcs.uae@gmail.com</span>
          </div>
          <img className="h-20 w-20 pt-2 mt-5" src={qr} alt="" />
        </div>
      </div>
      <p className="text-center pb-4 josefin font-semibold">Copyright © 2025, All Right Reserved JP CONSULTING & SERVICES</p>
    </div>
  );
};

export default Footer;
