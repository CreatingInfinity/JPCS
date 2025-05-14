import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 py-30 px-4 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">What We Provide</h1>
        <p className="text-center text-gray-600 mb-6 text-lg font-medium">
          Professional Visa Services in Australia
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-md">
              {visaData.map((item, index) => (
                <tr key={index} id='au' className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic mb-6">
            Contact us to discuss your case and receive a tailored quote.
          </p>
          <Link className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-md cursor-pointer transition-all duration-300">
            Are You Interested?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AustraliaPage;
