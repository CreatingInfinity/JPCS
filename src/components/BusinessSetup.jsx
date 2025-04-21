import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BusinessSetup = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="backDropMenu"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/Business" reloadDocument>
        Business Setup
      </Link>

      {hover && (
        <div className="absolute w-full h-screen z-30 top-full left-0 bg-white shadow-lg p-4 min-w-[200px] z-50">
          <div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSetup;
