import React, { useContext } from 'react';
import logo from '../assets/logo.webp';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../utils/CartContext'; 

function Navbar() {
  const { items } = useContext(CartContext);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "InstaMart", path: "/instamart" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <img className="h-14 w-14 rounded-xl object-cover shadow-md" src={logo} alt="Logo" />
          <span className="font-black text-2xl tracking-tighter text-orange-500 hidden sm:block">
            FOODIE
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 list-none font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative pb-1 transition-colors hover:text-orange-500 
                    ${location.pathname === link.path ? "text-orange-500 font-bold" : ""}`}
                >
                  {link.name}
                  {/* Active Indicator Underline */}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full animate-in fade-in zoom-in duration-300"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart Section */}
          <Link to="/cart" className="relative group p-2 bg-orange-50 rounded-full hover:bg-orange-100 transition-colors">
            {/* Cart Icon (Simple SVG) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-orange-600 group-hover:scale-110 transition-transform" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            {/* Dynamic Cart Badge */}
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;