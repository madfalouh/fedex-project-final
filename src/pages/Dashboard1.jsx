import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import StopsDropdown from "../components/StopsDropDown";
import RegionDropdown from "../components/RegionDropdown";
import DashboardCard01V from "../partials/dashboard/DashboardCard01V";
import DashboardCard02V from "../partials/dashboard/DashboardCard02V";

function Dashboard1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8     mx-auto">
            <div className="contaner-vice">
              <StopsDropdown />
              <RegionDropdown />
            </div>

            <div className="">
              <div>
                <br></br>
                <div className="flex  items-center  flex-wrap gap-5">
                  <img
                    style={{ borderRadius: "100px" }}
                    width={50}
                    src="https://cdn.discordapp.com/attachments/997271766302982234/1181690506917445723/madfalouh_generate_image_of_a_courier_72_by_72_pixels_3dcbedaa-a03d-4ae4-9e3e-ae521f9b63b9.png?ex=6581fa0b&is=656f850b&hm=36cdd2d78523ff93cc5d032ec862100e5c02065fee72067574a929a7566576ef&"
                  ></img>

                  <p className="title-doe">Jhon Doe</p>
                </div>
                <br></br>
                <div className="grid grid-cols-12 gap-6">
                  <DashboardCard01V />

                  <DashboardCard02V />
                </div>
              </div>

              <div>
                <br></br> <br></br>
                <div className="flex  items-center  flex-wrap gap-5">
                  <img
                    style={{ borderRadius: "100px" }}
                    width={50}
                    src="https://cdn.discordapp.com/attachments/997271766302982234/1181690971126235217/madfalouh_generate_image_of_a_courier_72_by_72_pixels_f08311c8-85ca-4767-9276-797b4f645fbf.png?ex=6581fa7a&is=656f857a&hm=ab00c7ae0e8f1be603498cf32a68d45fde7d4ff59f05b040ffb7b2805423fbfe&"
                  ></img>
                  <p className="title-doe">Alex Doe</p>
                </div>
                <br></br>
                <div className="grid grid-cols-12 gap-6">
                  <DashboardCard01V />

                  <DashboardCard02V />
                </div>
              </div>

              <div>
                <br></br> <br></br>
                <div className="flex  items-center  flex-wrap gap-5">
                  <img
                    style={{ borderRadius: "100px" }}
                    width={50}
                    src="https://cdn.discordapp.com/attachments/997271766302982234/1181690979963650180/madfalouh_generate_image_of_a_courier_72_by_72_pixels_6b31d67a-d9e1-40e6-85ec-addd5b6ff9d7.png?ex=6581fa7c&is=656f857c&hm=7899910ff7cb09db29f00cd5ca47ca9a289201b8a2a1f55c4136f98fc11cea2c&"
                  ></img>
                  <p className="title-doe">Arthur Doe</p>
                </div>
                <br></br>
                <div className="grid grid-cols-12 gap-6">
                  <DashboardCard01V />

                  <DashboardCard02V />
                </div>
              </div>
              <br></br>
              <br></br>
              <DashboardCard04 />
              <br></br>
              <br></br>
              <DashboardCard06 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard1;
