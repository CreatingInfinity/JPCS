import React, { useState } from "react";
import { db } from "../Firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allTitles = [
    "CASTING AGENCY",
    "ONLINE EMPLOYMENT PLACEMENT AGENCIES",
    "PERSONNEL SEARCH",
    "BLUEPRINTING",
    "DOCUMENT EDITING",
    "DOCUMENT SETUP",
    "DUPLICATING",
    "PROVISION",
    "SECRETARIAL SUPPORT",
    "TRANSCRIPTION",
    "TYPOGRAPHY",
    "AI",
    "CYBER RISK",
    "CYBER SECURITY",
    "IT SECURITY",
    "SECURITY SYSTEM",
    "SETTING UP",
    "SOFTWARE INSTALLATION",
    "ADVICE",
    "CARGO FREIGHT",
    "DESIGN OF ACCOUNTING METHODS",
    "DIGITAL CONTENT",
    "HEALTH MANAGEMENT",
    "HOSPITALITY MANAGEMENT",
    "IMMIGRATION CONSULTANCY",
    "LOBBYING ACTIVITIES",
    "LOGISTIC CONSULTANCY",
    "MARKETING CONSULTANCY",
    "PROCUREMENT CONSULTANCY",
    "PROJECT MANAGEMENT",
    "PUBLIC RELATION SERVICES",
    "QUALITY CONSULTANCY",
    "STRATEGY ADVISORY SERVICES",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "clientSubmission"), formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });

      navigate("/redirectHomePage");
    } catch (err) {
      console.error("Error sending message: ", err);
      alert("Failed to send message. Please try again."); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-6 py-30 poppins-regular">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We're here to help! Send us a message and we'll get back to you as
              soon as possible.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone/WhatsApp No."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter the product you'd like to inquire about:
                </label>
                <span className="block text-xs text-gray-500 mb-2">
                  (Optional)
                </span>
                <input
                  name="product"
                  value={formData.product}
                  onChange={(e) => {
                    const input = e.target.value;
                    setFormData({ ...formData, product: input });

                    if (input.trim() !== "") {
                      const filtered = allTitles.filter((title) =>
                        title.toLowerCase().includes(input.toLowerCase())
                      );
                      setFilteredTitles(filtered);
                      setShowSuggestions(true);
                    } else {
                      setShowSuggestions(false);
                    }
                  }}
                  onFocus={() => {
                    if (filteredTitles.length > 0) setShowSuggestions(true);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowSuggestions(false), 200); // Delay to allow click
                  }}
                  type="text"
                  placeholder="Your product"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />

                {showSuggestions && filteredTitles.length > 0 && (
                  <ul id="prod" className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg max-h-40 overflow-auto">
                    {filteredTitles.map((title, index) => (
                      <li
                        key={index}
                        onMouseDown={() => {
                          setFormData({ ...formData, product: title });
                          setShowSuggestions(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 cursor-pointer transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-8 text-sm text-gray-700">
            <p>
              <strong>Email:</strong> info@yourdomain.com
            </p>
            <p>
              <strong>Phone:</strong> +971-123-4567
            </p>
            <p>
              <strong>Address:</strong> SPC Free Zone, Sharjah, UAE
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5961.694907234245!2d55.45477255530506!3d25.319835729292297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone!5e0!3m2!1sen!2sph!4v1745570793226!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
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
