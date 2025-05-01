import React, { useEffect } from "react";
import { hesIconImage, heImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HealthManagement = () => {
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
            "#hesIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#hesIcon',
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
                    <h1 className="text-4xl md:text-6xl font-bold opacity-1 text-orange-500 tracking-wide text-center">
                        HEALTH MANAGEMENT
                    </h1>
                    <h2 className="text-lg md:text-2xl font-medium mt-1 josefin text-white mb-12 text-center">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bgSVG">
                    <div className="pt-40 text-black flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4">
                        <img
                            id="hesIcon"
                            src={hesIconImage}
                            className="h-48 md:h-80 rounded-lg"
                            alt="Health Icon"
                        />
                        <p className="text-base md:text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            Health Management Consulting Services at JP Consulting & Services are designed to support healthcare providers, clinics, hospitals, and wellness organizations in optimizing their operations, enhancing patient outcomes, and navigating complex healthcare regulations.
                            <br />
                            <br />
                            Our consultants bring industry-specific knowledge to help improve clinical workflows, streamline administrative processes, and implement innovative health technologies. We work alongside your leadership team to create actionable strategies that align with your mission, improve financial performance, and support sustainable growth.
                        </p>
                    </div>
                    <div className="h-full space-y-20 py-20">
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section1" className="w-full md:w-1/2 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                    OPTIMIZING CARE, ENHANCING OPERATIONS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                        Strategic Solutions for the Health Sector
                                    </span>
                                    At JP Consulting & Services, we deliver specialized consulting tailored to healthcare providers, institutions, and health-focused organizations. Our mission is to improve operational performance, streamline patient care processes, and support sustainable growth — all while prioritizing compliance, quality, and compassion.
                                </p>
                            </div>
                            <div id="section2" className="w-full md:w-1/2 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                    TAILORED STRATEGIES FOR HEALTHCARE SUCCESS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Every Facility Is Unique — So Are Our Solutions</span>
                                    We take the time to understand your facility, your patients, and your challenges. From private clinics to large medical centers, we design actionable strategies that fit your goals — driving measurable results in service delivery, resource management, and financial performance.
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section3" className="w-full md:w-1/2 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                    NAVIGATING COMPLEX HEALTHCARE CHALLENGES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Your Needs, Our Expertise</span>
                                    In today’s rapidly evolving healthcare landscape, organizations face increasing pressure to innovate, cut costs, and maintain high standards of care. We partner with you to address these complexities with data-driven insights and proven methodologies.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">PAIN POINTS WE SOLVE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Inefficient clinical workflows</li>
                                        <li>Rising operational and staffing costs</li>
                                        <li>Patient experience and satisfaction gaps</li>
                                        <li>Lack of digital integration and reporting systems</li>
                                        <li>Compliance and regulatory readiness</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-full md:w-1/2 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                    HOW WE HELP YOU GROW
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Consulting Services That Drive Healthier Outcomes</span>
                                    📊 Operational Efficiency: Identify and remove bottlenecks in processes<br />
                                    🧠 Strategic Planning: Design roadmaps for clinical and administrative excellence<br />
                                    🤝 Workforce Optimization: Align staffing with demand and performance goals<br />
                                    🖥️ Health IT Integration: Guide EHR adoption, data analytics, and tech upgrades<br />
                                    🔍 Quality & Compliance Review: Ensure adherence to healthcare standards and policies
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Improved care delivery and patient satisfaction</li>
                                        <li>Reduced operational costs and increased ROI</li>
                                        <li>Enhanced compliance with health regulations</li>
                                        <li>Stronger organizational performance and reputation</li>
                                        <li>A clear, strategic path for long-term health system growth</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <img src={heImage} className="fixed blur-sm top-0 z-1 w-full" alt="Background Image" />
        </div>
    );
};

export default HealthManagement;
