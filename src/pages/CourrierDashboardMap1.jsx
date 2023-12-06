import React, { useState } from "react";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard0044 from "../partials/dashboard/DashboardCard0044";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard100 from "../partials/dashboard/DashboardCard100";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header1";
import "./Courrier.css";
import DashboardCard120 from "../partials/dashboard/DashboardCard120";
import DashboardStatCard from "../components/DashboardStatard";

import TableComponent1 from "../components/TableComponent1";
function CourrierDashboardMap1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItemm] = useState(null);
 const data = [
    {
      tracking_number: "4LJEOVU5VT",
      location: "Marksport",
      address: "949 Christina Inlet, Youngbury, NC 52478",
      num_of_packages: 9,
      longitude: 44.5,
      latitude: -89.5,
    },
    {
      tracking_number: "86CQIXZ0U3",
      location: "South Sylvia",
      address: "08170 Grant Drive, West Michelleland, MD 81384",
      num_of_packages: 9,
      longitude: 39.0,
      latitude: -80.5,
    },
    {
      tracking_number: "83FDCDGD58",
      location: "Bowenport",
      address: "941 Eric Throughway Apt. 182, Luisland, NM 06298",
      num_of_packages: 2,
      longitude: 44.0,
      latitude: -72.699997,
    },
    {
      tracking_number: "H1A0HL6U9B",
      location: "North Kellyview",
      address: "72549 Sabrina Crest, Pattersonville, AR 83621",
      num_of_packages: 1,

      longitude: 31.0,
      latitude: -84.0,
    },
    {
      tracking_number: "2LREH7DENN",
      location: "West Bradleyberg",
      address: "05658 Harold Parkways, Jacksonshire, FL 37353",
      num_of_packages: 9,
      longitude: 44.5,
      latitude: -89.0,
    },
    {
      tracking_number: "R444T7CLY9",
      location: "Mccallfurt",
      address: "PSC 6745, Box 0448, APO AP 31616",
      num_of_packages: 10,
      longitude: 44.5,
      latitude: -88.0,
    },
    {
      tracking_number: "I11VMO7CQD",
      location: "North Deannafurt",
      address: "59629 Scott Locks Suite 856, Nguyenchester, DE 35730",
      num_of_packages: 4,
      longitude: 44.0,
      latitude: -85.5,
    },
    {
      tracking_number: "J3K5Z7PYP6",
      location: "Wrightbury",
      address: "56655 House Common, Faulknermouth, IL 88209",
      num_of_packages: 6,

      longitude: 43.0,
      latitude: -75.0,
    },
    {
      tracking_number: "N7S6LZN7N6",
      location: "Rosstown",
      address: "7061 Paul Radial, Lawsonhaven, MO 37181",
      num_of_packages: 4,

      longitude: 44.0,
      latitude: -71.5,
    },
    {
      tracking_number: "5TIS72K8Y4",
      location: "South Vanessamouth",
      address: "968 Emily Shore, Marshallhaven, CT 47044",
      num_of_packages: 8,
      longitude: 41.5,
      latitude: -89.0,
    },
    {
      tracking_number: "ONV9YFWFAT",
      location: "West Erikamouth",
      address: "1962 Smith Passage Suite 854, North Crystal, IN 65602",
      num_of_packages: 8,
      longitude: 38.5,
      latitude: -85.0,
    },
    {
      tracking_number: "2E8AZ8UPJP",
      location: "Rhodesbury",
      address: "861 April Roads Suite 970, Samuelburgh, MD 42100",
      num_of_packages: 3,
      longitude: 33.0,
      latitude: -89.0,
    },
    {
      tracking_number: "1JPXOKCV0D",
      location: "Douglasberg",
      address: "87323 Dana Summit Apt. 014, East Gary, WI 40115",
      num_of_packages: 1,
      longitude: 40.0,
      latitude: -89.0,
    },
    {
      tracking_number: "NG93GW9M64",
      location: "New Jonathanbury",
      address: "9083 Acevedo Grove, Lake Stanleystad, MN 69965",
      num_of_packages: 1,
      longitude: 39.0,
      latitude: -75.5,
    },
    {
      tracking_number: "VH4TZCDUF3",
      location: "Martinland",
      address: "6317 Stewart Courts, East Michelle, MD 41783",
      num_of_packages: 8,
      longitude: 41.599998,
      latitude: -72.699997,
    },
  ];

  console.log(selectedItem);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
            </div>

            <div className="">
              <DashboardCard0044 data={data} selectedItem={selectedItem} />
            </div>
<br></br><br></br>
            <TableComponent1 selectedItemm={setSelectedItemm} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourrierDashboardMap1;
