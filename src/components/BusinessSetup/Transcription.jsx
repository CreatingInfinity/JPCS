import React, { useEffect } from "react";
import { transIconImage, tranImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Transcription = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    const sections = ["#transIcon", "#section1", "#section2", "#section3", "#section4"];
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
        {/* Hero Header */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            TRANSCRIPTION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-10">
            JP Consulting & Services
          </h2>
        </div>

        {/* Main Content */}
        <div className="bgSVG py-20 px-4 md:px-20">
          {/* Intro Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-16">
            <img
              id="transIcon"
              src={transIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Transcription Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              Transcription is the process of converting spoken words from audio or video recordings into accurate, written text. At JP Consulting & Services, our transcription solutions are tailored for clarity, precision, and confidentiality. Whether it’s business meetings, interviews, webinars, or legal content, we ensure every word is professionally captured to support documentation, analysis, and communication.
            </p>
          </div>

          {/* Section 1 & 2 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20">
            <div id="section1" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">TURNING CONVERSATIONS INTO CLARITY</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Accurate, Reliable, and Professional</span>
                Our Transcription Services ensure your spoken words become high-quality written content. From meetings to legal proceedings — we deliver clear, professional transcripts every time.
              </p>
            </div>
            <div id="section2" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">YOUR MESSAGE, PRESERVED PERFECTLY</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Tailored Transcriptions for Every Industry</span>
                We go beyond converting audio to text. With understanding of your industry’s tone and terminology, we deliver contextual and actionable transcripts.
              </p>
            </div>
          </section>

          {/* Section 3 & 4 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start">
            <div id="section3" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">WE UNDERSTAND WHAT YOU VALUE</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Precision, Confidentiality, and Speed</span>
                We treat your content with care. Expect timely, secure, and accurate transcripts — even for sensitive business or legal recordings.
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">WHAT WE TRANSCRIBE</span>
                <ul className="list-disc list-inside text-left">
                  <li>Business Meetings & Board Sessions</li>
                  <li>Interviews & Focus Groups</li>
                  <li>Webinars & Conferences</li>
                  <li>Legal & Compliance Proceedings</li>
                  <li>Training Sessions & Workshops</li>
                  <li>Podcasts & Marketing Content</li>
                </ul>
              </div>
            </div>
            <div id="section4" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">HOW WE HELP YOUR BUSINESS MOVE FORWARD</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Smart Transcription Solutions</span>
                🔍 Verbatim or Edited Transcripts<br />
                📈 Business-Ready Output<br />
                🛡️ Confidential & Secure Handling<br />
                ⏱️ Quick Turnaround
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">YOUR BENEFITS:</span>
                <ul className="list-disc list-inside text-left">
                  <li>Convert speech to searchable, editable content</li>
                  <li>Improve record-keeping and documentation</li>
                  <li>Enhance communication with transcripts</li>
                  <li>Repurpose audio into business content</li>
                  <li>Ensure legal and corporate compliance</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background Image */}
      <img src={tranImage} className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0" alt="Transcription Background" />
    </div>
  );
};

export default Transcription;
