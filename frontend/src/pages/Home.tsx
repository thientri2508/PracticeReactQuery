import ProductList from "../components/ProductList"

const Home = () => {

  return (
    <main className="mt-[100px] md:mt-[180px] lg:mt-[140px] w-full">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
            {/* <Banner></Banner> */}
            {/* <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-9 gap-16 lg:gap-5">
                <div className="lg:col-span-2 flex flex-row lg:flex-col gap-5 order-2 lg:order-1">
                  <div><img src={banner1} className="h-[200px] md:h-[320px] shadow-custom-shadow rounded-md"></img></div>
                  <div><img src={banner2} className="h-[200px] md:h-[320px] shadow-custom-shadow rounded-md"></img></div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <ProductList></ProductList>
                </div>
            </div> */}
            <ProductList></ProductList>
        </div>
    </main>
  )
}

export default Home