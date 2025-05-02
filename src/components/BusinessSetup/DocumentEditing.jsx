import React, { useEffect } from "react";
import { documentsIconImage, documenteImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DocumentEditing = () => {
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
          start: `${-80 + index * 20}% center`,
          end: "center 30%",
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      });
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={documenteImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Document Editing Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DOCUMENT EDITING
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="documentsIcon"
              src={documentsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Documents Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Document Editing</span> is the process of reviewing and refining business
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
          <div className="space-y-32">
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">ELEVATING</span> YOUR BUSINESS THROUGH CLARITY</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Polished Documents, Powerful Impact</span>
                At JP Consulting & Services, our Document Editing service goes
                beyond correcting grammar. We enhance the professionalism,
                clarity, and structure of your critical business documents.
              </p>
            </section>

            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR BUSINESS,</span> YOUR VOICE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Editing with a Strategic Approach</span>
                We believe every document tells a story. That’s why we work
                closely with you to understand your goals and message.
              </p>
            </section>

            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">BUILT</span> FOR BUSINESS SUCCESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Precision and Compliance You Can Trust</span>
                From legal documents to business plans, we ensure your materials are
                polished, professional, and compliant with industry standards.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE EDIT</p>
                <ul className="list-disc list-inside">
                  <li>Business Plans & Pitches</li>
                  <li>Proposals & Presentations</li>
                  <li>Company Profiles</li>
                  <li>Contracts, Agreements & MOUs</li>
                  <li>Policy Manuals & Internal Documents</li>
                  <li>Shareholder or Partnership Agreements</li>
                </ul>
              </div>
            </section>

            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">OUR</span> APPROACH</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic Editing Services</span>
                ✏️ Proofreading & Grammar Correction: Flawless, professional content<br />
                📐 Structure & Clarity Enhancements: Better organization and logical flow<br />
                🎯 Tone & Style Consistency: Matched to your brand and audience<br />
                ✅ Formatting & Compliance: Clean layout and legal alignment
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS</p>
                <ul className="list-disc list-inside">
                  <li>Increased credibility with clients, investors, and partners</li>
                  <li>More persuasive and effective communication</li>
                  <li>Time saved from internal reviews and rewrites</li>
                  <li>Stronger documentation foundation for growth and operations</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to elevate your message?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentEditing;
