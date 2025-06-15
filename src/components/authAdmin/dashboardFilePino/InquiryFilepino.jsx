import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../Firebase";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { australiaImage, australianFlagVideo, flagAUS } from "../../../utils";

const InquiryFP = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [adminMessage, setAdminMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (!user) {
  //       navigate("/");
  //       return;
  //     }

  //     const docRef = doc(db, "adminAuth", user.uid);
  //     const docSnap = await getDoc(docRef);

  //     if (!docSnap.exists() || docSnap.data().role !== "dashboardAUS") {
  //       navigate("/");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "filepinoSubmission")
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleReplyClick = (item) => {
    setSelectedClient(item);
    setShowModal(true);
  };

  const handleRowClick = (item) => {
    setSelectedClient(item);
    setShowDetailsModal(true);
  };

  const sendEmail = () => {
    if (!adminMessage.trim()) {
      alert("Please write a message before sending.");
      return;
    }

    const templateParams = {
      to_name: `${selectedClient.firstName} ${selectedClient.lastName}`,
      to_email: selectedClient.email,
      message: adminMessage,
    };

    emailjs
      .send(
        "service_9jiaa2l",
        "template_daa2yw1",
        templateParams,
        "Iv7RzQsVofIVfwg2I"
      )
      .then(() => {
        alert(`Email sent to ${selectedClient.email}`);
        setShowModal(false);
        setAdminMessage("");
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        alert("Failed to send email.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md josefin">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Australia Visa Applications Dashboard
            </h1>
            <img className="h-10 rounded" src={flagAUS} alt="" />
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">
                Loading submissions...
              </span>
            </div>
          ) : submissions.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">
                No submissions found.
              </span>
            </div>
          ) : (
            // 🎯 Apply height + scroll
            <div className="overflow-y-auto max-h-[60vh] border rounded">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      #
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Full Name
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Birth Date
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Email
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Phone
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Purpose
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-blue-50 transition-all cursor-pointer"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {index + 1}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.firstName} {item.middleName} {item.lastName}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.birthDate}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.email}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.phone}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.purpose}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReplyClick(item);
                          }}
                          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        >
                          Reply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryFP;
