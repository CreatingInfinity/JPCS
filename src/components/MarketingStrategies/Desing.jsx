import React, { useEffect } from "react";
import { desIconImage, deImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Desing = () => {
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
            "#desIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#desIcon',
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
                    <h1 className="text-4xl md:text-6xl font-bold opacity-1 text-orange-500 tracking-wide">
                        DESIGNING OF ACCOUNTING METHODS
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mt-1 josefin text-white mb-8 md:mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bgSVG">
                    <div className="pt-20 md:pt-40 text-black flex flex-col md:flex-row justify-center items-center gap-10">
                        <img
                            id="desIcon"
                            src={desIconImage}
                            className="h-64 md:h-80 rounded-lg"
                            alt="Accounting Icon"
                        />
                        <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            At JP Consulting & Services, we offer expert design and implementation of accounting systems tailored to your business needs. Our service focuses on developing efficient accounting methods, robust cost accounting programs, and reliable budgetary control procedures to help you manage financial operations with confidence and clarity. 
                            <br />
                            <br />
                            We ensure that your financial practices are aligned with industry standards and customized for your company’s structure. From setting up accurate recording methods to designing cost-tracking mechanisms and implementing real-time budget monitoring systems — we provide the tools and strategies you need to make informed, data-driven decisions.
                            <br />
                            <br />
                            Whether you're a startup building your financial infrastructure or an established business looking to optimize your current systems, our solutions are built to improve transparency, efficiency, and financial control.
                        </p>
                    </div>
                    <div className="h-full space-y-12 py-20 md:py-40">
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section1" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-xl md:text-2xl text-center">
                                    STRUCTURED FOR GROWTH
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                        Logistics Solutions Designed for Growth
                                    </span>
                                    At JP Consulting & Services, we specialize in crafting accounting systems and cost control frameworks that give your business a strategic edge. From designing efficient accounting methods to implementing budgetary control procedures, we make sure your financial backbone supports scalability, compliance, and profitability.      
                                </p>
                            </div>
                            <div id="section2" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-xl md:text-2xl text-center">
                                    YOUR FINANCIAL STRATEGY, CUSTOMIZED
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold"> Tailored Financial Frameworks</span>
                                    We don’t believe in generic templates. We analyze your business structure, industry requirements, and financial goals to develop accounting procedures and systems that are built specifically for your operational needs and future growth.
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section3" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-xl md:text-2xl text-center">
                                    WE KNOW WHAT COUNTS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Numbers That Drive Decisions</span>
                                    A reliable accounting system is the foundation of sound financial decisions. Whether you’re aiming to control costs, allocate budgets effectively, or streamline reporting — our solutions are designed to empower informed decision-making at every level.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE DESIGN</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Accounting Methods & Recording Procedures</li>
                                        <li>Cost Accounting Programs</li>
                                        <li>Budget Planning & Control Systems</li>
                                        <li>Internal Controls for Financial Accuracy</li>
                                        <li>Standard Operating Procedures for Finance Teams</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-xl md:text-2xl text-center">
                                    HOW WE DRIVE VALUE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Integrated Financial Solutions</span>
                                    🧾 Customized Chart of Accounts: Organized for your specific business structure<br />
                                    📊 Cost Tracking Programs: Gain insights into operational and production costs<br />
                                    📉 Budgetary Control Systems: Plan, monitor, and adjust financial performance<br />
                                    🔐 Internal Controls: Reduce risk and ensure data integrity<br />
                                    🧠 Training & SOP Documentation: Equip your team with easy-to-follow procedures
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Greater control over expenses and cash flow</li>
                                        <li>Clearer financial reporting and audit readiness</li>
                                        <li>Improved decision-making backed by accurate data</li>
                                        <li>Stronger compliance with regulatory and tax standards</li>
                                        <li>Streamlined financial processes that save time and reduce errors</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <img src={deImage} className="fixed blur-sm top-0 z-1 w-full" alt="" />
        </div>
    );
};

export default Desing;
