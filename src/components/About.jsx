import React from "react";
import ContactUsFooter from "./ContactUsFooter";

const About = () => {
  return (
    <div className="bg-">
      <section className="h-screen pt-40 space-y-20 josefin flex flex-col items-center text-center">
        <p className="bold text-3xl">About JP Consulting & Services</p>
        <p className="w-200">
          At JP Consulting & Services, we believe in transforming challenges
          into opportunities for growth. We provide expert consulting tailored
          to meet the unique needs of each client, offering strategic solutions
          that drive success and optimize business performance. Our team of
          experienced professionals works closely with businesses of all sizes
          to deliver practical, results-driven support.
        </p>
      </section>
      <section className="h-screen josefin pt-40 space-y-20 flex flex-col items-center text-center">
        <p className="bold text-3xl">Who We Are?</p>
        <p className="w-200">
          JP Consulting & Services, we are a dedicated team of professionals
          committed to helping businesses thrive. With years of experience
          across various industries, we specialize in providing strategic
          advice, practical solutions, and tailored support. Our goal is to
          empower organizations to streamline operations, enhance growth, and
          achieve lasting success. Through collaboration, innovation, and a
          client-focused approach, we work alongside you to bring your business
          vision to life.
        </p>
        <div></div>
        <p>
          “Success is built on great partnerships and thoughtful solutions.”
        </p>
      </section>
      <ContactUsFooter />
    </div>
  );
};

export default About;
