import React, { useEffect } from "react";
import { visIconImage, viImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const UnlimitedVisa = () => {
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
      "#visIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#visIcon",
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
        src={viImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            UNLIMITED VISA ALLOCATION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG  text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="blueprintIcon"
              src={visIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Visa Allocation</span> service is built to help businesses manage and secure the right visa permissions for employees, partners, and executives working across borders. Whether you're hiring international talent, expanding operations abroad, or navigating local immigration frameworks, we provide end-to-end support that ensures compliance, efficiency, and peace of mind.


            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">NAVIGATING COMPLEXITY</span> WITH CONFIDENCE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                 Tailored Visa Solutions for Every Business Model
                </span>
                At JP Consulting & Services, our Unlimited Visa Allocation service is designed to help businesses grow without the constraints of limited manpower. Whether you're expanding rapidly or require a diverse team of professionals, we ensure you have the legal capacity to bring in as many skilled employees as your business demands.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">DESIGNED</span> FOR GROWTH</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">No Limits. No Delays. Just Results.</span>
                We help you secure unlimited visa allocations through proper structuring and compliance with UAE business regulations. This enables your company to hire efficiently, onboard faster, and operate at full strength — without waiting on quota approvals or facing recruitment bottlenecks.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">A STRATEGIC</span> ADVANTAGE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Compliance Meets Opportunity</span>
                With our guidance, your business not only stays compliant with government policies but also gains the operational edge to recruit top talent from around the world. Whether it's tech, construction, hospitality, or admin — we ensure you're covered.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT THIS SERVICE INCLUDES</p>
                <ul className="list-disc list-inside">
                  <li>Company structure optimization to qualify for unlimited visas</li>
                  <li>Liaison with government and immigration departments</li>
                  <li>Preparation and submission of necessary documentation</li>
                  <li>Fast-tracked processing and approval timelines</li>
                  <li>Ongoing support and compliance guidance</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">WHY VISA</span> ALLOCATION MATTERS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Ensure Business Continuity. Maintain Legal Compliance. Attract Global Talent.</span>
                Delays or missteps in visa allocation can stall projects, disrupt hiring timelines, and expose your company to legal risk. With our deep regulatory expertise and streamlined processes, you can focus on growth while we handle the bureaucracy.


              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Faster onboarding of international staff</li>
                  <li>Reduced visa rejections and legal setbacks</li>
                  <li>Enhanced compliance and risk management</li>
                  <li>Strategic workforce planning for cross-border operations</li>
                  <li>Full administrative support and government liaison</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to map your journey to success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedVisa;
