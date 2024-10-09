import React from 'react'
import Header from '../Componenets/Header/Header'
import StatCard from '../Componenets/StatCard/StatCard'
import { UsersIcon, UserCheck, UserPlus, UserX } from 'lucide-react'
import UserTable from '../Componenets/UserTable/UserTable'
import ActiveData from '../Componenets/ActiveData/ActiveData'
import UserGrowthChart from '../Componenets/UserGrowthChart/UserGrowthChart'
import UserDemographicsChart from '../Componenets/UserDemographic/UserDemographic'

const userStats = {
  totalUsers: 1234,
  newUsersToday: 2349,
  activeUsers: 8765,
  churnRate: "2.4%"
}

const productData = [
  { id: 1, name: "Smart Watch", email: "Abc2@gmail.com", price: 59.99, stock: 143, sales: 12000 },
  { id: 2, name: "Iphone", email: "Mobile App", price: 39.99, stock: 89, sales: 19000 },
  { id: 3, name: "CoffeMaker", email: "support", price: 199.99, stock: 56, sales: 1400 },
  { id: 4, name: "NomanKhan", email: "clothing", price: 159.99, stock: 210, sales: 2200 },
  { id: 5, name: "NaseebaTahir", email: "outdoor", price: 79.99, stock: 73, sales: 8900 },
]

const Users = () => {
  return (

    <div className=' flex-1 overflow-auto relative z-10'>
      <Header tittle='Users' />
      <main className='max-w-7xl mx-auto bg-gray-100 py-6 px-4 lg:px-8'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <StatCard name='Total User' icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color='purple'
          />

          <StatCard name='New User Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
          <StatCard name='Active Users' icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color='#F59E0B' />
          <StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />

<UserTable />


 {/* usercharts */}
 </div>
 <div className='grid grid-cols-1  z-1 lg:grid-cols-2 gap-6 m-10 '>

      <UserGrowthChart/>
      <ActiveData/>
 
      <UserDemographicsChart/>
</div>
        </main></div>
  )
}

export default Users
