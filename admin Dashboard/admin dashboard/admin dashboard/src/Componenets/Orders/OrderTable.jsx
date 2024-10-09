import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
	{ id: "ORD001", customer: "Adil Ahmed", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Fatima Ali", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Muzamil bilwani", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Hira Tahir", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Noman Tahir", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Urooj shakeel", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "Ameer Ahmed", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Ayat Shakeel", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const OrdersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className='bg-purple-300 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-purple-600 '
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-900'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-gray-100 text-white placeholder-gray-900 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2
						 focus:ring-black'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-900' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-900'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Order ID
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Customer
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Total
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Date
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
									{order.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
									{order.customer}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
									${order.total.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Delivered"
												? "bg-green-100 text-green-800"
												: order.status === "Processing"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Shipped"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{order.date}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									<button className='text-indigo-400 hover:text-indigo-900 mr-2'>
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default OrdersTable;