import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="main-container flex justify-evenly sm:flex-col  md:flex-col lg:flex-col gap-10 2xl:mx-[60px] xl:mx-[60px] lg:mx-[30px] md:mx-[50px] sm:mx-[10px] xl:flex-col">
          <div className="left">
            <div className="flex flex-col mt-[10px] mb-[10px]  2xl:mx-[60px] xl:mx-[60px] lg:mx-[30px] md:mx-[50px] sm:mx-[10px]">
              <div className="flex items-center gap-2 pb-[20px] ">
                <img
                  className="max-w-[35px] max-h-[27.58px] cursor-pointer  "
                  src="/logo.png"
                  alt="logo"
                />
                <div className="text-1logo cursor-pointer   ">TKIT SOL</div>
              </div>
              <div className="max-w-[372px]">
                Leading digital agency with solid design and development
                expertise. we build readymade websites, mobile applications and
                elaborate online business services.
              </div>
              <div className="flex pt-[20px] gap-[11px] ">
                <img src="/ellipse.png" alt="" />
                <img src="/ellipse.png" alt="" />
                <img src="/ellipse.png" alt="" />
                <img src="/ellipse.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mid pt-[20px] gap-2 flex flex-col">
            <h1 className=" text-[24px]">Quick Menu</h1>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Products</p>
          </div>
          <div className="right pt-[80px] flex flex-col gap-4 ">
            <div className="flex">
              <img src="/email.png" alt="" />
              <p>mail.tkitsolutions@gmail.com</p>
            </div>
            <div className="flex">
              <img src="/location.png" alt="" />
              <p>E11-2 Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="justify-center flex bg-[#6528F7] pt-3 pb-3">
          <p className="text-white ">2023- TKIT SOL | All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
