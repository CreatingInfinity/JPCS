import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import emailjs from "@emailjs/browser";
import { flagAUS } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const LogFilePino = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [adminMessage, setAdminMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [sortDirection, setSortDirection] = useState("desc");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
        return;
      }

      const docRef = doc(db, "adminAuth", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists() || docSnap.data().role !== "dashboardAUS") {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "log-Filepino"));
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

  const handleRowClick = (item) => {
    setSelectedClient(item);
    setShowDetailsModal(true);
  };

  const handleRestore = async (item) => {
    const confirm = window.confirm(
      "Are you sure you want to restore this submission?"
    );
    if (!confirm) return;

    try {
      const restoredData = { ...item };
      delete restoredData.deletedAt; 

      await setDoc(doc(db, "filepinoSubmissions", item.id), restoredData);

      await deleteDoc(doc(db, "log-Filepino", item.id));

      alert("Submission restored successfully!");

    } catch (error) {
      console.error("Error restoring submission:", error);
      alert("Failed to restore submission.");
    }
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
              Deleted Applications
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
              <span className="text-lg text-gray-600">
                Loading submissions...
              </span>
            </div>
          ) : sortedSubmissions.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">
                No submissions found.
              </span>
            </div>
          ) : (
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
                      Submitted
                    </th>
                    <th className="py-3 px-3 text-left text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSubmissions.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-blue-50 transition-all cursor-pointer"
                      onClick={() => handleRowClick(item)}
                    >
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {index + 1}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.fullName}
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
                        {item.selection}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.submittedAt?.toDate().toLocaleString() || "N/A"}
                      </td>
                      <td className="py-3 px-3 text-sm">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRestore(item);
                          }}
                          className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700"
                        >
                          Restore
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
                <strong>Full Name:</strong> {selectedClient.fullName}
              </p>
              <p>
                <strong>Birth Date:</strong> {selectedClient.birthDate}
              </p>
              <p>
                <strong>Email:</strong> {selectedClient.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedClient.phone}
              </p>
              <p>
                <strong>Purpose:</strong> {selectedClient.selection}
              </p>
              <p>
                <strong>Submitted At:</strong>{" "}
                {new Date(
                  selectedClient.submittedAt?.seconds * 1000
                ).toLocaleString()}
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <h3 className="font-semibold text-lg text-gray-800">Education</h3>
              <p>
                <strong>Course:</strong>{" "}
                {selectedClient.education?.course || "—"}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {selectedClient.education?.duration || "—"}
              </p>
              <p>
                <strong>University:</strong>{" "}
                {selectedClient.education?.university || "—"}
              </p>
            </div>

            {/* Work History Info */}
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <h3 className="font-semibold text-lg text-gray-800">
                Work History
              </h3>
              <p>
                <strong>Company:</strong>{" "}
                {selectedClient.workHistory?.company || "—"}
              </p>
              <p>
                <strong>Start:</strong>{" "}
                {selectedClient.workHistory?.start || "—"}
              </p>
              <p>
                <strong>End:</strong> {selectedClient.workHistory?.end || "—"}
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
                  Resume Document:
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

export default LogFilePino;
