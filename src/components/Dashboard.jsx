import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase'; // make sure path is correct

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientSubmission"));
        const data = querySnapshot.docs.map(doc => ({
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Client Submissions Dashboard</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">Loading submissions...</span>
            </div>
          ) : submissions.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <span className="text-lg text-gray-600">No submissions found.</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">#</th>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">Name</th>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">Email</th>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">Phone Number</th>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">Product</th>
                    <th className="text-left text-sm font-semibold text-gray-600 py-3 px-6">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((item, index) => (
                    <tr key={item.id} className="border-t hover:bg-gray-50">
                      <td className="py-3 px-6 text-sm text-gray-600">{index + 1}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.name}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.email}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.phone}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.product}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{item.message}</td>
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

export default Dashboard;
