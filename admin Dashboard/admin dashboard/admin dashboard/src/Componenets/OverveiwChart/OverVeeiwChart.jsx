
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis  } from 'recharts'

const SaleData = [

    { name: "jul", sales: 500 },

    { name: "Aug", sales: 4000 },

    { name: "Sep", sales: 5600 },

    { name: "Oct", sales: 3900 },

    { name: "Nov", sales: 7500 },

    { name: "Dec", sales: 8900 },

    { name: "jan", sales: 8200 },

    { name: "Feb", sales: 6300 },

    { name: "Mar", sales: 4100 },

    { name: "Apr", sales: 4600 },

    { name: "may", sales: 5400 },

    { name: "jun", sales: 7500 },
]


const OverVeeiwChart = () => {
    return (
        <div className='bg-purple-300 bg-opacity-50 w-[125%]    backdrop:backdrop-blur-md shadow-lg border-purple-500 rounded-xl  p-6 border 
          ' initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
            <h2 className='text-2xl font-medium  mb-4 text-black'>Sale  OverView</h2>
            <div className='h-80'
            initial={{ opacity: 0, y : 20 }}
                    animate={{ opacity: 1, y : 0 }} 
                    transition={{ duration: 1 }}>

                <ResponsiveContainer className='text-black' width={"100%"} height={"100%"}>
                    <LineChart data={SaleData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='black' />
                        <XAxis dataKey={"name"} stroke='black' />
                        <YAxis stroke='black' />
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31,41,55,0.8)",
                            borderColor: "purple"
                        }} 
                        itemStyle={{ color: "E5E7EB" }}
                       />
                            <Line type='monotone' dataKey='sales' stroke='#6366f1' strokeWidth={5}
                                dot={{ fill: '#6366f1', strokeWidth: 2 , r: 6 }}
                                activeDot={{ r: 8, strokeWidth: 2 }} />

                        
                    </LineChart>
      </ResponsiveContainer>
      
            </div>
        </div>
    )
}

export default OverVeeiwChart
