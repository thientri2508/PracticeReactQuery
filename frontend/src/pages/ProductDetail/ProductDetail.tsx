import LoaderDetailProduct from "./widgets/LoaderDetailProduct";
import { useProductDetails } from "../../core/hooks/useDetailProduct";
import Error from '../../core/components/Error';
import React from 'react';
import ProductImage from "./widgets/ProductImage";
import ProductInfor from "./widgets/ProductInfor";

const ProductDetail: React.FC = () => {

    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id'); 
    const { data: product, error, isLoading } = useProductDetails(productId!); 

    if (isLoading) {
        return <LoaderDetailProduct />
    }

    if (error) {
        return <Error message={error?.message} />
    }

  return (
    <main className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
            <div className="grid grid-cols-1 md:grid-cols-8 mt-10 gap-10">
                <div className="col-span-5 md:col-span-3">
                    <ProductImage thumbnail={product?.thumbnail} />
                </div>
                <div className="col-span-5 flex flex-col gap-5">
                    <ProductInfor product={product} />
                </div>
            </div>    
        </div>
    </main>
  )
}

export default ProductDetail