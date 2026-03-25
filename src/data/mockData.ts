export interface JuiceProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  fallbackUrl: string;
  badge?: string;
  badgeType?: 'primary' | 'accent';
  bgColor: string;
  isComingSoon?: boolean;
  ingredients: { name: string; img: string }[];
  nutrition: {
    calories: string;
    facts: { label: string; amount: string; percentage?: string }[];
  };
}

export const JUICE_PRODUCTS: JuiceProduct[] = [
  {
    id: "ginger-orange",
    name: "Ginger Orange",
    description: "A bright, golden crush of premium sun-ripened oranges with a hint of local ginger.",
    imageUrl: "/images/products/orange-juice.png",
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj3N8n6VwPx25CZqHynQDz3y-6azJatgY7nXhJvgO-hzaD5ErkQplCec3ipImoZ1P9QrZMlb73Hv9mOhxfCdeVfZse4p-o2Mdqp-P_FOCfAwMBc2oGKEcKU0i4btQfyrmcmTs7Su3I1-5xL6Dgn7qV_-uFN_YyiNT5jh-dnUKzcPXgZcXIRiJ0oqxXsbHJiUv0I-FWSiW3jqYIJDti_fe1DxFqItOdCc72PUJhWORKWvfuV_bgrJdi0u7jqc1expHwDTSPjfHToELg",
    badge: "Signature",
    badgeType: "primary",
    bgColor: "#FFF9F5",
    ingredients: [
      { name: 'Fresh Orange Fruit', img: '/images/ingredients/fresh-orange.png' },
      { name: 'Organic Ginger', img: '/images/ingredients/organic-ginger.png' },
      { name: 'Natural Sweetner', img: '/images/ingredients/natural-sugar.png' },
      { name: 'Natural Ctric Acid', img: '/images/ingredients/natural-citric-acid.png' }
    ],
    nutrition: {
      calories: "102.45",
      facts: [
        { label: "Total Fat", amount: "0g" },
        { label: "Sucrose", amount: "2.65mg" },
        { label: "Fructose", amount: "1.75mg" },
        { label: "Glucose", amount: "1.72mg" },
        { label: "Dietary Fiber", amount: "0.13mg" },
        { label: "Sodium", amount: "0.24mg" },
        { label: "Total Carbohydrate", amount: "0g" }
      ]
    }
  },
  {
    id: "ball-grape",
    name: "Ball Grape",
    description: "Deep, rich, and naturally sweet grapes harvested exclusively from the high-altitude crisp terraces.",
    imageUrl: "/images/products/grape-juice.png",
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwW5NWKenhwlZCqiaZkF5aZRI76aAZ2Qo8uSTH3dyXvoJBi1ErJSZrld6Pr_PPpEh5OegCl87zUTxvcPKnINUl2xzrlTWnQryUfjsXvO2oaOLUfaEOIb9xWFV4RuKD5P8bjHZExI86s_o8_7UuodR4mj0555oxZm1Habck5KhFpV28AoHfquq1mRgWb5Axd0emTKMqz4hbqpSS8UnV-tZ6sj2YJDroIWVicWZEEi66owjiAUyLZ5Qh7W9IY5RQzvpuaPbVWOpBodUA",
    badge: "Seasonal",
    badgeType: "accent",
    bgColor: "#FCF2F4",
    ingredients: [
      { name: 'Fresh Grape Fruit', img: '/images/ingredients/fresh-grape-fruit.png' },
      { name: 'Natural Ctric Acid', img: '/images/ingredients/natural-citric-acid.png' },
      { name: 'Natural Sweetner', img: '/images/ingredients/natural-sugar.png' },
      { name: 'Natural Preservatives', img: '/images/ingredients/natural-preservatives.png' }
    ],
    nutrition: {
      calories: "268.45",
      facts: [
        { label: "Total Fat", amount: "0g" },
        { label: "Sucrose", amount: "5.83mg" },
        { label: "Fructose", amount: "5.0mg" },
        { label: "Glucose", amount: "5.21mg" },
        { label: "Dietary Fiber", amount: "0.30mg" },
        { label: "Sodium", amount: "0.63mg" },
        { label: "Total Carbohydrate", amount: "0g" }
      ]
    }
  },
  {
    id: "pieces-mango",
    name: "Pieces Mango",
    description: "Lusciously sweet and thick mango puree grown organically right in the tropical heart rain forest.",
    imageUrl: "/images/products/mango-juice.png",
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-zXJr8eehVYghgzIcsqb3JI5OmZVrJA1mk5fbUU_TsBsclUgS4dF6LFdwiXAfdLTF7nE-m47cLNUz-lbCPnhJRuoZYfan05aEc4TtXRLRNdL5rtfrdCRszR0ZxMxsDX_lEI4MO1cCmnbxGGEvfTdsgqshwXzpQjH9UtmAnxfLLTx4gy2g2cOKVPhCH-VYN7WuY_Iik1-tywl_3BghgjEjgtlAGIXPY3M0LanDhMl3vusX31Yc1NjtasGpqE8JMT1Mrv-XxgqgAr8",
    badge: "Best Seller",
    badgeType: "accent",
    bgColor: "#FFF5E6",
    ingredients: [
      { name: 'Fresh Mango Fruit', img: '/images/ingredients/fresh-mango.png' },
      { name: 'Natural Sweetner', img: '/images/ingredients/natural-sugar.png' },
      { name: 'Natural Preservatives', img: '/images/ingredients/natural-preservatives.png' },
      { name: 'Natural Ctric Acid', img: '/images/ingredients/natural-citric-acid.png' }
    ],
    nutrition: {
      calories: "109.74",
      facts: [
        { label: "Total Fat", amount: "0g" },
        { label: "Sucrose", amount: "2.90mg" },
        { label: "Fructose", amount: "2.30mg" },
        { label: "Glucose", amount: "1.36mg" },
        { label: "Dietary Fiber", amount: "0.16mg" },
        { label: "Sodium", amount: "0.25mg" },
        { label: "Total Carbohydrate", amount: "0g" }
      ]
    }
  },
  {
    id: "natural-lemon",
    name: "Natural Lemon",
    description: "A refreshing blend of zesty lemons, cooling mint, and a touch of sweetness.",
    imageUrl: "/images/products/lemon-juice.png",
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5yKkQRf0zVYigbWpOv8tY7Sp1BxF84_vuGV6TH_eRSqoBZV_dzpsXpPpx804OKWsZSTzEh5hRpYtoayYam9ZKvgvSDiIi_giUe9Rj9xmMeWhYosOIOuIDjU2kCUXzSqXAokvkD2N2ZSBpX7RnW2tOI9f8dVjfPsGEEnO2T5F-brZ-SbQ2llOR2ATk0051itBy9mOeNkxK9EvRKasvIF7WP7k_yBqWbC8Sa4zvQSjvQyMgBE0XFq_4wmuSH9Wom67VI8PGq6Edv9eQ",
    badge: "New",
    badgeType: "primary",
    bgColor: "#F0FAEE",
    ingredients: [
      { name: 'Fresh Lemon', img: '/images/ingredients/fresh-lemon.png' },
      { name: 'Refreshing Mint', img: '/images/ingredients/fresh-mint.png' },
      { name: 'Natural Sweetner', img: '/images/ingredients/natural-sugar.png' },
      { name: 'Natural Preservatives', img: '/images/ingredients/natural-preservatives.png' }
    ],
    nutrition: {
      calories: "102.43",
      facts: [
        { label: "Total Fat", amount: "0g" },
        { label: "Sucrose", amount: "2.65mg" },
        { label: "Fructose", amount: "1.75mg" },
        { label: "Glucose", amount: "1.72mg" },
        { label: "Dietary Fiber", amount: "0.13mg" },
        { label: "Sodium", amount: "0.24mg" },
        { label: "Total Carbohydrate", amount: "0g" }
      ]
    }
  },
  {
    id: "ice-bounty",
    name: "Ice Bounty",
    description: "A rich, creamy blend of chocolate and milk infused with warm aromatic spices.",
    imageUrl: "/images/products/orange-juice.png", // Placeholder
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj3N8n6VwPx25CZqHynQDz3y-6azJatgY7nXhJvgO-hzaD5ErkQplCec3ipImoZ1P9QrZMlb73Hv9mOhxfCdeVfZse4p-o2Mdqp-P_FOCfAwMBc2oGKEcKU0i4btQfyrmcmTs7Su3I1-5xL6Dgn7qV_-uFN_YyiNT5jh-dnUKzcPXgZcXIRiJ0oqxXsbHJiUv0I-FWSiW3jqYIJDti_fe1DxFqItOdCc72PUJhWORKWvfuV_bgrJdi0u7jqc1expHwDTSPjfHToELg",
    badge: "Coming Soon",
    badgeType: "accent",
    bgColor: "#F0F8FF",
    isComingSoon: true,
    ingredients: [],
    nutrition: {
      calories: "0",
      facts: []
    }
  },
  {
    id: "pieces-pineapple",
    name: "Pieces Pineapple",
    description: "Pure, golden pineapple chunks pressed into a sweet, vibrant nectar of the sun.",
    imageUrl: "/images/products/mango-juice.png", // Placeholder
    fallbackUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-zXJr8eehVYghgzIcsqb3JI5OmZVrJA1mk5fbUU_TsBsclUgS4dF6LFdwiXAfdLTF7nE-m47cLNUz-lbCPnhJRuoZYfan05aEc4TtXRLRNdL5rtfrdCRszR0ZxMxsDX_lEI4MO1cCmnbxGGEvfTdsgqshwXzpQjH9UtmAnxfLLTx4gy2g2cOKVPhCH-VYN7WuY_Iik1-tywl_3BghgjEjgtlAGIXPY3M0LanDhMl3vusX31Yc1NjtasGpqE8JMT1Mrv-XxgqgAr8",
    badge: "Coming Soon",
    badgeType: "accent",
    bgColor: "#FFFFF0",
    isComingSoon: true,
    ingredients: [],
    nutrition: {
      calories: "0",
      facts: []
    }
  }
];

export const MARQUEE_ITEMS = [
  "100% ORGANIC",
  "OMANI PRODUCT",
  "NO ADDED PRESERVATIVES",
  "FARM TO BOTTLE",
];

export const HERITAGE_ITEMS = [
  { icon: "local_shipping", label: "Zero Waste" },
  { icon: "water_drop", label: "Pure Nectar" },
  { icon: "landscape", label: "Local Soils" },
  { icon: "diversity_1", label: "Farm Support" }
];
