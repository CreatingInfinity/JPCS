import React, { useEffect, useRef, useState } from "react";
import { downArrow, logo, menuIcon, searchIcon } from "../utils";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import gsap from "gsap";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef();
  const dropRef = useRef();


  const handleClick = (menu) => {
    if (menu === "services") {
      setIsClicked((prev) => {
        const next = !prev;
        gsap.to("#downArrow", {
          rotate: next ? 180 : 0,
          opacity: next ? 1 : 0.6,
          duration: 0.5,
        });
        return next;
      });
    }
  };

  useEffect(() => {
    if (isClicked) {
      gsap.fromTo(
        dropRef.current,
        { opacity: 0, top: isScrolled ? "60px" : "90px" },
        {
          opacity: 1,
          top: isScrolled ? "70px" : "100px",
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [isClicked, isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const tl = gsap.timeline();

      if (navRef.current) {
        if (scrollTop > 20) {
          setIsScrolled(true);
          tl.to(navRef.current, {
            height: "70px",
            duration: 0.4,
            ease: "power3.out",
          }).to(
            dropRef.current,
            {
              top: "70px",
              duration: 0.4,
            },
            "<"
          );
        } else {
          setIsScrolled(false);
          tl.to(navRef.current, {
            height: "100px",
            duration: 0.4,
            ease: "power3.out",
          }).to(
            dropRef.current,
            {
              delay: 0.5,
              top: "100px",
              duration: 0.4,
            },
            "<"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[100]">
      {/* Nav Container */}
      <div
        ref={navRef}
        className="flex justify-between w-full items-center shadow-md h-[100px] fixed gap-10 transparent px-5 sm:px-10 py-5 z-[100] transition-all duration-300 ease-in-out"
      >
        {/* Logo */}
        <div className="flex gap-2 items-center cursor-pointer">
          <img className="h-12 py-1" src={logo} alt="logo" />
          <span className="josefin font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">
            <span className="font-bold text-amber-600">JP</span>{" "}
            CONSULTING & SERVICES
          </span>
        </div>

        {/* Hamburger for small screens */}
        <div
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden flex-col gap-1 cursor-pointer"
        >
          <img className="h-10" src={menuIcon} alt="" />
        </div>

        {/* Nav Links Desktop */}
        <ul
          id="navLi"
          className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-7 josefin transition-all duration-300 ease-in-out"
        >
          <li>
            <Link to="/" reloadDocument>Home</Link>
          </li>
          <li>
            <Link to="/About" reloadDocument>About</Link>
          </li>
          <li
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleClick("services")}
          >
            Products
            <img id="downArrow" className="h-3 opacity-60" src={downArrow} alt="arrow" />
          </li>
          <li>
            <Link to="/Services" reloadDocument>Services</Link>
          </li>
          <li>
            <Link to="/Contact" reloadDocument>Contact Us</Link>
          </li>
        </ul>

        {/* Search - Desktop */}
        <div className="relative hidden sm:flex items-center flex-none">
          <img className="h-6 translate-x-7" src={searchIcon} alt="search" />
          <input
            className="border-gray-500 py-2 font-bold text-black border w-full rounded-full josefin px-7"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Dropdown */}
      {isClicked && (
        <div ref={dropRef} className="fixed w-full z-50">
          <DropDown />
        </div>
      )}

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="fixed top-[100px] z-40 w-full bg-white lg:hidden p-5 shadow-md">
          <ul className="flex flex-col gap-5 text-center josefin font-semibold">
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="/" reloadDocument>Home</Link>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="/About" reloadDocument>About</Link>
            </li>
            <li
              className="flex justify-center gap-1 items-center"
              onClick={() => handleClick("services")}
            >
              Products
              <img id="downArrow" className="h-3 opacity-60" src={downArrow} alt="arrow" />
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="/Services" reloadDocument>Services</Link>
            </li>
            <li onClick={() => setMobileMenuOpen(false)}>
              <Link to="/Contact" reloadDocument>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
