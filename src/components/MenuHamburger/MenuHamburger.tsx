'use client'
import React, { useState } from "react";
import Filter from "../Filter/Filter";

const MenuHamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                <button 
                    onClick={toggleMenu}
                    type="button" 
                    className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-hamburger" 
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isOpen ? "block" : "hidden"} w-full sm:flex sm:items-center sm:justify-between sm:w-auto`} id="navbar-hamburger">
                    <Filter />
                </div>
            </div>
        </nav>
    );
};

export default MenuHamburger;

