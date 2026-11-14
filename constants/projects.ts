import { HeroSlide, LatestWorkItem, Project, SectorFilter } from "@/types";

export const SECTOR_FILTERS: SectorFilter[] = [
  {
    label: "Public art",
    href: "https://structureengineering.com.au/structural-engineering-projects/?sector=10",
  },
  {
    label: "Residential",
    href: "https://structureengineering.com.au/structural-engineering-projects/?sector=6",
  },
  {
    label: "Commercial",
    href: "https://structureengineering.com.au/structural-engineering-projects/?sector=7",
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  { src: "/images/hero-1.webp", alt: "Structure Consulting Engineers Sydney Architecture" },
  { src: "/images/hero-2.webp", alt: "Structural Engineering Detail" },
  { src: "/images/hero-3.webp", alt: "Extraordinary Architecture Engineering" },
  { src: "/images/hero-4.jpg", alt: "Bondi House Engineering" },
  { src: "/images/hero-5.jpg", alt: "Mosman House Structural Design" },
  { src: "/images/hero-6.jpg", alt: "Ballingalla Main Project" },
];

export const LATEST_WORK_ITEMS: LatestWorkItem[] = [
  {
    title: "Northbridge House II",
    href: "https://structureengineering.com.au/project/northbridge-house-two/",
    image: "/images/latest-northbridge.jpg",
    sector: "Residential",
  },
  {
    title: "Castlecrag House",
    href: "https://structureengineering.com.au/project/castlecrag-house/",
    image: "/images/project-castlecrag.jpg",
    sector: "Residential",
  },
  {
    title: "Marrickville House",
    href: "https://structureengineering.com.au/project/marrickville-house/",
    image: "/images/latest-marrickville.jpg",
    sector: "Residential",
  },
];

export const PRELOADER_SLIDES = [
  { id: 1, src: "/images/preloader-1.jpg", alt: "Preloader 1" },
  { id: 2, src: "/images/preloader-2.webp", alt: "Preloader 2" },
  { id: 3, src: "/images/preloader-3.webp", alt: "Preloader 3" },
  { id: 4, src: "/images/preloader-4.webp", alt: "Preloader 4" },
  { id: 5, src: "/images/preloader-5.webp", alt: "Preloader 5" },
];

export const SHOWCASE_PROJECTS: Project[] = [
  {
    title: "Picton Smart Hub",
    slug: "tahmoor-sports-complex",
    image: "/images/project-picton.jpg",
    sector: "Commercial",
  },
  {
    title: "Redfern Community Centre",
    slug: "redfern-community-centre",
    image: "/images/project-redfern-cc.jpg",
    sector: "Public Art",
  },
  {
    title: "Habilis Housing",
    slug: "habilis-housing",
    image: "/images/project-habilis-dl.jpg",
    sector: "Residential",
  },
  {
    title: "Marrickville House",
    slug: "marrickville-house",
    image: "/images/project-marrickville.jpg",
    sector: "Residential",
  },
  {
    title: "Outposts",
    slug: "outposts",
    image: "/images/project-outposts.jpg",
    sector: "Public Art",
  },
  {
    title: "Mort Bay Lookout",
    slug: "mort-bay-lookout",
    image: "/images/project-mort-bay.jpg",
    sector: "Public Art",
  },
  {
    title: "Seddon Park Amenities",
    slug: "seddon-park-amenities",
    image: "/images/project-seddon.jpg",
    sector: "Commercial",
  },
  {
    title: "Bondi House II",
    slug: "bondi-house-two",
    image: "/images/project-bondi-ii.jpg",
    sector: "Residential",
  },
  {
    title: "Pinnacle Park",
    slug: "pinnacle-park",
    image: "/images/project-pinnacle.jpg",
    sector: "Public Art",
  },
  {
    title: "Redfern House",
    slug: "redfern-house",
    image: "/images/project-redfern-house.jpg",
    sector: "Residential",
  },
  {
    title: "Camden Public Art Trail",
    slug: "camden-public-art-trail",
    image: "/images/project-camden.jpg",
    sector: "Public Art",
  },
  {
    title: "Bird Pole",
    slug: "bird-pole",
    image: "/images/project-bird.jpg",
    sector: "Public Art",
  },
  {
    title: "Curl Curl House II",
    slug: "curl-curl-house-two",
    image: "/images/project-curl-curl.jpg",
    sector: "Residential",
  },
  {
    title: "Paddington House",
    slug: "paddington-house-2",
    image: "/images/project-paddington.jpg",
    sector: "Residential",
  },
  {
    title: "Castle Cove House",
    slug: "castle-cove-house",
    image: "/images/project-castle-cove.jpg",
    sector: "Residential",
  },
  {
    title: "Old Bega Hospital",
    slug: "old-bega-hospital",
    image: "/images/project-bega.jpg",
    sector: "Commercial",
  },
  {
    title: "Spring Farm Community",
    slug: "spring-farm-playground",
    image: "/images/project-spring-farm.jpg",
    sector: "Public Art",
  },
  {
    title: "Castlecrag House II",
    slug: "castlecrag-house-two",
    image: "/images/project-castlecrag-ii.jpg",
    sector: "Residential",
  },
  {
    title: "Spin Art Installation",
    slug: "spin-art",
    image: "/images/project-spin.jpg",
    sector: "Public Art",
  },
  {
    title: "Tahmoor Sports Complex",
    slug: "tahmoor-sports-complex-facility",
    image: "/images/project-tahmoor.jpg",
    sector: "Commercial",
  },
];
