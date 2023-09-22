import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from './SidebarContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

const Header = () => {
    const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <header className='bg-pink-200'>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <ShoppingBagIcon className='text-2xl'/>
        </div>
    </header>
  )
}

export default Header
