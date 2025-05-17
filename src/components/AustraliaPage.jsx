import React from 'react';
import { Link } from 'react-router-dom';

const visaData = [
  { description: "Administrative Appeals Tribunal", fee: "$5,000.00" },
  { description: "Business/Investor Visa", fee: "$17,000.00" },
  { description: "Business Sponsorship", fee: "$3,000.00" },
  { description: "Cancellation", fee: "$6,000.00" },
  { description: "Citizenship", fee: "$2,000.00" },
  { description: "ENS (subclass 186)", fee: "$4,500.00" },
  { description: "Global Talent (GTI) EOI", fee: "$4,000.00" },
  { description: "Global Talent (Distinguished Talent) Visa", fee: "$6,000.00" },
  { description: "Graduate (subclass 485) visa", fee: "$2,000.00" },
  { description: "GSM (189/190/491) EOI", fee: "$2,000.00" },
  { description: "GSM (189/190/491) Visa", fee: "$4,000.00" },
  { description: "Health Waiver", fee: "$4,000.00" },
  { description: "Ministerial Intervention", fee: "$4,000.00" },
  { description: "Parent", fee: "$4,000.00" },
  { description: "Partner Visa", fee: "$5,000.00" },
  { description: "Protection Visa", fee: "$4,000.00" },
  { description: "Resident Return", fee: "$1,500.00" },
  { description: "Resident Return (doesn’t meet residency)", fee: "$3,000.00" },
  { description: "SESR (subclass 494)", fee: "$5,000.00" },
  { description: "Skills Assessment", fee: "$2,500.00" },
  { description: "Student", fee: "$3,000.00" },
  { description: "Temporary Work (subclass 400)", fee: "$2,000.00" },
  { description: "TSS (subclass 482)", fee: "$3,000.00" },
  { description: "Training (subclass 407)", fee: "$3,000.00" },
  { description: "Visitor (subclass 600)", fee: "$3,000.00" },
  { description: "Medical Treatment (subclass 602) visa", fee: "$2,000.00" },
];

const AustraliaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-30 px-4 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">What We Provide</h1>
        <p className="text-center text-gray-600 mb-6 text-lg font-medium">
          Professional Visa Services & Fees in Australia
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Description</th>
                <th className="text-right px-6 py-3 text-sm font-semibold uppercase">Professional Fees</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-md">
              {visaData.map((item, index) => (
                <tr key={index} id='au' className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4 text-right font-semibold">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 italic mb-6">
            Fees are indicative and may vary based on individual case complexity. Contact us for a tailored quote.
          </p>
          <Link to="/AustraliaForm" className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-md cursor-pointer transition-all duration-300">
            Are You Interested?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AustraliaPage;
