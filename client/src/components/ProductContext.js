import { useEffect, createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            'https://example-data.draftbit.com/products'
          )
          const data = await response.json()
          setProducts(data)
          console.log(data)
        } catch (err) {
          console.log(err)
        }
        fetchProducts()
      }
    }, [])

    return (
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;