"use client";

import React from "react";
import Image from "next/image";
import { PRELOADER_SLIDES } from "@/constants/projects";
import { usePreloader } from "@/hooks/usePreloader";

export function Preloader() {
  const { isPlaying, isGone } = usePreloader({ durationMs: 2200 });

  if (isGone) return null;

  return (
    <div
      className={`preloader fixed inset-0 z-[999] bg-white transition-opacity duration-500 ${
        isPlaying ? "preloaderplaying" : ""
      }`}
      aria-hidden="true"
    >
      <div className="slides relative w-full h-full overflow-hidden">
        {PRELOADER_SLIDES.map((slide, index) => {
          const slideNumber = index + 1;
          const zIndex = 6 - slideNumber;
          return (
            <div
              key={slide.id}
              className={`slide slidein preloader-slide-${slideNumber}`}
              style={
                {
                  "--i": slideNumber,
                  zIndex,
                } as React.CSSProperties
              }
            >
              <div className="media relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={slideNumber <= 2}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
