"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import webAnimation from "./../../../public/animation/web.json";
import appAnimation from "./../../../public/animation/app.json";
import xrAnimation from "./../../../public/animation/xr.json";
import testingAnimation from "./../../../public/animation/testing.json";
import { motion } from "framer-motion";

const Featured = () => {
  const [isWebHovering, setIsWebHovering] = useState(false);
  const [isAppHovering, setIsAppHovering] = useState(false);
  const [isXRHovering, setIsXRHovering] = useState(false);
  const [isTestingHovering, setIsTestingHovering] = useState(false);
  return (
    <div className="w-full py-20 fn ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <div className="text-8xl tracking-tight">Our Services</div>
      </div>
      <div className="px-20">
        <div className="cards flex gap-5 gap-y-20 w-full mt-10 flex-wrap">
          <div
            onMouseEnter={() => setIsWebHovering(true)}
            onMouseLeave={() => setIsWebHovering(false)}
            className="cardcontainer w-1/2 rounded-xl h-[75vh]   flex-1 min-w-[40%] relative"
          >
            <div className="flex gap-3 items-center  text-xl font-medium w-max px-5 py-5 rounded-xl mb-3">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <div>Web Development</div>
            </div>
            <div
              className="w-full h-full bg-zinc-100 rounded-xl overflow-hidden"
              style={isWebHovering ? { scale: 0.9 } : { scale: 1 }}
            >
              <Lottie animationData={webAnimation} loop={true} />
            </div>
            <h2 className="absolute  left-full -translate-x-1/3 top-1/2  leading-none tracking-tight font-semibold  z-[9] text-8xl -translate-y-1/3 fg text-[#bee239] flex overflow-hidden">
              {"WEB".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isWebHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
          </div>
          <div
            onMouseEnter={() => setIsAppHovering(true)}
            onMouseLeave={() => setIsAppHovering(false)}
            className="cardcontainer w-1/2 rounded-xl h-[75vh]   flex-1 min-w-[40%] relative"
          >
            <h2 className="absolute  right-full translate-x-1/2 top-1/2  leading-none tracking-tight font-semibold  z-[9] text-8xl -translate-y-1/3 fg text-[#bee239] flex overflow-hidden">
              {"APP".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isAppHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}{" "}
            </h2>
            <div
              onMouseEnter={() => setIsXRHovering(true)}
              onMouseLeave={() => setIsXRHovering(false)}
              className="flex gap-3 items-center text-xl font-medium w-max px-5 py-5 rounded-xl mb-3"
            >
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <div>App Development</div>
            </div>
            <div
              className="w-full h-full bg-zinc-100 rounded-xl overflow-hidden"
              style={isAppHovering ? { scale: 0.9 } : { scale: 1 }}
            >
              <Lottie animationData={appAnimation} loop={true} />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsXRHovering(true)}
            onMouseLeave={() => setIsXRHovering(false)}
            className="cardcontainer w-1/2 rounded-xl h-[75vh]   flex-1 min-w-[40%] relative "
          >
            <div className="flex gap-3 items-center  text-xl font-medium w-max px-5 py-5 rounded-xl mb-3">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <div>XR Development</div>
            </div>
            <div
              className="w-full h-[90%] bg-zinc-100 rounded-xl overflow-hidden"
              style={isXRHovering ? { scale: 0.9 } : { scale: 1 }}
            >
              <Lottie
                animationData={xrAnimation}
                loop={true}
                className="h-full"
              />
            </div>
            <h2 className="absolute  left-full -translate-x-1/3 top-1/2  leading-none tracking-tight font-semibold  z-[9] text-8xl -translate-y-1/3 fg text-[#bee239] flex overflow-hidden">
              {"XR".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isXRHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
          </div>
          <div
            className="cardcontainer w-1/2 rounded-xl h-[75vh]   flex-1 min-w-[40%] relative "
            onMouseEnter={() => setIsTestingHovering(true)}
            onMouseLeave={() => setIsTestingHovering(false)}
          >
            <div className="flex gap-3 items-center  text-xl font-medium w-max px-5 py-5 rounded-xl mb-3">
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              <div>Software Testing</div>
            </div>
            <div
              className="w-full h-[90%] bg-zinc-100 rounded-xl overflow-hidden transition-transform ease-in-out"
              style={isTestingHovering ? { scale: 0.9 } : { scale: 1 }}
            >
              <Lottie animationData={testingAnimation} loop={true} />
            </div>
            <h2 className="absolute  right-full translate-x-1/2 top-1/2  leading-none tracking-tight font-semibold  z-[9] text-8xl -translate-y-1/3 fg text-[#bee239] flex overflow-hidden">
              {"SOFTWARE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isTestingHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
