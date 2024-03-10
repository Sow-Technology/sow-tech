import React from "react";

const About = () => {
  return (
    <div
      data-scroll-section
      data-scroll-speed="-.1"
      data-scroll
      className="p-20 relative z-20 w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black fn"
    >
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Welcome to SOW Tech – your destination for unparalleled digital
        expertise. We&#39;re a dedicated team of professionals specializing in
        web development, mobile apps, cybersecurity, XR development, and
        software testing. With a passion for innovation, we turn ideas into
        impactful realities. Join us in shaping the future of digital
        experiences!
      </h1>
      <div className="w-full flex lg:flex-row flex-col gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="lg:w-1/2 w-full">
          <div className="text-6xl">Our approach : </div>
          <button className="px-10 py-6 bg-zinc-900 rounded-full text-white flex gap-10 items-center mt-5">
            Read More
            <div className="h-2 w-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="lg:w-1/2 w-full h-[70vh] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
};

export default About;
