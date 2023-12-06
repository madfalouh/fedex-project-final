import React from 'react';

const data = [
  {
    destination: 'Facility 1',
    priority: 'High',
    address: '123 Main St',
    numOfPackages: 10,
    status: 'Pending',
    statusColor: 'bg-red-200 text-red-800'
  },
  {
    destination: 'Facility 2',
    priority: 'Medium',
    address: '456 Broadway Ave',
    numOfPackages: 20,
    status: 'Approved',
    statusColor: 'bg-green-200 text-green-800'
  },
  {
    destination: 'Facility 3',
    priority: 'Low',
    address: '789 Market St',
    numOfPackages: 30,
    status: 'In Process',
    statusColor: 'bg-yellow-200 text-yellow-800'
  },
  {
    destination: 'Facility 4',
    priority: 'High',
    address: '1012 Fourth St',
    numOfPackages: 25,
    status: 'Delayed',
    statusColor: 'bg-orange-200 text-orange-800'
  },
  {
    destination: 'Facility 5',
    priority: 'Low',
    address: '1314 Fifth Ave',
    numOfPackages: 15,
    status: 'Delivered',
    statusColor: 'bg-blue-200 text-blue-800'
  },
  {
    destination: 'Facility 6',
    priority: 'Medium',
    address: '1516 Sixth St',
    numOfPackages: 18,
    status: 'Pending',
    statusColor: 'bg-red-200 text-red-800'
  },
  {
    destination: 'Facility 7',
    priority: 'High',
    address: '1718 Seventh Ave',
    numOfPackages: 22,
    status: 'Approved',
    statusColor: 'bg-green-200 text-green-800'
  },
  {
    destination: 'Facility 8',
    priority: 'Medium',
    address: '1920 Eighth St',
    numOfPackages: 12,
    status: 'In Transit',
    statusColor: 'bg-purple-200 text-purple-800'
  },
  {
    destination: 'Facility 9',
    priority: 'Low',
    address: '2122 Ninth Ave',
    numOfPackages: 28,
    status: 'Pending',
    statusColor: 'bg-red-200 text-red-800'
  },
  {
    destination: 'Facility 10',
    priority: 'High',
    address: '2324 Tenth St',
    numOfPackages: 5,
    status: 'Cancelled',
    statusColor: 'bg-gray-200 text-gray-800'
  },
  {
    destination: 'Facility 11',
    priority: 'Medium',
    address: '2526 Eleventh St',
    numOfPackages: 16,
    status: 'Approved',
    statusColor: 'bg-green-200 text-green-800'
  },
  {
    destination: 'Facility 12',
    priority: 'Low',
    address: '2728 Twelfth Ave',
    numOfPackages: 19,
    status: 'In Review',
    statusColor: 'bg-indigo-200 text-indigo-800'
  },
  {
    destination: 'Facility 13',
    priority: 'High',
    address: '2930 Thirteenth St',
    numOfPackages: 23,
    status: 'Pending',
    statusColor: 'bg-red-200 text-red-800'
  },
  {
    destination: 'Facility 14',
    priority: 'Medium',
    address: '3132 Fourteenth Ave',
    numOfPackages: 11,
    status: 'In Transit',
    statusColor: 'bg-purple-200 text-purple-800'
  },
  {
    destination: 'Facility 15',
    priority: 'Low',
    address: '3334 Fifteenth St',
    numOfPackages: 27,
    status: 'Delivered',
    statusColor: 'bg-blue-200 text-blue-800'
  },
];


const TableComponent = ({bool  , setBool}) => {
  return (
    <div     className="col-span-full  px-6 xl:col-span- bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl leading-tight">
       
          </h2>
          <div className="text-end">
          
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Num of Packages
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}  className={ `${item.status != "Approved"  &&  "cursor-pointer" }`}   onClick={  ()=>{ if(item.status != "Approved") setBool( (prev)=> !prev )   }  }  >
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.destination}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.priority}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.address}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.numOfPackages}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className={`relative inline-block px-3 py-1 font-semibold ${item.statusColor} leading-tight`}>
                        <span aria-hidden="true" className="absolute inset-0 opacity-50 rounded-full"></span>
                        <span className="relative">{item.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
