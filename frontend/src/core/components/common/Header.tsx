import logo from '../../assets/logo/logo.png'
import { FaPhoneVolume } from "react-icons/fa6"
import { FaRegCircleUser } from "react-icons/fa6"
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineShoppingBag } from "react-icons/md"
import { MdOutlineLocationOn } from "react-icons/md"
import { BsList } from "react-icons/bs"
import { ROUTES } from '../../constants/constants.router'

interface HeaderProps {
  openNavbar: boolean
  setOpenNavbar: (value: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ openNavbar, setOpenNavbar }) => {
  return (
    <header className="w-full fixed top-0 z-10 bg-white">
      <div className="max-w-screen-xl h-[80px] m-auto flex justify-between items-center">
        <a href={ROUTES.HOME}><div className="cursor-pointer w-[80px] md:w-[200px]"><img src={logo}></img></div></a>

        <ul className="flex gap-7">
          <li><input type="search" placeholder="Tìm kiếm sản phẩm"
                  className='outline-none border-solid border-2 rounded-md pl-3 py-2 w-[180px] md:w-[350px] focus:shadow-custom-shadow-inp border-red-500 transition-all'>
                    </input></li>

          <li className='hidden lg:block'>
            <ul className='flex items-center gap-3'>  
              <li><FaPhoneVolume size="30" color='red' /></li>
              <li>
                <div>Tư vấn hỗ trợ</div>
                <div className='font-bold text-red-500 text-[18px]'>19006750</div>
              </li>
            </ul>
          </li>

          <li className='hidden lg:block'>
            <ul className='flex items-center gap-3'>  
              <li><FaRegCircleUser size="35" color='red' /></li>
              <li>
                <div>Xin chào!</div>
                <div className='font-bold text-red-500 text-[18px]'>Đăng nhập</div>
              </li>
            </ul>
          </li>
        </ul>
        
        <ul className="hidden md:flex gap-3 items-center">
          <li><FaRegHeart size="30" color='red' /></li>
          <li><MdOutlineShoppingBag size="35" color='red' /></li>
          <li><MdOutlineLocationOn size="32" color='red' /></li>
        </ul>
        <BsList size="50" color='red' className='md:hidden flex-shrink-0' onClick={() => setOpenNavbar(!openNavbar)} />
      </div>
      
    </header>
  )
}

export default Header