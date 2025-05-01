import React, { useEffect, useRef } from "react";
import { castsIconImage, castImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CastingAgency = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Entrance animation for title and subtitle
    gsap.fromTo(
      titleRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    // Scroll animation for icon
    gsap.fromTo(
      iconRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Scroll animation for all sections
    sectionRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="h-screen w-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide"
          >
            CASTING AGENCY
          </h1>
          <h2
            ref={subtitleRef}
            className="text-lg md:text-2xl font-medium mt-2 josefin mb-12"
          >
            JP Consulting & Services
          </h2>
        </div>

        <div className="h-full bgSVG px-4">
          <div className="pt-20 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
            <img
              ref={iconRef}
              src={castsIconImage}
              className="w-full max-w-sm rounded-lg"
              alt="Casting Icon"
            />
            <p className="text-base md:text-lg josefin font-semibold text-center md:text-left leading-relaxed border-l-4 border-black pl-4 italic">
              At JP Consulting & Services, our Casting Agency specializes in
              discovering and connecting top-tier talent with extraordinary
              opportunities. We understand that the right cast can elevate any
              project, and our dedicated team is committed to making perfect
              matches between talent and client needs.
              <br />
              <br />
              Whether you're looking for actors, models, or voice-over artists,
              we provide a diverse portfolio of professionals suited for
              commercials, films, photo shoots, corporate videos, and more.
              <br />
              <br />
              Our streamlined casting process ensures efficiency, reliability,
              and satisfaction. Let us bring your vision to life with the ideal
              cast.
            </p>
          </div>

          <div className="py-20 space-y-24">
            <section className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-6xl mx-auto">
              <div
                ref={(el) => (sectionRefs.current[0] = el)}
                className="w-full md:w-1/2 space-y-5 text-center md:text-left"
              >
                <p className="font-bold text-2xl">
                  FINDING THE RIGHT FACES FOR YOUR VISION
                </p>
                <p>
                  <span className="font-bold">
                    Talent That Brings Your Brand to Life
                  </span>
                  <br />
                  Our Casting Agency thrives on recognizing and promoting
                  outstanding talent. From screen to stage, our actors and
                  models are carefully selected to suit each project’s unique
                  demands. With a keen eye for potential and a heart for the
                  craft, we bridge the gap between talent and opportunity.
                </p>
              </div>
              <div
                ref={(el) => (sectionRefs.current[1] = el)}
                className="w-full md:w-1/2 space-y-5 text-center md:text-left"
              >
                <p className="font-bold text-2xl">YOUR CAST, YOUR MESSAGE</p>
                <p>
                  <span className="font-bold">Tailored Talent Solutions</span>
                  <br />
                  No two brands are the same, and neither are their stories. Our
                  casting solutions are tailored to meet your exact creative
                  vision. Whether it's for film, fashion, digital content, or
                  corporate videos, we provide a wide range of talents from
                  fresh faces to experienced professionals, ensuring your
                  message hits home.
                </p>
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-6xl mx-auto">
              <div
                ref={(el) => (sectionRefs.current[2] = el)}
                className="w-full md:w-1/2 space-y-5 text-center md:text-left"
              >
                <p className="font-bold text-2xl">
                  WE UNDERSTAND YOUR CREATIVE NEEDS
                </p>
                <p>
                  <span className="font-bold">
                    Precision, Professionalism, and Performance
                  </span>
                  <br />
                  Our experienced casting directors collaborate closely with
                  clients and production teams to understand each project's
                  tone, pace, and visual identity. With a vast network and
                  detailed audition processes, we ensure the final cast is not
                  only talented but a seamless fit for the role.
                </p>
              </div>

              <div
                ref={(el) => (sectionRefs.current[3] = el)}
                className="w-full md:w-1/2 space-y-5 text-center md:text-left"
              >
                <p className="font-bold text-2xl">HOW WE HELP YOU SUCCEED</p>
                <p>
                  <span className="font-bold">
                    Seamless Casting Experience
                  </span>
                  <br />
                  From scouting and auditions to bookings and on-set support, we
                  manage the entire casting workflow so you can focus on
                  creativity. We believe in building lasting relationships with
                  both talent and clients, fostering growth, reliability, and
                  artistic success.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <img
        src={castImage}
        className="fixed blur-sm top-0 z-0 w-full h-full object-cover"
        alt=""
      />
    </div>
  );
};

export default CastingAgency;
