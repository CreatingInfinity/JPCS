import React, { useEffect, useRef, useState } from "react";
import { downArrow, logo, menuIcon, searchIcon } from "../utils";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import gsap from "gsap";
import SearchBar from "./SearchBar";
import SearchBarMobile from "./SearchBarMobile";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef();
  const dropRef = useRef();

  const searchData = [
    { title: "CASTING AGENCY", link: "CastingAgency" },
    { title: "ONLINE EMPLOYMENT PLACEMENT AGENCIES", link: "OnLine" },
    { title: "PERSONNEL SEARCH", link: "Personel" },
    { title: "BLUEPRINTING", link: "Blueprinting" },
    { title: "DOCUMENT EDITING", link: "DocumentEditing" },
    { title: "DOCUMENT SETUP", link: "DocumentSetup" },
    { title: "DUPLICATING", link: "Duplicating" },
    { title: "PROVISION", link: "Provision" },
    { title: "SECRETARIAL SUPPORT", link: "SecretarialSupport" },
    { title: "TRANSCRIPTION", link: "Transcription" },
    { title: "TYPOGRAPHY", link: "Typography" },
    { title: "UNLIMITED VISA ALLOCATION", link: "UnlimitedVisa" },
    { title: "WIDE RANGE BUSINESS ACTIVITIES", link: "Wide" },
    { title: "CORPORATE BANKING SERVICES", link: "Corporate" },
    { title: "VIP MEDICAL AND EMIRATES ID", link: "Vip" },
    { title: "DEPENDENT VISAS", link: "Dependet" },
    { title: "AI", link: "Al" },
    { title: "CYBER RISK", link: "CyberRisk" },
    { title: "CYBER SECURITY", link: "CyberSecurity" },
    { title: "IT SECURITY", link: "ITSecurity" },
    { title: "SECURITY SYSTEM", link: "SecuritySystem" },
    { title: "SETTING UP", link: "SettingUp" },
    { title: "SOFTWARE INSTALLATION", link: "SoftwareInstall" },
    { title: "ADVICE", link: "Advice" },
    { title: "CARGO FREIGHT", link: "CargoFreight" },
    { title: "DESIGN OF ACCOUNTING METHODS", link: "Desing" },
    { title: "DIGITAL CONTENT", link: "DigitalContent" },
    { title: "HEALTH MANAGEMENT", link: "HealthManagement" },
    { title: "HOSPITALITY MANAGEMENT", link: "HospitalityConsultancy" },
    { title: "IMMIGRATION CONSULTANCY", link: "ImmigrationConsultancy" },
    { title: "LOBBYING ACTIVITIES", link: "Lobbying" },
    { title: "LOGISTIC CONSULTANCY", link: "Logistic" },
    { title: "MARKETING CONSULTANCY", link: "MarketingConsultancy" },
    { title: "PROCUREMENT CONSULTANCY", link: "ProcurementConsulting" },
    { title: "PROJECT MANAGEMENT", link: "ProjectManagement" },
    { title: "PUBLIC RELATION SERVICES", link: "PublicRelationManagement" },
    { title: "QUALITY CONSULTANCY", link: "QualityConsultancy" },
    { title: "STRATEGY ADVISORY SERVICES", link: "Strategy" }
  ];

  const handleClick = (menu) => {
    if (menu === "products") {
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

  const [menuOpen, setMenuOpen] = useState(false);

  const menuColor = () => {
    gsap.to(navRef.current, {
      backgroundColor: menuOpen ? "transparent" : "white",
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="navHead" className="relative z-[100]">
      {/* Nav Container */}
      <div
        ref={navRef}
        className="flex justify-between w-full items-center h-[100px] fixed gap-10 transparent px-5 sm:px-10 py-5 z-[100] transition-all duration-300 ease-in-out"
      >
        {/* Logo */}
        <Link to='/' reloadDocument className="flex gap-2 items-center cursor-pointer">
          <img className="h-12 py-1" src={logo} alt="logo" />
          <span className=" font-regular text-sm sm:text-base text-black md:text-lg whitespace-nowrap">
            <span className="font-regular text-orange-500">JP</span> CONSULTING & SERVICES
          </span>
        </Link>

        {/* Nav Links Desktop */}
        <ul
          id="navLi"
          className="hidden xl:flex absolute text-sm left-1/2 transform -translate-x-1/2 gap-7 font-light transition-all duration-300 ease-in-out"
        >
          <li>
            <Link to="/" reloadDocument>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" reloadDocument>
              About
            </Link>
          </li>
          <li
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleClick("products")}
          >
            Products
            <img
              id="downArrow"
              className="h-3 opacity-60"
              src={downArrow}
              alt="arrow"
            />
          </li>
          <li>
            <Link to="/Services" reloadDocument>
              Services
            </Link>
          </li>
          <li>
            <Link to="/Contact" reloadDocument>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Search - Desktop */}
        <SearchBar />

        {/* Hamburger for small screens */}
        <div
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            menuColor();
          }}
          className="xl:hidden flex flex-col gap-1 cursor-pointer"
        >
          <div className="relative">
            {/* Hamburger Icon */}
            <button 
              onClick={toggleMenu}
              className="xl:hidden relative w-8 h-8 flex flex-col justify-between items-center p-2 group"
            >
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
        </div>
      </div>

      {/* Dropdown */}
      {isClicked && (
        <div ref={dropRef} className="fixed w-full z-50">
          <DropDown />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={dropRef} className="fixed top-16 md:top-20 left-0 right-0 bg-white z-40">
          <ul className="flex flex-col gap-6 px-10 py-5 text-gray-800">
            <li className="flex md:hidden">
              <SearchBarMobile />
            </li>
            <li>
              <Link to="/" reloadDocument>Home</Link>
            </li>
            <li>
              <Link to="/About" reloadDocument>About</Link>
            </li>
            <li>
              <Link to="/Services" reloadDocument>Services</Link>
            </li>
            <li>
              <Link to="/Contact" reloadDocument>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
