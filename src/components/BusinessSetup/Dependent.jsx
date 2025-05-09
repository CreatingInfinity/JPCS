import React, { useEffect } from "react";
import { depsIconImage, depImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Dependent = () => {
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
      "#depsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#depsIcon",
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
        src={depImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DEPENDENT VISAS 
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
              src={depsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Dependent Visa</span> services are designed to help you reunite with your loved ones by simplifying the process of securing legal residency for spouses, children, and other eligible family members.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">BRINGING FAMILIES</span>TOGETHER</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                 Supportive Services, Seamless Processing
                </span>
              At JP Consulting & Services, we understand that family is everything. Our Dependent Visa service is designed to help individuals reunite with their loved ones by navigating the often complex immigration systems. Whether you're sponsoring a spouse, child, or parent, we provide expert guidance and full-service support through every step.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR PATH TO </span> FAMILY REUNIFICATION</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Personalized Assistance, Every Step of the Way</span>
                We take the time to understand your unique immigration situation, ensuring that all requirements are met, documentation is accurate, and timelines are optimized. Our team works to minimize delays and maximize your chances of approval.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">WE UNDERSTAND</span> YOUR CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Complex Rules Made Simple</span>
              Immigration policies vary by country and often change without notice. Our consultants stay ahead of regulatory shifts and offer tailored advice to ensure that you’re fully informed and prepared — from eligibility to submission.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Understanding eligibility criteria</li>
                  <li>Gathering and organizing required documents</li>
                  <li>Avoiding costly errors or omissions</li>
                  <li>Responding to visa queries or delays</li>
                  <li>Coordinating timelines between sponsors and dependents</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP YOUR</span> FAMILY STAY TOGETHER</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Comprehensive Dependent Visa Support</span>
                <li>Document Review & Preparation: Ensuring your application is error-free and complete</li>
                <li> Application Submission & Tracking: Full management of submission and follow-ups</li>
                <li>Ongoing Consultation: Support through interviews, biometric steps, or additional documentation</li>
                <li>Global Guidance: Assistance for visas across multiple countries and visa classes</li>
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Peace of mind knowing your application is professionally handled</li>
                  <li>Reduced risk of rejection due to technical errors or missing information</li>
                  <li>Faster, more efficient visa processing</li>
                  <li>Personalized support throughout your immigration journey</li>
                  <li>Reunification with your loved ones, without the stress</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Hassle</span> Free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dependent;
