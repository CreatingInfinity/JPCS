import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../utils";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const searchData = [
    {
      category: "EmploymentServices",
      items: [
        {
          title: "CASTING AGENCY",
          link: "CastingAgency",
        },
        {
          title: "ONLINE EMPLOYMENT PLACEMENT AGENCIES",
          link: "OnLine",
        },
        {
          title: "PERSONNEL SEARCH",
          link: "Personel",
        },
      ],
    },
    {
      category: "Business",
      items: [
        {
          title: "BLUEPRINTING",
          link: "Blueprinting",
        },
        {
          title: "DOCUMENT EDITING",
          link: "DocumentEditing",
        },
        {
          title: "DOCUMENT SETUP",
          link: "DocumentSetup",
        },
        {
          title: "DUPLICATING",
          link: "Duplicating",
        },
        {
          title: "PHOTOCOPYING",
          link: "Photocopying",
        },
        {
          title: "PROVISION",
          link: "Provision",
        },
        {
          title: "RESUME",
          link: "Resume",
        },
        {
          title: "SECRETARIAL SUPPORT",
          link: "SecretarialSupport",
        },
        {
          title: "TRANSCRIPTION",
          link: "Transcription",
        },
        {
          title: "TYPOGRAPHY",
          link: "Typography",
        },
      ],
    },
    {
      category: "ITServices",
      items: [
        {
          title: "AI",
          link: "Al",
        },
        {
          title: "CYBER RISK",
          link: "CyberRisk",
        },
        {
          title: "CYBER SECURITY",
          link: "CyberSecurity",
        },
        {
          title: "IT SECURITY",
          link: "ITSecurity",
        },
        {
          title: "SECURITY SYSTEM",
          link: "SecuritySystem",
        },
        {
          title: "SETTING UP",
          link: "SettingUp",
        },
        {
          title: "SOFTWARE INSTALLATION",
          link: "SoftwareInstall",
        },
      ],
    },
    {
      category: "MarketingStrategies",
      items: [
        {
          title: "ADVICE",
          link: "Advice",
        },
        {
          title: "CARGO FREIGHT",
          link: "CargoFreight",
        },
        {
          title: "DESIGN OF ACCOUNTING METHODS",
          link: "Desing",
        },
        {
          title: "DIGITAL CONTENT",
          link: "DigitalContent",
        },
        {
          title: "HEALTH MANAGEMENT",
          link: "HealthManagement",
        },
        {
          title: "HOSPITALITY MANAGEMENT",
          link: "HospitalityConsultancy",
        },
        {
          title: "IMMIGRATION CONSULTANCY",
          link: "ImmigrationConsultancy",
        },
        {
          title: "LOBBYING ACTIVITIES",
          link: "Lobbying",
        },
        {
          title: "LOGISTIC CONSULTANCY",
          link: "Logistic",
        },
        {
          title: "MARKETING CONSULTANCY",
          link: "MarketingConsultancy",
        },
        {
          title: "PROCUREMENT CONSULTANCY",
          link: "ProcurementConsulting",
        },
        {
          title: "PROJECT MANAGEMENT",
          link: "ProjectManagement",
        },
        {
          title: "PUBLIC RELATION SERVICES",
          link: "PublicRelationManagement",
        },
        {
          title: "QUALITY CONSULTANCY",
          link: "QualityConsultancy",
        },
        {
          title: "STRATEGY ADVISORY SERVICES",
          link: "Strategy",
        },
      ],
    },
  ];

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setQuery(query);

    // Filter the search data based on the query
    const results = searchData
      .map((category) => ({
        category: category.category,
        items: category.items.filter((item) =>
          item.title.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0);

    setFilteredResults(results);
  };

  const handleResultClick = (category, link) => {
    // Navigate to the clicked result's link
    navigate(`${category}/${link}`);
    window.location.reload();
  };

  return (
    <div className="relative hidden sm:flex items-center flex-none">
      <img className="h-6 translate-x-7" src={searchIcon} alt="search" />
      <input
        className="border-gray-500 py-2 font-bold text-black border w-full rounded-full josefin px-7"
        type="text"
        placeholder="Search"
        value={query}
        onChange={searchHandler}
      />
      {filteredResults.length > 0 && (
        <div className="absolute top-12 left-0 right-0 bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
          {filteredResults.map((category) => (
            <div key={category.category}>
              <h3 className="font-semibold text-gray-800 px-4 py-2">
                {category.category}
              </h3>
              <ul>
                {category.items.map((item) => (
                  <li
                    key={item.link}
                    onClick={() =>
                      handleResultClick(category.category, item.link)
                    } // Pass category here
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
