import { Link } from "@tanstack/react-router";
import { formatAED, type Product } from "@/data/site";
import { logos } from "./Logo";

export function ProductImage({ p, className = "" }: { p: Product; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl bg-tint ${className}`}>
      {p.image ? (
        <img src={p.image} alt={p.name} loading="lazy" width={600} height={600} className="h-full w-full object-contain p-6" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
          <img src={logos.monogram} alt="" className="h-12 opacity-80" />
          <span className="h4 max-w-[12ch] leading-tight text-espresso">{p.name}</span>
          <span className="h-px w-10 bg-caramel" />
        </div>
      )}
    </div>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link to="/menu/$slug" params={{ slug: p.slug }} className="zoom-img block" aria-label={`${p.name}, ${formatAED(p.price)}`}>
      <ProductImage p={p} className="aspect-square" />
      <h3 className="card-title h5 mt-4">{p.name}</h3>
      <p className="mt-1 text-base text-muted-foreground">{formatAED(p.price)}</p>
    </Link>
  );
}
