"use client";

import { useState, useEffect } from "react";

export interface UsePreloaderOptions {
  durationMs?: number;
}

export function usePreloader({ durationMs = 2200 }: UsePreloaderOptions = {}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGone(true);
      setIsPlaying(false);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs]);

  return {
    isPlaying,
    isGone,
  };
}
