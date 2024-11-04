interface NoDataProps {
  data: unknown[];
}

const NoData: React.FC<NoDataProps> = ({ data }) => {
  if (Array.isArray(data) && data.length > 0) {
    return null;
  }
  return (
    <main className="w-full mt-[60px] md:mt-[140px] lg:mt-[100px]">
      <div className="w-[90%] lg:max-w-screen-lg m-auto">
          <p className="font-bold text-[30px] w-full text-center">
          Please check back later or try a different category.
          </p>
      </div>
  </main>
  );
};

export default NoData;
