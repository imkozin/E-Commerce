import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from './SidebarContext'
import { CartContext } from './CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Search } from '@mui/icons-material'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-orange-200'
      } h-[60px] fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={'/'}>
          <div>
            <img className="w-[40px]" src={'/Logo.png'} alt="logo" />
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-start">
          <Link
            to={'/register'}
            className="cursor-pointer ml-[25px] hover:underline"
          >
            Register
          </Link>
          <Link
            to={'/login'}
            className="cursor-pointer ml-[25px] hover:underline"
          >
            Login
          </Link>   
          <div className="searchInput flex border-[2px] border-solid border-orange-200 rounded-md items-center ml-[10px] p-[5px] focus-within:border-gray-500 transition-all">
            <input className="input outline-none" type="text" />
            <Search className="" />
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative text-2xl"
        >
          <Badge badgeContent={itemAmount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </header>
  )
}

export default Header
