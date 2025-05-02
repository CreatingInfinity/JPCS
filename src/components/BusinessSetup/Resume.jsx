import React, { useEffect } from "react";
import { resIconImage, reImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        "h1",
        { x: 200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 }
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 }
      );

    const sections = ["#resIcon", "#section1", "#section2", "#section3", "#section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-80% center",
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
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={reImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Resume Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            RESUME
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="resIcon"
              src={resIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Resume Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              A resume is a concise document that highlights a person's professional experience, education, skills,
              and achievements. It serves as a personal marketing tool, providing potential employers with a quick
              overview of who you are, what you’ve accomplished, and what you can bring to their organization. <br />
              <br />
              At JP Consulting & Services, we view the resume as more than just a list of experiences — it’s a
              strategic document that tells your career story and sets the tone for future opportunities.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6 min-h-[250px]"
            >
              <h3 className="text-2xl font-bold"><span className="orange">CRAFTED FOR IMPACT</span></h3>
              <p className="text-base md:text-lg font-josefin">
                At JP Consulting & Services, our Resume Editing service is designed to help professionals present
                their skills, experiences, and career goals with clarity and impact.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6 min-h-[250px]"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR STORY, PROFESSIONALLY TOLD</span></h3>
              <p className="text-base md:text-lg font-josefin">
                We don’t just edit resumes — we refine your professional narrative. By understanding your background
                and career goals, we optimize your resume to showcase your value and help you stand out.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6 min-h-[250px] py-16"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR SUCCESS STARTS HERE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                Recruiters often spend less than 10 seconds reviewing a resume. We sharpen your message, highlight
                achievements, and align your resume with job market expectations.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Provide:</p>
                <ul className="list-disc list-inside">
                  <li>Executive Resumes</li>
                  <li>Entry-Level & Graduate CVs</li>
                  <li>Career Transition Resumes</li>
                  <li>Industry-Specific Formats (Tech, Finance, Creative, etc.)</li>
                  <li>LinkedIn Profile Optimization (optional add-on)</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6 min-h-[250px] py-16"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE ENHANCE YOUR RESUME</span></h3>
              <p className="text-base md:text-lg font-josefin">
                ✍️ Professional Tone & Language <br />
                🧠 Formatting & Design <br />
                🚀 Achievement-Focused <br />
                🔍 Keyword Optimization
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits:</p>
                <ul className="list-disc list-inside">
                  <li>A resume that reflects your strengths and value</li>
                  <li>Increased interview callbacks and recruiter interest</li>
                  <li>Better alignment with target roles and industries</li>
                  <li>Enhanced confidence in your job search</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to take your career to the next level?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
