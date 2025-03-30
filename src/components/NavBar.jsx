import gsap from "gsap";
import React, { useState } from "react";
import { chinaFlag, downArrow, franceFlag, uaeFlag, usFlag } from "../utils";
import DropDown from "./DropDown";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenII, setIsDropdownOpenII] = useState(false);

    const handleMouseEnterProduct = () => {
        setIsDropdownOpen(true);
        gsap.to("#dropDownIcon", { opacity: 0.5, duration: 0.2, rotation: 180 });
    };

    const handleMouseLeaveProduct = () => {
        setIsDropdownOpen(false);
        gsap.to("#dropDownIcon", { opacity: 1, duration: .5, rotation: 0 });
    };

    const handleMouseEnterII = () => {
        setIsDropdownOpenII(true);
        gsap.to("#dropDownIconII", { opacity: 0.5, duration: 0.2, rotation: 180 });
    };

    const handleMouseLeaveII = () => {
        setIsDropdownOpenII(false);
        gsap.to("#dropDownIconII", { opacity: 1, duration: .5, rotation: 0 });
    };

    return (
        <div className="px-10 fixed w-full">
            <nav className="flex justify-between items-center border-b border-black">
                <div className="flex items-center space-x-20">
                    <div className="text-black text-lg font-bold">LOGO</div>
                    <ul id="dropMenu" className="flex space-x-10 text-sm">
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
                                className="text-hover gap-2 flex items-center"
                            >
                                Product{" "}
                                <img
                                    id="dropDownIcon"
                                    className="w-3 h-3"
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
                            <a href="#" className="text-hover">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    onMouseEnter={handleMouseEnterII}
                    onMouseLeave={handleMouseLeaveII}
                >
                    <div className="relative flex items-center space-x-4 cursor-pointer">
                        <img className="flag" src={uaeFlag} alt="" />
                        <p className="text-hover">English</p>
                        <img id="dropDownIconII" className="w-4" src={downArrow} alt="" />
                    </div>
                    {isDropdownOpenII &&
                            <div className="absolute top-10 right-10 bg-white grid items-center justify-around shadow-md mt-10.5">
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
