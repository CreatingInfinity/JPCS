import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MarketingStrategies = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="backDropMenu"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/MarketingStrategies" reloadDocument className="hover:text-amber-600 font-bold">
        Marketing Strategies
      </Link>

      {hover && (
        <div className="absolute h-screen w-full top-full left-0 bg-white shadow-lg p-4 min-w-[200px] z-50">
          <ul className="space-y-2">
            <li>
              <Link to="/MarketingStrategies/digital" reloadDocument>Digital Marketing</Link>
            </li>
            <li>
              <Link to="/MarketingStrategies/seo" reloadDocument>SEO Optimization</Link>
            </li>
            <li>
              <Link to="/MarketingStrategies/branding" reloadDocument>Branding & Identity</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MarketingStrategies;
