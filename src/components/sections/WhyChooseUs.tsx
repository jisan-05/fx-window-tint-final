import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Sparkles,
  MapPin,
  HeartHandshake,
  Cpu,
  Phone,
  ArrowRight,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Installation",
    description:
      "We take pride in every cut and pass. We thoroughly clean glass surfaces, tuck edges below window gaskets, and protect vehicle door panels and defroster heating lines from moisture or razor damage.",
  },
  {
    icon: Sparkles,
    title: "High-IR Ceramic Tint Solutions",
    description:
      "We specialize in high-performance nano-ceramic film built specifically to reject harsh Texas sun heat (90%+ IR block) while keeping crystal clear outward clarity day and night.",
  },
  {
    icon: Cpu,
    title: "One-Stop Automotive Electronics",
    description:
      "Beyond window tint, upgrade your vehicle with large 10-inch Tesla-style tablet screens, Apple CarPlay/Android Auto stereos, Kicker/Pioneer sound systems, and Viper remote start alarms.",
  },
  {
    icon: MapPin,
    title: "Convenient Houston TX-249 Location",
    description:
      "Centrally situated at 11649 TX-249 #600 in Houston. Easy highway access with dedicated parking and bay space for passenger cars, trucks, SUVs, and commercial vehicles.",
  },
  {
    icon: HeartHandshake,
    title: "Over 285 Verified Google Reviews",
    description:
      "Local Houston drivers recommend us for honest advice, fair prices, and clean work without high-pressure upsells or unexpected fees.",
  },
  {
    icon: Wrench,
    title: "Brand-Name Equipment & Clean Wiring",
    description:
      "From Viper security to Alpine, Kenwood, and JBL audio equipment, our technicians solder connections and use factory-grade harnesses for zero rattles or electrical issues.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FEF2F2] border border-[#FECACA] text-[#E10000] text-xs font-black uppercase tracking-wider font-display">
              <span>THE FX DIFFERENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight leading-tight uppercase font-display">
              Why Houston Drivers Choose FX Window Tint
            </h2>

            <div className="w-16 h-1 bg-[#E10000]" />

            <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
              When it comes to your vehicle, proper craftsmanship matters. A bad tint job bubbles, purples, or damages rear defrosters within months. Botched stereo wiring leads to dead batteries and speaker hums.
            </p>

            <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
              At FX Window Tint, we stick to our core promise: <strong className="text-[#050B16]">"{businessInfo.tagline}"</strong> We treat your vehicle with the same care and precision we’d demand for our own.
            </p>

            {/* Workshop Craftsmanship Visual */}
            <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm group">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
                alt="Precision automotive tinting craftsmanship at FX Window Tint"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-[11px] font-bold font-display uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E10000]" />
                <span>Precision Hand-Cut Edges & Defroster Protection</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button variant="primary" size="lg" className="px-8 py-4 font-display">
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <a href={businessInfo.phoneTel}>
                <Button variant="dark" size="lg" className="px-8 py-4 font-display">
                  <Phone className="w-4 h-4 mr-2 text-[#E10000]" />
                  Call {businessInfo.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Differentiators */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl p-6 lg:p-7 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E10000] mb-4 group-hover:bg-[#E10000] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base lg:text-lg font-black text-[#050B16] mb-2 uppercase font-display group-hover:text-[#E10000] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
