import React, { useEffect } from "react";
import { persIconImage, perImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Personel = () => {
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
      "#persIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#persIcon",
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
        src={perImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Personnel Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">PERSONNEL</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">JP Consulting & Services</h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="persIcon"
              src={persIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Personnel Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, we support businesses by optimizing their personnel structure, improving team alignment, and implementing HR strategies that enhance efficiency and engagement. Our personnel consulting services help ensure you have the right people in the right roles — and the systems to support them.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">BUILDING YOUR TEAM</span>, STRENGTHENING YOUR BUSINESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">The Right People Make All the Difference</span>
                A business is only as strong as its people. We align talent with company goals, optimize roles, and ensure everyone contributes to growth.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">TAILORED</span> TALENT STRATEGIES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Built Around Your Business Needs</span>
                Whether you’re scaling or restructuring, we provide staffing solutions, training plans, and development roadmaps customized to your goals.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">UNDERSTANDING</span> YOUR TEAM CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">We Focus on What Matters Most</span>
                From inefficient hiring processes to high turnover, we target core issues that block team performance.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Ineffective recruitment strategies</li>
                  <li>High employee turnover</li>
                  <li>Misaligned team roles</li>
                  <li>Lack of HR processes</li>
                  <li>Skills gaps</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Comprehensive Personnel Solutions</span>
                We deliver people-first strategies backed by data, structure, and coaching to drive sustainable team growth.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Our Services</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Recruitment support</li>
                  <li>Organizational structuring</li>
                  <li>Policy & handbook creation</li>
                  <li>Performance management</li>
                  <li>Team alignment workshops</li>
                </ul>
              </div>
              <div className="text-left mx-auto max-w-md mt-6">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Stronger hiring decisions</li>
                  <li>Improved team cohesion</li>
                  <li>Clear HR documentation</li>
                  <li>Reduced turnover</li>
                  <li>Scalable growth</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to optimize your team?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personel;
