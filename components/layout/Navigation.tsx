"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";

export function Navigation() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="top-nav font-PPFraktionMono" aria-label="Main Navigation">
      <Link href="/" className="logo mr-6 block transition-opacity hover:opacity-80">
        <Image
          src="/images/mark.svg"
          alt="Structure Consulting Engineers"
          width={37}
          height={48}
          priority
        />
      </Link>
      <ul id="menu-main" className="flex items-center">
        {MAIN_NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          return (
            <li
              key={item.label}
              className={`relative ${hasChildren ? "menu-item-has-children" : ""}`}
              onMouseEnter={() => hasChildren && setOpenSubmenu(item.label)}
              onMouseLeave={() => hasChildren && setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className="inline-block px-5 py-2 rounded-xs font-PPFraktionMono text-xs uppercase tracking-wider text-black bg-white transition hover:bg-black hover:text-white"
              >
                {item.label}
              </Link>

              {hasChildren && item.children && (
                <ul
                  className={`sub-menu absolute top-full left-0 min-w-[14.2em] bg-black text-white p-1 rounded-xs transition-all duration-300 ${
                    openSubmenu === item.label
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-2"
                  }`}
                >
                  {item.children.map((sub) => (
                    <li key={sub.label} className="mt-1 first:mt-0 w-full block">
                      <Link
                        href={sub.href}
                        className="block w-full px-4 py-2 font-PPFraktionMono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black transition"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
