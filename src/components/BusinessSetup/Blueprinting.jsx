import React, { useEffect } from "react";
import { blueprintingIconImage, blueprintingImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Blueprinting = () => {
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
      "#blueprintIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#blueprintIcon',
          
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
            BLUEPRINTING
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="blueprintIcon"
              src={blueprintingIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Blueprinting is not just about creating a document; it’s about
              laying a solid foundation that ensures every aspect of your
              business aligns with your long-term goals. Whether you’re starting
              a new business or scaling an existing one, having a detailed
              blueprint helps prevent costly mistakes, allows for smoother
              operations, and sets clear expectations for everyone involved.{" "}
              <br />
              <br />
              By taking the time to plan and strategize, you give your business
              the best chance for success and growth in a competitive market.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                  OUR PROMISE TO YOU
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Transformative Results, Tailored to Your Business
                  </span>
                  At JP Consulting & Services, our mission is to provide
                  customized, actionable solutions that deliver real, measurable
                  improvements in your business. Whether you're looking to
                  optimize processes, scale operations, or implement
                  cutting-edge strategies, we're here to help you succeed.
                </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                  YOUR PATH TO SUCCESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Personalized Strategy</span>
                  We don't believe in one-size-fits-all solutions. We take the
                  time to get to know your business, your goals, and your
                  market, then develop a personalized strategy that is as unique
                  as your company.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                  UNDERSTAND YOUR CHALLENGES
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR NEEDS ARE OUR PRIORITY</span>
                  We understand that every business faces unique challenges,
                  whether it's operational inefficiencies, technology
                  integration, or strategic planning. Our consulting services
                  are designed to directly address these challenges and help you
                  unlock your business's full potential.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">PAIN POINTS WE SOLVE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Streamlining complex business processes</li>
                    <li>Expanding your market reach</li>
                    <li>Integrating innovative technologies seamlessly</li>
                    <li>Improving operational efficiency and reducing costs</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOUR BUSINESS GROW
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">CUSTOM CONSULTING SERVICES</span>
                  Strategy Development: Helping you craft a roadmap for success,
                  whether you're a startup or scaling to the next level.
                  Integration: Adopting and integrating the right technology
                  solutions to make your business more efficient and
                  competitive.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                      Enhanced operational efficiency and reduced overhead costs
                    </li>
                    <li>A clearer, more actionable business strategy</li>
                    <li>
                      Increased profitability and better resource utilization
                    </li>
                    <li>
                      Improved customer satisfaction through better services and
                      quicker responses
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ContactUsFooter />
      </div>
      <img src={blueprintingImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Blueprinting;
