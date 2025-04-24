import React, { useEffect } from "react";
import { strsIconImage, strImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
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
            "#strsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#strsIcon',

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
                        STRATEGY ADVISORY SERVICES
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="strsIcon"
                            src={strsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        Our Strategy Advisory Services are designed to help businesses make smarter, future-focused decisions. At JP Consulting & Services, we provide expert insights and tailored strategies that align with your goals, mitigate risks, and unlock new growth opportunities. Whether you're a startup defining your vision or an established company ready to scale, we guide you through every critical decision with confidence and clarity.{" "}
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                FORWARD-THINKING STRATEGIES THAT DRIVE RESULTS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Insightful Guidance. Measurable Growth.
                                    </span>
                                    At JP Consulting & Services, our Strategy Advisory Services are built to help you navigate complexity, seize new opportunities, and position your business for long-term success. Whether you're launching a new venture, entering a new market, or reimagining your operations — we’re your strategic partner every step of the way.
                              </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                CUSTOMIZED FOR YOUR JOURNEY
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Every Strategy Starts with Understanding</span>
                                    No two businesses are the same. We start by learning about your mission, values, market landscape, and objectives. From there, we craft strategic recommendations that are practical, scalable, and tailored to your unique challenges and ambitions.
                              </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                IDENTIFYING GAPS, UNCOVERING OPPORTUNITIES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">We Help You See the Big Picture</span>
                                    We analyze your current position, pinpoint inefficiencies, and identify areas for growth. Our advisors provide actionable insights that enable you to make confident, data-driven decisions.
                               </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">CORE AREAS WE SUPPORT</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Strategic Planning & Roadmapping</li>
                                        <li>Business Model Innovation</li>
                                        <li>Market Entry & Expansion Strategies</li>
                                        <li>Organizational Alignment & Change Management</li>
                                        <li>Competitive Analysis & Positioning</li>
                                        <li>Risk Assessment & Mitigation</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE EMPOWER YOUR BUSINESS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Practical, Future-Focused Advice</span>
                                    📊 Data-Driven Analysis: Turning insights into competitive advantages<br />
                                    🧭 Strategic Clarity: Helping you define direction and focus<br />
                                    ⚙️ Operational Alignment: Ensuring your structure supports your vision<br />
                                    🚀 Execution Support: Bridging the gap between strategy and action

                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        A clear, actionable strategic roadmap</li>
                                        <li>Stronger positioning in your industry</li>
                                        <li>
                                        Improved decision-making through expert guidance</li>
                                        <li>
                                        Greater agility and resilience in a changing markets</li>
                                        <li>Long-term growth fueled by focused planning</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                       
            </div>
            <img src={strImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default Strategy;
