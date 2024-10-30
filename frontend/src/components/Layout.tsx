import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import { useState } from "react"

const Layout = () => {

  const [openNavbar, setOpenNavbar] = useState<boolean>(false)

  return (
    <>
        <Header openNavbar={openNavbar} setOpenNavbar={setOpenNavbar}></Header>
        <Navbar openNavbar={openNavbar}></Navbar>
        <Outlet />
        <Footer></Footer>
    </>
  )
}

export default Layout