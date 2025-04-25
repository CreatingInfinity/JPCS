import React from "react";
import { castImage, onImage, perImage } from "../utils";
import { Link } from "react-router-dom";

const services = [
  {
    title: "CASTING AGENCY",
    description:
      "Bring your vision to life with top-tier talent! Our casting experts match directors and producers with the perfect faces, voices, and personalities — fast, flawless, and fuss-free.",
    image: castImage,
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
    <div className="p-6 min-h-screen text-gray-800">
      <section className="text-center space-y-4 mb-12 max-w-4xl mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-josefin">
          <span className="text-orange-600">Employment</span> & Recruitment Services
        </h1>
        <p className="text-lg text-gray-700 font-medium">
          We connect ambition with opportunity. Whether you're a company seeking
          top-tier talent or a professional chasing your next big role, our
          recruitment solutions are designed to deliver fast, reliable, and
          impactful results matching the right people with the right roles,
          every time.
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
