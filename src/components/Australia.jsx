import React from "react";
import { Link } from "react-router-dom";

const Australia = () => {
  return (
    <Link
      to="/Australia"
      reloadDocument
      className="absolute top-40 right-0 z-40 cursor-pointer"
    >
      <div className="w-12 md:w-48 text-center py-5 rounded-s-full font-bold text-gray-800 bg-white transition-all hover:pl-10 hover:border-orange-600 border-l-4 pl-2 md:pl-4 overflow-hidden">
        <div>
          <span className="block md:hidden">🇦🇺</span>{" "}
          <span className="hidden md:block">Australia</span>{" "}
        </div>
      </div>
    </Link>
  );
};

export default Australia;
