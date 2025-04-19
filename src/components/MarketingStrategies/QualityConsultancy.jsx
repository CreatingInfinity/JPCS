import React, { useEffect } from "react";
import { qusIconImage, quImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const QualityConsultancy = () => {
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
            "#qusIcon",
            {
                x: -200,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: '#qusIcon',

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
                        QUALITY CONSULTANCY
                    </h1>
                    <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bg-linear-to-b from-orange-100 to-white">
                    <div className=" pt-40 text-black flex justify-center items-center gap-10">
                        <img
                            id="qusIcon"
                            src={qusIconImage}
                            className="h-80 rounded-lg"
                            alt=""
                        />
                        <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                        At JP Consulting & Services, our Quality, Standardization, and Measuring Consultancy is designed to help businesses establish consistent, high-performing operations through effective frameworks and measurable systems. We guide companies in developing quality management practices, setting internal standards, and implementing key performance indicators (KPIs) that align with industry benchmarks.{" "}
                            <br />
                            <br />
                            Our goal is to ensure that your products, services, and processes not only meet compliance requirements but also exceed customer expectations. With a focus on continuous improvement, we help organizations build scalable systems that support long-term growth, operational efficiency, and market competitiveness.
                       </p>
                    </div>
                    <div className="h-full space-y-50 py-100">
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                BUILDING EXCELLENCE FROM THE GROUND UP
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">
                                    Driven by Quality. Defined by Standards.
                                    </span>
                                    At JP Consulting & Services, we help businesses implement quality frameworks, establish standardized processes, and adopt effective measurement systems to ensure consistent performance and long-term success. Our consultancy bridges the gap between vision and execution—so your operations reflect the high standards your brand stands for.
                              </p>
                            </div>
                            <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                YOUR ROADMAP TO OPERATIONAL EXCELLENCE
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Tailored Quality Systems That Work for You</span>
                                    We don’t believe in off-the-shelf solutions. We design quality and standardization systems tailored to your industry, team, and growth goals—ensuring efficiency, compliance, and measurable performance from day one.
                               </p>
                            </div>
                        </section>
                        <section className="w-full flex gap-10 justify-center items-center">
                            <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                                <p className="font-bold text-2xl text-center">
                                UNDERSTANDING YOUR QUALITY CHALLENGES
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Identifying Gaps. Elevating Performance.</span>
                                    Many businesses struggle with inconsistencies, inefficiencies, or a lack of quality benchmarks. We analyze your current processes, identify gaps, and build systems that improve reliability and reduce waste—setting the foundation for scalable, high-performance operations.
                              </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">WHAT WE OFFER</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Development of quality management systems (QMS)</li>
                                        <li>Standard operating procedure (SOP) creation</li>
                                        <li>ISO and regulatory compliance consultancy</li>
                                        <li>Performance measurement and KPI design</li>
                                        <li>Process improvement and benchmarking</li>
                                        <li>Staff training on quality and standardization</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                                <p className="font-bold text-2xl text-center">
                                HOW WE DRIVE TRANSFORMATION
                                </p>
                                <p className="text-center flex flex-col gap-2">
                                    <span className="font-bold">Smart Systems for Lasting Success</span>
                                    ⚙️ Standardization: Create consistent, repeatable processes<br />
                                    📊 Measuring What Matters: Define KPIs aligned with your business goals<br />
                                    📈 Continuous Improvement: Build systems that adapt, scale, and evolve<br />
                                    ✅ Compliance & Accreditation Readiness: Prepare for ISO, regulatory, or industry audits with confidence

                                    
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>
                                        Improved product and service consistency</li>
                                        <li>Streamlined processes with reduced errors and delays</li>
                                        <li>
                                        Data-driven decision-making through smart measurement tools</li>
                                        <li>
                                        Easier scalability and onboarding of new teams</li>
                                        <li>Stronger market reputation through documented quality excellence</li>
                                       
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
            <img src={quImage} className="fixed blur-sm top-0 z-1" alt="" />
        </div>
    );
};

export default QualityConsultancy;
