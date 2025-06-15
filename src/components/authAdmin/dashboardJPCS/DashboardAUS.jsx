import React from "react";
import InquiryAUS from "./InquiryAUS";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSidebarAUS from "./DashboardSidebarAU";

const DashboardAUS = () => {
  return (
    <section className="flex w-full h-screen p-4 gap-2 josefin font-bold">
      <DashboardSidebarAUS />

      <div className="flex-1 overflow-y-hidden rounded space-y-4">
        <div
          id="inquiry"
          className="w-full min-h-screen rounded"
        >
          <InquiryAUS />
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

export default DashboardAUS;
