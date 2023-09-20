import Categories from './Categories'
import Hero from './Hero'
import Products from './Products'
import Stats from './StatCard'

const Home = () => {

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      <Products />
      <Stats />
    </>
  )
}

export default Home;
