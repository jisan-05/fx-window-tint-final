import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";

import { Services } from "@/components/sections/Services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Wrench, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Automotive Services & Advertised Starting Prices | FX Window Tint Houston",
  description:
    "Explore our complete list of automotive services in Houston: Nano-Ceramic Window Tinting ($250), Tesla Tinting ($399), Windshield Tint ($180), Touchscreen Car Audio ($199), Viper Remote Start ($159), and Defroster-Safe Tint Removal ($20).",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Automotive Services & Transparent Starting Prices | FX Window Tint",
    description:
      "All 10 automotive services with upfront starting rates: Nano-ceramic tint, Tesla tinting, car audio, Apple CarPlay, and Viper alarms.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Dedicated Page Hero Banner with Automotive Background */}
        <section className="bg-[#050B16] text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
              alt="Automotive services and window tinting workshop"
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
                <Wrench className="w-3.5 h-3.5" />
                <span>COMPLETE AUTOMOTIVE SPECIALIST MENU</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display mb-6">
                All Services & <br />
                <span className="text-[#E10000]">Advertised Starting Prices</span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-8 max-w-3xl">
                We believe in fair, upfront pricing without hidden charges. Explore our 10 primary automotive services below, each with transparent starting rates and custom quote options.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/quote">
                  <Button size="lg" variant="primary" className="font-display">
                    <span>GET A FREE CUSTOM QUOTE</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] hover:bg-slate-100 font-black text-xs uppercase tracking-wider font-display transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E10000]" />
                  Call {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All 10 Services Display with Filter Tabs */}
        <Services />

        {/* Closing High-Impact CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

