export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

export type SectorFilter = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  image: string;
  sector?: string;
};

export type LatestWorkItem = {
  title: string;
  href: string;
  image: string;
  sector: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type SectionTheme =
  | "background-color-black"
  | "background-color-background-grey"
  | "background-color-white"
  | "background-color-gold";

export type EnquiryRole = "architect" | "project-manager" | "homeowner" | "other";

export type EnquiryFormValues = {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  roles: EnquiryRole[];
  referral: string;
  message: string;
  honeypot: string;
};
