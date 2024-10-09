import React from 'react'
import { useState } from 'react' 
import { Edit, Search, Trash2 } from 'lucide-react'

const UserData = [
    { id: 1, name: "Adil Ahmed", email: 'AdilAhmed@gmail.com', role: "customer", status: "Active" },
    { id: 2, name: "Muzamil Bilwani", email: 'Muzamilbilwanie@gmail.com', role: "Admin", status: "Active" },
    { id: 3, name: "Noman Khan", email: 'NomanKhan@gmail.com', role: "customer", status: "InActive" },
    { id: 4, name: "sawera Tahir", email: 'saweraTahir@gmail.com', role: "Admin", status: "Active" },
    { id: 5, name: "fatima Ali", email: 'FatimaAli@gmail.com', role: "customer", status: "Active" },
]


const UserTable = () => {
    const [searchTram, setSearchTream] = useState('')
    const [fillUser, setFillUser] = useState(UserData)

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTream(term);
        const filtered = UserData.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term));
        setFillUser(filtered);
    }
    return (
        <div className='bg-purple-200  w-[200%]  border-purple-500 backdrop-blur-md p-6  shadow-lg rounded-xl border'>
            <div className='flex  justify-between items-center mb-6'>
                <h2 className='text-2xl  flex font-semibold  text-black'> Users List</h2>
                <div className='relative'>
                    <input type="text"
                        placeholder='Search product'
                        className='bg-white
                      text-black placeholder-gray-900 rounded-lg pl-10 pr-4 py-2  focus:outline-none 
         focus:ring-2 focus:ring-black' onChange={handleSearch} value={searchTram} />

                    <Search className='absolute  left-3 top-2.5  text-black ' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full  divide-y divide-black'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'>
                                Name
                            </th>

                            <th className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'>
                                Email
                            </th>

                            <th className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'>
                                Role
                            </th>

                            <th className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'>
                                Status
                            </th>

                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
                                Action
                            </th>

                        </tr>
                    </thead>


                    <tbody className='divide-y  divide-gray-900'>
                        {fillUser.map((user) => (
                            <tr key={user.id}>
                                <td className='px-6 py-4 whitespace-nowrap text-black'>
                                    <div className='flex items-center'>
                                        <div className='flex-shrink-0 h-10 w-10'>
                                            <div className='h-10 w-10 rounded-full   bbg-gradient-to-r bg-blue-900 text-blue-50 flex items-center
                                     justify-center  font-semibold'>{user.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className='ml-4'>
                                            <div className=' text-sm font-medium  text-gray-900'> {user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-black'>
                                    <div className='text-sm text-gray-900'> {user.email}</div>
                                </td>
                           
                                
                                <td className='px-6 py-4 whitespace-nowrap '> 
                    
                                    <span className='px-2 bg-blue-500 p-1 inline-flex text-xs leading-5 font-semibold text-white rounded-full'>{user.role}</span>
                                </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                        <span className={`px-2 inline-flex text-xs leading-5 p-1 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-900 text-gray-100'
                         : 'bg-red-600' }`}>{user.status}</span>
                         </td>
                         <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                          <button className='text-indigo-600 hover:text-indigo-700 mr-2'>
                                        Edit
                                    </button>
                                    <button className='text-red-600  hover:text-red-700'>
                                        Delete
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

export default UserTable 
