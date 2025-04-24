import React, { useEffect } from "react";
import { projsIconImage, projImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectManagement = () => {
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
            "#projsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#projsIcon',

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
                        PROJECT MANAGEMENT SERVICES
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="projsIcon"
                            src={projsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        Our Project Management Services at JP Consulting & Services provide end-to-end support to ensure your business projects are delivered on time, within scope, and on budget. We handle planning, coordination, execution, and monitoring — so you can focus on strategic growth.{" "}
                            <br />
                            <br />
                            Whether you're launching a new venture, expanding operations, or implementing a complex initiative, we bring structure, accountability, and clarity to every phase of your project.
                      </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                TURNING PLANS INTO RESULTS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Structured Execution, Seamless Delivery
                                    </span>
                                    At JP Consulting & Services, our Project Management Services are designed to help you bring complex ideas to life — efficiently, effectively, and on time. Whether you're launching a new product, implementing new systems, or driving organizational change, we guide you from concept to completion with precision and professionalism.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                BUILT AROUND YOUR VISION
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Tailored Project Planning & Execution</span>
                                    No two projects are the same. That’s why we build a custom project management strategy that aligns with your goals, budget, timeline, and team structure. From the first milestone to the final handoff, we keep your priorities front and center.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                UNDERSTAND THE OBSTACLES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Proactive Management, Measurable Impact</span>
                                    We know that project delays, scope creep, and miscommunication can derail even the best ideas. Our approach mitigates those risks through clear communication, agile planning, and meticulous oversight — ensuring smooth, successful project delivery.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE MANAGE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Business Setup & Launch Projects</li>
                                        <li>Operational Expansions</li>
                                        <li>Technology Implementations</li>
                                        <li>Marketing Campaign Rollouts</li>
                                        <li>Strategic Planning Initiatives</li>
                                        <li>Cross-Functional Team Coordination</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE DRIVE SUCCESS


                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">End-to-End Project Solutions</span>
                                    📋 Project Scoping & Planning: Defining goals, timelines, resources, and roles<br />
                                    🔄 Agile Execution: Monitoring progress, adapting quickly, and removing roadblocks<br />
                                    🤝 Stakeholder Coordination: Ensuring alignment and accountability at every level<br />
                                    ✅ Risk Management & Quality Assurance: Proactively addressing challenges and ensuring excellence

                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Projects delivered on time, within scope, and on budget</li>
                                        <li>Reduced operational stress and clearer task ownership</li>
                                        <li>
                                        Improved team collaboration and communication</li>
                                        <li>
                                        Faster decision-making through real-time insights</li>
                                        <li>Strategic focus with measurable results</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                       
            </div>
            <img src={projImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default ProjectManagement;
