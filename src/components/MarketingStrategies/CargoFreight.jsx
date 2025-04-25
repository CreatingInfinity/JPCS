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
            "#carsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#carsIcon',

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
                    <h1 className="text-6xl bold opacity-1     text-orange-500    tracking-wide">
                        CARGO FREIGHT
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bgSVG">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="carsIcon"
                            src={carsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        Cargo Freight Consultancy is the specialized service of guiding businesses through the complexities of freight transportation, logistics planning, and supply chain optimization. At JP Consulting & Services, we help you choose the right carriers, routes, and cost-effective strategies to ensure your goods move efficiently — whether across cities or across borders.  {" "}
                        <br />
                        <br />
                        Our consultancy ensures that your freight operations are aligned with industry standards, compliant with international trade regulations, and optimized for speed, cost, and reliability. Whether you're a startup looking to ship your first container or an established business aiming to reduce logistics costs, our freight experts are here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                MOVING BUSINESS FORWARD, EFFICIENTLY
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Logistics Solutions Designed for Growth
                                    </span>
                                    At JP Consulting & Services, our Cargo Freight Consultancy is built to help businesses optimize their supply chain operations, reduce costs, and ensure smooth movement of goods locally and globally. We simplify complex freight challenges so you can focus on scaling your business with confidence.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                STRATEGY THAT MOVES WITH YOU
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold"> Tailored Freight Solutions</span>
                                    No two businesses ship the same way — that’s why we offer personalized freight strategies based on your unique operational needs, shipment volumes, and target markets. From warehousing to last-mile delivery, we streamline every step of the logistics process.
                              </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                WE UNDERSTAND YOUR LOGISTICS CHALLENGES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Clear Paths Through Complex Logistics</span>
                                    Navigating global and domestic freight regulations, unpredictable costs, and supply chain delays can be overwhelming. Our experts help you make informed decisions, ensuring your logistics setup supports your business goals and budget.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">SERVICES WE OFFER</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Freight Process Optimization</li>
                                        <li>Carrier & Vendor Selection Support</li>
                                        <li>Cost Analysis & Budget Planning</li>
                                        <li>Customs Advisory & Documentation Guidance</li>
                                        <li>Route Planning & Risk Mitigation</li>
                                        <li>Warehousing & Inventory Strategy</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE DRIVE RESULTS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Freight Strategy That Works for You</span>
                                    🚛 Seamless Freight Coordination: Ensuring timely deliveries through trusted carrier networks<br />
                                    📊 Cost Efficiency Analysis: Identifying ways to save without compromising quality<br />
                                    🌎 Regulatory Guidance: Ensuring full compliance with international trade laws<br />
                                    🧩 Integrated Logistics Planning: Aligning freight with broader supply chain strategies
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Reduced freight costs and increased transparency </li>
                                        <li>Faster, more reliable shipping times</li>
                                        <li>
                                        Stronger supply chain resilience and risk management  </li>
                                        <li>
                                        Improved documentation and customs compliance </li>
                                        <li>Better customer satisfaction through on-time deliveries</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                       
            </div>
            <img src={carImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default CargoFreight;
