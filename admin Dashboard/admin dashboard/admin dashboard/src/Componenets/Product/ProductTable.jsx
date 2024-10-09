
import React from 'react'
import { Edit, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'


const productData = [
    { id: 1, name: "Smart Watch", category: "Electronic", price: 59.99, stock: 143, sales: 12000 },
    { id: 2, name: "Mobile", category: "Mobile App", price: 39.99, stock: 89, sales: 19000 },
    { id: 3, name: "Bat & Boll", category: "support", price: 199.99, stock: 56, sales: 1400 },
    { id: 4, name: "Clothing", category: "clothing", price: 159.99, stock: 210, sales: 2200 },
    { id: 5, name: "Outdoors", category: "outdoor", price: 79.99, stock: 73, sales: 8900 },
]

const ProductTable = () => {
    const [searchTram, setSearchTream] = useState('')
    const [fillProduct, setFillproduct] = useState(productData)

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTream(term);
        const filtered = productData.filter(product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFillproduct(filtered)
    }

    return (

        <div className='bg-purple-200   border-purple-500 backdrop-blur-md px-10 py-5  shadow-lg rounded-xl border  '>

            <div className='flex  justify-between items-center mb-6'
            >
                <h2 className='text-3xl font-semibold text-black'>Product List</h2>
                <div className='relative'>
                    <input type="text" placeholder='Search product' className='bg-white text-black placeholder-gray-900 rounded-lg pl-10 pr-4 py-2 
        focus:outline-none
        focus:ring-2 focus:ring-black' onChange={handleSearch} value={searchTram} />
                    <Search className='absolute  left-3 top-2.5  text-black ' size={18} />
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className='min-w-full  divide-y divide-black'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font.medium text-black uppercase tracking-wide'>
                                Name
                            </th>

                            <th className='px-6 py-3 text-left text-xs font.medium text-black uppercase tracking-wide'>
                                category
                            </th>

                            <th className='px-6 py-3 text-left text-xs font.medium text-black uppercase tracking-wide'>
                                Price
                            </th>

                            <th className='px-6 py-3 text-left text-xs font.medium text-black uppercase tracking-wide'>
                                stock
                            </th>

                            <th className='px-6 py-3 text-left text-xs font.medium text-gray-900 uppercase tracking-wide'>
                                Sales
                            </th>

                            <th className='px-6 py-3 text-left text-xs font.medium text-gray-900 uppercase tracking-wide'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y  divide-gray-900'>
                        {fillProduct.map(product => (
                            <tr key={product.id}>

                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-black flex gap-2 items-center'>
                                    <img src='https://images.unsplash.com/photo-1727299028078-48d770001b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3w
     xMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D' className='size-10 w-10  rounded-full' />{product.name}</td>

                                <td className='px-6 py-4 whitespace-nowrap text-sm text-black'>{product.category}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-black'>${product.price.toFixed(2)}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-black'>{product.stock}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-black'>{product.sales}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-black'>
                                    <button className='text-indigo-600 hover:text-indigo-300 mr-2'>
                                        <Edit size={19} />
                                    </button>
                                    <button className='text-red-600  hover:text-red-300'>
                                        <Trash2 size={19} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </div>

    )
}

export default ProductTable

