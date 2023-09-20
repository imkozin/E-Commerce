import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.length > 0 ? (
            products.map((product) => {
              const { id, title, price, category, image } = product
              return (
                <Link
                  to={`products/${id}`}
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold">$ {price}</p>
                  </div>
                </Link>
              )
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductCards
