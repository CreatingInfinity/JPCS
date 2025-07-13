import React, { useEffect } from "react";
import { cysIconImage, cyImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CyberRisk = () => {
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

    const animateSection = (id, offsetY = 0) => {
      gsap.fromTo(
        `#${id}`,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: `#${id}`,
            start: "-50% center",
            end: "center 30%",
            scrub: true,
          },
          opacity: 1,
          duration: 1.5,
          y: offsetY,
        }
      );
    };

    gsap.fromTo(
      "#cysIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#cysIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    animateSection("section1", 0);
    animateSection("section2", 150);
    animateSection("section3", 0);
    animateSection("section4", 150);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={cyImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Cyber Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CYBER RISK
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="cysIcon"
              src={cysIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Cyber Risk Icon"
            />
            <p className="text-base md:text-lg font-semibold font- leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              In today’s increasingly connected world, cyber threats — such as data breaches, ransomware, and phishing — are not just technical issues, but serious business risks. Managing cyber risk involves identifying these threats, assessing their potential impact, and implementing proactive measures to protect your organization.
              <br />
              <br />
              At JP Consulting & Services, we help businesses stay ahead of cyber threats by offering strategic risk assessments, security policy development, training, and compliance support — so you can operate confidently and securely in a digital environment.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">PROTECTING</span> YOUR FUTURE IN A DIGITAL WORLD</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Strategic Protection, Real Peace of Mind</span>
                At JP Consulting & Services, we understand that in today’s digital age, cybersecurity is business security. Our Cyber Risk services are designed to identify, assess, and mitigate threats before they impact your operations. We empower your business to stay secure, compliant, and resilient — even in an evolving risk landscape.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">TAILORED</span> RISK MANAGEMENT</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Custom Cyber Defense Solutions</span>
                We don’t offer generic security checklists — we provide tailored strategies that address your industry, infrastructure, and business needs. From startups to enterprise-level organizations, we help you safeguard what matters most.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">KNOW</span> YOUR THREATS</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Visibility is the First Step to Security</span>
                Cyber threats can strike at any time — data breaches, phishing attacks, ransomware, and insider threats are just a few risks modern businesses face. We help you identify vulnerabilities across your systems and create a proactive defense plan.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Cyber Risks We Address</p>
                <ul className="list-disc list-inside">
                  <li>Data breaches and information leaks</li>
                  <li>Ransomware and malware attacks</li>
                  <li>Phishing and social engineering threats</li>
                  <li>Weak internal access control</li>
                  <li>Non-compliance with data protection laws (e.g., GDPR, HIPAA)</li>
                  <li>Outdated security infrastructure</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE</span> PROTECT YOUR BUSINESS</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Strategic Innovation Consulting</span>
                🔍 Risk Assessments: Discover system vulnerabilities before attackers do
                <br />
                🔐 Policy Development: Define clear cybersecurity guidelines and employee protocols
                <br />
                🧠 Awareness Training: Educate your team to recognize and avoid common threats
                <br />
                🧰 Technology Integration: Implement modern, effective security tools
                <br />
                📄 Compliance Support: Ensure your systems align with legal and industry regulations
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Reduced risk of cyber attacks and business downtime</li>
                  <li>Stronger data privacy and regulatory compliance</li>
                  <li>Increased trust from clients, investors, and partners</li>
                  <li>Long-term protection through continuous improvement</li>
                  <li>Peace of mind knowing your digital assets are secure</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to secure your digital future?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberRisk;
