import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
  theme?: "dark" | "light"; // "dark" text for light surfaces (navbar), "light" text for dark surfaces (footer)
}

export function BrandLogo({
  className = "",
  size = "md",
  withText = true,
  theme = "dark",
}: BrandLogoProps) {
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  }[size];

  return (
    <div className={`flex items-center gap-3.5 group shrink-0 ${className}`}>
      {/* Automotive Dark Badge without Red Border */}
      <div
        className={`${iconDimensions} relative rounded-xl bg-gradient-to-br from-[#050B16] via-[#0B1320] to-[#1E293B] p-1.5 flex items-center justify-center transition-all duration-300 shadow-md shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="brandRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2E2E" />
              <stop offset="100%" stopColor="#C50000" />
            </linearGradient>
          </defs>

          {/* Bold Racing Slanted FX Monogram */}
          <g transform="skewX(-11) translate(4, 0)">
            {/* Letter F in Pure White */}
            <path
              d="M 20 22 H 46 V 34 H 32 V 44 H 42 V 55 H 32 V 78 H 20 Z"
              fill="#FFFFFF"
            />

            {/* Letter X in Executive Red */}
            <path
              d="M 45 22 H 58 L 67 47 L 76 22 H 89 L 74 50 L 89 78 H 76 L 67 53 L 58 78 H 45 L 60 50 Z"
              fill="url(#brandRed)"
            />
          </g>

          {/* Dynamic Speed Bottom Underline */}
          <line
            x1="12"
            y1="90"
            x2="88"
            y2="90"
            stroke="#E10000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {withText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-black text-base sm:text-lg lg:text-xl tracking-tight leading-tight flex items-center gap-1.5 uppercase font-display transition-colors ${
              theme === "light"
                ? "text-white group-hover:text-white"
                : "text-[#050B16] group-hover:text-[#E10000]"
            }`}
          >
            FX WINDOW TINT
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-widest text-[#E10000] font-bold uppercase font-display">
            Stereo • Alarms • Houston, TX
          </span>
        </div>
      )}
    </div>
  );
}
