import React, { useState } from "react";
import { Link } from "react-router-dom";

const ITServices = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="backDropMenu"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/ITServices" reloadDocument>
        IT Services
      </Link>

      {hover && (
        <div className="absolute h-screen w-full z-30 top-full left-0 bg-white shadow-lg p-4 min-w-[200px] z-50">
          <ul className="space-y-2">
            <li>
              <Link to="/Business/company-formation" reloadDocument>
                Company Formation
              </Link>
            </li>
            <li>
              <Link to="/Business/legal-advisory" reloadDocument>
                Legal Advisory
              </Link>
            </li>
            <li>
              <Link to="/Business/pro-services" reloadDocument>
                PRO Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ITServices;
