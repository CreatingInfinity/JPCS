import React, { useEffect } from "react";
import { losIconImage, loImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Lobbying = () => {
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
            "#losIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#losIcon',

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
                        LOBBYING ACTIVITIES
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="losIcon"
                            src={losIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            Lobbying activities involve strategically engaging with government officials, policymakers, and regulatory bodies to influence legislation, policy decisions, and public regulations that directly affect your business.{" "}
                            <br />
                            <br />
                            At JP Consulting & Services, we act as your trusted advocates — representing your business interests, ensuring your voice is heard, and guiding you through complex political and regulatory environments. Our goal is to help shape outcomes that create opportunities, reduce risks, and protect your strategic goals.
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               ADVOCATING FOR YOUR BUSINESS INTERESTS
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                   Influence with Integrity
                                    </span>
                                  At JP Consulting & Services, our Lobbying Activities are rooted in a deep understanding of policy, regulation, and business impact. We represent your voice in the corridors of power — engaging with government bodies, industry regulators, and decision-makers to advocate for policies that support your growth and protect your interests.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                              STRATEGIC REPRESENTATION
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Tailored Advocacy That Aligns with Your Vision</span>
                                  We don’t just lobby — we align your goals with strategic messaging, ensuring your business needs are heard, understood, and prioritized. From small businesses to growing enterprises, we create customized lobbying strategies that speak directly to those who matter.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                            WE NAVIGATE THE COMPLEXITY FOR YOU
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Policy Expertise. Political Insight. Business Impact.</span>
                                   Navigating regulatory systems and government processes can be overwhelming. We take the complexity out of the process — tracking relevant legislation, identifying opportunities for influence, and helping you stay ahead of change.
                               </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">LOBBYING SERVICES WE PROVIDE</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Legislative Research & Policy Monitoring</li>
                                        <li>Stakeholder Engagement & Government Relations</li>
                                        <li>Position Papers & Regulatory Submissions</li>
                                        <li>Meeting Coordination with Policymakers</li>
                                        <li>Strategy Development for Advocacy Campaigns</li>
                                        <li>Representation at Hearings, Forums, and Consultations</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE ADVOCATE FOR YOUR SUCCESS

                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Proactive Government Affairs</span>
                                    🏛️ Direct Representation: We act on your behalf with credibility and professionalism<br />
                                    📜 Policy Influence: Shape outcomes that impact your business and industry<br />
                                    🤝 Relationship Building: Connect you with key stakeholders and decision-makers<br />
                                   🎯 Strategic Messaging: Communicate your needs clearly and persuasively
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        A stronger voice in industry and government affairs</li>
                                        <li>Access to timely, relevant policy updates</li>
                                        <li>
                                        Better alignment with regulatory changes and opportunities</li>
                                        <li>
                                        Increased influence over business-relevant legislation</li>
                                        <li>A proactive partner safeguarding your long-term interests</li>
                                       
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
            <img src={loImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default Lobbying;
