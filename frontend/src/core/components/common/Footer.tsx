import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowUp } from "react-icons/md"
import Dropdown from "../ui/Dropdown"

const Footer = () => {

  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <footer className="w-full mt-20 bg-black text-white py-14">
      <div className="w-[80%] md:w-[90%] lg:max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
      </div>

      <div className="w-[80%] md:w-[90%] lg:max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-32 gap-10 md:gap-5">
        <div className="col-span-1">
        <h3 className="hidden md:block font-bold mb-10 text-[18px]">THIÊN ĐƯỜNG MUA SĂN</h3>
        <div className="md:hidden flex justify-between items-center font-bold mb-10 text-[18px]" onClick={() => {setDropdown(!dropdown)}}>
            <h3>THIÊN ĐƯỜNG MUA SĂN</h3>
            {dropdown ? (<MdKeyboardArrowUp size='30' />) : (<MdKeyboardArrowDown size='30' />)}
        </div>
          <ul className={`flex flex-col gap-2 text-slate-400 ${dropdown? 'h-[220px] overflow-auto' : 'h-0 overflow-hidden'} md:h-auto md:overflow-auto transition-all duration-300`}>
            <li>Copyright@ 2021 Công ty cổ phần thương mại</li>
            <li>Chứng nhận DDKKD số: 0388282938 do sở KH & ĐT TP. Hà Nội cấp</li>
            <li>Địa chỉ: Tòa nhà Ladeco 266 Đội Cẩn, Ba Đình, Hà Nội</li>
            <li>Điện thoại: 19006750 - Email: support@sapo.vn</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold mb-10 text-[18px]">NHẬN TIN KHUYẾN MÃI</h3>
          <div className="flex">
            <input type="text" className="outline-none border-solid border-2 w-[220px] lg:w-[400px] text-black px-4 py-1" placeholder="Nhập email của bạn" />
            <button className="bg-red-500 px-3 py-2 font-bold">Đăng ký</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer