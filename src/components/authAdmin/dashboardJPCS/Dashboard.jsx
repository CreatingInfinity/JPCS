import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Inquiry from "./Inquiry";

const Dashboard = () => {
  return (
    <section className="flex w-full h-screen p-4 gap-2">
      <DashboardSidebar />

      <div className="flex-1 overflow-y-hidden rounded space-y-4">
        <div
          id="inquiry"
          className="w-full min-h-screen rounded"
        >
          <Inquiry />
        </div>

        <div
          id="analytics"
          className="w-full min-h-screen bg-orange-200 rounded p-4"
        >
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          {/* Your analytics content here */}
        </div>

        <div
          id="approved"
          className="w-full min-h-screen bg-orange-300 rounded p-4"
        >
          <h2 className="text-xl font-bold mb-2">Approved</h2>
          {/* Your approved content here */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
