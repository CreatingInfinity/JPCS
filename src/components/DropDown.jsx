import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  onImage,
  castImage,
  perImage,
  downArrow,
} from "../utils";
// Import images if needed

const employment = [
  {
    title: "CASTING AGENCY",
    description:
      "Bring your vision to life with top-tier talent! Our casting experts match directors and producers with the perfect faces, voices, and personalities — fast, flawless, and fuss-free.",
    image: castImage, // replace with actual imported images
    link: "CastingAgency",
  },
  {
    title: "ONLINE EMPLOYMENT PLACEMENT AGENCIES",
    description:
      "Streamline hiring with precision matchmaking. We connect employers with qualified professionals through cutting-edge digital platforms designed for speed and success.",
    image: onImage,
    link: "OnLine",
  },
  {
    title: "PERSONNEL SEARCH",
    description:
      "Find the right people, right now. Our global network and expert recruiters zero in on high-potential candidates to fill your roles with confidence and speed.",
    image: perImage,
    link: "Personel",
  },
];

const business = [
  {
    title : "UNLIMITED VISA ALLOCATION",
    link: "Personel",
  },
  {
    title : "VIP MEDICAL AND EMIRATES ID",
    link: "Personel",
  },
  {
    title : "STRATEGY ADVISORY SERVICES",
    link: "Personel",
  },
  {
    title : "MARKETING CONSULTANCY",
    link: "Personel",
  },
  {
    title : "BUSINESS LICENCE",
    link: "Personel",
  },
  {
    title : "HEALTH MANAGEMENT",
    link: "Personel",
  },
  {
    title : "HOSPITALITY MANAGEMENT",
    link: "Personel",
  },
];

const itservices = [
  {
    title: "IT & INFRASTRUCTURE SERVICES",
  },
  {
    title: "APPLICATION DEVELOPMENT",
  },
  {
    title: "DIGITAL MARKETING",
  },
];

const australia = [
  {
    title: "ADMINISTRATIVE APPEALS TRIBUNAL",
    link: "SoftwareInstall",
  },
  {
    title: "BUSINESS/INVESTOR VISA",
    link: "SoftwareInstall",
  },
  {
    title: "STUDENT VISA",
    link: "SoftwareInstall",
  },
  {
    title: "SKILLED VISA",
    link: "SoftwareInstall",
  },
  {
    title: "GSM 189/190/491 VISA",
    link: "SoftwareInstall",
  },
  {
    title: "PARTNER VISA",
    link: "SoftwareInstall",
  },
  {
    title: "VISITOR VISA",
    link: "SoftwareInstall",
  },
  {
    title: "SKILLS ASSESSMENT",
    link: "SoftwareInstall",
  },
  {
    title: "OTHER VISAS",
    link: "SoftwareInstall",
  },
];

const DropDown = () => {
  const [hovered, setHovered] = useState(false);
  const [bHovered, setBHovered] = useState(false);
  const [ITHovered, setITHovered] = useState(false);
  const [mHovered, setMHovered] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      "#dropDownProduct",
      { y: -1, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <nav
      id="dropDownProduct"
      className="w-full fixed z-9 transparent shadow-sm relative select-none flex justify-between "
    >
      <div
        className="relative w-full p-4"
        onMouseEnter={() => setBHovered(true)}
        onMouseLeave={() => setBHovered(false)}
      >
        <Link to="/Business" reloadDocument className="w-full">
          <p>Business Setup</p>
        </Link>
        {/* Submenu appears when hovered */}
        {bHovered && (
          <section className="absolute top-full left-0 w-full h-120 overflow-y-scroll bg-white shadow-lg p-4 flex flex-col space-y-4 z-20">
            {business.map((item, index) => (
              <Link
                key={index}
                to={`/Business/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                {/* <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-15 bg-black mx-1 rounded-xs"
                /> */}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>

      <div
        className="relative w-full p-4"
        onMouseEnter={() => setITHovered(true)}
        onMouseLeave={() => setITHovered(false)}
      >
        <Link to="/ITServices" reloadDocument className="w-full">
          <p>Innovation and Artificial Intelligence</p>
        </Link>
        {/* Submenu appears when hovered */}
        
        {ITHovered && (
          <section className="absolute top-full left-0 w-full h-auto overflow-y-scroll bg-white shadow-lg flex flex-col space-y-4 z-20">
            {itservices.map((item, index) => (
              <Link
                key={index}
                to={`/ITServices/${item.link}`}
                className="flex items-center relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <div className="relative flex items-center gap-2">
                  <h3 className="flex-6 font-semibold ">{item.title}</h3>
                  <img className="flex-1 h-4 justify-self-end" src={downArrow} alt="" />
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>

      <div
        className="relative w-full p-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to="/EmploymentServices" reloadDocument>
          <p>Employment & Recruitment Services</p>
        </Link>

        {/* Submenu appears when hovered */}
        {hovered && (
          <section className="absolute top-full left-0 w-full h-auto overflow-y-scroll bg-white shadow-lg p-4 flex flex-col space-y-4 z-20">
            {employment.map((item, index) => (
              <Link
                key={index}
                to={`/EmploymentServices/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>

      <div
        className="relative w-full p-4"
        onMouseEnter={() => setMHovered(true)}
        onMouseLeave={() => setMHovered(false)}
      >
        <Link to="/Australia" reloadDocument className="w-full">
          <p>Australian Immigration Consultancy</p>
        </Link>

        {/* Submenu appears when hovered */}
        {mHovered && (
          <section className="absolute top-full left-0 w-full h-120 overflow-y-scroll bg-white shadow-lg p-4 flex flex-col space-y-4 z-20">
            {australia.map((item, index) => (
              <Link
                key={index}
                to={`/MarketingStrategies/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </nav>
  );
};

export default DropDown;
