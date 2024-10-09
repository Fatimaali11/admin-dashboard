
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: "Electronics ", value: 2000 },
    { name: "Clothing ", value: 3200 },
    { name: "Home ", value: 3500 },
    { name: "Books ", value: 7100 },
     { name: "Sport & Outdoors", value: 1900 },
 ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      
        <div className=' bg-purple-200  ml-[21%]  border-purple-500   backdrop-blur-md shadow-lg rounded-xl  p-6 z-1 '>
                        <h2 className='text-3xl  font-medium    mb-4 text-gray-900'>Category Distrubution</h2>
      <div className='h-80 border-purple-400 '>

      <ResponsiveContainer className="z-1" width="100%" height="100%">
        <PieChart width={900} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >


            
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        

          </Pie>
        </PieChart>
      </ResponsiveContainer>
  
 </div>
 
  </div>
    
    );
  }
}
