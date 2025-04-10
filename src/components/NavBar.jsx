import React, { useEffect } from "react";
import { downArrow, logo, logoWhite, logoWhite2, menuIcon, usFlag } from "../utils";


const NavBar = () => {
  useEffect(() => {

  })
  return (
    <div className="b">
      <div className="flex justify-between w-full items-center fixed gap-10 px-10 py-5 z-10">
        <img className="h-7 cursor-pointer opacity-60 px-5 transition hover:opacity-100" src={menuIcon} alt="" />
        <div className="flex gap-2 items-center">
          <img className="h-13" src={logo} alt="" />
          <span className="bold">JPC SERVICES</span>
        </div>
        <span className="flex items-center gap-2 cursor-pointer">
          <img className="h-4 transition hover:opacity-100 opacity-70" src={downArrow} alt="" />
          <img className="h-7" src={usFlag} alt="" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
