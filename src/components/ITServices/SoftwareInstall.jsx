import React, { useEffect } from "react";
import { sosIconImage, soImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SoftwareInstall = () => {
  useEffect(() => {
    // Initialize GSAP timeline
    const timeline = gsap.timeline();

    // Animation for headings
    timeline
      .fromTo(
        "h1",
        { x: 200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 }
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 }
      );

    // Scroll-triggered animations for different sections
    const sections = ["#sosIcon", "#section1", "#section2", "#section3", "#section4"];
    sections.forEach((section, index) => {
      const offset = index === 0 ? 200 : 150; // Adjust for specific section animations

      gsap.fromTo(
        section,
        { y: offset, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: `${index === 0 ? "-80%" : "-50%"} center`,
            end: "center 30%",
            scrub: 1,
          },
          opacity: 1,
          duration: 1.5,
          y: 0,
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-8">
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-1 text-orange-500 tracking-wide">
            SOFTWARE INSTALLATION
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>

        <div className="h-full bgSVG">
          <div className="pt-20 sm:pt-40 text-black flex flex-col sm:flex-row justify-center items-center gap-10">
            <img
              id="sosIcon"
              src={sosIconImage}
              className="h-60 sm:h-80 rounded-lg"
              alt="Software installation icon"
            />
            <p className="text-base sm:text-lg josefin font-semibold text-center sm:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Software Installation is the process of setting up, configuring,
              and optimizing software applications to ensure they run smoothly
              and securely within your business environment. This includes
              everything from installing basic productivity tools to
              implementing advanced systems tailored to your industry needs. <br />
              <br />
              At JP Consulting & Services, we provide end-to-end software
              installation services that guarantee compatibility, security, and
              operational efficiency. Whether you’re upgrading existing systems
              or introducing new platforms, we take care of the technical side
              so your team can focus on what matters most — growing your
              business.
            </p>
          </div>

          <div className="h-full space-y-10 sm:space-y-20 py-20 sm:py-40">
            <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
              <div id="section1" className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-xl sm:text-2xl text-center">
                  SMART SETUP FOR SEAMLESS OPERATIONS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Technology That Works for You</span>
                  At JP Consulting & Services, our Software Installation service
                  ensures your business tools are set up correctly from day one.
                  Whether you’re implementing productivity software, industry-specific
                  tools, or enterprise-level systems, we handle the technical setup
                  so you can focus on running your business.
                </p>
              </div>
              <div id="section2" className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center translate-y-10 sm:translate-y-0">
                <p className="font-bold text-xl sm:text-2xl text-center">
                  TAILORED TO YOUR WORKFLOW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Customized Solutions, Smooth Implementation</span>
                  We understand that every business uses technology differently.
                  That’s why we assess your specific needs and select the best-fit
                  software — configuring it to align with your operations, team size,
                  and long-term goals. Our approach guarantees a seamless transition
                  with minimal disruption.
                </p>
              </div>
            </section>

            <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
              <div id="section3" className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-xl sm:text-2xl text-center">
                  WE HANDLE THE COMPLEXITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Technical Setup, Simplified</span>
                  Installing new software can be overwhelming — from compatibility
                  checks to licensing, updates, and user access control. Our experienced
                  team manages the entire process, ensuring everything runs smoothly,
                  securely, and in compliance with your IT policies.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE INSTALL</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Business & Productivity Suites (e.g., Microsoft 365, Google Workspace)</li>
                    <li>Accounting & Financial Software</li>
                    <li>CRM & Project Management Tools</li>
                    <li>HR & Payroll Systems</li>
                    <li>Custom or Industry-Specific Software</li>
                    <li>Cloud Services & Storage Solutions</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-full sm:w-1/2 h-full josefin space-y-5 justify-center translate-y-10 sm:translate-y-0">
                <p className="font-bold text-xl sm:text-2xl text-center">
                  HOW WE SUPPORT YOUR GROWTH
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">End-to-End Installation Services</span>
                  🔧 System Assessment & Compatibility Checks <br />
                  💻 Secure Installation & Configuration <br />
                  👥 User Setup & Access Management <br />
                  🧠 Basic Training & Support <br />
                  🔒 Security & Compliance Assurance
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Seamless software integration into your operations</li>
                    <li>Reduced setup errors and downtime</li>
                    <li>Increased productivity through properly configured tools</li>
                    <li>Expert support and guidance during onboarding</li>
                    <li>Long-term tech alignment with business objectives</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img src={soImage} className="fixed blur-sm top-0 z-1" alt="Background" />
    </div>
  );
};

export default SoftwareInstall;
