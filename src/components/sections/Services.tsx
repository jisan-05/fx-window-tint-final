"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Check,
  ArrowRight,
  Search,
  Phone,
  X,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { businessInfo } from "@/data/business";

interface ServicesProps {
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const filteredServices = servicesData.filter((service) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "tint" && service.category === "tint") ||
      (activeTab === "audio" && service.category === "audio") ||
      (activeTab === "security" && service.category === "security") ||
      (activeTab === "specialty" && service.category === "specialty");

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      service.name.toLowerCase().includes(query) ||
      service.shortDescription.toLowerCase().includes(query) ||
      service.features.some((f) => f.toLowerCase().includes(query));

    return matchesTab && matchesSearch;
  });

  const handleQuoteClick = (serviceName: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceName);
    }
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/quote?service=${encodeURIComponent(serviceName)}`);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E10000]" />
            TRANSPARENT ADVERTISED PRICING • HOUSTON, TX
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Our Automotive Services & Packages
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Professional nano-ceramic window tinting, high-end car stereo setups, 10" touchscreen radios, and automotive electronics installed with master precision at 11649 TX-249 #600, Houston.
          </p>

          <p className="text-xs text-[#94A3B8] mt-2 italic">
            *All listed rates are starting advertised prices. Vehicle model, glass count, product tier, and installation requirements affect final estimate.
          </p>
        </div>

        {/* Quick Pricing Glance Strip */}
        <div className="mb-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 mb-3 border-b border-[#E2E8F0]/80">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E10000]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#050B16] font-display">
                Quick Price Glance (Starting Rates)
              </span>
            </div>
            <span className="text-xs text-[#64748B]">
              Houston Walk-ins Welcome • Call{" "}
              <a href={businessInfo.phoneTel} className="font-bold text-[#E10000] hover:underline">
                {businessInfo.phoneDisplay}
              </a>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center">
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Ceramic Tint</span>
              <span className="text-sm font-black text-[#E10000] font-display">$250+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Tesla Tint</span>
              <span className="text-sm font-black text-[#050B16] font-display">$399+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Windshield</span>
              <span className="text-sm font-black text-[#050B16] font-display">$180+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Standard Tint</span>
              <span className="text-sm font-black text-[#050B16] font-display">$175+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">10" Screen Audio</span>
              <span className="text-sm font-black text-[#E10000] font-display">$199+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Viper Security</span>
              <span className="text-sm font-black text-[#050B16] font-display">$159+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">LED Headlights</span>
              <span className="text-sm font-black text-[#050B16] font-display">$59+</span>
            </div>
            <div className="bg-white rounded-lg p-2 border border-[#E2E8F0]">
              <span className="block text-[11px] text-[#64748B] font-medium truncate">Tint Removal</span>
              <span className="text-sm font-black text-[#050B16] font-display">$20+</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-12">
          {/* Live Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., Ceramic, Tesla, CarPlay, Subwoofer, Viper, LED, Removal)..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-[#CBD5E1] rounded-xl text-sm text-[#050B16] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#050B16] p-1 rounded-full hover:bg-[#F1F5F9] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === "all"
                  ? "bg-[#E10000] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              All Services (10)
            </button>
            <button
              onClick={() => setActiveTab("tint")}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === "tint"
                  ? "bg-[#E10000] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              Window Tinting (5)
            </button>
            <button
              onClick={() => setActiveTab("audio")}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === "audio"
                  ? "bg-[#E10000] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              Car Audio & Screens (2)
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === "security"
                  ? "bg-[#E10000] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              Remote Start & Alarms (1)
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === "specialty"
                  ? "bg-[#E10000] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              Lighting & Diagnostics (2)
            </button>
          </div>

          {/* Active Result Count */}
          <div className="text-center text-xs text-[#64748B]">
            Showing <strong className="text-[#050B16]">{filteredServices.length}</strong> of 10 automotive services
            {searchQuery && (
              <span> matching &ldquo;<strong className="text-[#E10000]">{searchQuery}</strong>&rdquo;</span>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#F8FAFC] rounded-2xl border border-dashed border-[#CBD5E1] max-w-xl mx-auto my-8">
            <p className="text-base font-bold text-[#050B16] mb-2 font-display">
              No matching services found
            </p>
            <p className="text-xs text-[#64748B] mb-6">
              We offer full custom automotive tinting, audio fabrication, and electrical diagnostics. Contact our shop directly for custom inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                className="px-5 py-2.5 rounded-md bg-[#050B16] text-white text-xs font-black uppercase tracking-wider font-display hover:bg-[#E10000] transition-colors"
              >
                Reset Search
              </button>
              <a
                href={businessInfo.phoneTel}
                className="px-5 py-2.5 rounded-md bg-[#E10000] text-white text-xs font-black uppercase tracking-wider font-display hover:bg-[#C50000] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call ({businessInfo.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const isFeatured = service.isPrimary;
            return (
              <div
                key={service.id}
                className={`rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                  isFeatured
                    ? "bg-white border-2 border-[#E10000] shadow-md relative md:col-span-2 lg:col-span-1"
                    : "bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md hover:bg-white"
                }`}
              >
                <div>
                  {/* Image & Service Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#050B16]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {service.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#E10000] text-white text-[10px] font-black uppercase tracking-wider font-display shadow-sm">
                        {service.badge}
                      </span>
                    )}

                    {isFeatured && (
                      <span className="absolute top-3 right-3 bg-[#E10000] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded font-display shadow-sm">
                        FLAGSHIP
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                      <span className="text-xs uppercase font-bold text-slate-300 font-display">
                        Starting at
                      </span>
                      <span className="text-2xl font-black text-white font-display">
                        ${service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Service Card Content */}
                  <div className="p-7 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#050B16] tracking-tight uppercase font-display leading-tight mb-1 group-hover:text-[#E10000] transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-xs text-[#64748B] block">
                        {service.priceNote}
                      </span>
                    </div>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-[#E2E8F0]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#050B16] block mb-3 font-display">
                        Key Features & Inclusions:
                      </span>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-xs sm:text-sm text-[#334155] flex items-start gap-2.5"
                          >
                            <Check className="w-4 h-4 text-[#E10000] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Dual Actions: Quote + Direct Call */}
                <div className="p-7 pt-0 space-y-2.5">
                  <button
                    onClick={() => handleQuoteClick(service.name)}
                    className={`w-full py-3.5 px-4 rounded-md font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-display ${
                      isFeatured
                        ? "bg-[#E10000] text-white hover:bg-[#C50000] shadow-sm"
                        : "bg-[#050B16] text-white hover:bg-[#E10000]"
                    }`}
                  >
                    <span>Get a Quote for This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={businessInfo.phoneTel}
                    className="w-full py-2.5 px-4 rounded-md font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 text-[#475569] hover:text-[#050B16] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-colors font-display"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E10000]" />
                    <span>Call Shop: {businessInfo.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance for Owner & Customer */}
        <div className="mt-16 bg-[#050B16] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#E10000] font-display">
              MASTER CRAFTSMANSHIP GUARANTEE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-display">
              Ready to Upgrade Your Vehicle?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Visit our facility at 11649 TX-249 #600, Houston, TX 77086 or request a fast, no-obligation quote online. Same-day appointments and walk-ins welcome.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/quote"
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs uppercase tracking-wider transition-colors font-display text-center"
            >
              Request Free Estimate
            </Link>
            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider transition-colors font-display flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E10000]" />
              <span>Call ({businessInfo.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
