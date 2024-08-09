import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
 

    return (
        <>


            <nav className="bg-[#2C3E50] border-gray-200 dark:bg-gray-900 h-28  fixed top-0 w-full z-50">
                <div className="w-[87%] flex flex-wrap items-center justify-between mx-auto p-4  h-28 ">
                    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-[2rem] font-bold text-white uppercase  whitespace-nowrap dark:text-white">Start Framework
                        </span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
                        <ul className=" flex flex-col items-center  md:p-0     md:flex-row md:space-x-8 rtl:space-x-reverse ">
                            <li>
                                <NavLink to="about" className="block  font-bold text-base text-white uppercase">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="portfolio" className="block  font-bold text-base  text-white uppercase">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" className="block  font-bold text-base  text-white uppercase">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



          
        </>
    )
}
