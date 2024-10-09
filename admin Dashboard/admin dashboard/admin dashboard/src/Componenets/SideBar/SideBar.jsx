

import { BarChart2, DollarSign, MenuSquareIcon, ShoppingBag, ShoppingCart, TrendingUp, User } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SIDEBAR_TEMS = [
    {
        name: "Overview", icon: BarChart2, color: "#6366f1", href: "/over"
    },
    {
        name: "Product", icon: ShoppingBag, color: "#8B5cF6", href: "/product"
    },
    {
        name: "User", icon: User, color: "#EC4899", href: "/users"
    },
    {
        name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales"
    },
    {
        name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders"
    },
    {
        name: "Analytics", icon: TrendingUp, color: "#3B82f6", href: "/analytics"
    }
];

const SideBar = () => {
    const [sidebar, setSidebar] = useState(true);
    const [showPopup, setShowPopup] = useState(false); 
    const navigate = useNavigate();

    
    const isLoggedIn = !!localStorage.getItem("userEmail");

    const handleRestrictedAccess = () => {
        setShowPopup(true); 
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const redirectToSignup = () => {
        navigate("/"); 
    };

    return (
        <div className={`relative z-10 translate-all duration-300 ease-in-out flex-shrink-0 ${sidebar ? 'w-64' : 'w-20n'}`}>
            <div className='h-full bg-white backdrop-blur-md p-4 text-black flex flex-col border-r'>
                <button
                    onClick={() => setSidebar(!sidebar)}
                    className="p-2 rounded-full hover:bg-purple-300 translate-colors max-w-fit"
                >
                    <MenuSquareIcon size={24} />
                </button>
                <p className={`text-3xl mt-2 font-semibold ml-5 ${sidebar ? 'show' : "hidden"}`}>Dashboard</p>
                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_TEMS.map((item) => (
                        <Link key={item.href} to={isLoggedIn || item.name === "Overview" ? item.href : "#"}>
                            <div
                                onClick={isLoggedIn || item.name === "Overview" ? null : handleRestrictedAccess}
                                className='flex items-center p-4 text-sm font-medium text-black rounded-lg hover:bg-gray-300 translate-colors mb-2'
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                {sidebar && (
                                    <span className='ml-10 whitespace-nowrap'>
                                        {item.name}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}

                
                    {showPopup && (

                        <button
                            onClick={Swal.fire({
                                title: "Opps...",
                                text: "Please sign up to access this page.",

                            })}
                            className=' bg-gray-300 text-gray-700 text-lg rounded-lg hover:bg-gray-400'
                        >

                        </button>



                    )}

                </nav>
            </div>
        </div>
    );
};

export default SideBar;

