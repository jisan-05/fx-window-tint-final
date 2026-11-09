import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "dark" | "outline" | "success";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]",
    accent: "bg-[#FEF2F2] text-[#E10000] border border-[#FECACA]",
    dark: "bg-[#050B16] text-white border border-[#1E293B]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "border border-[#CBD5E1] text-[#475569] bg-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
