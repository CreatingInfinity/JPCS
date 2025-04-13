import React, { useEffect } from "react";
import { photosIconImage, photoImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Photocopying = () => {
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
      "#photosIcon",
      {
        x: -200,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: '#photosIcon',

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
            PHOTOCOPYING
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="photosIcon"
              src={photosIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
            At JP Consulting & Services, we understand the importance of clear, professional document replication in business operations. Our Photocopying Services are designed to provide high-quality copies of essential business documents — quickly, securely, and with unmatched clarity. Whether it's a single file or a bulk set of materials, we ensure every copy mirrors the original with excellence.
             {" "}
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section1" className="w-120 h-full josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                QUALITY YOU CAN COUNT ON
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                  Reliable. Fast. Professional.
                  </span>
                  At JP Consulting & Services, we offer high-quality photocopying solutions to support all your business documentation needs. Whether you’re preparing for client presentations, legal filings, or internal distributions, our photocopying service ensures crisp, clean, and professional results — every single time. </p>
              </div>
              <div id="section2" className="w-120 h-full josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                DESIGNED FOR BUSINESS DEMANDS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Scalable & Efficient Solutions</span>
                  From single-page copies to bulk document sets, we tailor our services to meet your workload. We understand the fast-paced demands of business, which is why we deliver fast turnaround times without compromising on quality.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div id="section3" className="w-120 h-100 josefin space-y-5 justify-center">
                <p className="font-bold text-2xl text-center">
                YOUR DOCUMENTS, HANDLED WITH CARE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Confidential and Secure</span>
                  We treat your documents with the highest level of professionalism and discretion. Our team ensures your data is protected, whether you’re copying sensitive contracts, ID documents, or confidential proposals.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE OFFER</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Black & White and Color Photocopying</li>
                    <li>Single-Sided and Double-Sided Options</li>
                    <li>High-Volume and Bulk Copy Services</li>
                    <li>Document Sorting, Binding, and Finishing</li>
                    <li>Legal Size, Letter Size, A4, A3, and Custom Formats</li>
                  </ul>
                </div>
              </div>
              <div id="section4" className="w-120 h-100 josefin space-y-5 justify-center translate-y-50">
                <p className="font-bold text-2xl text-center">
                HOW WE SUPPORT YOUR BUSINESS
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">Professional Support, Every Step of the Way</span>
                  🖨️ High-Resolution Printing: Clear, smudge-free copies every time<br></br>

                  📚 Finishing Services: Binding, stapling, and collating for ready-to-distribute materials <br></br>

                  ⏱️ Fast Turnaround: Get your copies on time — every time<br></br>

                  🔐 Confidentiality Assurance: Your documents are safe with us
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>
                    Consistent, professional-quality output
                    </li>
                    <li>Streamlined operations for meetings, filings, and client presentations</li>
                    <li>
                    Time-saving, in-house service with quick delivery
                    </li>
                    <li>
                    Enhanced document organization and presentation
                    </li>
                    <li>Peace of mind with secure, reliable handling</li>
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
      <img src={photoImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default Photocopying;
