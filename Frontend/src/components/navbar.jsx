// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/">Grobots</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white transition">Profile</Link>
          <Link to="/gallery" className="text-gray-300 hover:text-white transition">Gallery</Link>
          <Link to="/signin" className="text-gray-300 hover:text-white transition">Signin</Link>
          <Link to="/competition" className="text-gray-300 hover:text-white transition">Competition</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className="flex flex-col space-y-2 mt-2">
          <li><Link to="/" className="block text-gray-300 hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="block text-gray-300 hover:text-white transition">About</Link></li>
          <li><Link to="/profile" className="block text-gray-300 hover:text-white transition">Profile</Link></li>
          <li><Link to="/gallery" className="block text-gray-300 hover:text-white transition">Gallery</Link></li>
          <li><Link to="/signin" className="block text-gray-300 hover:text-white transition">Signin</Link></li>
          <li><Link to="/competition" className="block text-gray-300 hover:text-white transition">Competition</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
