import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartItem = ({item}) => {
    const {id, title, image, price, amount} = item;
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

    return (
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
        <div className="w-full min-h-[100px] flex items-center gap-x-4">
          <Link to={`/product/${id}`}>
            <img className="max-w-[65px]" src={image} alt={title} />
          </Link>
          <div className="w-full flex flex-col">
            <div className="flex justify-between mb-2">
              <Link
                to={`/product/${id}`}
                className="text-xs uppercase font-medium max-w-[240px] text-primary hover:underline"
              >
                {title}
              </Link>
              <div
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer"
              >
                <ClearIcon className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>
            <div className="flex gap-x-2 h-[25px] text-xs">
              <div className="flex flex-1 max-w-[75px] items-center h-full border text-primary font-medium">
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 flex justify-center items-center cursor-pointer h-full"
                >
                  <RemoveIcon />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer h-full"
                >
                  <AddIcon />
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around">
                $ {price}
              </div>
              <div className="flex-1 flex justify-end items-center text-primary font-medium">
                {`$ ${parseFloat(price * amount).toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartItem;