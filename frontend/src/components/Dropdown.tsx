import { MdKeyboardArrowDown } from "react-icons/md"
import { MdKeyboardArrowUp } from "react-icons/md"
import { useState } from "react"

const Dropdown = () => {

    const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <div className="col-span-1">
        <h3 className="hidden md:block font-bold mb-10 text-[16px] lg:text-[18px]">VĂN PHÒNG GIAO DỊCH</h3>
        <div className="md:hidden flex justify-between items-center font-bold mb-10 text-[18px]" onClick={() => {setDropdown(!dropdown)}}>
            <h3>VĂN PHÒNG GIAO DỊCH</h3>
            {dropdown ? (<MdKeyboardArrowUp size='30' />) : (<MdKeyboardArrowDown size='30' />)}
        </div>
        <ul className={`flex flex-col gap-2 text-slate-400 ${dropdown? 'h-[220px] overflow-auto' : 'h-0 overflow-hidden'} md:h-auto md:overflow-auto transition-all duration-300`}>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Sản phẩm</li>
            <li>Tin mới nhất</li>
            <li>Câu hỏi thường gặp</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
        </ul>
    </div>
  )
}

export default Dropdown