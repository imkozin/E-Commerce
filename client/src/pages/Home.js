import { useContext } from 'react';
import { ProductContext } from '../components/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
// import Slider from '../components/Slider';
import Announce from '../components/Announce';


const Home = () => {
  const { products } = useContext(ProductContext)
  console.log(products)

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  )

  console.log(filteredProducts)
  return (
    <div>
      <Hero />
      <Announce/>
      <section className="py-16">
        <div className="bg-white container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
