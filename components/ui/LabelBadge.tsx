import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export interface LabelBadgeProps {
  label: string;
  href?: string;
  sectorId?: number | string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function LabelBadge({
  label,
  href,
  sectorId,
  active,
  onClick,
  className,
}: LabelBadgeProps) {
  const combinedClass = cn(
    "label-style",
    active && "bg-white text-black border-white dark:bg-black dark:text-white",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          data-sector={sectorId}
          onClick={onClick}
          className={combinedClass}
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        href={href}
        data-sector={sectorId}
        onClick={onClick}
        className={combinedClass}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      data-sector={sectorId}
      onClick={onClick}
      className={combinedClass}
      suppressHydrationWarning
    >
      {label}
    </button>
  );
}
