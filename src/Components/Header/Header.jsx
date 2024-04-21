import React, { useEffect, useState } from 'react'
import logo from './logos-removebg-preview.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClosebyLink = () => {
        setOpen(false)
    }
    const [route, setRoute] = useState(false);
    const pathName = "/jobs";

    useEffect(() => {
        const updateRoute = () => {
            setRoute(window.location.pathname === pathName);
        };

        updateRoute();

        // Add event listener to handle route changes
        window.addEventListener('popstate', updateRoute);


        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('popstate', updateRoute);
        };
    }, []);
    return (
        <header className={` ${route ? "mt-[-50px]" : ""}  shadow-lg w-full`}>
            <nav className="bg-white border-gray-200 py-5 shadow-xl dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to={'/'} onClick={handleClosebyLink} className="flex items-center">
                        <img src={logo} className="h-10 mr-3 sm:h-12" alt="Landwind Logo" />
                        <span className="self-center text-sm mdtext-xl font-semibold whitespace-nowrap dark:text-white">EightXindia</span>
                    </Link>
                    <div className="flex items-center lg:order-2">

                        <Link to="/Soon" className="text-black bg-[#EEFF41] hover:bg-[#EEFF41] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-[#EEFF41] focus:outline-none dark:focus:ring-[#EEFF41]">Download</Link>
                        <button onClick={handleOpen} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${open ? '' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link onClick={handleClosebyLink} to="/" className="block py-2 pl-3 pr-4  bg-[#EEFF41] rounded lg:bg-transparent lg:text-[#EEFF41] lg:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link onClick={handleClosebyLink} to="/Company" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EEFF41] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
                            </li>
                            <li>
                                <Link onClick={handleClosebyLink} to="/jobs" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EEFF41] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Jobs</Link>
                            </li>
                            <li>
                                <Link onClick={handleClosebyLink} to="/news" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EEFF41] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">News</Link>
                            </li>
                            <li>
                                <Link onClick={handleClosebyLink} to="/Testinomial" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EEFF41] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Testinomials</Link>
                            </li>
                            <li>
                                <Link onClick={handleClosebyLink} to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EEFF41] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header