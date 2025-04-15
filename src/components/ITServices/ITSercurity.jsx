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
        { x: 0, duration: 1, delay: .5, opacity: 1 },
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
        {
          x: -200,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: '#itsIcon',
  
            start: 'top center',
            end: '20% 30%',
            scrub: 1,
          },
          opacity: 1,
          duration: 1.5,
          x: 0,
        }
      );
  

    gsap.fromTo(
      "#section1",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section1',

          start: '-80% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section2",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section2',

          start: '-50% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );
    gsap.fromTo(
      "#section3",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section3',

          start: '-50% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 0,
      }
    );
    gsap.fromTo(
      "#section4",
      {
        y: 200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#section4',

          start: '-20% center',
          end: 'center 30%',
        },
        opacity: 1,
        duration: 1.5,
        y: 150,
      }
    );

  });
  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-6xl bold opacity-1 text-amber-400 tracking-wide">
            IT SECURITY
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="itsIcon"
              src={itsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            IT Security refers to the strategies, tools, and practices used to protect your company’s digital infrastructure, data, and operations from cyber threats. At JP Consulting & Services, we provide robust IT security solutions designed to defend against hacking, data breaches, malware, and other cyber risks that could disrupt your business or compromise sensitive information.{" "}
            <br />
            <br />
            From firewalls and network monitoring to data encryption and employee awareness training, our IT Security services are tailored to fit the unique needs of your business. We help you build a secure and resilient digital environment—ensuring business continuity, regulatory compliance, and peace of mind.


            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                PROTECTING YOUR BUSINESS, SECURING YOUR FUTURE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  Comprehensive Protection. Strategic Peace of Mind.
                  </span>
                  At JP Consulting & Services, our IT Security solutions are built to safeguard your business from evolving cyber threats. From risk assessment to full-scale protection, we ensure your digital assets, customer data, and operational integrity remain secure—24/7.
                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                YOUR PATH TO DIGITAL CONFIDENCE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Customized Cybersecurity Strategies</span>
                  We understand that no two businesses have the same security needs. That’s why we tailor our solutions to your infrastructure, industry, and goals—so you can operate with confidence, knowing your systems are resilient and protected.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                WE UNDERSTAND WHAT’S AT RISK
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Cyber Threats Are Constant—So Are We</span>
                  In today’s digital-first world, cyberattacks aren’t just threats; they’re daily realities. We help you stay ahead of risks like data breaches, ransomware, and system vulnerabilities by building a proactive, layered security defense around your business
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE SECURE
                  </span>
                  <ul className="list-disc list-inside text-left">
                    <li>Company Networks & Servers</li>
                    <li>Cloud Environments & SaaS Platforms</li>
                    <li>Employee Devices & Endpoint Security</li>
                    <li>Business Applications & CRMs</li>
                    <li>Client Data & Intellectual Property</li>
                    <li>Remote Work Infrastructure</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE HELP YOU STAY PROTECTED
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Strategic IT Security Services</span>
                  🔍 Risk Assessment & Vulnerability Scanning<br />
                  🛡️ Firewall & Intrusion Detection Systems (IDS)<br />
                  🔐 Access Control & Identity Management<br />
                  🔄 Data Backup & Disaster Recovery Planninge<br />
                  📚 Cybersecurity Awareness Training for Teams<br />
                  🧠 Security Policy Development & Compliance Readiness
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Strengthened protection against cyber threats
                    </li>
                    <li>Reduced downtime and data loss</li>
                    <li>
                    Increased client trust and regulatory compliance
                    </li>
                    <li>
                    Enhanced productivity with secure systems
                    </li>
                    <li>Long-term peace of mind for your business operations</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="h-screen bg-gray-100 border-t-2 border-black pt-30 space-y-10">
          <p className="bold text-4xl text-center">
            <span className="text-amber-600">JP</span> Consulting & Services
          </p>
          <p className="text-center josefin text-2xl">
            Success is a journey, not a destination.
          </p>
          <div className=" flex flex-col gap-5 bg-amber-400 shadow rounded-lg items-center p-5 mx-25">
            <p className="text-justify w-200 josefin text-lg font-semibold">
              We work closely with businesses to understand their specific needs
              and challenges. By offering personalized solutions, we help
              clients navigate complex problems and unlock new opportunities for
              success. From streamlining operations to strategic planning, we
              aim to enhance your business performance, fostering long-term
              growth and stability. Together, we empower your business to
              achieve its full potential.
            </p>
            <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              Contact Us
            </button>
            <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              More About Us
            </button>
          </div>
        </div>
      </div>
      <img src={itImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default ITSecurity;
