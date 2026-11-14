import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Structure Consulting Engineers | Structural Engineering Sydney",
  description:
    "Creative engineering for extraordinary architecture. Sydney structural engineering consultants specialising in residential, commercial, and public art structures.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
  openGraph: {
    title: "Structure Consulting Engineers | Structural Engineering Sydney",
    description:
      "Creative engineering for extraordinary architecture. Sydney structural engineering consultants specialising in residential, commercial, and public art structures.",
    url: "https://structureengineering.com.au",
    siteName: "Structure Consulting Engineers",
    locale: "en_AU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col font-SequelSans bg-[#F5F5F5] text-black antialiased selection:bg-black selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
