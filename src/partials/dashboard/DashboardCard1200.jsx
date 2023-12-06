import React from 'react';
import TableComponent from '../../components/TableComponent';

function DashboardCard120() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700  my-6 ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">List Of Destinations</h2>
      </header>
      <div className="p-2">
     
        <TableComponent></TableComponent>
      </div>
    </div>
  );
}

export default DashboardCard120;
