import { Link } from "@tanstack/react-router";
import { formatAED, products } from "@/data/site";

// A quiet product showcase, replacing the moving words and coffee-bean marquee.
const highlights = ["cappuccino", "iced-latte", "iced-matcha-latte"] as const;

export function Ticker() {
  return (
    <section aria-label="A taste of Brown Town Café" className="border-y border-espresso/10 bg-ivory text-espresso">
      <div className="container-x grid grid-cols-3 gap-3 py-4 md:gap-10 md:py-5">
        {highlights.map((slug) => {
          const product = products.find((p) => p.slug === slug);
          if (!product) return null;
          return (
            <Link
              key={product.slug}
              to="/menu/$slug"
              params={{ slug: product.slug }}
              className="group flex min-w-0 flex-col items-center gap-2 rounded-xl px-1 py-1 text-center transition-colors hover:bg-espresso/5 focus-visible:bg-espresso/5 md:flex-row md:gap-4 md:px-3 md:py-2 md:text-left"
            >
              {product.image && (
                <div className="flex h-16 w-14 shrink-0 items-center justify-center md:h-20 md:w-16">
                  <img src={product.image} alt="" loading="lazy" className="h-full w-full object-contain" />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight md:text-lg">{product.name}</p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">{formatAED(product.price)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
