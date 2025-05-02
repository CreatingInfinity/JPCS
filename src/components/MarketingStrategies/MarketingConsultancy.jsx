import React, { useEffect } from "react";
import { marsIconImage, marImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MarketingConsultancy = () => {
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
      "#marsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#marsIcon",
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
        src={marImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Marketing Consultancy Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            MARKETING CONSULTANCY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="marsIcon"
              src={marsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Marketing Consultancy Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, our Marketing, Public Relations, and Communication Consultancy empowers businesses to tell their stories with clarity, creativity, and confidence. We specialize in developing tailored communication strategies that build strong brand identities, strengthen stakeholder relationships, and amplify your voice across all channels.
              <br />
              <br />
              From strategic marketing campaigns and brand messaging to media outreach and internal communications, we help you connect with your audience in meaningful and impactful ways. Whether you're launching a product, managing your reputation, or shaping your market presence — we provide the insights, planning, and execution to make your message resonate.
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
                <span className="orange">SHAPING BRANDS, BUILDING CONNECTIONS</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                Our consulting approach guarantees measurable improvements, whether you're optimizing your workflow, launching a new venture, or scaling your current business.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR PATH</span> TO SUCCESS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                We develop solutions specifically for your business—tailored to your goals, challenges, and market dynamics.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTAND</span> YOUR CHALLENGES
              </h3>
              <p className="text-base md:text-lg font-josefin">
                Whether it’s streamlining workflows, tech integration, or long-term visioning, we help identify root problems and unlock opportunities.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Streamlining complex business processes</li>
                  <li>Expanding your market reach</li>
                  <li>Integrating innovative technologies</li>
                  <li>Reducing overhead and inefficiencies</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW
              </h3>
              <p className="text-base md:text-lg font-josefin">
                From developing winning strategies to integrating modern tech stacks, we work closely with you to enhance your operational performance and market edge.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Clear strategic direction</li>
                  <li>Operational efficiency</li>
                  <li>Higher customer satisfaction</li>
                  <li>Increased ROI</li>
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

export default MarketingConsultancy;
