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
      "#documentsIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#documentsIcon',

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
          <h1 className="text-6xl bold opacity-1     text-orange-500    tracking-wide">
            DOCUMENT EDITING
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="documentsIcon"
              src={documentsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Document Editing is the process of reviewing and refining business documents to ensure clarity, accuracy, consistency, and professionalism. It involves correcting grammar, punctuation, and formatting issues while improving the overall structure, tone, and effectiveness of the content.

              In a business setup context, document editing plays a crucial role in making sure all legal, operational, and strategic materials meet industry standards and clearly communicate your goals. Whether it’s business plans, contracts, proposals, or internal policies, professionally edited documents help build credibility, reduce risk, and present your brand in the best light.

              {" "}

              
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                  ELEVATING YOUR BUSINESS THROUGH CLARITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Polished Documents, Powerful Impact
                  </span>
                  At JP Consulting & Services, our Document Editing service goes beyond correcting grammar, we enhance the professionalism, clarity, and structure of your critical business documents. Whether you're preparing proposals, agreements, or internal policies, we ensure your words represent your brand with precision and purpose.
                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                YOUR BUSINESS, YOUR VOICE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Tailored Editing with a Strategic Approach</span>
                  We believe every document tells a story. That’s why we work closely with you to understand your goals and message, editing content to align with your tone, audience, and brand identity. The result? Clear, compelling communication that supports your business objectives.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                WE UNDERSTAND WHAT’S AT STAKE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Accuracy and Credibility Matter</span>
                  Inaccurate or poorly written documents can lead to misunderstandings, delays, or even legal issues. Our expert editors help you avoid these risks by ensuring every word reflects clarity, consistency, and confidence.challenges and help you
                  unlock your business's full potential.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE EDIT</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Business Plans</li>
                    <li>Company Profiles</li>
                    <li>Contracts & Agreements</li>
                    <li>Proposals & Presentations</li>
                    <li>Policy Documents & Manuals</li>
                    <li>MOUs and Legal Drafts</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE SUPPORT YOUR GROWTH
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Strategic Editing Services</span>
                  ✍️ Content Clarity: Ensure messages are concise and impactful<br></br>

                  🧠 Structural Improvements: Organize ideas for better flow <br></br>

                  ✅ Proofreading & Grammar Checks: Eliminate errors and polish tone <br></br>

                  🎯 Compliance & Consistency: Align with business standards and formatting rules

                  make your business more efficient and
                                    competitive.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Professional, brand-aligned documentation
                    </li>
                    <li>Improved readability and communication impact</li>
                    <li>
                    Enhanced credibility with partners, investors, and clients
                    </li>
                    <li>
                    Reduced risk of miscommunication or compliance issues
                    </li>
                    <li>A strong, professional foundation for business growth</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
               

      </div>
      <img src={documenteImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default DocumentEditing;
