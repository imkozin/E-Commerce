import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility'
import { CartContext } from './CartContext';

const Product = ({product}) => {
    const {id, image, category, title, price} = product;
    const addToCart = useContext(CartContext);

  return (
    <div>
      <div className="mb-4 relative overflow-hidden group transition">
        <div
          className="border border-[#e4e4e4] aspect-h-1 aspect-w-1 w-full bg-white overflow-hidden rounded-lg
          xl:aspect-h-8 xl:aspect-w-7"
        >
          {/* // "w-full h-full flex justify-center items-center" // "h-full w-full object-center group-hover:opacity-75 z-0 hover:z-10"*/}
          <img
            className="max-h-[250px] group-hover:scale-110 transition duration-300 object-contain h-full w-full object-center group-hover:opacity-75"
            src={image}
            alt={title}
          />
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <AddIcon className="text-3x1" />
            </div>
          </button>
          <Link
            to={`/products/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <VisibilityIcon />
          </Link>
        </div>
        <div>
          <div className="mt-1 text-sm text-gray-500">{category}</div>
          <Link to={`/products/${id}`}>
            <h2 className="mt-2 mb-1 text-sm text-gray-700">{title}</h2>
          </Link>
          <div className="text-sm font-medium text-gray-900">$ {price}</div>
        </div>
      </div>
    </div>
  )
}

export default Product;
