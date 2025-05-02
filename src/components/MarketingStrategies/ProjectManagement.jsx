import React, { useEffect } from "react";
import { projsIconImage, projImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectManagement = () => {
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
      "#projsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#projsIcon",
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
      {/* Background */}
      <img
        src={projImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Project Management Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PROJECT MANAGEMENT SERVICES
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="projsIcon"
              src={projsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Project Management Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Project Management</span> at JP Consulting & Services ensures your initiatives are expertly guided from inception to completion. We integrate planning, coordination, execution, and monitoring into a seamless process that keeps your goals on track and your team aligned.
              <br />
              <br />
              Strategic execution requires more than just good ideas—it requires structured delivery, proactive oversight, and accountability at every step.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">TURNING PLANS</span> INTO RESULTS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Structured Execution, Seamless Delivery
                </span>
                We bring clarity and momentum to every stage of your project, helping you implement new systems, launch services, or expand operations with focus and precision.
              </p>
            </section>

            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">BUILT AROUND</span> YOUR VISION
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Project Planning</span>
                Every project is unique. That’s why we design a project roadmap aligned to your specific objectives, budget, and timeline—with adaptability and results in mind.
              </p>
            </section>

            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTAND</span> THE OBSTACLES
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Proactive Management</span>
                We eliminate delays and bottlenecks before they happen through agile planning, real-time monitoring, and cross-functional collaboration.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Manage</p>
                <ul className="list-disc list-inside">
                  <li>Business Setup & Launch Projects</li>
                  <li>Operational Expansions</li>
                  <li>Technology Implementations</li>
                  <li>Marketing Campaign Rollouts</li>
                  <li>Strategic Planning Initiatives</li>
                  <li>Cross-Functional Team Coordination</li>
                </ul>
              </div>
            </section>

            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE DRIVE</span> SUCCESS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">End-to-End Support</span>
                From scoping to execution, we manage everything—aligning teams, resolving risks, and ensuring your project exceeds expectations.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>On-time, on-budget delivery</li>
                  <li>Clear ownership and accountability</li>
                  <li>Improved collaboration and communication</li>
                  <li>Faster decision-making</li>
                  <li>Strategic growth outcomes</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to manage smarter and deliver stronger?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
