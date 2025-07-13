import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import emailjs from "@emailjs/browser";
import { flagAUS } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const ApprovedFP = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [adminMessage, setAdminMessage] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

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
    const unsubscribe = onSnapshot(
      collection(db, "approveSubmissionsFP"),
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching submissions:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleReplyClick = (item) => {
    setSelectedClient(item);
    setShowModal(true);
  };

  const handleRowClick = (item) => {
    setSelectedClient(item);
    setShowDetailsModal(true);
  };

  const handleApprove = async (id) => {
    const confirmApprove = window.confirm("Approve this submission?");
    if (!confirmApprove) return;

    try {
      const submissionToApprove = submissions.find((sub) => sub.id === id);
      if (!submissionToApprove) throw new Error("Submission not found.");

      await setDoc(doc(db, "approveSubmissionsFP", id), {
        ...submissionToApprove,
        approved: true,
        approvedAt: new Date(),
      });

      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? { ...sub, approved: true, approvedAt: new Date() }
            : sub
        )
      );

      alert("Submission approved successfully!");
    } catch (error) {
      console.error("Error approving submission:", error);
      alert("Failed to approve submission.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this submission?"
    );
    if (!confirmDelete) return;

    try {
      const submissionToDelete = submissions.find((sub) => sub.id === id);
      if (!submissionToDelete) throw new Error("Submission not found.");

      await setDoc(doc(db, "log-MLhuiller", id), {
        ...submissionToDelete,
        deletedAt: new Date(),
      });

      await deleteDoc(doc(db, "mlhuillerSubmissions", id));

      setSubmissions((prev) => prev.filter((sub) => sub.id !== id));

      alert("Submission deleted successfully!");
    } catch (error) {
      console.error("Error deleting submission:", error);
      alert("Failed to delete submission.");
    }
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

  const handleUnapprove = async (id) => {
    const confirmUnapprove = window.confirm("Remove this submission?");
    if (!confirmUnapprove) return;

    try {
      const submissionToUnapprove = submissions.find((sub) => sub.id === id);
      if (!submissionToUnapprove) throw new Error("Submission not found.");

      await setDoc(doc(db, "filepinoSubmissions", id), {
        ...submissionToUnapprove,
        approved: false,
        approvedAt: null,
      });

      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id ? { ...sub, approved: false, approvedAt: null } : sub
        )
      );

      await deleteDoc(doc(db, "approveSubmissionsFP", id));

      alert("Submission removed successfully!");
    } catch (error) {
      console.error("Error unapproving submission:", error);
      alert("Failed to unapprove submission.");
    }
  };

  const sortedSubmissions = [...submissions].sort((a, b) => {
    const aTime = a.submittedAt?.seconds || 0;
    const bTime = b.submittedAt?.seconds || 0;
    return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
  });

  const filteredSubmissions = sortedSubmissions.filter((submission) =>
    submission.referenceCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Approved Submissions
            </h1>
            <img className="h-10 rounded" src={flagAUS} alt="flag" />
          </div>

          <div className="mb-4 flex justify-between">
            <input
              type="text"
              placeholder="Search by Reference Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-2 outline-none w-full max-w-sm"
            />
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
                      Reference ID
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
                    <th className="py-3 px-3 text-center text-sm font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((item, index) => (
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
                        {item.referenceCode}
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
                      <td className="py-3 px-5 text-sm flex justify-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReplyClick(item);
                          }}
                          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        >
                          Reply
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUnapprove(item.id);
                          }}
                          className="bg-gray-500 px-2 rounded hover:bg-gray-600"
                        >
                          <svg
                            height="20px"
                            viewBox="0 -12 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                            fill="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <title>minus</title>{" "}
                              <desc>Created with Sketch Beta.</desc>{" "}
                              <defs> </defs>{" "}
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                                sketch:type="MSPage"
                              >
                                {" "}
                                <g
                                  id="Icon-Set-Filled"
                                  sketch:type="MSLayerGroup"
                                  transform="translate(-414.000000, -1049.000000)"
                                  fill="#ffffff"
                                >
                                  {" "}
                                  <path
                                    d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049"
                                    id="minus"
                                    sketch:type="MSShapeGroup"
                                  >
                                    {" "}
                                  </path>{" "}
                                </g>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id);
                          }}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          <svg
                            height="20px"
                            width="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                                d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                                stroke="#ffffff"
                                stroke-width="2.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
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
              <h2 className="text-xl  font-semibold mb-4">
                Reply to {selectedClient.email}
              </h2>
              <textarea
                className="w-full p-3  font-bold resize-y outline-none"
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

export default ApprovedFP;
