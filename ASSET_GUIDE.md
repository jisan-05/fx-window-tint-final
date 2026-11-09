# FX Window Tint — Asset & Photo Replacement Guide

This guide explains how to replace the curated placeholder images with authentic photos directly from your Google Business Profile:
🔗 **Google Business Profile:** [https://maps.app.goo.gl/FwuA9C4xp2oeDwAW8](https://maps.app.goo.gl/FwuA9C4xp2oeDwAW8)

All image paths and metadata are centralized in [`src/data/assets.ts`](file:///f:/Main-Web-Dev/Fx-Window-Tint-Final/src/data/assets.ts) and [`src/data/gallery.ts`](file:///f:/Main-Web-Dev/Fx-Window-Tint-Final/src/data/gallery.ts).

---

## 📸 Recommended Photos to Download from Google Business Profile

| Section / Slot | Current File / Path | Target Image from Google Maps Profile | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| **Hero Background** | `assetRegistry.heroVehicle` | A finished customer vehicle with dark ceramic tint parked outside the shop or inside the bay under dramatic lighting. | `1920 x 1080` (16:9) |
| **Ceramic Feature Close-up** | `assetRegistry.ceramicDetail` | A technician squeegeeing / heat-shrinking ceramic film onto vehicle door glass or rear windshield. | `1200 x 800` (3:2) |
| **Shop Front / Exterior** | `assetRegistry.shopFront` | Front view of the shop at `11649 TX-249 #600` showing the "FX Window Tint Stereo Alarms Car Audio" sign and bay entrance. | `1200 x 800` (3:2) |
| **Gallery 1 (SUV Ceramic Tint)** | `galleryItems[0]` | Client SUV (e.g. Chevy Tahoe, Suburban, or GMC Yukon) with fresh dark ceramic tint. | `1000 x 750` (4:3) |
| **Gallery 2 (Tesla Ceramic Tint)** | `galleryItems[1]` | Tesla Model 3 or Model Y showing the clean one-piece rear curved window tint. | `1000 x 750` (4:3) |
| **Gallery 3 (Windshield Tint)** | `galleryItems[2]` | Front view of vehicle windshield with clear 70% ceramic film or visor strip installed. | `1000 x 750` (4:3) |
| **Gallery 4 (Car Audio 10" Screen)** | `galleryItems[3]` | Interior dashboard photo showing a 10-inch Tesla-style tablet radio or Apple CarPlay screen illuminated. | `1000 x 750` (4:3) |
| **Gallery 5 (Sedan Dark Tint)** | `galleryItems[4]` | Finished dark tint sedan (e.g. Honda Accord, BMW, or Dodge Charger). | `1000 x 750` (4:3) |
| **Gallery 6 (Tesla Glass Roof)** | `galleryItems[5]` | Interior looking up through a tinted Tesla panoramic glass roof. | `1000 x 750` (4:3) |
| **Gallery 7 (Subwoofer Enclosure)** | `galleryItems[7]` | Trunk / back seat sub box or amplifier setup installed by FX technicians. | `1000 x 750` (4:3) |

---

## 🛠️ How to Replace an Image

1. Save your downloaded photo into the `public/images/` folder (e.g., `public/images/hero/hero-car.jpg`).
2. Open [`src/data/assets.ts`](file:///f:/Main-Web-Dev/Fx-Window-Tint-Final/src/data/assets.ts).
3. Update `currentPath` with the local path:
   ```ts
   heroVehicle: {
     id: "heroVehicle",
     slot: "Homepage Hero Background",
     currentPath: "/images/hero/hero-car.jpg", // <-- your new photo
     ...
   }
   ```
4. Run `npm run build` to verify the asset.

---

## 📞 Business Information & Contact Settings
All business contact data (phone number, address, Google Maps link, review count, and business hours) is centralized in:
[`src/data/business.ts`](file:///f:/Main-Web-Dev/Fx-Window-Tint-Final/src/data/business.ts)

Whenever hours or phone numbers change, updating that single file updates the entire website instantly!

