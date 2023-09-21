import React from "react";

const FirstPageContent = () => {
  return (
    <>
      <div id="fpid">
        <div className="mt-32 items-center justify-center flex flex-col cursor-default sm:text-center  md:text-center  lg:text-center ">
          <h1 className="font-bold text-6xl sm:items-center ">
            A Digital Agency Transforming Your
          </h1>
          <h1 className="font-bold text-6xl pt-4 decoraiton-[#000000] ">
            <span className=" text-maincolor">Dreams</span> Into{" "}
            <span className="text-maincolor">Reality</span>
          </h1>
          <p className="pt-5 text-2xl decoration-[#222222]">
            We transform abstract ideas and visions into tangible and functional
            digital products
          </p>
          <p className="pt-2 text-2xl decoration-[#222222]">
            We transform abstract ideas and visions into tangible
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8 sm:flex-col">
          <button className="bg-maincolor border-maincolor border text-[#fff] px-6 h-12 rounded hover:bg-[#7343E8]  sm:px-28 sm:whitespace-nowrap ">
            Contact Us
          </button>
          <button className="bg-[#fff] border-maincolor border px-6 h-12 rounded  text-maincolor sm:px-28 sm:whitespace-nowrap  ">
            Our Products
          </button>
        </div>
        <div id="hidd">
          <div id="article">
            <div
              id="gallery"
              className="flex justify-between w-full mt-6 animate-scroll"
            >
              <img className="w-1/4 h-auto" src="/mobile.png" alt="Image 1" />
              <img className="w-1/4 h-auto" src="/laptop.png" alt="Image 2" />
              <img className="w-1/4 h-auto" src="/table.png" alt="Image 3" />
              <img className="w-1/4 h-auto" src="/growth.png" alt="Image 4" />
              <img className="w-1/4 h-auto" src="/mobile.png" alt="Image 1" />
              <img className="w-1/4 h-auto" src="/laptop.png" alt="Image 2" />
              <img className="w-1/4 h-auto" src="/table.png" alt="Image 3" />
              <img className="w-1/4 h-auto" src="/growth.png" alt="Image 4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPageContent;
