'use client'
import { useAuth } from "@/context/AuthContext";
import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginError, ILoginProps } from "@/interfaces/Types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormLogin: React.FC = () => {
  const router = useRouter();
  const initialState ={
    email:"",
    password:"",
  }
  const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
  const {setUserData} = useAuth();
  const [errors, setErrors] = useState<ILoginError>(initialState);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } =e.target;
    setDataUser({
      ...dataUser,
      [name]:value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(dataUser)
      const {token, user} = response;
      setUserData({token, user})
      Swal.fire({
        title: "Hola!",
        text: "Se ha Logueado con exito.",
        icon: "success",
      })
      router.push("/")
    } catch (error: any) {
       if (error.response && error.response.status === 400) {
        Swal.fire ({
          title: "Error",
          text: "Ocurrió un error. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
        });
       } else {
        Swal.fire ({
          title: "Error",
          text: "Correo Electronico o Contraseña son incorrectos",
          icon: "error",
        });
       } 
    }
  };

  useEffect( () => {
    const errors = validateLoginForm(dataUser);
    setErrors(errors)
  }, [dataUser])


    return (
<form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input 
    id="email-address"
    type="email" 
    name="email" 
    value={dataUser.email}
    onChange={handleChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="name@flowbite.com" 
    required />
  </div>
  {errors.email && <span>{errors.email}</span>}
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input 
    id="password"
    type="password" 
    name="password"
    value={dataUser.password}
    onChange={handleChange} 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  {errors.password && <span>{errors.password}</span>}
  <div className="flex items-start mb-5">
    <h3 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">¿No tienes cuenta? <Link href="/register" className="text-blue-500 hover:text-blue-800 hover:underline transition duration-100 ease-in-out" >Registrate</Link></h3>
  </div>
  <button disabled={errors.email ? true : false } type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Iniciar Sesión
  </button>
</form>

    )
}

export default FormLogin;