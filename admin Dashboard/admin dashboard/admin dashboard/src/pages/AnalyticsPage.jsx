import Header from "../Componenets/Header/Header";

import OverviewCards from "../Componenets/AnalyList/OverviewCards";
import RevenueChart from "../Componenets/AnalyList/RevenueChart";
import ChannelPerformance from "../Componenets/AnalyList/ChannelPerformance";
import ProductPerformance from "../Componenets/AnalyList/ProductPerformance";
import UserRetention from "../Componenets/AnalyList/UserRetention";
import CustomerSegmentation from "../Componenets/AnalyList/CustomerSegmentation";
import AIPoweredInsights from "../Componenets/AnalyList/AIPoweredInsights";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-200'>
				<Header tittle={'Analytics Dashboard'} 
			/>

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;