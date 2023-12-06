import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: 'https://cdn.discordapp.com/attachments/997271766302982234/1181690506917445723/madfalouh_generate_image_of_a_courier_72_by_72_pixels_3dcbedaa-a03d-4ae4-9e3e-ae521f9b63b9.png?ex=6581fa0b&is=656f850b&hm=36cdd2d78523ff93cc5d032ec862100e5c02065fee72067574a929a7566576ef&',
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      phone : '6625896124' ,
      location: '🇺🇸',
      spent: '45%',
    },
    {
      id: '1',
      image: 'https://cdn.discordapp.com/attachments/997271766302982234/1181690979963650180/madfalouh_generate_image_of_a_courier_72_by_72_pixels_6b31d67a-d9e1-40e6-85ec-addd5b6ff9d7.png?ex=6581fa7c&is=656f857c&hm=7899910ff7cb09db29f00cd5ca47ca9a289201b8a2a1f55c4136f98fc11cea2c&',
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      phone : '6612547893' ,
      location: '🇩🇪',
      spent: '60%',
    },
    {
      id: '2',
      image: 'https://cdn.discordapp.com/attachments/997271766302982234/1181690971126235217/madfalouh_generate_image_of_a_courier_72_by_72_pixels_f08311c8-85ca-4767-9276-797b4f645fbf.png?ex=6581fa7a&is=656f857a&hm=ab00c7ae0e8f1be603498cf32a68d45fde7d4ff59f05b040ffb7b2805423fbfe&',
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      location: '🇫🇷',
      phone : '6654789652' ,
      spent: '54.25%',
    },
    {
      id: '3',
      image: 'https://cdn.discordapp.com/attachments/997271766302982234/1181691617699188908/madfalouh_generate_image_of_a_courier_72_by_72_pixels_4fefa3b8-3949-4651-81ef-9ff39c5021b1.png?ex=6581fb14&is=656f8614&hm=374dc7f09c2a158305541ae6b7cbcf6bb061139b5e5d4a4ff50452766ea42f30&',
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      phone : '6678964546' ,
      location: '🇮🇹',
      spent: '88.88%',
    },
    {
      id: '4',
      image: 'https://cdn.discordapp.com/attachments/997271766302982234/1181692020536913920/madfalouh_generate_image_of_a_courier_72_by_72_pixels_c14ea0e1-21b6-4591-a452-4458fce883c3.png?ex=6581fb74&is=656f8674&hm=780cfc69b99c92ed255539471e5c5a59b663f762a9b91b77db9927c0c573c920&',
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      location: '🇬🇧',
      phone : '2256987448' ,
      spent: '96.25%',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Courriers</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone Number</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Comp. Rate</div>
                </th>
         
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800 dark:text-slate-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.phone}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.spent}</div>
                      </td>
                     
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
