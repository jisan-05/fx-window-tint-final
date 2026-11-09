import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";

import { Gallery } from "@/components/sections/Gallery";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Camera, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Installation Gallery & Real Vehicles | FX Window Tint Houston",
  description:
    "View our recent installations in Houston: Nano-ceramic tint on trucks, SUVs, Tesla full-glass roofs, windshield heat shields, custom car audio setups, and clean shop bays.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Window Tint & Auto Electronics Installation Gallery | FX Window Tint",
    description:
      "Real customer vehicle photos: Ceramic window tinting, Tesla glass roofs, and touchscreen car audio installed in Northwest Houston.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Dedicated Page Hero Banner with Automotive Background */}
        <section className="bg-[#050B16] text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=1920&auto=format&fit=crop"
              alt="Installation showcase of finished tinted vehicles"
              fill
              priority
              className="object-cover object-center opacity-65"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B16]/90 via-[#050B16]/60 to-[#050B16]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16]/80 via-transparent to-transparent" />
          </div>
          <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-black/60 border border-white/20 text-[#E10000] text-xs font-black uppercase tracking-widest font-display mb-6">
                <Camera className="w-3.5 h-3.5" />
                <span>CUSTOMER VEHICLES & CRAFTSMANSHIP</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display mb-6">
                Our Work & <br />
                <span className="text-[#E10000]">Installation Gallery</span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-8 max-w-3xl">
                See real photographs of ceramic window tinting, Tesla glass roofs, touchscreen stereo systems, and finished customer vehicles completed at our Houston facility.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/quote">
                  <Button size="lg" variant="primary" className="font-display">
                    <span>GET A FREE QUOTE</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <a
                  href={businessInfo.googleMaps.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] hover:bg-slate-100 font-black text-xs uppercase tracking-wider font-display transition-colors"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>View 285 Google Reviews</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Full Gallery with Filter Tabs & Lightbox */}
        <Gallery />

        {/* Before & After Interactive Showcase */}
        <BeforeAfterShowcase />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Closing High-Impact CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

