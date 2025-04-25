import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 poppins-regular">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Google Map */}

        {/* Contact Info & Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We're here to help! Send us a message and we'll get back to you as
            soon as possible.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              placeholder="Phone/WhatsApp No."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter the product you'd like to inquire about:
              </label>
              <span className="block text-xs text-gray-500 mb-1">
                Select the product(s) you'd like to ask questions about
                (optional)
              </span>
              <input
                type="text"
                placeholder="Your product"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 cursor-pointer transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6">
            <p className="text-gray-700">
              <strong>Email:</strong> info@yourdomain.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +971-123-4567
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> SPC Free Zone, Sharjah, UAE
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5961.694907234245!2d55.45477255530506!3d25.319835729292297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone!5e0!3m2!1sen!2sph!4v1745570793226!5m2!1sen!2sph"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SPC Free Zone Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
