'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import Logo from "../Logo/Logo";
import { IUserSession } from "@/interfaces/Types";
import Image from "next/image";
import CarritoLogo from "@/assets/CarritoLogo.svg"
import user from "@/assets/user.svg"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const NavBar: React.FC = () => {
  const {userData} = useAuth();
    const router = useRouter();
    
    const handleLogout = () => {
      Swal.fire({
        title:"Cerraste Sesión",
        width:400,
        padding:"3em",
    })
    localStorage.removeItem('userSession')
    router.push("/")
    }

    return (
          <header className="bg-gradient-to-b from-gray-800">
                <nav className="bg-gray-800 p-4 w-full md:h-[100px] flex flex-col md:flex-row justify-center items-center">
                  <div className="flex justify-center mb-4 md:mb-0 sm:flex-1">
                    <Logo />
                  </div>
                  <div className="">
                    <SearchBar />
                  </div>
                  <div className="flex justify-center mt-4 md:mt-0 sm:flex-1">
                    { userData && userData.token ? (
                        <div className="flex flex-row justify-center items-center gap-4">
                        <Link href="/cart">
                          <Image width={40} height={80} src={CarritoLogo} alt="Carrito"/>
                        </Link>
                        <Link href="/dashbord">
                           <Image width={40} height={80} src={user} alt="Usuario"/>
                        </Link>
                          <button className="sm:text-xl bg-gray-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:ml-2"
                          onClick={handleLogout}>
                            Logout
                          </button>
                        </div>
                     ) : (
                        <Link href="/login">
                            <p className="text-white bg-blue-500 hover:bg-blue-800 transition duration-100 ease-in-out py-2 px-4 rounded-md">
                              Sign In
                            </p>
                        </Link>
                     )
                    }   
                </div >
            </nav>
            <div className="mt-auto">
             <MenuHamburger/>  
            </div>
        </header>
    )
}

export default NavBar;