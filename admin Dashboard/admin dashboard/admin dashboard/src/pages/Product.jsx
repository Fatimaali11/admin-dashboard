import React from 'react'
import Header from '../Componenets/Header/Header'
import StatCard from '../Componenets/StatCard/StatCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import ProductTable from '../Componenets/Product/ProductTable'
import SalesTrendChart from '../Componenets/SalesTrendChart/SalesTrendChart'
const Product = () => {
  return (
    <div className=' flex-1 overflow-auto relative z-10'>
      <Header tittle='Product' />

      <main className='max-w-7xl mx-auto bg-gray-100 py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard name="Total Sales" icon={Package} value='123,4' color='#6366f1' />
          <StatCard name="New Users" icon={TrendingUp} value='17,34' color='#8B5cf6' />
          <StatCard name="Total Product" icon={AlertTriangle} value='10,34' color='#Ec4899' />
          <StatCard name="Conversion Rate" icon={DollarSign} value='$12,34' color='#10B981' />
        </div>
        <ProductTable />
        <br />
        {/* charts */}
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
        
          <SalesTrendChart />



        </div>
      </main>
    </div>
  )
}
export default Product