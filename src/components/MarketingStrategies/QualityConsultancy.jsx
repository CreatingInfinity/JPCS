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
                <div className="h-screen w-full flex justify-center flex-col items-center text-white">
                    <h1 className="text-4xl sm:text-6xl font-bold opacity-1 text-orange-500 tracking-wide">
                        QUALITY CONSULTANCY
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-medium mt-1 josefin text-white mb-12">
                        JP Consulting & Services
                    </h2>
                </div>
                <div className="h-full bgSVG">
                    <div className="pt-20 sm:pt-40 text-black flex flex-col sm:flex-row justify-center items-center gap-10">
                        <img
                            id="qusIcon"
                            src={qusIconImage}
                            className="h-48 sm:h-80 rounded-lg"
                            alt="Quality Consultancy Icon"
                        />
                        <p className="text-base sm:text-lg josefin font-semibold text-center sm:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
                            At JP Consulting & Services, our Quality, Standardization, and Measuring Consultancy is designed to help businesses establish consistent, high-performing operations through effective frameworks and measurable systems. We guide companies in developing quality management practices, setting internal standards, and implementing key performance indicators (KPIs) that align with industry benchmarks.
                            <br />
                            <br />
                            Our goal is to ensure that your products, services, and processes not only meet compliance requirements but also exceed customer expectations. With a focus on continuous improvement, we help organizations build scalable systems that support long-term growth, operational efficiency, and market competitiveness.
                        </p>
                    </div>
                    <div className="h-full space-y-12 sm:space-y-20 py-20 sm:py-40">
                        <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
                            <div id="section1" className="w-full sm:w-1/2 space-y-5 justify-center text-center sm:text-left">
                                <p className="font-bold text-xl sm:text-2xl">
                                    BUILDING EXCELLENCE FROM THE GROUND UP
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">
                                        Driven by Quality. Defined by Standards.
                                    </span>
                                    At JP Consulting & Services, we help businesses implement quality frameworks, establish standardized processes, and adopt effective measurement systems to ensure consistent performance and long-term success. Our consultancy bridges the gap between vision and execution—so your operations reflect the high standards your brand stands for.
                                </p>
                            </div>
                            <div id="section2" className="w-full sm:w-1/2 space-y-5 justify-center text-center sm:text-left">
                                <p className="font-bold text-xl sm:text-2xl">
                                    YOUR ROADMAP TO OPERATIONAL EXCELLENCE
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">Tailored Quality Systems That Work for You</span>
                                    We don’t believe in off-the-shelf solutions. We design quality and standardization systems tailored to your industry, team, and growth goals—ensuring efficiency, compliance, and measurable performance from day one.
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col sm:flex-row gap-10 justify-center items-center">
                            <div id="section3" className="w-full sm:w-1/2 space-y-5 justify-center text-center sm:text-left">
                                <p className="font-bold text-xl sm:text-2xl">
                                    UNDERSTANDING YOUR QUALITY CHALLENGES
                                </p>
                                <p className="flex flex-col gap-2">
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
                            <div id="section4" className="w-full sm:w-1/2 space-y-5 justify-center text-center sm:text-left">
                                <p className="font-bold text-xl sm:text-2xl">
                                    HOW WE DRIVE TRANSFORMATION
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="font-bold">Smart Systems for Lasting Success</span>
                                    ⚙️ Standardization: Create consistent, repeatable processes<br />
                                    📊 Measuring What Matters: Define KPIs aligned with your business goals<br />
                                    📈 Continuous Improvement: Build systems that adapt, scale, and evolve<br />
                                    ✅ Compliance & Accreditation Readiness: Prepare for ISO, regulatory, or industry audits with confidence
                                </p>
                                <div className="text-center flex flex-col gap-2">
                                    <span className="font-bold">YOUR BENEFITS:</span>
                                    <ul className="list-disc list-inside text-left">
                                        <li>Improved product and service consistency</li>
                                        <li>Streamlined processes with reduced errors and delays</li>
                                        <li>Data-driven decision-making through smart measurement tools</li>
                                        <li>Easier scalability and onboarding of new teams</li>
                                        <li>Stronger market reputation through documented quality excellence</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <img src={quImage} className="fixed blur-sm top-0 z-1 w-full h-full object-cover" alt="Background" />
        </div>
    );
};

export default QualityConsultancy;
