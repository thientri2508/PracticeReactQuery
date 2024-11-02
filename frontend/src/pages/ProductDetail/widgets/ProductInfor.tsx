import { Product } from '../../../core/types/Product';
import { FaPlus } from "react-icons/fa6";
import { GrFormSubtract } from "react-icons/gr";

const ProductDetails = ({ product }: { product?: Product }) => {
  return (
    <>
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
    </>
  )
}

export default ProductDetails