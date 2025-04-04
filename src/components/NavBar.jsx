import React, { useState, useEffect } from "react";
import { logo, logoWhite, logoWhite2, menuIcon, searchIcon } from "../utils";
import gsap from "gsap";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = gsap.timeline();

      if (window.scrollY > 30) {
        setIsScrolled(true);
        timeline
          .to("#navParent", { height: "80px", duration: 0.3 }, 0)
          .to("#logo", { height: "50px", duration: 0.1 }, 0);
      } else {
        setIsScrolled(false);
        timeline
          .to("#navParent", { height: "120px", duration: 0.3 }, 0)
          .to("#logo", { height: "80px", duration: 0.5 }, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    const newMenuState = !isMenuClicked;
    setIsMenuClicked(newMenuState);

    gsap.to("#menuIcon", {
      rotation: newMenuState ? 180 : 0,
      duration: 0.3,
      filter: newMenuState ? "invert(0)" : "invert(1)",
    });

    gsap.to("#navMenu", {
      opacity: newMenuState ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
      display: newMenuState ? "block" : "none",
    });
  };

  return (
    <div className="flex h-30 justify-between items-center bg-transparent backdrop-blur-xl bg-gradient-to-r from-black via-[rgba(255, 255, 255, 0.5)] to-black px-10 text-white fixed w-full z-50" id="navParent">
      <img className="h-10 invert" src={menuIcon} alt="" />
      <img className="h-15" src={logoWhite2} alt="" />
      <img className="h-10 invert" src={searchIcon} alt="" />
    </div>
    
  );
};

export default NavBar;
