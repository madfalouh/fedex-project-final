import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard011() {

  const chartData = {
    labels: [
      '12-01-2020',
      '01-01-2021',
      '02-01-2021',
      '03-01-2021',
      '04-01-2021',
      '05-01-2021',
      '06-01-2021',
      '07-01-2021',
      '08-01-2021',
      '09-01-2021',
      '10-01-2021',
      '11-01-2021',
      '12-01-2021',
      '01-01-2022',
      '02-01-2022',
      '03-01-2022',
      '04-01-2022',
      '05-01-2022',
      '06-01-2022',
      '07-01-2022',
      '08-01-2022',
      '09-01-2022',
      '10-01-2022',
      '11-01-2022',
      '12-01-2022',
      '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: `rgba(84,28,140, 0.08)`,
        borderColor: `rgba(84,28,140)`,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(84,28,140)`,
        pointHoverBackgroundColor: `rgba(84,28,140)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Gray line
    
    ],
  };

  return (
    <div className="col-span-full lg:col-span-8 xl:col-span-6 2xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 my-6 mx-auto lg:mx-0">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
     
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Average Route Compilance</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500   mb-1">Average Routes</div>
        <div className="flex items-start">
 
        </div>
      </div>
   
      <div className="grow max-sm:max-h-[450px] xl:max-h-[500px]">
      
        <LineChart data={chartData} width={450} height={500} />
      </div>
    </div>
  );
}

export default DashboardCard011;
