import React, { useEffect } from "react";
import { itsIconImage, itImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ITSecurity = () => {
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
      "#itsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#itsIcon",
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
        src={itImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="IT Security Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            IT SECURITY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="itsIcon"
              src={itsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="IT Security Icon"
            />
            <p className="text-base md:text-lg font-semibold font- leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              IT Security refers to the strategies, tools, and practices used to
              protect your company’s digital infrastructure, data, and
              operations from cyber threats. At JP Consulting & Services, we
              provide robust IT security solutions designed to defend against
              hacking, data breaches, malware, and other cyber risks that could
              disrupt your business or compromise sensitive information. 
              <br />
              <br />
              From firewalls and network monitoring to data encryption and
              employee awareness training, our IT Security services are tailored
              to fit the unique needs of your business. We help you build a
              secure and resilient digital environment—ensuring business
              continuity, regulatory compliance, and peace of mind.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">PROTECTING</span> YOUR BUSINESS, SECURING YOUR FUTURE</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">
                  Comprehensive Protection. Strategic Peace of Mind.
                </span>
                At JP Consulting & Services, our IT Security solutions are
                built to safeguard your business from evolving cyber threats.
                From risk assessment to full-scale protection, we ensure your
                digital assets, customer data, and operational integrity
                remain secure—24/7.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR PATH</span> TO DIGITAL CONFIDENCE</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Customized Cybersecurity Strategies</span>
                We understand that no two businesses have the same security
                needs. That’s why we tailor our solutions to your
                infrastructure, industry, and goals—so you can operate with
                confidence, knowing your systems are resilient and protected.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">WE UNDERSTAND</span> WHAT’S AT RISK</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Cyber Threats Are Constant—So Are We</span>
                In today’s digital-first world, cyberattacks aren’t just
                threats; they’re daily realities. We help you stay ahead of
                risks like data breaches, ransomware, and system
                vulnerabilities by building a proactive, layered security
                defense around your business.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Secure</p>
                <ul className="list-disc list-inside">
                  <li>Company Networks & Servers</li>
                  <li>Cloud Environments & SaaS Platforms</li>
                  <li>Employee Devices & Endpoint Security</li>
                  <li>Business Applications & CRMs</li>
                  <li>Client Data & Intellectual Property</li>
                  <li>Remote Work Infrastructure</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOU STAY PROTECTED</h3>
              <p className="text-base md:text-lg font-">
                <span className="font-bold block">Strategic IT Security Services</span>
                🔍 Risk Assessment & Vulnerability Scanning
                <br />
                🛡️ Firewall & Intrusion Detection Systems (IDS)
                <br />
                🔐 Access Control & Identity Management
                <br />
                🔄 Data Backup & Disaster Recovery Planning
                <br />
                📚 Cybersecurity Awareness Training for Teams
                <br />
                🧠 Security Policy Development & Compliance Readiness
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Strengthened protection against cyber threats</li>
                  <li>Reduced downtime and data loss</li>
                  <li>Increased client trust and regulatory compliance</li>
                  <li>Enhanced productivity with secure systems</li>
                  <li>Long-term peace of mind for your business operations</li>
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

export default ITSecurity;
