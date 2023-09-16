import React from "react";
// import { link } from "react-scroll/modules";
// hover:underline hover:after:underline-offset-8
import Link from "next/link";
const Header = (props) => {
  // const goToBtn = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  return (
    <>
      <div className="sticky top-0 bg-white" id={props.head}>
        <div className="flex justify-between mt-[36px] items-center 2xl:mx-[100px] xl:mx-[60px] lg:mx-[30px] md:mx-[50px] sm:mx-[10px]  ">
          <div className="flex items-center gap-2">
            {/* <Link href="#aa"> */}
            {/* {" "} */}
            <img
              className="max-w-[35px] max-h-[27.58px] cursor-pointer  "
              src="/logo.png"
              alt="logo"
            />{" "}
            {/* </Link> */}
            <div className="text-1logo cursor-pointer  ">TKIT SOL</div>
            {/* <div></div> */}
          </div>
          <div className="flex gap-[5vw] md:hidden sm:hidden">
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-blue-600 before:to-blue-400 before:to-blue-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className=" hover:text-[#8453F9] relative duration-800 before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:rounded-full before:duration-500 before:bg-gradient-to-tr before:from-purple-500 before:to-purple-400 before:to-purple-500 before:ease-in-out hover:before:w-full hover:before:opacity-100  hover:before:ease-in-out"
            >
              Products
            </a>
          </div>
          <div>
            <button className="bg-[#8453F9] border-[#8453F9] border text-[#fff] px-6 h-12 rounded hover:bg-[#fff] hover:text-[#8453F9] hover:border-[#8453F9] ">
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
