"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_SLIDES, LATEST_WORK_ITEMS, SECTOR_FILTERS } from "@/constants/projects";
import { LabelBadge } from "@/components/ui/LabelBadge";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="section section-topbannerhome section-1 background-color-black relative min-h-screen flex flex-wrap items-end pb-8 overflow-hidden"
      data-section-background-color="background-color-black"
    >
      {/* Background Slideshow Swiper */}
      <div className="homepage_top_swiper absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="media absolute inset-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Overlay gradients matching CSS */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 z-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-2" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Overlay */}
      <div className="top-banner-home relative z-10 w-full text-white pt-32 sm:pt-40">
        <div className="top-banner-home__heading-wrap mb-12 lg:mb-16">
          <h1 className="top-banner-home__heading h2 max-w-[10.5em] text-white leading-[1.05] tracking-tight">
            A different approach <br />
            to traditional structural engineering
          </h1>
        </div>

        <div className="latest-work flex flex-col xl:flex-row xl:items-end justify-between gap-8 pt-4 border-t border-white/20">
          {/* Sector Links Column */}
          <div className="latest-work-links xl:w-[30%]">
            <h2 className="font-PPFraktionMono text-xs uppercase tracking-widest text-white/70 border-b border-white/30 pb-2 mb-4">
              See our work
            </h2>
            <div className="flex flex-wrap gap-2">
              {SECTOR_FILTERS.map((s) => (
                <LabelBadge
                  key={s.label}
                  label={s.label}
                  href={s.href}
                  className="!border-white !text-white hover:!bg-white hover:!text-black"
                />
              ))}
            </div>
          </div>

          {/* Latest Work Slider Column */}
          <div className="latest-work-slider xl:w-[65%]">
            <h2 className="font-PPFraktionMono text-xs uppercase tracking-widest text-white/70 border-b border-white/30 pb-2 mb-4">
              Latest work
            </h2>
            <div className="latest-work-slides-wrap overflow-x-auto pb-2 scrollbar-none">
              <div className="latest-work-slides">
                <ul className="flex gap-4 m-0 p-0 list-none">
                  {LATEST_WORK_ITEMS.map((item) => (
                    <li key={item.title} className="w-[75vw] sm:w-[45vw] lg:w-[280px] shrink-0">
                      <a
                        href={item.href}
                        className="latest-work-slide group flex bg-white text-black p-1 transition-all duration-300 hover:bg-black hover:text-white rounded-xs block overflow-hidden"
                      >
                        <div className="media relative w-1/2 min-h-[90px] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 40vw, 150px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="content w-1/2 p-3 flex flex-col justify-between">
                          <p className="font-PPFraktionMono text-[10px] uppercase tracking-wider text-black/60 group-hover:text-white/60 mb-1">
                            {item.sector}
                          </p>
                          <h3 className="h5 text-xs uppercase tracking-wider font-semibold m-0 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
