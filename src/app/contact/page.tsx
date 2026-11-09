import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileFloatingCTA } from "@/components/layout/MobileFloatingCTA";

import { LocationContact } from "@/components/sections/LocationContact";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MapPin, Phone, Clock, ArrowRight, Navigation } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Houston Shop Location | FX Window Tint Houston",
  description:
    "Visit FX Window Tint at 11649 TX-249 #600, Houston, TX 77086. Call (832) 768-6256 for ceramic window tinting, car audio upgrades, and alarms. Walk-ins and appointments welcome.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Visit FX Window Tint — 11649 TX-249 #600, Houston, TX",
    description:
      "Conveniently located off TX-249 in Houston. Ceramic tinting, car audio, Viper alarms, and diagnostics. Call (832) 768-6256.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#050B16]">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Dedicated Page Hero Banner with Shop Location Background */}
        <section className="bg-[#050B16] text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1920&auto=format&fit=crop"
              alt="FX Window Tint shop and installation bay facility"
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
                <MapPin className="w-3.5 h-3.5" />
                <span>HOUSTON SHOP & SERVICE CENTER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-display mb-6">
                Visit Our Shop & <br />
                <span className="text-[#E10000]">Get in Touch</span>
              </h1>

              <p className="text-base sm:text-xl text-[#CBD5E1] leading-relaxed mb-8 max-w-3xl">
                Conveniently located off TX-249 in Northwest Houston. Stop by to view real film shade samples on glass or speak with our experienced technicians.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={businessInfo.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs uppercase tracking-wider font-display transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>

                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-white text-[#050B16] hover:bg-slate-100 font-black text-xs uppercase tracking-wider font-display transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E10000]" />
                  <span>CALL {businessInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <LocationContact />

        {/* FAQs Section */}
        <FAQ />

        {/* Closing High-Impact CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

