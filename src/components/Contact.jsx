import React from "react";

const Contact = () => {
  return (
    <div className="relative flex items-center w-full justify-between">
      <div className="z-5 gap-20 bg-sky-400 py-50 h-screen flex flex-1 items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7172.1407784413295!2d55.45379605387833!3d25.320743307068145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone!5e0!3m2!1sen!2sph!4v1744289923286!5m2!1sen!2sph"
          width="600"
          height="450"
          className="border-0 rounded-lg shadow"
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex-1 bg-sky-700 h-screen">
        <div className="pt-20 grid justify-items-center gap-10">
            <span className="bold text-4xl text-white">Contact Us</span>
            <form action="" className="bg-white flex flex-col gap-5 w-[80%] p-10 rounded-lg shadow-lg">
                <input type="text" className="form" placeholder="Add name"/>
                <input type="email" className="form" placeholder="Add email"/>
                <input type="number" className="form" placeholder="Add phone number"/>
                <input type="submit" className="form" value="Send Message" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
