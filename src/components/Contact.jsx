import React from "react";

const Contact = () => {
  return (
    <div className="relative flex items-center w-full justify-between">
      {/* Google Map Section */}
      <div className="z-5 gap-20 bg-sky-400 py-20 h-screen flex flex-1 items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7172.1407784413295!2d55.45379605387833!3d25.320743307068145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone!5e0!3m2!1sen!2sph!4v1744289923286!5m2!1sen!2sph"
          width="100%"
          height="100%"
          className="border-0 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Contact Form Section */}
      <div className="flex-1 bg-sky-700 h-screen flex flex-col justify-center items-center p-5">
        <div className="pt-20 text-center">
          <span className="bold text-4xl text-white">Contact Us</span>
          <p className="text-white text-lg mt-2 mb-10">
            We'd love to hear from you! Please fill out the form below to get in touch.
          </p>
          <form action="" className="bg-white flex flex-col gap-6 w-[90%] sm:w-[70%] md:w-[50%] p-8 rounded-lg shadow-lg">
            <input
              type="text"
              className="form-input p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-input p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300"
              placeholder="Your Email"
            />
            <input
              type="number"
              className="form-input p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300"
              placeholder="Your Phone Number"
            />
            <input
              type="submit"
              className="bg-sky-500 text-white p-4 rounded-lg font-bold cursor-pointer hover:bg-sky-600 transition-all duration-300"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
