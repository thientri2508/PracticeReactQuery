import ItemProduct from "./ItemProduct"
import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import LoaderItemProduct from "../ui/loaders/LoaderItemProduct";
import Error from '../common/Error';
import NoData from '../common/NoData';
  
  const ProductList: React.FC = () => {

    const products_loading = Array.from({ length: 8 });

    const { data, error, isLoading } = useProducts(); 

  if (isLoading) {
    return <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-center">
              {products_loading.map((_, index) => (
                <li key={index}><LoaderItemProduct /></li>
              ))}
          </ul>
  }

  if (error) {
    return <Error message={error?.message} />
  }
  
  if (!Array.isArray(data) || data.length === 0) {
    return <NoData />
  }

  return (
    <div>
      <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-stretch">
      {data && data?.map((product) => (
          <li key={product?.id}>
            <ItemProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList