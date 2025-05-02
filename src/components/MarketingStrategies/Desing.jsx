import React, { useEffect } from "react";
import { desIconImage, deImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Desing = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Header animations
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

    // Icon animation on scroll
    gsap.fromTo(
      "#desIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#desIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    // Section animations
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
        src={deImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Design Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DESIGNING OF ACCOUNTING METHODS
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="desIcon"
              src={desIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Accounting Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, we offer expert design and implementation of accounting systems tailored to your business needs. Our service focuses on developing efficient accounting methods, robust cost accounting programs, and reliable budgetary control procedures to help you manage financial operations with confidence and clarity.
              <br />
              <br />
              We ensure that your financial practices are aligned with industry standards and customized for your company’s structure. From setting up accurate recording methods to designing cost-tracking mechanisms and implementing real-time budget monitoring systems — we provide the tools and strategies you need to make informed, data-driven decisions.
              <br />
              <br />
              Whether you're a startup building your financial infrastructure or an established business looking to optimize your current systems, our solutions are built to improve transparency, efficiency, and financial control.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">STRUCTURED</span> FOR GROWTH</h3>
              <p className="text-base md:text-lg font-josefin">
                At JP Consulting & Services, we specialize in crafting accounting systems and cost control frameworks that give your business a strategic edge. From designing efficient accounting methods to implementing budgetary control procedures, we make sure your financial backbone supports scalability, compliance, and profitability.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR FINANCIAL</span> STRATEGY, CUSTOMIZED</h3>
              <p className="text-base md:text-lg font-josefin">
                We don’t believe in generic templates. We analyze your business structure, industry requirements, and financial goals to develop accounting procedures and systems that are built specifically for your operational needs and future growth.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">WE KNOW</span> WHAT COUNTS</h3>
              <p className="text-base md:text-lg font-josefin">
                A reliable accounting system is the foundation of sound financial decisions. Whether you’re aiming to control costs, allocate budgets effectively, or streamline reporting — our solutions are designed to empower informed decision-making at every level.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE DESIGN</p>
                <ul className="list-disc list-inside">
                  <li>Accounting Methods & Recording Procedures</li>
                  <li>Cost Accounting Programs</li>
                  <li>Budget Planning & Control Systems</li>
                  <li>Internal Controls for Financial Accuracy</li>
                  <li>Standard Operating Procedures for Finance Teams</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE DRIVE</span> VALUE</h3>
              <p className="text-base md:text-lg font-josefin">
                Customized Chart of Accounts: Organized for your specific business structure<br />
                Cost Tracking Programs: Gain insights into operational and production costs<br />
                Budgetary Control Systems: Plan, monitor, and adjust financial performance<br />
                Internal Controls: Reduce risk and ensure data integrity<br />
                Training & SOP Documentation: Equip your team with easy-to-follow procedures
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS:</p>
                <ul className="list-disc list-inside">
                  <li>Greater control over expenses and cash flow</li>
                  <li>Clearer financial reporting and audit readiness</li>
                  <li>Improved decision-making backed by accurate data</li>
                  <li>Stronger compliance with regulatory and tax standards</li>
                  <li>Streamlined financial processes that save time and reduce errors</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to optimize your financial systems?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desing;
