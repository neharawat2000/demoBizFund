// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import { useNavigate } from "react-router-dom";
import { LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";
import { MdEdit } from 'react-icons/md';
import ProfButton from '../../../data/profileupdate.png';
import { useSelector } from "react-redux";
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import ToggleButtonComp from "../../../common/ToggleButtonComp";

const AddNewLender = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const role = useSelector((state) => state.role);

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const menuItems= role == 'operations' ? 
  [
    "Dashboard",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ]
  :  [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ];

  return (
    <div className="flex h-screen">
      <div className="flex space-x-24 w-[278px]">
  <DashboardTab />
 </div>
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col ">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6 ">
        
        </div>
          <div className="flex-grow  mx-2 mb-5 overflow-y-auto">
          <div className="bg-white rounded-lg py-5 px-7 h-auto pb-24 mx-10">
          <div className="flex justify-between mb-6">
                </div>
                <div className="space-y-7 ">
                    <div className="flex">
                    <div className="relative inline-block mr-8">
      <img
        src="https://i.pinimg.com/736x/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.jpg"
        alt="User Avatar"
        className="w-28 h-24 rounded-full border-2 border-custom-green"  // Adjust size and border color
      />
      <div className="absolute bottom-0 right-0  p-1 ">
        {/* <img src="../" className="text-green-500" size={20} />   */}
        <img
          src={ProfButton}
        //   alt="Background"
          className="object-cover h-8  mt-1"
        />
      </div>
    </div>
    <div className="flex space-x-4 w-full">
                    <LabeledInput label={'Company Name'} placeholder={'Enter company name     '} />
                    <LabeledInput label={'Company Contact Name'} placeholder={'Enter name'} />
                  </div>
                </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'Company Contract Email '} placeholder={'Enter email     '} />
                    <LabeledInput label={'Max Funding Amount'} placeholder={'Enter amount'} />
                  </div>
                  <div className="flex space-x-4 w-full justify-between">
                    <LabeledInput label='Monthly minimums' placeholder='Enter monthly minimums' />
                    <div className="flex flex-col w-full">
                      <div className="flex space-x-4 items-start justify-between">
                        <div className="flex flex-col gap-3">
                          <label className="font-semibold text-good-morning-text">Daily</label>
                          <ToggleButtonComp />
                        </div>
                        <div className="flex flex-col gap-3">
                          <label className="font-semibold text-good-morning-text">Weekly</label>
                          <ToggleButtonComp />
                        </div>
                        <div className="flex flex-col gap-3">
                          <label className="font-semibold text-good-morning-text">Bi-weekly/monthly</label>
                          <ToggleButtonComp />
                        </div>
                        <div className="flex-1 max-w-[200px]">
                          <LabeledInput label='Tier' placeholder='A' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'NSF'} placeholder={'Enter NSF'} />
                    <LabeledInput label={'Average Daily Balance'} placeholder={'Enter amount'} />
                  </div>
                  <div className="flex space-x-4 w-1/2">
                    <LabeledInput label={'Position Willing to Fund'} placeholder={'Enter position'} />
                    {/* <LabeledInput label={'Password'} placeholder={'**************'} /> */}
                  </div>
                </div>
              
          {/* <ReusableTable columns={columns} data={data} /> */}
          <div className="relative bg-white">
    <div className="absolute top-10 right-8 w-40 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
      Submit
    </div>
  </div>
          </div>
          </div>
      </main>
    </div>
  );
};

export default AddNewLender;
