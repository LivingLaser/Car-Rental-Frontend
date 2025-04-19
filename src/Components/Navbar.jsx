import React, { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../assets/car.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="rounded-lg overflow-hidden shadow-lg bg-gray-900 my-1 mx-1">
        <div className="flex justify-between items-center p-4 bg-slate-700 text-white">
        <div className="flex items-center space-x-3">
            <img src={logo} alt="Car Hunt Logo" className="h-12 w-auto rounded-full shadow-md" />
            <Link to="/" className="text-white text-3xl font-extrabold tracking-wide hover:text-blue-400 transition duration-300">
                 <span className="text-blue-500">Car</span> Hunt
            </Link>
        </div>
          <div className="hidden md:flex space-x-10">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            <Link to="/explore" className="hover:text-gray-400">Explore</Link>
            <Link to="/about" className="hover:text-gray-400">About Us</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {isLoggedIn ? (
              <Link to="/profile">
                <FaUserCircle className="text-3xl hover:text-gray-400" />
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 text-white flex px-4 py-2 rounded hover:bg-red-600 backdrop-blur-md animate-bounce">
                  Login
                  <FaArrowRight className="ml-2 my-auto" />
                </button>
              </Link>
            )}
            <div>
              <IoSettingsOutline
                className="text-3xl hover:text-gray-400 animate-spin"
                onClick={toggleDropdown}
              />
              {showDropdown && (
                <div
                  className={`absolute right-0 mt-2 mr-3 w-48 bg-stone-600 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
                    showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                         <Link to="/Admin" onClick={() => setShowDropdown(false)}>Admin Login</Link>
                                     </li>
                                     <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                         <Link to="/Employee" onClick={() => setShowDropdown(false)}>Employee Login</Link>
                                     </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClose className="text-3xl hover:text-gray-400" />
              ) : (
                <MdMenu className="text-3xl hover:text-gray-400" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
            <Link to="/" className="block hover:text-gray-400">Home</Link>
            <Link to="/profile" className="block hover:text-gray-400">Profile</Link>
            <Link to="/explore" className="block hover:text-gray-400">Explore</Link>
            <Link to="/about" className="block hover:text-gray-400">About Us</Link>
            <Link to="/contact" className="block hover:text-gray-400">Contact</Link>
            {isLoggedIn ? (
              <Link to="/profile" className="block hover:text-gray-400">
                <FaUserCircle className="inline-block text-2xl mr-2" />
                Profile
              </Link>
            ) : (
              <Link to="/login" className="block">
                <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-red-600">
                  Login
                  <FaArrowRight className="ml-2 inline-block" />
                </button>
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;