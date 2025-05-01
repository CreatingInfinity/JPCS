import React, { useEffect } from "react";
import { resIconImage, reImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

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
    <div className="relative">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">RESUME</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-10">
            JP Consulting & Services
          </h2>
        </div>

        {/* Content Section */}
        <div className="bgSVG py-20 px-4 md:px-20">
          {/* Icon + Intro Paragraph */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <img id="resIcon" src={resIconImage} alt="Resume Icon" className="h-60 md:h-80 rounded-lg" />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              A resume is a concise document that highlights a person's professional experience, education,
              skills, and achievements. It serves as a personal marketing tool, providing potential employers
              with a quick overview of who you are, what you’ve accomplished, and what you can bring to their
              organization. <br /><br />
              At JP Consulting & Services, we view the resume as more than just a list of experiences — it’s
              a strategic document that tells your career story and sets the tone for future opportunities.
            </p>
          </div>

          {/* Section 1 & 2 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20">
            <div id="section1" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">CRAFTED FOR IMPACT</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Highlight Your Strengths. Stand Out with Confidence.</span>
                At JP Consulting & Services, our Resume Editing service is designed to help professionals
                present their skills, experiences, and career goals with clarity and impact.
              </p>
            </div>

            <div id="section2" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">YOUR STORY, PROFESSIONALLY TOLD</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Personalized Resume Strategy</span>
                We don’t just edit resumes — we refine your professional narrative. By understanding your
                background and career goals, we optimize your resume to showcase your value and help you stand out.
              </p>
            </div>
          </section>

          {/* Section 3 & 4 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start">
            <div id="section3" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">YOUR SUCCESS STARTS HERE</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Clarity and Strategy Built In</span>
                Recruiters often spend less than 10 seconds reviewing a resume. We sharpen your message,
                highlight achievements, and align your resume with job market expectations.
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">WHAT WE PROVIDE</span>
                <ul className="list-disc list-inside text-left">
                  <li>Executive Resumes</li>
                  <li>Entry-Level & Graduate CVs</li>
                  <li>Career Transition Resumes</li>
                  <li>Industry-Specific Formats (Tech, Finance, Creative, etc.)</li>
                  <li>LinkedIn Profile Optimization (optional add-on)</li>
                </ul>
              </div>
            </div>

            <div id="section4" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">HOW WE ENHANCE YOUR RESUME</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Strategic Resume Editing Services</span>
                ✍️ Professional Tone & Language<br />
                🧠 Formatting & Design<br />
                🚀 Achievement-Focused<br />
                🔍 Keyword Optimization
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">YOUR BENEFITS:</span>
                <ul className="list-disc list-inside text-left">
                  <li>A resume that reflects your strengths and value</li>
                  <li>Increased interview callbacks and recruiter interest</li>
                  <li>Better alignment with target roles and industries</li>
                  <li>Enhanced confidence in your job search</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background Image */}
      <img src={reImage} className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0" alt="Background" />
    </div>
  );
};

export default Resume;
