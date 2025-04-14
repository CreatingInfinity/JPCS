import React, { useEffect } from "react";
import { persIconImage, perImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Personel = () => {
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
      "#persIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#persIcon',

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
            PERSONNEL
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="persIcon"
              src={persIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            At JP Consulting & Services, we support businesses by optimizing their personnel structure, improving team alignment, and implementing HR strategies that enhance efficiency and engagement. Whether you're building your team from the ground up or refining your existing workforce, our services ensure you have the human capital foundation necessary to scale with confidence.{" "}
              

            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                BUILDING YOUR TEAM, STRENGTHENING YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  The Right People Make All the Difference
                  </span>
                  At JP Consulting & Services, we understand that a business is only as strong as its people. Our Personnel support services are designed to help you attract, develop, and retain top talent — ensuring your team is aligned with your goals and prepared to drive success.
                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                TAILORED TALENT STRATEGIES
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Built Around Your Business Needs</span>
                  Every company is unique — and so are its staffing needs. We take the time to understand your structure, culture, and vision, allowing us to provide personnel solutions that match your specific requirements. Whether you're hiring key roles, restructuring your team, or building a strong HR foundation, we’re here to help.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                UNDERSTANDING YOUR TEAM CHALLENGES
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">We Focus on What Matters Most</span>
                  From inefficient hiring processes to high turnover rates, businesses often face people-related challenges that hinder growth. Our goal is to streamline your personnel management and build a high-performing team that thrives.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">PAIN POINTS WE SOLVE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Ineffective recruitment strategies</li>
                    <li>High employee turnover</li>
                    <li>Misaligned team roles and responsibilities</li>
                    <li>Lack of HR processes and structure</li>
                    <li>Skills gaps impacting operations</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE HELP YOUR BUSINESS GROW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Comprehensive Personnel Solutions</span>
                  🧩 Recruitment Support: Finding and screening candidates who align with your values and goals<br />
                  📊 Organizational Structuring: Defining roles, responsibilities, and reporting lines<br />
                  📘 Policy & Handbook Creation: Crafting clear employee policies and company handbooks<br />
                  🎯 Performance Management: Setting up systems for evaluation, feedback, and growth<br />
                  🤝 Team Alignment Workshops: Enhancing collaboration, communication, and company culture
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Stronger hiring decisions
                    </li>
                    <li>Improved team cohesion and productivity</li>
                    <li>
                    Clear and compliant HR documentation
                    </li>
                    <li>
                    Reduced employee turnover
                    </li>
                    <li>A scalable structure for future growth</li>
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
      <img src={perImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Personel;
