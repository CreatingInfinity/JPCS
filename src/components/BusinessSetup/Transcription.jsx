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
        src={tranImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Transcription Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            TRANSCRIPTION
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="transIcon"
              src={transIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Transcription Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Transcription</span> is the art of
              transforming spoken content into written precision. Whether you're
              documenting meetings, interviews, or legal proceedings, our expert
              team delivers clarity, accuracy, and confidentiality—every time.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">TURNING CONVERSATIONS</span> INTO CLARITY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Accurate, Reliable, Professional</span>
                We deliver high-quality transcripts from business meetings to
                legal sessions—turning spoken word into powerful documentation.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR MESSAGE</span> PRESERVED PERFECTLY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Transcriptions</span>
                From technical jargon to industry-specific context, we adapt to
                your voice and deliver exactly what your team needs.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">WE UNDERSTAND</span> WHAT YOU VALUE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Precision, Confidentiality, Speed</span>
                Trust us with your most critical audio—we handle it with care and urgency.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Transcribe</p>
                <ul className="list-disc list-inside">
                  <li>Business Meetings & Board Sessions</li>
                  <li>Interviews & Focus Groups</li>
                  <li>Webinars & Conferences</li>
                  <li>Legal & Compliance Proceedings</li>
                  <li>Training Sessions & Workshops</li>
                  <li>Podcasts & Marketing Content</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP</span> YOUR BUSINESS MOVE FORWARD
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Smart Transcription Solutions</span>
                We provide secure, accurate, and timely transcripts to elevate
                your business communications.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Searchable, editable transcripts</li>
                  <li>Improved documentation and compliance</li>
                  <li>Enhanced communication and collaboration</li>
                  <li>Repurpose audio content effectively</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to capture your conversations with clarity?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcription;
