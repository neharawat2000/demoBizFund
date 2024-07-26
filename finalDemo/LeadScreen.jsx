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
import ActivityLogs from "./Tabs/ActivityLogTabs";
import FilesTab from '../../tabScreens/LeadScreen/Tabs/FileTab'; // Import the FilesTab component
import fileUpload from '../../../data/Group.png'
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";

const LeadScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Information');

  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const LabeledTextarea = ({ label, placeholder, className }) => (
    <div className="flex flex-col w-full">
      <label className=" font-medium text-good-morning-text bg-white">{label}</label>
      <textarea 
        placeholder={placeholder} 
        className={`border border-gray-300 bg-white w-full  mt-3 h-56 resize-none rounded-md ${className}`} 
      />
    </div>
  );

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
    <div className="flex h-auto bg-black">
      <DashboardTab />
      <main className="flex-1 bg-background-color p-6 h-auto flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex flex-grow justify-between  mx-4">
          <div className="flex mb-4">
            <div className="flex-grow space-x-6 flex  h-6 mt-10 mb-5">
            <LeadUpperTab title={'Information'} isSelected={selectedTab === 'Information'} onClick={() => handleTabClick('Information')} />
            <LeadUpperTab title={'Activity logs'} isSelected={selectedTab === 'Activity logs'} onClick={() => handleTabClick('Activity logs')} />
            <LeadUpperTab title={'Files'} isSelected={selectedTab === 'Files'} onClick={() => handleTabClick('Files')} />
            <LeadUpperTab title={'Tag people'} isSelected={selectedTab === 'Tag people'} onClick={() => handleTabClick('Tag people')} />
            <LeadUpperTab title={'Request'} isSelected={selectedTab === 'Request'} onClick={() => handleTabClick('Request')} />
          </div>
          <div className="h-9"></div>
        </div>
        <div className="flex items-center bg-white rounded-3xl p-2 h-10 w-3/12 mt-8">
          <div className="bg-custom-green justify-between items-center rounded-full p-1 w-8 h-8">
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
      </div>
      
      {selectedTab === 'Information' && (
        <div className="bg-white mt-5 rounded-lg space-x-5 py-1 ml-7 h-screen pb-7">
          <div className="flex justify-between w-full mr-9 ">
            <div className="flex  items-center">
              <div className='mt-3 ml-8 text-good-morning-text font-semibold text-lg text-base'>
                Customer Information
              </div>
              <div className='mt-3 ml-7 text-sm text-gray-500 bg-gray-300 px-3 py-1 rounded-full text-purple-700 font-semibold'>
                Bank Statement received
              </div>
              <div className='mt-3 ml-7 text-sm bg-lead-upper-blue  px-3 py-1 rounded-full text-blue-400 font-semibold'>
                Waiting on application
              </div>
            </div>
            <div className='mt-3 mr-8 h-9 px-14 p-1 rounded-lg text-white bg-custom-green font-semibold'>
              Edit
            </div>
          </div>
          <div className="px-3  mt-5">
            <div className="">
              <div className="w-full flex">
                <LabeledInput label={'Company Name'} placeholder={'Enter company name'} />
                <LabeledInput label={'Lead tag'} placeholder={'Enter Lead tag'} />
              </div>
              <div className="w-full flex mt-7">
                <LabeledInput label={'First Name'} placeholder={'Enter First Name'} />
                <LabeledInput label={'Last Name'} placeholder={'Enter Last name'} />
              </div>
              <div className="w-full flex mt-7">
                <LabeledInput label={'Phone Number'} placeholder={'Enter Phone Number'} />
                <LabeledInput label={'Email'} placeholder={'Enter email'} />
              </div>
              <div className="w-full flex mt-7">
                <LabeledInput label={'City'} placeholder={'Enter city'} />
                <LabeledInput label={'Street'} placeholder={'Enter Street'} />
              </div>
            </div>
          </div>
          <div className="h-9"></div>
      
        </div>
      )}
      {selectedTab === 'Activity logs' && (
        <div className="flex h-screen">
          <div className="flex-grow w-2/3 flex-shrink-0 space-x-6  h-full mt-4 ">
            <ActivityLogs />
          </div>

          {/* Right Side Content */}
          <div className="flex-grow ml-4 w-72 max-h-full  rounded-2xl mt-3">
            <div className="bg-custom-green cursor-pointer rounded-xl h-11 mx-4 flex justify-center items-center text-white font-semibold py-5 mb-4">
              Add new log
            </div>
            <div className="flex items bg-white rounded-3xl h-10 mx-4">
              <img src={searchIcon} alt="Search Icon" className="w-8 h-8 mr-2 ml-2 mt-1" />
              <input type="text" placeholder="Search by user" className="bg-white focus:outline-none h-10 pl-3" />
            </div>
            <div className="px-4 mt-5">
              {users.map((user, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-8 my-3 rounded-lg bg-white">
                  <div className="flex items-center">
                    <img
                      src={user.img}
                      alt={`${user.name}'s profile`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="text-good-morning-text font-semibold text-sm">{user.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedTab === 'Files' && <div className="flex h-screen"><div className="flex-grow w-2/3 flex-shrink-0 space-x-6  h-full mt-4 "> <FilesTab /></div></div>}
      {selectedTab === 'Tag people' && (
        <div className="flex h-screen"><div className="flex-grow w-2/3 flex-shrink-0 space-x-6  h-full mt-4 ">
        <div className="bg-white mt-5 rounded-2xl space-x-5  ml-7  px-1">
           <div className="flex items bg-white rounded-3xl h-10">
              <img src={searchIcon} alt="Search People" className="w-8 h-8 mr-2  mt-1" />
              <input type="text" placeholder="Search by user" className="bg-white focus:outline-none h-10 pl-3" />
            </div>
        </div>
        <div className=" mt-5 rounded-2xl space-x-5  ml-7  px-1">
        <div className="px-4 mt-5">
              {users.map((user, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-8 my-3 rounded-lg bg-white">
                  <div className="flex items-center">
                    {/* <img
                      src={user.img}
                      alt={`${user.name}'s profile`}
                      className="w-10 h-10 rounded-full mr-4"
                    /> */}
                    <div className="text-good-morning-text font-semibold text-sm">{user.name}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        </div>
        </div>
      )}
      {selectedTab === 'Request' && (
       <div className="flex  mt-5 ml-7 h-screen ">
       {/* First Card */}
       <div className="bg-white rounded-lg space-x-5 py-1 h-auto pb-7 pt-5 mr-5 w-full ">
         <div className="px-3">
           <div className="">
           <div className="w-full flex">
          <LabeledDropdown 
            label={'Choose the template'} 
            options={[
              { value: '', label: 'Funding Application V2' },
              // Add more options as needed
            ]}
          />
        </div>
             <div className="w-full flex mt-7">
               <LabeledInput label={'Client Name'} placeholder={'Enter First Name'} />
             </div>
             <div className="w-full flex mt-7">
               <LabeledInput label={'Client Email'} placeholder={'Enter email'} />
             </div>
             <div className="flex-1 shadow-md border border border-dashed border-green-500 w-1/3 mt-7 h-72 flex flex-col justify-center items-center ml-5">
          <img src={fileUpload} alt="Placeholder"  className="mb-2 w-10 h-10" />
          <span className="text-center text-good-morning-text font-semibold w-24 text-sm ">Add another document</span>
        </div>
           </div>
         </div>
         <div className="h-9"></div>
       </div>
     
       {/* Second Card */}
       <div className="w-full">
       <div className="relative bg-white rounded-lg space-x-5  pb-7  pt-5 w-full pr-8">
         <button className="absolute top-2 right-2 bg-custom-green  text-white px-7 py-2 rounded-xl mt-3 mr-3">
           Edit
         </button>
         <div className="px-3 mt-5">
           <div className="">
           <div className="w-full flex">
          <LabeledTextarea 
            label={'Template'} 
            placeholder={'Enter template name'} 
            className=" h-32 w-full p-2 rounded-xl"
          />
        </div>
           </div>
           </div>
        
         </div>
         <div className="h-9"></div>
         <div className="relative bg-white rounded-lg space-x-5  pt-5 w-full pr-8  pb-8">
         <button className="absolute top-2 right-2 bg-custom-green  text-white px-7 py-2 rounded-xl mt-3 mr-3">
           Edit
         </button>
         <div className="px-3 mt-5">
           <div className="">
           <div className="w-full flex">
           <LabeledDropdown 
            label={'Reminders'} 
            options={[
              { value: '', label: 'SMS and Email' },
              // Add more options as needed
            ]}
          />
        </div>
        <div className="flex mt-6">
          <LabeledDropdown 
            label={'Frequency'} 
            options={[
              { value: '', label: 'Daily' },
              // Add more options as needed
            ]}
          />
          <LabeledDropdown 
            label={'Time'} 
            options={[
              { value: '', label: '18:00' },
              // Add more options as needed
            ]}
          />
          </div>
           </div>
           </div>
           </div>
       </div>
     </div>
     
      )}
       <div className=" bottom-7 right-14 flex space-x-4 fixed">
       <button className="border-2 border-custom-green bg-background-color text-good-morning-text px-6 py-2 rounded-lg">Save as draft</button>
        <button className="bg-custom-green text-white px-6 py-2 rounded-lg">Send to operations</button>
      </div>
    </main>
    </div>
  );
};

export default LeadScreen;
