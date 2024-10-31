
const LoaderItemProduct = () => {
  return (
    <div className="flex flex-col bg-neutral-300 w-[250px] md:w-[200px] tb:w-[210px] tb1:w-[235px] lg:w-[190px] xl:w-[210px] h-[350px] animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
    </div>
  )
}

export default LoaderItemProduct