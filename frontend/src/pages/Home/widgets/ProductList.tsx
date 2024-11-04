import ItemProduct from "./ItemProduct"
import React from 'react';
import { useProducts } from '../../../core/hooks/useProducts';
import LoaderItemProduct from "./LoaderItemProduct";
import Error from '../../../core/components/dataDisplay/Error';
import NoData from '../../../core/components/dataDisplay/NoData';
  
  const ProductList: React.FC = () => {

  const { data, error, isLoading } = useProducts(); 

  return (
    <>
    <LoaderItemProduct isLoading={isLoading} />
    <Error message={error?.message} />
    <NoData data={data ? [data] : []} />
    <div>
      <ul className="flex flex-col md:flex-row flex-wrap gap-16 md:gap-10 w-full items-stretch">
      {data && data?.map((product) => (
          <li key={product?.id}>
            <ItemProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ProductList