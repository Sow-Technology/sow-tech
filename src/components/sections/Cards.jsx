import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div
      className="h-screen w-full bg-zinc-100 px-32 flex gap-5 items-center"
      data-scroll
      data-scroll-section
    >
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="w-full rounded-xl h-full bg-[#004d43]  flex justify-center items-center relative ">
          <Image
            src="/logo.png"
            alt=""
            width={150}
            height={150}
            className="w-32 invert"
          />
          <button className="absolute px-5 py-1 r border-2  left-10 bottom-10 rounded-full">
            &copy; 2020-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="w-1/2 rounded-xl h-full bg-[#192826] flex items-center justify-center relative">
          <Image
            src="/swat.webp"
            alt=""
            width={150}
            height={150}
            className=""
          />
          <button className="absolute px-5 py-1 r border-2  left-10 bottom-10 rounded-full">
            &copy; 2020-2024
          </button>
        </div>
        <div className="w-1/2 rounded-xl h-full bg-[#192826] relative flex items-center justify-center">
          <Image src="/swat.webp" alt="" width={150} height={150} />
          <button className="absolute px-5 py-1 r border-2  left-10 bottom-10 rounded-full">
            &copy; 2020-2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
