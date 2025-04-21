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

    gsap.fromTo(
      "#section1",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section1",

          start: "-80% center",
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section2",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section2",

          start: "-50% center",
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );
    gsap.fromTo(
      "#section3",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section3",

          start: "-50% center",
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section4",
      {
        y: 200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section4",

          start: "-20% center",
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );
  });
  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-6xl bold opacity-1 text-amber-400 tracking-wide">
            SETTING UP
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="sesIcon"
              src={sesIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Our Installation of Computer Setup service ensures your business
              technology is installed, configured, and optimized from the start.
              We handle everything from hardware assembly and software
              configuration to network setup and security installation. Whether
              you're launching a new office, upgrading your infrastructure, or
              starting from scratch, JP Consulting & Services provides a
              seamless, stress-free experience — ensuring your systems are ready
              to support your operations with speed, security, and reliability.{" "}
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  SMART TECH, SMARTER START
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Efficient Setup for a Future-Ready Business
                  </span>
                  At JP Consulting & Services, we offer professional computer
                  setup services designed to support your business from day one.
                  From hardware installation to essential software
                  configuration, we ensure your technology foundation is secure,
                  scalable, and optimized for performance — so you can focus on
                  what really matters: growing your business.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  TAILORED TO YOUR WORKFLOW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Customized Setup for Maximum Efficiency
                  </span>
                  No two businesses operate the same — and neither should your
                  tech. We assess your industry, team size, and operational
                  needs to design a computer setup that’s perfectly aligned with
                  how you work. Whether you're outfitting an office, a retail
                  space, or a startup hub, we make sure your systems support
                  your day-to-day demands seamlessly.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  WE HANDLE THE TECH, YOU GET THE RESULTS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Seamless Integration, Zero Hassle
                  </span>
                  Technology shouldn’t slow you down. Our team manages the
                  entire installation process — from equipment sourcing and
                  setup to configuration and basic training — ensuring
                  everything works smoothly from day one.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE INSTALL</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Desktop & Laptop Computers</li>
                    <li>Operating Systems & Business Software</li>
                    <li>Printers, Scanners, and Peripherals</li>
                    <li>Wired & Wireless Network Systems</li>
                    <li>Data Backup and Security Software</li>
                    <li>POS Systems (for retail setups)</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOUR BUSINESS GROW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Full-Service IT Setup Solutions
                  </span>
                  🛠️ Hardware & Software Installation — We install all necessary
                  components for your operations
                  <br />
                  🔧 Network Setup — Configure secure and reliable internet,
                  Wi-Fi, and LAN connections
                  <br />
                  🖥️ Workstation Optimization — Arrange ergonomic, efficient
                  workstations
                  <br />
                  🔐 Security Implementation — Set up firewalls, antivirus, and
                  user access control
                  <br />
                  📁 Data Backup Planning — Protect your data from the start
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>A fully functional, ready-to-use IT environment</li>
                    <li>Reduced downtime and faster business launch</li>
                    <li>Secure, efficient, and scalable infrastructure</li>
                    <li>Peace of mind with professional installation</li>
                    <li>Ongoing support options for future upgrades</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ContactUsFooter />
      </div>
      <img src={seImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default SettingUp;
