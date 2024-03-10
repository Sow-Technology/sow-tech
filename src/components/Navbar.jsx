import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className=" z-[999] w-full px-20 py-4 fn flex justify-between items-center  rounded-xl">
      <div className="">
        <Image
          src="/logo.png"
          alt=""
          width={80}
          height={80}
          className="invert"
        />
      </div>
      <div className="flex gap-10 tracking-widest">
        {["Services", "Our Work", "About Us", "Contact"].map((item, index) => (
          <Link
            href={`/${item}`}
            key={index}
            className={`text-lg font-normal capitalize ${
              index === 3 && "ml-32"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
