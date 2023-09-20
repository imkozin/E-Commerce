import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import Products from './components/Products'

function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
