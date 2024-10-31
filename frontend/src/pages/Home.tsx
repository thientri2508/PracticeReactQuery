import React from 'react';
import ProductList from "../components/products/ProductList"

const Home: React.FC = () => {

  return (
    <main className="mt-[100px] md:mt-[180px] lg:mt-[140px] w-full">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
            <ProductList />
        </div>
    </main>
  )
}

export default Home