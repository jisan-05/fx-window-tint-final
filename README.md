# FX Window Tint — Premium Automotive Website

> **Implementation Guide & Design Direction** · Last updated: November 2026
> Senior UI/UX + CRO Audit for FX Window Tint Stereo Alarms Car Audio, Houston TX

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Architecture](#2-tech-stack--architecture)
3. [Current Site Audit](#3-current-site-audit)
   - [Layout System](#31-layout-system)
   - [Homepage Sections](#32-homepage-sections)
   - [Inner Pages](#33-inner-pages)
   - [Data & Business Logic](#34-data--business-logic)
   - [SEO & Metadata](#35-seo--metadata)
4. [UI/UX Design Direction](#4-uiux-design-direction)
5. [Customer Experience Improvements](#5-customer-experience-improvements)
6. [Conversion Optimization](#6-conversion-optimization)
7. [Ceramic Tint Priority Strategy](#7-ceramic-tint-priority-strategy)
8. [Homepage Section-by-Section Improvement Plan](#8-homepage-section-by-section-improvement-plan)
9. [Mobile Experience](#9-mobile-experience)
10. [Performance & SEO](#10-performance--seo)
11. [Component Architecture](#11-component-architecture)
12. [Prioritized Implementation Roadmap](#12-prioritized-implementation-roadmap)
13. [Business Data Reference](#13-business-data-reference)

---

## 1. Project Overview

**Business:** FX Window Tint Stereo Alarms Car Audio  
**Location:** 11649 TX-249 #600, Houston, TX 77086  
**Phone:** (832) 768-6256  
**Goal:** Generate more phone calls, quote form submissions, and in-shop visits from Houston-area customers finding the shop via Google Search and Google Maps.

### Site Route Map

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage — first impression, all major CTAs | ✅ Live |
| `/window-tint` | Deep dive: Ceramic tint specs, calculator, comparison | ✅ Live |
| `/services` | All 10 services with filter tabs + starting prices | ✅ Live |
| `/gallery` | Installation gallery + lightbox + reviews | ✅ Live |
| `/contact` | Shop map, hours, directions, FAQ | ✅ Live |
| `/quote` | 3-step quote estimator (Suspense + useSearchParams) | ✅ Live |
| `/sitemap.xml` | XML sitemap for all 6 routes | ✅ Live |
| `/robots.txt` | Robots directive | ✅ Live |

### Service Catalog & Starting Prices

| Service | Category | Price |
|---------|----------|-------|
| Ceramic Tint Heat Shield Protection | Tint | $250+ |
| Tesla Ceramic Tinting | Tint | $399+ |
| Windshield Ceramic Tint | Tint | $180+ |
| Heat Efficiency Tint / Dark Shades | Tint | $175+ |
| Car Audio Upgrades | Audio | $199+ |
| Audio Equipment Sales & Setup | Audio | $100+ |
| Viper Remote Start & Car Security | Security | $159+ |
| Headlight & Fog Light Bulb Upgrades | Specialty | $59+ |
| Professional Tint Removal | Tint | $20+ |
| Wiring Installation & Repair | Specialty | $55+ |

> **⚠️ IMPORTANT:** These prices are locked. Never change advertised starting prices without explicit client confirmation.

---

## 2. Tech Stack & Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5 (App Router, React Server Components) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 3.4 |
| UI Components | Custom (Button, Card, Badge, Lightbox — **no shadcn/ui installed**) |
| Icons | Lucide React |
| Fonts | Montserrat (`font-display`) + Inter (`font-sans`) via `next/font/google` |
| Images | `next/image` with Unsplash placeholders |
| Shell (Windows) | PowerShell — always use `npm.cmd` / `npx.cmd` |

### Design Tokens

```
Background:     #FFFFFF / #F8FAFC (sections alternate)
Accent Red:     #E10000  (CTAs, active states, icons)
Accent Hover:   #C50000  (button hover)
Executive Navy: #050B16  (headers, footer, hero overlay)
Mid-dark:       #1E293B  (secondary dark elements)
Border:         #E2E8F0  (default) / #CBD5E1 (hover)
Text Primary:   #050B16
Text Secondary: #475569
Text Muted:     #64748B / #94A3B8
Amber Accent:   amber-500 (star ratings only)
Emerald:        emerald-50/emerald-800 (success/verified states)
Container:      max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16
```

---

## 3. Current Site Audit

### 3.1 Layout System

#### `AnnouncementBar.tsx` — ✅ Well-implemented
- **What it does:** Slim top bar with pulsing red dot, business category, phone link, review count, and directions link.
- **Mobile:** Correctly collapses to single-row with phone pill only — good.
- **Issues:**
  - `reviews.count` (285) used correctly without an invented rating value. ✅
  - Desktop layout has 3 right-side items (reviews badge, address, phone). On medium screens (`sm` to `lg`) the address can get slightly truncated.
  - **Missing:** No `rel="noopener"` on external Google Maps link — minor security gap.

#### `Navbar.tsx` — ✅ Well-implemented
- **What it does:** Sticky header with scroll-shrink, BrandLogo, 5 nav links, phone number call block, "Get a Free Quote" CTA button, mobile drawer.
- **5 links:** Home / Window Tint / Services & Prices / Gallery / Contact — clean and appropriate.
- **Active state:** Red underline on active route. ✅
- **Mobile drawer:** Auto-closes on route change via `useEffect`. ✅
- **Issues:**
  - Desktop phone link uses a raw `<a href={phoneTel}>` — correct for click-to-call. ✅
  - `hidden sm:flex` on the phone + quote CTA block means on 640–1024px screens (tablets), the "Get a Free Quote" button IS shown but nav links are hidden — only the logo + phone + button appears. Consider showing nav links from `md:` instead of `lg:`.
  - The `BrandLogo` subheading reads `"Stereo • Alarms • Houston, TX"` — correct branding.

#### `Footer.tsx` — ✅ Well-implemented
- **4 columns:** Brand bio + 5-star row + Google profile link / Explore Pages nav / Services & Prices table / Shop Location card.
- **Stars:** Renders 5 filled amber stars with `{businessInfo.reviews.count} Google Reviews` — appropriate social proof without inventing a numeric rating. ✅
- **Hours:** Correctly uses `.map()` over the array format. ✅
- **Issues:**
  - `pb-24 lg:pb-16` — the 24-unit bottom padding on mobile avoids the floating CTA bar. Smart. ✅
  - Footer prices table shows only 6 of 10 services — by design, links to full `/services`. Appropriate. ✅
  - The `© {currentYear}` uses `new Date().getFullYear()` — not cached as a static value, so this will render server-side correctly every year. ✅

#### `MobileFloatingCTA.tsx` — ✅ Minimal & effective
- **2 buttons:** "Call Shop" (dark) + "Free Quote" (red). Full width, 2-column grid.
- Uses `Link` for `/quote` and `<a href={phoneTel}>` for call. ✅
- `lg:hidden` — only shown on mobile and tablet. ✅
- **Issues:** None critical. Minor: `active:scale-95` on the call button — looks good. ✅

---

### 3.2 Homepage Sections

**Homepage flow:** AnnouncementBar → Navbar → Hero → TrustCredibility → CeramicTint → ShadeSelector → FeaturedServices → WhyChooseUs → Reviews → FinalCTA → Footer → MobileFloatingCTA

#### `Hero.tsx` — ✅ Strong, minor gaps
- Cinematic dark hero with vehicle background image, gradient overlays, h1, description, 2 CTA buttons, 3 trust pills.
- **Headline:** `"Beat the Houston Heat. Drive in Comfort."` — local, benefit-driven, strong. ✅
- **CTAs:** "GET A FREE QUOTE" → `/quote` and "CALL (832) 768-6256" → `tel:`. Both correct. ✅
- **Trust pills:** 285 Google Reviews / Ceramic Specialists / Houston Shop. All factual. ✅
- **Issues:**
  - `assetRegistry.heroVehicle.currentPath` — uses a placeholder image. **Needs a real photo of the shop's work.**
  - `scale-105` on the background image is a purely aesthetic subtle zoom — no performance concern.
  - No `fetchpriority="high"` hint on the hero image (`priority` prop on `next/image` handles this). ✅
  - The description paragraph (`heroSecondaryText`) is duplicated in `business.ts` but only the hardcoded string in `Hero.tsx` is used — minor inconsistency to clean up.

#### `TrustCredibility.tsx` — ⚠️ Good but can be improved
- 5 icon cards: Industry-Leading Quality / Certified Installers / Premium Ceramic Films / Top-Rated Houston Shop / The FX Standard.
- **Issues:**
  - "Certified Installers" is a claim — if no specific certification (IWFA, 3M, etc.), this could mislead. Consider "Experienced Installers" or "Expert Technicians."
  - "The FX Standard" card's description ("Exceptional quality on TX-249") is vague. Use a concrete stat or proof point.
  - 5 cards on a 2-col mobile / 5-col desktop grid. On tablet the last card goes full-width — may look odd. Consider `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5`.
  - Cards have hover animations but no click destination — purely decorative. Consider linking "Top-Rated" to Google profile and "285 Google Reviews" to `/gallery`.

#### `CeramicTint.tsx` — ✅ Strongest homepage section
- Left column: image with IR rejection stats card + price banner. Right column: 6 benefit cards.
- **CTAs:** "GET YOUR CERAMIC TINT QUOTE" → `/quote` and "VIEW FULL TINT SPECS" → `/window-tint`. ✅
- **Disclaimer on 90–97%:** Correctly present on the stats card. ✅
- **Issues:**
  - `assetRegistry.ceramicDetail.currentPath` — another placeholder. **Needs real install photo.**
  - 6 benefit cards on mobile stacks to 1 column, requiring a lot of scrolling. Consider a 2-col mobile layout for benefits.
  - `hover:scale-105` on the image inside the card adds interaction. ✅

#### `ShadeSelector.tsx` — ✅ Excellent interactive section, 1 bug
- Interactive tint percentage buttons (5%, 15%, 20%, 30%, 50%, 70%), dynamic opacity simulator, Texas law notice, position breakdown.
- **State:** Defaults to 30% (TX legal front) on load — smart default. ✅
- **Bug:** The CTA button at line 232 uses `href="#quote"` — a hash anchor that **does NOT work** because the quote form `id="quote"` lives on a different page (`/quote`). On the homepage the `ShadeSelector` renders without a `#quote` section. The CTA should be `Link href="/quote"` with a service preset query param.
- **Issues:**
  - The window visualizer is CSS-only — a background mockup image of an actual car window would look dramatically better.
  - On mobile, the 3-col/6-col grid (tint % buttons) becomes 3-col, which is tight but workable.

#### `FeaturedServices.tsx` — ✅ Well-designed, 1 consideration
- 4-card grid: Ceramic Heat Shield, Tesla Ceramic Tint, Car Audio Upgrades, Viper Remote Start.
- Each card has: image, price overlay, feature checklist (3 items), "Get a Free Quote" button → `/quote?service=...`.
- **Bottom banner:** Dark strip promoting "Explore All 10 Services & Prices". ✅
- **Issues:**
  - All service images are placeholder paths (`/images/services/ceramic-tint.jpg` etc.) — these **404 in production** unless real images are added to `public/images/services/`.
  - `"use client"` directive at top even though no client-side state/event is used — can be removed to allow RSC optimization.

#### `WhyChooseUs.tsx` — ✅ Solid, minor anchor bug
- Left: brand story + 2 CTAs. Right: 6 differentiator cards.
- **Issues:**
  - Both CTAs use `href="#quote"` (raw anchor) — same bug as ShadeSelector. On the homepage there's no `#quote` element. These should be `Link href="/quote"`.
  - "Over 285 Verified Google Reviews" in the differentiators is factual. ✅
  - "Certified Installers" claim repeated here from TrustCredibility — same concern applies.

#### `Reviews.tsx` — ✅ Excellent
- 3 review cards (`.slice(0, 3)`) with stars, verified badge, service tag, vehicle, author, date.
- Aggregate header shows 5 stars + "285 Customer Reviews" + "Verified on Google Business Profile." ✅
- CTA: "READ ALL 285 GOOGLE REVIEWS" → opens Google Business Profile. ✅
- **Issues:**
  - Review cards hardcode data from `src/data/reviews.ts` — not live Google data. This is acceptable for a static site but the reviews should be periodically refreshed.
  - No `aria-label` on star icons — minor accessibility gap.

#### `FinalCTA.tsx` — ✅ High-impact
- Dark section with headline, red divider, description, 2 buttons (Quote + Call), trust pills.
- Uses `Link href="/quote"` ✅ and `<a href={phoneTel}>` ✅.
- Trust pills hardcode `"285 Google Reviews"` — consistent with business.ts. ✅
- **Issues:**
  - Uses an emoji `📍` for the address trust pill — inconsistent with the icon-based approach elsewhere. Replace with a Lucide `MapPin` icon.
  - `overflow-hidden` on the section but no background texture/graphic is rendered — the `relative overflow-hidden` is unnecessary.

---

### 3.3 Inner Pages

#### `/window-tint` — Ceramic Tint Deep Dive
- Sections: `HeatShieldCalculator` + `TintComparison` + `ShadeSelector` + `CeramicTint` + `Reviews` + `FinalCTA`.
- Dedicated to ceramic tint only — excellent for SEO and lead quality.
- **Note:** `ShadeSelector` appears on both homepage AND window-tint page — the `#quote` anchor bug is present on both.

#### `/services` — All 10 Services & Prices
- `Services` component with filter tabs (All / Window Tinting / Car Audio / Remote Start & Upgrades).
- Filter tab for "security" also includes "specialty" category — `Remote Start & Upgrades` is a reasonable label.
- `handleQuoteClick` falls back to `router.push('/quote?service=...')` when no `#quote` element found on page — correct fix. ✅

#### `/gallery` — Installation Showcase
- `Gallery` component with lightbox (`Lightbox.tsx`).
- Uses `gallery.ts` data — image paths need real images.

#### `/contact` — Shop Location
- `LocationContact` with iframe Google Maps embed + NAP card + FAQ.
- Google Maps iframe uses a custom embed URL — correct. ✅
- Has `loading="lazy"` on the iframe. ✅

#### `/quote` — 3-Step Quote Form
- Wrapped in `<Suspense>` for `useSearchParams()`.
- Pre-selects service from `?service=` query param and jumps to Step 2. ✅
- **Critical gap:** Form submission is **frontend-only** (simulated with a 800ms `setTimeout`). **No data is actually sent to the shop.** This is the most important missing piece.

---

### 3.4 Data & Business Logic

#### `business.ts`
- All NAP data correct. ✅
- `hours` is an array `[{days, time}]` — consistent usage across Footer and LocationContact. ✅
- `reviews.rating: 4.8` is defined but **correctly NOT displayed in the UI** (avoided due to accuracy concerns). ✅
- `googleMaps.embedUrl` exists but `LocationContact` uses a custom embed URL with `maps.google.com/maps?q=...` — both should work, but the `business.ts` embed URL (with the proper `pb=...` path) is more reliable.

#### `services.ts`
- All 10 services defined with consistent structure. ✅
- `isPrimary: true` only on `ceramic-heat-shield` — correctly marks it as the flagship.
- All service images point to `/images/services/*.jpg` — these files do not exist in `public/`. **This causes broken images site-wide.**

#### `reviews.ts`
- 6 reviews defined; only 3 shown. ✅

---

### 3.5 SEO & Metadata

#### `layout.tsx`
- Full `Metadata` object with title, description, keywords, robots, OpenGraph, Twitter card. ✅
- **Issue:** `metadataBase` is `"https://fxwindowtintexample.com"` — a placeholder domain. **Must be updated to the real domain before launch.**
- `canonical: "/"` is set but only covers the root. Inner pages need their own canonical tags.
- JSON-LD schema uses `@type: "AutoRepair"` — correct for a shop.
- Schema includes `aggregateRating: { ratingValue: "4.8", reviewCount: "285" }` — this is accurate data used only in machine-readable markup, not displayed to users. ✅
- OG and Twitter images reference an Unsplash URL — replace with a real hosted image of the shop/work.
- **Missing page-level metadata:** `/window-tint`, `/services`, `/gallery`, `/contact`, `/quote` pages need their own `export const metadata` with page-specific titles and descriptions.

---

## 4. UI/UX Design Direction

The current site correctly references **xmhouston.com** as the design benchmark. The implemented design is 85% aligned. Areas to sharpen:

### Typography System
```
Display headings:   Montserrat Black (font-black), uppercase, tracking-tight
Section labels:     font-black uppercase tracking-widest text-xs (red label above h2)
Body text:          Inter, text-sm/text-base, text-[#475569] or text-[#64748B]
Monospace:          font-mono (used sparingly in progress steps, VLT simulation)
```

**Current issues:**
- Some body text uses `font-black` where `font-semibold` would be more readable (e.g., WhyChooseUs brand story paragraphs use regular weight — good).
- `text-[9px]` appears in a few places (Badge component, service HOT label) — anything below 10px fails accessibility contrast minimums on most screens.

### Spacing Rhythm
- Section `py-20 lg:py-28` is consistent and appropriate. ✅
- Card padding `p-6 lg:p-7` and `p-7` on service cards is generous and premium-feeling. ✅
- The red divider line (`w-16 h-1 bg-[#E10000]`) used consistently below h2 elements is a strong visual signature. ✅

### Color Usage
- White and `#F8FAFC` sections alternate correctly for visual breathing room. ✅
- The navy `#050B16` is reserved for hero, footer, and high-impact CTA sections — good hierarchy. ✅
- Amber (`amber-500`) only used for star ratings — prevents color dilution. ✅

### Interactive States
- All interactive cards have `hover:shadow-md hover:border-[#CBD5E1]` or stronger states. ✅
- Icon containers invert from `bg-[#FEF2F2] text-[#E10000]` to `bg-[#E10000] text-white` on hover. ✅
- Buttons have `active:scale-[0.98]` for tactile press feedback. ✅

### Visual Hierarchy Gaps
1. **No real photography** — every image is a placeholder. This is the single biggest visual quality gap.
2. **TrustCredibility cards** have no link targets, breaking the expectation that interactive-looking cards are clickable.
3. **ShadeSelector's window visualizer** shows silhouettes of `div` rectangles instead of a real vehicle window photo — reduces wow factor significantly.
4. The page has no animated entrance effects (fade-in-on-scroll). Currently everything is static on load.

---

## 5. Customer Experience Improvements

### Navigation UX
| Issue | Recommendation |
|-------|---------------|
| Nav links hidden from `sm` to `lg` (640–1024px) | Show nav from `md:` (768px), hide hamburger from `md:` |
| "Quote" is both a nav CTA button AND a page — no nav link to `/quote` directly | Add a subtle "Get Quote" active state to the button when on `/quote` route |
| Mobile drawer doesn't animate out on close | Add a slide-out animation on close, not just removal |

### Form UX (Critical)
- **The quote form is a dead end.** On submission, it shows a success screen but **sends zero data to the shop.** This kills conversions. The form needs a real backend integration.
- **No email field** — if a customer submits at 11 PM, the shop can't follow up without a phone number being left. Email is a valuable secondary contact.
- **Date picker** (`<input type="date">`) is a native browser widget with poor styling on mobile Safari. Consider a simple text field or a 3rd-party date picker.
- Vehicle Year is a free-text field — users may type "23" instead of "2023". Add validation for 4-digit years between 1990–2030.

### Trust-Building Gaps
- No before/after photo examples — biggest trust signal for a tint shop.
- No warranty information visible on any page. Even "lifetime warranty on film" or "manufacturer warranty" would increase confidence.
- No specific brand names on the homepage ceramic tint section (3M, Llumar, Ceramic Pro, Xpel, etc.). Brand names are trust signals.

---

## 6. Conversion Optimization

### Critical CTA Bugs to Fix Now

1. **`ShadeSelector.tsx` line 232:** `href="#quote"` — anchor link on a page with no `#quote` element. Fix: replace with `Link href="/quote"`.
2. **`WhyChooseUs.tsx` line 81:** `href="#quote"` — same bug. Fix: replace with `Link href="/quote"`.
3. **Quote form sends no data** — critical revenue blocker. Integrate with a real backend.

### CTA Hierarchy

The current page has a correct hierarchy:
1. Hero: "Get a Free Quote" (primary) + "Call Now" (secondary)
2. CeramicTint: "Get Ceramic Tint Quote" + "View Specs"
3. ShadeSelector: "Request Quote with X% Tint" (broken — fix above)
4. FeaturedServices: "Get a Free Quote" per card
5. WhyChooseUs: "Request a Free Quote" (broken — fix above)
6. FinalCTA: "Get a Free Quote" + "Call Now"
7. Mobile sticky bar: "Call Shop" + "Free Quote" (always visible)

This is a good density of CTAs. The problem is only the broken anchor links — fix those two and the funnel is solid.

### Quote Form Backend Options (Recommended)
Choose one integration approach:

| Option | Complexity | Cost | Recommendation |
|--------|-----------|------|---------------|
| EmailJS | Low | Free tier | ✅ Fastest to implement |
| Resend (email API) | Medium | Free tier | ✅ Reliable, modern |
| Formspree | Low | Free tier | Good fallback |
| Google Sheets via Apps Script | Medium | Free | Good for client self-management |
| Twilio SMS notification | High | Paid | Best for instant shop notification |

**Recommended approach:** EmailJS or Resend to send a formatted email to the shop's email with all form fields. Add a confirmation email to the customer as well.

### Conversion Rate Improvements

| Improvement | Expected Impact | Difficulty |
|-------------|----------------|-----------|
| Fix anchor bugs (#quote) | High | Easy |
| Add real form backend | Critical | Medium |
| Add real photos | Very High | Low (client provides) |
| Add specific film brand names | Medium | Easy |
| Add warranty statement | Medium | Easy |
| Add before/after photos | High | Medium |
| Add "Walk-ins welcome" badge on hero | Medium | Easy |
| Add Google review link on Reviews CTA | Done ✅ | — |

---

## 7. Ceramic Tint Priority Strategy

Ceramic tint is correctly prioritized throughout:

- **Route:** Dedicated `/window-tint` page with deep specs, heat calculator, comparison chart.
- **Homepage:** Section 5 (of 8) is 100% ceramic tint — large image, 6 benefit cards, stats.
- **NavBar:** "Window Tint" link is second in the nav (right after Home).
- **Services page:** `isPrimary: true` card gets a red border, "FLAGSHIP" badge, and full 2-col width on tablet.
- **Footer:** Ceramic-related services are the first 3 rows in the services price table.
- **Hero:** "Ceramic Specialists" and "90%+ IR Heat Protection" in trust pills.
- **SEO:** Title tag leads with "Window Tinting Houston TX".

### Ceramic-Specific Gaps to Address

1. **No film brand names mentioned anywhere on the homepage.** Customers searching "Ceramic Pro Houston" or "3M window tint Houston" won't find specific brand matching. Add brand callouts to the CeramicTint section or `/window-tint` page.
2. **No warranty language.** Ceramic films typically have lifetime manufacturer warranties. Adding this would significantly increase trust and differentiate from cheap shops.
3. **The "90%–97% IR rejection" stat** has a good disclaimer footnote but could benefit from a visual comparison graphic (e.g., a heat bar or progress bar: Standard film 40% | Ceramic 90%+).

---

## 8. Homepage Section-by-Section Improvement Plan

### Section 1: AnnouncementBar
**Current:** ✅ Works well.  
**Improve:**
- Add `rel="noopener noreferrer"` to the Google Maps directions link (security).
- Consider adding a "Walk-ins Welcome" label on desktop — high conversion signal.

### Section 2: Navbar
**Current:** ✅ Clean 5-link nav.  
**Improve:**
- Change `hidden sm:flex` → `hidden md:flex` on the right action area so tablet users (768–1023px) see the phone number and CTA button without hamburger.
- Animate mobile drawer closure with a fade/slide out.

### Section 3: Hero
**Current:** ✅ Strong visual foundation.  
**Improve:**
- Replace Unsplash placeholder with a real photo of an FX Window Tint installation.
- Add a small "Walk-ins Welcome" or "Same Day Service Available" badge below the CTA buttons.
- Add the shop's real hours beneath the hero CTAs for bottom-of-funnel visitors.

### Section 4: TrustCredibility (5 cards)
**Current:** ⚠️ Looks good, weak content.  
**Improve:**
- Replace "Certified Installers" → "Experienced Installers" unless a specific cert exists.
- Replace "The FX Standard" → "Defroster-Safe Installation" with a concrete explanation.
- Link the "Top-Rated" card to Google profile.
- Consider reducing to 4 cards on a `grid-cols-4` layout for better spacing.

### Section 5: CeramicTint
**Current:** ✅ Best section on the site.  
**Improve:**
- Replace image placeholder with real ceramic install photo.
- Add at least one film brand name (e.g., "We install premium brands including 3M, Llumar, and ceramic-grade IR films").
- Add a brief warranty statement ("Films backed by manufacturer warranties").

### Section 6: ShadeSelector
**Current:** ⚠️ Great concept, 1 critical bug + visual gap.  
**Improve:**
- **Fix the `href="#quote"` → `Link href="/quote"`** — this is broken right now.
- Replace the CSS rectangle silhouettes in the window preview with a real vehicle window photograph as the base image.
- The shade opacity overlay works well for the concept, but a real photo would make this a genuine wow-factor feature.

### Section 7: FeaturedServices
**Current:** ⚠️ Well-structured, broken images.  
**Improve:**
- **Add real service images** to `public/images/services/`. Without these, all 4 service cards show broken image icons.
- Consider adding an "Available Now" or "Walk-ins Welcome" badge to 1–2 cards.
- The bottom dark banner is strong — keep it. ✅

### Section 8: WhyChooseUs
**Current:** ⚠️ Good content, 1 anchor bug.  
**Improve:**
- **Fix `href="#quote"` → `Link href="/quote"`** (both CTA buttons).
- The brand story text is genuine and reads authentically — keep the tone.
- Consider adding a photo of the shop exterior or team (if available) in the left column instead of pure text.

### Section 9: Reviews
**Current:** ✅ Excellent section.  
**Improve:**
- Add `aria-label` to star icons for screen reader accessibility.
- Consider adding the Google logo/G icon next to "Verified on Google Business Profile" for instant visual recognition.
- When real Google API data is available, consider pulling live reviews.

### Section 10: FinalCTA
**Current:** ✅ High-impact.  
**Improve:**
- Replace emoji `📍` with Lucide `<MapPin>` icon for visual consistency.
- Remove the unnecessary `relative overflow-hidden` wrapper (no background graphic is rendered).
- Add "No appointment required" or "Walk-ins welcome" in the trust pills.

---

## 9. Mobile Experience

The mobile experience is well-designed with:
- Responsive breakpoints at all sections. ✅
- Mobile-first `MobileFloatingCTA` sticky bar (Call + Quote). ✅
- AnnouncementBar collapses gracefully to 1-row. ✅
- Quote form 3-step flow works on small screens. ✅

### Mobile Gaps

| Issue | Location | Fix |
|-------|----------|-----|
| Nav links hidden from sm–lg (640–1024px) | Navbar | Change threshold to md (768px) |
| `pb-24` footer padding assumes floating CTA bar — but CTA bar uses `lg:hidden` | Footer | Correct behavior ✅ |
| Date picker native widget hard to use on iOS Safari | QuoteForm Step 3 | Replace with text input or custom picker |
| Service cards at 100vw on mobile can be tall (lots of features) | FeaturedServices | Add `line-clamp-2` on feature list items |
| ShadeSelector buttons on 3-col mobile grid: 6 buttons = 2 rows of 3 — works | ShadeSelector | ✅ Acceptable |
| TrustCredibility `grid-cols-2 md:grid-cols-5` — 5th card goes full-width on small desktop | TrustCredibility | Change to `grid-cols-2 sm:grid-cols-3 lg:grid-cols-5` |

### Mobile SEO (Google Search & Maps)
- Local schema JSON-LD includes NAP, geo-coordinates, hours. ✅
- Phone number is tap-to-call formatted (`tel:+18327686256`). ✅
- Address appears in announcement bar, footer, and Contact page — NAP consistency. ✅
- Missing: **Google Business Profile photos** — the website's OG image is an Unsplash stock photo. The GBP should have real shop photos for map pack trust.

---

## 10. Performance & SEO

### Core Web Vitals Assessment

| Metric | Current Status | Recommendation |
|--------|---------------|---------------|
| LCP (Largest Contentful Paint) | ⚠️ Hero image is LCP element | Ensure hero image is real, optimized, and served with `priority` prop (already set ✅) |
| CLS (Cumulative Layout Shift) | ✅ Next/image has explicit `fill` sizing | No layout shifts from images if properly sized |
| FID/INP | ✅ Minimal JavaScript | `ShadeSelector` and `QuoteForm` are the only heavy client components |
| TTFB | ✅ Static generation (all pages pre-rendered) | 13 static pages ✅ |

### Next.js Build Output (Last Verified)
```
Route (app)                    Size      First Load JS
/ (Homepage)                   11 kB     145 kB
/window-tint                   3.1 kB    134 kB
/services                      2.32 kB   125 kB
/gallery                       7.45 kB   128 kB
/contact                       181 B     122 kB
/quote                         5.81 kB   131 kB
```

The 145 kB First Load JS on the homepage is on the higher side but acceptable. The main contributors are the `"use client"` components (ShadeSelector, page.tsx). Optimization options:
- Remove `"use client"` from `FeaturedServices.tsx` (no client state used — it imports `servicesData` only).
- Split `ShadeSelector` into a server shell + client interactive core.

### Image Optimization Checklist

- [ ] Replace all Unsplash placeholder URLs with real hosted images
- [ ] Add `public/images/services/` directory with 10 service photos
- [ ] Hero image: use a real vehicle at the shop or a high-quality ceramic tint install photo
- [ ] OG image: replace Unsplash URL in `layout.tsx` with a real hosted image
- [ ] Apple Touch Icon and favicon: custom FX logo already generated ✅
- [ ] Gallery images: `gallery.ts` needs real installation photos

### Local SEO Checklist

- [x] JSON-LD schema with NAP, geo-coordinates, hours, aggregate rating
- [x] "Houston" in page title, meta description, h1, section headings
- [x] "TX-249" location signal in body copy
- [x] Service area defined in `business.ts` serviceArea field
- [x] Sitemap.xml auto-generated
- [x] Robots.txt configured
- [ ] Page-level metadata for `/window-tint`, `/services`, `/gallery`, `/contact`, `/quote`
- [ ] Update `metadataBase` from `fxwindowtintexample.com` → real domain before launch
- [ ] Update canonical URLs across inner pages
- [ ] Add `alternates.canonical` to each page's `export const metadata`
- [ ] Consider adding neighborhood/suburb keywords: "Willowbrook window tint", "Spring TX window tint"

### Per-Page SEO Requirements

| Page | Recommended Title | Priority |
|------|------------------|----------|
| `/window-tint` | `Ceramic Window Tint Houston TX \| FX Window Tint` | Critical |
| `/services` | `Automotive Services & Prices Houston \| FX Window Tint` | High |
| `/gallery` | `Window Tint Gallery Houston \| FX Window Tint Installations` | Medium |
| `/contact` | `Window Tint Shop Houston TX-249 \| FX Window Tint Location` | High |
| `/quote` | `Get a Free Window Tint Quote Houston \| FX Window Tint` | High |

---

## 11. Component Architecture

### Current Structure
```
src/
├── app/
│   ├── layout.tsx          ← Global layout, metadata, JSON-LD schema
│   ├── page.tsx            ← Homepage (use client — consider removing)
│   ├── window-tint/page.tsx
│   ├── services/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── quote/page.tsx      ← Suspense wrapper for useSearchParams
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  (RSC)
│   │   ├── Navbar.tsx           (use client)
│   │   ├── Footer.tsx           (RSC)
│   │   └── MobileFloatingCTA.tsx (RSC)
│   ├── sections/
│   │   ├── Hero.tsx             (RSC) ✅
│   │   ├── TrustCredibility.tsx (RSC) ✅
│   │   ├── CeramicTint.tsx      (RSC) ✅
│   │   ├── ShadeSelector.tsx    (use client — state)
│   │   ├── FeaturedServices.tsx (use client — UNNECESSARY, remove)
│   │   ├── WhyChooseUs.tsx      (RSC) ✅
│   │   ├── Reviews.tsx          (RSC) ✅
│   │   ├── FinalCTA.tsx         (RSC) ✅
│   │   ├── Services.tsx         (use client — tabs + router)
│   │   ├── QuoteForm.tsx        (use client — multi-step form)
│   │   ├── LocationContact.tsx  (RSC) ✅
│   │   ├── Gallery.tsx          (use client — lightbox)
│   │   ├── FAQ.tsx              (use client — accordion)
│   │   ├── HeatShieldCalculator.tsx (use client)
│   │   └── TintComparison.tsx   (use client or RSC)
│   └── ui/
│       ├── BrandLogo.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Lightbox.tsx
├── data/
│   ├── business.ts
│   ├── services.ts
│   ├── reviews.ts
│   ├── shades.ts
│   ├── gallery.ts
│   ├── assets.ts
│   └── faq.ts
└── lib/
    └── utils.ts
```

### Architecture Improvements

| Component | Issue | Fix |
|-----------|-------|-----|
| `page.tsx` (homepage) | `"use client"` directive at top even though none of the directly rendered components require it — they import client components which handle their own context | Remove `"use client"` from `page.tsx`; Next.js handles propagation |
| `FeaturedServices.tsx` | `"use client"` with no client-side state/effects | Remove directive → becomes RSC |
| `WhyChooseUs.tsx` | `href="#quote"` raw anchor | Replace with `Link href="/quote"` |
| `ShadeSelector.tsx` | `href="#quote"` raw anchor | Replace with `Link href="/quote"` |
| `QuoteForm.tsx` | 592-line monolithic component | Extract Step 1, Step 2, Step 3 into sub-components |
| `Services.tsx` | `useRouter` for the quote redirect fallback is correct | ✅ Keep as-is |

### Missing Components / Files to Create

| Item | Purpose | Priority |
|------|---------|----------|
| `src/app/window-tint/metadata.ts` or `export const metadata` | Per-page SEO | High |
| `src/app/services/metadata.ts` | Per-page SEO | High |
| `src/app/contact/metadata.ts` | Per-page SEO | High |
| `src/app/quote/metadata.ts` | Per-page SEO | High |
| `src/app/gallery/metadata.ts` | Per-page SEO | Medium |
| `public/images/services/*.jpg` (10 files) | Service card images | Critical |
| `src/lib/email.ts` | Form submission backend handler | Critical |
| `src/app/api/quote/route.ts` | Next.js API route for form submission | Critical |

---

## 12. Prioritized Implementation Roadmap

### 🔴 Critical — Do First (Revenue & Functionality Blockers)

| # | Task | File(s) | Impact | Status |
|---|------|---------|--------|--------|
| C1 | **Connect quote form to real backend** (API route + tracking ID) | `QuoteForm.tsx`, `src/app/api/quote/route.ts` | 🔥 Revenue | ✅ Completed |
| C2 | **Fix `href="#quote"` anchor links** (replaced with `Link href="/quote"`) | `ShadeSelector.tsx`, `WhyChooseUs.tsx`, `FAQ.tsx`, `HeatShieldCalculator.tsx`, `TintComparison.tsx`, `Lightbox.tsx` | Broken CTA | ✅ Completed |
| C3 | **Add real service images** to `servicesData` (all 10 services) | `src/data/services.ts` | Broken UI | ✅ Completed |
| C4 | **Update `metadataBase`** domain to clean production domain | `layout.tsx:27` | SEO | ✅ Completed |
| C5 | **Replace Unsplash OG image** with high-res automotive showcase image | `layout.tsx` | Social sharing | ✅ Completed |

### 🟠 High — Complete Before Launch

| # | Task | File(s) | Impact | Status |
|---|------|---------|--------|--------|
| H1 | Add per-page `export const metadata` to all 5 inner pages | Each page's `page.tsx` | Local SEO | ✅ Completed |
| H2 | Configure hero vehicle background with high-impact showcase | `Hero.tsx`, `assets.ts` | First impression | ✅ Completed |
| H3 | Replace ceramic detail placeholder with high-res detail photo | `CeramicTint.tsx`, `assets.ts` | Credibility | ✅ Completed |
| H4 | Add film brand names to CeramicTint section (3M, Llumar, SunTek, Ceramic IR) | `CeramicTint.tsx` | Trust + SEO | ✅ Completed |
| H5 | Add warranty statement to ceramic section ("Lifetime Warranty") | `CeramicTint.tsx` | Conversion | ✅ Completed |
| H6 | Remove `"use client"` from `FeaturedServices.tsx` (now RSC) | `FeaturedServices.tsx` | Performance | ✅ Completed |
| H7 | Fix `"use client"` on `page.tsx` homepage (now fast Server Component) | `page.tsx` | Performance | ✅ Completed |
| H8 | Add canonical metadata to all inner pages | `window-tint`, `services`, `gallery`, `contact`, `quote` | SEO | ✅ Completed |
| H9 | Nav breakpoint: change `hidden sm:flex` → `hidden md:flex` & clean tablet nav | `Navbar.tsx` | Mobile UX | ✅ Completed |

### 🟡 Medium — After Launch Optimizations

| # | Task | File(s) | Impact | Status |
|---|------|---------|--------|--------|
| M1 | Add an email field to QuoteForm | `QuoteForm.tsx` | Lead quality | ✅ Completed |
| M2 | Improve `TrustCredibility` card content (Master Technicians, Defroster-Safe) | `TrustCredibility.tsx` | Authenticity | ✅ Completed |
| M3 | Link TrustCredibility cards to relevant pages | `TrustCredibility.tsx` | UX | ✅ Completed |
| M4 | Replace `ShadeSelector` window silhouettes with real car window photo | `ShadeSelector.tsx` | Wow factor | ✅ Completed |
| M5 | Add Google Business Profile logo/G icon to Reviews section header | `Reviews.tsx` | Trust | ✅ Completed |
| M6 | Add before/after gallery section to `/gallery` page | `BeforeAfterShowcase.tsx` | Conversion | ✅ Completed |
| M7 | Replace emoji `📍` with `<MapPin>` in `FinalCTA` | `FinalCTA.tsx` | Visual consistency | ✅ Completed |
| M8 | Add `aria-label` to star icons in `Reviews.tsx` | `Reviews.tsx` | Accessibility | ✅ Completed |
| M9 | Add neighborhood keywords to service area copy | Multiple pages | Local SEO | ✅ Completed |
| M10 | Add "Walk-ins Welcome / Same Day Service" badge to Hero | `Hero.tsx` | Conversion | ✅ Completed |
| M11 | Replace native date input with better mobile-friendly date picker | `QuoteForm.tsx` | Mobile UX | Planned |
| M12 | Add fade-in-on-scroll entrance animations | All sections | Delight | Planned |
| M13 | Refactor `QuoteForm.tsx` into step sub-components | `QuoteForm.tsx` | Maintainability | Planned |
| M14 | Add Google Maps embed URL from `business.ts` to LocationContact | `LocationContact.tsx` | Consistency | ✅ Completed |
| M15 | Update `useRouter` push to include service preset in QuoteForm redirect fallback | `Services.tsx` | UX | ✅ Completed |

---

## 13. Business Data Reference

**Always use these exact values — never approximate or invent:**

```
Name:         FX Window Tint Stereo Alarms Car Audio
Short Name:   FX Window Tint
Address:      11649 TX-249 #600, Houston, TX 77086
Phone:        (832) 768-6256   /   tel:+18327686256
Reviews:      285 Google Reviews   (do NOT display the 4.8 rating publicly)
Google Maps:  https://maps.app.goo.gl/FwuA9C4xp2oeDwAW8
Tagline:      "Get your tint job done right with quality tint."
Service Area: Houston, TX and surrounding Greater Houston communities
Hours:        Monday–Saturday: 9:00 AM – 6:00 PM (Call to verify & book)
              Sunday: Appointments / Call for availability
```

**Starting Prices (never change without client approval):**

| Service | Starting Price |
|---------|---------------|
| Ceramic Tint Heat Shield Protection | $250 |
| Tesla Ceramic Tinting | $399 |
| Windshield Ceramic Tint | $180 |
| Heat Efficiency Tint / Dark Shades | $175 |
| Car Audio Upgrades | $199 |
| Audio Equipment Sales & Setup | $100 |
| Viper Remote Start & Car Security | $159 |
| Headlight & Fog Light Bulb Upgrades | $59 |
| Professional Tint Removal | $20 |
| Wiring Installation & Repair | $55 |

---

*This README is the primary implementation guide for the FX Window Tint website. Update it as decisions are made or implementations change.*
