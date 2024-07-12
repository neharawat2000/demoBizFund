import React from 'react';
import { AreaChart, Area,  XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function LineGraph(){
    const data = [
      {
        name: '8/2/19',
        uv: 20000
      },
      {
        name: '8/21/15',
        uv: 44000
      },
      {
        name: '1/31/14',
        uv: 30000
      },
      {
        name: '1/28/17',
        uv: 64000
      },
      {
        name: '1/15/12',
        uv: 48000
      },
      {
        name: '4/21/12',
        uv: 30000
      },
      {
        name: '8/30/14',
        uv: 50000
      },
      {
        name: '3/4/16',
        uv: 45000
      },
      {
        name: '7/11/19',
        uv: 4300
      },
      {
        name: '12/10/13',
        uv: 38000
      },
      {
        name: '7/18/17',
        uv: 29580
      },
      {
        name: '5/19/12',
        uv: 20566
      }
    ];
    
    return (
        <AreaChart
          width={1030}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 30,
            bottom: 40,
          }}
        >
        <defs>
              <linearGradient id="color" rotate={"180deg"} x1="0" y1="0" x2="0" y2="1">
                <stop offset="95.55%" stopColor="rgba(81, 159, 83, 0) 95.55%)" />
                <stop offset="95.54%" stopColor="rgba(24, 175, 113, 0)" />
                <stop offset="0%" stopColor="#18AF71" />
              </linearGradient>
        </defs>
          <CartesianGrid vertical={false}/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tickLine={false} tickMargin={10}/>
          <Tooltip/> 
          <Legend /> 
          <Area type="monotone" dataKey="uv" stroke="#00A762" strokeWidth="2px" fill="url(#color)"/>
        </AreaChart>
    );
}