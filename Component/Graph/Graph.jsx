import React from 'react';
import { BarChart, Bar,  XAxis,YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'Mon',
    Total: 4000,
    Leads: 2400,
    Clients: 2400,
  },
  {
    name: 'Tues',
    Total: 3000,
    Leads: 1398,
    Clients: 2210,
  },
  {
    name: 'Wed',
    Total: 2000,
    Leads: 9800,
    Clients: 2290,
  },
  {
    name: 'Thurs',
    Total: 2780,
    Leads: 3908,
    Clients: 2000,
  },
  {
    name: 'Fri',
    Total: 1890,
    Leads: 4800,
    Clients: 2181,
  },
  {
    name: 'Sat',
    Total: 2390,
    Leads: 3800,
    Clients: 2500,
  },
  {
    name: 'Sun',
    Total: 3490,
    Leads: 4300,
    Clients: 2100,
  },
];
const FundingGraph= () => {
    return (
        <BarChart
          width={442}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid  horizontal={true} vertical={false}/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Clients" stackId="a" fill="#00A762" radius={[5, 5, 0, 0]} barSize={20}/>
        </BarChart>
    );
}

const SubmissionGraph = ()=>{
    return (
      <BarChart
        width={442}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10}/>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="Clients" stackId="a" fill="#00A762" radius={[5, 5, 0, 0]} barSize={20} label={{ position: 'top' }}/>
      </BarChart>
    );
}

export {FundingGraph, SubmissionGraph} ;