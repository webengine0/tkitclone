import React from "react";

const EndContent = () => {
  return (
    <>
      <div id="scroll" className=" mt-20 mb-20">
        <div id="endid" className="flex flex-col items-center gap-4">
          <h1 className="mt-8 text-4xl">
            Let's <span className="text-[#8453F9]">Talk Together</span>
          </h1>
          <div className="leading-1 flex flex-col items-center">
            <p>Let Us know if you're looking for a digital designer.</p>
            <p>Let’s talk about the next big thing!</p>
          </div>
          <div className="mb-10 flex justify-center border border-[#8453F9] p-1 gap-40 mt-14 2xl:gap-40 xl:gap-30 md:gap-20 sm:gap-5">
            <input
              type="Email"
              placeholder="email"
              className="border-none outline-0 mr-2"
            />
            <button className="text-[#fff] bg-[#8453F9] rounded-sm p-3 ml-10 whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndContent;
