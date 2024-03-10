"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Eyes from "@/components/sections/Eyes";
import Featured from "@/components/sections/Featured";
import Cards from "@/components/sections/Cards";
import Footer from "@/components/Footer";
import { Work } from "@/components/sections/Work";
import Loading from "@/components/Loading";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if window is defined to avoid server-side rendering issues
    if (typeof window !== "undefined") {
      // Import Locomotive Scroll only if window is defined
      import("locomotive-scroll").then((module) => {
        const LocomotiveScroll = module.default;

        const scroll = new LocomotiveScroll({
          // Locomotive Scroll options can be configured here
          // For example: smooth scroll, scrollbar, etc.
        });

        // Set isLoading to false after Locomotive Scroll is initialized
        // setIsLoading(false);

        // Cleanup the scroll instance on component unmount
        return () => {
          scroll.destroy();
        };
      });
    }
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

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
