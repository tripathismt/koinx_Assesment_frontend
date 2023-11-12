import React from "react";
import group from "../assets/Group.png";

function Newsletter() {
  return (
    <div className="w-full h-[30rem] mt-[1rem] bg-white flex justify-center items-center  ">
      <div className=" flex  justify-around items-center w-[80%] sm:w-[88%] h-[60%] bg-blue-700 rounded-2xl sm:flex-col sm:h-auto sm:p-4 m-0 md:p-6">
        <div className="flex justify-center items-center ">
          <img src={group} alt="" />
        </div>
        <div className="flex  flex-col items-start">
          <h1 className="text-2xl font-bold text-white pb-[2rem] ">
            Stay up to date with latest crypto news <br /> and events. Subscribe to our
            newsletter
          </h1>
          <div className="sm:w-full ">
          <div className=" flex bg-white rounded sm:justify-between sm:border-collapse">
            <input
              type="text"
              className=" p-2 border-white focus:border-white"
              placeholder="Enter text..."
            />
            <button className="bg-[#FFB800] text-white py-2 px-4 rounded-r mr-0.5 ">
              Subscribe
            </button>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
