import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import HomePage from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Test from './pages/Test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/products' element={<HomePage />}></Route>
          <Route path="/product" element={<ProductDetail />} />
        </Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
