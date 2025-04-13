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
      "#dupsIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#dupsIcon',

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
            DUPLICATING
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="dupsIcon"
              src={dupsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            At JP Consulting & Services, our Duplicating service provides accurate, efficient, and professional reproduction of your business documents — whether for daily operations, client deliverables, or compliance requirements. We understand the importance of precision and consistency in every copy you need, and our team ensures high-quality output every time. {" "}
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                ACCURATE COPIES, SEAMLESS WORKFLOWS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  Consistent Reproduction for Every Business Need
                  </span>
                  At JP Consulting & Services, our Duplicating service ensures that every critical business document is reproduced with precision and quality. Whether you need physical or digital copies, we deliver fast, professional results that maintain the integrity of your original content — every time. </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                SPEED, ACCURACY, AND QUALITY
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Helping You Stay Organized and Prepared</span>
                  From proposals to legal documents and operational files, having exact, high-quality copies is essential. Our duplicating process ensures your business has consistent, accessible documents — ready for meetings, audits, or daily operations.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                WE KNOW IT’S MORE THAN JUST DUPLICATING
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Preserve Quality. Protect Content. Deliver Results.</span>
                  We understand the importance of brand consistency and information accuracy. That’s why our duplication services are done with care, ensuring every copy reflects the professionalism of your business.
                </p>
                <div className="text-center flex flex-col gap-2">
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
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE SUPPORT YOUR OPERATIONS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Smart Document Duplication Solutions</span>
                  📠 High-Quality Copying: Crisp and clear document reproduction<br></br>

                  📂 Bulk Duplication: Scalable services for any quantity <br></br>

                  🖨️ Digital & Print Formats: Flexible to your business needs<br></br>

                  🔒 Confidential Handling: Your documents are treated with complete privacy and care
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Reliable, professional-looking duplicates
                    </li>
                    <li>Streamlined access to essential business materials</li>
                    <li>
                    Reduced manual workload and administrative errors
                    </li>
                    <li>
                    Quick turnaround and flexible output formats
                    </li>
                    <li>Consistency across all business documentation</li>
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
      <img src={dupImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Duplicating;
