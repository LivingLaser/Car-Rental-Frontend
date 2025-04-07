import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <nav className='rounded-lg overflow-hidden shadow-lg bg-gray-900 my-1 mx-1'>
            <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
                <div className='flex items-center'>
                    <IoCarSportOutline className='text-3xl' />
                    <span className='ml-2 text-xl font-bold'>Car Hunt</span>
                </div>
                <div className='flex space-x-10'>
                    <a href="/" className='hover:text-gray-400'>Home</a>
                    <a href="/rent" className='hover:text-gray-400'>Rent</a>
                    <a href="/explore" className='hover:text-gray-400'>Explore   </a>
                    <a href="/about" className='hover:text-gray-400'>About Us</a>
                    <a href="/contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <div className='flex items-center space-x-10'>
                    <FaSearch className='text-xl' />
                    <FaShoppingCart className='text-xl' />
                    <Link to="/Login">
                        <button className='bg-blue-500 text-white flex px-4 py-2 rounded hover:bg-red-600 backdrop-blur-md animate-bounce'>
                            Login
                            <FaArrowRight className='ml-2 my-auto' />
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar