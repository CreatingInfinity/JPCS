import React, { useEffect } from "react";
import BusinessSetup from "./BusinessSetup";
import ITServices from "./ITServices";
import MarketingStrategies from "./MarketingStrategies";
import EmploymentServices from "./EmploymentServices";
import gsap from "gsap";
import { Link } from "react-router-dom";

const DropDown = () => {
  useEffect(() => {
    gsap.fromTo(
      "#dropDownProduct",
      {
        y: -1,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  });
  return (
    <nav
      id="dropDownProduct"
      className="w-full fixed z-9 transparent shadow-sm select-none flex justify-between josefin"
    >
      <Link to="/Business" reloadDocument className="w-full">
        <div>
          <p>Business Setup</p>
        </div>
      </Link>
      <Link to="/ITServices" reloadDocument className="w-full">
        <div>
          <p>IT Services</p>
        </div>
      </Link>
      <Link to="/EmploymentServices" reloadDocument className="w-full">
        <div>
          <p>Employment Services</p>
        </div>
      </Link>
      <Link to="/MarketingStrategies" reloadDocument className="w-full">
        <div>
          <p>Marketing Strategies</p>
        </div>
      </Link>
    </nav>
  );
};

export default DropDown;
