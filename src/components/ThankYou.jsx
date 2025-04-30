import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your message has been successfully sent. We'll get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
