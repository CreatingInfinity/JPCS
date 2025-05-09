import React, { useEffect } from "react";
import { vipsIconImage, vipImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Vip = () => {
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
      "#vipsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#vipsIcon",
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
        src={vipImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Blueprint Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            VIP MEDICAL AND EMIRATES ID
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG  text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="blueprintIcon"
              src={vipsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Blueprint Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              <span className="orange">At JP Consulting & Services,</span> we understand that time is valuable — especially when you’re setting up a new business or relocating talent to the UAE. Our VIP Medical & Emirates ID Services are designed to streamline two of the most essential steps in the residency and visa process, helping you or your employees save time, avoid delays, and focus on what matters most: building success.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">PREMIUM SOLUTIONS  </span>FOR A HASSLE-FREE EXPERIENCE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                 Fast-Track Your Government Requirements
                </span>
               At JP Consulting & Services, we streamline your journey through the UAE’s medical and Emirates ID processes with our VIP solutions. From appointment booking to final approvals, we handle every step with efficiency and care — saving you time, effort, and stress.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR PATH  </span> TO SWIFT COMPLIANCE</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Seamless, End-to-End Coordination</span>
                We understand how overwhelming government procedures can be. That’s why we manage the entire process — medical testing, application submissions, and biometric data collection — ensuring you're always one step ahead without delays or confusion.


              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR NEEDS,</span> OUR PRIORITY</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Personalized Assistance with Expert Oversight</span>
               Whether you're setting up a business or sponsoring employees and family, we tailor our approach to match your needs. Our deep understanding of UAE protocols allows us to deliver results quickly while keeping you informed at every stage.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Long appointment wait times</li>
                  <li>Confusing documentation and requirements</li>
                  <li>Delays in Emirates ID issuance</li>
                  <li>Missed deadlines for visa or ID processing</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOU MOVE FASTER</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">VIP GOVERNMENT SERVICE MANAGEMENT</span>
                <li>Medical Testing: Priority access to approved clinics and expedited test results</li>
                <li> Emirates ID Processing: Fast-track biometric appointments and application follow-up</li>
                <li>Complete Documentation Support: We handle all forms and submissions</li>
                <li> Corporate & Family Packages: Scalable solutions for individuals or businesses</li>
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Save time with expedited service channels</li>
                  <li>Avoid mistakes and resubmissions</li>
                  <li>Peace of mind with a guided, end-to-end experience</li>
                  <li>Focus on your business while we manage the paperwork</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Hassle</span> Free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip;
