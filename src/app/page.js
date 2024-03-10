"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Eyes from "@/components/sections/Eyes";
import Featured from "@/components/sections/Featured";
import Cards from "@/components/sections/Cards";
import Footer from "@/components/Footer";

// import LocomotiveScroll from "locomotive-scroll";
import { Work } from "@/components/sections/Work";

const Page = () => {
  return (
    <div
      className="bg-zinc-900 w-full min-h-screen text-slate-100"
      data-scroll-container
    >
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Work />
      <Cards />
      <Footer />
    </div>
  );
};

export default Page;
