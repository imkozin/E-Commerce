import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from './SidebarContext';
import { CartContext } from './CartContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);
  return (
    <header className={``}>
        <div className='container mx-auto flex items-center justify-between h-full'>
            <Link to={'/'}>
                <div>
                    <img className='w-[40px]' src={'/logo.jpeg'} alt="logo" />
                </div>
            </Link>
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
                <ShoppingBagIcon className='text-2xl'/>
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                    {itemAmount}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
