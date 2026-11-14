import { Preloader } from "@/components/layout/Preloader";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PhilosophySpreadSection } from "@/components/sections/PhilosophySpreadSection";
import { MethodologySpreadSection } from "@/components/sections/MethodologySpreadSection";
import { ProjectScrollSection } from "@/components/sections/ProjectScrollSection";
import { FeatureProjectSection } from "@/components/sections/FeatureProjectSection";
import { EnquiryCtaSection } from "@/components/sections/EnquiryCtaSection";

export default function Home() {
  return (
    <>
      {/* Site Preloader */}
      <Preloader />

      {/* Global Navigation */}
      <Navigation />
      <MobileNav />

      {/* Main Page Flow */}
      <main className="w-full flex-1">
        <HeroSection />
        <IntroSection />
        <PhilosophySpreadSection />
        <MethodologySpreadSection />
        <ProjectScrollSection />
        <FeatureProjectSection />
        <EnquiryCtaSection />
      </main>

      {/* Main Footer */}
      <Footer />
    </>
  );
}
