import { SidebarContext } from "./SidebarContext";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {cart, clearCart, itemAmount, total} = useContext(CartContext);
    const { isOpen, handleClose } = useContext(SidebarContext)

    return (
      <div
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag ({itemAmount})
          </div>
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <ArrowForwardIcon className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[420px] lg:h-[480px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
            <div className="flex w-full justify-between items-center">
                <div className="uppercase font-semibold">
                    <span className="mr-2">Total</span>$ {parseFloat(total).toFixed(2)}
                </div>
                <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                    <DeleteIcon />
                </div>
            </div>
            <Link to={'/'} className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">
            View cart
            </Link>
            <Link className="bg-primary flex p-4 justify-center items-center text-primary w-full font-medium ">
            Checkout
            </Link>
        </div>
      </div>
    )
}

export default Sidebar;