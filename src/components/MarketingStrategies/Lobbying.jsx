import React, { useEffect } from "react";
import { losIconImage, loImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Lobbying = () => {
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
      "#losIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#losIcon",
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
        src={loImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Lobbying Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            LOBBYING ACTIVITIES
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="losIcon"
              src={losIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Lobbying Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Lobbying activities involve strategically engaging with government officials, policymakers, and regulatory bodies to influence legislation, policy decisions, and public regulations that directly affect your business.
              <br />
              <br />
              At JP Consulting & Services, we act as your trusted advocates — representing your business interests, ensuring your voice is heard, and guiding you through complex political and regulatory environments. Our goal is to help shape outcomes that create opportunities, reduce risks, and protect your strategic goals.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">OUR PROMISE</span> TO YOU</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Influence with Integrity
                </span>
                At JP Consulting & Services, our Lobbying Activities are rooted in a deep understanding of policy, regulation, and business impact. We represent your voice in the corridors of power — engaging with government bodies, industry regulators, and decision-makers to advocate for policies that support your growth and protect your interests.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR PATH</span> TO SUCCESS</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Advocacy That Aligns with Your Vision</span>
                We don’t just lobby — we align your goals with strategic messaging, ensuring your business needs are heard, understood, and prioritized. From small businesses to growing enterprises, we create customized lobbying strategies that speak directly to those who matter.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">UNDERSTAND</span> YOUR CHALLENGES</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Policy Expertise. Political Insight. Business Impact.</span>
                Navigating regulatory systems and government processes can be overwhelming. We take the complexity out of the process — tracking relevant legislation, identifying opportunities for influence, and helping you stay ahead of change.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Lobbying Services We Provide</p>
                <ul className="list-disc list-inside">
                  <li>Legislative Research & Policy Monitoring</li>
                  <li>Stakeholder Engagement & Government Relations</li>
                  <li>Position Papers & Regulatory Submissions</li>
                  <li>Meeting Coordination with Policymakers</li>
                  <li>Strategy Development for Advocacy Campaigns</li>
                  <li>Representation at Hearings, Forums, and Consultations</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOUR BUSINESS GROW</h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Proactive Government Affairs</span>
                🏛️ Direct Representation: We act on your behalf with credibility and professionalism<br />
                📜 Policy Influence: Shape outcomes that impact your business and industry<br />
                🤝 Relationship Building: Connect you with key stakeholders and decision-makers<br />
                🎯 Strategic Messaging: Communicate your needs clearly and persuasively
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>A stronger voice in industry and government affairs</li>
                  <li>Access to timely, relevant policy updates</li>
                  <li>Better alignment with regulatory changes and opportunities</li>
                  <li>Increased influence over business-relevant legislation</li>
                  <li>A proactive partner safeguarding your long-term interests</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to shape your future with our lobbying services?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobbying;
