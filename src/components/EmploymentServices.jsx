import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmploymentServices = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="backDropMenu"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/EmploymentServices" reloadDocument className="hover:text-amber-600 font-bold">
        Employment & Recruitment
      </Link>

      {hover && (
        <div className="absolute h-screen w-full top-full left-0 bg-white shadow-lg p-4 min-w-[250px] z-50">
          <ul className="space-y-2">
            <li>
              <Link to="/EmploymentServices/job-matching" reloadDocument>
                Job Matching
              </Link>
            </li>
            <li>
              <Link to="/EmploymentServices/resume-help" reloadDocument>
                Resume & Interview Help
              </Link>
            </li>
            <li>
              <Link to="/EmploymentServices/hr-consulting" reloadDocument>
                HR Consulting
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmploymentServices;
