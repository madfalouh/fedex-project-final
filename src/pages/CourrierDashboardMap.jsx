import React, { useState } from "react";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard0044 from "../partials/dashboard/DashboardCard0044";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard100 from "../partials/dashboard/DashboardCard100";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import Header from "../partials/Header1";
import "./Courrier.css";
import DashboardCard120 from "../partials/dashboard/DashboardCard120";
import DashboardStatCard from "../components/DashboardStatard";
import TableComponent from "../components/TableComponent";
import Sidebar1 from "../partials/Sidebar1";
import DashboardCard0045 from "../partials/dashboard/DashboardCard0045";
function CourrierDashboardMap() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bool, setBool] = useState(false);
  const stats = [
    {
      title: "Total Deliveries",
      value: "3,256",
      iconClassName: "text-purple-500",
      bgColorClassName: "bg-purple-100",
    },
    {
      title: "On-Time Deliveries",
      value: "2,987",
      iconClassName: "text-blue-500",
      bgColorClassName: "bg-blue-100",
    },
    {
      title: "Delayed Packages",
      value: "56",
      iconClassName: "text-yellow-500",
      bgColorClassName: "bg-yellow-100",
    },
    {
      title: "Issues Reported",
      value: "23",
      iconClassName: "text-red-500",
      bgColorClassName: "bg-red-100",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar1 sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
            </div>

            <div className="grid grid-cols gap-5">
              <DashboardCard0045   bool={bool} />
            </div>
            <br></br>
            <br></br>
            <TableComponent bool={bool} setBool={setBool} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourrierDashboardMap;
