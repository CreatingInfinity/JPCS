import React, { useEffect } from "react";
import { adsIconImage, adImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Advice = () => {
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
    gsap.fromTo(
      "#adsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#adsIcon",
          start: "top center",
          end: "20% 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section1",
          start: "-80% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section2",
          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section3",
          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section4",
          start: "-20% center",
          end: "center 30%",
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
        <div className="h-screen w-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-1 text-orange-500 tracking-wide">
            ADVICE
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className="pt-20 sm:pt-40 text-black flex flex-col sm:flex-row justify-center items-center gap-10">
            <img
              id="adsIcon"
              src={adsIconImage}
              className="h-60 sm:h-80 md:h-96 rounded-lg"
              alt="Advice Icon"
            />
            <p className="text-base sm:text-lg md:text-xl josefin font-semibold text-center sm:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, we provide strategic planning advice
              tailored to both private businesses and public service
              organizations. Our goal is to help leaders make informed, confident
              decisions that align with long-term objectives, operational
              capabilities, and evolving environments. <br />
              <br />
              We support your planning process by offering insights grounded in
              industry knowledge, data analysis, and real-world experience.
              Whether you're developing a new business model, improving public
              service delivery, or preparing for organizational change, our
              advisory services ensure your plans are structured, realistic, and
              results-driven. <br />
              <br />
              By identifying key challenges, clarifying goals, and aligning
              stakeholders, we help you turn vision into action — with a roadmap
              that’s both practical and sustainable.
            </p>
          </div>
          <div className="h-full space-y-10 sm:space-y-20 py-20 sm:py-40">
            <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-xl sm:text-2xl text-center">
                  BUILDING FOUNDATIONS FOR LONG-TERM SUCCESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Insightful Guidance, Informed Decisions
                  </span>
                  At JP Consulting & Services, we provide expert advice to
                  support businesses and public service organizations in their
                  planning processes. Whether you're launching a new initiative,
                  undergoing a transition, or setting long-term goals, we help
                  you plan with clarity, precision, and purpose.
                </p>
              </div>
              <div
                id="section2"
                className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center translate-y-10 sm:translate-y-0"
              >
                <p className="font-bold text-xl sm:text-2xl text-center">
                  YOUR PLAN, YOUR FUTURE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Tailored Planning Support</span>
                  No two organizations are the same — and your strategy
                  shouldn't be either. We collaborate closely with you to
                  understand your mission, assess challenges, and identify
                  opportunities. Our advice is grounded in practical experience
                  and designed to empower confident, well-informed decision-making.
                </p>
              </div>
            </section>
            <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-xl sm:text-2xl text-center">
                  UNDERSTAND YOUR ENVIRONMENT
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Navigating Complexity with Confidence
                  </span>
                  From evolving regulations to shifting market dynamics,
                  planning can be overwhelming. We break down complexity into
                  actionable steps, helping you stay ahead of change and aligned
                  with your objectives.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    HOW WE SUPPORT YOUR PLANNING PROCESS
                  </span>
                  <ul className="list-disc list-inside text-left">
                    <li>Business Model & Market Analysis</li>
                    <li>Operational & Capacity Planning</li>
                    <li>Strategic Goal-Setting</li>
                    <li>Risk Identification & Mitigation</li>
                    <li>Stakeholder Alignment & Communication</li>
                    <li>Policy and Public Service Frameworks</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center translate-y-10 sm:translate-y-0"
              >
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Clear, actionable plans aligned with your goals</li>
                    <li>
                      Confident decision-making rooted in data and experience
                    </li>
                    <li>Risk reduction through strategic foresight</li>
                    <li>Increased organizational efficiency and readiness</li>
                    <li>
                      Stronger alignment across teams, departments, or agencies
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img src={adImage} className="fixed blur-sm top-0 z-1" alt="Background" />
    </div>
  );
};

export default Advice;
