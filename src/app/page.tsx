import React from "react";
import { StudioHeroSection } from "@/components/studio/StudioHeroSection";
import { CapabilitiesMarquee } from "@/components/ui/CapabilitiesMarquee";
import { BeforeAfterSlider } from "@/components/edito/BeforeAfterSlider";
import { StudioServicesGrid } from "@/components/studio/StudioServicesGrid";
import { StudioProductionEngine } from "@/components/studio/StudioProductionEngine";
import { StudioComparisonMatrix } from "@/components/studio/StudioComparisonMatrix";
import { StudioReelVault } from "@/components/studio/StudioReelVault";
import { StudioTestimonials } from "@/components/studio/StudioTestimonials";
import { StudioPricingMatrix } from "@/components/studio/StudioPricingMatrix";
import { StudioFAQ } from "@/components/studio/StudioFAQ";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B]">
      {/* 1. HERO SECTION (Warm ivory, serif italic, Mac browser frame) */}
      <StudioHeroSection />

      {/* 2. SUBTLE TICKER */}
      <CapabilitiesMarquee variant="editorial" />

      {/* 3. BEFORE / AFTER SLIDER (Reference 2: Raw vs Graded with gold handle & checklist) */}
      <BeforeAfterSlider />

      {/* 4. OUR SERVICES ASYMMETRIC CATALOG */}
      <StudioServicesGrid />

      {/* 5. 4-STEP PRODUCTION PIPELINE (Reference 3: White cards with gradient squircles) */}
      <StudioProductionEngine />

      {/* 6. DARK CONTRAST COMPARISON SECTION (Reference 5: Obsidian background, The Old Way vs Membership) */}
      <StudioComparisonMatrix />

      {/* 7. THE VAULT (26 Real Portfolio Reels with Play Modal & View Badges) */}
      <StudioReelVault />

      {/* 8. VERIFIED BRAND STORIES & TESTIMONIALS */}
      <StudioTestimonials />

      {/* 9. TRANSPARENT RETAINERS SPEC SHEET */}
      <StudioPricingMatrix />

      {/* 10. STUDIO FAQ ACCORDION */}
      <StudioFAQ />

      {/* 11. CLOSING HIGH-IMPACT CONVERSION BANNER */}
      <StudioConversionCTA />
    </div>
  );
}
