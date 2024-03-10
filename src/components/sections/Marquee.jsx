import { easeIn, easeInOut, motion } from "framer-motion";
import React from "react";
const titles = [
  "Website Design and Development",
  "XR Development",
  "App Development",
  "Web App Development",
  "Software Testing",
];
const marqueeVariants = {
  animate: {
    x: [0, -7035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-offset="-50"
      className="w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl relative z-10"
    >
      <motion.div className="text border-zinc-300 border-t-2 border-b-2 flex whitespace-nowrap overflow-x-scroll overflow-y-hidden no-scrollbar">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          transition={{ duration: 15, repeat: Infinity, easings: easeInOut }}
        >
          <div className="flex">
            {titles.map((title, index) => (
              <h1
                key={index}
                className="text-[15vw] uppercase mb-[-50px] leading-none fg font-semibold pt-10"
              >
                {title}&nbsp;
              </h1>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Marquee;
