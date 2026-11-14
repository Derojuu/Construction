import React from "react";
import Image from "next/image";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";

export function IntroSection() {
  const introWords = [
    "Through",
    "thoughtful",
    "design,",
    "clear",
    "communication",
    "and",
    "lateral",
    "thinking,",
    "we",
    "turn",
    "complex",
    "challenges",
    "into",
    "elegant,",
    "buildable",
    "solutions.",
    "Specialists",
    "in",
    "structural",
    "engineering",
    "in",
    "Sydney,",
    "we",
    "work",
    "across",
    "a",
    "diverse",
    "range",
    "of",
    "industries",
    "from",
    "residential",
    "to",
    "commercial,",
    "remedial,",
    "government,",
    "and",
    "art.",
  ];

  return (
    <section
      className="section section-intro section-2 background-color-background-grey pt-16 md:pt-28 pb-16 md:pb-28 border-b border-black/10"
      data-section-background-color="background-color-background-grey"
    >
      {/* Animated Paragraph Headline */}
      <div className="animated-intro mb-16 md:mb-24">
        <div className="content max-w-4xl">
          <p className="h3 homepage-intro__intro heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.25] tracking-tight text-black">
            {introWords.map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* CREATIVITY --- PRACTICALITY line banner */}
      <div className="homepage-intro__heading border-t border-black pt-3 flex justify-between items-center text-xs sm:text-sm font-PPFraktionMono uppercase tracking-widest text-black mb-12 md:mb-20">
        <span>CREATIVITY</span>
        <span>PRACTICALITY</span>
      </div>

      {/* Two Column Spread: Body text left + Media photo right */}
      <div className="spread flex flex-col md:flex-row md:items-end justify-between gap-12 lg:gap-16">
        <div className="homepage-intro__body md:w-[42%] lg:w-[38%] space-y-6">
          <div className="font-PPFraktionMono text-xs sm:text-sm leading-relaxed text-black/90 space-y-4">
            <p className="m-0">
              Engineers are often seen as rigid, overly cautious, and disconnected from design and functionality; that’s why we do things differently. At Structure, creativity and practicality coexist.
            </p>
            <p className="m-0">
              We have set out to create a structural engineering business where engineering isn’t about shutting down ideas but rather unlocking them, where technical excellence is matched with lateral thinking, strong design, and functionality.
            </p>
            <p className="m-0">
              Our team brings energy, adaptability, and insight to every project, working alongside architects, builders, and clients to realise their vision without compromise. Clear communication comes first, and a passion for collaboration. It’s this mindset that makes documentation clearer and outcomes stronger.
            </p>
          </div>

          <div className="buttons pt-4">
            <ButtonWithArrow href="https://structureengineering.com.au/structural-engineer-consultants/">
              Find out more
            </ButtonWithArrow>
          </div>
        </div>

        <div className="homepage-intro__media md:w-[54%] lg:w-[58%] relative min-h-[300px] sm:min-h-[420px] lg:min-h-[500px] rounded-xs overflow-hidden">
          <Image
            src="/images/intro-media.webp"
            alt="Structure Consulting Engineers Bay House Architecture"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
