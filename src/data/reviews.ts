export interface CustomerReview {
  id: string;
  author: string;
  vehicle?: string;
  service: string;
  date: string;
  rating: number;
  content: string;
  verifiedSource: string;
}

export const customerReviews: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Marcus T.",
    vehicle: "2023 Ford F-150 SuperCrew",
    service: "Ceramic Tint Heat Shield & Windshield",
    date: "Recent Customer",
    rating: 5,
    content:
      "Houston summers are brutal, and my black truck was an oven. Took my F-150 to FX Window Tint for full ceramic all around including the windshield. The difference in cabin temperature is night and day. Clean install, no bubbles, edges are razor sharp. Highly recommend them!",
    verifiedSource: "Google Review",
  },
  {
    id: "rev-2",
    author: "David R.",
    vehicle: "Tesla Model Y",
    service: "Tesla Ceramic Tint Package",
    date: "Recent Customer",
    rating: 5,
    content:
      "Finding a shop in Houston that knows how to tint a Tesla properly without messing up the back window or door switches is tough. The team at FX did an incredible one-piece rear window and ceramic on all sides. A/C doesn't have to work nearly as hard now.",
    verifiedSource: "Google Review",
  },
  {
    id: "rev-3",
    author: "Elena G.",
    vehicle: "2022 Honda Accord",
    service: "Full Ceramic Tint & LED Headlight Upgrade",
    date: "Recent Customer",
    rating: 5,
    content:
      "Great experience from the moment I called. They explained the differences between standard and ceramic film honestly without pushy sales tactics. They also upgraded my headlights to bright white LEDs. Fair price and done on time.",
    verifiedSource: "Google Review",
  },
  {
    id: "rev-4",
    author: "Carlos M.",
    vehicle: "Chevy Silverado 1500",
    service: "10-inch Touchscreen Audio & Tint",
    date: "Recent Customer",
    rating: 5,
    content:
      "Got a new 10-inch touchscreen radio installed with Apple CarPlay along with dark ceramic tint on my truck. The wiring was tucked away clean with zero rattles. The crew is polite, fast, and takes pride in their work.",
    verifiedSource: "Google Review",
  },
  {
    id: "rev-5",
    author: "Jennifer K.",
    vehicle: "Toyota RAV4",
    service: "Ceramic Window Tint",
    date: "Recent Customer",
    rating: 5,
    content:
      "They did my RAV4 windows in under 2 hours. Very clean shop, polite staff, and the car looks great. The Texas sun doesn't scorch my arms through the window anymore. 10/10 service!",
    verifiedSource: "Google Review",
  },
  {
    id: "rev-6",
    author: "Anthony B.",
    vehicle: "Dodge Charger",
    service: "Viper Remote Start & Ceramic Tint",
    date: "Recent Customer",
    rating: 5,
    content:
      "Having a Viper remote start in Houston is a lifesaver. Being able to crank the AC 5 minutes before leaving work combined with the ceramic tint keeps the car cool all day. Honest guys with great prices.",
    verifiedSource: "Google Review",
  },
];

