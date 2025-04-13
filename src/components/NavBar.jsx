import React, { useEffect } from "react";
import {
  downArrow,
  logo,
  logoWhite,
  logoWhite2,
  menuIcon,
  searchIcon,
} from "../utils";

const NavBar = () => {
  useEffect(() => {});
  return (
    <div>
      <div className="flex justify-between w-full items-center bg-white fixed gap-10 px-10 py-5 z-100">
        <div
          className="flex gap-2 items-center px-2 py-1 w-full justify-between 
        rounded-full cursor-pointer text-black relative"
        >
          {/* Logo Section */}
          <div className="flex gap-2 items-center flex-none">
            <img className="h-13 py-1" src={logo} alt="" />
            <span className="josefin font-bold"><span className="font-bold text-lg text-amber-600">JP</span> CONSULTING & SERVICES</span>
          </div>

          {/* Navigation Links */}
          <ul id="navLi" className="absolute left-1/2 transform -translate-x-1/2 flex gap-7 josefin transition-all duration-300 ease-in-out">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>

          {/* Search Bar */}
          <div className="relative flex items-center flex-none">
            <img className="h-6 top translate-x-7" src={searchIcon} alt="" />
            <input
              className="border-gray-500 py-2 font-bold text-black border-1 w-full rounded-full josefin px-7"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
