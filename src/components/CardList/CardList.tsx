import React from "react";
import { getProductsDB } from "@/helpers/products.helper";
import Link from "next/link";
import CardProducts from "../CardProducts/CardProducts";

const CardList = async () => {
    const products = await getProductsDB();
    return (
      <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products && products.map((product) => {
        return (
        <Link href={`/product/${product.id}`} key={product.id}>
          <CardProducts key={product.id} {...product} />
        </Link>
        )
        })}
        </div>
      </div>

    )
}

export default CardList;