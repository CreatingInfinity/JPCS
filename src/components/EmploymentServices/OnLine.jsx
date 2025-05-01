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
        { x: 0, duration: 1, delay: 0.5, opacity: 1 }
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 }
      );

    gsap.fromTo(
      "#onsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#onsIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );

    ["#section1", "#section2", "#section3", "#section4"].forEach((id, i) => {
      gsap.fromTo(
        id,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: id,
            start: "-50% center",
            end: "center 30%",
          },
          opacity: 1,
          duration: 1.5,
          y: i % 2 === 0 ? 0 : 150,
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">ONLINE</h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 josefin mb-12">JP Consulting & Services</h2>
        </div>

        {/* Description Section */}
        <div className="bgSVG py-16 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <img
              id="onsIcon"
              src={onsIconImage}
              className="h-60 md:h-80 rounded-lg"
              alt="Online Service Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-xl leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, we simplify the process of hiring, onboarding, and managing remote employees. Whether you need full-time virtual staff or project-based freelancers, our Online Employment service ensures you get the right talent—legally compliant, performance-ready, and aligned with your business goals.
              <br /><br />
              This service is ideal for startups, SMEs, and scaling enterprises looking to reduce overhead, increase productivity, and adapt to the evolving digital work landscape.
            </p>
          </div>

          {/* Sections */}
          <div className="py-20 space-y-20">
            {[1, 2, 3, 4].map((i) => (
              <section key={i} className="flex flex-col md:flex-row gap-10 justify-center items-center px-4" id={`section${i}`}>
                <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                  {i === 1 && (
                    <>
                      <p className="font-bold text-xl md:text-2xl">BRIDGING OPPORTUNITIES IN THE DIGITAL AGE</p>
                      <p>
                        <span className="font-bold">Hire Smarter. Work Remotely. Grow Faster.</span><br />
                        Our Online Employment service connects businesses with top-tier remote talent and supports entrepreneurs in building lean, scalable teams.
                      </p>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <p className="font-bold text-xl md:text-2xl">YOUR TEAM, WITHOUT BORDERS</p>
                      <p>
                        <span className="font-bold">Flexible Staffing for Modern Business Needs</span><br />
                        Tap into a global talent pool — from admin support to digital marketing — all legally compliant and scalable.
                      </p>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <p className="font-bold text-xl md:text-2xl">UNDERSTANDING YOUR GOALS</p>
                      <p>
                        <span className="font-bold">Smart Hiring That Supports Growth</span><br />
                        We guide you through sourcing, vetting, onboarding, and productivity tracking.
                      </p>
                      <ul className="list-disc list-inside text-left text-sm">
                        <li>Sourcing remote professionals</li>
                        <li>Setting up online platforms</li>
                        <li>Remote contracts and policies</li>
                        <li>Onboarding and payroll support</li>
                        <li>Legal compliance & security</li>
                      </ul>
                    </>
                  )}
                  {i === 4 && (
                    <>
                      <p className="font-bold text-xl md:text-2xl">HOW WE HELP YOU SCALE</p>
                      <p>
                        <span className="font-bold">Efficient, Agile Workforce Solutions</span><br />
                        🌍 Global Reach <br />
                        🔒 Legal Compliance <br />
                        📈 Performance Tracking <br />
                        💼 Cost-Effective Operations
                      </p>
                      <ul className="list-disc list-inside text-left text-sm">
                        <li>Faster hiring</li>
                        <li>Lower HR costs</li>
                        <li>Scalable team growth</li>
                        <li>24/7 global support</li>
                        <li>Future-ready workforce</li>
                      </ul>
                    </>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img src={onImage} className="fixed blur-sm top-0 z-0 w-full h-full object-cover" alt="" />
    </div>
  );
};

export default OnLine;
