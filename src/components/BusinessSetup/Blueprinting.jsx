import React, { useEffect } from "react";
import { blueprintingIconImage, blueprintingImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Blueprinting = () => {
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
      "#blueprintIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#blueprintIcon",
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
    <div className="relative bg-white text-black overflow-x-hidden">
      {/* Background Image */}
      <img
        src={blueprintingImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            BLUEPRINTING
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bg-white text-black px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="blueprintIcon"
              src={blueprintingIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Blueprinting is more than documentation—it's the architecture of
              success. It provides clarity, prevents costly missteps, and aligns
              your team with your long-term business vision. With a strategic
              blueprint, you position your company for scalability and sustained
              growth in today’s competitive marketplace.
              <br />
              <br />
              When you plan with intention, you create space for innovation and
              efficiency.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">OUR PROMISE TO YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Transformative Results, Tailored to Your Business
                </span>
                Our consulting approach guarantees measurable improvements,
                whether you're optimizing your workflow, launching a new venture,
                or scaling your current business.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">YOUR PATH TO SUCCESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Personalized Strategy</span>
                We develop solutions specifically for your business—tailored to
                your goals, challenges, and market dynamics.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">UNDERSTAND YOUR CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Your Needs Are Our Priority</span>
                Whether it’s streamlining workflows, tech integration, or
                long-term visioning, we help identify root problems and unlock
                opportunities.
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
              <h3 className="text-2xl font-bold">HOW WE HELP YOUR BUSINESS GROW</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Custom Consulting Services</span>
                From developing winning strategies to integrating modern tech
                stacks, we work closely with you to enhance your operational
                performance and market edge.
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
              Ready to map your journey to success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blueprinting;
