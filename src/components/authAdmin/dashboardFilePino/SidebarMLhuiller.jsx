import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { filepinoLogo, logo, mlhuillerLogo } from "../../../utils";
import { signOut } from "firebase/auth";
import { auth, db } from "../../../Firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const SidebarML = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState();

  const handleAuth = async (e) => {
    setShowModal((prev) => !prev);
  };

  const handlePin = async (e) => {
    e.preventDefault();

    try {
      const q = query(
        collection(db, "adminAuth"),
        where("email", "==", "adminaus@gmail.com") 
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Admin not found.");
        return;
      }

      const adminDoc = querySnapshot.docs[0].data();

      if (adminDoc.pin === Number(pin)) {
        navigate('/admin/dashboard-filepino')
      } else {
        alert("Incorrect pin, please retry.");
      }
    } catch (err) {
      console.error("Error verifying PIN:", err);
      alert("Something went wrong.");
    }
  };

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
    <div className="basis-1/4 min-w-[320px] bg-white josefin rounded flex flex-col relative h-full font-bold justify-between">
      <div>
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 p-4 my-10 items-center relative justify-center cursor-pointer"
        >
          <img className="h-10 py-1" src={mlhuillerLogo} alt="logo" />
          <span className="font-bold text-sm sm:text-base text-gray-800 md:text-lg whitespace-nowrap"></span>
        </div>

        <div className="flex flex-col">
          <button
            onClick={() => scrollToSection("inquiry")}
            className="text-md  text-gray-800 p-2 text-center hover:bg-gray-100 rounded transition-all"
          >
            M-Lhuillier VISA Submissions
          </button>
          <button
            onClick={() => scrollToSection("log")}
            className="text-md  text-gray-800 p-2 text-center hover:bg-gray-100 rounded transition-all"
          >
            Deleted Submissions
          </button>
          <button
            onClick={() => scrollToSection("approved")}
            className="text-md  text-gray-800 p-2 text-center hover:bg-gray-100 rounded transition-all"
          >
            Approved Submissions
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
            onClick={handleAuth}
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

      {showModal && (
        <div className="absolute bottom-[10%] right-10 z-999 flex items-center">
          <label className="text-gray-600 pr-3">Enter Pin:</label>
          <div className="bg-gray-700 rounded-lg flex">
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              type="number"
              id="pinInput"
              className="bg-none w-20 h-10 pl-3 text-white outline-none"
            />
            <button
              onClick={handlePin}
              className="cursor-pointer hover:bg-gray-600 rounded-r-lg pl-1"
            >
              <svg
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 3L3 21"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M16 12L7 12"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M13 15L14.5858 13.4142C15.3668 12.6332 15.3668 11.3668 14.5858 10.5858L13 9"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarML;
