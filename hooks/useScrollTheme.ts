"use client";

import { useEffect, useState } from "react";
import { SectionTheme } from "@/types";

export function useScrollTheme() {
  const [activeTheme, setActiveTheme] = useState<SectionTheme>("background-color-black");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[data-section-background-color]");
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          const theme = section.getAttribute("data-section-background-color") as SectionTheme;
          if (theme) {
            setActiveTheme(theme);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeTheme;
}
