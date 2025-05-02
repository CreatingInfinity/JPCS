import React, { useEffect } from "react";
import { pubsIconImage, pubImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const PublicRelationManagement = () => {
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
      "#pubsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#pubsIcon",
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
        src={pubImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Public Relations Background"
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PUBLIC RELATION SERVICES
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Intro Icon & Paragraph */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="pubsIcon"
              src={pubsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="PR Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At <span className="orange">JP Consulting & Services</span>, Public Relations is about more than publicity — it's about building trust, shaping narratives, and making lasting connections. From launching brands to managing crises, we ensure your story is seen, heard, and remembered.
              <br />
              <br />
              Reputation is your most valuable asset. We help you protect it and grow it with clarity, purpose, and confidence.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-32">
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">BUILDING BRIDGES</span>, ELEVATING BRANDS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Your Reputation, Strategically Managed
                </span>
                From business launches to brand repositioning, our PR services are tailored to ensure every message aligns with your identity and connects authentically with your audience.
              </p>
            </section>

            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">COMMUNICATE</span> WITH PURPOSE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic Messaging That Drives Results</span>
                Whether it's media coverage, press releases, or stakeholder messaging, we craft clear, powerful stories that build credibility and drive engagement.
              </p>
            </section>

            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR IMAGE</span> MATTERS
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Perception is Power</span>
                Consistency, clarity, and trust — we help you shape how the world sees you.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Offer</p>
                <ul className="list-disc list-inside">
                  <li>Brand Reputation Management</li>
                  <li>Media Relations & Press Release Writing</li>
                  <li>Crisis Communication Planning</li>
                  <li>Stakeholder Messaging</li>
                  <li>PR Strategy & Campaign Planning</li>
                  <li>Event & Launch Communication</li>
                  <li>Internal Communication Support</li>
                </ul>
              </div>
            </section>

            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">OUR IMPACT</span> IN ACTION
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Comprehensive PR Solutions</span>
                From reputation management to crisis response, we ensure you’re always ready to communicate with confidence.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Enhanced public perception</li>
                  <li>Greater media visibility</li>
                  <li>Improved communication with stakeholders</li>
                  <li>Proactive crisis readiness</li>
                  <li>Stronger brand trust and authority</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to elevate your public image?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicRelationManagement;
