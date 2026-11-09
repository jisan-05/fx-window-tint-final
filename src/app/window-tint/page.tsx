import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";

import { CeramicTint } from "@/components/sections/CeramicTint";
import { HeatShieldCalculator } from "@/components/sections/HeatShieldCalculator";
import { TintComparison } from "@/components/sections/TintComparison";
import { ShadeSelector } from "@/components/sections/ShadeSelector";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ShieldCheck, Flame, Sun, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ceramic Window Tinting Houston, TX | Up to 90%+ IR Rejection | FX Window Tint",
  description:
    "Protect your vehicle from the Texas heat with advanced nano-ceramic window tinting. High infrared heat rejection, 99% UV protection, zero signal interference, and defroster-safe installation in Houston.",
  alternates: {
    canonical: "/window-tint",
  },
  openGraph: {
    title: "Ceramic Window Tinting Houston | FX Window Tint",
    description:
      "Block up to 90%+ infrared heat. Nano-ceramic window tint engineered for Texas heat on cars, trucks, SUVs, and Tesla vehicles.",
    url: "/window-tint",
  },
};

export default function WindowTintPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Dedicated Page Hero Header with Cinematic Automotive Background */}
        <section className="bg-[#050B16] text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop"
              alt="Ceramic window tinting on high performance vehicle"
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
                <Flame className="w-3.5 h-3.5" />
                <span>HOUSTON CERAMIC WINDOW TINT SPECIALISTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display mb-6">
                Automotive Window Tinting. <br />
                <span className="text-[#E10000]">Engineered For Texas Heat.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-8 max-w-3xl">
                Block up to 90%+ infrared heat, eliminate dangerous sun glare, and safeguard your interior with high-performance nano-ceramic film installed by experienced technicians at FX Window Tint.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/quote?service=Ceramic%20Tint%20Heat%20Shield%20Protection">
                  <Button size="lg" variant="primary" className="font-display">
                    <span>GET A TINT QUOTE</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] hover:bg-slate-100 font-black text-xs uppercase tracking-wider font-display transition-colors"
                >
                  Call {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Main Ceramic Tint Showcase */}
        <CeramicTint />

        {/* 2. Interactive Heat Rejection Impact Test */}
        <HeatShieldCalculator />

        {/* 3. Ceramic vs Carbon vs Dyed Tint Comparison */}
        <TintComparison />

        {/* 4. Interactive Shade Darkness Selector */}
        <ShadeSelector />

        {/* 5. Texas Window Tint Laws & Guidelines Section */}
        <section className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
                TEXAS DPS COMPLIANCE
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#050B16] uppercase font-display">
                Texas Window Tint Law Regulations
              </h2>
              <div className="w-16 h-1 bg-[#E10000] mt-3 mb-4" />
              <p className="text-[#64748B]">
                Stay 100% road-legal while maximizing heat rejection. Here is what Texas law requires for passing state vehicle inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] block mb-2 font-display">
                  Front Side Windows
                </span>
                <h3 className="text-2xl font-black text-[#050B16] uppercase font-display mb-3">
                  25% Minimum VLT
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  The driver and front passenger windows must allow at least 25% of visible light through. Our 30% and 35% ceramic films keep you safe and legal.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] block mb-2 font-display">
                  Rear Side & Back Glass
                </span>
                <h3 className="text-2xl font-black text-[#050B16] uppercase font-display mb-3">
                  Any Darkness (5%+)
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  If the vehicle has dual side mirrors, rear side windows and the back windshield can be tinted to any shade, including 20%, 15%, or 5% limo dark.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] block mb-2 font-display">
                  Windshield Eyebrow / AS-1
                </span>
                <h3 className="text-2xl font-black text-[#050B16] uppercase font-display mb-3">
                  Above AS-1 Line / Clear IR
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Sun visor strips can be installed above the factory AS-1 line. We also offer high-clarity 70% nano-ceramic full windshield film that blocks heat without darkening glass.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Window Tint FAQs */}
        <FAQ />

        {/* 7. Closing High-Impact CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

