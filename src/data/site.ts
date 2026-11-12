// Editable site content. Replace draft values here; all pages read from this file.
import cappuccino from "@/assets/cappuccino_cup.webp.asset.json";
import icedLatte from "@/assets/iced_latte_cutout.webp.asset.json";
import icedMatcha from "@/assets/iced_matcha_latte.webp.asset.json";

export const cupImages = { cappuccino: cappuccino.url, icedLatte: icedLatte.url, icedMatcha: icedMatcha.url };

export const site = {
  name: "Brown Town Café",
  headline: "Settle into Your Next Sip",
  description: "A neighbourhood coffee shop in Mirdif, Dubai.",
};

export type Category = { slug: string; name: string; nameAr: string; image?: string };
export type Product = {
  slug: string;
  name: string;
  category: string; // Category slug
  price: number; // AED
  description?: string;
  image?: string;
  sizes?: { label: string; price: number }[];
  addOns?: { label: string; price: number }[];
  allergens?: string[];
};

// Menu from the client's Brown Town menu (prices in AED). 36 items, 6 categories.
export const categories: Category[] = [
  { slug: "hot-coffee", name: "Hot Coffee", nameAr: "القهوة الساخنة", image: cappuccino.url },
  { slug: "iced-coffee", name: "Iced Coffee", nameAr: "القهوة المثلجة", image: icedLatte.url },
  { slug: "refreshers", name: "Refreshers", nameAr: "مشروبات منعشة" },
  { slug: "bakery", name: "Bakery", nameAr: "المخبوزات" },
  { slug: "signature-drinks", name: "Signature Drinks", nameAr: "مشروبات مميزة" },
  { slug: "matcha", name: "Matcha", nameAr: "ماتشا", image: icedMatcha.url },
];

export const products: Product[] = [
  { slug: "espresso", name: "Espresso", category: "hot-coffee", price: 19, image: "/hot-coffee/espresso.webp" },
  { slug: "double-espresso", name: "Double espresso", category: "hot-coffee", price: 20, image: "/hot-coffee/double-espresso.webp" },
  { slug: "americano", name: "Americano", category: "hot-coffee", price: 20, image: "/hot-coffee/americano.webp" },
  { slug: "cappuccino", name: "Cappuccino", category: "hot-coffee", price: 20, image: cappuccino.url },
  { slug: "cafe-latte", name: "Café latte", category: "hot-coffee", price: 20, image: "/hot-coffee/cafe-latte.webp" },
  { slug: "flat-white", name: "Flat white", category: "hot-coffee", price: 22, image: "/hot-coffee/flat-white.webp" },
  { slug: "spanish-latte", name: "Spanish latte", category: "hot-coffee", price: 22, image: "/hot-coffee/spanish-latte.webp" },
  { slug: "caramel-latte", name: "Caramel latte", category: "hot-coffee", price: 22, image: "/hot-coffee/caramel-latte.webp" },
  { slug: "mocha", name: "Mocha", category: "hot-coffee", price: 28, image: "/hot-coffee/mocha.webp" },
  { slug: "white-chocolate-mocha", name: "White chocolate mocha", category: "hot-coffee", price: 29, image: "/hot-coffee/white-chocolate-mocha.webp" },
  { slug: "hot-chocolate", name: "Hot chocolate", category: "hot-coffee", price: 20, image: "/hot-coffee/hot-chocolate.webp" },
  { slug: "iced-americano", name: "Iced americano", category: "iced-coffee", price: 20 },
  { slug: "iced-latte", name: "Iced latte", category: "iced-coffee", price: 20, image: icedLatte.url },
  { slug: "iced-spanish-latte", name: "Iced Spanish latte", category: "iced-coffee", price: 22, image: "/iced-coffee/iced-spanish-latte.webp" },
  { slug: "iced-caramel-latte", name: "Iced caramel latte", category: "iced-coffee", price: 22, image: "/iced-coffee/iced-caramel-latte.webp" },
  { slug: "iced-mocha", name: "Iced mocha", category: "iced-coffee", price: 28, image: "/iced-coffee/iced-mocha.webp" },
  { slug: "iced-white-mocha", name: "Iced white mocha", category: "iced-coffee", price: 28, image: "/iced-coffee/iced-white-mocha.webp" },
  { slug: "iced-flat-white", name: "Iced flat white", category: "iced-coffee", price: 25, image: "/iced-coffee/iced-flat-white.webp" },
  { slug: "cold-brew", name: "Cold brew", category: "iced-coffee", price: 25, image: "/iced-coffee/cold-brew.webp" },
  { slug: "classic-mojito", name: "Classic mojito", category: "refreshers", price: 20 },
  { slug: "blue-lagoon-mojito", name: "Blue lagoon mojito", category: "refreshers", price: 20, image: "/refreshers/blue-lagoon-mojito.webp" },
  { slug: "lemon-mint-mojito", name: "Lemon mint mojito", category: "refreshers", price: 20, image: "/refreshers/lemon-mint-mojito.webp" },
  { slug: "butter-croissant", name: "Butter croissant", category: "bakery", price: 10 },
  { slug: "cheese-croissant", name: "Cheese croissant", category: "bakery", price: 10 },
  { slug: "chocolate-croissant", name: "Chocolate croissant", category: "bakery", price: 10 },
  { slug: "chocolate-muffin", name: "Chocolate muffin", category: "bakery", price: 10 },
  { slug: "chocolate-brownie", name: "Chocolate brownie", category: "bakery", price: 10 },
  { slug: "chocolate-chip-cookie", name: "Chocolate chip cookie", category: "bakery", price: 10 },
  { slug: "1833-signature-latte", name: "1833 signature latte", category: "signature-drinks", price: 32 },
  { slug: "arabic-pistachio-latte", name: "Arabic pistachio latte", category: "signature-drinks", price: 30 },
  { slug: "arabic-mocha", name: "Arabic mocha", category: "signature-drinks", price: 30 },
  { slug: "classic-matcha-latte", name: "Classic matcha latte", category: "matcha", price: 25 },
  { slug: "iced-matcha-latte", name: "Iced matcha latte", category: "matcha", price: 25, image: icedMatcha.url },
  { slug: "mango-matcha", name: "Mango matcha", category: "matcha", price: 30 },
  { slug: "matcha-cold", name: "Matcha cold", category: "matcha", price: 32 },
  { slug: "spanish-matcha", name: "Spanish matcha", category: "matcha", price: 30 },
];

export const featured = ["cappuccino", "iced-latte", "iced-matcha-latte", "1833-signature-latte"];
export const homeCategories = ["hot-coffee", "matcha", "bakery"];

export const location = {
  name: "Brown Town Café — Mirdif",
  area: "Mirdif, Dubai",
  address: "3-1924, Mirdif, Dubai, United Arab Emirates",
  mapUrl: "https://www.google.com/maps/dir/?api=1&destination=25.2227571%2C55.4350648",
  mapEmbedUrl: "https://www.google.com/maps?q=25.2227571%2C55.4350648&z=16&output=embed",
  hours: [
    { days: "Monday–Friday", time: "10:00 AM – 11:00 PM" },
    { days: "Saturday–Sunday", time: "10:00 AM – 12:00 AM (midnight)" },
  ],
  phone: "+971 56 361 3143",
  email: "info.browntowncafe@gmail.com",
};

export type Post = { slug: string; title: string; date: string; image?: string; excerpt: string; body: string[]; published: boolean };
export const posts: Post[] = [];
export const publishedPosts = () => posts.filter((p) => p.published);

export const orderingLinks: { label: string; url: string }[] = [];
export const socialLinks: { label: string; url: string }[] = [{ label: "Instagram", url: "https://www.instagram.com/brown_town_cafe_dubai" }];
export const reviews: { quote: string; name: string }[] = [];

export const tickerWords = ["Espresso", "Cappuccino", "Iced Latte", "Mirdif", "Matcha", "Brown Town"];

export const formatAED = (n: number) => `AED ${n % 1 ? n.toFixed(2) : n}`;
export const productsIn = (slug: string) => products.filter((p) => p.category === slug);
