import React from "react";
import {
  alImage,
  cybImage,
  cyImage,
  itImage,
  seImage,
  soImage,
  syImage,
} from "../utils";
import { Link } from "react-router-dom";

const services = [
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
    image: cybImage,
    link: "CyberRisk",
  },
  {
    title: "CYBER SECURITY",
    description:
      "From threat monitoring to security strategies, we build trust and ensure your business is protected at every digital checkpoint.",
    image: cyImage,
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

const ServiceCard = ({ title, description, image, link }) => (
  <div className="bg-transparent backdrop-blur-xs shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/3 object-cover h-64 md:h-auto"
    />
    <div className="p-6 flex flex-col justify-center gap-4 md:w-2/3 text-center md:text-left">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <Link
        to={link}
        reloadDocument
        className="inline-block self-center md:self-start px-6 py-2 border border-black rounded-xl hover:bg-black hover:text-white transition"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const ITServices = () => {
  return (
    <div className="p-6 min-h-screen">
      <section className="text-center space-y-4 mb-12 max-w-4xl mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-josefin">
          IT Support & Troubleshooting
        </h1>
        <p className="text-lg text-gray-700 font-medium">
          We’re your behind-the-scenes tech superheroes — swiftly resolving
          issues, upgrading systems, and empowering your team with training.
          Experience a 30% drop in tech issues and a smoother workspace.
        </p>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold font-josefin">
          Here’s what we offer:
        </h2>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ITServices;
