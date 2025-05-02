import React from "react";
import { Link } from "react-router-dom";

const ContactUsFooter = () => {
  return (
    <div className="h-auto bgSVG2 relative z-10 px-4 sm:px-6 py-8 md:py-12 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 select-none">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-amber-600">JP</span> Consulting & Services
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 md:mt-4 font-light josefin">
          Success is a journey, not a destination.
        </p>
      </div>

      {/* Content Box */}
      <div className="mx-auto w-full max-w-6xl bg-transparent backdrop-blur-sm bg-linear-to-r from-orange-400/70 to-orange-400/70 rounded-xl p-6 md:p-10 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-4 text-gray-800 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
            <p className="text-center md:text-justify">
              We work closely with businesses to understand their specific needs
              and challenges. Through personalized solutions, we help clients
              tackle complex issues and discover new opportunities for growth.
            </p>
            <p className="text-center md:text-justify">
              From streamlining operations to shaping long-term strategy, our
              aim is to enhance your business performance and ensure sustainable
              success. Together, we unlock your full potential.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col md:justify-center md:items-start items-center gap-4 w-full md:w-auto">
            <Link
              to="/Contact"
              className="px-6 py-2 border border-gray-800 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm bg-white text-black"
            >
              Contact Us
            </Link>
            <Link
              to="/About"
              className="px-6 py-2 border border-gray-800 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm bg-white text-black"
            >
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFooter;
