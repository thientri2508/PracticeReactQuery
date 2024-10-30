import { CategoriesData } from "../categoryData"
import { Link } from 'react-router-dom'
interface NavbarProps {
    openNavbar: boolean
}

const Navbar: React.FC<NavbarProps> = ({ openNavbar }) => {

  return (
    <nav className={`${openNavbar ? 'w-[80%] overflow-auto' : 'w-0 overflow-hidden'} md:w-full rounded py-3 mini:py-8 md:py-0 fixed mt-[80px] top-0 z-10 bg-red-500 transition-all duration-500`}>
        <ul className="navbar">
            { CategoriesData.map(category => 
                 (<Link key={category.id} to={`?category=${category.name}`}><li className="w-[250px] md:w-auto cursor-pointer uppercase">{category.name}</li></Link>))}
        </ul>
    </nav>
  )
}

export default Navbar