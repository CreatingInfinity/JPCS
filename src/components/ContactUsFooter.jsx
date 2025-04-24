import React from "react";
import { Link } from "react-router-dom";

const ContactUsFooter = () => {
  return (
    <div className="min-h-screen relative z-20 px-6 py-20 bg-gray-200 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="text-amber-600">JP</span> Consulting & Services
        </h2>
        <p className="text-2xl text-gray-600 mt-4 font-light josefin">
          Success is a journey, not a destination.
        </p>
      </div>

      {/* Content Box */}
      <div className="mx-auto max-w-5xl bg-transparent backdrop-blur-sm bg-linear-to-r from-orange-400/70 to-orange-400/70 rounded-xl p-10 shadow-lg">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-4 text-gray-800 text-lg font-medium josefin leading-relaxed">
            <p className="text-center md:text-justify">
              We work closely with businesses to understand their specific needs
              and challenges. Through personalized solutions, we help clients
              tackle complex issues and discover new opportunities for growth.
            </p>
            <p className="text-center md:text-justify">
              From streamlining operations to shaping long-term strategy, our aim
              is to enhance your business performance and ensure sustainable
              success. Together, we unlock your full potential.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex flex-col md:justify-center md:items-start items-center gap-5 w-full josefin font-semibold md:w-auto">
            <Link
              to="/Contact"
              className="px-7 py-2 border border-gray-400 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 text-base bg-white text-black"
            >
              Contact Us
            </Link>
            <Link
              to="/About"
              className="px-7 py-2 border border-gray-400 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300 text-base bg-white text-black"
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
