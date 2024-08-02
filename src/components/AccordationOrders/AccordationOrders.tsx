'use client'
import React, { useState } from "react";
import { IOrder } from "@/interfaces/Types";

interface AccordionOrderProps {
  order: IOrder;
}

const AccordionOrder: React.FC<AccordionOrderProps> = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full py-5 px-4 text-left bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 flex justify-between items-center"
      >
        <span>{new Date(order.date).toDateString()} - {order.status.toLocaleUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
          <p><strong>Status:</strong> {order.status.toLocaleUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionOrder;


