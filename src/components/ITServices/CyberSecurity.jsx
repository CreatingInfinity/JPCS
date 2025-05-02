import React, { useEffect } from "react";
import { cybsIconImage, cybImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CyberSecurity = () => {
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
      "#cybsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#cybsIcon",
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
        src={cybImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Cyber Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CYBER SECURITY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="cybsIcon"
              src={cybsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Cyber Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              At JP Consulting & Services, we offer tailored cybersecurity solutions that go beyond firewalls and antivirus software. We help businesses assess vulnerabilities, monitor threats, and build a resilient defense strategy that ensures compliance, protects sensitive data, and supports long-term digital growth. Whether you're a startup or an established enterprise, securing your digital assets is key to building trust and sustaining success.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">PROTECTING WHAT MATTERS MOST</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Secure Systems. Confident Business.</span>
                At JP Consulting & Services, we provide cybersecurity solutions that protect your business from digital threats and vulnerabilities. In today’s fast-paced digital world, a strong cybersecurity posture is not optional — it’s essential. Our mission is to keep your data, systems, and operations safe, so you can focus on growing your business with peace of mind.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">CUSTOMIZED SECURITY STRATEGY</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Tailored Protection for Your Business Environment</span>
                Every business faces unique risks based on its operations, size, and digital infrastructure. We analyze your current systems, identify vulnerabilities, and design a personalized cybersecurity strategy that aligns with your specific needs and industry requirements.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">WE KNOW THE RISKS YOU FACE</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Proactive Defense is Key</span>
                From ransomware attacks and phishing scams to data breaches and system outages — digital threats are constant. We help you stay ahead of them with robust prevention, detection, and response plans.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">CYBERSECURITY PAIN POINTS WE SOLVE</p>
                <ul className="list-disc list-inside">
                  <li>Protecting sensitive customer and company data</li>
                  <li>Preventing unauthorized access and data breaches</li>
                  <li>Ensuring compliance with security regulations and standards</li>
                  <li>Managing risk across networks, cloud services, and remote teams</li>
                  <li>Responding quickly to cyber threats and incidents</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE SECURE YOUR BUSINESS</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">End-to-End Cybersecurity Solutions</span>
                🔒 Risk Assessment & Audits: Evaluate current security posture and gaps<br />
                🧰 Threat Detection & Monitoring: Implement real-time systems to identify and respond to threats<br />
                🛡 Data Protection Strategies: Secure your most valuable assets with encryption, backup, and access control<br />
                📘 Policy Development & Training: Educate your team and build a strong internal security culture<br />
                🚨 Incident Response Plans: Be ready to respond when the unexpected happens
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">YOUR BENEFITS:</p>
                <ul className="list-disc list-inside">
                  <li>Reduced risk of cyberattacks and data loss</li>
                  <li>Compliance with security laws and industry regulations</li>
                  <li>Greater customer trust through responsible data protection</li>
                  <li>Faster recovery from potential threats or breaches</li>
                  <li>A more resilient, secure digital infrastructure</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to secure your business against digital threats?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
