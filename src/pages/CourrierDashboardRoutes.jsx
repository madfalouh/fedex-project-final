import React, { useState } from "react";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard004 from "../partials/dashboard/DashboardCard004";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard100 from "../partials/dashboard/DashboardCard100";
import DashboardCard011 from "../partials/dashboard/DashboardCard011";
import Sidebar1 from "../partials/Sidebar1";
import Header from "../partials/Header1";
import "./Courrier.css";
import DashboardCard1200 from "../partials/dashboard/DashboardCard1200";
import DashboardCard120 from "../partials/dashboard/DashboardCard120";
import TableComponent from "../components/TableComponent";
import DashboardStatCard from "../components/DashboardStatard";
function CourrierDashboardRoutes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // default to today's date
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
          <div className="px-4 sm:px-6 lg:px-8 py-10 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
              {stats.map((stat, index) => (
                <DashboardStatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  iconClassName={stat.iconClassName}
                  bgColorClassName={stat.bgColorClassName}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8  w-full max-w-9xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mr-4">
              Route Compliance
            </h1>
            <input
              type="date"
              style={{ width: "200px" }}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
            </div>

            <div className="">
              <DashboardCard011 />
            </div>
            <DashboardCard1200 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourrierDashboardRoutes;
