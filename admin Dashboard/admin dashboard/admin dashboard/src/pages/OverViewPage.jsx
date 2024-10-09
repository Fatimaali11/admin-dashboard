import React from 'react'
import Header from '../Componenets/Header/Header'
import { BarChart2, ShoppingBag, User, Zap } from 'lucide-react'
import StatCard from '../Componenets/StatCard/StatCard'

import OverVeeiwChart from '../Componenets/OverveiwChart/OverVeeiwChart'
import CategoryDistribution from '../Componenets/CategoryDistribution/CategoryDistribution'
import SalesChannel from '../Componenets/SalesChannel/SalesChannel'


const OverViewPage = () => {
    return (
        <div className=' flex-1 overflow-auto relative z-10'>
            <Header tittle='OverView' />

            <main className='max-w-7xl mx-auto bg-gray-100 py-6 px-4 lg:px-8'>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y : 20 }}
                    animate={{ opacity: 1, y : 0 }} 
                    transition={{ duration: 1 }}>
                    <StatCard name="Total Sales" icon={Zap} value='$12,34' color='#6366f1' />
                    <StatCard name="New Users" icon={User} value='$12,34' color='#8B5cf6' />
                    <StatCard name="Total Product" icon={ShoppingBag} value='$12,34' color='#Ec4899' />
                    <StatCard name="Conversion Rate" icon={BarChart2} value='$12,34' color='#10B981' />
                </div>

                {/* charts */}
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <OverVeeiwChart/>
            
                     <CategoryDistribution/>
                    <SalesChannel/>
                </div>
            </main>
        </div>
    )
}

export default OverViewPage
