"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SHOWCASE_PROJECTS, SECTOR_FILTERS } from "@/constants/projects";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import { LabelBadge } from "@/components/ui/LabelBadge";

export function ProjectScrollSection() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const filteredProjects = selectedSector
    ? SHOWCASE_PROJECTS.filter(
        (p) => p.sector?.toLowerCase() === selectedSector.toLowerCase()
      )
    : SHOWCASE_PROJECTS;

  return (
    <section
      className="section section-projectscroll section-5 background-color-background-grey pt-16 md:pt-24 pb-24 md:pb-36 border-b border-black/10 relative"
      data-section-background-color="background-color-background-grey"
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 xl:gap-8 w-full">
        {/* Left Sticky Column */}
        <div className="project-scroll-intro xl:w-[38%] 2xl:w-[42%] xl:sticky xl:top-28 xl:self-start space-y-8 py-2">
          <div>
            <h2 className="project-scroll__heading h2 text-4xl sm:text-5xl lg:text-6xl text-black m-0 tracking-tight leading-none mb-4">
              Our work
            </h2>
          </div>

          <div className="space-y-6">
            <p className="project-scroll__footer lead text-base sm:text-lg text-black/80 max-w-sm m-0">
              Explore our breadth of work showcasing the depth of our approach and our dedication to structure.
            </p>

            <div className="buttons flex flex-wrap gap-2 pt-1">
              <LabelBadge
                label="All"
                active={selectedSector === null}
                onClick={() => setSelectedSector(null)}
              />
              {SECTOR_FILTERS.map((s) => (
                <LabelBadge
                  key={s.label}
                  label={s.label}
                  active={selectedSector === s.label}
                  onClick={() =>
                    setSelectedSector((prev) => (prev === s.label ? null : s.label))
                  }
                />
              ))}
            </div>

            <div className="pt-2">
              <ButtonWithArrow href="https://structureengineering.com.au/structural-engineering-projects/">
                View all
              </ButtonWithArrow>
            </div>
          </div>
        </div>

        {/* Right Project Cards Column */}
        <div className="project-cards xl:w-[60%] 2xl:w-[56%] xl:border-l xl:border-black/20 xl:pl-8 space-y-4">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="project-card group relative flex flex-col md:flex-row justify-between items-start md:items-center p-4 sm:p-6 border border-black/10 hover:border-black bg-white hover:bg-black transition-colors duration-300 rounded-xs overflow-hidden cursor-pointer"
            >
              <div className="heading md:w-60 mb-4 md:mb-0">
                <span className="font-PPFraktionMono text-[10px] uppercase tracking-widest text-black/50 group-hover:text-white/50 block mb-1">
                  {project.sector || "Project"}
                </span>
                <h2 className="h4 text-base sm:text-lg font-semibold uppercase tracking-wider text-black group-hover:text-white m-0 leading-tight">
                  {project.title}
                </h2>
              </div>

              <div className="media-wrap relative w-full md:w-[calc(100%-16rem)] aspect-[16/10] overflow-hidden rounded-xs bg-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Centered Button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ButtonWithArrow
                    href={`https://structureengineering.com.au/project/${project.slug}/`}
                    variant="reverse"
                    className="shadow-lg"
                  >
                    View Project
                  </ButtonWithArrow>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
