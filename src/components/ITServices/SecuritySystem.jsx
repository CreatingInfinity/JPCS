import React, { useEffect } from "react";
import { sysIconImage, syImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SecuritySystem = () => {
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
      "#sysIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#sysIcon",
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
        src={syImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Security Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            SECURITY SYSTEM
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="sysIcon"
              src={sysIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Security Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Security Systems are essential in today’s fast-moving business world. At JP Consulting & Services, we provide intelligent, integrated solutions to protect your business from physical and digital threats. Our security systems include advanced surveillance, access control, and alarm technologies designed to monitor, detect, and prevent potential risks.
              <br />
              <br />
              From small offices to large commercial setups, we assess your unique needs and deliver customized systems that ensure 24/7 protection, operational safety, and complete peace of mind.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">PROTECTING WHAT MATTERS MOST</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                Intelligent Protection, Tailored for Your Business. At JP Consulting & Services, we offer advanced security system solutions designed to safeguard your assets, people, and operations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR SAFETY, OUR PRIORITY</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                Customized Security That Fits Your Needs. Whether it’s setting up a new business or upgrading your existing security infrastructure, we provide tailored solutions.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTANDING YOUR RISKS</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                Proactive Planning, Real-Time Protection. We assess vulnerabilities, anticipate threats, and design systems that not only detect but deter unauthorized access and incidents.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">SOLUTIONS WE PROVIDE</p>
                <ul className="list-disc list-inside">
                  <li>Surveillance Camera Systems (CCTV & IP Cameras)</li>
                  <li>Access Control & Biometric Systems</li>
                  <li>Alarm & Intrusion Detection</li>
                  <li>Intercom & Visitor Management</li>
                  <li>Smart Monitoring & Remote Access</li>
                  <li>Network & Cybersecurity Integration</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP YOU STAY SECURED</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                End-to-End Security Services. From site assessment to ongoing maintenance, we ensure your system runs efficiently and effectively.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS:</p>
                <ul className="list-disc list-inside">
                  <li>Enhanced protection for physical and digital assets</li>
                  <li>Deterrence of theft, intrusion, and unauthorized access</li>
                  <li>24/7 monitoring for quick incident response</li>
                  <li>Safer working environments for employees and customers</li>
                  <li>Increased operational control and peace of mind</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to secure your business?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySystem;
