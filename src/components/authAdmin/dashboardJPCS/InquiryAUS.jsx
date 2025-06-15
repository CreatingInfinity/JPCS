// Keep all imports as-is
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../Firebase";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const InquiryAUS = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [adminMessage, setAdminMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          navigate("/");
          return;
        }
  
        const docRef = doc(db, "adminAuth", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (!docSnap.exists() || docSnap.data().role !== "dashboardJPCS") {
          navigate("/"); // or redirect elsewhere
        }
      });
  
      return () => unsubscribe();
    }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const snapshot = await getDocs(collection(db, "australiaSubmission"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data.sort((a, b) => {
          const aDate = a.submittedAt?.toDate?.() || new Date(0);
          const bDate = b.submittedAt?.toDate?.() || new Date(0);
          return bDate - aDate;
        });
        setSubmissions(data);
      } catch (err) {
        console.error("Failed to fetch submissions:", err);
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
    if (!adminMessage.trim()) return alert("Please write a message.");

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
      .catch((err) => {
        console.error("Email error:", err.text);
        alert("Email failed.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          🇦🇺 Australia Visa Inquiries
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-600">Loading...</div>
          ) : submissions.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              No submissions found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      #
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Full Name
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Birth Date
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Email
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Phone
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Purpose
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Submitted
                    </th>
                    <th className="p-4 text-sm font-semibold text-left text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50 cursor-pointer transition"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="p-4 text-sm">{index + 1}</td>
                      <td className="p-4 text-sm">
                        {item.firstName} {item.middleName} {item.lastName}
                      </td>
                      <td className="p-4 text-sm">{item.birthDate}</td>
                      <td className="p-4 text-sm">{item.email}</td>
                      <td className="p-4 text-sm">{item.phone}</td>
                      <td className="p-4 text-sm">{item.purpose}</td>
                      <td className="p-4 text-sm">
                        {item.submittedAt?.toDate()?.toLocaleString() || "N/A"}
                      </td>
                      <td className="p-4">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReplyClick(item);
                          }}
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

        {/* Reply Modal */}
        {showModal && selectedClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 w-full max-w-lg rounded-xl shadow-2xl">
              <h2 className="text-xl font-semibold mb-4">
                Reply to {selectedClient.email}
              </h2>
              <textarea
                className="w-full h-40 p-3 border rounded outline-none resize-none"
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                placeholder={`Dear ${selectedClient.firstName},`}
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={sendEmail}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedClient && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center font-sans">
            <div className="bg-white p-6 w-full max-w-3xl rounded-xl shadow-2xl relative">
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl"
                onClick={() => setShowDetailsModal(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Client Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm">
                <p>
                  <strong>Full Name:</strong> {selectedClient.firstName}{" "}
                  {selectedClient.middleName} {selectedClient.lastName}
                </p>
                <p>
                  <strong>Birth Date:</strong> {selectedClient.birthDate}
                </p>
                <p>
                  <strong>Birth Place:</strong> {selectedClient.birthPlace}
                </p>
                <p>
                  <strong>Email:</strong> {selectedClient.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedClient.phone}
                </p>
                <p className="md:col-span-2">
                  <strong>Address:</strong> {selectedClient.address}
                </p>
                <p>
                  <strong>Purpose:</strong> {selectedClient.purpose}
                </p>
                <p>
                  <strong>Passport No.:</strong> {selectedClient.passportNumber}
                </p>
                <p>
                  <strong>Issue Date:</strong>{" "}
                  {selectedClient.passportIssueDate}
                </p>
                <p>
                  <strong>Expiry Date:</strong>{" "}
                  {selectedClient.passportExpiryDate}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {/* Passport Document */}
                <div>
                  <p className="font-semibold mb-2 text-gray-700">
                    Passport Document:
                  </p>
                  <a
                    href={selectedClient.passportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <embed
                      src={selectedClient.passportUrl}
                      alt="Passport PDF"
                      className="w-full max-w-xs h-32 object-cover rounded-lg border shadow hover:scale-105 transition-transform"
                    />
                  </a>
                  <a
                    href={selectedClient.passportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 hover:text-orange-800 text-sm"
                  >
                    Open Full View
                  </a>
                </div>

                {/* Immigration Document */}
                <div>
                  <p className="font-semibold mb-2 text-gray-700">
                    Immigration Document:
                  </p>
                  <a
                    href={selectedClient.immigrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <embed
                      src={selectedClient.immigrationUrl}
                      alt="Immigration PDF"
                      className="w-full max-w-xs h-32 object-cover rounded-lg border shadow hover:scale-105 transition-transform"
                    />
                  </a>
                  <a
                    href={selectedClient.immigrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 hover:text-orange-800 text-sm"
                  >
                    Open Full View
                  </a>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => {
                    setShowDetailsModal(false);
                    setShowModal(true);
                  }}
                >
                  Reply
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setShowDetailsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryAUS;
