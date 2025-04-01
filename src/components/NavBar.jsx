import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { chinaFlag, downArrow, franceFlag, uaeFlag, usFlag } from "../utils";
import DropDown from "./DropDown";
import logo from "../assets/C1.png";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenII, setIsDropdownOpenII] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { 
                setIsScrolled(true); 
            } else {
                setIsScrolled(false); 
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnterProduct = () => {
        setIsDropdownOpen(true);
        gsap.to("#dropDownIcon", { filter: "invert(1)", opacity: 1, duration: 0.1, rotation: 180 });
        gsap.to("#dropDown", { color: "white", duration: 0.2 });
    };

    const handleMouseLeaveProduct = () => {
        setIsDropdownOpen(false);
        gsap.to("#dropDown", { color: "lightgray", duration: 0.2, transition: "all 0.2s ease-in-out" });
        gsap.to("#dropDownIcon", { filter: "invert(1)", opacity: .6, duration: .1, rotation: 0 });
    };

    const handleMouseEnterII = () => {
        setIsDropdownOpenII(true);
        gsap.to("#dropDownII", { color: "white", duration: 0.2 });
        gsap.to("#dropDownIconII", { filter: "invert(0)", opacity: 1, duration: 0.2, rotation: 180 });
    };

    const handleMouseLeaveII = () => {
        setIsDropdownOpenII(false);
        gsap.to("#dropDownII", { color: "lightgray", duration: 0.2 });
        gsap.to("#dropDownIconII", { filter: "invert(1)", opacity: .5, duration: .5, rotation: 0 });
    };

    return (
        <div className="px-20 fixed w-full z-100 ">
            <nav className={`flex justify-between items-center border-b border-white ${isScrolled ? 'bg-black' : ''} max-w-screen-xl mx-auto`}>
                <div className="flex items-center space-x-20">
                    <img src={logo} alt="Logo" className="h-12 bg-white p-2 rounded-full" />
                    <ul id="dropMenu" className="flex space-x-10 text-xs">
                        <li>
                            <a href="#" className="text-hover">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-hover">
                                About
                            </a>
                        </li>

                        <li
                            className="relative"
                            onMouseEnter={handleMouseEnterProduct}
                            onMouseLeave={handleMouseLeaveProduct}
                        >
                            <a
                                href="#"
                                id="dropDown"
                                className="gap-2 flex items-center text-white py-8 px-5"
                            >
                                Product{" "}
                                <img
                                    id="dropDownIcon"
                                    className="w-3 h-3 opacity-80"
                                    src={downArrow}
                                    alt=""
                                />
                            </a>
                            {isDropdownOpen && <DropDown />}
                        </li>

                        <li>
                            <a href="#" className="text-hover">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-black bg-gold-400 py-3 px-8 button-color rounded-full shadow-lg shadow-yellow-500/100">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    onMouseEnter={handleMouseEnterII}
                    onMouseLeave={handleMouseLeaveII}
                >
                    <div id="dropDownII" className="py-7 px-5 text-gray-200 relative flex items-center space-x-4 cursor-pointer">
                        <img className="flag" src={uaeFlag} alt="" />
                        <p className="text-xs">English</p>
                        <img id="dropDownIconII" className="w-4" src={downArrow} alt="" />
                    </div>
                    {isDropdownOpenII &&
                            <div className="absolute top-10 right-10 bg-white grid items-center justify-around shadow-md mt-10.5 rounded-md">
                                <div className="py-5 px-10 text-sm hover:text-gray-700 cursor-pointer flex gap-4"><img className="flag" src={uaeFlag} alt="" />Arabic</div>
                                <div className="py-5 px-10 text-sm hover:text-gray-700 cursor-pointer flex gap-4"><img className="flag" src={usFlag} alt="" />English</div>
                                <div className="py-5 px-10 text-sm hover:text-gray-700 cursor-pointer flex gap-4"><img  className="flag" src={franceFlag} alt="" />French</div>
                                <div className="py-5 px-10 text-sm hover:text-gray-700 cursor-pointer flex gap-4"><img  className="flag" src={chinaFlag} alt="" />Chinese</div>
                            </div>
                        }
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
