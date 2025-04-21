import React, { useEffect } from "react";
import { adsIconImage, adImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Advice = () => {
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
            "#adsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#adsIcon',

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
                        ADVICE
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="adsIcon"
                            src={adsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        At JP Consulting & Services, we provide strategic planning advice tailored to both private businesses and public service organizations. Our goal is to help leaders make informed, confident decisions that align with long-term objectives, operational capabilities, and evolving environments.   {" "}
                        <br />
                        <br />
                        We support your planning process by offering insights grounded in industry knowledge, data analysis, and real-world experience. Whether you're developing a new business model, improving public service delivery, or preparing for organizational change, our advisory services ensure your plans are structured, realistic, and results-driven.
                        <br />
                        <br />
                        By identifying key challenges, clarifying goals, and aligning stakeholders, we help you turn vision into action — with a roadmap that’s both practical and sustainable.
                        </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                BUILDING FOUNDATIONS FOR LONG-TERM SUCCESS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Insightful Guidance, Informed Decisions
                                    </span>
                                    At JP Consulting & Services, we provide expert advice to support businesses and public service organizations in their planning processes. Whether you're launching a new initiative, undergoing a transition, or setting long-term goals, we help you plan with clarity, precision, and purpose. </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                YOUR PLAN, YOUR FUTURE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold"> Tailored Planning Support</span>
                                    No two organizations are the same — and your strategy shouldn't be either. We collaborate closely with you to understand your mission, assess challenges, and identify opportunities. Our advice is grounded in practical experience and designed to empower confident, well-informed decision-making.      </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                UNDERSTAND YOUR ENVIRONMENT
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Navigating Complexity with Confidence</span>
                                    From evolving regulations to shifting market dynamics, planning can be overwhelming. We break down complexity into actionable steps, helping you stay ahead of change and aligned with your objectives.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">HOW WE SUPPORT YOUR PLANNING PROCESS</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Business Model & Market Analysis</li>
                                        <li>Operational & Capacity Planning</li>
                                        <li>Strategic Goal-Setting</li>
                                        <li>Risk Identification & Mitigation</li>
                                        <li>Stakeholder Alignment & Communication</li>
                                        <li>Policy and Public Service Frameworks</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Clear, actionable plans aligned with your goals    </li>
                                        <li>Confident decision-making rooted in data and experience</li>
                                        <li>
                                        Risk reduction through strategic foresight   </li>
                                        <li>
                                        Increased organizational efficiency and readiness  </li>
                                        <li>Stronger alignment across teams, departments, or agencies</li>
                                       
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
            <img src={adImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default Advice;
