'use client'
import { getOrders } from "@/helpers/orders.helper";
import { IOrder } from "@/interfaces/Types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AccordionOrder from "../AccordationOrders/AccordationOrders";
import { useAuth } from "@/context/AuthContext";

const OrdersPage = () => {
    const {userData} = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const router = useRouter();

    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!);
      setOrders(ordersResponse)
    }

    useEffect(() => {
        if(userData?.user.name) {
            userData?.user.name === undefined ? router.push("/login") :  fetchData()
        }
    }, [userData?.user])

    return (
      <div>
        <div className="flex flex-col items-center border-b py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full sm:pl-4 p-2">
            <Link className="sm:text-xl bg-gray-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 sm:mb-0 sm:mr-2" 
            href="/dashbord">Mi Perfil
            </Link>
            <Link className="sm:text-xl bg-gray-500 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:ml-2" 
            href="/dashbord/orders">Ordenes
            </Link>
        </div>
        </div>
            {
             orders && orders.length > 0 ? (
                orders?.map((order) => {
                    return (
                        <AccordionOrder key={order.id} order={order} />
                    )
                })
             ) : (
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
                    <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-4">
                        No tienes Ordenes Despachadas todavía
                    </p>
                    <Link href="/">
                        <p className="text-lg sm:text-xl text-blue-500 hover:text-blue-700 font-medium underline">
                         Ir a Comprar Productos
                        </p>
                    </Link>
                </div>
             )
            }
            {
             
            }
        </div>
    )
}

export default OrdersPage;