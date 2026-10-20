/**
 * AeroAg Australia - Site Configuration
 * SINGLE SOURCE OF TRUTH
 */

export const SITE = {
  name: "AeroAg Australia",
  tagline: "Turnkey Agricultural Drone Solutions for Australian Farmers",
  domain: "www.aeroag.com.au", // Change to "pending" if domain is not yet active
  protocol: "https",
  locale: "en-AU",
  currency: "AUD",
  target: "vercel",
  primaryColor: "#006400", // Forest Green for Ag
  gscVerification: "",
  indexNowKey: "aeroag-index-key-2026",
  cartKey: "aeroag-cart",
  lastReviewed: "2026-10-12"
};

export const CONTACT = {
  email: "sales@aeroag.com.au",
  phone: "+61 400 000 000",
  whatsapp: "+61400000000",
  address: "Toowoomba QLD",
  region: "Servicing all Australia",
  hq: "Toowoomba, Queensland, Australia",
  country: "Australia",
  abn: "" // Omit as per request
};

export const SHOP = {
  minOrder: 0,
  freeShippingThreshold: 5000,
  shippingFee: 0,
  cryptoDiscount: 0,
  paymentMethods: ["bank-transfer", "finance", "credit-card"],
};

export const FORMS = {
  provider: "web3forms",
  web3formsKey: "YOUR-WEB3FORMS-KEY-HERE",
  resendFrom: "onboarding@resend.dev",
  turnstileSiteKey: "",
};

export const CHAT = {
  channels: [
    { type: "whatsapp", value: "+61400000000" },
    { type: "email", value: "sales@aeroag.com.au" }
  ]
};

export const BRAND = {
  foundingYear: "2024",
  foundingLocation: "Toowoomba, QLD",
  description: "AeroAg Australia supplies turnkey agricultural drone packages to Australian farmers, specialising in broadacre, pasture, orchard, and vineyard operations.",
  milestones: [
    { year: "2024", event: "AeroAg Australia established in Toowoomba." },
    { year: "2025", event: "Launch of Turnkey Field Packages for T50 and T25 systems." }
  ],
  differentiation: [
    "Ready-to-Fly packages including setup and training",
    "Written Australian warranty support",
    "Specialised chemical batching and trailer integration",
    "Expert CASA regulatory guidance"
  ],
  sameAs: [],
  awards: [],
};

export const CATEGORIES = [
  { slug: "spraying-drones", name: "Spraying Drones", description: "Heavy-lift systems for crop protection and liquid application.", image: "spraying-drones.webp" },
  { slug: "spreading-drones", name: "Spreading Drones", description: "Efficient granulate and seed distribution systems.", image: "spreading-drones.webp" },
  { slug: "mapping-drones", name: "Mapping & Agronomy", description: "Multispectral imaging for crop health and NDVI.", image: "mapping-drones.webp" }
];

export const PRODUCTS = [
  {
    slug: "dji-agras-t50",
    name: "DJI Agras T50",
    category: "spraying-drones",
    price: 24200,
    priceIncGst: true,
    badge: "Most Powerful",
    shortDescription: "40L Spraying / 50kg Spreading. The ultimate broadacre workhorse.",
    description: "The DJI Agras T50 is the flagship of agricultural drones, featuring a 40L spray tank and 50kg spreading capacity. Equipped with dual atomizing spraying systems and phased array radars, it delivers up to 21 ha/hr coverage.",
    images: ["agras-t50.webp"],
    featured: true,
    packages: [
      { name: "Aircraft Only", price: 24200, inclusions: ["T50 Aircraft", "Remote Controller", "Standard Accessories"] },
      { name: "Ready-to-Fly", price: 32990, inclusions: ["T50 Aircraft", "3 Intelligent Flight Batteries", "Fast Charger", "Cooling Station", "Remote Controller", "1-Day Setup & Training", "Written Australian Warranty"], popular: true },
      { name: "Turnkey Field Package", price: 44990, inclusions: ["Everything in Ready-to-Fly", "C10000 Power Station", "Field Trailer", "Petrol Generator", "Chemical Batching System"] }
    ]
  },
  {
    slug: "dji-agras-t25",
    name: "DJI Agras T25",
    category: "spraying-drones",
    price: 18150,
    priceIncGst: true,
    badge: "Compact & Versatile",
    shortDescription: "20L Spraying / 25kg Spreading. Ideal for orchards and solo operators.",
    description: "The DJI Agras T25 offers the same advanced features as the T50 in a more portable frame. Perfect for Australian orchards, vineyards, and smaller broadacre plots.",
    images: ["agras-t25.webp"],
    featured: true,
    packages: [
      { name: "Aircraft Only", price: 18150, inclusions: ["T25 Aircraft", "Remote Controller", "Standard Accessories"] },
      { name: "Ready-to-Fly", price: 27990, inclusions: ["T25 Aircraft", "3 Batteries", "Charger", "Remote Controller", "1-Day Setup & Training", "Australian Warranty"], popular: true },
      { name: "Turnkey Field Package", price: 36990, inclusions: ["Everything in Ready-to-Fly", "Field Management Kit", "Transport Solution"] }
    ]
  },
  {
    slug: "dji-agras-t40",
    name: "DJI Agras T40",
    category: "spraying-drones",
    price: 0, // Price on request
    priceIncGst: true,
    badge: "Proven Workhorse",
    shortDescription: "40L Spraying / 50kg Spreading. Reliable active phased array radar system.",
    description: "The DJI Agras T40 remains a powerful option for pasture regeneration and broadacre spraying. Available new or pre-owned with expert inspection.",
    images: ["agras-t40.webp"],
    featured: false
  },
  {
    slug: "dji-mavic-3-multispectral",
    name: "DJI Mavic 3 Multispectral",
    category: "mapping-drones",
    price: 0, // Price on request
    priceIncGst: true,
    badge: "Precision Mapping",
    shortDescription: "RGB + 4 Multispectral bands. 1cm RTK precision for NDVI.",
    description: "The Mavic 3 Multispectral (M3M) is essential for modern agronomy, providing high-resolution NDVI maps to guide variable rate application.",
    images: ["mavic-3m.webp"],
    featured: true
  }
];

export const BUNDLES = [
  {
    name: "Scout & Spray Bundle",
    price: 46990,
    inclusions: ["T50 Ready-to-Fly Package", "Mavic 3 Multispectral", "RTK Module", "Mapping Workflow Session"],
    description: "The complete precision agriculture workflow. Map with M3M and spray with T50."
  }
];

export const ADDONS = [
  { name: "Spare T25 Battery DB800", price: 2900 },
  { name: "C10000 Power Supply", price: 2530 },
  { name: "Care Plan (12m) T50", price: 2490 },
  { name: "Care Plan (12m) T25", price: 1490 },
  { name: "Season Consumables Kit T50", price: 990 },
  { name: "Season Consumables Kit T25", price: 690 }
];

export const PAGES = {
  about: true,
  faq: true,
  blog: false,
  wholesale: false,
  tracking: false,
  compare: true,
  search: false,
};

export const FAQ = [
  {
    question: "What is the hectares per hour coverage for the T50?",
    answer: "Under DJI test conditions (15 L/ha, 11 m swath, 7 m/s, 3 m height), the DJI Agras T50 can cover up to 21 hectares per hour. Real-world performance depends on terrain, water rate, and battery logistics."
  },
  {
    question: "Do I need a licence to fly a spray drone in Australia?",
    answer: "Yes. Operating an agricultural drone over 25kg commercially requires a Remote Pilot Licence (RePL), a Remote Operator Certificate (ReOC), and appropriate state-based chemical licensing such as a pilot chemical rating."
  },
  {
    question: "How does the autonomous RTK flight work?",
    answer: "The drones use RTK (Real-Time Kinematic) positioning for centimetre-level accuracy. Flight paths are planned using multispectral maps or manual boundary marking, and the drone executes the mission autonomously with obstacle avoidance."
  }
];

export const COMPLIANCE = {
  bannedTerms: ["360-degree radar", "O3 transmission", "vineyard canopy algorithms", "coaxial wind stability"],
  requiredFramings: ["up to", "under DJI test conditions", "Confirm current requirements with CASA and your state regulator"],
  prohibitedClaims: ["authorised DJI dealer", "lowest price", "savings guarantees"],
  ageGate: false,
  gdpr: false,
  disclaimer: "Confirm current requirements with CASA and your state regulator."
};
