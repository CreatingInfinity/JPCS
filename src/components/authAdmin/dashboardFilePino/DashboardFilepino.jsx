import React, { useState } from "react";
import SidebarFP from "./SidebarFilepino";
import InquiryFP from "./InquiryFilepino";
import LogFilePino from "./LogFilePino";
import ApprovedFP from "./ApprovedFilePino";

const DashboardFilepino = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="flex w-full h-screen p-4 gap-2 font-bold relative overflow-hidden">
      <div
        className="lg:hidden border-1 border-gray-800 bg-white p-2 rounded-full absolute top-4 right-2 z-50"
        onClick={toggleMenu}
      >
        <button className="relative w-8 h-8 flex flex-col justify-between items-center p-1 group">
          <span
            className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ease-in-out
              ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      <div className="hidden lg:flex">
        <SidebarFP />
      </div>

      {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 z-40 lg:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <SidebarFP />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto rounded space-y-4 z-0">
        <div id="inquiry" className="w-full min-h-screen rounded">
          <InquiryFP />
        </div>
        <div id="log" className="w-full min-h-screen rounded">
          <LogFilePino />
        </div>
        <div id="approved" className="w-full min-h-screen rounded">
          <ApprovedFP />
        </div>
      </div>
    </section>
  );
};

export default DashboardFilepino;
