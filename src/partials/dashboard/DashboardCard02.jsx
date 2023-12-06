import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-02.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          622, 622, 426, 471, 365, 365, 238,
          324, 288, 206, 324, 324, 500, 409,
          409, 273, 232, 273, 500, 570, 767,
          808, 685, 767, 685, 685,
        ],
        fill: true,
        backgroundColor: `rgba(248,101,9, 0.08)`,
        borderColor: 'rgb(248,101,9)',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
          pointBackgroundColor: 'rgb(248,101,9)',
          pointHoverBackgroundColor: 'rgb(248,101,9)',
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,          
          clip: 20,
      },
      // Gray line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        borderColor: `rgb(84,28,140)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgb(84,28,140)`,
        pointHoverBackgroundColor: `rgb(84,28,140)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">

        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Average Scan Compilance
</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500  mb-1">Average Scans</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">489</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-orange-500 rounded-full">-14%</div>
        </div>
      </div>
  
      <div className="grow max-sm:max-h-[128px] max-h-[300px]">
         <LineChart data={chartData} width={389} height={300} />
      </div>
    </div>
  );
}

export default DashboardCard02;
