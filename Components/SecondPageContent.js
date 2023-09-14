import React from "react";

const SecondPageContent = () => {
  return (
    <>
      <div>
        <div className="flex justify-center gap-36 items-center mx-60 mt-8 sm:gap-4 md:gap-4 md:flex-col sm:flex-col sm:mx-10 md:mx-10 lg:mx-20 2xl:mx-80 xl:mx-70">
          <div className="flex flex-col">
            <h1 className="font-bold text-5xl whitespace-nowrap">
              About <span className="text-maincolor">Us</span>
            </h1>
            <div className=" max-w-[236px] max-h-[19px] mt-2 ml-10">
              <img src="/signature.png" className="w-full h-ful" alt="" />
            </div>
          </div>
          <p className=" sm:mt-1 md:mt-1">
            Our designs bring your imagination to life, effortlessly and
            joyfully realizing your greatest ambitions. Leading digital agency
            with solid design and development expertise. we build readymade
            websites, mobile applications and elaborate online business
            services.
          </p>
        </div>
        <div className="items-center justify-center mt-8 flex rounded-sm lg:mx-40 md:mx-20 sm:mx-10">
          <img src="/office.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SecondPageContent;
