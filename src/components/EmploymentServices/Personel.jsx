import React, { useLayoutEffect } from "react";
import { persIconImage, perImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Personel = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          "h1",
          { x: 200, opacity: 0 },
          { x: 0, duration: 1, delay: 0.3, opacity: 1 }
        )
        .fromTo(
          "h2",
          { x: -200, opacity: 0 },
          { x: 0, duration: 1, delay: 0.2, opacity: 1 },
          "-=0.8"
        );

      const sections = ["#persIcon", "#section1", "#section2", "#section3", "#section4"];
      sections.forEach((id, i) => {
        gsap.fromTo(
          id,
          { y: 100, opacity: 0 },
          {
            scrollTrigger: {
              trigger: id,
              start: "top 80%",
              end: "bottom 60%",
              scrub: false,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Header */}
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PERSONNEL
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-2 josefin mb-12">
            JP Consulting & Services
          </h2>
        </div>

        {/* Content Section */}
        <div className="h-full bgSVG px-6 md:px-16">
          {/* Icon and Intro */}
          <div className="pt-20 flex flex-col md:flex-row gap-10 items-center justify-center text-black">
            <img
              id="persIcon"
              src={persIconImage}
              className="w-60 md:w-80 rounded-lg"
              alt=""
            />
            <p className="text-base md:text-lg josefin font-semibold max-w-xl leading-relaxed border-l-4 border-black pl-4 italic text-center md:text-left">
              At JP Consulting & Services, we support businesses by optimizing
              their personnel structure, improving team alignment, and implementing HR
              strategies that enhance efficiency and engagement...
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-28 mt-20">
            {/* Section Group 1 */}
            <section className="flex flex-col md:flex-row gap-12 justify-center items-start">
              <div id="section1" className="max-w-xl space-y-4 text-center md:text-left">
                <p className="font-bold text-2xl">
                  BUILDING YOUR TEAM, STRENGTHENING YOUR BUSINESS
                </p>
                <p>
                  <span className="font-bold block">
                    The Right People Make All the Difference
                  </span>
                  At JP Consulting & Services, we understand that a business is
                  only as strong as its people...
                </p>
              </div>

              <div id="section2" className="max-w-xl space-y-4 text-center md:text-left">
                <p className="font-bold text-2xl">
                  TAILORED TALENT STRATEGIES
                </p>
                <p>
                  <span className="font-bold block">
                    Built Around Your Business Needs
                  </span>
                  Every company is unique — and so are its staffing needs...
                </p>
              </div>
            </section>

            {/* Section Group 2 */}
            <section className="flex flex-col md:flex-row gap-12 justify-center items-start">
              <div id="section3" className="max-w-xl space-y-4 text-center md:text-left">
                <p className="font-bold text-2xl">
                  UNDERSTANDING YOUR TEAM CHALLENGES
                </p>
                <p>
                  <span className="font-bold block">We Focus on What Matters Most</span>
                  From inefficient hiring processes to high turnover rates...
                </p>
                <div>
                  <span className="font-bold block">PAIN POINTS WE SOLVE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Ineffective recruitment strategies</li>
                    <li>High employee turnover</li>
                    <li>Misaligned team roles</li>
                    <li>Lack of HR processes</li>
                    <li>Skills gaps</li>
                  </ul>
                </div>
              </div>

              <div id="section4" className="max-w-xl space-y-4 text-center md:text-left">
                <p className="font-bold text-2xl">
                  HOW WE HELP YOUR BUSINESS GROW
                </p>
                <p>
                  <span className="font-bold block">
                    Comprehensive Personnel Solutions
                  </span>
                  🧩 Recruitment Support...<br />
                  📊 Organizational Structuring...<br />
                  📘 Policy & Handbook Creation...<br />
                  🎯 Performance Management...<br />
                  🤝 Team Alignment Workshops...
                </p>
                <div>
                  <span className="font-bold block">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Stronger hiring decisions</li>
                    <li>Improved team cohesion</li>
                    <li>Clear HR documentation</li>
                    <li>Reduced turnover</li>
                    <li>Scalable growth</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={perImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt=""
      />
    </div>
  );
};

export default Personel;
