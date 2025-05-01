import React, { useEffect } from "react";
import { dupsIconImage, dupImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Duplicating = () => {
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
      "#dupsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#dupsIcon",
          start: "top center",
          end: "20% 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section1",
          start: "-80% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section2",
          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section3",
          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section4",
          start: "-20% center",
          end: "center 30%",
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
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">DUPLICATING</h1>
          <h2 className="text-lg md:text-2xl font-medium mt-1 josefin mb-12">JP Consulting & Services</h2>
        </div>

        <div className="h-full bgSVG">
          <div className="pt-20 text-black flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4">
            <img
              id="dupsIcon"
              src={dupsIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt=""
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, our Duplicating service provides accurate, efficient, and professional reproduction of your business documents — whether for daily operations, client deliverables, or compliance requirements. We understand the importance of precision and consistency in every copy you need, and our team ensures high-quality output every time.
            </p>
          </div>

          <div className="h-full space-y-50 py-20 px-4">
            <section className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-start">
              <div id="section1" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">ACCURATE COPIES, SEAMLESS WORKFLOWS</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Consistent Reproduction for Every Business Need</span>
                  At JP Consulting & Services, our Duplicating service ensures that every critical business document is reproduced with precision and quality. Whether you need physical or digital copies, we deliver fast, professional results that maintain the integrity of your original content — every time.
                </p>
              </div>
              <div id="section2" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">SPEED, ACCURACY, AND QUALITY</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Helping You Stay Organized and Prepared</span>
                  From proposals to legal documents and operational files, having exact, high-quality copies is essential. Our duplicating process ensures your business has consistent, accessible documents — ready for meetings, audits, or daily operations.
                </p>
              </div>
            </section>

            <section className="w-full flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-start">
              <div id="section3" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">WE KNOW IT’S MORE THAN JUST DUPLICATING</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Preserve Quality. Protect Content. Deliver Results.</span>
                  We understand the importance of brand consistency and information accuracy. That’s why our duplication services are done with care, ensuring every copy reflects the professionalism of your business.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">WHAT WE DUPLICATE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Business Documents & Contracts</li>
                    <li>Company Profiles & Proposals</li>
                    <li>Reports & Presentations</li>
                    <li>Legal Forms & Certifications</li>
                    <li>Marketing Collateral</li>
                    <li>Training Manuals & Policy Handbooks</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-full md:w-1/2 josefin space-y-5 text-center md:text-left">
                <p className="font-bold text-2xl">HOW WE SUPPORT YOUR OPERATIONS</p>
                <p className="flex flex-col gap-2">
                  <span className="font-bold">Smart Document Duplication Solutions</span>
                  📠 High-Quality Copying: Crisp and clear document reproduction<br />
                  📂 Bulk Duplication: Scalable services for any quantity<br />
                  🖨️ Digital & Print Formats: Flexible to your business needs<br />
                  🔒 Confidential Handling: Your documents are treated with complete privacy and care
                </p>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Reliable, professional-looking duplicates</li>
                    <li>Streamlined access to essential business materials</li>
                    <li>Reduced manual workload and administrative errors</li>
                    <li>Quick turnaround and flexible output formats</li>
                    <li>Consistency across all business documentation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img src={dupImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Duplicating;