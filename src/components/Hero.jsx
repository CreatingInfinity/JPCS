import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import {
  businessImage,
  castImage,
  setImage,
  marketingImage,
  downArrow,
  heroVideo2,
} from "../utils";

gsap.registerPlugin(ScrollTrigger);

const vid = [
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FAustralian%20Visa.mp4?alt=media&token=037d021f-a909-417e-be82-e77d64cd0f1e",
    title: "AUSTRALIAN IMMIGRATION CONSULTANCY",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FBusiness%20Setup.mp4?alt=media&token=51649369-b83c-415b-906f-e052a9cb4637",
    title: "BUSINESS SETUP",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FIT%20Services.mp4?alt=media&token=a709bd42-e002-4b07-9ce5-e6fcd0617e66",
    title: "INNOVATION AND ARTIFICIAL INTELLIGENCE",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2Frecruitment%20and%20employment.mp4?alt=media&token=d34f6e35-04ec-49cc-a81d-b7c119f54a02",
    title: "EMPLOYMENT AND RECRUITMENT SERVICES",
  },
];

const Hero = () => {
  const videoRef = useRef(null);

  const titleRefs = useRef([]);
  titleRefs.current = [];

  const videoRefs = useRef([]);
  videoRefs.current = [];

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      ScrollTrigger.create({
        trigger: video.parentElement,
        start: "top 50%",
        end: "bottom top",
        onEnter: () => video.play().catch(console.log),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play().catch(console.log),
        onLeaveBack: () => video.pause(),
      });

      ScrollTrigger.create({
        trigger: video.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });
    });

    titleRefs.current.forEach((title, i) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRefs.current[i].parentElement,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        entry.isIntersecting ? video.play().catch(console.log) : video.pause();
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src="https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FhomepageJPCS.mp4?alt=media&token=ba344284-aa0b-4a10-8043-03ba9dd90a87"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/10 to-black/100 z-0" />

      {/* Hero Text */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center  text-center px-4 sm:px-8 md:px-16 snap-start">
        <h1 className="text-3xl drop-shadow-lg sm:text-5xl md:text-6xl/14 font-bold leading-snug fade-in">
          Embrace the problems, <br /> one solution at a time.
        </h1>
        <p className="max-w-md sm:max-w-2xl mt-6 text-base sm:text-lg md:text-xl fade-in">
          At JP Consulting & Services, we provide tailored, high-impact
          solutions for business growth, efficiency, and innovation.
        </p>
        <Link
          to="/Contact"
          className="mt-8 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold  transition-all hover:bg-orange-500 hover:text-white fade-in"
        >
          Get in Touch
        </Link>
      </div>

      
      {/* Services Section */}
      <div className="pt-24 text-white bg-black snap-start">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation
          pagination={{ clickable: true }}
          className="mt-10"
        >
          {[
            {
              title: "BUSINESS SETUP",
              image: businessImage,
              link: "/Business",
              child: [
                "Strategy Advisory Services",
                "Business License",
                "Health Management",
                "Hospitality Management",
                "Marketing Consultancy",
                "VIP Medical And Emirates ID",
              ],
            },
            {
              title: "INNOVATION AND ARTIFICIAL INTELLIGENCE",
              image: castImage,
              link: "/ITServices",
              child: ["Machine Learning", "Automation", "AI Tools"],
            },
            {
              title: "EMPLOYMENT AND RECRUITMENT SERVICES",
              image: setImage,
              link: "/EmploymentServices",
              child: [
                "Casting Agency",
                "Personnel Search",
                "Online Employment",
                "Placement Agencies",
              ],
            },
            {
              title: "AUSTRALIAN IMMIGRATION CONSULTANCY",
              image: marketingImage,
              link: "/Australia",
              child: [
                "Administrative Appeals Tribunal",
                "Business/Investor Visa",
                "Student Visa",
                "Skilled Visa",
                "GSM 189/190/491 Visa",
                "Partner Visa",
                "Visitor Visa",
                "Skills Assessment",
                "Other Visas",
              ],
            },
          ].map(({ title, image, link, child }, i) => (
            <SwiperSlide key={i}>
              <Link to={link} reloadDocument className="relative group block">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 sm:h-80 md:h-140 object-cover group-hover:opacity-60 transition duration-300 opacity-40 rounded"
                />
                <div className="absolute top-10 left-15 z-50">
                  <h2 className="text-4xl sm:text-6xl font-bold pb-4 drop-shadow-lg">
                    {title}
                  </h2>
                  {child && (
                    <ul className="mt-3 space-y-1 text-lg">
                      {child.map((item, idx) => (
                        <li
                          key={idx}
                          className="drop-shadow-md bg-orange-500/30 text-white font-semibold py-1 pl-5"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Why Choose Us Section */}
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">
          What Makes Us Different?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg sm:max-w-2xl">
          We are committed to delivering exceptional service and innovative
          solutions tailored to your unique needs.
        </p>
        <Link
          to="/About"
          reloadDocument
          className="mt-8 bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all hover:bg-orange-600"
        >
          Learn More
        </Link>
      </div>


      <section className="">
        {vid.map((src, i) => (
          <div key={i} className="bg-black relative">
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              className="w-full object-cover h-screen opacity-70"
              src={src.link}
              muted
              loop
              playsInline
            />
            <h1
              ref={(el) => (titleRefs.current[i] = el)}
              className="absolute top-30 left-10 text-center text-4xl sm:text-6xl md:text-7xl font-bold text-white opacity-0 drop-shadow-2xl"
            >
              {src.title}
            </h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hero;
