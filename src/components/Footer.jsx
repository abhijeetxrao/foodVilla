import React from 'react';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img className="h-10 w-10 rounded-lg brightness-110" src={logo} alt="Logo" />
            <span className="font-black text-2xl tracking-tighter text-orange-500">
              FOODIE
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Helping you find the best meals from your favorite local restaurants, 
            delivered straight to your door with love.
          </p>
        </div>

       
        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Team</Link></li>
            <li><Link to="/instamart" className="hover:text-orange-500 transition-colors">Instamart</Link></li>
            <li><button className="hover:text-orange-500 transition-colors cursor-pointer">Careers</button></li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Help & Support</Link></li>
            <li><button className="hover:text-orange-500 transition-colors cursor-pointer">Partner with us</button></li>
            <li><button className="hover:text-orange-500 transition-colors cursor-pointer">Ride with us</button></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold text-lg mb-6">Available in</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>New Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
          </ul>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">
          © {currentYear} Foodie Technologies Pvt. Ltd. All rights reserved.
        </p>
        
        <div className="flex gap-6">
     
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fa-brands fa-x-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;