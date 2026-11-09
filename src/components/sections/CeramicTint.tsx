import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldAlert,
  Eye,
  Sparkles,
  ArrowRight,
  CheckCircle,
  ThermometerSnowflake,
} from "lucide-react";
import { assetRegistry } from "@/data/assets";
import { Button } from "@/components/ui/Button";

const ceramicBenefits = [
  {
    icon: Flame,
    title: "Up to 90%+ Infrared (IR) Rejection",
    description:
      "Blocks the invisible infrared wavelengths that bake your vehicle's interior. You feel immediate cabin cooling even during 100°F+ Houston heat waves.",
  },
  {
    icon: ShieldAlert,
    title: "99% Harmful UV Ray Shield",
    description:
      "Acts as a protective barrier against damaging UVA and UVB rays, preventing premature interior leather cracking, dashboard fading, and skin damage.",
  },
  {
    icon: Eye,
    title: "Anti-Glare Optics & Night Clarity",
    description:
      "Significantly softens harsh Texas sun reflections and blinding nighttime high-beam headlights without clouding or impairing exterior visibility.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Faster Cabin Cool-Down & AC Relief",
    description:
      "Because less thermal energy penetrates the glass, your vehicle’s air conditioning cools the cabin much faster, reducing fuel consumption and EV battery drain.",
  },
  {
    icon: Sparkles,
    title: "Zero Electronic & Signal Interference",
    description:
      "Unlike outdated metallic films, non-conductive nano-ceramic film never interferes with 5G cell signals, GPS navigation, keyless entry fobs, or radio reception.",
  },
  {
    icon: CheckCircle,
    title: "Deep Color-Stable Aesthetics",
    description:
      "Rich charcoal and black tones that stay crisp. Formulated to resist bubbling, peeling, or turning that dreaded unsightly purple over time.",
  },
];

export function CeramicTint() {
  return (
    <section id="ceramic-tint" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            PRIMARY SERVICE • MAXIMUM HEAT REJECTION
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Upgrade to Ceramic Window Tint
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Good looks are just the beginning. Enjoy a noticeably cooler cabin with advanced nano-ceramic film engineered to reject infrared heat while maintaining excellent visibility.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center mb-16">
          {/* Left Column: Visual Presentation with Ceramic Detail Photo & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-md group">
              <div className="relative h-80 sm:h-96 w-full bg-[#050B16]">
                <Image
                  src={assetRegistry.ceramicDetail.currentPath}
                  alt={assetRegistry.ceramicDetail.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="p-6 bg-white border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-[#E10000] tracking-wider block font-display">
                      Target IR Rejection
                    </span>
                    <span className="text-3xl lg:text-4xl font-black text-[#050B16] font-display">90% – 97%*</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-[#64748B] tracking-wider block font-display">
                      UV Solar Protection
                    </span>
                    <span className="text-3xl lg:text-4xl font-black text-[#050B16] font-display">99%</span>
                  </div>
                </div>

                <p className="text-xs text-[#64748B] pt-3 leading-relaxed">
                  *Advertised infrared heat rejection range based on high-performance nano-ceramic film layers. Exact specifications vary by selected product package and glass type.
                </p>
              </div>
            </div>

            {/* Quick Price Banner */}
            <div className="p-5 rounded-xl bg-white border-2 border-[#E10000] shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs text-[#E10000] uppercase font-black tracking-wider block font-display">
                  Nano Ceramic Package
                </span>
                <span className="text-xl font-black text-[#050B16] font-display">Heat Shield Protection</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#64748B] block font-semibold">Starting from</span>
                <span className="text-3xl font-black text-[#E10000] font-display">$250</span>
              </div>
            </div>

            {/* Film Brands & Warranty Trust Banner */}
            <div className="p-5 rounded-xl bg-[#050B16] text-white shadow-sm space-y-3 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E10000] font-display">
                  Industry-Grade Ceramic Technology
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded border border-emerald-500/30 font-display uppercase">
                  Lifetime Warranty
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We install advanced ceramic nanoparticle films tested against premium industry standards (3M, Llumar, SunTek & Ceramic IR series) for extreme Texas sun endurance.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs text-white/90 border-t border-white/10 font-bold font-display uppercase">
                <CheckCircle className="w-4 h-4 text-[#E10000] shrink-0" />
                <span>Protected against bubbling, peeling, or purple fading</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-6">
            {ceramicBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl p-6 lg:p-7 transition-all duration-200 hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E10000] mb-4 group-hover:bg-[#E10000] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base lg:text-lg font-black text-[#050B16] mb-2 uppercase font-display group-hover:text-[#E10000] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Action Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/quote">
            <Button size="lg" variant="primary" className="px-9 py-4 font-display">
              <span>GET YOUR CERAMIC TINT QUOTE</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/window-tint">
            <Button size="lg" variant="secondary" className="px-8 py-4 font-display">
              <span>VIEW FULL TINT SPECS & PACKAGES</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
