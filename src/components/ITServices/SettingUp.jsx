import React, { useEffect } from "react";
import { sesIconImage, seImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SettingUp = () => {
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
      "#sesIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#sesIcon",
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
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={seImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Setting Up Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            SETTING UP
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="sesIcon"
              src={sesIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Setting Up Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Our Installation of Computer Setup service ensures your business
              technology is installed, configured, and optimized from the start.
              We handle everything from hardware assembly and software
              configuration to network setup and security installation. Whether
              you're launching a new office, upgrading your infrastructure, or
              starting from scratch, JP Consulting & Services provides a
              seamless, stress-free experience — ensuring your systems are ready
              to support your operations with speed, security, and reliability.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">SMART TECH,</span> SMARTER START</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Efficient Setup for a Future-Ready Business
                </span>
                At JP Consulting & Services, we offer professional computer
                setup services designed to support your business from day one.
                From hardware installation to essential software configuration,
                we ensure your technology foundation is secure, scalable, and
                optimized for performance — so you can focus on what really
                matters: growing your business.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">TAILORED TO</span> YOUR WORKFLOW</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Customized Setup for Maximum Efficiency</span>
                No two businesses operate the same — and neither should your
                tech. We assess your industry, team size, and operational needs
                to design a computer setup that’s perfectly aligned with how you
                work. Whether you're outfitting an office, a retail space, or a
                startup hub, we make sure your systems support your day-to-day
                demands seamlessly.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">WE HANDLE THE</span> TECH, YOU GET THE RESULTS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Seamless Integration, Zero Hassle</span>
                Technology shouldn’t slow you down. Our team manages the entire
                installation process — from equipment sourcing and setup to
                configuration and basic training — ensuring everything works
                smoothly from day one.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE INSTALL</p>
                <ul className="list-disc list-inside">
                  <li>Desktop & Laptop Computers</li>
                  <li>Operating Systems & Business Software</li>
                  <li>Printers, Scanners, and Peripherals</li>
                  <li>Wired & Wireless Network Systems</li>
                  <li>Data Backup and Security Software</li>
                  <li>POS Systems (for retail setups)</li>
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
                <span className="font-bold block">Full-Service IT Setup Solutions</span>
                🛠️ Hardware & Software Installation — We install all necessary
                components for your operations
                <br />
                🔧 Network Setup — Configure secure and reliable internet, Wi-Fi,
                and LAN connections
                <br />
                🖥️ Workstation Optimization — Arrange ergonomic, efficient
                workstations
                <br />
                🔐 Security Implementation — Set up firewalls, antivirus, and user
                access control
                <br />
                📁 Data Backup Planning — Protect your data from the start
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS</p>
                <ul className="list-disc list-inside">
                  <li>A fully functional, ready-to-use IT environment</li>
                  <li>Reduced downtime and faster business launch</li>
                  <li>Secure, efficient, and scalable infrastructure</li>
                  <li>Peace of mind with professional installation</li>
                  <li>Ongoing support options for future upgrades</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to get your business
              setup and running smoothly?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingUp;
