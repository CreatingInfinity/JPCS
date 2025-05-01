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

    const sections = ["#setsIcon", "#section1", "#section2", "#section3", "#section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-60% center",
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
      {/* Background image */}
      <img
        src={setImage}
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm -z-10"
        alt=""
      />

      {/* Main content */}
      <div className="relative z-10">
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white text-center px-4 pt-20 pb-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-orange-500 tracking-wide">
            DOCUMENT SETUP
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mt-2 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>

        <div className="w-full bgSVG px-4 py-20">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-black">
            <img
              id="setsIcon"
              src={setsIconImage}
              className="h-60 sm:h-80 rounded-lg"
              alt="Document Icon"
            />
            <p className="text-base sm:text-lg josefin font-semibold text-center lg:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              Document Setup is the process of preparing, organizing, and
              formatting all essential business documents required for launching
              and operating a company. This includes legal forms, internal
              policies, agreements, and compliance paperwork — all customized to
              your specific business structure and regulatory requirements. <br />
              <br />
              At JP Consulting & Services, we provide end-to-end Document Setup
              support to ensure your business is built on a strong, legally
              sound foundation.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-24 mt-20">
            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div
                id="section1"
                className="max-w-xl josefin space-y-5 text-center lg:text-left"
              >
                <p className="font-bold text-2xl">
                  BUILDING THE FOUNDATION FOR YOUR BUSINESS
                </p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">
                    Structured, Compliant, and Ready for Growth
                  </span>
                  At JP Consulting & Services, our Document Setup service
                  ensures your business is built on a solid legal and
                  operational foundation.
                </p>
              </div>

              <div
                id="section2"
                className="max-w-xl josefin space-y-5 text-center lg:text-left"
              >
                <p className="font-bold text-2xl">YOUR FIRST STEP TO SUCCESS</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">
                    Everything in Place, Right from the Start
                  </span>
                  We take the stress out of paperwork. Our team handles the
                  creation and organization of your key business documents.
                </p>
              </div>
            </section>

            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div
                id="section3"
                className="max-w-xl josefin space-y-5 text-center lg:text-left"
              >
                <p className="font-bold text-2xl">WE KNOW WHAT YOU NEED</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">
                    Compliance and Accuracy, Every Time
                  </span>
                  Incorrect or missing documentation can delay your operations
                  or put your business at risk.
                </p>
                <div className="text-left">
                  <span className="font-bold block mb-2">WHAT WE SET UP:</span>
                  <ul className="list-disc list-inside">
                    <li>Company Registration Documents</li>
                    <li>Articles of Incorporation / Memorandum of Association</li>
                    <li>Non-Disclosure Agreements (NDAs)</li>
                    <li>Company Policies & Manuals</li>
                    <li>Business Plan Drafts & Profiles</li>
                    <li>Government and Regulatory Forms</li>
                  </ul>
                </div>
              </div>

              <div
                id="section4"
                className="max-w-xl josefin space-y-5 text-center lg:text-left"
              >
                <p className="font-bold text-2xl">HOW WE MAKE IT EASY FOR YOU</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">End-to-End Setup Support</span>
                  📝 Document Drafting<br />
                  🧩 Customization<br />
                  ✅ Compliance Assurance<br />
                  📁 Organized & Accessible
                </p>
                <div className="text-left">
                  <span className="font-bold block mb-2">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside">
                    <li>Fully compliant and ready-to-use business documents</li>
                    <li>Smooth and professional setup process</li>
                    <li>Peace of mind knowing everything is prepared correctly</li>
                    <li>Time and cost savings on legal and admin work</li>
                    <li>A confident launch, backed by strong documentation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Spacer to separate from Contact or other sections */}
      <div className="h-24 w-full" />
    </div>
  );
};

export default DocumentSetup;
