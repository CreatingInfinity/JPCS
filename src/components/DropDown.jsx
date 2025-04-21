import React, { useEffect } from "react";
import BusinessSetup from "./BusinessSetup";
import ITServices from "./ITServices";
import MarketingStrategies from "./MarketingStrategies";
import EmploymentServices from "./EmploymentServices";
import gsap from "gsap";

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
    <nav id="dropDownProduct" className="w-full fixed z-9 transparent shadow-sm select-none flex justify-between josefin">
      <BusinessSetup />
      <ITServices />
      <MarketingStrategies />
      <EmploymentServices />
    </nav>
  );
};

export default DropDown;
