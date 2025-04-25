import React, { useEffect } from "react";
import { provIconImage, proImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Provision = () => {
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
      "#provIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#provIcon",

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
            PROVISION
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="provIcon"
              src={provIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Provision is the backbone of a successful business setup. At JP
              Consulting & Services, we ensure that your company is equipped
              with the right tools, templates, and operational systems to
              function efficiently from day one. Whether you’re launching a
              startup or restructuring your business, our provision service
              delivers customized solutions tailored to your industry, goals,
              and workflow. <br />
              <br />
              Our expert team prepares everything you need — from policy drafts
              and document templates to operational guides and compliance
              frameworks — so your business is ready to operate, scale, and
              succeed.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  EQUIPPING YOUR BUSINESS FOR SUCCESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Comprehensive Support from the Ground Up
                  </span>
                  At JP Consulting & Services, our Provision service ensures
                  that you have everything in place to start, manage, and grow
                  your business smoothly. From essential tools and templates to
                  operational systems and resource planning, we provide the
                  backbone your business needs to operate with confidence and
                  control.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  BUILT FOR YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Customized Solutions to Fit Your Setup
                  </span>
                  We don’t believe in generic setups. We take the time to
                  understand the nature of your business and provide provisions
                  tailored to your goals, industry requirements, and operational
                  scale — so you’re always ready to move forward.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  STRONG FOUNDATIONS START HERE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Structure. Systems. Scalability.
                  </span>
                  The right provisions at the beginning can save time, reduce
                  cost, and avoid unnecessary roadblocks. Our team ensures your
                  business has the right documentation, tools, and
                  infrastructure from day one.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE PROVIDE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Operational Tools & Setup Kits</li>
                    <li>
                      Foundational Templates (Invoices, HR forms, Contracts,
                      etc.)
                    </li>
                    <li>Policy Drafts & Compliance Checklists</li>
                    <li>Business Structure Outlines</li>
                    <li>Resource & Equipment Planning</li>
                    <li>Document Filing & Organization Systems</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE EMPOWER YOUR OPERATIONS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Provision Services That Scale With You
                  </span>
                  🛠️ Systematic Setup: Equip your business with necessary tools
                  and processes<br></br>
                  📂 Organized Documentation: Streamline business workflows from
                  the start <br></br>
                  🚀 Scalable Infrastructure: Prepare for growth with
                  future-ready resources<br></br>
                  🤝 Compliance & Readiness: Ensure you're aligned with industry
                  standards and ready to launch
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Faster and smoother business setup process</li>
                    <li>Reduced startup delays and operational confusion</li>
                    <li>Professionally prepared documentation and templates</li>
                    <li>Scalable systems that grow with your company</li>
                    <li>Peace of mind knowing everything is in place</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
               
      </div>
      <img src={proImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Provision;
