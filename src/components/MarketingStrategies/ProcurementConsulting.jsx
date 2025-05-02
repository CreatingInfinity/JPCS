import React, { useEffect } from "react";
import { procsIconImage, procImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProcurementConsulting = () => {
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
      "#procsIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#procsIcon',
          start: 'top center',
          end: '20% 30%',
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
        src={procImage}
        className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        alt="Procurement Background"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
            PROCUREMENT CONSULTING
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
            JP Consulting & Services
          </h2>
        </div>

        <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
          {/* Icon and Intro */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              id="procsIcon"
              src={procsIconImage}
              className="w-full max-w-md rounded-lg"
              alt="Procurement Icon"
            />
            <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
              Procurement Consulting involves the strategic analysis and optimization of a company’s purchasing and sourcing activities. At JP Consulting & Services, we help businesses streamline procurement processes, reduce costs, and improve vendor relationships. Our goal is to ensure that every purchase supports your operational efficiency, budget goals, and long-term strategy.
              <br />
              <br />
              Whether you’re building a procurement system from the ground up or improving an existing one, our experts work closely with your team to design sourcing strategies, improve supplier performance, and ensure compliance — so your procurement function becomes a powerful engine for business growth.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-32">
            {/* Section 1 */}
            <section
              id="section1"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">SMARTER SPENDING. STRATEGIC SOURCING.</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">
                  Procurement That Powers Performance
                </span>
                At JP Consulting & Services, our Procurement Consulting solutions are designed to help businesses gain greater control over their purchasing processes. From vendor selection to cost optimization, we align your procurement strategy with your operational goals — ensuring maximum value and efficiency at every step.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="section2"
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">YOUR SUPPLY CHAIN, OPTIMIZED</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Customized Strategies for Every Business</span>
                We don’t offer cookie-cutter solutions. Instead, we dive deep into your procurement workflow to understand your specific needs, challenges, and growth ambitions. Then, we create a personalized roadmap that improves supplier relationships, reduces costs, and increases transparency.
              </p>
            </section>

            {/* Section 3 */}
            <section
              id="section3"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">WE KNOW THE PROCUREMENT PRESSURE</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Efficiency. Cost. Compliance.</span>
                Procurement is more than just purchasing — it’s about balancing budgets, meeting deadlines, and maintaining quality. Whether you’re a small business or a growing enterprise, we ensure your procurement function runs like a well-oiled machine.
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Challenges We Solve</p>
                <ul className="list-disc list-inside">
                  <li>Inefficient or manual procurement processes</li>
                  <li>High supplier costs or lack of vendor diversity</li>
                  <li>Lack of visibility into spending patterns</li>
                  <li>Compliance issues and policy inconsistencies</li>
                  <li>Delays in sourcing or onboarding vendors</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="section4"
              className="text-center max-w-5xl mx-auto space-y-6"
            >
              <h3 className="text-2xl font-bold"><span className="orange">OUR PROCUREMENT SERVICES</span></h3>
              <p className="text-base md:text-lg font-josefin">
                <span className="font-bold block">Strategic & Operational Support</span>
                📊 Spend Analysis: Uncover savings opportunities across your supply chain<br />
                🤝 Vendor Management: Improve relationships and performance tracking<br />
                ⚙️ Process Optimization: Streamline procurement workflows and approvals<br />
                📄 Policy Development: Implement standards and compliance frameworks<br />
                🛒 Sourcing Strategies: Identify and negotiate with the right suppliers
              </p>
              <div className="text-left mx-auto max-w-md">
                <p className="font-bold text-center mb-2">Your Benefits</p>
                <ul className="list-disc list-inside">
                  <li>Lower purchasing costs and increased profitability</li>
                  <li>Improved vendor performance and accountability</li>
                  <li>Faster, more reliable procurement cycles</li>
                  <li>Stronger compliance and risk mitigation</li>
                  <li>Scalable processes that grow with your business</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-20">
            <p className="text-lg font-semibold">
              <span className="text-orange-600">Ready</span> to optimize your procurement processes?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementConsulting;
