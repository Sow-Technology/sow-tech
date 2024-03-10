import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen bg-zinc-900 flex flex-col  justify-center pt-2"
    >
      <div className="textstructure mt-52 px-20">
        {["Beyond the", "Screen. We ", "Build Experiences"].map(
          (item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-[8vw] mr-5 h-[5vw] relative bg-red-400 rounded-md"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[8vw] fg leading-[7.5vw] h-full font-bold tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-t-[1px] mt-20 border-zinc-700 flex justify-between items-center py-5 px-20 w-full">
        {[
          "For public and private and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2.5">
          <div className="px-5 py-2 border-[2px] border-zinc-400 uppercase font-light text-sm rounded-full ">
            start the project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-400  rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
