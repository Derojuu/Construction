"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building3DAnimation } from "@/components/ui/Building3DAnimation";

export function MethodologySpreadSection() {
  const [viewMode, setViewMode] = useState<"3d" | "2d">("3d");

  return (
    <section
      className="section section-spread section-4 layout-media-left-23 bg-white text-black py-16 md:py-28 border-b border-black/10"
      data-section-background-color="background-color-white"
    >
      <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-end gap-12 lg:gap-16 w-full">
        {/* Column 1: Text Content */}
        <div className="column_1 md:w-[42%] lg:w-[38%] space-y-6">
          <h2 className="spread__heading h2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.05] tracking-tight text-black m-0 mb-6">
            Do it once. <br />
            Do it right.
          </h2>

          <p className="lead text-base sm:text-lg md:text-xl font-normal leading-relaxed text-black/90 m-0">
            Our difference lies in how we think, not just what we draw. We analyse deeper, communicate clearly and prioritise collaboration. The result? Projects that flow seamlessly from design to construction. We see structural engineering as an integral part of design, not a barrier to it.
          </p>

          <div className="spread__body font-PPFraktionMono text-xs sm:text-sm leading-relaxed text-black/80 space-y-4 pt-2">
            <p className="m-0">
              By working collaboratively and understanding all aspects, we help to refine and simplify structural engineering solutions, often saving significant time and cost during the build. Our designs are grounded in research and shaped by creativity and functionality. Every decision from concept to construction detailing is guided by our core principle: clarity creates confidence.
            </p>
            <p className="m-0">
              It’s about being proactive, not reactive. Our staff are approachable and fully engaged throughout every stage of the project. We don’t hesitate to ask questions, to communicate what’s required. We care about getting it right, not just for the architect or the builder, but also for the client.
            </p>
          </div>
        </div>

        {/* Column 2: 3D Building Simulation & Architectural Line Drawing Graphic */}
        <div className="column_2 md:w-[54%] lg:w-[58%] w-full flex flex-col items-center">
          {/* View Toggle Bar */}
          <div className="w-full max-w-2xl flex justify-between items-center mb-3">
            <span className="font-PPFraktionMono text-[11px] uppercase tracking-wider text-black/50">
              Structural Geometry
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setViewMode("3d")}
                className={`px-3 py-1 font-PPFraktionMono text-xs uppercase tracking-wider border transition-colors rounded-xs cursor-pointer ${
                  viewMode === "3d"
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/20 hover:border-black"
                }`}
                suppressHydrationWarning
              >
                3D Model
              </button>
              <button
                type="button"
                onClick={() => setViewMode("2d")}
                className={`px-3 py-1 font-PPFraktionMono text-xs uppercase tracking-wider border transition-colors rounded-xs cursor-pointer ${
                  viewMode === "2d"
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black/20 hover:border-black"
                }`}
                suppressHydrationWarning
              >
                2D Drawing
              </button>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] max-w-2xl">
            {viewMode === "3d" ? (
              <Building3DAnimation />
            ) : (
              <div className="relative w-full h-full bg-[#f8f8f8] border border-black/10 rounded-xs overflow-hidden">
                <Image
                  src="/images/line-drawing.png"
                  alt="Structure Engineering Architectural Isometric Line Drawing"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-contain p-4"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
