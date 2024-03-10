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
    // Simulating a loading delay, replace the setTimeout with your actual data fetching logic
    const loadingTimeout = setTimeout(() => {
      // Set isLoading to false after the delay
      setIsLoading(false);
    }, 2000); // 2000 milliseconds (2 seconds) delay, adjust as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    // Check if window is defined to avoid server-side rendering issues
    if (typeof window !== "undefined") {
      // Import Locomotive Scroll only if window is defined
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          // Locomotive Scroll options can be configured here
          // For example: smooth scroll, scrollbar, etc.
        });

        // Cleanup the scroll instance on component unmount
        return () => {
          scroll.destroy();
        };
      });
    }
  }, []);

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
