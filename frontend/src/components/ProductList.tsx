import ItemProduct from "../components/ItemProduct"
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import Loader from "./Loader";
  
  const ProductList: React.FC = () => {

    const products_loading = Array.from({ length: 8 });

    const { data, error, isLoading } = useProducts(); 

  if (isLoading) {
    return <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-center">
              {products_loading.map((_, index) => (
                <li key={index}><Loader></Loader></li>
              ))}
          </ul>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-stretch">
      {data && data.map((product) => (
          <li key={product.id}>
            <ItemProduct product={product}></ItemProduct>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList