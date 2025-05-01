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

    const sections = ["#secsIcon", "#section1", "#section2", "#section3", "#section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-80% center",
            end: "center 30%",
            scrub: index === 0 ? 1 : false,
          },
          opacity: 1,
          duration: 1.5,
          y: index % 2 === 0 ? 0 : 150,
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Header */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            SECRETARIAL SUPPORT
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-10">
            JP Consulting & Services
          </h2>
        </div>

        {/* Content */}
        <div className="bgSVG py-20 px-4 md:px-20">
          {/* Intro */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <img
              id="secsIcon"
              src={secsIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Secretarial Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              Secretarial Support refers to a range of administrative and compliance services that ensure a business operates efficiently and in line with legal and regulatory requirements.
              <br /><br />
              At JP Consulting & Services, our Secretarial Support helps manage critical tasks such as company registration, statutory filings, document preparation, and record maintenance — all while maintaining the highest standards of confidentiality and professionalism.
              <br /><br />
              From preparing meeting minutes to filing annual returns, we ensure nothing is overlooked, so you can stay focused on strategic growth.
            </p>
          </div>

          {/* Sections 1 & 2 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start mb-20">
            <div id="section1" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">YOUR BACK-OFFICE POWERHOUSE</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Reliable Support, Seamless Operations</span>
                Our Secretarial Support service takes the pressure off your administrative tasks so you can focus on growing your business. We manage compliance and keep things running smoothly.
              </p>
            </div>
            <div id="section2" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">PARTNERS IN YOUR ADMINISTRATION</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Professional, Confidential, and Efficient</span>
                Whether you’re a startup or an established business, we treat your admin like our own — with confidentiality, precision, and reliability.
              </p>
            </div>
          </section>

          {/* Sections 3 & 4 */}
          <section className="flex flex-col md:flex-row gap-10 justify-center items-start">
            <div id="section3" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">WHY IT MATTERS</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Compliance Isn’t Optional — It’s Essential</span>
                Missing filings can cost your business more than just fees. We keep your records current, compliant, and audit-ready.
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">WHAT WE HANDLE</span>
                <ul className="list-disc list-inside text-left">
                  <li>Company incorporation and registration</li>
                  <li>Maintenance of statutory records</li>
                  <li>Annual returns & compliance filing</li>
                  <li>Board and shareholder resolutions</li>
                  <li>Board meeting coordination & minutes</li>
                  <li>Registered office support</li>
                  <li>Document drafting & review</li>
                </ul>
              </div>
            </div>
            <div id="section4" className="md:w-1/2 space-y-5 text-center md:text-left">
              <p className="font-bold text-xl md:text-2xl">HOW WE SUPPORT YOUR GROWTH</p>
              <p className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">Strategic Secretarial Services</span>
                🗂️ Document Management<br />
                🕒 Deadline Monitoring<br />
                📄 Legal Documentation<br />
                🤝 End-to-End Support
              </p>
              <div className="text-base md:text-lg flex flex-col gap-2">
                <span className="font-bold">YOUR BENEFITS:</span>
                <ul className="list-disc list-inside text-left">
                  <li>Peace of mind with compliance</li>
                  <li>More time to focus on core work</li>
                  <li>Pro handling of critical documents</li>
                  <li>Smoother board communication</li>
                  <li>Reduced legal & regulatory risk</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Background Image */}
      <img src={secImage} className="fixed top-0 left-0 w-full h-full object-cover blur-sm z-0" alt="Background" />
    </div>
  );
};

export default SecretarialSupport;
