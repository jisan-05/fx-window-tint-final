import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10000] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[#E10000] hover:bg-[#C50000] text-white shadow-md hover:shadow-lg rounded-md",
      secondary:
        "bg-white hover:bg-[#F8FAFC] text-[#050B16] border border-[#CBD5E1] shadow-sm rounded-md",
      dark:
        "bg-[#050B16] hover:bg-[#1E293B] text-white shadow-md rounded-md",
      outline:
        "border-2 border-[#E10000] text-[#E10000] hover:bg-[#E10000] hover:text-white rounded-md",
      ghost:
        "text-[#050B16] hover:bg-[#F1F5F9] rounded-md",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-sm sm:text-base px-7 py-3.5",
      xl: "text-base sm:text-lg px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
