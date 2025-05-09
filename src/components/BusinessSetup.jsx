import React from "react";
import {
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
  viImage,
  vipImage,
  corImage,
  wideImage,
  depImage,
} from "../utils";
import { Link } from "react-router-dom";

const services = [
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
  {
    title: "UNLIMITED VISA ALLOCATION",
    description:
      "This allocation model removes barriers commonly associated with restricted visa quotas, enabling businesses to scale their workforce efficiently and compliantly.",
    image: viImage,
    link: "UnlimitedVisa",
  },
  {
    title: "WIDE RANGE BUSINESS ACTIVITIES",
    description:
      "We offer a comprehensive portfolio of business solutions designed to meet the diverse needs of our clients across various industries.",
    image: wideImage,
    link: "Wide",
  },
  {
    title: "CORPORATE BANKING SERVICES",
    description:
      "We offer specialized Corporate Banking Services designed to support the financial operations and growth strategies of businesses of all sizes.",
    image: corImage,
    link: "Corporate",
  },
  {
    title: "VIP MEDICAL AND EMIRATES ID",
    description:
      "We provide fast-track VIP Medical and Emirates ID services to ensure a smooth and efficient immigration process for professionals, investors, and their families.",
    image: vipImage,
    link: "Vip",
  },
   {
    title: "DEPENDENT VISAS",
    description:
      "We offer comprehensive Dependent Visa Services to help individuals reunite with their families while living and working abroad.",
    image: depImage,
    link: "Dependent",
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

const BusinessSetup = () => {
  return (
    <div className="p-6 min-h-screen text-gray-800">
      <section className="text-center space-y-4 mb-12 max-w-4xl mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-josefin">
          <span className="text-orange-600">Business</span> Setup
        </h1>
        <p className="text-lg text-gray-700 font-medium">
        From choosing the right structure to handling registrations and legal requirements, we guide you every step of the way so you can launch with confidence and focus on growth..
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

export default BusinessSetup;
