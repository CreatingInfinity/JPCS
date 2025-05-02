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
                src={heImage}
                className="fixed top-0 left-0 w-full h-full object-cover z-0 blur-sm"
                alt="Health Management Background"
            />

            {/* Main Content */}
            <div className="relative z-10">
                <div className="min-h-screen flex flex-col justify-center items-center text-white text-center px-4 pt-24 md:pt-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
                        HEALTH MANAGEMENT
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mt-2 font-josefin">
                        JP Consulting & Services
                    </h2>
                </div>

                <div className="bgSVG text-gray-800 px-4 md:px-16 py-16 space-y-24">
                    {/* Icon and Intro */}
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <img
                            id="hesIcon"
                            src={hesIconImage}
                            className="w-full max-w-md rounded-lg"
                            alt="Health Icon"
                        />
                        <p className="text-base md:text-lg font-semibold font-josefin leading-relaxed text-center lg:text-left border-l-4 border-black pl-4 italic max-w-2xl">
                            Health Management Consulting Services at JP Consulting & Services are designed to support healthcare providers, clinics, hospitals, and wellness organizations in optimizing their operations, enhancing patient outcomes, and navigating complex healthcare regulations.
                            <br />
                            <br />
                            Our consultants bring industry-specific knowledge to help improve clinical workflows, streamline administrative processes, and implement innovative health technologies. We work alongside your leadership team to create actionable strategies that align with your mission, improve financial performance, and support sustainable growth.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-32">
                        {/* Section 1 */}
                        <section
                            id="section1"
                            className="text-center max-w-4xl mx-auto space-y-6"
                        >
                            <h3 className="text-2xl font-bold"><span className="orange">OPTIMIZING CARE,</span> ENHANCING OPERATIONS</h3>
                            <p className="text-base md:text-lg font-josefin">
                                <span className="font-bold block">
                                    Strategic Solutions for the Health Sector
                                </span>
                                At JP Consulting & Services, we deliver specialized consulting tailored to healthcare providers, institutions, and health-focused organizations. Our mission is to improve operational performance, streamline patient care processes, and support sustainable growth — all while prioritizing compliance, quality, and compassion.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section
                            id="section2"
                            className="text-center max-w-4xl mx-auto space-y-6"
                        >
                            <h3 className="text-2xl font-bold"><span className="orange">TAILORED STRATEGIES</span> FOR HEALTHCARE SUCCESS</h3>
                            <p className="text-base md:text-lg font-josefin">
                                <span className="font-bold block">Every Facility Is Unique — So Are Our Solutions</span>
                                We take the time to understand your facility, your patients, and your challenges. From private clinics to large medical centers, we design actionable strategies that fit your goals — driving measurable results in service delivery, resource management, and financial performance.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section
                            id="section3"
                            className="text-center max-w-5xl mx-auto space-y-6"
                        >
                            <h3 className="text-2xl font-bold"><span className="orange">NAVIGATING COMPLEX</span> HEALTHCARE CHALLENGES</h3>
                            <p className="text-base md:text-lg font-josefin">
                                <span className="font-bold block">Your Needs, Our Expertise</span>
                                In today’s rapidly evolving healthcare landscape, organizations face increasing pressure to innovate, cut costs, and maintain high standards of care. We partner with you to address these complexities with data-driven insights and proven methodologies.
                            </p>
                            <div className="text-left mx-auto max-w-md">
                                <p className="font-bold text-center mb-2">Pain Points We Solve</p>
                                <ul className="list-disc list-inside">
                                    <li>Inefficient clinical workflows</li>
                                    <li>Rising operational and staffing costs</li>
                                    <li>Patient experience and satisfaction gaps</li>
                                    <li>Lack of digital integration and reporting systems</li>
                                    <li>Compliance and regulatory readiness</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section
                            id="section4"
                            className="text-center max-w-5xl mx-auto space-y-6"
                        >
                            <h3 className="text-2xl font-bold"><span className="orange">HOW WE HELP</span> YOU GROW</h3>
                            <p className="text-base md:text-lg font-josefin">
                                <span className="font-bold block">Consulting Services That Drive Healthier Outcomes</span>
                                📊 Operational Efficiency: Identify and remove bottlenecks in processes<br />
                                🧠 Strategic Planning: Design roadmaps for clinical and administrative excellence<br />
                                🤝 Workforce Optimization: Align staffing with demand and performance goals<br />
                                🖥️ Health IT Integration: Guide EHR adoption, data analytics, and tech upgrades<br />
                                🔍 Quality & Compliance Review: Ensure adherence to healthcare standards and policies
                            </p>
                            <div className="text-left mx-auto max-w-md">
                                <p className="font-bold text-center mb-2">Your Benefits</p>
                                <ul className="list-disc list-inside">
                                    <li>Improved care delivery and patient satisfaction</li>
                                    <li>Reduced operational costs and increased ROI</li>
                                    <li>Enhanced compliance with health regulations</li>
                                    <li>Stronger organizational performance and reputation</li>
                                    <li>A clear, strategic path for long-term health system growth</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-20">
                        <p className="text-lg font-semibold">
                            <span className="text-orange-600">Ready</span> to optimize your healthcare organization?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthManagement;
