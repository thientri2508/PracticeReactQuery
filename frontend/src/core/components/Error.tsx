interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <main className="w-full mt-[100px] md:mt-[180px] lg:mt-[140px]">
        <div className="w-[90%] lg:max-w-screen-lg m-auto">
            <p className="font-bold text-[30px] w-full text-center pt-10">
                {message}
            </p>
        </div>
    </main>
  );
};

export default Error;
