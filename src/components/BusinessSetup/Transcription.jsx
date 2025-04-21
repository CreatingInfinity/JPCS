import React, { useEffect } from "react";
import { transIconImage, tranImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Transcription = () => {
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
      "#transIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#transIcon",

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
            TRANSCRIPTION
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="transIcon"
              src={transIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Transcription is the process of converting spoken words from audio
              or video recordings into accurate, written text. At JP Consulting
              & Services, our transcription solutions are tailored for clarity,
              precision, and confidentiality. Whether it’s business meetings,
              interviews, webinars, or legal content, we ensure every word is
              professionally captured to support documentation, analysis, and
              communication.{" "}
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  TURNING CONVERSATIONS INTO CLARITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Accurate, Reliable, and Professional
                  </span>
                  At JP Consulting & Services, our Transcription Services ensure
                  that your spoken words are transformed into high-quality
                  written content. Whether it's meetings, interviews, webinars,
                  or legal proceedings — we deliver clear, precise transcripts
                  that capture every detail with accuracy and professionalism.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR MESSAGE, PRESERVED PERFECTLY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Tailored Transcriptions for Every Industry
                  </span>
                  We don’t just convert audio to text — we understand context,
                  industry-specific terminology, and your business tone. Each
                  transcription is customized to reflect the style and clarity
                  you need, helping you preserve ideas, decisions, and insights
                  in a format that’s easy to share and act on.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  WE UNDERSTAND WHAT YOU VALUE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Precision, Confidentiality, and Speed
                  </span>
                  We know that every word counts. That’s why our team is
                  committed to providing transcriptions that are not only
                  accurate, but also secure and delivered on time. Whether it's
                  sensitive client discussions or internal strategy sessions —
                  your content is in trusted hands.
                </p>
                <div className="text-center flex flex-col gap-2">
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
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOUR BUSINESS MOVE FORWARD
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Smart Transcription Solutions
                  </span>
                  🔍 Verbatim or Edited Transcripts: Choose the format that fits
                  your need<br></br>
                  📈 Business-Ready Output: Professionally structured for
                  clarity and usability<br></br>
                  🛡️ Confidential & Secure Handling: Your files are safe and
                  protected<br></br>
                  ⏱️ Quick Turnaround: Get transcripts when you need them,
                  without compromise
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                      Save time by converting speech to searchable, editable
                      content
                    </li>
                    <li>Improve record-keeping and internal documentation</li>
                    <li>
                      Enhance communication with clear meeting notes and
                      summaries
                    </li>
                    <li>
                      Boost productivity by repurposing audio content into
                      business assets
                    </li>
                    <li>
                      Ensure compliance and accuracy in legal and corporate
                      settings
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ContactUsFooter />
      </div>
      <img src={tranImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Transcription;
