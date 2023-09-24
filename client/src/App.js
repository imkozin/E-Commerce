import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
