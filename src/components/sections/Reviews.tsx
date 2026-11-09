import React from "react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { customerReviews } from "@/data/reviews";
import { businessInfo } from "@/data/business";

export function Reviews() {
  // Show max 3 featured verified reviews for clean, high-impact layout
  const displayedReviews = customerReviews.slice(0, 3);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            VERIFIED CUSTOMER FEEDBACK
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Loved by {businessInfo.reviews.count} Houston Drivers
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Read what real customers say about our ceramic window film, windshield heat barriers, audio installations, and customer care.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 py-3.5 px-8 rounded-xl bg-white border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-1.5 text-amber-500" aria-label="5 out of 5 stars rating" role="img">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <div className="h-4 w-px bg-[#E2E8F0] hidden sm:block" />
            <span className="text-sm font-black text-[#050B16] uppercase font-display">
              {businessInfo.reviews.count} Customer Reviews
            </span>
            <div className="h-4 w-px bg-[#E2E8F0] hidden sm:block" />
            <span className="text-xs text-[#050B16] font-black uppercase tracking-wider font-display flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.13z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"/>
              </svg>
              <span>Verified Google Reviews</span>
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid (Max 3 Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Review Header with Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-500" aria-label={`${review.rating} out of 5 stars`} role="img">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider font-display">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.36 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.13z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"/>
                    </svg>
                    <span>{review.verifiedSource}</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm lg:text-base text-[#475569] leading-relaxed italic mb-6">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Vehicle Meta */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-[#050B16] uppercase font-display">
                    {review.author}
                  </h4>
                  {review.vehicle && (
                    <span className="text-xs text-[#64748B] block font-medium mt-0.5">
                      {review.vehicle}
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-[#E10000] block font-display">
                    {review.service}
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: READ ALL GOOGLE REVIEWS */}
        <div className="text-center">
          <a
            href={businessInfo.googleMaps.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-md bg-[#050B16] hover:bg-[#1E293B] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md group font-display"
          >
            <span>READ ALL {businessInfo.reviews.count} GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 text-[#E10000] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
