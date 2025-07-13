import React from "react";
import { callIcon, emailIcon, locationImage, logo, qr } from "../utils";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin");
  }
  return (
    <div className="relative z-20 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row p-6 md:p-10 gap-10 md:gap-0">
        
        {/* Logo and Description */}
        <div className="flex-2 space-y-6 md:space-y-10">
          <div className="flex gap-2 items-center">
            <img className="h-10 md:h-12" src={logo} alt="logo" />
            <span className=" font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
              <span className="font-bold text-amber-600">JP</span> CONSULTING & SERVICES
            </span>
          </div>
          <p className="text-sm md:text-lg  font-light text-center md:text-left max-w-md">
            JP Consulting & Services is a dynamic consulting firm dedicated to
            helping businesses grow, adapt, and lead in an ever-evolving market.
            We specialize in delivering innovative, results-driven solutions
            tailored to meet the unique needs of each client — from startups to
            established enterprises.
          </p>
          <a onClick={handleAdmin} className="text-sm  font-medium cursor-pointer">Are you an Admin?</a>
        </div>

        {/* Quick Links */}
        <div className="flex-1  flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold">Quick Links</h1>
          <ul className="pt-4 space-y-2">
            <li><Link to="/" reloadDocument>Home</Link></li>
            <li><Link to="/About" reloadDocument>About</Link></li>
            <li><Link to="/Services" reloadDocument>Services</Link></li>
            <li><Link to="/Contact" reloadDocument>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1  flex flex-col space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold">Contact Us</h1>

          <div className="flex items-start gap-3">
            <img className="h-6 md:h-7" src={locationImage} alt="location" />
            <span className=" text-sm md:text-base">
              Sharjah Media City, Al Messaned, Al Bataeh, Sharjah, United Arab Emirates
            </span>
          </div>
          <div className="flex items-start gap-3">
            <img className="h-6 md:h-7" src={callIcon} alt="call" />
            <span className=" text-sm md:text-base">+971 50 846 8709</span>
          </div>
          <div className="flex items-start gap-3">
            <img className="h-6 md:h-7" src={emailIcon} alt="email" />
            <span className=" text-sm md:text-base">jpcs.uae@gmail.com</span>
          </div>

          <img className="h-16 w-16 md:h-20 md:w-20 pt-2 mt-5" src={qr} alt="QR code" />
        </div>
      </div>

      <p className="text-center text-xs md:text-base pb-4  font-semibold">
        Copyright © 2025, All Right Reserved JP CONSULTING & SERVICES
      </p>
    </div>
  );
};

export default Footer;
