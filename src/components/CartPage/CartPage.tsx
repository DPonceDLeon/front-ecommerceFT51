'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import IProduct from "@/interfaces/IProduct";
import { createOrder } from "@/helpers/orders.helper";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";

const CarritoPage = () => {
    const [cart, setCart] = useState<IProduct[]>([])
    const [totalCart, setTotalCart] = useState<number>(0)
    const router= useRouter();
    const {userData} = useAuth();

    useEffect(() => {
      if(typeof window !== "undefined" && window.localStorage) {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if(storedCart) {
          let totalCart = 0;
          storedCart.map((item: IProduct) => {
            totalCart = totalCart + item.price
          })
          setTotalCart(totalCart)
          setCart(storedCart)
        }
      }
    }, [])

    useEffect(() => {
      if(userData?.user.name) {
        userData?.user.name === undefined && router.push("/login")
      }
  }, [userData?.user])

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cart?.filter((product) => product.id !== productId);
    setCart(updatedCart)
    const newTotal = updatedCart.reduce((acc, product) => acc + product.price, 0)
    setTotalCart(newTotal)
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  const handleClick = async () => {
    const idProducts = new Set(cart?.map((product) => product.id))
    await createOrder(Array.from(idProducts), userData?.token!);
    Swal.fire({
      title: "La compra se ha realizado con éxito",
      width: 400,
      padding: "3em",
      imageUrl: 'https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif',
      imageAlt: 'Camión de entrega',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar'
  });




  setCart([])
  setTotalCart(0)
  localStorage.setItem("cart", "[]");
  }

    return (
      <div className="p-4 sm:p-8 bg-white shadow-lg rounded-lg">
      <div className="font-semibold text-2xl sm:text-3xl text-gray-900 text-center pb-6">
        <h1>Carrito de Compras</h1>
      </div>
      <div className="text-center pt-4">
        <h2 className="text-left font-semibold text-xl sm:text-2xl text-gray-800 pb-4 p-3">Productos</h2>
      </div>
      {cart && cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="flex flex-col sm:flex-row items-center sm:items-start border-b py-4">
            <img className="w-full sm:w-[150px] sm:h-auto object-cover" src={product.image} alt={product.name} />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full sm:pl-4">
              <p className="text-lg sm:text-xl font-medium text-gray-900">{product.name}</p>
              <button
              onClick={() => handleRemoveProduct(product.id)} 
              className="sm:text-xl bg-red-500 text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Cancelar
              </button>
              <p className="text-lg sm:text-xl font-semibold text-blue-600">Precio: ${product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-[25px] text-gray-500">No tienes productos en tu carrito</p>
        </div>
      )}
      <div className="font-semibold text-2xl sm:text-3xl text-green-500 text-center mt-8">
        <p>Total: ${totalCart}</p>
      <button 
       onClick={handleClick}
       type="submit"
       disabled={cart.length === 0}
       className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}`}>
        Comprar
        </button>
      </div>
    </div>
    
    )
}

export default CarritoPage;