import type { Metadata } from "next";
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";
import { QuoteContent } from "@/components/sections/QuoteContent";
import { ShieldCheck, Phone, Clock, Calculator } from "lucide-react";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Get a Free Window Tint Quote in 60 Seconds | FX Window Tint Houston",
  description:
    "Fast, free estimate for ceramic window tinting, windshield protection, Tesla tint, car audio, and Viper remote start in Houston, TX. No obligation. Call (832) 768-6256.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Request a Free Window Tint Quote | FX Window Tint Houston",
    description:
      "Get a quick quote estimate for your vehicle. Starting at $250 for ceramic heat shield window tinting.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Dedicated Page Hero Banner with Automotive Background */}
        <section className="bg-[#050B16] text-white py-16 lg:py-24 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1920&auto=format&fit=crop"
              alt="Luxury vehicle interior and window tinting estimate"
              fill
              priority
              className="object-cover object-center opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B16] via-[#050B16]/90 to-[#050B16]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-transparent" />
          </div>
          <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-black/60 border border-white/20 text-[#E10000] text-xs font-black uppercase tracking-widest font-display mb-6">
                <Calculator className="w-3.5 h-3.5" />
                <span>FAST & TRANSPARENT ESTIMATES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display mb-6">
                Request a Free Quote <br />
                <span className="text-[#E10000]">In Under 60 Seconds</span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-8 max-w-3xl">
                Select your service, tell us your vehicle type, and receive a customized quote from our Houston team. No pushy sales tactics or obligations.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[#94A3B8] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#E10000]" />
                  100% Free & No Obligation
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-[#E10000]" />
                  Fast Same-Day Turnaround
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4 text-[#E10000]" />
                  Direct Phone: {businessInfo.phoneDisplay}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Quote Form */}
        <Suspense
          fallback={
            <div className="py-24 text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#E10000] mx-auto mb-4" />
              <p className="text-sm font-bold text-[#64748B] uppercase font-display">
                Loading Quote Estimator...
              </p>
            </div>
          }
        >
          <QuoteContent />
        </Suspense>
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}
