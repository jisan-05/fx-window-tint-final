import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";

import { Hero } from "@/components/sections/Hero";
import { TrustCredibility } from "@/components/sections/TrustCredibility";
import { CeramicTint } from "@/components/sections/CeramicTint";
import { ShadeSelector } from "@/components/sections/ShadeSelector";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { BookingInquiry } from "@/components/sections/BookingInquiry";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Executive Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Cinematic Automotive Hero (Oversized Headline, Trust Pills, Instant CTAs) */}
        <Hero />

        {/* 4. Trust & Credibility Bar (285 Google Reviews, Defroster-Safe, IR Film) */}
        <TrustCredibility />

        {/* 5. Main Flagship Service — Ceramic Window Tint Showcase ($250 Starting) */}
        <CeramicTint />

        {/* 6. Interactive Window Tint Shade Selector (Interactive First Impression Wow Factor) */}
        <ShadeSelector />

        {/* 7. Core Automotive Services Preview (4 Flagships + Button to All 10 Services) */}
        <FeaturedServices />

        {/* 8. Why Choose FX Window Tint (Craftsmanship, Defroster Safety, Audio Brands) */}
        <WhyChooseUs />

        {/* 9. Verified Customer Reviews (Max 3 Reviews + Link to 285 Google Reviews) */}
        <Reviews />

        {/* 10. Quick Online Booking & Inquiry Form (End of Website Conversion Engine) */}
        <BookingInquiry />

        {/* 11. High-Impact Closing CTA Banner */}
        <FinalCTA />
      </main>

      {/* 12. Executive Dark Footer */}
      <Footer />

      {/* 12. Mobile Floating Quick Call & Quote Action Bar */}
      <MobileFloatingCTA />
    </div>
  );
}
