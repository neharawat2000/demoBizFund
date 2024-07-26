// Dashboard.js
import React, { useState } from "react";
import CommissionDisplay from "../../../common/components/DashboardTab/CommisionDisplay";
import DualBarChartComponent from '../../../common/components/DualBarChart';
import Calendar from 'react-calendar';
import '../../../common/components/Calender.css';
import Bell from  "../../../data/Bell, Notifications.png";
import searchIcon from '../../../data/Group 536.png'; 
import copyPaste from '../../../data/copy-paste.png'
import LeadUpperTab from "../../../common/components/LeadComponent/UpperTab";
import { LabeledDropdown, LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";
import { format, parseISO } from 'date-fns';
import ActivityLogs from "../LeadScreen/Tabs/ActivityLogTabs";
import FilesTab from "../LeadScreen/Tabs/FileTab";// Import the FilesTab component
import fileUpload from "../../../data/Group 553.png";
import LenderPage from "./InduvidualDealTabs/LenderPage";
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import { GoDotFill } from "react-icons/go";
import AgentDealLender from "./InduvidualDealTabs/AgentDealLender/AgentDealLender";
import { useSelector } from "react-redux";

const IndividualDeal = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const role = useSelector((state) => state.role);
  const tabSelected = useSelector((state) => state.selectedTab);

  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const menuItems = [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal",
  ];

  const users = [
    {'name' : 'Olivia Rhye',
     'img': 'https://cdn.theorg.com/5f6cf081-3715-4c11-863c-036782203c9b_thumb.jpg'
    },
    {'name' : 'Phoenix Baker',
    'img': 'https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg'
   },
   {'name' : 'Lana Steiner',
   'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg7k5TDqDaaOl1gvZJLojqjPyVLdevAICDg&s'
  }];

  return (
    <div className="flex h-auto">
      <SecondaryNavigation  items={menuItems} />
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex-grow  mx-4">
          <div className="flex flex-grow mb-4 justify-between">
            <div className="space-x-6 flex  h-6 mt-10 mb-5">
              <LeadUpperTab title={'General'} isSelected={selectedTab === 'Information'} onClick={() => handleTabClick('Information')} />
              <LeadUpperTab title={'Lenders'} isSelected={selectedTab === 'Lenders'} onClick={() => handleTabClick('Lenders')} />
              <LeadUpperTab title={'Activity Logs'} isSelected={selectedTab === 'Activity logs'} onClick={() => handleTabClick('Activity logs')} />
              <LeadUpperTab title={'Files'} isSelected={selectedTab === 'Files'} onClick={() => handleTabClick('Files')} />
              <LeadUpperTab title={'Tag People'} isSelected={selectedTab === 'Tag People'} onClick={() => handleTabClick('Tag People')} />
            </div>

            <div className="flex ">
              <div className="flex items-center rounded-3xl p-2 pr-6 h-10 mt-6 bg-white ">
              <div className="bg-custom-green flex justify-center items-center rounded-full p-1 w-8 h-8">
                <img
                src={copyPaste}
                alt="lead Icon"
                className="w-4 h-4 justify-center m-1"
                />
              </div>
              <div className="bg-white focus:outline-none pl-3">
                Lead ID <span className="font-bold">23NDJNS</span>
              </div>
              </div>
              
              <div className="flex items-center  text-[#004629] h-10 self-center px-2.5 py-1 bg-operation-green rounded-[50px] font-medium ml-4">
                <GoDotFill className="text-[#00A762]"/>Approved
              </div>
              
            </div>
            
          </div>
          
          {selectedTab === 'Information' && (
            <div className="bg-white rounded-lg py-5 px-7 h-screen">
              <div className="flex justify-between mb-3">
                <div className="text-lg font-semibold text-good-morning-text">
                  Information
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex space-x-4">
                  <LabeledInput label={'Company'} placeholder={'Enter company name'} />
                  <LabeledInput label={'Agent'} placeholder={'Enter Agent name'} />
                </div>
                <div className="flex space-x-4">
                  <LabeledInput label={'Date'} placeholder={'19/06/2024'} />
                  <LabeledInput label={'Lead ID'} placeholder={'23NDJNS'} />
                </div>
              </div>
            </div>
          )}
          {selectedTab === 'Lenders' && ( (role == 'agent' && tabSelected == 'Deals')  ? <AgentDealLender /> : <LenderPage /> )}
          {selectedTab === 'Activity logs' && (
            <div className="flex space-x-4 h-screen">
              <div className="flex-grow">
                <ActivityLogs />
              </div>
              <div className="w-1/3 bg-white rounded-3xl p-4">
                <div className="bg-custom-green text-white font-semibold rounded-xl py-2 text-center cursor-pointer mb-4">
                  Add new log
                </div>
                <div className="bg-white rounded-3xl flex items-center p-2 mb-4">
                  <img src={searchIcon} alt="Search Icon" className="w-8 h-8 mr-2" />
                  <input type="text" placeholder="Search by user" className="bg-white focus:outline-none h-10 pl-3 flex-grow" />
                </div>
                <div className="space-y-4">
                  {users.map((user, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-2 shadow">
                      <img
                        src={user.img}
                        alt={`${user.name}'s profile`}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div className="text-good-morning-text font-semibold">
                        {user.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedTab === 'Files' && <FilesTab />}
          {selectedTab === 'Tag People' && (
            <div className=" rounded-2xl p-4 space-y-4 h-screen">
              <div className="flex items-center bg-white rounded-3xl pl-1">
                <img src={searchIcon} alt="Search People" className="w-8 h-8 mr-2" />
                <input type="text" placeholder="Add people" className="bg-white focus:outline-none h-10 pl-3 flex-grow" />
              </div>
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-2 shadow">
                    <div className="text-good-morning-text font-semibold">
                      {user.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IndividualDeal;
