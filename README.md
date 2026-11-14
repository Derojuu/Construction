# Structure Consulting Engineers — Web Platform

A production-ready, pixel-perfect replication of the **Structure Consulting Engineers** website built with modern web technologies: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Three.js, and Hugeicons.

---

## 🏗️ Overview

This project translates the digital experience of Structure Consulting Engineers (Sydney, Australia) into a high-performance Next.js web application. It features bespoke typography, responsive layouts, dynamic filtering, interactive 3D simulations, and physics-driven vector animations.

## ✨ Key Features

- **Pixel-Perfect Architecture**: Recreated section-by-section adhering precisely to original typography (`SequelSans` & `PPFraktionMono`), color systems, spacing tokens, and responsive breakpoints.
- **Interactive 3D Architectural Simulation**: Real-time Three.js building visualization featuring interactive model modes (Structural Analysis, Wireframe, Full Render) and viewport orbit controls.
- **Vector Shatter & Re-assemble Physics**: Interactive footer brand mark powered by individual SVG vector paths that dynamically explode and re-assemble on click with staggered spring transitions.
- **Dynamic Project Showcase & Sector Filtering**: Live sector filtering (`All`, `Public art`, `Residential`, `Commercial`) with sticky sidebar and fluid scroll presentation.
- **Full-Featured Enquiry & RFP Form**: Multi-step form with role selection, file uploads, client-side validation, and honeypot anti-spam protection.
- **Bespoke Animated Preloader**: Staggered multi-layer preloader transition with brand overlay and session memory.
- **Mobile Navigation Drawer**: Responsive full-screen slide-out navigation powered by `@hugeicons/react`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [@hugeicons/react](https://hugeicons.com/) & `@hugeicons/core-free-icons@4.3.2`
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with metadata and font definitions
│   ├── page.tsx           # Assembled single-page application flow
│   └── globals.css        # Global CSS variables, font faces, and utilities
├── components/
│   ├── layout/            # Navigation, MobileNav, Preloader, and Footer
│   ├── sections/          # Modular page sections (Hero, Intro, Philosophy, etc.)
│   └── ui/                # Reusable UI primitives (Buttons, Badges, 3D Canvas, Shatter Logo)
├── constants/             # Nav links, project showcase datasets, and site metadata
├── hooks/                 # Custom hooks (preloader timers, scroll theme observers)
├── lib/                   # Utility helpers and form validation schemas
├── public/                # Static assets, fonts, vector logos, and photography
├── styles/                # Supplementary design tokens
└── types/                 # Shared TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and **pnpm** installed.

```bash
# Install pnpm if needed
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Derojuu/Construction.git
cd Construction

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
pnpm build
pnpm start
```

---

## 📄 License

Private / Commercial project reproduction.
