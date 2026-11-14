"use client";

import React, { useState } from "react";

const PATHS = [
  // 0: R (first R)
  "M286.4,42.2c-3.3-1-7.4-1.5-12.2-1.5-10.5,0-19.3,3-26,8.9-4.4,3.8-7.9,7.9-10.7,12.2v-19.4h-22.8v119.1h23.3v-53.8c0-9.4,1.3-17.3,3.7-23.6,2.4-6.1,6.2-10.9,11.3-14.3,5.1-3.4,11.8-5.1,19.8-5.1s7.8.4,12.8,1.1l2.1.3v-23.6l-1.3-.4h0Z",
  // 1: U (first U)
  "M377.6,42.4v53.4c0,13.7-2.1,25.3-6.2,34.6-4,8.9-11.6,13.3-23.4,13.3s-13.3-2.2-17.4-6.8c-4.1-4.6-6.2-12-6.2-22.1V42.4h-23.5v76.9c0,9.1,1.5,17,4.4,23.7,2.9,6.8,7.5,12.2,13.5,16,6,3.8,13.6,5.8,22.5,5.8s19.8-2.7,26.3-8.1c4.3-3.6,7.8-7.3,10.6-11.2v16.1h23.1V42.4h-23.5,0Z",
  // 2: U (second U)
  "M690.4,42.4v53.4c0,13.7-2.1,25.3-6.2,34.6-4,8.9-11.6,13.3-23.4,13.3s-13.3-2.2-17.4-6.8c-4.1-4.6-6.2-12-6.2-22.1V42.4h-23.5v76.9c0,9.1,1.5,17,4.4,23.7,2.9,6.8,7.5,12.2,13.5,16,6,3.8,13.6,5.8,22.5,5.8s19.8-2.7,26.3-8.1c4.3-3.6,7.8-7.3,10.6-11.2v16.1h23.1V42.4h-23.5,0Z",
  // 3: R (second R)
  "M805.6,42.2c-3.3-1-7.4-1.5-12.2-1.5-10.5,0-19.3,3-26,8.9-4.4,3.8-7.9,7.9-10.7,12.2v-19.4h-22.8v119.1h23.3v-53.8c0-9.4,1.3-17.3,3.7-23.6,2.4-6.1,6.2-10.9,11.3-14.3,5.1-3.4,11.8-5.1,19.8-5.1s7.8.4,12.8,1.1l2.1.3v-23.6l-1.3-.4h0Z",
  // 4: T top (second T)
  "M565.3,6.7h-23.3v35.1h23.3V6.7Z",
  // 5: T stem (second T)
  "M576.8,140.8c-4,0-6.9-.9-8.7-2.7-1.8-1.8-2.7-4.7-2.7-8.7v-65.3h-23.3v66.9c0,6.6,1.2,12.3,3.5,16.7,2.4,4.5,6,8,10.7,10.4,4.7,2.3,10.5,3.5,17.3,3.5h28v-20.7h-24.7Z",
  // 6: C
  "M525.2,117.1h-23.4v.3c0,0-.7,1.8-.7,1.8-2.2,7.1-5.8,13.1-10.6,17.8-4.7,4.5-11.3,6.8-19.6,6.8s-11.7-1.5-16.6-4.6c-4.9-3-8.8-7.8-11.5-14-2.8-6.3-4.3-14.2-4.3-23.4s1.5-16.8,4.4-23.1c2.9-6.2,6.8-11,11.7-14,4.9-3.1,10.3-4.6,16.2-4.6s13.3,2,17.9,5.9c4.7,3.9,8.1,9.1,10.2,15.3l.6,1.8h23.1c-.5-7-2.3-11.2-3.1-12.8-2-4.9-4.7-9.6-8.3-13.8-4.4-5.3-10.2-9.6-17-12.6-6.8-3-14.7-4.6-23.3-4.6s-20.7,2.7-29.3,8c-8.6,5.3-15.4,12.8-20.3,22.4-4.9,9.5-7.3,20.4-7.3,32.3s2.4,23.7,7.1,33.1c4.7,9.5,11.5,17,20.2,22.1,8.7,5.1,18.7,7.7,29.9,7.7s23.9-3.5,32.9-10.4c9-6.9,15.5-16.1,19.3-27.5l.6-1.7v-.2c.6-2.1,1-4.7,1.2-7.9h0Z",
  // 7: T stem (first T)
  "M175.6,140.8c-4,0-6.9-.9-8.7-2.7-1.8-1.8-2.7-4.7-2.7-8.7v-65.3h-23.3v66.9c0,6.6,1.2,12.3,3.5,16.7,2.4,4.5,6,8,10.7,10.4,4.7,2.3,10.5,3.5,17.3,3.5h28v-20.7h-24.7Z",
  // 8: S bottom
  "M81.5,71.9l-21.4-4.8c-2.2-.5-4.2-1.1-6-1.7v24.7l20.2,4.8c9.4,2.1,16.4,5.2,20.8,9.2,4.3,3.8,6.5,8.9,6.5,15.1s-2.8,13.2-8.4,17.5c-5.8,4.4-13.9,6.7-24.2,6.7s-13.9-1.4-19.4-4c-5.5-2.7-10.2-6.4-13.8-11.1-3.7-4.7-6.5-10.2-8.3-16.3h0c0-.1-26.3-.1-26.3-.1h0c2.6,11.7,6.2,17.7,6.9,18.7,2.4,5,5.5,9.6,9,13.7,5.6,6.4,12.8,11.6,21.3,15.3,8.5,3.7,18.5,5.6,29.6,5.6s22.7-2,31.4-6c8.8-4,15.5-9.7,20.1-16.9,4.6-7.2,6.9-15.5,6.9-24.8s-4.1-21.9-12.3-29.5c-8-7.5-18.9-12.9-32.4-16h0Z",
  // 9: T cross (first T)
  "M196.1,42.4h-30v20.3h30v-20.3Z",
  // 10: T cross (second T)
  "M597.3,42.4h-29.6v20.3h29.6v-20.3Z",
  // 11: E bottom
  "M894,120.9l-.7,1.7c-2.2,5.6-5.8,10.7-10.6,15.2-4.7,4.3-11.1,6.5-18.9,6.5s-11-1.2-15.6-3.6c-4.5-2.4-8.3-6.4-11.2-11.9-2.5-4.7-4-10.6-4.6-17.6h-23.4c.8,9.3,2.9,17.6,6.3,24.7,4.5,9.5,10.9,16.8,19.2,21.7,8.2,4.9,17.9,7.4,28.7,7.4s15.9-1.4,22.7-4.1c6.8-2.7,12.8-6.7,17.7-11.7,4.9-5.1,8.8-11.3,11.5-18.5l.7-1.8-21.7-7.8h0Z",
  // 12: E top
  "M910.5,72.4c-3.9-10.3-10.1-18.5-18.4-24.4-8.3-5.9-18.3-8.9-29.9-8.9s-19.2,2.6-27.4,7.7c-8.2,5.1-14.7,12.5-19.4,22-2.8,5.7-4.7,12-5.8,18.8h23.3c1.3-8.3,4.3-15.2,9.2-20.3,5.5-5.8,12.1-8.6,20-8.6s10,1.2,14.2,3.7,7.7,6.1,10.3,10.8c2.4,4.3,3.7,9.5,3.9,15.6h-53.9v19.6h77.6l.2-1.7c1.3-12.5,0-24-4-34.3h0Z",
  // 13: T top (first T)
  "M164.1,6.7h-23.3v34.9h23.3V6.7Z",
  // 14: S top
  "M98.7,41.6h27.7C116.5,12.8,86.7-2,57.5,1.5c-7.7.9-15.3,3-22.1,6.8-13.8,7.5-23.4,21.7-23.4,37.6s1.1,12.9,3.4,18h34.8c-3.8-1.6-6.9-3.3-9.1-5.3-3.7-3.3-5.6-8-5.6-13.9s1.2-8.2,3.4-11.5c2.3-3.4,5.7-6.1,10-8,4.5-1.9,9.8-2.9,15.8-2.9s13.7,1.3,18.7,4c5,2.6,8.8,5.8,11.5,9.5,1.3,1.8,2.5,3.7,3.6,5.8h0Z",
];

// Calculated physical scatter vectors for explosive shattering
const SCATTER_TRANSFORMS = [
  { x: -140, y: -90, r: -45, s: 0.9, delay: 0 },
  { x: -180, y: 110, r: 60, s: 1.1, delay: 20 },
  { x: 160, y: 130, r: -50, s: 0.85, delay: 40 },
  { x: 220, y: -70, r: 75, s: 1.05, delay: 10 },
  { x: 80, y: -160, r: -90, s: 0.8, delay: 30 },
  { x: 95, y: 140, r: 35, s: 1.15, delay: 50 },
  { x: -30, y: -120, r: 120, s: 0.95, delay: 15 },
  { x: -90, y: 150, r: -70, s: 1.0, delay: 35 },
  { x: -260, y: 80, r: 85, s: 0.9, delay: 25 },
  { x: -120, y: -60, r: -110, s: 0.85, delay: 45 },
  { x: 130, y: -110, r: 95, s: 0.9, delay: 15 },
  { x: 310, y: 120, r: -65, s: 1.05, delay: 30 },
  { x: 280, y: -130, r: 50, s: 0.8, delay: 10 },
  { x: -150, y: -150, r: 65, s: 0.9, delay: 5 },
  { x: -240, y: -80, r: -80, s: 1.1, delay: 25 },
];

export function ShatterLogo({ className }: { className?: string }) {
  const [isShattered, setIsShattered] = useState(false);

  const toggleShatter = () => {
    setIsShattered((prev) => !prev);
  };

  return (
    <div className={`relative w-full group ${className || ""}`}>
      {/* Interactive Trigger Area */}
      <button
        type="button"
        onClick={toggleShatter}
        className="w-full block bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none"
        aria-label="Click to shatter or rearrange structure logo"
        suppressHydrationWarning
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 918.2 169.2"
          className="w-full h-auto overflow-visible select-none transition-transform duration-300 group-hover:scale-[1.008]"
        >
          {PATHS.map((d, index) => {
            const transform = SCATTER_TRANSFORMS[index] || {
              x: 0,
              y: 0,
              r: 0,
              s: 1,
              delay: 0,
            };

            const scatterStyle: React.CSSProperties = isShattered
              ? {
                  transform: `translate(${transform.x}px, ${transform.y}px) rotate(${transform.r}deg) scale(${transform.s})`,
                  opacity: 0.85,
                  filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.35))",
                  fill: index % 3 === 0 ? "#B9B36D" : "#000000",
                  transition: `transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${transform.delay}ms, opacity 0.5s ease-out, fill 0.6s ease-out, filter 0.6s ease-out`,
                  transformOrigin: "center center",
                  transformBox: "fill-box",
                }
              : {
                  transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                  opacity: 1,
                  filter: "none",
                  fill: "#000000",
                  transition: `transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 24}ms, opacity 0.4s ease-in, fill 0.4s ease-in`,
                  transformOrigin: "center center",
                  transformBox: "fill-box",
                };

            return (
              <path
                key={index}
                d={d}
                style={scatterStyle}
                className="transition-all"
              />
            );
          })}
        </svg>

        {/* Dynamic Instruction Pill */}
        <div className="flex items-center justify-between mt-3 font-PPFraktionMono text-[10px] uppercase tracking-widest text-black/40 group-hover:text-black/80 transition-colors">
          <span className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                isShattered ? "bg-[#B9B36D] animate-ping" : "bg-black"
              }`}
            />
            {isShattered
              ? "Structure Deconstructed — Click to Re-Assemble"
              : "Click Structure to Scatter & Deconstruct"}
          </span>
          <span className="hidden sm:inline">Interactive Vector Physics</span>
        </div>
      </button>
    </div>
  );
}
