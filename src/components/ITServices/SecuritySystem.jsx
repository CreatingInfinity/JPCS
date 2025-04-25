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
      {
        x: -200,
        opacity: 0,
      },
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
          <h1 className="text-6xl bold opacity-1     text-orange-500    tracking-wide">
            SECURITY SYSTEM
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="sysIcon"
              src={sysIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Security Systems are essential in today’s fast-moving business
              world. At JP Consulting & Services, we provide intelligent,
              integrated solutions to protect your business from physical and
              digital threats. Our security systems include advanced
              surveillance, access control, and alarm technologies designed to
              monitor, detect, and prevent potential risks. <br />
              <br />
              From small offices to large commercial setups, we assess your
              unique needs and deliver customized systems that ensure 24/7
              protection, operational safety, and complete peace of mind.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  PROTECTING WHAT MATTERS MOST
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Intelligent Protection, Tailored for Your Business
                  </span>
                  At JP Consulting & Services, we offer advanced security system
                  solutions designed to safeguard your assets, people, and
                  operations. Whether you're setting up a new business or
                  upgrading your existing security infrastructure, we provide
                  customized systems that bring peace of mind and 24/7
                  protection.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR SAFETY, OUR PRIORITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Customized Security That Fits Your Needs
                  </span>
                  We understand that every business is different — from retail
                  stores and corporate offices to warehouses and facilities.
                  That’s why we tailor our security solutions to your space,
                  risks, and goals. Our team ensures a smooth setup, seamless
                  integration, and ongoing support.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  UNDERSTANDING YOUR RISKS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Proactive Planning, Real-Time Protection
                  </span>
                  Security isn’t just about cameras and alarms — it’s about
                  planning, prevention, and control. We assess vulnerabilities,
                  anticipate threats, and design systems that not only detect,
                  but deter unauthorized access and incidents.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">SOLUTIONS WE PROVIDE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Surveillance Camera Systems (CCTV & IP Cameras)</li>
                    <li>Access Control & Biometric Systems</li>
                    <li>Alarm & Intrusion Detection</li>
                    <li>Intercom & Visitor Management</li>
                    <li>Smart Monitoring & Remote Access</li>
                    <li>Network & Cybersecurity Integration</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOU STAY SECURED
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    End-to-End Security Services
                  </span>
                  🔍 Site Assessment & Risk Evaluation
                  <br />
                  🛠 Custom System Design & Installation
                  <br />
                  🔒 Smart Integration with Existing Infrastructure
                  <br />
                  📲 Remote Monitoring & Management Solutions
                  <br />
                  🧑‍🔧 Ongoing Maintenance & Support
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Enhanced protection for physical and digital assets</li>
                    <li>
                      Deterrence of theft, intrusion, and unauthorized access
                    </li>
                    <li>24/7 monitoring for quick incident response</li>
                    <li>
                      Safer working environments for employees and customers
                    </li>
                    <li>Increased operational control and peace of mind</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
               
      </div>
      <img src={syImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default SecuritySystem;
