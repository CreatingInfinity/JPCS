import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  onImage,
  castImage,
  perImage,
  blueprintingImage,
  documenteImage,
  setImage,
  dupImage,
  photoImage,
  proImage,
  reImage,
  secImage,
  tranImage,
  typoImage,
  alImage,
  cybImage,
  itImage,
  syImage,
  seImage,
  soImage,
  cyImage,
  adImage,
  carImage,
  deImage,
  diImage,
  heImage,
  hoImage,
  imImage,
  loImage,
  logImage,
  marImage,
  procImage,
  projImage,
  pubImage,
  quImage,
  strImage,
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
    title: "BLUEPRINTING",
    description:
      " Helps you map out your business processes, goals, and systems. We work with you to create a clear, step-by-step plan that sets the foundation for success and smooth operations.",
    image: blueprintingImage,
    link: "Blueprinting",
  },
  {
    title: "DOCUMENT EDITING",
    description:
      "We provide professional document editing to ensure your content is clear, accurate, and polished. Whether it's reports, proposals, or business documents, we help you present your ideas with confidence.",
    image: documenteImage,
    link: "DocumentEditing",
  },
  {
    title: "DOCUMENT SETUP",
    description:
      "Helps you create well-structured, professional documents from the start. We format, organize, and design your files to meet your specific business needs and branding.",
    image: setImage,
    link: "DocumentSetup",
  },
  {
    title: "DUPLICATING",
    description:
      "We offer fast and reliable duplicating services for all your business documents. Whether you need copies for meetings, records, or distribution, we ensure high-quality results every time.",
    image: dupImage,
    link: "Duplicating",
  },
  {
    title: "PHOTOCOPYING",
    description:
      "We provides clear, high-quality copies for all your documents. Whether it's black & white or color, single or bulk copies, we’ve got you covered with fast and efficient service.",
    image: photoImage,
    link: "Photocopying",
  },
  {
    title: "PROVISION",
    description:
      "We supply businesses with the essential tools, resources, and services they need to operate smoothly. From office supplies to administrative support, JP Consulting & Services ensures you're always well-equipped",
    image: proImage,
    link: "Provision",
  },
  {
    title: "RESUME",
    description:
      "We help you create a professional, polished resume that highlights your strengths and stands out to employers. Whether you're starting fresh or updating your CV, we make sure it reflects your skills and goals.",
    image: reImage,
    link: "Resume",
  },
  {
    title: "SECRETARIAL SUPPORT",
    description:
      "We offers reliable assistance with day-to-day administrative tasks. From managing correspondence to scheduling and document handling, we help keep your business organized and running smoothly.",
    image: secImage,
    link: "SecretarialSupport",
  },
  {
    title: "TRANSCRIPTION",
    description:
      "Our Transcription service converts audio and video recordings into accurate, well-organized written documents. Whether it’s meetings, interviews, or conferences, we provide clear and precise transcripts to meet your needs.",
    image: tranImage,
    link: "Transcription",
  },
  {
    title: "TYPOGRAPHY",
    description:
      "We focus on creating visually appealing and effective text designs. From font selection to layout optimization, we ensure your message is presented in a way that enhances readability and impact.",
    image: typoImage,
    link: "Typography",
  },
];

const itservices = [
  {
    title: "AI",
    description:
      "Step into the future with AI-powered innovation! We help transform complex data into intelligent decisions, boosting efficiency and growth.",
    image: alImage,
    link: "Al",
  },
  {
    title: "CYBER RISK",
    description:
      "We proactively assess vulnerabilities, strengthen policies, and support compliance — creating a digitally secure foundation for growth.",
    image: cyImage,
    link: "CyberRisk",
  },
  {
    title: "CYBER SECURITY",
    description:
      "From threat monitoring to security strategies, we build trust and ensure your business is protected at every digital checkpoint.",
    image: cybImage,
    link: "CyberSecurity",
  },
  {
    title: "IT SECURITY",
    description:
      "Defend your business from malware, hacks, and breaches with advanced IT security solutions tailored to your needs.",
    image: itImage,
    link: "ITSecurity",
  },
  {
    title: "SECURITY SYSTEM",
    description:
      "Go beyond alarms — our smart surveillance and access systems keep your space secure, proactive, and intelligent.",
    image: syImage,
    link: "SecuritySystem",
  },
  {
    title: "SETTING UP",
    description:
      "We handle system installations and upgrades with precision — delivering seamless, secure, and efficient setups from day one.",
    image: seImage,
    link: "SettingUp",
  },
  {
    title: "SOFTWARE INSTALLATION",
    description:
      "Get the right tools running, optimized, and secured for your team's productivity. We handle everything from simple to complex installs.",
    image: soImage,
    link: "SoftwareInstall",
  },
];

const marketing = [
  {
    title: "ADVICE",
    description:
      "At JP Consulting & Services, we provide expert advice to support businesses and public service organizations in their planning processes. Whether you're launching a new initiative, undergoing a transition, or setting long-term goals, we help you plan with clarity, precision, and purpose.",
    image: adImage,
    link: "Advice",
  },
  {
    title: "CARGO FREIGHT",
    description:
      "We offer reliable and efficient cargo freight services, ensuring your goods are transported securely and on time. Whether by air, sea, or land, we handle all logistics to get your cargo to its destination smoothly and safely.",
    image: carImage,
    link: "CargoFreight",
  },
  {
    title: "DESIGN OF ACCOUNTING METHODS",
    description:
      "we offer expert design and implementation of accounting systems tailored to your business needs. Our service focuses on developing efficient accounting methods, robust cost accounting programs, and reliable budgetary control procedures to help you manage financial operations with confidence and clarity. ",
    image: deImage,
    link: "Desing",
  },
  {
    title: "DIGITAL CONTENT",
    description:
      "We create engaging and high-quality digital content tailored to your audience. From blogs and social media posts to videos and graphics, we help you build a strong online presence and effectively communicate your brand message.",
    image: diImage,
    link: "DigitalContent",
  },
  {
    title: "HEALTH MANAGEMENT",
    description:
      "We offer comprehensive solutions for improving health, managing wellness programs, and ensuring effective healthcare practices for a healthier, more productive environment.",
    image: heImage,
    link: "HealthManagement",
  },
  {
    title: "HOSPITALITY MANAGEMENT",
    description:
      "We provide expert Hospitality Management services to enhance guest experiences and streamline operations. From hotel and restaurant management to event coordination, we help businesses in the hospitality industry deliver exceptional service and optimize their performance.",
    image: hoImage,
    link: "HospitalityConsultancy",
  },
  {
    title: "IMMIGRATION CONSULTANCY",
    description:
      "We help individuals and businesses navigate the complexities of immigration law, ensuring a smooth and efficient process for relocation or expansion.",
    image: imImage,
    link: "ImmigrationConsultancy",
  },
  {
    title: "LOBBYING ACTIVITIES",
    description:
      "We work strategically to influence decisions, regulations, and legislation that impact your industry, ensuring your voice is heard.",
    image: loImage,
    link: "Lobbying",
  },
  {
    title: "LOGISTIC CONSULTANCY",
    description:
      "We provide expert advice on transportation, inventory management, and distribution, ensuring that your business moves goods effectively and cost-efficiently.",
    image: logImage,
    link: "Logistic",
  },
  {
    title: "MARKETING CONSULTANCY",
    description:
      "We provide expert advice on transportation, inventory management, and distribution, ensuring that your business moves goods effectively and cost-efficiently.",
    image: marImage,
    link: "MarketingConsultancy",
  },
  {
    title: "PROCUREMENT CONSULTANCY",
    description:
      "We offer expert advice on sourcing, negotiation, and cost management to ensure you get the best value while maintaining quality and efficiency.",
    image: procImage,
    link: "ProcurementConsulting",
  },
  {
    title: "PROJECT MANAGEMENT",
    description:
      "We provide expert planning, coordination, and execution across all phases, helping you achieve your business objectives with efficiency and precision.",
    image: projImage,
    link: "ProjectManagement",
  },
  {
    title: "PUBLIC RELATION SERVICES",
    description:
      "We manage media relations, craft compelling stories, and create effective communication strategies to enhance your reputation and strengthen relationships with your target audience.",
    image: pubImage,
    link: "PublicRelationManagement",
  },
  {
    title: "QUALITY CONSULTANCY",
    description:
      "We provide expert advice on quality management systems, compliance, and continuous improvement strategies to enhance efficiency and customer satisfaction.",
    image: quImage,
    link: "QualityConsultancy",
  },
  {
    title: "STRATEGY ADVISORY SERVICES",
    description:
      "We work with you to identify growth opportunities, optimize operations, and navigate challenges, ensuring your business is positioned for long-term success.",
    image: strImage,
    link: "Strategy",
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
      className="w-full fixed z-9 transparent shadow-sm relative select-none flex justify-between josefin"
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-15 bg-black mx-1 rounded-xs"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
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
          <p>IT Services</p>
        </Link>
        {/* Submenu appears when hovered */}
        {ITHovered && (
          <section className="absolute top-full left-0 w-full h-120 overflow-y-scroll bg-white shadow-lg p-4 flex flex-col space-y-4 z-20">
            {itservices.map((item, index) => (
              <Link
                key={index}
                to={`/ITServices/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-15 bg-black mx-1 rounded-xs"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
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
          <p>Employment Services</p>
        </Link>

        {/* Submenu appears when hovered */}
        {hovered && (
          <section className="absolute top-full left-0 w-full h-120 overflow-y-scroll bg-white shadow-lg p-4 flex flex-col space-y-4 z-20">
            {employment.map((item, index) => (
              <Link
                key={index}
                to={`/EmploymentServices/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-15 bg-black mx-1 rounded-xs"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
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
        <Link to="/MarketingStrategies" reloadDocument className="w-full">
          <p>Marketing Strategies</p>
        </Link>

        {/* Submenu appears when hovered */}
        {mHovered && (
          <section className="absolute top-full left-0 w-full h-120 overflow-y-scroll bg-amber-100 shadow-lg p-4 flex flex-col space-y-4 z-20">
            {marketing.map((item, index) => (
              <Link
                key={index}
                to={`/MarketingStrategies/${item.link}`}
                className="flex items-start relative hover:bg-white rounded transition-all"
                reloadDocument
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-15 bg-black mx-1 rounded-xs"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
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
