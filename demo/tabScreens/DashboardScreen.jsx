// Dashboard.js
import React, { useState } from "react";
import CommissionDisplay from "../../common/components/DashboardTab/CommisionDisplay";
import DualBarChartComponent from '../../common/components/DualBarChart'   //  "./DualBarChart";
import Calendar from 'react-calendar';
import '../../common/components/Calender.css';
import Bell from  "../../data/Bell, Notifications.png";  // '../../data/Bell, Notifications.png';
import searchIcon from '../../data/Group 536.png'; 
import DashboardTab from "../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../common/components/GoodmorningBar";

import { FaCheck } from "react-icons/fa"; //check box

const Dashboard = () => {

  const [date, setDate] = useState(new Date());

  const tasks = [
    {
      isDone: true,
      taskname: 'Check if Apple paid Jeff'
    },
    {
      isDone: false,
      taskname: 'Check at 5 if we have news about Dan'
    },
    {
      isDone: false,
      taskname: 'Check at 9 if we have news about Kupert'
    },
    {
      isDone: false,
      taskname: 'Check if Cinepolis paid John'
    }
  ];

  const emails = ['stevejobs@apple.com', 'mtinelli@musimundo.com', 'tshelby@volkswagen.com', 'hansolo@sony.com', 'skywalker@motorola.com', 'aseyfried@philips.com'];
  
    
  return (
    <div className="flex">
          <DashboardTab/>
      {/* </div> */}
      <main className="flex-1 bg-background-color py-6 ">
      <GoodMorningBar userName="Manish" />
      <div className="flex ml-7">
      <div>
        <div className="flex bg-white  mt-10 rounded-2xl p-10 space-x-6 py-2">
          <CommissionDisplay amount="$560" description="My commission this Week" />
          <CommissionDisplay amount="450" description="Leads today" />
          <CommissionDisplay amount="4" description="Task to complete" />
        </div>
        <DualBarChartComponent className="mr-4 ml-6" />
        <div className="bg-white mt-13 rounded-2xl space-x-6">
          <div className="flex justify-between w-full mr-9 my-6">
            <div className='mt-3 ml-8 text-green-text font-semibold text-base'>
              Today's tasks
            </div>
            <div className='mt-3 mr-8 h-9 px-5 p-1 rounded-lg text-white bg-custom-green font-semibold'>
              Create new task
            </div>
          </div>
          <div className="flex justify-between">
            <Calendar onChange={setDate} value={date} className="custom-calendar " />
            <div>
              {tasks.map((task, index) => (
                <div key={index} className={`flex justify-between items-center py-2 px-2 rounded-2xl ${task.isDone ? 'bg-custom-green px-4' : 'bg-background-color'} w-96 mr-8 mb-2`}>
                  <div className="flex">
                    <div className="rounded-full text-white h-10 w-10 bg-white p-1">
                      <img src={Bell} className="h-8 w-8" alt="Notification Bell" />
                    </div>
                    <div className={`pl-7 py-2 ${task.isDone ? 'text-white' : 'text-green-text'} font-semibold text-sm`}>
                      {task.taskname}
                    </div>
                  </div>
                  <div className="bg-white rounded-full h-7 w-7 text-white flex items-center justify-center">
                    {
                      task.isDone? <FaCheck className='text-custom-green text-lg cursor-pointer'/> :
                      null
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-9"></div>
      </div>
      <div className="flex-grow ml-4 w-72 max-h-full bg-white mt-10 rounded-2xl py-8">
        <div className="flex items-center bg-background-color rounded-3xl h-10 mx-4 px-2">
          <img src={searchIcon} alt="Search Icon" className="w-8 h-8 mr-2" />
          <input type="text" placeholder="Search Lead" className="bg-background-color focus:outline-none h-10 pl-3" />
        </div>
        <div className="mt-5 h-11 bg-background-color rounded-t-2xl pt-3 pl-7 text-gray-400 border-b border-gray-400">
          Email
        </div>
        <div>
          {emails.map((email, index) => (
            <div key={index} className="flex justify-between items-center py-3 px-2 border-b border-gray-400">
              <div className="pl-7 py-2 text-gray-500 text-sm">{email}</div>
              <div className="bg-custom-green px-4 h-7 rounded-2xl text-white">Next</div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </main>
    </div>
  );
};

export default Dashboard;
