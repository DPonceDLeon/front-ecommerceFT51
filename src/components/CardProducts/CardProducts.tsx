import IProduct from "@/interfaces/IProduct";
import React from "react";

const CardProducts: React.FC<IProduct> = ({id, name, price, description, image, stock, categoryId}) => {
    return (
    <div className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
      <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
         <img src={image} alt={name} className="w-full h-full object-center "/>
      </div>
      <div className="mt-4 flex justify-between">
       <div>
        <h3 className="text-sm text-gray-700">
         {name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">stock: {stock}</p>
         </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
         </div>
    </div>
    );
};

export default CardProducts;
