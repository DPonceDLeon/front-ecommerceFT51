'use client'
import { getOrders } from "@/helpers/orders.helper";
import { IOrder } from "@/interfaces/Types";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface OrdersContextProps {
    orders: IOrder[];
    fetchOrders: () => void;
}

export const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider = ({ children }: {children: ReactNode}) => {
   const [orders, setOrders] = useState<IOrder[]>([]); 


   const fetchOrders = async () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      const userSession = userData ? JSON.parse(userData) : null;
      if (userSession?.token) {
        const ordersResponse = await getOrders(userSession.token);
        setOrders(ordersResponse);
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, fetchOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
};