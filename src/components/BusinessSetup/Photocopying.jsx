import React, { useEffect } from "react";
import { photosIconImage, photoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContactUsFooter from "../ContactUsFooter";

gsap.registerPlugin(ScrollTrigger);

const Photocopying = () => {
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

    gsap.fromTo("#photosIcon", {
      x: -200,
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: "#photosIcon",
        start: "top center",
        end: "20% 30%",
        scrub: 1,
      },
      opacity: 1,
      duration: 1.5,
      x: 0,
    });

    // Adjust the animation for sections to prevent overlap
    ["section1", "section2", "section3", "section4"].forEach((id, index) => {
      gsap.fromTo(`#${id}`, {
        y: 200,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 80%", // Adjusted to give space between sections
          end: "bottom center", // Adjusted to prevent overlap
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        y: index % 2 === 0 ? 0 : 150,
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={photoImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Photocopy Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PHOTOCOPYING
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="photosIcon"
              src={photosIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Photocopy Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, we understand the importance of
              clear, professional document replication in business operations...
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">QUALITY YOU CAN COUNT ON</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Reliable. Fast. Professional.
                </span>
                At JP Consulting & Services, we offer high-quality photocopying solutions...
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">DESIGNED FOR BUSINESS DEMANDS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Scalable & Efficient Solutions</span>
                From single-page copies to bulk document sets...
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR DOCUMENTS, HANDLED WITH CARE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Confidential and Secure</span>
                We treat your documents with the highest level of professionalism...
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE OFFER</p>
                <ul className="list-disc list-inside">
                  <li>Black & White and Color Photocopying</li>
                  <li>Single-Sided and Double-Sided Options</li>
                  <li>High-Volume and Bulk Copy Services</li>
                  <li>Document Sorting, Binding, and Finishing</li>
                  <li>Legal Size, Letter Size, A4, A3, and Custom Formats</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE SUPPORT YOUR BUSINESS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Professional Support, Every Step of the Way</span>
                🖨️ High-Resolution Printing: Clear, smudge-free copies every time<br />
                📚 Finishing Services: Binding, stapling, and collating...<br />
                ⏱️ Fast Turnaround: Get your copies on time — every time<br />
                🔐 Confidentiality Assurance: Your documents are safe with us
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS:</p>
                <ul className="list-disc list-inside">
                  <li>Consistent, professional-quality output</li>
                  <li>Streamlined operations for meetings, filings, and client presentations</li>
                  <li>Time-saving, in-house service with quick delivery</li>
                  <li>Enhanced document organization and presentation</li>
                  <li>Peace of mind with secure, reliable handling</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to streamline your document processes?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photocopying;
