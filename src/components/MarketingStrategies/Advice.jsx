import React, { useEffect } from "react";
import { adsIconImage, adImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Advice = () => {
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

    gsap.fromTo(
      "#adsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#adsIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    const sections = ["section1", "section2", "section3", "section4"];
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
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={adImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Advice Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            ADVICE
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="adsIcon"
              src={adsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Advice Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, we provide strategic planning advice
              tailored to both private businesses and public service
              organizations. Our goal is to help leaders make informed, confident
              decisions that align with long-term objectives, operational
              capabilities, and evolving environments.
              <br />
              <br />
              We support your planning process by offering insights grounded in
              industry knowledge, data analysis, and real-world experience.
              Whether you're developing a new business model, improving public
              service delivery, or preparing for organizational change, our
              advisory services ensure your plans are structured, realistic, and
              results-driven.
              <br />
              <br />
              By identifying key challenges, clarifying goals, and aligning
              stakeholders, we help you turn vision into action — with a roadmap
              that’s both practical and sustainable.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">BUILDING FOUNDATIONS</span> FOR LONG-TERM SUCCESS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Insightful Guidance, Informed Decisions
                </span>
                At JP Consulting & Services, we provide expert advice to support
                businesses and public service organizations in their planning
                processes. Whether you're launching a new initiative, undergoing a
                transition, or setting long-term goals, we help you plan with
                clarity, precision, and purpose.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR PLAN</span>, YOUR FUTURE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Planning Support</span>
                No two organizations are the same — and your strategy shouldn't
                be either. We collaborate closely with you to understand your
                mission, assess challenges, and identify opportunities. Our advice
                is grounded in practical experience and designed to empower
                confident, well-informed decision-making.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTAND</span> YOUR ENVIRONMENT
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Navigating Complexity with Confidence
                </span>
                From evolving regulations to shifting market dynamics, planning
                can be overwhelming. We break down complexity into actionable
                steps, helping you stay ahead of change and aligned with your
                objectives.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">How We Support Your Planning Process</p>
                <ul className="list-disc list-inside">
                  <li>Business Model & Market Analysis</li>
                  <li>Operational & Capacity Planning</li>
                  <li>Strategic Goal-Setting</li>
                  <li>Risk Identification & Mitigation</li>
                  <li>Stakeholder Alignment & Communication</li>
                  <li>Policy and Public Service Frameworks</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR BENEFITS</span>
              </h3>
              <div className="text-left mx-auto max-w-md">
                <ul className="list-disc list-inside">
                  <li>Clear, actionable plans aligned with your goals</li>
                  <li>Confident decision-making rooted in data and experience</li>
                  <li>Risk reduction through strategic foresight</li>
                  <li>Increased organizational efficiency and readiness</li>
                  <li>Stronger alignment across teams, departments, or agencies</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to turn your vision into action?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;
