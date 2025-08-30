import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";
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
    desc: "Expert guidance on Australian visas and migration pathways. From student and skilled visas to business and partner visas, we simplify the process and maximize your chances of success.",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FBusiness%20Setup.mp4?alt=media&token=51649369-b83c-415b-906f-e052a9cb4637",
    title: "BUSINESS SETUP",
    desc: "Complete solutions for starting and growing your business in the UAE and beyond. From licensing and legal compliance to advisory and operations support, we ensure a smooth launch.",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2FIT%20Services.mp4?alt=media&token=a709bd42-e002-4b07-9ce5-e6fcd0617e66",
    title: "INNOVATION AND ARTIFICIAL INTELLIGENCE",
    desc: "Cutting-edge IT infrastructure, custom software development, and AI-powered solutions that accelerate digital transformation and keep your business future-ready.",
  },
  {
    link: "https://firebasestorage.googleapis.com/v0/b/jpcs-website.firebasestorage.app/o/jpcs-files%2Frecruitment%20and%20employment.mp4?alt=media&token=d34f6e35-04ec-49cc-a81d-b7c119f54a02",
    title: "EMPLOYMENT AND RECRUITMENT SERVICES",
    desc: "Connecting businesses with top talent and individuals with career opportunities. We specialize in recruitment, staffing, and workforce solutions across industries.",
  },
];

const Hero = () => {
  const videoRef = useRef(null);

  const titleRefs = useRef([]);
  titleRefs.current = [];

  const videoRefs = useRef([]);
  videoRefs.current = [];

  // useEffect(() => {
  //   videoRefs.current.forEach((video, i) => {
  //     ScrollTrigger.create({
  //       trigger: video.parentElement,
  //       start: "top 50%",
  //       end: "bottom top",
  //       onEnter: () => video.play().catch(console.log),
  //       onLeave: () => video.pause(),
  //       onEnterBack: () => video.play().catch(console.log),
  //       onLeaveBack: () => video.pause(),
  //     });

  //     ScrollTrigger.create({
  //       trigger: video.parentElement,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false,
  //     });
  //   });

  //   titleRefs.current.forEach((title, i) => {
  //     gsap.fromTo(
  //       title,
  //       {
  //         opacity: 0,
  //         y: 80,
  //         scale: 0.9,
  //         filter: "blur(10px)",
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         filter: "blur(0px)",
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: videoRefs.current[i].parentElement,
  //           start: "top center",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  // }, []);

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

  const cards = [
    { id: 1, color: "bg-gray-300" },
    { id: 2, color: "bg-orange-400" },
    { id: 3, color: "bg-yellow-600" },
    { id: 4, color: "bg-lime-300" },
  ];

  const [active, setActive] = useState(2); // middle card index

  return (
    <div className="relative text-white overflow-x-hidden poppins">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        src={heroVideo2}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/10 to-black/100 z-0" />

      {/* Hero Text */}
      <div className="relative z-10 h-screen flex items-center px-4 sm:px-8 md:px-16 snap-start">
        <h1 className="text-8xl absolute top-85 drop-shadow-lg sm:text-5xl md:text-6xl/14 bold leading-snug fade-in">
          Powering Your Business Forward.
        </h1>
        <div className="space-y-10">
          <p className="max-w-md sm:max-w-2xl mt-6 text-sm sm:text-lg md:text-sm fade-in">
            JP Consulting and Services LLC (JPCS) is your trusted partner for
            innovation, growth, and opportunity without limits. We deliver
            world-class IT infrastructure, strategic digital marketing,
            transformative AI solutions, and international immigration
            consultancy — all under one roof to accelerate your success. Member
            of the FIS Inventors Society – reinforcing our commitment to
            innovation, excellence, and forward-thinking solutions.
          </p>
          <Link
            to="/Contact"
            className="mt-10 bg-white text-black text-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold  transition-all hover:bg-orange-500 hover:text-white fade-in"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 text-white bg-black snap-start">
        <span className="absolute top-[14%] left-30 text-5xl bold z-99 drop-shadow-lg">
          OUR <span className="text-orange-600">SERVICES</span>
        </span>
        <div className="absolute h-20 w-20 bg-orange-500 z-9 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-2 h-10 w-20 bg-orange-500 z-9 rounded-full blur-3xl"></div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation
          pagination={{ clickable: true }}
          className="mt-10 w-[90%]"
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
              desc: "Turn your vision into reality with our business setup expertise. We handle licensing, legal formalities, and operational frameworks so you can focus on growth and success.",
            },
            {
              title: "INNOVATION AND ARTIFICIAL INTELLIGENCE",
              image: castImage,
              link: "/ITServices",
              child: [
                "IT and Infrastructure Services",
                "Application Development",
                "Digital Marketing",
              ],
              desc: "Harness the power of next-gen technology. We deliver IT infrastructure, AI-driven solutions, and digital innovation designed to transform the way your business operates.",
            },
            {
              title: "EMPLOYMENT AND RECRUITMENT SERVICES",
              image: setImage,
              link: "/EmploymentServices",
              child: [
                "Casting Agency",
                "Personnel Search",
                "Online Employment Placement Agencies",
              ],
              desc: "Build winning teams with our recruitment expertise. We connect employers to top talent and guide job seekers toward rewarding careers across diverse industries.",
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
              desc: "Navigate Australia’s immigration system with confidence. From skilled and student visas to business and partner pathways, we provide end-to-end support to help you achieve your goals abroad.",
            },
          ].map(({ title, image, link, child, desc }, i) => (
            <SwiperSlide key={i}>
              <div className="relative group block">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 sm:h-80 md:h-120 object-cover opacity-40 transition duration-300 rounded"
                />
                <div className="absolute flex flex-col items-end top-25 text-end right-20 z-50">
                  <Link
                    to={link}
                    reloadDocument
                    className="text-xl sm:text-2xl w-100 hover:underline hover:text-orange-500 transition poppins-bold pb-4 drop-shadow-lg"
                  >
                    {title}
                  </Link>
                  <p className="w-200">{desc}</p>
                </div>
                <div className="absolute bottom-10 left-10">
                  {child && (
                    <ul className="grid grid-flow-col grid-rows-2 gap-2 margin-0 text-lg">
                      {child.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white no-select cursor-pointer transition bg-white text-black text-xs"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Why Choose Us Section */}
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
          What Makes Us <span className="text-orange-600">Different?</span>
        </h2>
        <ul className="mt-4 text-base text-start sm:text-lg text-gray-600 max-w-lg sm:max-w-2xl space-y-2 list-disc">
          <li>Integrated Expertise – Technology, marketing, and migration mastery in one partner.</li>
          <li>20+ Years of Leadership – Proven entrepreneurial excellence.</li>
          <li>International Reach – Serving clients across multiple regions.</li>
          <li>Luxury-Grade Service – Corporate sophistication with personal precision.</li>
          <li>Innovation-Driven – Member of the FIS Inventors Society, driving the future of business solutions.</li>
        </ul>
        <Link
          to="/About"
          reloadDocument
          className="mt-8 bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all hover:bg-orange-600"
        >
          Learn More
        </Link>
      </div>

      <div className="flex bg-gray-100 justify-center items-center h-screen">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          centeredSlides
          loop
          spaceBetween={-50}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full max-w-11xl h-[500px]"
        >
          {vid.map((item, id) => (
            <SwiperSlide key={id}>
              <div className="expanding-card relative w-full h-full overflow-hidden rounded-lg transparent shadow-lg transition-all duration-500">
                <video
                  className="card-cover w-full h-2/3 object-cover"
                  src={item.link}
                  muted
                  loop
                  autoPlay
                  playsInline
                />

                <div className="card-content absolute poppins-regular bottom-0 left-0 w-full h-1/3 bg-white p-4 opacity-0 transition-all duration-500">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-black/90 pt-5 ">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
