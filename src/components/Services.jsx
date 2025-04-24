import gsap from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactUsFooter from "./ContactUsFooter";

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
    <div className="">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center josefin text-center px-6 fade-up">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          JP Consulting & Services
        </p>
        <p className="text-lg text-gray-600 max-w-xl">
          We offer a wide range of services tailored to help you succeed.
        </p>
      </section>

      {/* Transform Section */}
      <section className="h-screen flex flex-col items-center justify-center josefin text-center px-6 fade-up">
        <h2 className="text-4xl font-bold mb-6">Transform Your Business</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          We’re your trusted partner, delivering expertise across IT, business
          setup, marketing, and recruitment. Let’s grow your business with
          innovative solutions and hands-on support designed for real results.
        </p>
      </section>

      {/* Portfolio */}
      <section className="min-h-screen flex flex-col items-center text-center px-6 py-20 fade-up">
        <h2 className="text-4xl font-bold mb-12">Our Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {[
            {
              title: "Business Setup",
              link: "/Business",
            },
            {
              title: "IT Services",
              link: "/ITServices",
            },
            {
              title: "Marketing Strategies",
              link: "/MarketingStrategies",
            },
            {
              title: "Employment Services",
              link: "/EmploymentServices",
            },
          ].map(({ title, link }, idx) => (
            <Link
              key={idx}
              to={link}
              className="bg-white h-60 w-72 rounded-xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-gray-200 flex flex-col justify-center items-center"
            >
              <h3 className="text-2xl font-bold text-amber-600">{title}</h3>
              <p className="text-gray-600 mt-2 text-md">{title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
