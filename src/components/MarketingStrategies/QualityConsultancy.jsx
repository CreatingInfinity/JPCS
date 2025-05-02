import React, { useEffect } from "react";
import { qusIconImage, quImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const QualityConsultancy = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    gsap.fromTo("#qualityIcon", { x: -200, opacity: 0 }, {
      scrollTrigger: {
        trigger: "#qualityIcon",
        start: "top center",
        end: "20% 30%",
        scrub: 1,
      },
      opacity: 1,
      duration: 1.5,
      x: 0,
    });

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
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background */}
      <img
        src={quImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">QUALITY CONSULTANCY</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">JP Consulting & Services</h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="qualityIcon"
              src={qusIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Quality Consultancy Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, our <span className="orange">Quality, Standardization, and Measuring</span> Consultancy
              empowers businesses to develop frameworks that ensure performance,
              compliance, and scalability. We help establish internal standards, define KPIs,
              and foster operational excellence that drives growth and customer satisfaction.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">BUILDING EXCELLENCE</span> FROM THE GROUND UP</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Driven by Quality. Defined by Standards.</span>
                We help businesses implement structured processes, build effective quality systems,
                and measure outcomes for continuous improvement.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR ROADMAP</span> TO OPERATIONAL EXCELLENCE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Systems, Tangible Results</span>
                We design quality and compliance systems that are custom-fit to your business—
                helping you grow with confidence and efficiency.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">UNDERSTAND</span> YOUR QUALITY CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Identifying Gaps. Elevating Performance.</span>
                We audit existing workflows to find inefficiencies, define KPIs, and ensure
                quality practices that support reliable scaling.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Offer</p>
                <ul className="list-disc list-inside">
                  <li>Quality management systems (QMS)</li>
                  <li>SOP and process design</li>
                  <li>Regulatory/ISO readiness</li>
                  <li>KPIs and performance analytics</li>
                  <li>Training and implementation</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">TRANSFORMING</span> QUALITY INTO ADVANTAGE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Smarter Systems. Lasting Results.</span>
                From reducing errors to building customer trust, our consulting ensures your business
                becomes synonymous with quality.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Better product/service consistency</li>
                  <li>Streamlined processes and reduced rework</li>
                  <li>Data-backed decisions with measurable KPIs</li>
                  <li>Stronger audit and certification readiness</li>
                  <li>Improved team alignment and onboarding</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to build a quality-first business culture?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityConsultancy;
