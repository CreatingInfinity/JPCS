import React, { useEffect } from "react";
import { alsIconImage, alImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Al = () => {
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
      "#alsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#alsIcon",
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
        <div className="h-screen w-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            A.I
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className="pt-20 px-4 text-black flex flex-col md:flex-row justify-center items-center gap-10">
            <img
              id="alsIcon"
              src={alsIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt=""
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, we help businesses embrace the power
              of innovation and artificial intelligence to stay competitive,
              agile, and future-ready. Our research-driven consultancy approach
              combines deep technical knowledge with strategic insight —
              enabling your business to unlock smarter, faster, and more
              impactful solutions.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center px-4">
              <div
                id="section1"
                className="w-full lg:w-1/2 h-auto josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  DRIVING THE FUTURE OF BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Innovation That Moves You Forward
                  </span>
                  At JP Consulting & Services, we help businesses unlock growth
                  and efficiency by embracing the power of innovation and
                  artificial intelligence. Our AI research and consultancy
                  services are designed to transform how you operate, analyze,
                  and evolve — making you more competitive in today’s digital
                  world.
                </p>
              </div>
              <div
                id="section2"
                className="w-full lg:w-1/2 h-auto josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  TURNING TECHNOLOGY INTO STRATEGY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Customized AI Solutions for Real-World Problems
                  </span>
                  We don’t just talk about innovation — we make it practical. We
                  take time to understand your challenges and opportunities,
                  then provide AI-driven strategies tailored to your operations.
                  From intelligent automation to data-powered decision-making,
                  we help you leverage cutting-edge tech to scale smartly.
                </p>
              </div>
            </section>
            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center px-4">
              <div
                id="section3"
                className="w-full lg:w-1/2 h-auto josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  INNOVATION WITH PURPOSE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Reimagine What’s Possible</span>
                  Innovation isn’t just about new ideas — it’s about applying
                  them with intent. Whether you're streamlining workflows or
                  exploring predictive analytics, our AI experts work alongside
                  your team to implement tools that fit your business, industry,
                  and vision.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">AREAS WE TRANSFORM</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Intelligent Process Automation</li>
                    <li>AI-Enhanced Customer Service</li>
                    <li>Data-Driven Business Intelligence</li>
                    <li>Predictive Analytics & Forecasting</li>
                    <li>Natural Language Processing (NLP) Solutions</li>
                    <li>Smart System Integration & Optimization</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-full lg:w-1/2 h-auto josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOU INNOVATE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Strategic Innovation Consulting
                  </span>
                  🧠 AI Strategy Development: Build a long-term roadmap aligned
                  with your goals
                  <br />
                  🤖 Custom AI Solution Design: Tailored systems that solve your
                  biggest challenges
                  <br />
                  📊 Data & Insight Analysis: Turn raw data into business
                  intelligence
                  <br />
                  🔁 Operational Integration: Seamless implementation across
                  departments
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                      Faster, smarter decision-making through real-time insights
                    </li>
                    <li>
                      Increased productivity with automated, intelligent systems
                    </li>
                    <li>Cost savings through optimized operations</li>
                    <li>
                      Competitive advantage with forward-thinking strategies
                    </li>
                    <li>A tech-enabled culture that’s ready for the future</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img
        src={alImage}
        className="fixed inset-0 w-full h-full object-cover blur-sm z-[-1]"
        alt=""
      />
    </div>
  );
};

export default Al;
