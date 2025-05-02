import React, { useEffect } from "react";
import { secsIconImage, secImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SecretarialSupport = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo("h1", { x: 200, opacity: 0 }, { x: 0, duration: 1, delay: 0.5, opacity: 1 }, 1)
      .fromTo("h2", { x: -200, opacity: 0 }, { x: 0, duration: 1, delay: 1, opacity: 1 }, 1);

    gsap.fromTo(
      "#secsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#secsIcon",
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
        src={secImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Secretarial Support Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            SECRETARIAL SUPPORT
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="secsIcon"
              src={secsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Secretarial Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Secretarial Support refers to a range of administrative and compliance services that ensure a business operates efficiently and in line with legal and regulatory requirements.
              <br />
              <br />
              At JP Consulting & Services, our Secretarial Support helps manage critical tasks such as company registration, statutory filings, document preparation, and record maintenance — all while maintaining the highest standards of confidentiality and professionalism.
              <br />
              <br />
              From preparing meeting minutes to filing annual returns, we ensure nothing is overlooked, so you can stay focused on strategic growth.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">YOUR BACK-OFFICE POWERHOUSE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Reliable Support, Seamless Operations</span>
                Our Secretarial Support service takes the pressure off your administrative tasks so you can focus on growing your business. We manage compliance and keep things running smoothly.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">PARTNERS IN YOUR ADMINISTRATION</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Professional, Confidential, and Efficient</span>
                Whether you’re a startup or an established business, we treat your admin like our own — with confidentiality, precision, and reliability.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">WHY IT MATTERS</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Compliance Isn’t Optional — It’s Essential</span>
                Missing filings can cost your business more than just fees. We keep your records current, compliant, and audit-ready.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">What We Handle</p>
                <ul className="list-disc list-inside">
                  <li>Company incorporation and registration</li>
                  <li>Maintenance of statutory records</li>
                  <li>Annual returns & compliance filing</li>
                  <li>Board and shareholder resolutions</li>
                  <li>Board meeting coordination & minutes</li>
                  <li>Registered office support</li>
                  <li>Document drafting & review</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold"><span className="orange">HOW WE SUPPORT YOUR GROWTH</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic Secretarial Services</span>
                🗂️ Document Management<br />
                🕒 Deadline Monitoring<br />
                📄 Legal Documentation<br />
                🤝 End-to-End Support
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Peace of mind with compliance</li>
                  <li>More time to focus on core work</li>
                  <li>Pro handling of critical documents</li>
                  <li>Smoother board communication</li>
                  <li>Reduced legal & regulatory risk</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to streamline your business?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretarialSupport;
