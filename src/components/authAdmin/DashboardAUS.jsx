import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Firebase";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
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

      // const docRef = doc(db, "adminAuth", user.uid);
      // const docSnap = await getDoc(docRef);

      // if (!docSnap.exists() || docSnap.data().role !== "dashboardUAS") {
      //   navigate("/unauthorized");
      // }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "australiaSubmission"));
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
      .send("service_9jiaa2l", "template_daa2yw1", templateParams, "Iv7RzQsVofIVfwg2I")
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-orange-600 mb-6">
            Visa Application Dashboard
          </h1>

          {loading ? (
            <div className="text-center py-10 text-gray-600">Loading submissions...</div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-10 text-gray-600">No submissions found.</div>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full table-auto border border-gray-200">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Full Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Phone</th>
                    <th className="p-3 text-left">Travel Dates</th>
                    <th className="p-3 text-left">Purpose</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{item.firstName} {item.lastName}</td>
                      <td className="p-3">{item.email}</td>
                      <td className="p-3">{item.phone}</td>
                      <td className="p-3">{item.travelDate} → {item.returnDate}</td>
                      <td className="p-3">{item.purpose}</td>
                      <td className="p-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReplyClick(item);
                          }}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
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

      {/* Modal for composing email */}
      {showModal && selectedClient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">
              Reply to {selectedClient.firstName} {selectedClient.lastName}
            </h2>
            <textarea
              className="w-full border border-gray-300 rounded p-3 h-40 resize-none"
              value={adminMessage}
              onChange={(e) => setAdminMessage(e.target.value)}
              placeholder="Write your message here..."
            />
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={sendEmail}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for client details */}
      {showDetailsModal && selectedClient && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-opacity-30 z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Client Details</h2>
      <div className="space-y-2 text-sm text-gray-800">
        <p>
          <strong>Full Name:</strong> {selectedClient.firstName} {selectedClient.middleName} {selectedClient.lastName}
        </p>
        <p><strong>Email:</strong> {selectedClient.email}</p>
        <p><strong>Phone:</strong> {selectedClient.phone}</p>
        <p><strong>Birth Date:</strong> {selectedClient.birthDate}</p>
        <p><strong>Passport Number:</strong> {selectedClient.passportNumber}</p>
        <p><strong>Travel Date:</strong> {selectedClient.travelDate}</p>
        <p><strong>Return Date:</strong> {selectedClient.returnDate}</p>
        <p><strong>Purpose:</strong> {selectedClient.purpose}</p>
        <p>
          <strong>Passport:</strong>{" "}
          {selectedClient.passportUrl ? (
            <a
              href={selectedClient.passportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Passport PDF
            </a>
          ) : (
            "Not provided"
          )}
        </p>
        <p>
          <strong>Immigration:</strong>{" "}
          {selectedClient.immigrationUrl ? (
            <a
              href={selectedClient.immigrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View Immigration PDF
            </a>
          ) : (
            "Not provided"
          )}
        </p>
        <p><strong>Notes:</strong> {selectedClient.notes}</p>
      </div>
      <div className="mt-5 text-right space-x-3">
        <button
          onClick={() => {
            setShowDetailsModal(false);
            handleReplyClick(selectedClient);
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Reply
        </button>
        <button
          onClick={() => setShowDetailsModal(false)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Dashboard;