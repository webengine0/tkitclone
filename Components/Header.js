"use client";

import React, { useState } from "react";

const Header = () => {
  // const [color, setColor] = useState("fpid");
  const scrollfFunction = () => {
    const elem = document.getElementById("fpid");
    elem.scrollIntoView({ behavior: "smooth" });
  };
  const scrollsFunction = () => {
    const elem = document.getElementById("spid");
    elem.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltFunction = () => {
    const elem = document.getElementById("tpid");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollendFunction = () => {
    const elem = document.getElementById("endid");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  // function scrollsFunction() {
  //   const element2 = document.getElementById("spid");
  //   element2.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrolltFunction() {
  //   const element3 = document.getElementById("tpid");
  //   element3.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollfoFunction() {
  //   const element4 = document.getElementById("fopid");
  //   element4.scrollIntoView({ behavior: "smooth" });
  // }
  // function scrollendFunction() {
  //   const element5 = document.getElementById("endid");
  //   element5.scrollIntoView();
  // }

  return (
    <>
      <div className="sticky top-0 bg-white z-20" id="headid">
        <div className="flex justify-between mt-[40px] mb-[10px]  items-center 2xl:mx-[160px] xl:mx-[60px] lg:mx-[30px] md:mx-[50px] sm:mx-[10px]  ">
          <div className="flex items-center gap-2" onClick={scrollfFunction}>
            <img
              className="max-w-[85px] max-h-[60px] w-[45px] cursor-pointer  "
              src="/logo.png"
              alt="logo"
            />
            <div className="text-1logo cursor-pointer font-bold  ">
              TKIT SOL
            </div>
          </div>
          <div className="flex gap-[5vw] md:hidden sm:hidden">
            <a
              // href="#"
              onClick={scrollfFunction}
              className=" cursor-pointer hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Home
            </a>
            <a
              // href="#"
              onClick={scrollendFunction}
              className=" cursor-pointer hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              About Us
            </a>
            <a
              // href="#"
              onClick={scrollsFunction}
              className=" cursor-pointer hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Services
            </a>
            <a
              // href="#"
              onClick={scrolltFunction}
              className=" cursor-pointer hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-purple-500 before:to-purple-400 before:to-purple-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Products
            </a>
          </div>
          <div>
            <button
              onClick={scrollendFunction}
              className=" cursor-pointer bg-[#8453F9] border-[#8453F9] border text-[#fff] px-6 h-12 rounded hover:bg-[#fff] hover:text-[#8453F9] hover:border-[#8453F9] "
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="border border-red-800">
          <button>
            <i class="ri-align-justify"></i>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
