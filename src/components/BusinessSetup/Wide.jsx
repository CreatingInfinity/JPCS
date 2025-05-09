import React, { useEffect } from "react";
import { widesIconImage, wideImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Wide = () => {
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
      "#widesIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#widesIcon",
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
        src={wideImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            WIDE RANGE OF BUSINESS ACTIVITIES
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG  text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="blueprintIcon"
              src={widesIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">At JP Consulting & Services, </span> we understand that businesses don’t operate in silos. Growth and efficiency require a holistic approach that covers every aspect of your operations. That’s why we offer strategic support across a wide range of business activities—designed to empower startups, SMEs, and corporations alike.
              
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">OUR PROMISE</span> TO YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                 Comprehensive Support for Diverse Business Needs
                </span>
                At JP Consulting & Services, we deliver tailored, results-driven solutions across a wide spectrum of business activities. Whether you're launching a startup, scaling an enterprise, or optimizing daily operations, our team offers end-to-end support to ensure every area of your business thrives.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR PATH</span> TO SUCCESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Multi-Faceted Expertise, Personalized for You</span>
                We take time to understand your industry, objectives, and challenges — then design strategic solutions unique to your goals. From operations and HR to finance, branding, and digital transformation, we cover it all under one roof.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">UNDERSTAND</span> YOUR CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Your Complexity Is Our Specialization</span>
               Every business faces evolving challenges — changing markets, operational bottlenecks, talent gaps, or digital inefficiencies. Our wide-ranging consulting services are structured to resolve these challenges effectively and sustainably.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">BUSINESS AREAS WE SUPPORT</p>
                <ul className="list-disc list-inside">
                  <li>Business Planning & Strategy</li>
                  <li>Operations & Process Optimization</li>
                  <li>Financial Consulting</li>
                  <li>Human Resources & Compliance</li>
                  <li>Sales & Marketing Enablement</li>
                  <li>Technology Integration</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW</h3>
              <p className="text-base md:text-lg font-josefin">
                <li>Identify growth opportunities across departments</li>
                <li>Align business activities with strategic goals</li>
                <li>Implement tools and systems that scale efficiently</li>
                <li>Deliver expert guidance across multiple operational areas</li>
                <li>Enable confident decision-making with accurate insights</li>
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>A fully supported and well-rounded business structure</li>
                  <li>Increased efficiency and measurable growth</li>
                  <li>Stronger branding and market visibility</li>
                  <li>Streamlined operations and reduced overhead</li>
                  <li>A trusted partner that evolves with your business</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to map your journey to success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wide;
