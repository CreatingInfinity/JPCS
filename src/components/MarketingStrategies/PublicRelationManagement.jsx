import React, { useEffect } from "react";
import { pubsIconImage, pubImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const PublicRelationManagement = () => {
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
            "#pubsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#pubsIcon',

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
                        PUBLIC RELATION SERVICES
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="pubsIcon"
                            src={pubsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        Public Relations (PR) is all about managing how your business is perceived by the public, media, stakeholders, and customers. At JP Consulting & Services, our PR services focus on building a strong, positive reputation for your brand through clear, consistent, and strategic communication.{" "}
                            <br />
                            <br />
                            Whether you're launching a new business, handling a sensitive issue, or looking to boost your brand awareness, our team helps you create and share the right messages at the right time — across the right channels.
                            <br />
                            <br />
                            We specialize in crafting compelling stories, securing media coverage, handling crisis communication, and ensuring your brand is trusted and respected. Public Relations isn’t just about publicity — it’s about connection, credibility, and long-term growth.
                      </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                BUILDING BRIDGES, ELEVATING BRANDS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Your Reputation, Strategically Managed
                                    </span>
                                    At JP Consulting & Services, our Public Relations service is designed to shape, protect, and promote your brand's reputation. Whether you're launching a business, managing a crisis, or aiming to increase visibility, we help you craft messages that resonate and connect with your audience.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                COMMUNICATE WITH PURPOSE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Strategic Messaging That Drives Results</span>
                                    We don’t just generate publicity — we help you tell your story. From press releases to stakeholder communication, every message we craft is rooted in your values and business goals, helping you build trust and long-term relationships with your audience.
                              </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                WE UNDERSTAND YOUR IMAGE MATTERS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Perception is Power</span>
                                    In today’s fast-paced business environment, how you're perceived can define your success. We help you proactively manage your public image to ensure consistency, credibility, and clarity across every channel.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE OFFER</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Brand Reputation Management</li>
                                        <li>Media Relations & Press Release Writing</li>
                                        <li>Crisis Communication Planning</li>
                                        <li>Public Announcements & Stakeholder Messaging</li>
                                        <li>PR Strategy & Campaign Planning</li>
                                        <li>Event & Launch Communication</li>
                                        <li>Internal Communication Enhancement</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE MAKE AN IMPACT


                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Comprehensive PR Solutions</span>
                                    🗣 Message Development: Craft compelling narratives that align with your brand<br />
                                    📣 Media Engagement: Secure meaningful coverage and build media relationships<br />
                                    🧩 Crisis Management: Navigate reputational challenges with confidence<br />
                                    🤝 Stakeholder Communication: Keep investors, clients, and partners informed and engaged

                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Increased brand awareness and positive media coverage</li>
                                        <li>Improved trust with customers, partners, and stakeholders</li>
                                        <li>
                                        Stronger internal and external communication strategies</li>
                                        <li>
                                        Enhanced reputation and market positioning</li>
                                        <li>Peace of mind knowing your public image is in expert hands</li>
                                       
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
            <img src={pubImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default PublicRelationManagement;
