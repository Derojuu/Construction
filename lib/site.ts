import { SITE_METADATA } from "@/constants/site";

export function getSiteTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_METADATA.title;
  return `${pageTitle} | Structure Consulting Engineers`;
}

export function formatTelephoneLink(phone: string): string {
  return `tel:${phone.replace(/[^0-9]/g, "")}`;
}

export function formatEmailLink(email: string, subject?: string): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
