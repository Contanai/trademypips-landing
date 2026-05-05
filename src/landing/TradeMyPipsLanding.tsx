import { LandingNav } from "@/landing/sections/LandingNav";
import { LandingHero } from "@/landing/sections/LandingHero";
import { LandingTrustStrip } from "@/landing/sections/LandingTrustStrip";
import { LandingTestimonials } from "@/landing/sections/LandingTestimonials";
import { LandingBenefits } from "@/landing/sections/LandingBenefits";
import { LandingPricing } from "@/landing/sections/LandingPricing";
import { LandingStrategy } from "@/landing/sections/LandingStrategy";
import { LandingHowItWorks } from "@/landing/sections/LandingHowItWorks";
import { LandingPropFirms } from "@/landing/sections/LandingPropFirms";
import { LandingFAQ } from "@/landing/sections/LandingFAQ";
import { LandingFinalCTA } from "@/landing/sections/LandingFinalCTA";
import { LandingFooter } from "@/landing/sections/LandingFooter";

export function TradeMyPipsLanding() {
  return (
    <div className="dark min-h-screen overflow-x-hidden bg-background font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <LandingNav />
      <main>
        <LandingHero />
        <LandingTrustStrip />
        <LandingTestimonials />
        <LandingBenefits />
        <LandingPricing />
        <LandingStrategy />
        <LandingHowItWorks />
        <LandingPropFirms />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
