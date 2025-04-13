import React, { useEffect } from "react";
import { typosIconImage, typoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Typography = () => {
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
            "#typosIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#typosIcon',

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
                        TYPOGRAPHY
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="typosIcon"
                            src={typosIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            At JP Consulting & Services, our typography is more than just design—it’s a reflection of our professionalism, clarity, and commitment to delivering strategic business solutions. Every typographic element is chosen to communicate authority, trust, and precision across all platforms.
                            {" "}

                        </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                    DESIGNED FOR BUSINESS COMMUNICATION
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                        Works as Hard as You Do
                                    </span>
                                    We use clean, modern, and business-ready fonts that create a strong, trustworthy presence. Whether you're reading a strategic proposal, a service brochure, or digital content, our typography ensures clarity and reinforces confidence in every message.
                                </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                    TAILORED FOR BUSINESS CONTENT
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold"> Enhances Strategic Messaging</span>
                                    Our style supports the communication of complex business topics—like operations, technology integration, and strategic planning—by breaking them into clean, accessible sections. Every typographic choice is intentional, helping your audience stay engaged and informed.
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                    STRUCTURED FOR IMPACT
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">A Clear Hierarchy That Guides Every Reader</span>
                                    Our typography follows a well-defined structure designed to improve the reading experience and highlight key messages
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE FOCUS</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Headings: Bold, uppercase, and impactful to define key sections clearly</li>
                                        <li>Subheadings: Medium weight with title or sentence case for readability</li>
                                        <li>Body Text: Regular weight, neutral tones, and ample line spacing for ease of reading</li>
                                        <li>Bullets & Lists: Clean formatting for scanning and quick comprehension</li>

                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                    YOUR BRAND DESERVES STRATEGIC DESIGN
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Let Us Work for You</span>
                                    Just like a sound business strategy, good typography is purposeful. It ensures your message is heard clearly, remembered easily, and presented with confidence. At JP Consulting & Services, our typography speaks the language of modern business—professional, direct, and effective.
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                            IMPROVED READABILITY AND CLARITY:
                                            Clean, well-spaced fonts ensure that your message is easy to read, whether it's a one-page proposal or an in-depth strategic report.
                                        </li>
                                        <li>CONSISTENT BRAND IMAGE:
                                            Using a unified type system across all platforms strengthens your visual identity and builds trust with your audience.</li>
                                        <li>
                                            ENHANCED PROFESSIONALISM:
                                            Modern, business-appropriate fonts reinforce your expertise and present your brand as polished and credible
                                        </li>
                                        <li>
                                            STRONGER VISUAL HIERARCHY:
                                            A clear typographic structure helps guide your audience through key messages, ensuring important information is always seen and understood.
                                        </li>
                                        <li>BETTER ENGAGEMENT:
                                            Readable, organized content keeps your audience focused and encourages them to engage more deeply with your services.</li>
                                       
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
            <img src={typoImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default Typography;
