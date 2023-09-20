import { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

const Category = () => {
    const {name} = useParams();
    const [category, setCategory] = useState({})

    useEffect(() => {
      const fetchCategory = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${name}`
        )
        const data = await response.json()
        console.log(data)
        setCategory(data)
      }
      fetchCategory()
    }, [])

    if (category.length === 0) return <div>Loading...</div>

    return (
        <Products />
    )
}

export default Category;