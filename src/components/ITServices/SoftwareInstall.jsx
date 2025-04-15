import React, { useEffect } from "react";
import { sosIconImage, soImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SoftwareInstall= () => {
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
        "#sosIcon",
        {
          x: -200,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: '#sosIcon',
  
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
            SOFTWARE INSTALLATION
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="sosIcon"
              src={sosIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            Software Installation is the process of setting up, configuring, and optimizing software applications to ensure they run smoothly and securely within your business environment. This includes everything from installing basic productivity tools to implementing advanced systems tailored to your industry needs.
            {" "}
           <br />
           <br />
           At JP Consulting & Services, we provide end-to-end software installation services that guarantee compatibility, security, and operational efficiency. Whether you’re upgrading existing systems or introducing new platforms, we take care of the technical side so your team can focus on what matters most — growing your business.


            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                SMART SETUP FOR SEAMLESS OPERATIONS

                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  Technology That Works for You
                  </span>
                  At JP Consulting & Services, our Software Installation service ensures your business tools are set up correctly from day one. Whether you’re implementing productivity software, industry-specific tools, or enterprise-level systems, we handle the technical setup so you can focus on running your business.
                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                TAILORED TO YOUR WORKFLOW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Customized Solutions, Smooth Implementation</span>
                  We understand that every business uses technology differently. That’s why we assess your specific needs and select the best-fit software — configuring it to align with your operations, team size, and long-term goals. Our approach guarantees a seamless transition with minimal disruption.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                WE HANDLE THE COMPLEXITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Technical Setup, Simplified</span>
                  Installing new software can be overwhelming — from compatibility checks to licensing, updates, and user access control. Our experienced team manages the entire process, ensuring everything runs smoothly, securely, and in compliance with your IT policies.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE INSTALL
                  </span>
                  <ul className="list-disc list-inside text-left">
                    <li>Business & Productivity Suites (e.g., Microsoft 365, Google Workspace)</li>
                    <li>Accounting & Financial Software</li>
                    <li>CRM & Project Management Tools</li>
                    <li>HR & Payroll Systems</li>
                    <li>Custom or Industry-Specific Softwaree</li>
                    <li>Cloud Services & Storage Solutions</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE SUPPORT YOUR GROWTH
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">End-to-End Installation Services</span>
                  🔧 System Assessment & Compatibility Checks<br />
                  💻 Secure Installation & Configuration<br />
                  👥 User Setup & Access Management<br />
                  🧠 Basic Training & Support<br />
                  🔒 Security & Compliance Assurance
                  
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Seamless software integration into your operations
                    </li>
                    <li>Reduced setup errors and downtime</li>
                    <li>
                    Increased productivity through properly configured tools
                    </li>
                    <li>
                    Expert support and guidance during onboarding
                    </li>
                    <li>Long-term tech alignment with business objectives</li>
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
      <img src={soImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default SoftwareInstall;
