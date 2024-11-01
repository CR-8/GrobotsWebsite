// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-6 shadow-lg fixed top-0 w-full z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-6"> {/* Added px-6 for horizontal padding */}
        {/* Brand */}
        <div className="text-white font-bold text-2xl transition-transform duration-300 hover:scale-105">
          <Link to="/">Grobots</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {["Home", "About", "Profile", "Gallery", "Signin", "Competition"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-200 hover:text-white transition-colors duration-200 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:rotate-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-white mt-2 py-2 animate-slideDown">
          <ul className="flex flex-col space-y-2">
            {["Home", "About", "Profile", "Gallery", "Signin", "Competition"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
