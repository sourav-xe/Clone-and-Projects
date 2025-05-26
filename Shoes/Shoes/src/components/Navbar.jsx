import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import logo from '../assets/logo.png';

const Navbar = () => {
  // Get the total number of items in the cart using useSelector
  const totalItems = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            NeoKicks
          </span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-10 text-sm md:text-base font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <li>
            <Link to="/" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              Cart
              {/* Display badge if there are items in the cart */}
              {totalItems > 0 && (
              <span className="absolute top-0 right-0 text-xs sm:text-sm bg-red-600 text-white rounded-full px-2 py-1">
                {totalItems}
              </span>


              )}
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              About
            </Link>
          </li>
          <li>
            <Link to="/user" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
