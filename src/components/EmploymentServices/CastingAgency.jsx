import React, { useEffect } from "react";
import { castsIconImage, castImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CastingAgency = () => {
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
      "#castsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#castsIcon",

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
        <div className="h-screen w-full justify-center flex flex-col items-center text-white">
          <h1 className="text-6xl bold opacity-1 text-amber-400 tracking-wide">
            CASTING AGENCY
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="castsIcon"
              src={castsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, our Casting Agency specializes in
              connecting businesses and creatives with the right talent to bring
              their visions to life. Whether you're producing a commercial, a
              corporate campaign, a fashion shoot, or a digital content series,
              we source, screen, and secure top-tier talent that aligns with
              your goals and brand identity. <br />
              <br />
              We understand that the right cast can elevate your message —
              making it memorable, relatable, and impactful. That's why we offer
              a personalized approach to casting, ensuring that every role is
              filled with the perfect fit, from professional models and actors
              to voice-over artists and event hosts.
              <br />
              <br />
              Our services are fast, reliable, and comprehensive — designed to
              streamline your production process and deliver talent that
              performs with professionalism and purpose.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  FINDING THE RIGHT FACES FOR YOUR VISION
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Talent That Brings Your Brand to Life
                  </span>
                  At JP Consulting & Services, our Casting Agency division is
                  dedicated to sourcing, vetting, and connecting you with the
                  ideal talent for your project — whether it's a commercial,
                  corporate video, brand campaign, or event. We match the right
                  people to your creative and business goals, ensuring
                  authenticity, diversity, and excellence.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR CAST, YOUR MESSAGE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Tailored Talent Solutions</span>
                  We don’t believe in generic casting. Our approach starts with
                  understanding your concept, audience, and brand tone. From
                  there, we handpick talent that aligns perfectly with your
                  vision — whether you're looking for professionals, models,
                  voice-over artists, or character-specific roles.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  WE UNDERSTAND YOUR CREATIVE NEEDS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Precision, Professionalism, and Performance
                  </span>
                  Choosing the wrong cast can weaken the impact of your message.
                  That’s why we focus on details — from the first brief to final
                  booking — ensuring each individual we recommend is skilled,
                  reliable, and project-ready.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE PROVIDE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Commercial & TV Ad Casting</li>
                    <li>Social Media & Influencer Campaign Talent</li>
                    <li>Corporate Video Presenters & Actors</li>
                    <li>Fashion & Editorial Models</li>
                    <li>Voice-Over Artists</li>
                    <li>Event Hosts, Brand Ambassadors & Emcees</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE HELP YOU SUCCEED
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Seamless Casting Experience</span>
                  🎯 Targeted Talent Search: We source talent based on your
                  specific brief
                  <br />
                  ✅ Pre-screened & Vetted Talent: Professionalism guaranteed
                  <br />
                  🤝 Flexible Contracts & Coordination: From casting to call
                  sheets — we handle it
                  <br />
                  🎬 On-Set Support (Optional): We stay involved to make sure
                  production runs smoothly
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Access to a diverse, professional talent pool</li>
                    <li>Faster casting with minimal stress</li>
                    <li>Tailored selections that fit your brand image</li>
                    <li>Reduced risk through pre-vetted, experienced talent</li>
                    <li>
                      A polished final product that resonates with your audience
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
               
      </div>
      <img src={castImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default CastingAgency;
