import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.5"
      className="w-full flex gap-5 h-screen bg-zinc-900 p-20"
    >
      <div className="w-1/2 fg flex items-start justify-between flex-col h-full">
        <div className="heading">
          <h3 className="text-[6vw] uppercase font-semibold leading-none ">
            Eye-
          </h3>
          <h3 className="text-[6vw] uppercase font-semibold leading-none mb-20">
            Opening
          </h3>
        </div>
        <div className="invert">
          <Image src="/logo.png" alt="" width={100} height={100} />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <h3 className="text-[6vw] fg uppercase font-semibold leading-none ">
          Presentations
        </h3>
        <div className="dets fn mt-10">
          <div className="mb-5 text-xl">S:</div>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Facebook
          </Link>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Instagram
          </Link>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Twitter
          </Link>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Facebook
          </Link>
        </div>
        <div className="dets fn mt-10">
          <div className="mb-5 text-xl">L:</div>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Address
          </Link>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Address
          </Link>
        </div>
        <div className="dets fn mt-10">
          <div className="mb-5 text-xl">E:</div>
          <Link
            href="mailto:sales@sowtech.in"
            className="block text-xl font-light hover:scale-110"
          >
            sales@sowtech.in
          </Link>
          <Link href="#" className="block text-xl font-light hover:scale-110">
            Address
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
