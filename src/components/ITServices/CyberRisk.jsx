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
    <div className="relative">
      <div className="relative z-8">
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CYBER RISK
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bgSVG">
          <div className="pt-20 px-4 text-black flex flex-col lg:flex-row justify-center items-center gap-10">
            <img
              id="cysIcon"
              src={cysIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Cyber Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              In today’s increasingly connected world, cyber threats — such as data breaches, ransomware, and phishing — are not just technical issues, but serious business risks. Managing cyber risk involves identifying these threats, assessing their potential impact, and implementing proactive measures to protect your organization. <br /><br />
              At JP Consulting & Services, we help businesses stay ahead of cyber threats by offering strategic risk assessments, security policy development, training, and compliance support — so you can operate confidently and securely in a digital environment.
            </p>
          </div>

          <div className="space-y-20 py-24 px-4">
            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div id="section1" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  PROTECTING YOUR FUTURE IN A DIGITAL WORLD
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Strategic Protection, Real Peace of Mind</span>
                  At JP Consulting & Services, we understand that in today’s digital age, cybersecurity is business security. Our Cyber Risk services are designed to identify, assess, and mitigate threats before they impact your operations. We empower your business to stay secure, compliant, and resilient — even in an evolving risk landscape.
                </p>
              </div>
              <div id="section2" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  TAILORED RISK MANAGEMENT
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Custom Cyber Defense Solutions</span>
                  We don’t offer generic security checklists — we provide tailored strategies that address your industry, infrastructure, and business needs. From startups to enterprise-level organizations, we help you safeguard what matters most.
                </p>
              </div>
            </section>

            <section className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              <div id="section3" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  KNOW YOUR THREATS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Visibility is the First Step to Security</span>
                  Cyber threats can strike at any time — data breaches, phishing attacks, ransomware, and insider threats are just a few risks modern businesses face. We help you identify vulnerabilities across your systems and create a proactive defense plan.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">CYBER RISKS WE ADDRESS</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Data breaches and information leaks</li>
                    <li>Ransomware and malware attacks</li>
                    <li>Phishing and social engineering threats</li>
                    <li>Weak internal access control</li>
                    <li>Non-compliance with data protection laws (e.g., GDPR, HIPAA)</li>
                    <li>Outdated security infrastructure</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-full lg:w-1/2 josefin space-y-5">
                <p className="font-bold text-2xl text-center">
                  HOW WE PROTECT YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Strategic Innovation Consulting</span>
                  🔍 Risk Assessments: Discover system vulnerabilities before attackers do<br />
                  🔐 Policy Development: Define clear cybersecurity guidelines and employee protocols<br />
                  🧠 Awareness Training: Educate your team to recognize and avoid common threats<br />
                  🧰 Technology Integration: Implement modern, effective security tools<br />
                  📄 Compliance Support: Ensure your systems align with legal and industry regulations
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Reduced risk of cyber attacks and business downtime</li>
                    <li>Stronger data privacy and regulatory compliance</li>
                    <li>Increased trust from clients, investors, and partners</li>
                    <li>Long-term protection through continuous improvement</li>
                    <li>Peace of mind knowing your digital assets are secure</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img src={cyImage} className="fixed blur-sm top-0 left-0 w-full h-full object-cover z-0" alt="Cyber Background" />
    </div>
  );
};

export default CyberRisk;
