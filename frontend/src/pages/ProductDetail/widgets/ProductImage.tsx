
const ProductImage = ({thumbnail}: {thumbnail?: string}) => {
  return (
    <>
        <div><img src={thumbnail} className="lg:h-[400px]"></img></div>
        <ul className="flex gap-2 mt-10">
            <li className="border2"><img src={thumbnail} className="lg:h-[80px]"></img></li>
            <li className="border2"><img src={thumbnail} className="lg:h-[80px]"></img></li>
            <li className="border2"><img src={thumbnail} className="lg:h-[80px]"></img></li>
            <li className="border2"><img src={thumbnail} className="lg:h-[80px]"></img></li>
        </ul>
    </>
  )
}

export default ProductImage