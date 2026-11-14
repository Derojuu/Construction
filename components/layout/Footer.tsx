import React from "react";
import {
  FOOTER_NAVIGATE_LINKS,
  FOOTER_FOLLOW_LINKS,
  FOOTER_CONTACT_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/constants/navigation";
import { SITE_METADATA } from "@/constants/site";
import { ShatterLogo } from "@/components/ui/ShatterLogo";

export function Footer() {
  return (
    <footer
      className="section main-footer relative bg-[#F5F5F5] text-black pt-12 md:pt-24 lg:pt-36 pb-8 border-t border-black/10"
      data-section-background-color="background-color-background-grey"
    >
      {/* Top absolute metadata row on larger screens */}
      <div className="lg:absolute lg:top-8 lg:left-6 lg:right-6 flex flex-col lg:flex-row justify-between text-xs font-PPFraktionMono uppercase tracking-wider mb-8 lg:mb-0 gap-4">
        <p className="copyright m-0 max-w-sm">{SITE_METADATA.copyright}</p>
        <p className="acknowledge m-0 max-w-xl text-black/80">
          {SITE_METADATA.acknowledgement}
        </p>
      </div>

      {/* 4 Navigation columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8 md:my-16 w-full">
        {/* Navigate */}
        <div className="footer-links">
          <h2 className="heading font-PPFraktionMono text-xs uppercase tracking-widest text-black/60 mb-4">
            Navigate
          </h2>
          <ul id="menu-navigate" className="m-0 p-0 list-none space-y-2 font-PPFraktionMono text-sm uppercase">
            {FOOTER_NAVIGATE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:underline hover:opacity-70 transition block py-0.5"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow */}
        <div className="footer-links">
          <h3 className="heading font-PPFraktionMono text-xs uppercase tracking-widest text-black/60 mb-4">
            Follow
          </h3>
          <ul id="menu-follow-1" className="m-0 p-0 list-none space-y-2 font-PPFraktionMono text-sm uppercase">
            {FOOTER_FOLLOW_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:opacity-70 transition block py-0.5"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div className="footer-links">
          <h4 className="heading font-PPFraktionMono text-xs uppercase tracking-widest text-black/60 mb-4">
            Get in touch
          </h4>
          <ul className="m-0 p-0 list-none space-y-2 font-PPFraktionMono text-sm uppercase">
            {FOOTER_CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:underline hover:opacity-70 transition block py-0.5 break-all sm:break-normal"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h5 className="heading font-PPFraktionMono text-xs uppercase tracking-widest text-black/60 mb-4">
            Legal
          </h5>
          <ul id="menu-legal" className="m-0 p-0 list-none space-y-2 font-PPFraktionMono text-sm uppercase">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  rel="privacy-policy"
                  className="hover:underline hover:opacity-70 transition block py-0.5"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive Brand Logo - Interactive Shatter & Re-assemble */}
      <div className="w-full my-8 md:my-14 overflow-visible">
        <ShatterLogo className="w-full" />
      </div>

      {/* Bottom Credit */}
      <div className="w-full flex justify-end pt-4">
        <a
          href={SITE_METADATA.credit.href}
          target="_blank"
          rel="noopener noreferrer"
          className="credit font-PPFraktionMono text-xs uppercase tracking-wider text-black/60 hover:text-black transition"
        >
          {SITE_METADATA.credit.label}
        </a>
      </div>
    </footer>
  );
}
