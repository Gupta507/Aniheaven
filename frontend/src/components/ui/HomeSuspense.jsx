const HomeSuspense = () => {
  return (
    <div className="lg:w-[100%] flex w-full max-w-[1200px] items-center flex-col min-h-[100vh] colors.gray.950 p-4 justify-center">
      {/* Hero Section Skeleton */}
      <div className="w-full xl:h-[80vh] max-w-8xl md:h-[400px] lg:mx-auto h-[300px] lg:h-[600px] max-h-[620px] rounded-2xl bg-[#1f1f1f] animate-pulse" />

      {/* Trending Section Skeleton */}
      <div className="mt-5 lg:ml-3 w-full">
        <div className="flex w-full justify-start my-4 items-center gap-2">
          <div className="h-8 w-48 rounded-sm border-l-4 border-primary px-3 bg-[#1f1f1f] animate-pulse" />
        </div>
        <div className="flex w-full whitespace-nowrap overflow-hidden gap-4 2xl:gap-9 ">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 border-border border-[1px] font-poppins w-[220px] h-[280px] md:w-[220px] md:h-[300px] lg:w-[190px] lg:h-[270px] xl:w-[200px] xl:h-[280px] rounded-xl overflow-hidden bg-[#1f1f1f] animate-pulse"
            >
              {/* Rank indicator */}
              <div className="absolute top-0 right-0 z-10 bg-[#2a2a2a] h-11 w-9 rounded-bl-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Latest Episodes Section Skeleton */}
      <div className="gap-[16px] mt-[40px] flex-col w-full flex justify-center items-center flex-wrap min-h-[10vh]">
        <div className="max-w-[67rem] flex flex-col gap-8">
          <div className="self-start md:text-2xl text-2xl border-l-4 px-3 border-primary ml-2 bg-[#1f1f1f] animate-pulse h-8 w-48 rounded-sm" />
          <div className="gap-3 w-full flex justify-center items-center flex-wrap">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="relative hover:scale-[1.05] ease-in-out duration-200 group rounded-xl w-[180px] h-[280px] md:w-64 md:h-[370px] overflow-hidden bg-[#1f1f1f] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuspense;
