import React, { useEffect } from "react";
import { hosIconImage, hoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HospitalityConsultancy = () => {
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
      "#hosIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#hosIcon",
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
        src={hoImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Hospitality Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            HOSPITALITY MANAGEMENT
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="hosIcon"
              src={hosIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Hospitality Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Hospitality Management Consultancy focuses on improving the performance, service quality, and profitability of businesses in the hospitality sector, including hotels, resorts, restaurants, and tourism services. It involves strategic planning, operational audits, staff training, branding, and guest experience optimization to ensure long-term success in a highly competitive industry.
              <br />
              <br />
              At JP Consulting & Services, we partner with hospitality brands to elevate their standards, streamline operations, and deliver exceptional guest experiences. Whether you're launching a new concept or refining an existing one, our expert guidance helps you stand out, grow sustainably, and exceed guest expectations at every level.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">OUR PROMISE</span> TO YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Excellence That Delivers Results</span>
                At JP Consulting & Services, we specialize in guiding hospitality businesses toward operational excellence, guest satisfaction, and sustainable growth. From boutique hotels to full-service resorts, our tailored consultancy approach is designed to elevate your brand and enhance every aspect of your operations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR VISION, OUR EXPERTISE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Customized Strategies for Every Property</span>
                No two properties are the same. We dive deep into your business model, location, market, and brand to develop a comprehensive strategy that meets your specific needs — whether you're launching a new hospitality concept or improving an existing one.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">WE KNOW THE INDUSTRY</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Hospitality Challenges, Solved with Precision</span>
                In today’s competitive landscape, the smallest detail can define the guest experience. Our expert consultants help you overcome industry challenges by optimizing service standards, improving operations, and creating memorable customer journeys.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Inefficient operational workflows</li>
                  <li>Inconsistent guest experiences</li>
                  <li>Outdated technology or booking systems</li>
                  <li>Staff training and retention challenges</li>
                  <li>Low occupancy rates and revenue management issues</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP YOU GROW</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic Consulting, Real-World Impact</span>
                🏨 Operational Assessment: Evaluate and refine your service model
                <br />
                💡 Brand Positioning: Strengthen your identity in the market
                <br />
                📈 Revenue Optimization: Increase profitability through strategic pricing and sales planning
                <br />
                🧑‍🤝‍🧑 Staff Development: Build service excellence through training and leadership development
                <br />
                🌐 Digital Integration: Enhance online presence and booking systems for seamless guest journeys
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Elevated guest satisfaction and brand reputation</li>
                  <li>Stronger operational systems and staff performance</li>
                  <li>Higher occupancy and improved revenue streams</li>
                  <li>Competitive advantage in a dynamic industry</li>
                  <li>Long-term growth driven by strategic insight</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalityConsultancy;
