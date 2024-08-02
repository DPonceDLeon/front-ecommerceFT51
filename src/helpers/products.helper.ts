import IProduct from "@/interfaces/IProduct"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export  async function getProductsDB(): Promise<IProduct[]> {
    try {
        const response = await fetch(`${APIURL}/products`,{
            next: { revalidate: 3600 }
        })
        const products: IProduct[] = await response.json()
        return products
    } catch (error: any) {
        throw new Error(error)
    }
} 

export  async function getProductsById(id: string): Promise<IProduct> {
    try {
        const products: IProduct[] = await getProductsDB();
        const productFiltered = products.find((product) => product.id.toString() === id)
        if (!productFiltered) throw new Error("Product not found")
        return productFiltered;
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getProductsByCategory(categoryId: number): Promise<IProduct[]> {
    try {
        const products: IProduct[] = await getProductsDB()
        const productsByCategory = products.filter((product) => product.categoryId === categoryId);
        if(!productsByCategory.length) throw new Error(`Producto ${categoryId} no fue encontrado`)
            return productsByCategory;
    } catch (error: any) {
        throw new Error(error)
    }
};

