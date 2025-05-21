import React from "react";
import { Link } from "react-router-dom";
import { australiaImage, kagarooImage } from "../utils";

const visaData = [
  { description: "Administrative Appeals Tribunal" },
  { description: "Business/Investor Visa" },
  { description: "Business Sponsorship" },
  { description: "Cancellation" },
  { description: "Citizenship" },
  { description: "ENS (subclass 186)" },
  { description: "Global Talent (GTI) EOI" },
  { description: "Global Talent (Distinguished Talent) Visa" },
  { description: "Graduate (subclass 485) visa" },
  { description: "GSM (189/190/491) EOI" },
  { description: "GSM (189/190/491) Visa" },
  { description: "Health Waiver" },
  { description: "Ministerial Intervention" },
  { description: "Parent" },
  { description: "Partner Visa" },
  { description: "Protection Visa" },
  { description: "Resident Return" },
  { description: "Resident Return (doesn’t meet residency)" },
  { description: "SESR (subclass 494)" },
  { description: "Skills Assessment" },
  { description: "Student" },
  { description: "Temporary Work (subclass 400)" },
  { description: "TSS (subclass 482)" },
  { description: "Training (subclass 407)" },
  { description: "Visitor (subclass 600)" },
  { description: "Medical Treatment (subclass 602) visa" },
];

const AustraliaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-25 flex flex-col items-center scroll-smooth">
      <div className="relative w-full max-w-6xl bg-black">
        <img className="absolute h-20 rounded-full top-0 left-5 z-10" src={kagarooImage} alt="Australian Kangaroo" />
        <img
          src={australiaImage}
          className="w-full h-80 object-cover opacity-50 rounded-lg shadow-lg"
          alt="Australia"
        />
        <h1 className="absolute bold top-25 left-5 text-white text-6xl/19">
          AUSTRALIAN
          <br />
          VISA
        </h1>
        <div className="absolute flex flex-col top-10 w-120 items-end gap-20 right-5 text-white text-gray-200 text-sm">
          <p className="text-end">
            Explore a range of Australian visa services tailored to your 
            migration needs, from skilled work to family and business visas.
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-center">Check out our products</p>
            <a href="#whatweprovide" className="px-5 py-2 rounded-full bg-transparent backdrop-blur-xs bg-linear-to-r from-orange-500/50 to-orange-500/50 cursor-pointer hover:bg-orange-500/60 transition-all duration-300">Click Here!</a>
          </div>
        </div>
      </div>

      <div>
        <p></p>
      </div>

      <div id="whatweprovide" className="bg-white p-10 mt-10 rounded-xl shadow-xl w-full max-w-6xl">
        <h1  className="text-5xl font-bold text-orange-500 text-center mb-6">
          What We <span className="text-gray-800">Provide</span>
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Our expert migration agents specialize in a wide range of Australian
          visa services. Whether you're applying for a skilled visa, family
          reunion, or student visa, we offer professional guidance every step of
          the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visaData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 p-4 bg-gray-50 hover:bg-orange-50 rounded-lg shadow-sm transition duration-200"
            >
              <p className="text-gray-800 text-md">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic mb-6">
            Contact us to discuss your case and receive a tailored quote.
          </p>
          <Link
            to="/AustraliaForm"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Are You Interested?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AustraliaPage;
