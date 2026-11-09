"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  Camera,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            REAL WORKMANSHIP SHOWCASE
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Recent Client Installations
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Explore our window tinting, Tesla glass heat shields, windshield films, and car audio upgrades completed right here in Houston.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all font-display ${
              selectedCategory === "all"
                ? "bg-[#E10000] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            All Work ({galleryItems.length})
          </button>
          <button
            onClick={() => setSelectedCategory("ceramic-tint")}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all font-display ${
              selectedCategory === "ceramic-tint"
                ? "bg-[#E10000] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Ceramic Tint
          </button>
          <button
            onClick={() => setSelectedCategory("tesla-ev")}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all font-display ${
              selectedCategory === "tesla-ev"
                ? "bg-[#E10000] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Tesla & EV
          </button>
          <button
            onClick={() => setSelectedCategory("windshield")}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all font-display ${
              selectedCategory === "windshield"
                ? "bg-[#E10000] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Windshield Protection
          </button>
          <button
            onClick={() => setSelectedCategory("car-audio")}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all font-display ${
              selectedCategory === "car-audio"
                ? "bg-[#E10000] text-white shadow-sm"
                : "bg-[#F8FAFC] text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
            }`}
          >
            Car Audio & Screens
          </button>
        </div>

        {/* Gallery Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden hover:border-[#CBD5E1] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050B16]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Hover overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="p-3.5 rounded-full bg-[#E10000] text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded text-[10px] font-black bg-black/85 text-white uppercase tracking-wider backdrop-blur-sm font-display">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-black text-[#050B16] uppercase font-display group-hover:text-[#E10000] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="text-[#E10000] font-bold flex items-center gap-1 font-display">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.specs}
                  </span>
                  <span className="text-[#050B16] font-bold uppercase tracking-wider group-hover:text-[#E10000] transition-colors font-display text-[11px]">
                    View &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          item={activeItem}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
