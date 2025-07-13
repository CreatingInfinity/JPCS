import React from "react";
import ContactUsFooter from "./ContactUsFooter";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="">
      {/* Section 1: Company Overview */}
      <section className="min-h-screen pt-60 px-6 space-y-10  flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800">
          About{" "}
          <span className="text-orange-600">JP Consulting & Services</span>
        </h1>
        <p className="max-w-3xl text-lg font-semibold text-gray-600 leading-relaxed">
          At JP Consulting & Services, we don't just solve problems — we turn
          them into growth opportunities. With a passion for innovation and a
          commitment to excellence, we help businesses unlock their full
          potential.
        </p>
        <p className="max-w-3xl text-lg text-gray-600 font-semibold leading-relaxed">
          From startups to industry leaders, our expert consultants craft custom
          strategies that drive performance, boost efficiency, and make
          technology work smarter — for everyone.
        </p>
      </section>

      {/* Section 2: Who We Are */}
      <section className="min-h-screen px-6 pt-40 space-y-10  flex flex-col items-center text-center animate-slide-up">
        <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        <p className="max-w-3xl text-lg font-semibold text-gray-600 leading-relaxed">
          We are a tight-knit team of industry professionals with diverse
          expertise across business, technology, and strategy. Every member of
          our team shares a common goal — to create lasting impact through
          smart, actionable consulting.
        </p>
        <p className="max-w-3xl text-lg font-semibold text-gray-600 leading-relaxed">
          Whether you’re aiming to optimize internal systems, enhance
          cybersecurity, or plan your next digital transformation, we partner
          with you at every step — with clarity, creativity, and purpose.
        </p>

        {/* Highlight Quote */}
        <div className="bg-white shadow-md rounded-xl p-6 mt-4 max-w-xl border-l-4 border-orange-600">
          <p className="italic text-gray-800 text-lg font-semibold">
            “Success is built on great partnerships and thoughtful solutions.”
          </p>
        </div>
      </section>

      {/* Optional Call to Action */}
      <section className="bg-orange-600 text-white py-20 flex flex-col items-center space-y-6 text-center">
        <h3 className="text-3xl font-semibold">What Drives Us</h3>
        <p className="max-w-2xl text-lg">
          Collaboration. Innovation. Integrity. These aren't just buzzwords —
          they're the values that guide everything we do. Let’s build something
          remarkable together.
        </p>
        <Link to="/Contact" className="mt-4 px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300">
          Let’s Talk
        </Link>
      </section>
    </div>
  );
};

export default About;
