import React from 'react';
import { format, parseISO } from 'date-fns';

const activityLogs = [
  {
    'name': 'Luna Steiner',
    'comment': 'Luna sent Christopher an email requesting files',
    'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg7k5TDqDaaOl1gvZJLojqjPyVLdevAICDg&s',
    'datetime': '2024-03-07T08:33:47.294924'
  },
  {
    'name': 'Phoenix Beker',
    'comment': 'Updated status from Operations to Underwriting',
    'img': 'https://cdn.theorg.com/5f6cf081-3715-4c11-863c-036782203c9b_thumb.jpg',
    'datetime': '2024-06-10T08:33:47.294924'
  },
  {
    'name': 'Olivia Rhye',
    'comment': 'Application is ready for Operations',
    'img': 'https://cdn.theorg.com/5f6cf081-3715-4c11-863c-036782203c9b_thumb.jpg',
    'datetime': '2024-06-10T08:33:47.294924'
  },
  {
    'name': 'Phoenix Beker',
    'comment': 'BSS created life insurance referral since loan not fully collateralized,',
    'img': 'https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg',
    'datetime': '2024-06-06T08:33:47.294924'
  },
];

// Helper function to group logs by date
const groupByDate = (logs) => {
  return logs.reduce((acc, log) => {
    const date = log.datetime.split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(log);
    return acc;
  }, {});
};

const groupedLogs = groupByDate(activityLogs);

// Sort the dates in descending order
const sortedDates = Object.keys(groupedLogs).sort((a, b) => new Date(b) - new Date(a));

const ActivityLogs = () => {
  return (
    <div className="flex flex-col relative ml-10">
      <div className="absolute left-12 top-16 bottom-32 w-px bg-custom-green"></div>
      {sortedDates.map((date, dateIndex) => (
        <div key={date} className={`flex mb-6 ${dateIndex !== sortedDates.length - 1 ? 'overflow-hidden' : ''}`}>
          <div className="w-32 text-center pr-4 relative">
            <div className="text-3xl text-custom-green font-semibold z-10 bg-[#F0F5F3]">
              {format(parseISO(date), 'dd')}
            </div>
            <div className="text-lg font-bold text-custom-green z-10 bg-[#F0F5F3]">
              {format(parseISO(date), 'MMM, yyyy')}
            </div>
          </div>
          <div className="flex-grow mb-2">
            {groupedLogs[date].map((log, index) => (
              <div key={index} className="flex items-center py-3 px-2 mb-5 mx-8 bg-white rounded-lg">
                <img
                  src={log.img}
                  alt={`${log.name}'s profile`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className='flex items-center'>
                    <div className="text-custom-green font-semibold text-md">{log.name}</div>
                    <div className='h-1 mx-2 w-1 bg-custom-green rounded-full'></div>
                    <div className="text-custom-green text-xs font-semibold">{format(parseISO(log.datetime), 'hh:mm a')}</div>
                  </div>
                  <div className="text-good-morning-text text-lg font-semibold">{log.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityLogs;
