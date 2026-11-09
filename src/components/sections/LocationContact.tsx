import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Navigation,
  Compass,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { assetRegistry } from "@/data/assets";

export function LocationContact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            CONVENIENT HOUSTON LOCATION
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Visit FX Window Tint in Houston
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Easily accessible right off TX-249 in Northwest Houston with full installation bays for cars, trucks, and SUVs.
          </p>
        </div>

        {/* Location Grid - Widescreen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Business NAP Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-10 shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] block mb-1 font-display">
                  Verified Local Business
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-[#050B16] leading-tight uppercase font-display">
                  {businessInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                  Automotive Window Tinting, Ceramic Tint, Car Audio, Alarms & Accessories
                </p>
              </div>

              {/* Shop Facility Showcase Image */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm group">
                <Image
                  src={assetRegistry.shopFront.currentPath}
                  alt={assetRegistry.shopFront.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase font-display bg-[#E10000] px-2.5 py-1 rounded shadow-sm">
                    Houston Facility Bay
                  </span>
                  <span className="text-xs font-bold text-white/90">
                    11649 TX-249 #600
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-6 h-6 text-[#E10000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#050B16] text-sm sm:text-base block font-display uppercase">Shop Address:</strong>
                    <p className="text-sm sm:text-base text-[#475569] mt-0.5">
                      {businessInfo.address.street}
                      <br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                    <span className="inline-block text-xs text-[#E10000] font-bold mt-1.5">
                      (Northwest Houston • Off Tomball Parkway TX-249)
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-3.5">
                  <Phone className="w-6 h-6 text-[#E10000] shrink-0" />
                  <div>
                    <strong className="text-[#050B16] text-sm block font-display uppercase">Direct Phone:</strong>
                    <a
                      href={businessInfo.phoneTel}
                      className="text-2xl font-black text-[#050B16] hover:text-[#E10000] transition-colors font-display"
                    >
                      {businessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Placeholder */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-6 h-6 text-[#E10000] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#050B16] text-sm block font-display uppercase">Business Hours (Schedule):</strong>
                    <div className="text-xs sm:text-sm text-[#475569] space-y-1.5 mt-1.5 font-medium">
                      {businessInfo.hours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <span className="text-[#050B16] font-semibold">{h.days}:</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#94A3B8] italic mt-2.5 border-t border-[#E2E8F0] pt-2">
                      *Please call ahead to confirm holiday schedules or reserve same-day bay installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3.5">
              <a
                href={businessInfo.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md font-display"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3.5">
                <a
                  href={businessInfo.phoneTel}
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-[#050B16] text-white hover:bg-[#1E293B] font-bold text-xs uppercase tracking-wider transition-colors font-display"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E10000]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={businessInfo.googleMaps.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-md bg-white border border-[#CBD5E1] text-[#050B16] hover:bg-[#F1F5F9] font-bold text-xs uppercase tracking-wider transition-colors font-display"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#E10000]" />
                  <span>Google Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Container */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white min-h-[460px] relative shadow-sm flex flex-col">
            <div className="p-5 bg-[#050B16] text-white flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center gap-2 font-bold uppercase tracking-wider font-display">
                <Compass className="w-4 h-4 text-[#E10000]" />
                Interactive Map Location — 11649 TX-249 #600, Houston
              </span>
              <a
                href={businessInfo.googleMaps.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E10000] hover:underline flex items-center gap-1 font-bold uppercase font-display"
              >
                Open in Maps &rarr;
              </a>
            </div>

            <div className="relative w-full flex-1 min-h-[420px] bg-[#E2E8F0]">
              <iframe
                title="FX Window Tint Google Maps Location"
                src="https://maps.google.com/maps?q=11649+TX-249+%23600,+Houston,+TX+77086&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Houston Local Communities Served Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#E10000] font-display block">
                LOCAL GREATER HOUSTON COVERAGE
              </span>
              <h4 className="text-lg sm:text-xl font-black text-[#050B16] uppercase font-display">
                Serving Greater Houston & Surrounding Neighborhoods
              </h4>
            </div>
            <span className="text-xs bg-[#FEF2F2] text-[#E10000] border border-[#FECACA] px-3.5 py-1.5 rounded-full font-bold font-display uppercase shrink-0">
              Easy Highway Access via TX-249 & FM 1960
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] mb-4">
            Our facility at 11649 TX-249 #600 is easily accessible for drivers throughout the Greater Houston area:
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Northwest Houston",
              "Willowbrook",
              "Spring, TX",
              "Tomball",
              "Cypress",
              "Champions",
              "Jersey Village",
              "Aldine",
              "Greenspoint",
              "Klein",
              "Copperfield",
            ].map((area, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#334155] font-display uppercase"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
