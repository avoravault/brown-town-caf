// Editable site content. Replace draft values here; all pages read from this file.
import cappuccino from "@/assets/cappuccino_cup.webp.asset.json";
import icedLatte from "@/assets/iced_latte_cutout.webp.asset.json";
import icedMatcha from "@/assets/iced_matcha_latte.webp.asset.json";

export const cupImages = { cappuccino: cappuccino.url, icedLatte: icedLatte.url, icedMatcha: icedMatcha.url };

export const site = {
  name: "Brown Town Café",
  headline: "Brown Town Café",
  description: "A neighbourhood coffee shop in Mirdif, Dubai.",
  announcement: "Opening in Mirdif, Dubai",
};

export type Category = { slug: string; name: string; image?: string };
export type Product = {
  slug: string;
  name: string;
  category: string; // Category slug
  price?: number; // AED — leave undefined until confirmed
  description?: string;
  image?: string;
  sizes?: { label: string; price: number }[];
  addOns?: { label: string; price: number }[];
  allergens?: string[];
  draft?: boolean; // true = not yet confirmed from the café's menu
};

// TODO(menu): the Brown Town menu file (36 items, 6 categories, AED prices) was not received.
// Replace these draft records with the confirmed menu.
export const categories: Category[] = [
  { slug: "hot-coffee", name: "Hot Coffee", image: cappuccino.url },
  { slug: "iced-coffee", name: "Iced Coffee", image: icedLatte.url },
  { slug: "matcha", name: "Matcha", image: icedMatcha.url },
];

export const products: Product[] = [
  { slug: "cappuccino", name: "Cappuccino", category: "hot-coffee", image: cappuccino.url, description: "Espresso with steamed milk and a thick layer of foam.", draft: true },
  { slug: "iced-latte", name: "Iced Latte", category: "iced-coffee", image: icedLatte.url, description: "Espresso poured over cold milk and ice.", draft: true },
  { slug: "iced-matcha-latte", name: "Iced Matcha Latte", category: "matcha", image: icedMatcha.url, description: "Matcha whisked into cold milk over ice.", draft: true },
];

export const featured = ["cappuccino", "iced-latte", "iced-matcha-latte"];

export const location = {
  name: "Brown Town Café — Mirdif",
  area: "Mirdif, Dubai",
  address: undefined as string | undefined, // exact address when supplied
  mapUrl: undefined as string | undefined,
  hours: undefined as { days: string; time: string }[] | undefined,
  phone: undefined as string | undefined,
  email: undefined as string | undefined,
};

export type Post = { slug: string; title: string; date: string; image?: string; excerpt: string; body: string[]; published: boolean };
export const posts: Post[] = [];
export const publishedPosts = () => posts.filter((p) => p.published);

export const orderingLinks: { label: string; url: string }[] = [];
export const socialLinks: { label: string; url: string }[] = [];
export const reviews: { quote: string; name: string }[] = [];

export const tickerWords = ["Espresso", "Cappuccino", "Iced Latte", "Mirdif", "Matcha", "Brown Town"];

export const formatAED = (n?: number) => (n == null ? "Price to be confirmed" : `AED ${n % 1 ? n.toFixed(2) : n}`);
export const productsIn = (slug: string) => products.filter((p) => p.category === slug);
