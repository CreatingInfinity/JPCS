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

    const sections = ["#section1", "#section2", "#section3", "#section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-80% center",
            end: "center 30%",
          },
          opacity: 1,
          duration: 1.5,
          y: index % 2 === 0 ? 0 : 150,
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-8">
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PROVISION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-10">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG py-16 px-4 md:px-20">
          {/* Intro Section with Icon and Description */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
            <img
              id="provIcon"
              src={provIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Provision Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
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

          {/* Section 1 & 2 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20">
            <div id="section1" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">
                EQUIPPING YOUR BUSINESS FOR SUCCESS
              </p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">
                  Comprehensive Support from the Ground Up
                </span>
                At JP Consulting & Services, our Provision service ensures that
                you have everything in place to start, manage, and grow your
                business smoothly. From essential tools and templates to
                operational systems and resource planning, we provide the
                backbone your business needs to operate with confidence and
                control.
              </p>
            </div>

            <div id="section2" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">
                BUILT FOR YOUR BUSINESS
              </p>
              <p className="text-base md:text-lg flex flex-col gap-2">
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

          {/* Section 3 & 4 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start">
            <div id="section3" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">
                STRONG FOUNDATIONS START HERE
              </p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">
                  Structure. Systems. Scalability.
                </span>
                The right provisions at the beginning can save time, reduce
                cost, and avoid unnecessary roadblocks. Our team ensures your
                business has the right documentation, tools, and infrastructure
                from day one.
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">WHAT WE PROVIDE</span>
                <ul className="list-disc list-inside text-left">
                  <li>Operational Tools & Setup Kits</li>
                  <li>
                    Foundational Templates (Invoices, HR forms, Contracts, etc.)
                  </li>
                  <li>Policy Drafts & Compliance Checklists</li>
                  <li>Business Structure Outlines</li>
                  <li>Resource & Equipment Planning</li>
                  <li>Document Filing & Organization Systems</li>
                </ul>
              </div>
            </div>

            <div id="section4" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">
                HOW WE EMPOWER YOUR OPERATIONS
              </p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">
                  Provision Services That Scale With You
                </span>
                🛠️ Systematic Setup: Equip your business with necessary tools
                and processes <br />
                📂 Organized Documentation: Streamline business workflows from
                the start <br />
                🚀 Scalable Infrastructure: Prepare for growth with
                future-ready resources <br />
                🤝 Compliance & Readiness: Ensure you're aligned with industry
                standards and ready to launch
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
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

      {/* Background Image */}
      <img src={proImage} className="fixed blur-sm top-0 z-1 w-full h-full object-cover" alt="Background" />
    </div>
  );
};

export default Provision;
