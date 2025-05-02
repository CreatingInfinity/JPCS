import React, { useEffect } from "react";
import { sosIconImage, soImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SoftwareInstall = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        "h1",
        { x: 200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 }
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 }
      );

    gsap.fromTo(
      "#sosIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#sosIcon",
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
        src={soImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Software Install Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            SOFTWARE INSTALLATION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="sosIcon"
              src={sosIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Software Install Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Software Installation is the process of setting up, configuring, and
              optimizing software applications to ensure they run smoothly and securely
              within your business environment. This includes everything from installing
              basic productivity tools to implementing advanced systems tailored to your
              industry needs.
              <br />
              <br />
              At JP Consulting & Services, we provide end-to-end software installation
              services that guarantee compatibility, security, and operational efficiency.
              Whether you're upgrading existing systems or introducing new platforms, we
              handle the technical side so your team can focus on what matters most — growing
              your business.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">SMART SETUP</span> FOR SEAMLESS OPERATIONS</h3>
              <p className="text-base md:text-lg font-josefin">
                At JP Consulting & Services, our Software Installation service ensures
                your business tools are set up correctly from day one. Whether you’re
                implementing productivity software, industry-specific tools, or enterprise-level
                systems, we handle the technical setup so you can focus on running your business.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">TAILORED TO</span> YOUR WORKFLOW</h3>
              <p className="text-base md:text-lg font-josefin">
                We understand that every business uses technology differently. That’s why
                we assess your specific needs and select the best-fit software, configuring
                it to align with your operations, team size, and long-term goals. Our approach
                guarantees a seamless transition with minimal disruption.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">WE HANDLE</span> THE COMPLEXITY</h3>
              <p className="text-base md:text-lg font-josefin">
                Installing new software can be overwhelming — from compatibility checks to
                licensing, updates, and user access control. Our experienced team manages
                the entire process, ensuring everything runs smoothly, securely, and in
                compliance with your IT policies.
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
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW</h3>
              <p className="text-base md:text-lg font-josefin">
                From developing winning strategies to integrating modern tech stacks, we
                work closely with you to enhance your operational performance and market edge.
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
              <span className="text-orange-600">Ready</span> to start your Software Installation journey?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareInstall;
