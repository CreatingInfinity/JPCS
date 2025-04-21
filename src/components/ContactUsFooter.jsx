import React from 'react'

const ContactUsFooter = () => {
  return (
    <div className="h-screen bg-gray-100 border-t-2 border-black/20 pt-30 space-y-10">
        <p className="bold text-4xl text-center">
          <span className="text-amber-600">JP</span> Consulting & Services
        </p>
        <p className="text-center josefin text-2xl">
          Success is a journey, not a destination.
        </p>
        <div className=" flex flex-col gap-5 bg-amber-100 shadow rounded-lg items-center p-5 mx-25">
          <p className="text-justify w-200 josefin text-lg font-semibold">
            We work closely with businesses to understand their specific needs
            and challenges. By offering personalized solutions, we help clients
            navigate complex problems and unlock new opportunities for success.
            From streamlining operations to strategic planning, we aim to
            enhance your business performance, fostering long-term growth and
            stability. Together, we empower your business to achieve its full
            potential.
          </p>
          <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            Contact Us
          </button>
          <button className="border-white bg-white text-black border-1 px-10 py-2 rounded-full josefin font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            More About Us
          </button>
        </div>
      </div>
  )
}

export default ContactUsFooter