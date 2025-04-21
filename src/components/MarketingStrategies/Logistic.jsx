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
            "#logsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#logsIcon',

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
                        LOGISTIC CONSULTANCY
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="logsIcon"
                            src={logsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                           Logistic Consultancy focuses on evaluating, designing, and improving the supply chain and logistics operations of a business. It encompasses everything from procurement, inventory management, and warehousing to transportation, distribution, and last-mile delivery.{" "}
                            <br />
                            <br />
                           At JP Consulting & Services, we help businesses develop smarter logistics strategies that reduce costs, enhance operational flow, and increase customer satisfaction. Whether you’re a growing company or an established enterprise, our experts work to streamline your logistics and unlock long-term efficiency.
                            <br />
                            <br />
                            With deep industry knowledge and a hands-on approach, our consultancy ensures your logistics systems are agile, scalable, and built for success in today’s competitive marketplace.
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               SMARTER LOGISTICS, STRONGER BUSINESS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                   Streamlined Supply Chains, Seamless Operations
                                    </span>
                                  At JP Consulting & Services, our Logistic Consultancy is designed to help businesses unlock efficiency, reduce costs, and gain full control over their supply chain. Whether you're launching a logistics-driven business or optimizing an existing operation, we deliver tailored solutions that improve performance at every stage.
                              </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                             YOUR SUPPLY CHAIN, SIMPLIFIED
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Customized Strategies for Maximum Efficiency</span>
                                  We take a hands-on, strategic approach to understanding your logistics needs — from inventory and warehousing to transportation and delivery. Our team creates custom plans that align with your goals, ensuring your supply chain becomes a competitive advantage, not a liability.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                            OVERCOME YOUR LOGISTICS CHALLENGES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Efficiency, Visibility & Control</span>
                                   Logistics is complex — but it doesn’t have to be chaotic. We help you address common pain points like delays, high costs, and miscommunication across your supply chain with expert insight and practical solutions.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">PAIN POINTS WE SOLVE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Inefficient warehouse management</li>
                                        <li>Rising transportation and fuel costs</li>
                                        <li>Inventory control issues</li>
                                        <li>Lack of supply chain visibility</li>
                                        <li>Slow delivery timelines and unhappy customers</li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                              HOW WE OPTIMIZE YOUR OPERATIONS

                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Logistics Solutions That Drive Growth</span>
                                    🚚 Supply Chain Analysis: Identify weaknesses and improvement areas<br />
                                    🧭 Route Optimization: Plan smarter transportation strategies<br />
                                    📦 Inventory Management: Improve stock control and reduce waste<br />
                                   🔗 Vendor Coordination: Streamline communication and scheduling<br />
                                   📊 Data-Driven Decisions: Use analytics to boost logistics performance
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Reduced operational costs and delays</li>
                                        <li>Improved customer satisfaction through faster, more reliable delivery</li>
                                        <li>
                                        Better inventory turnover and warehouse efficiency</li>
                                        <li>
                                        Stronger relationships with logistics vendors</li>
                                        <li>Scalable systems that grow with your business</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="h-screen bg-gray-100 border-t-2 border-black pt-30 space-y-10">
                    <p className="bold text-4xl text-center">
                        <span className="text-amber-600">JP</span> Consulting & Services
                    </p>
                    <p className="text-center josefin text-2xl">
                        Success is a journey, not a destination.
                    </p>
                    <div className=" flex flex-col gap-5 bg-amber-400 shadow rounded-lg items-center p-5 mx-25">
                        <p className="text-justify w-200 josefin text-lg font-semibold">
                            We work closely with businesses to understand their specific needs
                            and challenges. By offering personalized solutions, we help
                            clients navigate complex problems and unlock new opportunities for
                            success. From streamlining operations to strategic planning, we
                            aim to enhance your business performance, fostering long-term
                            growth and stability. Together, we empower your business to
                            achieve its full potential.
                        </p>
                        <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            Contact Us
                        </button>
                        <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
            <img src={logImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default Logistic;
