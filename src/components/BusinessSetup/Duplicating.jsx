import React, { useEffect } from "react";
import { dupsIconImage, dupImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Duplicating = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // H1 and H2 animations
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

    // ScrollTrigger animation for the icon
    gsap.fromTo(
      "#dupsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#dupsIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    // ScrollTrigger animations for sections
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
        src={dupImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Duplicating Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DUPLICATING
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="dupsIcon"
              src={dupsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Duplicating Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Duplicating</span> is about efficiency and precision. We understand the importance of keeping your business moving forward with high-quality document copies that are accurate and reliable. Whether it’s for daily operations, client communication, or compliance, our duplicating services make sure that your business runs smoothly with consistent, professional outputs.
              <br />
              <br />
              At JP Consulting & Services, we help you create the documentation you need, fast, and without sacrificing quality.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">OUR COMMITMENT</span> TO YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Fast, Accurate, and Reliable Document Duplication
                </span>
                We ensure that your business documents are reproduced quickly and with precision, so you can focus on what matters most—growing your business and meeting your clients' needs.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR DOCUMENTS</span> IN SAFE HANDS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Quality and Accuracy Every Time</span>
                From confidential legal contracts to marketing materials, we handle every document with the utmost care, ensuring each copy meets your business standards.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">FIND</span> THE RIGHT COPY</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Your Reproduction Needs, Our Expertise</span>
                Whether you need a small batch of copies or a large-scale reproduction project, our duplicating services offer a flexible solution to suit your needs. Fast, precise, and secure.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Documents We Duplicate</p>
                <ul className="list-disc list-inside">
                  <li>Business Documents</li>
                  <li>Legal Contracts</li>
                  <li>Reports and Proposals</li>
                  <li>Marketing Materials</li>
                  <li>Client Communications</li>
                  <li>Operational Manuals</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">OUR SOLUTIONS</span> FOR YOUR BUSINESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Efficient and Professional Duplicating</span>
                We offer a comprehensive duplicating service designed to meet your business's needs. From quick turnaround times to a focus on quality, we ensure your documents are reproduced with care and professionalism.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Timely document reproduction</li>
                  <li>Cost-effective services</li>
                  <li>High-quality, accurate copies</li>
                  <li>Confidential handling of your business documents</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to get your documents duplicated with accuracy and care?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duplicating;
