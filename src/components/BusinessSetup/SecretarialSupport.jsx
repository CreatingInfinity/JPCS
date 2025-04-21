import React, { useEffect } from "react";
import { secsIconImage, secImage } from "../../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SecretarialSupport = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        "h1",
        { x: 200, opacity: 0 },
        { x: 0, duration: 1, delay: 0.5, opacity: 1 },
        1
      )
      .fromTo(
        "h2",
        { x: -200, opacity: 0 },
        { x: 0, duration: 1, delay: 1, opacity: 1 },
        1
      );
    gsap.fromTo(
      "#secsIcon",
      {
        x: -200,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#secsIcon",

          start: "top center",
          end: "20% 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section1",

          start: "-80% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section2",

          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section3",

          start: "-50% center",
          end: "center 30%",
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: "#section4",

          start: "-20% center",
          end: "center 30%",
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
            SECRETARIAL SUPPORT
          </h1>
          <h2 className="text-2xl font-medium mt-1 josefin text-white mb-12">
            JP Consulting & Services
          </h2>
        </div>
        <div className="h-full bg-linear-to-b from-orange-100 to-white">
          <div className=" pt-40 text-black flex justify-center items-center gap-10">
            <img
              id="secsIcon"
              src={secsIconImage}
              className="h-80 rounded-lg"
              alt=""
            />
            <p className="text-lg josefin font-semibold text-center md:text-left max-w-lg leading-relaxed border-l-4 border-black pl-4 italic">
              Secretarial Support refers to a range of administrative and
              compliance services that ensure a business operates efficiently
              and in line with legal and regulatory requirements. At JP
              Consulting & Services, our Secretarial Support helps manage
              critical tasks such as company registration, statutory filings,
              document preparation, and record maintenance — all while
              maintaining the highest standards of confidentiality and
              professionalism. <br />
              <br />
              We act as your behind-the-scenes partner, handling the details
              that keep your business compliant, organized, and running
              smoothly. From preparing meeting minutes to filing annual returns,
              we ensure nothing is overlooked, so you can stay focused on
              strategic growth.
            </p>
          </div>
          <div className="h-full space-y-50 py-100">
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section1"
                className="w-120 h-full josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">
                  YOUR BACK-OFFICE POWERHOUSE
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Reliable Support, Seamless Operations
                  </span>
                  At JP Consulting & Services, our Secretarial Support service
                  is designed to take the pressure off your administrative tasks
                  — so you can focus on growing your business. From managing
                  corporate compliance to organizing essential documents, we
                  ensure that your operations are smooth, accurate, and fully
                  aligned with legal and regulatory standards.
                </p>
              </div>
              <div
                id="section2"
                className="w-120 h-full josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  PARTNERS IN YOUR ADMINISTRATION
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Professional, Confidential, and Efficient
                  </span>
                  We treat your business like our own. Our secretarial team
                  provides tailored assistance that supports your day-to-day
                  needs — with attention to detail, confidentiality, and a deep
                  understanding of corporate responsibilities. Whether you’re a
                  startup or an established business, we make sure your
                  paperwork and processes never fall behind.
                </p>
              </div>
            </section>
            <section className="w-full flex gap-10 justify-center items-center">
              <div
                id="section3"
                className="w-120 h-100 josefin space-y-5 justify-center"
              >
                <p className="font-bold text-2xl text-center">WHY IT MATTERS</p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Compliance Isn’t Optional — It’s Essential
                  </span>
                  Failing to meet regulatory or filing obligations can cost your
                  business more than just money — it can harm your reputation.
                  Our experts ensure your corporate records are current,
                  correctly filed, and ready for review at any time.
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">WHAT WE HANDLE</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Company incorporation and registration</li>
                    <li>Maintenance of statutory records and company books</li>
                    <li>Filing of annual returns and compliance documents</li>
                    <li>Preparation of board and shareholder resolutions</li>
                    <li>Organizing board meetings and minutes</li>
                    <li>Registered office supports</li>
                    <li>Document drafting, formatting, and review</li>
                  </ul>
                </div>
              </div>
              <div
                id="section4"
                className="w-120 h-100 josefin space-y-5 justify-center translate-y-50"
              >
                <p className="font-bold text-2xl text-center">
                  HOW WE SUPPORT YOUR GROWTH
                </p>
                <p className="text-center flex flex-col gap-2">
                  <span className="font-bold">
                    Strategic Secretarial Services
                  </span>
                  🗂️ Document Management: Organized, accessible, and secure
                  records<br></br>
                  🕒 Deadline Monitoring: Timely reminders and filings to avoid
                  penalties<br></br>
                  📄 Legal Documentation: Accuracy in corporate governance
                  paperwork<br></br>
                  🤝 End-to-End Support: From business registration to ongoing
                  compliance
                </p>
                <div className="text-center flex flex-col gap-2">
                  <span className="font-bold">YOUR BENEFITS:</span>
                  <ul className="list-disc list-inside text-left">
                    <li>Peace of mind with complete regulatory compliance</li>
                    <li>More time to focus on core business functions</li>
                    <li>
                      Professional handling of critical documents and filings
                    </li>
                    <li>Streamlined board and shareholder communication</li>
                    <li>Reduced risk of non-compliance or legal issues</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <ContactUsFooter />
      </div>
      <img src={secImage} className="fixed blur-sm top-0 z-1" alt="" />
    </div>
  );
};

export default SecretarialSupport;
