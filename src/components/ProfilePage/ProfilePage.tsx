'use client'
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProfilePage = () => {
    const router= useRouter();
    const {userData} = useAuth();
    

    useEffect(() => {
        if(userData?.user.name){
          !userData?.user.name === undefined && router.push("/login")
        }
    }, [userData?.user])   

    return (
      <div className="flex flex-col items-center border-b py-4">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full sm:pl-4 p-2">
    <Link className="sm:text-xl bg-gray-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 sm:mb-0 sm:mr-2" 
    href="/dashbord">Mi Perfil
    </Link>
    <Link className="sm:text-xl bg-gray-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:ml-2" 
    href="/dashbord/orders">Ordenes
    </Link>
  </div>
  
  <div className="py-8">
    <h1 className="font-semibold text-lg text-gray-900">DATOS DEL USUARIO: {userData?.user.name}</h1>
    <h2 className="font-semibold text-lg text-blue-800">Nombre: 
      <p className="text-blue-500">{userData?.user.name}</p>
    </h2>
    <h3 className="font-semibold text-lg text-blue-800">Correo Electronico: 
      <p className="text-blue-500">{userData?.user.email}</p>
    </h3>
    <h3 className="font-semibold text-lg text-blue-800">Número de Telefono: 
      <p className="text-blue-500">{userData?.user.phone}</p>
    </h3>
    <h3 className="font-semibold text-lg text-blue-800">Direccion de envio: 
      <p className="text-blue-500">{userData?.user.address}</p>
    </h3> 
  </div>
</div>
  


    )
}

export default ProfilePage;