import gsap from "gsap";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactUsFooter from "./ContactUsFooter";
import { businessImage, employmentImage, itImage, marketingImage } from "../utils";

const Services = () => {
  useEffect(() => {
    // gsap.from(".fade-up", {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out",
    //   stagger: 0.2,
    // });
  }, []);


  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          <span className="text-orange-600">JP</span> Consulting & Services
        </p>
        <p className="text-base md:text-lg text-gray-600 font-medium max-w-xl">
          We offer a wide range of services tailored to help you succeed.
        </p>
      </section>

      {/* Transform Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          We’re your trusted partner, delivering expertise across IT, business setup, marketing, and recruitment.
          Let’s grow your business with innovative solutions and hands-on support designed for real results.
        </p>
      </section>

      {/* Portfolio */}
      <section className="min-h-screen flex flex-col items-center text-center px-4 md:px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {[
            {
              title: "Business Set Up",
              image: businessImage,
              link: "/Business",
              textTitle: "End-to-End Business Setup",
              text: "We guided a client through company registration, financial forecasting, and strategic planning—setting them up for long-term success."
            },
            {
              title: "IT Services",
              image: itImage,
              link: "/ITServices",
              textTitle: "IT Support & Troubleshooting",
              text: "We provided ongoing tech support, upgraded systems, and delivered training—reducing tech issues by 30% for a mid-size business."
            },
            {
              title: "Marketing Strategies",
              image: marketingImage,
              link: "/MarketingStrategies",
              textTitle: "Digital Marketing & Online Presence",
              text: "From SEO to PPC and social media, we help businesses grow online by boosting their digital visibility and engagement."
            },
            {
              title: "Employment & Recruitment Services",
              image: employmentImage,
              link: "/EmploymentServices",
              textTitle: "Recruitment & Talent Acquisition",
              text: "We sourced skilled developers for a tech startup, helping them scale efficiently with the right talent fit."
            },
          ].map(({ title, image, link, textTitle, text }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-left"
            >
              <h3 className="text-lg md:text-xl font-bold text-orange-600 mb-3">{title}</h3>
              <img
                className="w-full h-48 md:h-56 object-cover rounded"
                src={image}
                alt={title}
              />
              <p className="text-gray-700 mt-4 font-semibold text-md">{textTitle}</p>
              <p className="text-gray-600 mt-2 text-sm">{text}</p>
              <Link
                to={link}
                reloadDocument
                className="cursor-pointer mt-6 bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
