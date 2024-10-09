import React from 'react'
import Header from "../Componenets/Header/Header";
import ConnectedAccounts from "../Componenets/settings/ConnectedAccounts";
import DangerZone from "../Componenets/settings/DangerZone";
import Notifications from "../Componenets/settings/Notifications";
import Profile from "../Componenets/settings/Profile";
import Security from "../Componenets/settings/Security";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-100'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				  <Profile />
				<Notifications />
				<Security /> 
				 <ConnectedAccounts /> 
				 <DangerZone /> 
			</main>
		</div>
	);
};
export default SettingsPage;