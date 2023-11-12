import React from "react";
import Frame from "../assets/Frame.png";

function getstarted() {
  return (
    <div className="w-[26%] h-full flex flex-col items-center justify-center text-white mr-[4rem] mt-[1rem] bg-[#0052FE] rounded-2xl p-[3rem] sm:hidden md:hidden">
      <h1 className="text-3xl text-center font-black p-[2rem]">Get Started with KoinX for FREE</h1>
      <p className="text-center pb-[2rem]">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img className="mb-[1rem]" src={Frame} alt="frame" />
      <button
        type="button"
        class="text-black bg-white hover:bg-blue-80 font-black rounded-lg text-lg px-6 py-2.5 text-center inline-flex items-center justify-between "
      >
        Get Started for FREE

        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}

export default getstarted;
