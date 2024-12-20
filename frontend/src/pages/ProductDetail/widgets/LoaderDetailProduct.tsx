interface LoaderItemProductProps {
  isLoading: boolean;
}
const LoaderDetailProduct: React.FC<LoaderItemProductProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
          <div className="w-[90%] lg:max-w-screen-lg m-auto">
            <div className="card">
              <div className="card__skeleton card__title"></div>
              <div className="card__skeleton card__description"></div>
            </div>
          </div>
      </div>
    )
  }
  return null;  
}

export default LoaderDetailProduct