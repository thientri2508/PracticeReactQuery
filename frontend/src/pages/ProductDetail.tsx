import { FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";
import LoaderDetailProduct from "../components/ui/loaders/LoaderDetailProduct";
import { useProductDetails } from "../hooks/useDetailProduct";
import Error from '../components/common/Error';
import React from 'react';

const ProductDetail: React.FC = () => {

    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id'); 
    const { data: product, error, isLoading } = useProductDetails(productId!); 

    if (isLoading) {
        return (
            <main className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
                <div className="w-[90%] lg:max-w-screen-lg m-auto">
                    <LoaderDetailProduct />
                </div>
            </main>
        )
    }

    if (error) {
        return <Error message={error?.message} />
    }

  return (
    <main className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
            <div className="grid grid-cols-1 md:grid-cols-8 mt-10 gap-10">
                <div className="col-span-5 md:col-span-3">
                    <div><img src={product?.thumbnail} className="lg:h-[400px]"></img></div>
                    <ul className="flex gap-2 mt-10">
                        <li className="border2"><img src={product?.thumbnail} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product?.thumbnail} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product?.thumbnail} className="lg:h-[80px]"></img></li>
                        <li className="border2"><img src={product?.thumbnail} className="lg:h-[80px]"></img></li>
                    </ul>
                </div>
                <div className="col-span-5 flex flex-col gap-5">
                    <h1 className="font-bold text-[20px]">{product?.title}</h1>
                    <div className="flex gap-16">
                        <h3>Thương hiệu: <b>{product?.brand}</b></h3>
                        <h3>Mã sản phẩm: <b>DTAAL-{product?.id}</b></h3>
                    </div>
                    <h1 className="text-[30px] font-bold text-red-500">{product?.price}đ</h1>
                    <div className="flex">
                        <div className="border1"><GrFormSubtract /></div>
                        <div className="text-[30px] font-bold border-solid border-[1px] border-black w-[100px] text-center">1</div>
                        <div className="border1"><FaPlus /></div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 text-white">
                        <div className="px-5 md:px-10 py-2 bg-red-500 rounded cursor-pointer flex flex-col items-center">
                            <h2>THÊM VÀO GIỎ</h2>
                            <h2>Cam kêt chính hãng / đổi trả 24h</h2>
                        </div>
                        <div className="px-10 py-2 bg-green-500 rounded cursor-pointer flex flex-col items-center">
                            <h2>MUA NGAY</h2>
                            <h2>Thanh toán nhanh chóng</h2>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </main>
  )
}

export default ProductDetail