import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase";
import emailjs from "@emailjs/browser";
import { flagAUS } from "../../../utils";

const InquiryFP = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [adminMessage, setAdminMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "filepinoSubmission"));
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

  const toggleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedSubmissions = [...submissions].sort((a, b) => {
    const aTime = a.submittedAt?.seconds || 0;
    const bTime = b.submittedAt?.seconds || 0;
    return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md josefin">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Australia Visa Applications Dashboard
            </h1>
            <img className="h-10 rounded" src={flagAUS} alt="flag" />
          </div>

          <div className="mb-4 text-right">
            <button
              onClick={toggleSort}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sort by Date: {sortDirection === "asc" ? "Oldest" : "Newest"}
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">Loading submissions...</span>
            </div>
          ) : sortedSubmissions.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">No submissions found.</span>
            </div>
          ) : (
            <div className="overflow-y-auto max-h-[60vh] border rounded">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">#</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Full Name</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Birth Date</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Email</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Phone</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Purpose</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Submitted</th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSubmissions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-blue-50 transition-all cursor-pointer"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="py-3 px-6 text-sm text-gray-600">{index + 1}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.firstName} {item.middleName} {item.lastName}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.birthDate}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.email}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.phone}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.purpose}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.submittedAt?.toDate().toLocaleString() || "N/A"}
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
          <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between w-full max-w-lg p-6">
            <div>
              <h2 className="text-xl josefin font-semibold mb-4">
                Reply to {selectedClient.email}
              </h2>
              <textarea
                className="w-full p-3 josefin font-bold resize-y outline-none"
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Tab" || e.key === "Enter") {
                    e.preventDefault(); 
                    const { selectionStart, selectionEnd } = e.target;
                    const value = adminMessage;
                    const newValue =
                      value.substring(0, selectionStart) +
                      "\n    " +
                      value.substring(selectionEnd);

                    setAdminMessage(newValue);


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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center font-sans">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative space-y-8">
            {/* Close Button */}
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-5 text-gray-500 hover:text-red-600 text-3xl"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Header */}
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Client Details
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm">
              <p>
                <strong>Full Name:</strong> {selectedClient.firstName}{" "}
                {selectedClient.middleName} {selectedClient.lastName}
              </p>
              <p>
                <strong>Birth Date:</strong> {selectedClient.birthDate}
              </p>
              <p>
                <strong>Birth Place:</strong> {selectedClient.birthPlace?.city},{" "}
                {selectedClient.birthPlace?.state},{" "}
                {selectedClient.birthPlace?.country}
              </p>
              <p>
                <strong>Email:</strong> {selectedClient.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedClient.phone}
              </p>
              <p className="md:col-span-2">
                <strong>Address:</strong> {selectedClient.address?.street},{" "}
                {selectedClient.address?.city}, {selectedClient.address?.state}{" "}
                {selectedClient.address?.zip}, {selectedClient.address?.country}
              </p>
              <p>
                <strong>Purpose:</strong> {selectedClient.purpose}
              </p>
              <p>
                <strong>Passport No.:</strong> {selectedClient.passportNumber}
              </p>
              <p>
                <strong>Issue Date:</strong> {selectedClient.passportIssueDate}
              </p>
              <p>
                <strong>Expiry Date:</strong>{" "}
                {selectedClient.passportExpiryDate}
              </p>
            </div>

            {/* Images */}
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

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                onClick={() => {
                  setShowDetailsModal(false);
                  setShowModal(true);
                  handleReplyClick(selectedClient);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              >
                Reply
              </button>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition"
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

export default InquiryFP;
