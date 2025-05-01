import React, { useEffect } from "react";
import { typosIconImage, typoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Typography = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    const sections = ["#typosIcon", "#section1", "#section2", "#section3", "#section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-80% center",
            end: "center 30%",
            scrub: index === 0 ? 1 : false,
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
      <div className="relative z-10">
        {/* Header */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            TYPOGRAPHY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-10">
            JP Consulting & Services
          </h2>
        </div>

        {/* Main Content */}
        <div className="bgSVG py-20 px-4 md:px-20 text-black">
          {/* Intro */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-16">
            <img
              id="typosIcon"
              src={typosIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Typography Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, our typography is more than just design—it’s a
              reflection of our professionalism, clarity, and commitment. Every element
              communicates authority, trust, and precision.
            </p>
          </div>

          {/* Sections 1 & 2 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20">
            <div id="section1" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">DESIGNED FOR BUSINESS COMMUNICATION</p>
              <p className="text-base md:text-lg">
                <span className="font-bold block">Works as Hard as You Do</span>
                Our clean, business-ready fonts ensure clarity in every message—from
                proposals to digital content.
              </p>
            </div>
            <div id="section2" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">TAILORED FOR BUSINESS CONTENT</p>
              <p className="text-base md:text-lg">
                <span className="font-bold block">Enhances Strategic Messaging</span>
                Our style supports complex topics by organizing content into clean, digestible
                sections—keeping audiences engaged and informed.
              </p>
            </div>
          </section>

          {/* Sections 3 & 4 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start">
            <div id="section3" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">STRUCTURED FOR IMPACT</p>
              <p className="text-base md:text-lg">
                <span className="font-bold block">
                  A Clear Hierarchy That Guides Every Reader
                </span>
                We design with structure—headings, spacing, and formatting that boost readability.
              </p>
              <div className="text-base md:text-lg">
                <span className="font-bold block mb-2">WHAT WE FOCUS</span>
                <ul className="list-disc list-inside text-left">
                  <li>Headings: Bold, uppercase, impactful</li>
                  <li>Subheadings: Title case for readability</li>
                  <li>Body Text: Neutral, spaced for comfort</li>
                  <li>Bullets: Clean formatting for scanning</li>
                </ul>
              </div>
            </div>
            <div id="section4" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">YOUR BRAND DESERVES STRATEGIC DESIGN</p>
              <p className="text-base md:text-lg">
                <span className="font-bold block">Let Us Work for You</span>
                Typography that’s clear, consistent, and powerful—backed by business strategy.
              </p>
              <div className="text-base md:text-lg">
                <span className="font-bold block mb-2">YOUR BENEFITS:</span>
                <ul className="list-disc list-inside text-left">
                  <li>Improved readability & clarity</li>
                  <li>Consistent brand image</li>
                  <li>Enhanced professionalism</li>
                  <li>Stronger visual hierarchy</li>
                  <li>Better audience engagement</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background Image */}
      <img src={typoImage} className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0" alt="Typography Background" />
    </div>
  );
};

export default Typography;
