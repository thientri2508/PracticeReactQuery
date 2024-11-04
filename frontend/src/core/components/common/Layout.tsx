import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const [openNavbar, setOpenNavbar] = useState<boolean>(false)

  return (
    <div>
        <Header openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <Navbar openNavbar={openNavbar} />
        <main>{children}</main>
        <Footer />
    </div>
)
}

export default Layout