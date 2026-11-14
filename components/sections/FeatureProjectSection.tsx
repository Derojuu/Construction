import React from "react";
import Image from "next/image";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";

export function FeatureProjectSection() {
  return (
    <section
      className="section section-featureproject section-6 background-color-black relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-black text-white overflow-hidden py-16"
      data-section-background-color="background-color-black"
    >
      {/* Background Architectural Photography with opacity 0.4 */}
      <div className="media absolute inset-0 z-0">
        <Image
          src="/images/feature-interloop.jpg"
          alt="Interloop Sydney Feature Project"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-[1]" />
      </div>

      {/* Floating/Sticky Content Bar */}
      <div className="media-link__content relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-b border-white/20 py-8 px-4 sm:px-8 bg-black/40 backdrop-blur-sm rounded-xs">
        <div>
          <h2 className="media-link__heading h4 text-xs font-PPFraktionMono uppercase tracking-widest text-white/60 m-0 mb-1">
            Feature project
          </h2>
          <p className="media-link__body font-PPFraktionMono text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider font-bold text-white m-0">
            Interloop
          </p>
        </div>

        <div>
          <ButtonWithArrow
            href="https://structureengineering.com.au/project/interloop/"
            variant="transparent"
          >
            Read more
          </ButtonWithArrow>
        </div>
      </div>
    </section>
  );
}
