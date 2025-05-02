import React, { useEffect } from "react";
import { typosIconImage, typoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Typography = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        "h1",
        { x: 200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 },
        1
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 },
        1
      );

    const sections = ["typosIcon", "section1", "section2", "section3", "section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        `#${id}`,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: `#${id}`,
            start: `${-80 + index * 20}% center`,
            end: "center 30%",
          },
          opacity: 1,
          duration: 1.5,
          y: 0,
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={typoImage}
        className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0"
        alt="Typography Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            TYPOGRAPHY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Intro Section */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="typosIcon"
              src={typosIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Typography Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, our typography is more than just design—
              it’s a reflection of our professionalism, clarity, and commitment.
              Every element communicates authority, trust, and precision.
            </p>
          </div>

          {/* Section 1 */}
          <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="orange">DESIGNED FOR</span> BUSINESS COMMUNICATION
            </h3>
            <p className="text-base md:text-lg font-josefin">
              <span className="font-bold block">Works as Hard as You Do</span>
              Our clean, business-ready fonts ensure clarity in every message—from
              proposals to digital content.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="orange">TAILORED</span> FOR BUSINESS CONTENT
            </h3>
            <p className="text-base md:text-lg font-josefin">
              <span className="font-bold block">Enhances Strategic Messaging</span>
              Our style supports complex topics by organizing content into clean,
              digestible sections—keeping audiences engaged and informed.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="orange">STRUCTURED</span> FOR IMPACT
            </h3>
            <p className="text-base md:text-lg font-josefin">
              <span className="font-bold block">
                A Clear Hierarchy That Guides Every Reader
              </span>
              We design with structure—headings, spacing, and formatting that
              boost readability.
            </p>
            <div className="text-left mx-auto max-w-md">
              <p className="font-bold text-center mb-2">What We Focus On</p>
              <ul className="list-disc list-inside">
                <li>Headings: Bold, uppercase, impactful</li>
                <li>Subheadings: Title case for readability</li>
                <li>Body Text: Neutral, spaced for comfort</li>
                <li>Bullets: Clean formatting for scanning</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="orange">YOUR BRAND</span> DESERVES STRATEGIC DESIGN
            </h3>
            <p className="text-base md:text-lg font-josefin">
              <span className="font-bold block">Let Us Work for You</span>
              Typography that’s clear, consistent, and powerful—backed by business strategy.
            </p>
            <div className="text-left mx-auto max-w-md">
              <p className="font-bold text-center mb-2">Your Benefits</p>
              <ul className="list-disc list-inside">
                <li>Improved readability & clarity</li>
                <li>Consistent brand image</li>
                <li>Enhanced professionalism</li>
                <li>Stronger visual hierarchy</li>
                <li>Better audience engagement</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to let your words speak boldly?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
