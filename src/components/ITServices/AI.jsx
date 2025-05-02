import React, { useEffect } from "react";
import { alsIconImage, alImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Al = () => {
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
      "#alsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#alsIcon",
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
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={alImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="A.I Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            A.I
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="alsIcon"
              src={alsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="A.I Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">A.I</span> is revolutionizing industries by driving efficiency, innovation, and transformation. At JP Consulting & Services, we help you harness the power of artificial intelligence to solve complex challenges and achieve long-term success.
              <br />
              <br />
              From streamlining operations to enhancing decision-making, AI opens new possibilities for growth.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">OUR PROMISE</span> TO YOU
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Transforming Your Business with AI-Powered Solutions
                </span>
                Our AI-driven strategies are designed to help you achieve measurable improvements by optimizing processes and decision-making.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR PATH</span> TO SUCCESS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Personalized AI Solutions</span>
                We create AI solutions tailored to your unique business challenges, driving efficiencies and enhancing innovation.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTAND</span> YOUR CHALLENGES
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">AI-Driven Insights</span>
                We focus on understanding your challenges to design AI solutions that solve problems and open opportunities.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">AI Solutions We Provide</p>
                <ul className="list-disc list-inside">
                  <li>Intelligent Automation</li>
                  <li>Predictive Analytics</li>
                  <li>AI-Enhanced Decision Making</li>
                  <li>Natural Language Processing</li>
                  <li>Machine Learning Integration</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Custom AI Solutions</span>
                We collaborate with you to create AI-powered strategies that streamline operations, enhance insights, and drive business growth.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Increased operational efficiency</li>
                  <li>Improved decision-making</li>
                  <li>Scalable AI solutions</li>
                  <li>Enhanced customer experience</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to transform your business with AI?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Al;
