"use client";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full relative bg-cover bg-center h-full bg-[url('/eyes.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 flex gap-10 justify-center">
          <div className="h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
              <div
                className="line w-full h-10"
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="h-[15vw] w-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full flex items-center justify-center bg-zinc-900">
              <div
                className="line w-full h-10 rotate-12"
                style={{
                  transform: ` rotate(${rotate}deg)`,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
