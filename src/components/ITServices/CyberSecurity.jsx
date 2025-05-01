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

    animateSection("section1", 0);
    animateSection("section2", 150);
    animateSection("section3", 0);
    animateSection("section4", 150);
  }, []);

  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CYBER SECURITY
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>

        <div className="h-full bgSVG">
          <div className="pt-20 px-4 text-black flex flex-col lg:flex-row justify-center items-center gap-10">
            <img
              id="cybsIcon"
              src={cybsIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Cyber Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, we offer tailored cybersecurity
              solutions that go beyond firewalls and antivirus software. We help
              businesses assess vulnerabilities, monitor threats, and build a
              resilient defense strategy that ensures compliance, protects
              sensitive data, and supports long-term digital growth. Whether
              you're a startup or an established enterprise, securing your
              digital assets is key to building trust and sustaining success.
            </p>
          </div>

          <div className="space-y-20 py-24 px-4">
            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div id="section1" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  PROTECTING WHAT MATTERS MOST
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Secure Systems. Confident Business.</span>
                  At JP Consulting & Services, we provide cybersecurity
                  solutions that protect your business from digital threats and
                  vulnerabilities. In today’s fast-paced digital world, a strong
                  cybersecurity posture is not optional — it’s essential. Our
                  mission is to keep your data, systems, and operations safe, so
                  you can focus on growing your business with peace of mind.
                </p>
              </div>
              <div id="section2" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  CUSTOMIZED SECURITY STRATEGY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Tailored Protection for Your Business Environment</span>
                  Every business faces unique risks based on its operations,
                  size, and digital infrastructure. We analyze your current
                  systems, identify vulnerabilities, and design a personalized
                  cybersecurity strategy that aligns with your specific needs
                  and industry requirements.
                </p>
              </div>
            </section>

            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div id="section3" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  WE KNOW THE RISKS YOU FACE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Proactive Defense is Key</span>
                  From ransomware attacks and phishing scams to data breaches
                  and system outages — digital threats are constant. We help you
                  stay ahead of them with robust prevention, detection, and
                  response plans.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">CYBERSECURITY PAIN POINTS WE SOLVE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Protecting sensitive customer and company data</li>
                    <li>Preventing unauthorized access and data breaches</li>
                    <li>Ensuring compliance with security regulations and standards</li>
                    <li>Managing risk across networks, cloud services, and remote teams</li>
                    <li>Responding quickly to cyber threats and incidents</li>
                  </ul>
                </div>
              </div>

              <div id="section4" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  HOW WE SECURE YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">End-to-End Cybersecurity Solutions</span>
                  🔒 Risk Assessment & Audits: Evaluate current security posture and gaps<br />
                  🧰 Threat Detection & Monitoring: Implement real-time systems to identify and respond to threats<br />
                  🛡 Data Protection Strategies: Secure your most valuable assets with encryption, backup, and access control<br />
                  📘 Policy Development & Training: Educate your team and build a strong internal security culture<br />
                  🚨 Incident Response Plans: Be ready to respond when the unexpected happens
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Reduced risk of cyberattacks and data loss</li>
                    <li>Compliance with security laws and industry regulations</li>
                    <li>Greater customer trust through responsible data protection</li>
                    <li>Faster recovery from potential threats or breaches</li>
                    <li>A more resilient, secure digital infrastructure</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img src={cybImage} className="fixed blur-sm top-0 left-0 w-full h-full object-cover z-0" alt="Cyber Background" />
    </div>
  );
};

export default CyberSecurity;
