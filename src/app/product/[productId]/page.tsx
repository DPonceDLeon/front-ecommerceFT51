import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductsById } from "@/helpers/products.helper";
import React from "react";



const Detail = async ({params}: {params: {productId: string }}) => {    
    const product = await getProductsById(params.productId)
    return (
        <div>
            <ProductDetail {...product} />
        </div>
    )
}

export default Detail;