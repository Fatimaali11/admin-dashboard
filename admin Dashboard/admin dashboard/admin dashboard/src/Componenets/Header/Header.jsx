


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ tittle }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setIsLoggedIn(false);
    navigate('/login');  
  };

  const handleLoginSignupClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate('/'); 
    }
  };

  return (
    <header className="bg-purple-600 backdrop-blur-md shadow-lg border-b hover:border-purple-500 cursor-pointer hover:bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">{tittle}</h1>
        <button
          className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-200"
          onClick={handleLoginSignupClick}
        >
          {isLoggedIn ? 'Logout' : 'Signup'}
        </button>
      </div>
    </header>
  );
};

export default Header;


