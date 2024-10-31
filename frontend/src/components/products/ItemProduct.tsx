import { IoBagAddOutline } from "react-icons/io5"
import { Product } from '../../types/product.types';
import { Link } from 'react-router-dom'
import { ROUTES } from "../../constants/constants.router"

const ItemProduct = ({ product }: { product: Product }) => {
  return (
    <div className="w-[250px] md:w-[200px] tb:w-[210px] tb1:w-[235px] lg:w-[190px] xl:w-[220px]">
        <Link to={`${ROUTES.PRODUCT_DETAIL}?id=${product?.id}`}><div className="cursor-pointer bg-gray-100"><img src={product?.thumbnail}></img></div></Link>
        <Link to={`${ROUTES.PRODUCT_DETAIL}?id=${product?.id}`}><p className="font-semibold mt-5 cursor-pointer">{product?.title}</p></Link>
        <div className="flex justify-between items-center mt-7">
            <p className="text-red-500 font-bold text-[20px]">{product?.price}</p>
            <IoBagAddOutline size='30' className="cursor-pointer" />
        </div>
        </div>
  )
}

export default ItemProduct