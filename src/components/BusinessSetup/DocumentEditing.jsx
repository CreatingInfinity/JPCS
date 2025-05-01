import React, { useEffect } from "react";
import { documentsIconImage, documenteImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DocumentEditing = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    gsap.fromTo("#documentsIcon", { x: -200, opacity: 0 }, {
      scrollTrigger: {
        trigger: "#documentsIcon",
        start: "top center",
        end: "20% 30%",
        scrub: 1,
      },
      opacity: 1,
      duration: 1.5,
      x: 0,
    });

    ["section1", "section2", "section3", "section4"].forEach((id, index) => {
      gsap.fromTo(`#${id}`, { y: 200, opacity: 0 }, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: "-50% center",
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
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="h-screen w-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DOCUMENT EDITING
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-2 josefin text-white">
            JP Consulting & Services
          </h2>
        </div>

        {/* Content Section */}
        <div className="h-full bgSVG to-white">
          {/* Introduction Section */}
          <div className="pt-20 md:pt-40 text-black flex flex-col md:flex-row justify-center items-center gap-10 px-4 sm:px-6 md:px-10">
            <img
              id="documentsIcon"
              src={documentsIconImage}
              className="w-full max-w-md h-auto rounded-lg object-contain"
              alt="Documents Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-2 md:pl-4 italic">
              Document Editing is the process of reviewing and refining business
              documents to ensure clarity, accuracy, consistency, and professionalism.
              It involves correcting grammar, punctuation, and formatting issues while
              improving the overall structure, tone, and effectiveness of the content.
              <br /><br />
              In a business setup context, document editing plays a crucial role in
              making sure all legal, operational, and strategic materials meet industry
              standards and clearly communicate your goals.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16 py-16 px-4 sm:px-6 md:px-10">
            {/* Section 1 */}
            <section
              id="section1"
              className="flex flex-col md:flex-row gap-10 justify-center items-center"
            >
              <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <p className="font-bold text-xl md:text-2xl">
                  ELEVATING YOUR BUSINESS THROUGH CLARITY
                </p>
                <p className="text-base md:text-lg josefin">
                  <span className="font-bold">
                    Polished Documents, Powerful Impact
                  </span>
                  <br />
                  At JP Consulting & Services, our Document Editing service goes
                  beyond correcting grammar. We enhance the professionalism,
                  clarity, and structure of your critical business documents.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="flex flex-col md:flex-row gap-10 justify-center items-center"
            >
              <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <p className="font-bold text-xl md:text-2xl">
                  YOUR BUSINESS, YOUR VOICE
                </p>
                <p className="text-base md:text-lg josefin">
                  <span className="font-bold">
                    Tailored Editing with a Strategic Approach
                  </span>
                  <br />
                  We believe every document tells a story. That’s why we work
                  closely with you to understand your goals and message.
                </p>
              </div>
            </section>

            {/* Section 3 & 4 */}
            <section className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">
              {/* Section 3 */}
              <div
                id="section3"
                className="w-full lg:w-1/2 h-full josefin space-y-5 px-2"
              >
                <p className="font-bold text-xl sm:text-2xl text-center lg:text-left">
                  BUILT FOR BUSINESS SUCCESS
                </p>
                <p className="text-center lg:text-left flex flex-col gap-2 text-base sm:text-lg">
                  <span className="font-bold">Precision and Compliance You Can Trust</span>
                  From legal documents to business plans, we ensure your materials are
                  polished, professional, and compliant with industry standards. Every
                  document is reviewed with attention to detail, accuracy, and strategic impact.
                </p>
                <div className="text-center lg:text-left flex flex-col gap-2">
                  <span className="font-bold">WHAT WE EDIT</span>
                  <ul className="list-disc list-inside text-left text-base sm:text-lg">
                    <li>Business Plans & Pitches</li>
                    <li>Proposals & Presentations</li>
                    <li>Company Profiles</li>
                    <li>Contracts, Agreements & MOUs</li>
                    <li>Policy Manuals & Internal Documents</li>
                    <li>Shareholder or Partnership Agreements</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div
                id="section4"
                className="w-full lg:w-1/2 h-full josefin space-y-5 px-2"
              >
                <p className="font-bold text-xl sm:text-2xl text-center lg:text-left">
                  OUR APPROACH
                </p>
                <p className="text-center lg:text-left flex flex-col gap-2 text-base sm:text-lg">
                  <span className="font-bold">Strategic Editing Services</span>
                  ✏️ Proofreading & Grammar Correction: Flawless, professional content<br />
                  📐 Structure & Clarity Enhancements: Better organization and logical flow<br />
                  🎯 Tone & Style Consistency: Matched to your brand and audience<br />
                  ✅ Formatting & Compliance: Clean layout and legal alignment
                </p>
                <div className="text-center lg:text-left flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left text-base sm:text-lg">
                    <li>Increased credibility with clients, investors, and partners</li>
                    <li>More persuasive and effective communication</li>
                    <li>Time saved from internal reviews and rewrites</li>
                    <li>Stronger documentation foundation for growth and operations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={documenteImage}
        className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0"
        alt="Document Editing Background"
      />
    </div>
  );
};

export default DocumentEditing;
