import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

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
  
        const docRef = doc(db, "adminAuth", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (!docSnap.exists() || docSnap.data().role !== "dashboardJPCS") {
          navigate("/unauthorized"); // or redirect elsewhere
        }
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
      to_name: selectedClient.name,
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
      .then((response) => {
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
            Client Submissions Dashboard
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
                      Name
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Email
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Phone
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Product
                    </th>
                    <th className="py-3 px-6 text-left text-sm font-semibold text-gray-600">
                      Message
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
                        {item.name}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.email}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.phone}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600">
                        {item.product}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-600 truncate max-w-xs">
                        {item.message}
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

      {/* Modal for composing email */}
      {showModal && selectedClient && (
        <div className="fixed inset-0 backdrop-blur-xs bg-linear-to-r from-blue-300/20 to-blue-300/20 bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Reply to {selectedClient.name}
            </h2>
            <textarea
              className="w-full border border-gray-300 rounded p-3 h-40 resize-none"
              value={adminMessage}
              onChange={(e) => setAdminMessage(e.target.value)}
              placeholder="Write your message here..."
            />
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

      {/* Modal for details */}
      {showDetailsModal && selectedClient && (
        <div className="fixed inset-0 backdrop-blur bg-linear-to-r from-blue-300/20 to-blue-300/20 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md space-y-2 p-6">
            <h2 className="text-xl font-semibold mb-4">Client Details</h2>
            <p>
              <strong>Name:</strong> {selectedClient.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedClient.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedClient.phone}
            </p>
            <p>
              <strong>Product:</strong> {selectedClient.product}
            </p>
            <p>
              <strong>Message:</strong>
              <br />
              {selectedClient.message}
            </p>

            <div className="mt-5 text-right space-x-3">
              <button
                onClick={() => {
                  setShowDetailsModal(false); // close details modal
                  setShowModal(true); // open reply modal
                  handleReplyClick(selectedClient); // pass client data
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
