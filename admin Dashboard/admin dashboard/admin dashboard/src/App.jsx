
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Product from "./pages/Product";
import OverViewPage from "./pages/OverViewPage";
import SideBar from "./Componenets/SideBar/SideBar";
import User from './pages/Users';
import Sales from './pages/SalesPage';
import OrdersPage from "./pages/OrderPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Login from './Componenets/Login/Login';
import Signup from "./Componenets/SignUp/Signup";

function App() {
  const location = useLocation();
  
  const hideSideBar = location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      <div className="flex h-screen bg-gray-200 text-black overflow-hidden">
  
        {!hideSideBar && <SideBar />}


        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Signup/>} />
          <Route path="/over" element={  <OverViewPage />}/>
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<User />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </div>
    
    </>
  );
}

export default App;



