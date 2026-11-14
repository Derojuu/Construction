"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV_ITEMS, FOOTER_CONTACT_LINKS } from "@/constants/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-top md:hidden fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <Link href="/" className="logo">
          <Image
            src="/images/mark.svg"
            alt="Structure Consulting Engineers"
            width={28}
            height={36}
            priority
          />
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 text-black hover:opacity-70 transition cursor-pointer"
          aria-label="Open mobile navigation"
          suppressHydrationWarning
        >
          <HugeiconsIcon icon={Menu01Icon} size={24} />
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black text-white p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className="filter invert">
              <Image
                src="/images/mark.svg"
                alt="Structure Consulting Engineers"
                width={32}
                height={40}
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 text-white hover:opacity-70 transition cursor-pointer"
            aria-label="Close mobile navigation"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={24} />
          </button>
        </div>

        <div className="py-8 space-y-4">
          <ul className="space-y-4 m-0 p-0 list-none">
            {MAIN_NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = expandedItem === item.label;

              return (
                <li key={item.label} className="border-b border-white/10 pb-3">
                  {hasChildren ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between font-PPFraktionMono text-lg uppercase tracking-wider text-left text-white py-1 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm">{isExpanded ? "−" : "+"}</span>
                      </button>
                      {isExpanded && item.children && (
                        <ul className="pl-4 pt-2 space-y-2 list-none">
                          {item.children.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block font-PPFraktionMono text-sm uppercase tracking-wider text-white/80 hover:text-white py-1"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-PPFraktionMono text-lg uppercase tracking-wider text-white py-1 hover:text-[#B9B36D] transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-t border-white/20 pt-6 space-y-2 font-PPFraktionMono text-xs uppercase text-white/70">
          {FOOTER_CONTACT_LINKS.map((c) => (
            <div key={c.label}>
              <a href={c.href} className="hover:text-white transition">
                {c.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
