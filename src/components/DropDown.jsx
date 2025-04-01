import React from "react";
import BusinessSetup from "./BusinessSetup";
import ITServices from "./ITServices";
import MarketingStrategies from "./MarketingStrategies";
import EmploymentServices from "./EmploymentServices";

const DropDown = () => {
    return (
        <div id="dropDownProduct" className="rounded-sm text-nowrap absolute top-10.5 -left-50 bg-white flex items-center justify-around shadow-md mt-10">
            <BusinessSetup />
            <ITServices />
            <MarketingStrategies />
            <EmploymentServices />
        </div>
    );
};

export default DropDown;
