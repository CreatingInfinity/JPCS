import React, { useEffect } from "react";
import { disIconImage, diImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DigitalContent = () => {
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
      "#disIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#disIcon",
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
        src={diImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Digital Content Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            DIGITAL CONTENT
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="disIcon"
              src={disIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Digital Content Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">Digital Content Management</span> is the
              process of organizing, storing, creating, and maintaining digital
              content across various platforms to ensure consistency, efficiency,
              and brand alignment. It involves handling everything from website
              content and blogs to social media, internal documents, and digital
              assets. 
              <br />
              <br />
              At JP Consulting & Services, we help businesses streamline their
              content operations, ensuring that every piece of content is on-brand,
              up-to-date, and strategically aligned with your goals.
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
                <span className="orange">OUR PROMISE</span> TO YOU
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Transformative Results, Tailored to Your Business
                </span>
                Our content management solutions ensure that your business is
                positioned for scalability and sustained growth with organized,
                efficient content operations that save you time and prevent costly
                errors.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR CONTENT</span> STRATEGY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Optimized Content</span>
                We align your digital content with your business objectives,
                optimizing its performance across different channels, from your
                website and blog to social media and beyond.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">CONTENT MANAGEMENT</span> BEST PRACTICES
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Your Needs Are Our Priority</span>
                From content planning and creation to content archiving and
                retrieval, we ensure your content is easily accessible and supports
                your business goals effectively.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Challenges We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Content clutter and inefficiencies</li>
                  <li>Content governance and version control</li>
                  <li>Content collaboration and approval bottlenecks</li>
                  <li>Content distribution across multiple platforms</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Custom Content Services</span>
                From strategy development to content optimization, we work with you
                to enhance the efficiency, quality, and reach of your digital content
                operations.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Streamlined content creation and publishing</li>
                  <li>Improved collaboration and approvals</li>
                  <li>Better content discovery and engagement</li>
                  <li>Increased brand consistency across channels</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to streamline your
              content operations?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalContent;
