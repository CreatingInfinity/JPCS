import React, { useEffect } from "react";
import { marsIconImage, marImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MarketingConsultancy = () => {
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
            "#marsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#marsIcon',

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
                        MARKETING CONSULTANCY
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="marsIcon"
                            src={marsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                           At JP Consulting & Services, our Marketing, Public Relations, and Communication Consultancy empowers businesses to tell their stories with clarity, creativity, and confidence. We specialize in developing tailored communication strategies that build strong brand identities, strengthen stakeholder relationships, and amplify your voice across all channels.{" "}
                            <br />
                            <br />
                       From strategic marketing campaigns and brand messaging to media outreach and internal communications, we help you connect with your audience in meaningful and impactful ways. Whether you're launching a product, managing your reputation, or shaping your market presence — we provide the insights, planning, and execution to make your message resonate. </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               SHAPING BRANDS, BUILDING CONNECTIONS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                  Strategic Communication with Lasting Impact
                                    </span>
                                  At JP Consulting & Services, we help businesses communicate with purpose. Through our Marketing, PR, and Communication Consultancy, we craft strategies that elevate your brand, engage your audience, and build trust across every channel. Whether you're launching a campaign or redefining your brand identity, we ensure your message is heard — and remembered.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                            YOUR VOICE, AMPLIFIED
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Tailored Strategies for Every Audience</span>
                                  We don't believe in generic messaging. We take time to understand your business goals, target markets, and brand personality. Then we develop tailored marketing and PR strategies that reflect who you are and where you want to go — driving awareness, loyalty, and growth.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                           NAVIGATE CHALLENGES WITH CONFIDENCE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Every Brand Has a Story. We Help You Tell It Right.</span>
                                   From managing media relations to building internal communication systems, we address the unique communication challenges your business faces. Whether it’s crafting compelling content or handling reputation management, we’re here to support your goals and protect your brand.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">SOLUTIONS WE PROVIDE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Integrated Marketing Strategy</li>
                                        <li>Public Relations & Media Outreach</li>
                                        <li>Brand Messaging & Voice Development</li>
                                        <li>Digital Content & Campaign Planning</li>
                                        <li>Internal Communication Strategy</li>
                                        <li>Crisis & Reputation Management</li>
                                        <li>Event Communication Planning</li>
                                        <li>Social Media & Influencer Engagement</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                              HOW WE DRIVE YOUR BRAND FORWARD

                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Expert Consulting, Real Results</span>
                                    📢 Clear Brand Messaging: Define and communicate your value with confidence<br />
                                    🤝 Relationship Building: Engage media, partners, and customers meaningfully<br />
                                    💡 Campaign Execution: Bring your ideas to life with coordinated planning<br />
                                   🔍 Market Analysis: Know your audience and where to reach them<br />
                                   🎯 Content Strategy: Create impact-driven content across all platforms
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        A stronger, more recognizable brand identity</li>
                                        <li>Increased visibility in target markets and industries</li>
                                        <li>
                                        Better engagement across social, digital, and traditional media</li>
                                        <li>
                                        Enhanced trust and reputation with customers and stakeholders</li>
                                        <li>Cohesive communication across internal and external channels</li>
                                       
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
            <img src={marImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default MarketingConsultancy;
