'use client'
import { useOrders } from "@/context/OrdersContext";
import Image from "next/image";
import React from "react";
import Camion from "@/assets/Yendo.gif"

const CamionGif = () => {
    const { orders } = useOrders();

    if (!orders || orders.length === 0) {
        return null;
    }

    return (
        <div>
        <div className="fixed bottom-4 right-4 z-50 hidden md:block">
          <Image
            src={Camion}
            width={230}
            height={230}
            alt="Camioncito"
            className="rounded-full opacity-85"
          />
        </div>
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <Image
            src={Camion}
            width={130}
            height={130}
            alt="Camioncito"
            className="rounded-full opacity-80"
          />
        </div>
      </div>
    )
}

export default CamionGif;