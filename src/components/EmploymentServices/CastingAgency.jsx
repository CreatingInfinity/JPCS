import React, { useEffect } from "react";
import { castsIconImage, castImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CastingAgency = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    gsap.fromTo(
      "#castsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#castsIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    const sections = ["section1", "section2", "section3", "section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        `#${id}`,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: `#${id}`,
            start: `${-80 + index * 20}% center`,
            end: "center 30%",
          },
          opacity: 1,
          duration: 1.5,
          y: 0,
        }
      );
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={castImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Casting Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CASTING AGENCY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="castsIcon"
              src={castsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Casting Icon"
            />
            <p className="text-base md:text-lg font-semibold font- leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, our <span className="orange">Casting Agency</span> discovers and connects
              top-tier talent with extraordinary opportunities. Whether for screen, stage, or brand
              representation, we help bring visions to life with the right faces and voices.
              <br />
              <br />
              Our talent solutions are designed for seamless integration into your production,
              delivering both professionalism and performance.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">FINDING THE RIGHT</span> FACES FOR YOUR VISION
              </h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Talent That Brings Your Brand to Life</span>
                Our agency specializes in matching charismatic talent with the needs of your creative
                vision—whether it’s commercials, corporate videos, or feature films.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR CAST</span>, YOUR MESSAGE
              </h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Tailored Talent Solutions</span>
                From emerging performers to seasoned professionals, we ensure the right individuals
                represent your story with authenticity and charisma.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">WE UNDERSTAND</span> YOUR CREATIVE NEEDS
              </h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Precision, Professionalism, and Performance</span>
                Our casting directors bring an eye for talent and alignment, analyzing your script,
                tone, and target audience to create perfect-fit casting rosters.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Deliver</p>
                <ul className="list-disc list-inside">
                  <li>Diverse, curated talent pool</li>
                  <li>Creative alignment with scripts & vision</li>
                  <li>Efficient coordination & scheduling</li>
                  <li>Industry-proven relationships</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE SUPPORT</span> YOUR PRODUCTION
              </h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">End-to-End Talent Management</span>
                We handle everything—from auditions to contracts—so you can focus on direction,
                story, and delivery.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Advantages</p>
                <ul className="list-disc list-inside">
                  <li>Streamlined selection process</li>
                  <li>Reliable on-set support</li>
                  <li>Custom casting packages</li>
                  <li>Deadline-oriented execution</li>
                  <li>Ongoing talent partnerships</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Let’s cast your next success story</span> with JP Consulting & Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastingAgency;
