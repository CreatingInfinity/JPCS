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
        { x: 0, duration: 1, delay: .5, opacity: 1 },
        1
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 },
        1
      );
    gsap.fromTo(
      "#setsIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#setsIcon',

          start: 'top center',
          end: '20% 30%',
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    gsap.fromTo(
      "#section1",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section1',

          start: '-80% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section2",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section2',

          start: '-50% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );
    gsap.fromTo(
      "#section3",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section3',

          start: '-50% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section4",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section4',

          start: '-20% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );

  });
  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-6xl bold opacity-1 text-amber-400 tracking-wide">
            DOCUMENT SETUP
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="setsIcon"
              src={setsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Document Setup is the process of preparing, organizing, and formatting all essential business documents required for launching and operating a company. This includes legal forms, internal policies, agreements, and compliance paperwork — all customized to your specific business structure and regulatory requirements.
              {" "}
              <br />
              <br />
              At JP Consulting & Services, we provide end-to-end Document Setup support to ensure your business is built on a strong, legally sound foundation. From company registration papers to operational manuals, we take care of the paperwork so you can focus on growing your business with confidence.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                  BUILDING THE FOUNDATION FOR YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Structured, Compliant, and Ready for Growth
                  </span>
                  At JP Consulting & Services, our Document Setup service ensures your business is built on a solid legal and operational foundation. From registration forms to internal policies, we prepare every essential document you need to launch, structure, and scale with confidence. </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                  YOUR FIRST STEP TO SUCCESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Everything in Place, Right from the Start</span>
                  We take the stress out of paperwork. Our team handles the creation and organization of your key business documents, tailored to your business model, industry, and jurisdiction. You focus on building your vision — we’ll handle the formalities.   </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                  WE KNOW WHAT YOU NEED
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Compliance and Accuracy, Every Time</span>
                  Incorrect or missing documentation can delay your operations or put your business at risk. Our experts ensure everything is complete, compliant, and professionally prepared — so you’re always one step ahead.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE SET UP</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Company Registration Documents</li>
                    <li>Articles of Incorporation / Memorandum of Association</li>
                    <li>Non-Disclosure Agreements (NDAs)</li>
                    <li>Company Policies & Manuals</li>
                    <li>Business Plan Drafts & Profiles</li>
                    <li>Government and Regulatory Forms</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                  HOW WE MAKE IT EASY FOR YOU
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">End-to-End Setup Support</span>
                  📝 Document Drafting: We create clear, legally sound documents from scratch<br></br>

                  🧩 Customization: Every document is tailored to your business structure <br></br>

                  ✅ Compliance Assurance: We ensure your documentation meets local regulations and industry standards<br></br>

                  📁 Organized & Accessible: We prepare your files for easy use, submission, and storage
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                      Fully compliant and ready-to-use business documents
                    </li>
                    <li>Smooth and professional setup process</li>
                    <li>
                      Peace of mind knowing everything is prepared correctly
                    </li>
                    <li>
                      Time and cost savings on legal and admin work
                    </li>
                    <li>A confident launch, backed by strong documentation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="h-screen bg-gray-100 border-t-2 border-black pt-30 space-y-10">
          <p className="bold text-4xl text-center">
            <span className="text-amber-600">JP</span> Consulting & Services
          </p>
          <p className="text-center josefin text-2xl">
            Success is a journey, not a destination.
          </p>
          <div className=" flex flex-col gap-5 bg-amber-400 shadow rounded-lg items-center p-5 mx-25">
            <p className="text-justify w-200 josefin text-lg font-semibold">
              We work closely with businesses to understand their specific needs
              and challenges. By offering personalized solutions, we help
              clients navigate complex problems and unlock new opportunities for
              success. From streamlining operations to strategic planning, we
              aim to enhance your business performance, fostering long-term
              growth and stability. Together, we empower your business to
              achieve its full potential.
            </p>
            <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
            <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              More About Us
            </button>
          </div>
        </div>
      </div>
      <img src={setImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default DocumentSetup;
