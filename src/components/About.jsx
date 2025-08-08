import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-28 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About JP Consulting & Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          High-Performance IT & Infrastructure to Power Your Business!
        </p>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-orange-600">About Us</h2>
          <p className="mb-4 text-lg">
            At JP Consulting and Services LLC (JPCS), we deliver
            high-performance solutions across five key areas:
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <strong>IT & Infrastructure</strong> – From ELV systems to
              cybersecurity, we build secure, scalable tech foundations.
            </li>
            <li>
              <strong>Software Applications</strong> – Custom software that
              enhances efficiency and drives business growth.
            </li>
            <li>
              <strong>Digital Marketing</strong> – Results-driven strategies to
              grow your online presence and engagement.
            </li>
            <li>
              <strong>Business Setup & Employment</strong> – Hassle-free company
              formation and talent support in the UAE.
            </li>
            <li>
              <strong>Australia Immigration Consultancy</strong> – Expert
              guidance for individuals and families pursuing opportunities
              abroad.
            </li>
          </ul>
          <p className="mt-6 text-lg italic text-orange-600 font-semibold">
            Performance. Innovation. Results.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div></div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-600">
              Who We Are
            </h2>
            <p className="mb-4 text-lg">
              We are a tight-knit team of industry professionals with diverse
              expertise across business, technology, and strategy. Every member
              of our team shares a common goal — to create lasting impact
              through smart, actionable consulting.
            </p>
            <p className="mb-6 text-lg">
              Whether you’re aiming to optimize internal systems, enhance
              cybersecurity, or plan your next digital transformation, we
              partner with you at every step — with clarity, creativity, and
              purpose.
            </p>
            <blockquote className="border-l-4 border-orange-600 pl-4 italic text-lg font-semibold">
              “Success is built on great partnerships and thoughtful solutions.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="h-screen flex justify-screen items-center">
        <section className="mx-auto text-center">
          <h3 className="text-3xl font-bold text-orange-600 mb-6">
            What Drives Us
          </h3>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Collaboration. Innovation. Integrity. These aren't just buzzwords —
            they're the values that guide everything we do. Let’s build
            something remarkable together.
          </p>
          <Link
            to="/Contact"
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300"
          >
            Let’s Talk
          </Link>
        </section>
      </section>
    </div>
  );
};

export default About;
