import React from "react";
import {
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
import { Link } from "react-router-dom";

const services = [
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

const MarketingStrategies = () => {
  return (
    <div className="p-6 min-h-screen">
      <section className="text-center space-y-4 mb-12 max-w-4xl mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-josefin">
          Marketing Strategies & Management
        </h1>
        <p className="text-lg text-gray-700 font-medium">
        We create customized plans that align with your business goals, leveraging digital marketing, content creation, SEO, and more to attract and engage your target audience effectively.
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

export default MarketingStrategies;
