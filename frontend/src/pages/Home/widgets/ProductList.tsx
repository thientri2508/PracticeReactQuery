import ItemProduct from "./ItemProduct"
import React from 'react';
import { useProducts } from '../../../core/hooks/useProducts';
import LoaderItemProduct from "./LoaderItemProduct";
import Error from '../../../core/components/Error';
import NoData from '../../../core/components/NoData';
  
  const ProductList: React.FC = () => {

    const { data, error, isLoading } = useProducts(); 

  if (isLoading) {
    return <LoaderItemProduct />
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