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
          collection(db, "australiaSubmission")
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
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Australia Visa Submissions Dashboard
          </h1>

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
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-100">
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

      {showModal && selectedClient && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg h-[50%] flex flex-col justify-between w-full max-w-lg p-6">
            <div>
              <h2 className="text-xl josefin font-semibold mb-4">
                Reply to {selectedClient.email}
              </h2>
              <textarea
                className="w-full p-3 h-90 josefin font-bold resize-none outline-none"
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Tab" || e.key === "Enter") {
                    e.preventDefault(); // prevent focus change
                    const { selectionStart, selectionEnd } = e.target;
                    const value = adminMessage;
                    const newValue =
                      value.substring(0, selectionStart) +
                      "\n    " +
                      value.substring(selectionEnd); // 4 spaces

                    setAdminMessage(newValue);

                    // Move cursor after inserted spaces
                    setTimeout(() => {
                      e.target.selectionStart = e.target.selectionEnd =
                        selectionStart + 4;
                    }, 0);
                  }
                }}
                placeholder={`Dear ${selectedClient.firstName},`}
              />
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={sendEmail}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {showDetailsModal && selectedClient && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Client Details
            </h2>

            <div className="space-y-3 text-sm text-gray-800">
              <div className="flex justify-between">
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
              </div>

              <div className="flex justify-between">
                <p>
                  <strong>Email:</strong> {selectedClient.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedClient.phone}
                </p>
              </div>
              <p>
                <strong>Address:</strong> {selectedClient.address}
              </p>
              <div className="flex justify-between">
                <p>
                  <strong>Purpose:</strong> {selectedClient.purpose}
                </p>
                <p>
                  <strong>Travel Date:</strong> {selectedClient.travelDate}
                </p>
                <p>
                  <strong>Return Date:</strong> {selectedClient.returnDate}
                </p>
              </div>
              <p>
                <strong>Passport Number:</strong>{" "}
                {selectedClient.passportNumber}
              </p>
              <p>
                <strong>Passport Issue Date:</strong>{" "}
                {selectedClient.passportIssueDate}
              </p>
              <p>
                <strong>Passport Expiry Date:</strong>{" "}
                {selectedClient.passportExpiryDate}
              </p>
              <p>
                <strong>Notes:</strong> {selectedClient.notes}
              </p>
              <section className="flex items-center gap-5">
                <div>
                  <p className="font-semibold mb-1">Passport Image:</p>
                  <a
                    href={selectedClient.passportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={selectedClient.passportUrl}
                      alt="Passport"
                      className="h-20 rounded-lg border shadow-md cursor-pointer hover:scale-105 transition-transform"
                    />
                  </a>
                </div>

                <div>
                  <p className="font-semibold mb-1">Immigration Image:</p>
                  <a
                    href={selectedClient.immigrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={selectedClient.immigrationUrl}
                      alt="Immigration"
                      className="h-20 rounded-lg border shadow-md cursor-pointer hover:scale-105 transition-transform"
                    />
                  </a>
                </div>
              </section>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDetailsModal(false);
                  setShowModal(true);
                  handleReplyClick(selectedClient);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Reply
              </button>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
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

export default InquiryAUS;
