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
                        PROCUREMENT CONSULTING
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="procsIcon"
                            src={procsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        Procurement Consulting involves the strategic analysis and optimization of a company’s purchasing and sourcing activities. At JP Consulting & Services, we help businesses streamline procurement processes, reduce costs, and improve vendor relationships. Our goal is to ensure that every purchase supports your operational efficiency, budget goals, and long-term strategy.{" "}
                            <br />
                            <br />
                       Whether you’re building a procurement system from the ground up or improving an existing one, our experts work closely with your team to design sourcing strategies, improve supplier performance, and ensure compliance — so your procurement function becomes a powerful engine for business growth.</p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                SMARTER SPENDING. STRATEGIC SOURCING.
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Procurement That Powers Performance
                                    </span>
                                    At JP Consulting & Services, our Procurement Consulting solutions are designed to help businesses gain greater control over their purchasing processes. From vendor selection to cost optimization, we align your procurement strategy with your operational goals — ensuring maximum value and efficiency at every step.
                              </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                YOUR SUPPLY CHAIN, OPTIMIZED
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Customized Strategies for Every Business</span>
                                    We don’t offer cookie-cutter solutions. Instead, we dive deep into your procurement workflow to understand your specific needs, challenges, and growth ambitions. Then, we create a personalized roadmap that improves supplier relationships, reduces costs, and increases transparency.
                              </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                WE KNOW THE PROCUREMENT PRESSURE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Efficiency. Cost. Compliance.</span>
                                    Procurement is more than just purchasing — it’s about balancing budgets, meeting deadlines, and maintaining quality. Whether you’re a small business or a growing enterprise, we ensure your procurement function runs like a well-oiled machine.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">CHALLENGES WE SOLVE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Inefficient or manual procurement processes</li>
                                        <li>High supplier costs or lack of vendor diversity</li>
                                        <li>Lack of visibility into spending patterns</li>
                                        <li>Compliance issues and policy inconsistencies</li>
                                        <li>IDelays in sourcing or onboarding vendors</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                OUR PROCUREMENT SERVICES

                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Strategic & Operational Support</span>
                                    📊 Spend Analysis: Uncover savings opportunities across your supply chain<br />
                                    🤝 Vendor Management: Improve relationships and performance tracking<br />
                                    ⚙️ Process Optimization: Streamline procurement workflows and approvals<br />
                                    📄 Policy Development: Implement standards and compliance frameworks<br />
                                    🛒 Sourcing Strategies: Identify and negotiate with the right suppliers
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Lower purchasing costs and increased profitability</li>
                                        <li>Improved vendor performance and accountability</li>
                                        <li>
                                        Faster, more reliable procurement cycles</li>
                                        <li>
                                        Stronger compliance and risk mitigation</li>
                                        <li>Scalable processes that grow with your business</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                       
            </div>
            <img src={procImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default ProcurementConsulting;
