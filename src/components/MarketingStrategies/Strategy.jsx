import React, { useEffect } from "react";
import { strsIconImage, strImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    gsap.fromTo("#strsIcon", { x: -200, opacity: 0 }, {
      scrollTrigger: {
        trigger: "#strsIcon",
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
        src={strImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">STRATEGY ADVISORY SERVICES</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">JP Consulting & Services</h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="strsIcon"
              src={strsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Strategy Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Our <span className="orange">Strategy Advisory Services</span> help businesses make smarter, future-focused decisions.
              We provide expert insights and customized strategies that align with your goals, mitigate risks,
              and unlock new growth opportunities. Whether you're a startup or an enterprise,
              we guide you through every decision with confidence and clarity.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">FORWARD-THINKING</span> STRATEGIES THAT DRIVE RESULTS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Insightful Guidance. Measurable Growth.</span>
                We help you navigate complexity, seize opportunities, and position your business for long-term success.
                Whether you're launching a venture, entering new markets, or reimagining operations, we're your strategic partner.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">CUSTOMIZED</span> FOR YOUR JOURNEY</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Every Strategy Starts with Understanding.</span>
                No two businesses are the same. We begin by learning your mission, market, and goals—then craft scalable strategies tailored to your needs.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">IDENTIFYING</span> GAPS, UNCOVERING OPPORTUNITIES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">We Help You See the Big Picture.</span>
                From analysis to optimization, we uncover inefficiencies and provide insights that drive confident, data-backed decisions.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Core Areas We Support:</p>
                <ul className="list-disc list-inside">
                  <li>Strategic Planning & Roadmapping</li>
                  <li>Business Model Innovation</li>
                  <li>Market Entry & Expansion</li>
                  <li>Organizational Alignment</li>
                  <li>Competitive Analysis</li>
                  <li>Risk Mitigation Strategies</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE</span> EMPOWER YOUR BUSINESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Practical, Future-Focused Advice.</span>
                📊 Data-Driven Analysis – Competitive advantages from insights<br />
                🧭 Strategic Clarity – Clear focus and direction<br />
                ⚙️ Operational Alignment – Strategy-backed structures<br />
                🚀 Execution Support – Turning vision into action
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits:</p>
                <ul className="list-disc list-inside">
                  <li>Clear, actionable strategic roadmap</li>
                  <li>Industry positioning and differentiation</li>
                  <li>Improved decisions with expert guidance</li>
                  <li>Agility and resilience in changing markets</li>
                  <li>Sustainable growth through focused planning</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Let’s build the strategy</span> to power your next move.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
