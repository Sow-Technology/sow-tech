"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const NavItems = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Our Work",
    link: "#work",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={` z-[999]  w-full px-20 py-4 fn flex justify-between items-center   ${
        isActive ? "fixed bg-zinc-900" : "relative"
      }`}
    >
      <div className="">
        <Image
          src="/logo.png"
          alt=""
          width={100}
          height={100}
          className="invert"
        />
      </div>
      <div className="lg:flex hidden gap-10 tracking-widest">
        {NavItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`text-lg font-normal capitalize ${
              index === 3 && "ml-32"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden gap-8 text-zinc-100 text-4xl cursor-pointer transition-transform ease-in-out">
        {isActive ? (
          <RxCross2 onClick={() => setIsActive(false)} />
        ) : (
          <HiOutlineMenuAlt3 onClick={() => setIsActive(true)} />
        )}
      </div>
      {isActive && (
        <div className="fixed flex flex-col text-7xl px-10 font-semibold mt-24 w-full z-[100] h-[100vh] inset-0 py-20 tracking-tight fg bg-zinc-900 gap-y-5 ">
          {NavItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={` uppercase hover:ml-10`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
