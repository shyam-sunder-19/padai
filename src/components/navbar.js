'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // for 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Close the mobile menu if the window size is larger than or equal to md (768px)
        setMobileMenuOpen(false);
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  return (
    <nav className='sticky top-0 z-50 text-lg'>
        <div className="flex items-center justify-between px-4 py-2 bg-blue-500 shadow-md  h-20">
            {/* Logo */}
            <Link href="/">
                <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-4" />
            </Link>

            {/* Hamburger SVG */}
            <div className="md:hidden justify-end">
                <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Searchbar */}
            <div className="border rounded-full border-white absolute left-1/2 transform -translate-x-1/2 flex items-center rounded-full bg-transparent justify-center">
                <button className="mr-2 rounded-full text-blue-500 bg-white hover:bg-blue-600 hover:text-white px-4 py-2 ">
                    search...
                </button>
                <input
                    className="placeholder-white max-w-s py-2 px-4 rounded-full bg-transparent outline-none"
                    placeholder="among 50 universities"
                />
            </div>

            {/* Nav Links */}
            <div className='hidden md:flex  md:space-x-4 ml-auto'>
                <Link href="/universities" className="text-white block md:inline-block mt-2 md:mt-0 md:ml-4">
                    Universities
                </Link>
                <Link href="/courses" className="text-white block md:inline-block mt-2 md:mt-0 md:ml-4">
                    Courses
                </Link>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="text-white hover:text-gray-200 focus:outline-none"
                    >
                        <span>Resources</span>
                        <svg
                        className={`w-4 h-4 inline ml-1 transition-transform duration-200 ${
                            isDropdownOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                        </svg>
                    </button>
                    {/* Dropdown content */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                        <ul className="py-2">
                            {/* Add your additional navigation elements here */}
                            <li>
                            <Link
                                href="/blog"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Blogs
                            </Link>
                            </li>
                            <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                News
                            </a>
                            </li>
                            {/* Add more dropdown items as needed */}
                        </ul>
                        </div>
                    )}
                </div>
                {/* Add more links as needed */}
            </div>
        </div>

        {/* Nav Menu for smaller Screens */}
        {isMobileMenuOpen && (
            <div className="flex flex-col mt-2 bg-blue-500 shadow-md">
                <Link href="/universities" className='text-white'>
                    Universities
                </Link>
                <Link href="/cources" className='text-white'>
                    Cources
                </Link>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="text-white hover:text-gray-200 focus:outline-none"
                    >
                        <span>More</span>
                        <svg
                        className={`w-4 h-4 inline ml-1 transition-transform duration-200 ${
                            isDropdownOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                        </svg>
                    </button>
                    {/* Dropdown content */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                        <ul className="py-2">
                            {/* Add your additional navigation elements here */}
                            <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Blogs
                            </a>
                            </li>
                            <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                News
                            </a>
                            </li>
                            {/* Add more dropdown items as needed */}
                        </ul>
                        </div>
                    )}
                </div>
                {/* Add more links as needed */}
            </div>
        )}   
    </nav>
  );
};

export default Navbar;