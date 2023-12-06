import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Packages delivered on Mondays',
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.purple[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Packages delivered on Tuesdays',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.purple[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Packages delivered on Wednsdays',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.purple[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Packages delivered on Thursdays',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.purple[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[100],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Total Package delivered this month</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">449</div>
         </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard11;
