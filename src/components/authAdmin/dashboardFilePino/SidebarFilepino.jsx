import React from "react";
import { useNavigate } from "react-router-dom";
import { filepinoLogo, logo } from "../../../utils";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";

const SidebarFP = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="basis-1/4 min-w-[320px] bg-white josefin rounded flex flex-col h-full font-bold justify-between">
      <div>
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 p-4 items-center relative justify-center cursor-pointer"
        >
          <img className="h-30 py-1" src={filepinoLogo} alt="logo" />
          <span className="font-bold text-sm sm:text-base text-gray-800 md:text-lg whitespace-nowrap">
          </span>
        </div>

        <div className="flex flex-col">
          <button
            onClick={() => scrollToSection("inquiry")}
            className="text-md  text-gray-800 p-2 text-center hover:bg-gray-100 rounded transition-all"
          >
            FilePino VISA Submissions
          </button>
          <button
            onClick={() => scrollToSection("log")}
            className="text-md  text-gray-800 p-2 text-center hover:bg-gray-100 rounded transition-all"
          >
            Deleted Submissions
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center gap-2 px-4 py-2">
          <button
            onClick={() => navigate("/admin/dashboard-Mlhuiller")}
            className="flex-1 text-sm  bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            M-Lhuiller
          </button>
          <button
            onClick={() => navigate("/admin/dashboard-filepino")}
            className="flex-1 text-sm  bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            FilePino
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarFP;
