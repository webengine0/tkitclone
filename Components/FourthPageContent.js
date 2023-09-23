import React from "react";

const FourthPageContent = () => {
  return (
    <>
      <div id="fopid">
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-4xl">
            Our <span className="text-maincolor">Latest Product</span>
          </h1>
        </div>

        <div className="z-1">
          <div className=" flex justify-center gap-8 mx-50 mt-8  xl:mx-52 lg:mx-40 md:mx-20 sm:mx-20 xl:flex-col md:flex-col lg:flex-col sm:flex-col cursor-pointer ">
            <div
              id="containeroverlay1"
              className="max-w-[607px] max-h-[454px] relative"
            >
              {" "}
              <img className="" src="/table.png" alt="" />
              {/* <div
                id="overlay1"
                className="absolute top-0 left-0 border border-red-600 bg-red-400 opacity-0 hover:opacity-40 "
              ></div> */}
              <div id="overlay1" className=" z-0 overlayleft">
                <img
                  className="max-w-lg max-h-40 top-[35%] left-[40%] absolute z-10"
                  src="/icon.png"
                  alt=""
                />
              </div>
            </div>
            <div
              id="containeroverlay2"
              className="max-w-[607px] max-h-[454px] relative"
            >
              {" "}
              <img className="" src="/laptop.png" alt="" />
              <div
                id="overlay2"
                className="z-0 absolute bottom-0 left-0 border  border-red-600 bg-red-400 opacity-0 hover:opacity-40 "
              >
                <img
                  className="max-w-lg max-h-40 top-[35%] left-[40%] absolute z-10"
                  src="/icon.png"
                  alt=""
                />{" "}
              </div>
            </div>

            {/* <div className="relative">
              {" "}
              <img
                className="max-w-[607px] max-h-[454px]"
                src="/laptop.png"
                alt=""
              />
              <div className="absolute top-0 left-0 border w-full h-full border-red-600 bg-red-400 opacity-0 hover:opacity-40 "></div>
            </div> */}
          </div>

          <div className="flex justify-center gap-8 mx-50 mt-8 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-20 xl:flex-col md:flex-col lg:flex-col sm:flex-col cursor-pointer">
            <div
              id="containeroverlay3"
              className="max-w-[607px] max-h-[454px] relative"
            >
              {" "}
              <img className="" src="/growth.png" alt="" />
              <div
                id="overlay3"
                className="z-0 absolute bottom-0 left-0 border  border-red-600 bg-red-400 opacity-0 hover:opacity-40 "
              >
                {" "}
                <img
                  className="max-w-lg max-h-40 top-[35%] left-[40%] absolute z-10"
                  src="/icon.png"
                  alt=""
                />
              </div>
            </div>
            <div
              id="containeroverlay4"
              className="max-w-[607px] max-h-[454px] relative"
            >
              {" "}
              <img className="" src="/mobile.png" alt="" />
              <div
                id="overlay4"
                className="z-0 absolute bottom-0 left-0 border  border-red-600 bg-red-400 opacity-0 hover:opacity-40 "
              >
                {" "}
                <img
                  className="max-w-lg max-h-40 top-[35%] left-[40%] absolute z-10"
                  src="/icon.png"
                  alt=""
                />
              </div>
            </div>
            {/* <div className="relative">
              {" "}
              <img
                className="max-w-[607px] max-h-[454px]"
                src="/growth.png"
                alt=""
              />
              <div className="absolute top-0 left-0 border w-full h-full border-red-600 bg-red-400 opacity-0 hover:opacity-40 "></div>
            </div> */}
            {/* <div className="relative">
              {" "}
              <img
                className="max-w-[607px] max-h-[454px]"
                src="/mobile.png"
                alt=""
              />
              <div className="absolute top-0 left-0 border w-full h-full border-red-600 bg-red-400 opacity-0 hover:opacity-40 "></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthPageContent;
