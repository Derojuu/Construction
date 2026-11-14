import React from "react";
import Image from "next/image";

export function PhilosophySpreadSection() {
  return (
    <section
      className="section section-spread section-3 layout-background-media relative text-white min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-end py-16 md:py-24 overflow-hidden"
      data-section-background-color="background-color-black"
    >
      {/* Full-bleed background media with gradients */}
      <div className="media absolute inset-0 z-0">
        <Image
          src="/images/spread-bg.jpg"
          alt="Structure Consulting Engineers Architectural Philosophy"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60 z-[2]" />
      </div>

      {/* Content Columns */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-10 lg:gap-16">
        <div className="column_1 md:w-[48%]">
          <h2 className="spread__heading h2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.08] tracking-tight text-white m-0 max-w-xl">
            Not all structural engineering businesses think like we do
          </h2>
        </div>

        <div className="column_2 md:w-[48%] flex justify-end">
          <div className="spread__body font-PPFraktionMono text-xs sm:text-sm leading-relaxed text-white/90 max-w-md space-y-4">
            <p className="m-0">
              Whilst some structural engineering firms compete on price, we focus on value. We know that good engineering pays for itself. Our meticulous process and thorough documentation reduce the need for variations, redesign, and costly construction delays. Good, robust engineering starts long before the first line is drawn. It begins with understanding of the site, the design intent and the people involved.
            </p>
            <p className="m-0">
              Through our structural engineering services, we bring technical expertise and experience, creative problem-solving and intuitive design to every challenge. We ask why, not just how, ensuring the design performs structurally, whilst enhancing the architecture rather than dictating it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
