

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Websites',
    uv: 5000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mobile App',
    uv: 9000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Marketplace',
    uv: 7000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Social Media',
    uv: 10000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'OutDoor',
    uv: 8000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Home',
    uv: 5000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Mobile',
    uv: 9000,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    
      <div className=' bg-purple-200 bg-opacity-50 w-[300%]    backdrop-blur-md shadow-lg border-purple-900 rounded-xl  p-6 border 
        '><h2 className='text-3xl  font-medium    mb-4 text-gray-900'>Sales Channel</h2>
    <BarChart
      width={900}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 60,
        left:60,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  )
}

App.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
