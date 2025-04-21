import React, { useEffect } from "react";
import { imsIconImage, imImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ImmigrationConsultancy = () => {
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
            "#imsIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#imsIcon',

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
                        IMMEGRATION CONSULTANCY
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="imsIcon"
                            src={imsIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            Immigration Consultancy involves guiding individuals, families, and businesses through the legal and procedural requirements of relocating to another country. At JP Consulting & Services, our Immigration Consultancy services are designed to simplify complex immigration laws, ensure compliance with all regulations, and support clients with every aspect of the process — from visa selection and document preparation to application submission and follow-ups.{" "}
                            <br />
                            <br />
                            Whether you're seeking permanent residency, work permits, or business migration solutions, we provide expert advice and personalized strategies to help you achieve your global goals with confidence and clarity.
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               NAVIGATING BORDERS WITH CONFIDENCE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                   Strategic Guidance for Global Opportunities
                                    </span>
                                  At JP Consulting & Services, our Immigration Consultancy is designed to simplify complex immigration processes and empower individuals, families, and businesses to move forward with confidence. Whether you're seeking residency, work permits, or business migration solutions, we provide clear, compliant, and customized support every step of the way.
                               </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                              YOUR GOALS, OUR EXPERTISE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Personalized Immigration Solutions</span>
                                  We take the time to understand your unique situation, aspirations, and timeline — then build a tailored immigration strategy that aligns with your goals. From application to approval, we ensure every detail is accurate and every step is guided by experience.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                               YOUR CHALLENGES, OUR PRIORITY
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Solving the Complexities of Immigration</span>
                                   Navigating visa regulations, legal documentation, and government processes can be overwhelming. Our consultants provide clarity, reduce stress, and handle the paperwork — so you can focus on your next chapter.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">SERVICES WE OFFER</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Business & Investor Visas</li>
                                        <li>Employment & Work Permits</li>
                                        <li>Residency & Citizenship Applications</li>
                                        <li>Family Sponsorship & Dependent Visas</li>
                                        <li>Legal Document Review & Submission</li>
                                        <li>Corporate Relocation & HR Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE SUPPORT YOUR JOURNEY
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Comprehensive Immigration Services</span>
                                    🧭 Consultation & Planning: Identify the right pathway based on your goals<br />
                                    📑 Documentation Support: Accurate, complete, and professionally prepared<br />
                                    💬 Government Liaison: Communicate and coordinate with relevant authorities<br />
                                   🔍 Compliance Assurance: Ensure all processes meet current legal standards<br />
                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Smooth and stress-free immigration process</li>
                                        <li>Minimized risk of application rejection or delays</li>
                                        <li>
                                        Expert handling of legal and compliance requirements</li>
                                        <li>
                                        Strategic advice tailored to long-term relocation goals</li>
                                        <li>Peace of mind through professional, end-to-end support</li>
                                       
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
            <img src={imImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default ImmigrationConsultancy;
