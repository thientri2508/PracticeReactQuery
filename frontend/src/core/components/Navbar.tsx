import { CategoriesData } from "../mockData/categoryData";
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from "../constants/constants.router";

interface NavbarProps {
    openNavbar: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ openNavbar }) => {
  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get('category');

  return (
    <nav className={`${openNavbar ? 'w-[80%] overflow-auto' : 'w-0 overflow-hidden'} md:w-full rounded py-3 mini:py-8 md:py-0 fixed mt-[80px] top-0 z-10 bg-red-500 transition-all duration-500`}>
        <ul className="navbar">
        {CategoriesData?.map(category => {
          // Kiểm tra xem danh mục nào đang được chọn, bao gồm cả 'all'
          const isActive = (currentCategory === category.name || (currentCategory === null && category.name === 'all')) 
                          ? 'text-black'
                          : '';

          return category.name === 'all' ? (
            <Link key={category.id} to={ROUTES.PRODUCTS}>
              <li className={`w-[250px] md:w-auto cursor-pointer uppercase ${isActive}`}>
                {category.name}
              </li>
            </Link>
          ) : (
            <Link key={category.id} to={`${ROUTES.PRODUCTS}/?category=${category.name}`}>
              <li className={`w-[250px] md:w-auto cursor-pointer uppercase ${isActive}`}>
                {category.name}
              </li>
            </Link>
          );
        })}
        </ul>
    </nav>
  );
}

export default Navbar;
