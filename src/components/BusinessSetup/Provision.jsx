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
            start: "top 80%", // Adjusted for more space between sections
            end: "bottom center", // Adjusted to avoid overlap
            scrub: 1,
          },
          opacity: 1,
          duration: 1.5,
          y: index % 2 === 0 ? 0 : 150,
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={proImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Provision Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PROVISION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="provIcon"
              src={provIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Provision Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
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

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">EQUIPPING YOUR BUSINESS FOR SUCCESS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Comprehensive Support from the Ground Up
                </span>
                At JP Consulting & Services, our Provision service ensures that
                you have everything in place to start, manage, and grow your
                business smoothly. From essential tools and templates to
                operational systems and resource planning, we provide the
                backbone your business needs to operate with confidence and
                control.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">BUILT FOR YOUR BUSINESS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Customized Solutions to Fit Your Setup</span>
                We don’t believe in generic setups. We take the time to
                understand the nature of your business and provide provisions
                tailored to your goals, industry requirements, and operational
                scale — so you’re always ready to move forward.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">STRONG FOUNDATIONS START HERE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Structure. Systems. Scalability.</span>
                The right provisions at the beginning can save time, reduce
                cost, and avoid unnecessary roadblocks. Our team ensures your
                business has the right documentation, tools, and infrastructure
                from day one.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE PROVIDE</p>
                <ul className="list-disc list-inside">
                  <li>Operational Tools & Setup Kits</li>
                  <li>Foundational Templates (Invoices, HR forms, Contracts, etc.)</li>
                  <li>Policy Drafts & Compliance Checklists</li>
                  <li>Business Structure Outlines</li>
                  <li>Resource & Equipment Planning</li>
                  <li>Document Filing & Organization Systems</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE EMPOWER YOUR OPERATIONS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Provision Services That Scale With You</span>
                🛠️ Systematic Setup: Equip your business with necessary tools
                and processes <br />
                📂 Organized Documentation: Streamline business workflows from
                the start <br />
                🚀 Scalable Infrastructure: Prepare for growth with
                future-ready resources <br />
                🤝 Compliance & Readiness: Ensure you're aligned with industry
                standards and ready to launch
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS:</p>
                <ul className="list-disc list-inside">
                  <li>Faster and smoother business setup process</li>
                  <li>Reduced startup delays and operational confusion</li>
                  <li>Professionally prepared documentation and templates</li>
                  <li>Scalable systems that grow with your company</li>
                  <li>Peace of mind knowing everything is in place</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to equip your business for success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provision;
