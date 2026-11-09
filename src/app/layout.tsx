import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { businessInfo } from "@/data/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050B16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fxwindowtint.com"),
  title: "Window Tinting Houston TX | FX Window Tint Stereo Alarms Car Audio",
  description:
    "Upgrade your drive with premium ceramic window tinting, heat rejection shields, Tesla tinting, car audio, and Viper alarms in Houston, TX. 285 Google reviews. Call (832) 768-6256 for a free quote.",
  keywords: [
    "Window Tinting Houston TX",
    "Ceramic Window Tint Houston",
    "Car Window Tint Houston",
    "Tesla Window Tint Houston",
    "Windshield Ceramic Tint Houston",
    "Automotive Window Tinting",
    "Car Audio Installation Houston",
    "Remote Start Installation Houston",
    "TX-249 window tint",
  ],
  authors: [{ name: businessInfo.name }],
  icons: {
    icon: [
      { url: "/icon.svg?v=fx4", type: "image/svg+xml" },
      { url: "/favicon.ico?v=fx4" },
    ],
    apple: [{ url: "/apple-icon.png?v=fx4" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fxwindowtint.com",
    title: "FX Window Tint — Ceramic Window Tint & Auto Electronics Houston, TX",
    description:
      "Beat the Houston heat with high-performance ceramic window tinting, windshield protection, car audio upgrades, and alarms. Call (832) 768-6256.",
    siteName: businessInfo.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "FX Window Tint Houston - Ceramic Window Film & Automotive Accessories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Tinting Houston TX | FX Window Tint",
    description:
      "Beat the Houston Heat. Ceramic Window Tinting, Tesla Glass Tint, Car Audio & Viper Alarms at 11649 TX-249, Houston.",
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "/",
  },
};

// Verified LocalBusiness Schema JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: businessInfo.name,
  alternateName: businessInfo.shortName,
  image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200",
  telephone: businessInfo.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.zip,
    addressCountry: businessInfo.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.9234857,
    longitude: -95.5137568,
  },
  hasMap: businessInfo.googleMaps.profileUrl,
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "285",
  },
  areaServed: {
    "@type": "City",
    name: "Houston",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ceramic Tint Heat Shield Protection",
        description: "Nano ceramic IR protection with 90%+ heat rejection in Houston",
      },
      price: "250.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tesla Ceramic Tinting",
        description: "Full glass ceramic tinting for Tesla Model 3, Y, S, X",
      },
      price: "399.00",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Windshield Ceramic Tint",
        description: "High-clarity heat shield ceramic tint for vehicle windshields",
      },
      price: "180.00",
      priceCurrency: "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#050B16] antialiased min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
