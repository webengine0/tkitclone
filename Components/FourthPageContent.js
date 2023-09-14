import React from "react";

const FourthPageContent = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-8">
          <h1 className="font-bold text-4xl">
            Our <span className="text-maincolor">Latest Product</span>
          </h1>
          {/* <button className="hover:border hover:border-maincolor">
            See All{" "}
          </button> */}
        </div>
        <div className="flex justify-center gap-8 mx-50 mt-8 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-20 xl:flex-col md:flex-col lg:flex-col sm:flex-col ">
          <img src="/table.png" alt="" />
          <img src="/laptop.png" alt="" />
        </div>
        <div className="flex justify-center gap-8 mx-50 mt-8 xl:mx-40 lg:mx-40 md:mx-20 sm:mx-20 xl:flex-col md:flex-col lg:flex-col sm:flex-col">
          <img src="/growth.png" alt="" />
          <img src="/mobile.png" alt="" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default FourthPageContent;
