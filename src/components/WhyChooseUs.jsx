// src/components/WhyChooseUs.jsx
import React from "react";

const reasons = [
  {
    title: "Expertise Across Multiple Industries",
    text: "With years of experience in Public Relations, Business Setup, IT Services, Marketing, and Recruitment, we bring in-depth knowledge to every project, ensuring that we meet your specific needs.",
  },
  {
    title: "Proven Track Record",
    text: "Our clients trust us because we deliver results. We have a strong history of helping businesses streamline operations, enhance their brand presence, and grow sustainably.",
  },
  {
    title: "Collaborative Approach",
    text: "We believe in working as a partner, not just a service provider. Our team becomes an extension of your business, committed to supporting you at every step of your journey.",
  },
  {
    title: "Customized Solutions",
    text: "We understand that every business is unique. That’s why we work closely with you to craft solutions that align with your goals and challenges, helping you achieve long-term success.",
  },
  {
    title: "Comprehensive Services",
    text: "From business setup to recruitment and IT support, we offer a full range of services to support your business at every stage, saving you time and resources by providing everything you need under one roof.",
  },
  {
    title: "Commitment to Innovation",
    text: "We are always on the pulse of the latest industry trends and technologies, ensuring that our solutions are both innovative and effective in driving your business forward.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bgSVG py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Why Choose <span className="text-orange-500">JP Consulting & Services</span>?
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        At JP Consulting & Services, we are dedicated to helping businesses succeed through tailored, results-driven solutions. Here’s why you should choose us:
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {reasons.map(({ title, text }, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">{title}</h3>
            <p className="text-gray-700">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-lg text-gray-800 max-w-3xl mx-auto">
        Choose <span className="font-bold text-orange-500">JP Consulting & Services</span> for a trusted partner that is as invested in your success as you are. Let us help you turn challenges into opportunities and achieve your business goals with confidence.
      </p>
    </section>
  );
};

export default WhyChooseUs;
