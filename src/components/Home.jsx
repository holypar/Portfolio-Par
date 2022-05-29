import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff04f4]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Parminder Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an aspiring Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a recent Computer Science graduate from UC Davis who specializes
          in building exceptional digital experiences. Currently, I'm focused on
          building responsive full stack applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff04f4] duration-300 hover:border-[#ff04f4] ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
