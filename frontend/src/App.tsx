import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/common/Layout'
import { routes } from './routes'; // Import routes

function App() {

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                {routes.map(({ path, element: Element, index }) => (
                    <Route key={path} path={path} element={<Element />} index={index} />
                ))}
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
