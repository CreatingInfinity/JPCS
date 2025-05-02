import React, { useEffect } from "react";
import { imsIconImage, imImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ImmigrationConsultancy = () => {
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
      "#imsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#imsIcon",
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
        src={imImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Immigration Consultancy Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            IMMIGRATION CONSULTANCY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="imsIcon"
              src={imsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Immigration Consultancy Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Immigration Consultancy involves guiding individuals, families, and businesses through the legal and procedural requirements of relocating to another country. At JP Consulting & Services, our Immigration Consultancy services are designed to simplify complex immigration laws, ensure compliance with all regulations, and support clients with every aspect of the process — from visa selection and document preparation to application submission and follow-ups.
              <br />
              <br />
              Whether you're seeking permanent residency, work permits, or business migration solutions, we provide expert advice and personalized strategies to help you achieve your global goals with confidence and clarity.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">NAVIGATING</span> BORDERS WITH CONFIDENCE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Strategic Guidance for Global Opportunities
                </span>
                At JP Consulting & Services, our Immigration Consultancy is designed to simplify complex immigration processes and empower individuals, families, and businesses to move forward with confidence. Whether you're seeking residency, work permits, or business migration solutions, we provide clear, compliant, and customized support every step of the way.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR GOALS,</span> OUR EXPERTISE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Personalized Immigration Solutions</span>
                We take the time to understand your unique situation, aspirations, and timeline — then build a tailored immigration strategy that aligns with your goals. From application to approval, we ensure every detail is accurate and every step is guided by experience.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR CHALLENGES,</span> OUR PRIORITY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Solving the Complexities of Immigration</span>
                Navigating visa regulations, legal documentation, and government processes can be overwhelming. Our consultants provide clarity, reduce stress, and handle the paperwork — so you can focus on your next chapter.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Services We Offer</p>
                <ul className="list-disc list-inside">
                  <li>Business & Investor Visas</li>
                  <li>Employment & Work Permits</li>
                  <li>Residency & Citizenship Applications</li>
                  <li>Family Sponsorship & Dependent Visas</li>
                  <li>Legal Document Review & Submission</li>
                  <li>Corporate Relocation & HR Support</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE SUPPORT</span> YOUR JOURNEY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Comprehensive Immigration Services</span>
                🧭 Consultation & Planning: Identify the right pathway based on your goals
                <br />
                📑 Documentation Support: Accurate, complete, and professionally prepared
                <br />
                💬 Government Liaison: Communicate and coordinate with relevant authorities
                <br />
                🔍 Compliance Assurance: Ensure all processes meet current legal standards
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Smooth and stress-free immigration process</li>
                  <li>Minimized risk of application rejection or delays</li>
                  <li>Expert handling of legal and compliance requirements</li>
                  <li>Strategic advice tailored to long-term relocation goals</li>
                  <li>Peace of mind through professional, end-to-end support</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to begin your journey to success?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationConsultancy;
