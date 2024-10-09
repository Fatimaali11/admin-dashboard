import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jul',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'aug',
    uv: 3200,
    pv: 2099,
    amt: 2210,
  },
  {
    name: 'sep',
    uv: 2000,
    pv: 9900,
    amt: 2290,
  },
  {
    name: 'Out',
    uv: 9000,
    pv: 4908,
    amt: 2000,
  },
  {
    name: 'Nov',
    uv: 6000,
    pv: 6000,
    amt: 2181,
  },
  {
    name: 'Dec',
    uv: 2390,
    pv: 2800,
    amt: 2500,
  },
  {
    name: 'jan',
    uv: 3490,
    pv: 7600,
    amt: 2100,
  },
  {
    name: 'feb',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Mar',
    uv: 3490,
    pv: 2500,
    amt: 2100,
  },
  {
    name: 'May',
    uv: 3490,
    pv: 8600,
    amt: 2100,
  },
  {
    name: 'jun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label) => {
  if (label === 'Clothing') {
    return "Page A is about men's clothing";
  }
  if (label === 'Pag') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  if (label === 'Page F') {
    return 'Page F is about baby food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
        <div  className='border-purple-900'>
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro ">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/tooltip-with-customized-content-vgl956';

  render() {
    return (
        <div className=' bg-purple-200   border-purple-900  ml-[0%] bg-opacity-25 w-[200%]  backdrop-blur-md shadow-lg rounded-xl  p-6 z-1 border '>
        <h2 className='text-3xl  font-medium    mb-4 text-gray-900'>Sales Trending</h2>
<div className='h-80 ml-[5px]'>
      <ResponsiveContainer className='ml-0 text-black' width="100%" height="110%">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 1,
            right: 30,
            left: 0,
            bottom: 3,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pv" barSize={30} fill="purple" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
  
    );
  }
}
