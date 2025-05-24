import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
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
            <Link to="/shoes" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              About
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_6px_cyan]">
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
