"use client";

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EndContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0d9wchm",
        "template_c6fnqu8",
        form.current,
        "2-aVo2JlmoHXUnY3K"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
  };
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
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="mb-10 flex justify-center border border-[#8453F9] p-1 gap-40 mt-14 2xl:gap-40 xl:gap-30 md:gap-20 sm:gap-5">
              <input
                type="Email"
                name="user_email"
                placeholder="Email"
                className="border-none outline-0 mr-2 bg-transparent ml-3 "
              />
              <button
                type="submit"
                value="Send"
                className="text-[#fff] bg-[#8453F9] rounded-sm p-3 ml-10 whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EndContent;
