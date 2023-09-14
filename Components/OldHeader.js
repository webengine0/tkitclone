import React from "react";
// hover:underline hover:after:underline-offset-8
const Header = () => {
  return (
    <>
      {/* <div className="max-x-xl"> */}
      {/* <div className="my-9 h-12 flex justify-between mx-32 items-center border border-green-900 md:mx-4 sm:mx-0 lg:mx-24 xl:mx-32 2xl:mx-32 "> */}
      <div className="mt-[36px] flex justify-between items-center border border-red-500">
        <div className="flex items-center gap-2">
          <img className="" src="/logo.png" alt="logo" />
          <div className="font-bold cursor-default text-4xl ">TKIT SOL</div>
          {/* <div></div> */}
        </div>
        <div className="flex gap-[5vw]">
          <div className="">
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:max-w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:max-w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:max-w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:max-w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:max-w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:max-w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:max-w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-purple-500 before:to-purple-400 before:to-purple-500 before:ease-in-out hover:before:max-w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Products
            </a>
          </div>
          <div>
            <button className="bg-[#8453F9] border-[#8453F9] border text-[#fff]">
              {/* <button className="bg-[#8453F9] border-[#8453F9] border text-[#fff] px-6 h-12 rounded hover:bg-[#fff] hover:text-[#8453F9] hover:border-[#8453F9] "> */}
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
