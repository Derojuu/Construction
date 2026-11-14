import { NavLink } from "@/types";

export const MAIN_NAV_ITEMS: NavLink[] = [
  {
    label: "About",
    href: "https://structureengineering.com.au/structural-engineer-consultants/",
    children: [
      {
        label: "Company",
        href: "https://structureengineering.com.au/structural-engineer-consultants/",
      },
      {
        label: "Careers",
        href: "https://structureengineering.com.au/careers-structural-engineering-jobs/",
      },
    ],
  },
  {
    label: "People",
    href: "https://structureengineering.com.au/people/",
  },
  {
    label: "Sectors",
    href: "#",
    children: [
      {
        label: "Residential",
        href: "https://structureengineering.com.au/sectors/residential-structural-engineers/",
      },
      {
        label: "Commercial",
        href: "https://structureengineering.com.au/sectors/commercial-structural-engineers/",
      },
      {
        label: "Public Art",
        href: "https://structureengineering.com.au/sectors/public-art-structural-engineers/",
      },
    ],
  },
  {
    label: "Projects",
    href: "https://structureengineering.com.au/structural-engineering-projects/",
  },
  {
    label: "Journal",
    href: "https://structureengineering.com.au/journal/",
  },
  {
    label: "Awards",
    href: "https://structureengineering.com.au/awards/",
  },
  {
    label: "Contact",
    href: "https://structureengineering.com.au/contact/",
  },
];

export const FOOTER_NAVIGATE_LINKS: NavLink[] = [
  { label: "People", href: "https://structureengineering.com.au/people/" },
  { label: "About", href: "https://structureengineering.com.au/structural-engineer-consultants/" },
  { label: "Projects", href: "https://structureengineering.com.au/structural-engineering-projects/" },
  { label: "Awards", href: "https://structureengineering.com.au/awards/" },
];

export const FOOTER_FOLLOW_LINKS: NavLink[] = [
  { label: "Instagram", href: "http://instagram.com/structure_eng" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/structure-consulting-engineers/" },
];

export const FOOTER_CONTACT_LINKS: NavLink[] = [
  { label: "INFO@STRUCTUREengineering.com.au", href: "mailto:INFO@STRUCTUREengineering.com.au" },
  { label: "(02) 9810 3838", href: "tel:(02)98103838" },
  { label: "Project enquiry", href: "https://structureengineering.com.au/contact/" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "https://structureengineering.com.au/privacy-policy/" },
];
