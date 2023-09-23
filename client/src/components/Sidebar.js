import { Link } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Sidebar = () => {
    const {cart, setCart} = useContext(CartContext);
    const {isOpen, handleClose} = useContext(SidebarContext);

    return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className="flex items-center justify-between py-6 border-b">
            <div className="uppercase text-sm font-semibold">
                Shopping Bag (0)
            </div>
            <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                <ArrowForwardIcon className="text-2xl"/>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;