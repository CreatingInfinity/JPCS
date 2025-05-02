import React, { useEffect } from "react";
import { onsIconImage, onImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const OnLine = () => {
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
      "#onsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#onsIcon",
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
        src={onImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Online Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">ONLINE</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">JP Consulting & Services</h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="onsIcon"
              src={onsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Online Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Online Employment</span> at JP Consulting & Services streamlines the hiring and remote workforce management experience. From virtual assistants to specialized freelancers, we help you build lean, scalable, and performance-ready teams that meet your evolving business needs.
              <br /><br />
              This service is ideal for startups and SMEs looking to boost efficiency and flexibility while ensuring legal compliance and quality results.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">BRIDGING</span> OPPORTUNITIES IN THE DIGITAL AGE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Hire Smarter. Work Remotely. Grow Faster.</span>
                Our Online Employment service connects businesses with top-tier remote talent and supports entrepreneurs in building lean, scalable teams.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR TEAM</span>, WITHOUT BORDERS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Flexible Staffing for Modern Business Needs</span>
                Tap into a global talent pool — from admin support to digital marketing — all legally compliant and scalable.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">UNDERSTANDING</span> YOUR GOALS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Smart Hiring That Supports Growth</span>
                We guide you through sourcing, vetting, onboarding, and productivity tracking.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Handle</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Sourcing remote professionals</li>
                  <li>Setting up online platforms</li>
                  <li>Remote contracts and policies</li>
                  <li>Onboarding and payroll support</li>
                  <li>Legal compliance & security</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOU SCALE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Efficient, Agile Workforce Solutions</span>
                With our global reach, legal expertise, and performance tracking, we help you operate lean and grow smart.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside text-sm">
                  <li>Faster hiring</li>
                  <li>Lower HR costs</li>
                  <li>Scalable team growth</li>
                  <li>24/7 global support</li>
                  <li>Future-ready workforce</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to build your future-ready workforce?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnLine;
