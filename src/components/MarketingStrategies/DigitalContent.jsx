import React, { useEffect } from "react";
import { disIconImage, diImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const DigitalContent = () => {
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
            "#disIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#disIcon',
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
                    <h1 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wide">
                        DIGITAL CONTENT
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mt-2 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bgSVG">
                    <div className="pt-40 text-black flex justify-center items-center gap-10 flex-wrap">
                        <img
                            id="disIcon"
                            src={disIconImage}
                            className="h-48 md:h-80 rounded-lg"
                            alt="Digital Content Icon"
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            Digital Content Management is the process of organizing, storing, creating, and maintaining digital content across various platforms to ensure consistency, efficiency, and brand alignment. It involves handling everything from website content and blogs to social media, internal documents, and digital assets.{" "}
                            <br />
                            <br />
                            At JP Consulting & Services, our Digital Content Management service helps businesses streamline their content operations — ensuring that every piece of content is on-brand, up-to-date, and strategically aligned with your goals. With the right systems and workflows in place, we help you gain control over your content lifecycle, improve collaboration, and enhance your digital presence.
                        </p>
                    </div>
                    <div className="h-full space-y-50 py-20 md:py-40">
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section1" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center text-center">
                                <p className="font-bold text-xl md:text-2xl">
                                    ORGANIZED, STRATEGIC, AND ON-BRAND
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">
                                        Control Your Content, Empower Your Brand
                                    </span>
                                    At JP Consulting & Services, we offer Digital Content Management solutions that help your business stay consistent, relevant, and impactful across all digital platforms. From websites and blogs to internal knowledge bases and social media — we manage your content with precision and strategy.
                                </p>
                            </div>
                            <div id="section2" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center text-center translate-y-50">
                                <p className="font-bold text-xl md:text-2xl">
                                    ALIGNING CONTENT WITH PURPOSE
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">Your Voice, Delivered Consistently</span>
                                    We go beyond uploading and scheduling. We help you define content workflows, manage version control, and maintain brand consistency — ensuring that every piece of content you share supports your business objectives and speaks directly to your audience.
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div id="section3" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center text-center">
                                <p className="font-bold text-xl md:text-2xl">
                                    MANAGING YOUR CONTENT STRATEGY
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">Built for Growth, Optimized for Impact</span>
                                    We understand that in today’s digital landscape, managing content isn’t just about keeping files in order — it’s about planning, creating, publishing, and analyzing the right content at the right time.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE MANAGE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Website Content Updates</li>
                                        <li>Blog & Article Scheduling</li>
                                        <li>Social Media Planning</li>
                                        <li>Document & Asset Organization</li>
                                        <li>SEO & Metadata Optimization</li>
                                        <li>Content Calendars & Editorial Workflow</li>
                                        <li>Versioning & Brand Consistency</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-full md:w-1/3 h-full josefin space-y-5 justify-center text-center translate-y-50">
                                <p className="font-bold text-xl md:text-2xl">
                                    HOW WE SUPPORT YOUR GROWTH
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">Smart Content Operations</span>
                                    🧩 Content Planning & Strategy: Aligning your messaging with business goals<br />
                                    🔄 Workflow Optimization: Streamlining creation, approvals, and publishing<br />
                                    🗂️ Digital Asset Management: Organizing and maintaining content libraries<br />
                                    📊 Performance Insight: Tracking content success with real-time analytics<br />
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Centralized control over all digital content</li>
                                        <li>Consistent messaging across platforms</li>
                                        <li>Improved team collaboration and efficiency</li>
                                        <li>Faster publishing cycles and streamlined approvals</li>
                                        <li>A professional, organized brand presence online</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <img src={diImage} className="fixed blur-sm top-0 z-1 w-full object-cover" alt="Background" />
        </div>
    );
};

export default DigitalContent;
