import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['New York', 'Chicago', 'Memphis'],
    datasets: [
      {
        label: 'Arrived',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.purple[600],
          tailwindConfig().theme.colors.purple[400],
          tailwindConfig().theme.colors.purple[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.purple[200],
          tailwindConfig().theme.colors.purple[100],
          tailwindConfig().theme.colors.purple[300],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Facilities</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
