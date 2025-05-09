import React, { useEffect } from "react";
import { corsIconImage, corImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Corporate = () => {
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
      "#corsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#corsIcon",
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
        src={corImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CORPORATE BANKING SERVICES
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
              src={corsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Corporate Banking Services</span> iare designed to help businesses manage their financial operations with precision, security, and strategic foresight. Whether you're a startup looking to establish a solid banking foundation or an established enterprise optimizing your financial infrastructure, we provide end-to-end support to ensure your banking setup meets your business needs.
              <br />
              <br />
              We assist in selecting the right banking partners, opening corporate accounts, structuring payment systems, and ensuring regulatory compliance. Our consultants simplify the complexities of corporate finance, helping you gain access to credit facilities, streamline cash flow, and manage risk effectively.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">STRATEGIC FINANCE </span> FOR SUSTAINABLE GROWTH</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Your Financial Success, Our Expertise
                </span>
               At JP Consulting & Services, we help businesses navigate the complex world of corporate banking with confidence. From account structuring to financial planning and compliance support, our goal is to ensure your company’s banking infrastructure is optimized for efficiency, growth, and long-term success.


              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">CUSTOMIZED</span> FINANCIAL SOLUTIONS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Built Around Your Business Needs</span>
                We understand that every company has unique financial goals. That’s why we develop personalized corporate banking strategies — whether you need to streamline your cash flow, secure business credit, or establish international banking capabilities.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">ADDRESSING YOUR</span> FINANCIAL CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Your Banking, Simplified</span>
               Managing business banking relationships, regulatory requirements, and financing structures can be overwhelming. Our consultants simplify the process, ensuring your banking services are aligned with your operations and strategic vision.


              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">CORE AREAS WE COVER</p>
                <ul className="list-disc list-inside">
                  <li>Business Bank Account Setup</li>
                  <li>Cash Management Solutions</li>
                  <li>Credit Facilities & Lending Support</li>
                  <li>Treasury & Liquidity Management</li>
                  <li>Bank Compliance & KYC Advisory</li>
                  <li>Trade Finance & International Banking</li>
                  <li>Corporate Credit Cards & Expense Management</li>
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
                <span className="font-bold block">End-to-End Banking Support</span>
                <li> Bank Selection & Setup: Guiding you through opening the right business accounts</li>
                <li>Financing Solutions: Supporting loan, credit line, or investment banking needs</li>
                <li> Global Readiness: Structuring international payments and currency solutions</li>
                <li>Documentation & Due Diligence: Ensuring your records are prepared and compliant</li>
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>A fully optimized corporate banking setup</li>
                  <li>Improved liquidity and working capital control</li>
                  <li>Reduced operational and banking costs</li>
                  <li>Easier access to credit and financial tools</li>
                  <li>Peace of mind through regulatory compliance and risk reduction</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to scale your success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
