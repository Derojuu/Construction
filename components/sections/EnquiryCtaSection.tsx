import React from "react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";

export function EnquiryCtaSection() {
  return (
    <section
      className="section section-cta section-7 background-color-gold py-16 md:py-28 bg-[#B9B36D] text-black"
      data-section-background-color="background-color-gold"
    >
      <div className="content flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 w-full">
        {/* Left Intro Column */}
        <div className="cta-intro lg:w-[45%] space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-normal leading-snug tracking-tight max-w-sm m-0">
            We work alongside the people shaping Australia’s built environment
          </h3>

          <div className="pt-4">
            <h1 className="block-heading h2 text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] uppercase font-bold tracking-tight leading-[0.95] m-0">
              <span className="block-heading__block bg-black text-white px-3 py-1 mr-2 mb-2 inline-block rounded-xs">
                Let&apos;s
              </span>
              <br />
              <span className="block-heading__block bg-black text-white px-3 py-1 mr-2 inline-block rounded-xs">
                collaborate
              </span>
              <span
                className="block-heading__arrow inline-block align-middle ml-2 w-10 sm:w-12 h-8 sm:h-10 relative"
                aria-hidden="true"
              >
                &nbsp;
              </span>
            </h1>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="cta-post__form lg:w-[53%] w-full">
          <p className="lead home-cta-lead text-base sm:text-lg md:text-xl font-normal leading-relaxed text-black/90 mb-10 max-w-xl">
            We work with leading architectural firms, developers, builders, and private clients who value detail, design integrity, and smooth project delivery. Whether you’re an architect looking for a like-minded collaborator, or a homeowner seeking confidence in your build, we bring clarity and craftsmanship to every stage of the structural engineering process.
          </p>

          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
