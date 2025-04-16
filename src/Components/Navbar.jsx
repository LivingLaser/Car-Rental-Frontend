import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


  return (
    <>
        <nav className='rounded-lg overflow-hidden  shadow-lg bg-gray-900 my-1 mx-1'>
            <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
                <div className='flex items-center'>
                    <IoCarSportOutline className='text-3xl' />
                    <span className='ml-2 text-xl font-bold'>Car Hunt</span>
                </div>
                <div className='flex space-x-10'>
                    <Link to="/" className='hover:text-gray-400'>Home</Link>
                    <Link to="/profile" className='hover:text-gray-400'>Profile</Link>
                    <Link to="/explore" className='hover:text-gray-400'>Explore   </Link>
                    <Link to="/about" className='hover:text-gray-400'>About Us</Link>
                    <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
                    
                </div>
                <div className='flex items-center space-x-10'>
                    <FaSearch className='text-xl' />
                    <FaShoppingCart className='text-xl' />
                    {isLoggedIn ? (
                        <Link to="/profile">
                            <FaUserCircle className='text-3xl hover:text-gray-400' />
                        </Link>) : (
                            <Link to="/login">
                                <button className='bg-blue-500 text-white flex px-4 py-2 rounded hover:bg-red-600 backdrop-blur-md animate-bounce'>
                                    Login
                                    <FaArrowRight className='ml-2 my-auto' />
                                </button>
                            </Link>)}

                        <div className=''>
                        <Link to="/">
                            <FaUserCircle className='text-3xl  hover:text-gray-400' onClick={toggleDropdown} />
                        </Link>
                        {showDropdown && (
                            <div
                                className={`absolute right-0 mt-2 mr-3 w-48 bg-stone-600 rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
                                    showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                            >
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Admin Login</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Employee Login </li>
                                    
                                </ul>
                            </div>
                        )}
                        </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar