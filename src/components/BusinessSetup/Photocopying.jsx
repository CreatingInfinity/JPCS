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

    ["section1", "section2", "section3", "section4"].forEach((id, index) => {
      gsap.fromTo(`#${id}`, {
        y: 200,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: "-80% center",
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: index % 2 === 0 ? 0 : 150,
      });
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PHOTOCOPYING
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>

        <div className="h-full bgSVG">
          {/* Intro Section */}
          <div className="pt-20 px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 text-black">
            <img
              id="photosIcon"
              src={photosIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Photocopy Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, we understand the importance of
              clear, professional document replication in business operations...
            </p>
          </div>

          {/* Info Sections */}
          <div className="py-20 px-4 space-y-16">
            {/* Sections 1 & 2 */}
            <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-start">
              <div id="section1" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">QUALITY YOU CAN COUNT ON</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Reliable. Fast. Professional.</span>
                  At JP Consulting & Services, we offer high-quality photocopying solutions...
                </p>
              </div>
              <div id="section2" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">DESIGNED FOR BUSINESS DEMANDS</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Scalable & Efficient Solutions</span>
                  From single-page copies to bulk document sets...
                </p>
              </div>
            </section>

            {/* Sections 3 & 4 */}
            <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-start">
              <div id="section3" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">YOUR DOCUMENTS, HANDLED WITH CARE</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Confidential and Secure</span>
                  We treat your documents with the highest level of professionalism...
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">WHAT WE OFFER</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Black & White and Color Photocopying</li>
                    <li>Single-Sided and Double-Sided Options</li>
                    <li>High-Volume and Bulk Copy Services</li>
                    <li>Document Sorting, Binding, and Finishing</li>
                    <li>Legal Size, Letter Size, A4, A3, and Custom Formats</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">HOW WE SUPPORT YOUR BUSINESS</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Professional Support, Every Step of the Way</span>
                  🖨️ High-Resolution Printing: Clear, smudge-free copies every time<br />
                  📚 Finishing Services: Binding, stapling, and collating...<br />
                  ⏱️ Fast Turnaround: Get your copies on time — every time<br />
                  🔐 Confidentiality Assurance: Your documents are safe with us
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Consistent, professional-quality output</li>
                    <li>Streamlined operations for meetings, filings, and client presentations</li>
                    <li>Time-saving, in-house service with quick delivery</li>
                    <li>Enhanced document organization and presentation</li>
                    <li>Peace of mind with secure, reliable handling</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img src={photoImage} className="fixed blur-sm top-0 z-1 w-full h-full object-cover" alt="" />
    </div>
  );
};

export default Photocopying;
