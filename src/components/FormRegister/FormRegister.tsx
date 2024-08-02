'use client'
import { register } from "@/helpers/auth.helper";
import { validateRegisterForm } from "@/helpers/validate";
import { IRegisterError, IRegisterProps } from "@/interfaces/Types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormRegister: React.FC = () => {
  const router = useRouter();
  const initialState = {
    email:"",
    password:"",
    name:"",
    address:"",
    phone:""

  };

const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
const [errors, setError] = useState<IRegisterError>(initialState);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    })
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(dataUser)
      Swal.fire({
        title: "Nuevo Usuario!",
        text: "Se ha registrado con exito.",
        imageUrl: "https://i.pinimg.com/564x/c6/fb/56/c6fb569c0427cb39e27be74fa027011d.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "bienvenido."
      });
      router.push("/login")
    } catch (error: any) {
      throw new Error(error)
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setError(errors)
  },[dataUser])

    return (
<form className="max-w-sm mx-auto p-4" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input 
    type="email" 
    name="email"
    value={dataUser.email}
    onChange={handleChange}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required />
  </div>
  {errors.email && <span>{errors.email}</span>}
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
    <input 
    type="password" 
    name="password" 
    value={dataUser.password}
    onChange={handleChange}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  {errors.password && <span>{errors.password}</span>}
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
    <input 
    type="name" 
    name="name" 
    value={dataUser.name}
    onChange={handleChange}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  {errors.name && <span>{errors.name}</span>}
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
    <input 
    type="address" 
    name="address" 
    value={dataUser.address}
    onChange={handleChange}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  {errors.address && <span>{errors.address}</span>}
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
    <input 
    type="phone" 
    name="phone" 
    value={dataUser.phone}
    onChange={handleChange}
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  {errors.phone && <span>{errors.phone}</span>}
  <div className="flex items-start mb-5">
  </div>
  <button disabled={errors.email ? true : false } type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
</form>

    )
}
export default FormRegister;