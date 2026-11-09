"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, Sparkles, Flame, Shield, Volume2, Wrench } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

type CategoryFilter = "popular" | "all" | "tint" | "audio" | "security";

export function FeaturedServices() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("popular");

  const filteredServices = servicesData.filter((s) => {
    if (activeCategory === "popular") {
      return (
        s.id === "ceramic-heat-shield" ||
        s.id === "tesla-ceramic-tint" ||
        s.id === "car-audio-upgrades" ||
        s.id === "viper-remote-start"
      );
    }
    if (activeCategory === "all") return true;
    if (activeCategory === "tint") return s.category === "tint";
    if (activeCategory === "audio") return s.category === "audio";
    if (activeCategory === "security") return s.category === "security" || s.category === "specialty";
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
              EASY AUTOMOTIVE SERVICE EXPLORER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
              Explore Our Services & Starting Prices
            </h2>
            <div className="w-16 h-1 bg-[#E10000] mt-4 mb-4" />
            <p className="text-base sm:text-lg text-[#64748B]">
              Browse our automotive packages below. Click any category tab to view options, features, and upfront starting prices.
            </p>
          </div>

          <Link href="/services" className="shrink-0">
            <Button size="md" variant="secondary" className="font-display">
              <span>VIEW FULL SERVICE MENU (10)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Quick Category Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("popular")}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
              activeCategory === "popular"
                ? "bg-[#E10000] text-white shadow-md scale-105"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            🔥 Most Popular (4)
          </button>
          <button
            onClick={() => setActiveCategory("tint")}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
              activeCategory === "tint"
                ? "bg-[#E10000] text-white shadow-md scale-105"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Ceramic & Dark Tint (4)
          </button>
          <button
            onClick={() => setActiveCategory("audio")}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
              activeCategory === "audio"
                ? "bg-[#E10000] text-white shadow-md scale-105"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Car Audio & 10" Tablets (2)
          </button>
          <button
            onClick={() => setActiveCategory("security")}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
              activeCategory === "security"
                ? "bg-[#E10000] text-white shadow-md scale-105"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Alarms, LED & Wiring (3)
          </button>
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
              activeCategory === "all"
                ? "bg-[#E10000] text-white shadow-md scale-105"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            All 10 Services
          </button>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between group ${
                service.isPrimary
                  ? "border-[#E10000] shadow-md ring-1 ring-[#E10000]/20"
                  : "border-[#E2E8F0] hover:border-[#CBD5E1]"
              }`}
            >
              <div>
                {/* Image & Price Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#050B16]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#E10000] text-white text-[10px] font-black uppercase tracking-wider font-display shadow-sm">
                      {service.badge}
                    </span>
                  )}

                  {service.isPrimary && (
                    <span className="absolute top-3 right-3 bg-[#E10000] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded font-display shadow-sm">
                      FLAGSHIP
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                    <span className="text-xs uppercase font-bold text-slate-300 font-display">Starting at</span>
                    <span className="text-2xl font-black text-white font-display">
                      ${service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#050B16] uppercase font-display group-hover:text-[#E10000] transition-colors mb-1.5 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#E10000] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dual Action Buttons (Quote & Call) */}
              <div className="p-6 pt-0 space-y-2">
                <Link
                  href={`/quote?service=${encodeURIComponent(service.name)}`}
                  className="block w-full"
                >
                  <Button
                    size="md"
                    variant={service.isPrimary ? "primary" : "secondary"}
                    className="w-full font-display text-xs uppercase"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>

                <a
                  href={businessInfo.phoneTel}
                  className="w-full py-2 px-3 rounded-md border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[11px] font-bold uppercase tracking-wider text-[#050B16] flex items-center justify-center gap-1.5 transition-colors font-display"
                >
                  <Phone className="w-3 h-3 text-[#E10000]" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Owner Credentials */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#050B16] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#E10000] text-xs font-black uppercase tracking-wider font-display">
              <Sparkles className="w-4 h-4" />
              <span>FX WINDOW TINT • OWNER'S QUALITY COMMITMENT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase font-display text-white">
              Need custom recommendations for your car, truck, or SUV?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Drop by our 11649 TX-249 shop in Houston or call our technicians directly for friendly advice and exact estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto font-display">
                <span>EXPLORE ALL SERVICES & PRICES</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>

            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] hover:bg-slate-100 font-black text-xs uppercase tracking-wider font-display transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E10000]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
