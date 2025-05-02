import React, { useEffect } from "react";
import { carsIconImage, carImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CargoFreight = () => {
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
        { x: 0, duration: 1, delay: 1, opacity: 1 }
      );

    const sections = ["section1", "section2", "section3", "section4"];
    sections.forEach((id, index) => {
      gsap.fromTo(
        `#${id}`,
        { y: 200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: `#${id}`,
            start: `${-80 + index * 20}% center`,
            end: "center 30%",
          },
          opacity: 1,
          duration: 1.5,
          y: 0,
        }
      );
    });

    gsap.fromTo(
      "#cargoIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#cargoIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
    );
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={carImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Cargo Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            CARGO FREIGHT
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="cargoIcon"
              src={carsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Cargo Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Cargo Freight Consultancy is a specialized service that helps
              businesses navigate the complexities of freight transportation,
              logistics planning, and supply chain optimization. Whether you are
              shipping products locally or globally, we work closely with you to
              find the best strategies to reduce costs and ensure efficiency.
              <br />
              <br />
              By aligning your logistics strategies with your business goals, we
              ensure that your supply chain operates seamlessly.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">OUR PROMISE</span> TO YOU
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Streamlining Freight Operations for Success
                </span>
                At JP Consulting & Services, we ensure your freight operations
                are optimized for efficiency, cost-effectiveness, and compliance
                with international trade regulations.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR PATH</span> TO EFFICIENCY
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Customized Solutions</span>
                We tailor our services to your business's specific needs and
                goals, ensuring that your logistics process is streamlined and
                efficient from start to finish.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">UNDERSTAND</span> YOUR CHALLENGES
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Identifying and Solving Issues</span>
                We help you identify operational inefficiencies, compliance
                challenges, and cost drivers, providing strategic solutions that
                help you achieve greater efficiency in your freight operations.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Challenges We Address</p>
                <ul className="list-disc list-inside">
                  <li>Costly and inefficient shipping methods</li>
                  <li>Regulatory hurdles and compliance issues</li>
                  <li>Inaccurate tracking and delayed deliveries</li>
                  <li>Managing high-volume shipments</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE HELP</span> YOUR BUSINESS THRIVE
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic Freight Solutions</span>
                We work with you to design the most efficient freight plan for
                your business, from vendor selection and route optimization to
                cost analysis and real-time tracking.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Optimized shipping routes and reduced costs</li>
                  <li>Faster and more reliable delivery times</li>
                  <li>Improved supply chain resilience</li>
                  <li>Better compliance with international regulations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to optimize your
              freight operations?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoFreight;
