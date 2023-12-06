import React from 'react';

function DashboardCard12() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700  my-6 ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Recent Activity</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
               
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Nick Mark
                    </a>{' '}
                    deliveried{' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      the package  at 10.30 AM
                    </a>{' '}
                  
                  </div>
               
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
            
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    Package{' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                     In the truck 
                    </a>{' '}
                    for the next{' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Delivery
                    </a>
                  </div>
                 
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-emerald-500 my-2 mr-3">
            
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Patrick Sullivan
                    </a>{' '}
                    delivered{' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      the package at 8 AM
                    </a>
                  </div>
               
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Yesterday
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3">
              
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      Patrick smith
                    </a>{' '}
                    deliverd {' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      the package at 12 AM
                    </a>
                  </div>
                 
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3">
               
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    The package with Id 235876{' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      was lost 
                    </a>{' '}
                    {' '}
                    <a className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      in the facility
                    </a>
                  </div>
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard12;
