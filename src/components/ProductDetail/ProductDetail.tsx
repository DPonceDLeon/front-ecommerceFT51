'use client'
import IProduct from "@/interfaces/IProduct";
import { IUserSession } from "@/interfaces/Types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({name, image, description, price, stock, id}) => {
    const router = useRouter();
    const [userSession, setUserSession] = useState<IUserSession>()

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("userSession")
            setUserSession(JSON.parse(userData!))
        }
    }, [])
    const handleClick = () => {
        if(userSession && userSession.token){
            const cart = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart.some((product: IProduct) => {
                if(product.id === id) return true
                return false
            })
            if(productExist){
                Swal.fire({
                    title:"Este producto existe en tu carrito",
                    width:400,
                    padding:"3em",
                })
                router.push("/cart")
            } else {
                cart.push({
                    name,
                    description,
                    image,
                    price,
                    stock,
                    id
                })
                localStorage.setItem('cart', JSON.stringify(cart))
                Swal.fire({
                    title:"Producto Agregado al carrito",
                    width:400,
                    padding:"3em",
                })
            }}else {
                Swal.fire({
                    title:"Debes estar Logueado para agregar productos Al carrito",
                    width:400,
                    padding:"3em",
                })
            }
    }
    return (
     <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-8 bg-white shadow-lg rounded-lg">
        <div className="w-full sm:w-1/2">
         <img className="w-full sm:w-[450px] sm:pl-[60px] object-cover" src={image} alt={name} />
        </div>
      <div className="w-full sm:w-1/2 sm:pl-8">
        <h2 className="font-semibold text-2xl text-center sm:text-left sm:text-3xl">{name}</h2>
        <h3 className="text-lg sm:text-xl pt-4 pb-6 text-gray-700">{description}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <p className="font-semibold text-blue-600 text-lg sm:text-2xl">Precio: {price}</p>
        <p className="text-lg sm:text-xl font-semibold text-green-400 pt-4 sm:pt-0">Stock: {stock}</p>
      </div>
      <button 
        className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}>
            Agregar al carrito
        </button>
      </div>
    </div>
    )
}

export default ProductDetail;