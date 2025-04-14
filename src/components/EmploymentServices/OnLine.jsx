import React, { useEffect } from "react";
import { onsIconImage, onImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const OnLine = () => {
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
      "omsIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#onstsIcon',

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
            ONLINE
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="onsIcon"
              src={onsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            At JP Consulting & Services, we simplify the process of hiring, onboarding, and managing remote employees. Whether you need full-time virtual staff or project-based freelancers, our Online Employment service ensures you get the right talent—legally compliant, performance-ready, and aligned with your business goals.{" "}
              <br />
              <br />
              This service is ideal for startups, SMEs, and scaling enterprises looking to reduce overhead, increase productivity, and adapt to the evolving digital work landscape.

            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                BRIDGING OPPORTUNITIES IN THE DIGITAL AGE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  Hire Smarter. Work Remotely. Grow Faster.
                  </span>
                  At JP Consulting & Services, our Online Employment service connects businesses with top-tier remote talent and supports entrepreneurs in building lean, scalable teams. Whether you're hiring locally or globally, we make virtual employment seamless, secure, and strategic.


                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                YOUR TEAM, WITHOUT BORDERS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Flexible Staffing for Modern Business Needs</span>
                  We help you tap into a global talent pool — from administrative support and customer service to tech development and digital marketing. Our approach is designed to align your hiring strategy with your long-term vision, ensuring every hire adds measurable value.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                UNDERSTANDING YOUR GOALS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Smart Hiring That Supports Growth</span>
                  Managing a remote workforce presents unique challenges. That’s why we guide you through every step — from sourcing and vetting to contracts, onboarding, and productivity tracking. You focus on growth; we handle the logistics.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">SOLUTIONS WE PROVIDE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Sourcing qualified remote professionals</li>
                    <li>Setting up online employment platforms</li>
                    <li>Drafting remote work contracts and policies</li>
                    <li>Managing onboarding and payroll support</li>
                    <li>Ensuring legal compliance and data security</li>
                    
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE HELP YOU SCALE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Efficient, Agile Workforce Solutions</span>
                  🌍 Global Reach: Access skilled professionals from anywhere<br />
                  🔒 Compliance & Security: Ensure legally sound hiring practices<br />
                  📈 Performance Tracking: Monitor KPIs and productivity remotely<br />
                  💼 Cost-Effective: Build efficient teams without overhead costs
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Faster hiring with vetted, skilled candidates
                    </li>
                    <li>Reduced HR costs and overhead expenses</li>
                    <li>
                    Scalable operations that grow with your needs
                    </li>
                    <li>
                    24/7 support availability across time zones
                    </li>
                    <li>A modern workforce ready for the future of work</li>
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
      <img src={onImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default OnLine;
