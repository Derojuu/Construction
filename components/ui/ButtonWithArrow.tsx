"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export interface ButtonWithArrowProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "reverse" | "transparent";
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export function ButtonWithArrow({
  children,
  href,
  onClick,
  type = "button",
  variant = "default",
  className,
  target,
  rel,
  disabled = false,
}: ButtonWithArrowProps) {
  const variantClass = {
    default: "",
    reverse: "reverse",
    transparent: "transparent",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      <i aria-hidden="true" />
    </>
  );

  const combinedClass = cn("btn-with-arrow", variantClass, className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={combinedClass}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      suppressHydrationWarning
    >
      {content}
    </button>
  );
}
