import React, { useEffect } from "react";
import { logsIconImage, logImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Logistic = () => {
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
      "#logsIcon",
      { x: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#logsIcon",
          start: "top center",
          end: "20% 30%",
          scrub: 1,
        },
        opacity: 1,
        duration: 1.5,
        x: 0,
      }
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
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src={logImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Logistics Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            LOGISTIC CONSULTANCY
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="logsIcon"
              src={logsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Logistics Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Logistic Consultancy focuses on evaluating, designing, and improving
              the supply chain and logistics operations of a business. It encompasses
              everything from procurement, inventory management, and warehousing to
              transportation, distribution, and last-mile delivery. 
              <br />
              <br />
              At JP Consulting & Services, we help businesses develop smarter logistics
              strategies that reduce costs, enhance operational flow, and increase customer
              satisfaction. Whether you’re a growing company or an established enterprise,
              our experts work to streamline your logistics and unlock long-term efficiency.
              <br />
              <br />
              With deep industry knowledge and a hands-on approach, our consultancy ensures
              your logistics systems are agile, scalable, and built for success in today’s
              competitive marketplace.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section id="section1" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">SMARTER LOGISTICS, STRONGER BUSINESS</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Streamlined Supply Chains, Seamless Operations
                </span>
                At JP Consulting & Services, our Logistic Consultancy is designed to
                help businesses unlock efficiency, reduce costs, and gain full control over
                their supply chain. Whether you're launching a logistics-driven business or
                optimizing an existing operation, we deliver tailored solutions that improve
                performance at every stage.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section2" className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">YOUR SUPPLY CHAIN, SIMPLIFIED</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Customized Strategies for Maximum Efficiency
                </span>
                We take a hands-on, strategic approach to understanding your logistics
                needs — from inventory and warehousing to transportation and delivery. Our
                team creates custom plans that align with your goals, ensuring your supply
                chain becomes a competitive advantage, not a liability.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section3" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">OVERCOME YOUR LOGISTICS CHALLENGES</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Efficiency, Visibility & Control
                </span>
                Logistics is complex — but it doesn’t have to be chaotic. We help you address
                common pain points like delays, high costs, and miscommunication across your
                supply chain with expert insight and practical solutions.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Inefficient warehouse management</li>
                  <li>Rising transportation and fuel costs</li>
                  <li>Inventory control issues</li>
                  <li>Lack of supply chain visibility</li>
                  <li>Slow delivery timelines and unhappy customers</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="text-center max-w-5xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">
                <span className="orange">HOW WE OPTIMIZE YOUR OPERATIONS</span>
              </h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Logistics Solutions That Drive Growth</span>
                🚚 Supply Chain Analysis: Identify weaknesses and improvement areas
                <br />
                🧭 Route Optimization: Plan smarter transportation strategies
                <br />
                📦 Inventory Management: Improve stock control and reduce waste
                <br />
                🔗 Vendor Coordination: Streamline communication and scheduling
                <br />
                📊 Data-Driven Decisions: Use analytics to boost logistics performance
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Reduced operational costs and delays</li>
                  <li>Improved customer satisfaction through faster, more reliable delivery</li>
                  <li>Better inventory turnover and warehouse efficiency</li>
                  <li>Stronger relationships with logistics vendors</li>
                  <li>Scalable systems that grow with your business</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to optimize your logistics?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistic;
