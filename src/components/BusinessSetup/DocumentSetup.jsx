import React, { useEffect } from "react";
import { setsIconImage, setImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DocumentSetup = () => {
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

    gsap.fromTo("#setsIcon", { x: -200, opacity: 0 }, {
      scrollTrigger: {
        trigger: "#setsIcon",
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
        src={setImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Document Setup Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DOCUMENT SETUP
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="setsIcon"
              src={setsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Document Setup Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Document Setup</span> is the process of preparing, organizing, and formatting all essential business documents required for launching and operating a company. This includes legal forms, internal policies, agreements, and compliance paperwork — all customized to your specific business structure and regulatory requirements.
              <br /><br />
              At JP Consulting & Services, we provide end-to-end Document Setup support to ensure your business is built on a strong, legally sound foundation.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">BUILDING</span> THE FOUNDATION FOR YOUR BUSINESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Structured, Compliant, and Ready for Growth</span>
                Our Document Setup service ensures your business is built on a solid legal and operational foundation.
              </p>
            </section>

            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR FIRST</span> STEP TO SUCCESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Everything in Place, Right from the Start</span>
                We take the stress out of paperwork by handling the creation and organization of your key business documents.
              </p>
            </section>

            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">WE KNOW</span> WHAT YOU NEED</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Compliance and Accuracy, Every Time</span>
                Incorrect or missing documentation can delay your operations or put your business at risk.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">WHAT WE SET UP</p>
                <ul className="list-disc list-inside">
                  <li>Company Registration Documents</li>
                  <li>Articles of Incorporation / Memorandum of Association</li>
                  <li>Non-Disclosure Agreements (NDAs)</li>
                  <li>Company Policies & Manuals</li>
                  <li>Business Plan Drafts & Profiles</li>
                  <li>Government and Regulatory Forms</li>
                </ul>
              </div>
            </section>

            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE</span> MAKE IT EASY FOR YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">End-to-End Setup Support</span>
                📝 Document Drafting<br />
                🧩 Customization<br />
                ✅ Compliance Assurance<br />
                📁 Organized & Accessible
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS</p>
                <ul className="list-disc list-inside">
                  <li>Fully compliant and ready-to-use business documents</li>
                  <li>Smooth and professional setup process</li>
                  <li>Peace of mind knowing everything is prepared correctly</li>
                  <li>Time and cost savings on legal and admin work</li>
                  <li>A confident launch, backed by strong documentation</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to build your foundation?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentSetup;
