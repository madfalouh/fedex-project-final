import React, { useState } from "react";

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

const TableComponent1 = ({ selectedItemm }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search query
  const filteredData = data.filter((item) => {
    return (
      item.tracking_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.num_of_packages.toString().includes(searchQuery)
    );
  });

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="col-span-full px-6 xl:col-span- bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="py-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-3 py-2 border rounded"
          />
        </div>

        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl leading-tight"></h2>
          <div className="text-end"></div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tracking Number
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Num of Packages
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(item)}
                    className="cursor-pointer"
                  >
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.tracking_number}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.location}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.address}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.num_of_packages}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedItem && (
          <div className="modal-backdrop">
            <div className="modal-center">
              <div className="modal-content">
                <h3 className="modal-title">
                  Details for {selectedItem.tracking_number}
                </h3>
                <br></br>
                <div className="modal-content-wrapper">
                  <div className="modal-content-1">
                    <p>Location: {selectedItem.location}</p>
                    <p>Courrier : Alien kelly</p>
                    <p style={{ width: "50%" }}>
                      Address: {selectedItem.address}
                    </p>
                    <p>Number of Packages: {selectedItem.num_of_packages}</p>

                    <p>Route Number : 2548</p>
                    <p>Stop Number : 15</p>
                  </div>

                  <div className="modal-content-2">
                    <p>Leave building time : 5.30pm</p>
                    <p>To Area Duration : 30 min</p>

                    <p>Duration at each stop: 15 min</p>

                    <p>From area duration: 38 min</p>

                    <p>return to building time: 9pm</p>
                    <p>steps per hour : 4</p>
                  </div>
                </div>

                <br></br>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="modal-close-btn"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    selectedItemm(selectedItem);
                  }}
                  className="modal-close-btn-green"
                >
                  Track Courrier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableComponent1;
