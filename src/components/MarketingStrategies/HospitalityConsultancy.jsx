import React, { useEffect } from "react";
import { hosIconImage, hoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HospitalityConsultancy = () => {
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
            "#hosIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#hosIcon',

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
                        HOSPITALITY MANAGEMENT 
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="hosIcon"
                            src={hosIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            Hospitality Management Consultancy focuses on improving the performance, service quality, and profitability of businesses in the hospitality sector — including hotels, resorts, restaurants, and tourism services. It involves strategic planning, operational audits, staff training, branding, and guest experience optimization to ensure long-term success in a highly competitive industry.{" "}
                            <br />
                            <br />
                            At JP Consulting & Services, we partner with hospitality brands to elevate their standards, streamline operations, and deliver exceptional guest experiences. Whether you're launching a new concept or refining an existing one, our expert guidance helps you stand out, grow sustainably, and exceed guest expectations at every level.
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               TURNING GUEST EXPERIENCES INTO LASTING SUCCESS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                   Excellence That Delivers Results
                                    </span>
                                  At JP Consulting & Services, we specialize in guiding hospitality businesses toward operational excellence, guest satisfaction, and sustainable growth. From boutique hotels to full-service resorts, our tailored consultancy approach is designed to elevate your brand and enhance every aspect of your operations.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                YOUR VISION, OUR EXPERTISE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Customized Strategies for Every Property</span>
                                  No two properties are the same. We dive deep into your business model, location, market, and brand to develop a comprehensive strategy that meets your specific needs — whether you're launching a new hospitality concept or improving an existing one.

                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               WE KNOW THE INDUSTRY
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Hospitality Challenges, Solved with Precision</span>
                                   In today’s competitive landscape, the smallest detail can define the guest experience. Our expert consultants help you overcome industry challenges by optimizing service standards, improving operations, and creating memorable customer journeys.
                               </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">PAIN POINTS WE SOLVE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Inefficient operational workflows</li>
                                        <li>Inconsistent guest experiences</li>
                                        <li>Outdated technology or booking systems</li>
                                        <li>Staff training and retention challenges</li>
                                        <li>Low occupancy rates and revenue management issues</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE HELP YOU GROW
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Strategic Consulting, Real-World Impact</span>
                                    🏨 Operational Assessment: Evaluate and refine your service model<br />
                                    💡 Brand Positioning: Strengthen your identity in the market<br />
                                    📈 Revenue Optimization: Increase profitability through strategic pricing and sales planning<br />
                                    🧑‍🤝‍🧑 Staff Development: Build service excellence through training and leadership development<br />
                                    🌐 Digital Integration: Enhance online presence and booking systems for seamless guest journeys
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Elevated guest satisfaction and brand reputation</li>
                                        <li>Stronger operational systems and staff performance</li>
                                        <li>
                                        Higher occupancy and improved revenue streams</li>
                                        <li>
                                        Competitive advantage in a dynamic industry </li>
                                        <li>Long-term growth driven by strategic insight</li>
                                       
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
            <img src={hoImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default HospitalityConsultancy;
