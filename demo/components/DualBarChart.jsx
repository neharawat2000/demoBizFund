import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Sample data for the bar chart
const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Sep', uv: 4490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 2490, pv: 4800, amt: 2100 },
  { name: 'Nov', uv: 5090, pv: 4300, amt: 2900 },
  { name: 'Dec', uv: 4490, pv: 4300, amt: 2100 },
];

const DualBarChartComponent = () => {

  const [selectedOption, setSelectedOption] = useState('Day');

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("click");
  };

  return (
    <div className='bg-white mt-5 rounded-2xl'>
        <div className='flex justify-between'>
            <div className='mt-3 ml-8 text-green-text font-semibold'>
                Your Progress
            </div>
            <div className='flex mt-3 mr-8 rounded-lg bg-[#F0F5F3] text-green-text font-semibold px-2 py-1.5'>
              <div
                className={`px-2.5 py-0.5 rounded-lg cursor-pointer ${selectedOption === 'Day' ? 'bg-[#00A762] text-white' : 'bg-[transparent]'}`}
                onClick={() => handleSelect('Day')}
              >
                Day
              </div>
              <div
                className={`px-2.5 py-0.5 rounded-lg cursor-pointer ${selectedOption === 'Week' ? 'bg-[#00A762] text-white' : 'bg-[transparent]'}`}
                onClick={() => handleSelect('Week')}
              >
                Week
              </div>
              <div
                className={`px-2.5 py-0.5 rounded-lg cursor-pointer ${selectedOption === 'Month' ? 'bg-[#00A762] text-white' : 'bg-[transparent]'}`}
                onClick={() => handleSelect('Month')}
              >
                Month
              </div>
              <div
                className={`px-2.5 py-0.5 rounded-lg cursor-pointer ${selectedOption === 'Year' ? 'bg-[#00A762] text-white' : 'bg-[transparent]'}`}
                onClick={() => handleSelect('Year')}
              >
                Year
              </div>
            </div>
        </div>
    <ResponsiveContainer width="97%" height={300} bottom={20}>
      <BarChart
        data={data}
        margin={{
          top: 50, right: 10, left: 10, bottom: 10,
        }}
      >
        <XAxis  axisLine={false} tickLine={false} dataKey="name" />
        <CartesianGrid  horizontal={true} vertical={false} color= '#C0C0C0' height={0.3}  />
        <Bar barSize={30} dataKey="pv" fill= '#004629' stackId="a" radius={[2,2, 0, 0]} />
        <Bar barSize={30} dataKey="uv" fill="#00A762" stackId="a" radius={[7, 7, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default DualBarChartComponent;
