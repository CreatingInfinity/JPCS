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
      "#resIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#resIcon",

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
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-6xl bold opacity-1 text-amber-400 tracking-wide">
            RESUME
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="resIcon"
              src={resIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              A resume is a concise document that highlights a person's
              professional experience, education, skills, and achievements. It
              serves as a personal marketing tool, providing potential employers
              with a quick overview of who you are, what you’ve accomplished,
              and what you can bring to their organization. In today’s
              competitive job market, a well-crafted resume is essential for
              making a strong first impression. It not only outlines your
              qualifications but also reflects your professionalism, attention
              to detail, and ability to communicate effectively. <br />
              <br />
              At JP Consulting & Services, we view the resume as more than just
              a list of experiences — it’s a strategic document that tells your
              career story and sets the tone for future opportunities.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  CRAFTED FOR IMPACT
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Highlight Your Strengths. Stand Out with Confidence.
                  </span>
                  At JP Consulting & Services, our Resume Editing service is
                  designed to help professionals present their skills,
                  experiences, and career goals with clarity and impact. Whether
                  you're entering the job market, making a career shift, or
                  aiming for a leadership role, we ensure your resume is
                  tailored, powerful, and ready to impress.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR STORY, PROFESSIONALLY TOLD
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Personalized Resume Strategy
                  </span>
                  We don’t just edit resumes — we refine your professional
                  narrative. By understanding your background, industry, and
                  career goals, we optimize your resume to showcase your unique
                  value and help you stand out to employers and recruiters.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR SUCCESS STARTS HERE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Clarity and Strategy Built In
                  </span>
                  Recruiters often spend less than 10 seconds reviewing a
                  resume. We make every second count by sharpening your message,
                  highlighting achievements, and aligning your resume with job
                  market expectations.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE PROVIDE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Executive Resumes</li>
                    <li>Entry-Level & Graduate CVs</li>
                    <li>Career Transition Resumes</li>
                    <li>
                      Industry-Specific Formats (Tech, Finance, Creative, etc.)
                    </li>
                    <li>LinkedIn Profile Optimization (optional add-on)</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE ENHANCE YOUR RESUME
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Strategic Resume Editing Services
                  </span>
                  ✍️ Professional Tone & Language: Clear, concise, and impactful
                  wording<br></br>
                  🧠 Formatting & Design: Modern, recruiter-friendly layout{" "}
                  <br></br>
                  🚀 📈 Achievement-Focused: Emphasize results and career
                  milestones<br></br>
                  🔍 Keyword Optimization: Align with industry and job-specific
                  keywords
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>A resume that reflects your strengths and value</li>
                    <li>
                      Increased interview callbacks and recruiter interest
                    </li>
                    <li>
                      Better alignment with your target roles and industries
                    </li>
                    <li>Enhanced confidence in your job search</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
               
      </div>
      <img src={reImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Resume;
