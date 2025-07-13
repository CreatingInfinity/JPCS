import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  useEffect(() => {
    gsap.fromTo(
      "#mobileMenu",
      { y: -1, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, []);
  return (
    <div
      id="mobileMenu"
      className="fixed top-[100px] z-40 opacity-0 bg-white transition-all duration-300 w-full lg:hidden p-5 shadow-md"
    >
      <ul className="flex flex-col gap-5 text-center  font-semibold">
        <li onClick={() => setMobileMenuOpen(false)}>
          <Link to="/" reloadDocument>
            Home
          </Link>
        </li>
        <li onClick={() => setMobileMenuOpen(false)}>
          <Link to="/About" reloadDocument>
            About
          </Link>
        </li>
        <li onClick={() => setMobileMenuOpen(false)}>
          <Link to="/Services" reloadDocument>
            Services
          </Link>
        </li>
        <li onClick={() => setMobileMenuOpen(false)}>
          <Link to="/Contact" reloadDocument>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
