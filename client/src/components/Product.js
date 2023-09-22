import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility'

const Product = ({product}) => {
    const {id, image, category, title, price} = product;

  return (
    <div>
      <div className="mb-4 relative overflow-hidden group transition">
        <div className="cursor-pointer border border-[#e4e4e4] aspect-h-1 aspect-w-1 w-full bg-white overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
          <img
            className="max-h-[250px] group-hover:scale-110 transition duration-300 object-contain h-full w-full object-center group-hover:opacity-75"
            src={image}
            alt={title}
          />
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <AddIcon className="text-3x1" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <VisibilityIcon />
          </Link>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <Link to={`/product/${id}`}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product;
