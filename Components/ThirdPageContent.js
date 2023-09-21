import React from "react";

const ThirdPageContent = () => {
  return (
    <>
      <div id="tpid">
        <div className="flex items-center justify-center mt-40">
          <div className="flex flex-col items-end">
            <h1 className="font-bold text-5xl text-right sm:text-3xl">
              What We're <span>Good At</span>
            </h1>
            <div className="max-w-[306px] max-h-[22px] mt-2 text-right">
              <img className="w-full h-full" src="/signature2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex mx-32 mt-8 flex-col 2xl:mx-32 xl:mx-20 lg:mx-16 md:mx-10 sm:mx-2">
          <hr />
          <div className="mb-4 relative" id="g01">
            <div className="flex gap-60 mt-4 items-center xl:gap-52 lg:gap-40 md:gap-20 sm:gap-5">
              <div className=" flex gap-8 text-3xl font-bold hover:text-maincolor cursor-pointer">
                <h1>01</h1>
                <h1 className="whitespace-nowrap md:whitespace-normal sm:whitespace-normal">
                  Web Development
                </h1>
              </div>
              <h3>
                User-Centric Approach We belive That Design Should Revolve
                around the needs and desires of your users.
              </h3>
            </div>
            <div className="items-end justify-end flex" id="growth1id">
              <img src="/growth.png" alt="" />
            </div>
          </div>
          <hr />
          <div className=" mb-4">
            <div className="flex gap-60 justify-between mt-4 items-center xl:gap-52 lg:gap-40 md:gap-20 sm:gap-5">
              <div className=" flex gap-8 text-3xl font-bold `hover`:text-maincolor cursor-pointer">
                <h1>02</h1>
                <h1 className="whitespace-nowrap md:whitespace-normal sm:whitespace-normal">
                  Graphic Designing
                </h1>
              </div>
              <h3>
                User-Centric Approach We belive That Design Should Revolve
                around the needs and desires of your users.
              </h3>
            </div>
            <div className="items-end justify-end flex">
              <img src="/growth.png" alt="" />
            </div>
          </div>
          <hr />
          <div className=" mb-4">
            <div className="flex justify-between gap-60 mt-4 items-center xl:gap-52 lg:gap-40 md:gap-20 sm:gap-5">
              <div className=" flex gap-8 text-3xl font-bold hover:text-maincolor cursor-pointer">
                <h1>03</h1>
                <h1 className="whitespace-nowrap md:whitespace-normal sm:whitespace-normal">
                  UI/UX Design
                </h1>
              </div>
              <h3>
                User-Centric Approach We belive That Design Should Revolve
                around the needs and desires of your users.
              </h3>
            </div>
            <div className="items-end justify-end flex" id="growth3id">
              <img src="/growth.png" alt="" />
            </div>
          </div>
          <hr />
          <div className=" mb-4">
            <div className="flex justify-between gap-60 mt-4 items-center xl:gap-52 lg:gap-40 md:gap-20 sm:gap-5">
              <div className=" flex gap-8 text-3xl font-bold hover:text-maincolor cursor-pointer">
                <h1>04</h1>
                <h1 className="whitespace-nowrap md:whitespace-normal sm:whitespace-normal">
                  Branding
                </h1>
              </div>
              <h3>
                User-Centric Approach We belive That Design Should Revolve
                around the needs and desires of your users.
              </h3>
            </div>
            <div className="items-end justify-end flex">
              <img src="/growth.png" alt="" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default ThirdPageContent;
