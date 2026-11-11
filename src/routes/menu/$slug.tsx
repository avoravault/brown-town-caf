import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, formatAED, products } from "@/data/site";
import { ProductCard, ProductImage } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/menu/$slug")({
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData: p }) => ({ meta: p ? [
    { title: `${p.name} — Brown Town Café` },
    { name: "description", content: p.description ?? `${p.name} at Brown Town Café, Mirdif.` },
    { property: "og:title", content: `${p.name} — Brown Town Café` },
    { property: "og:description", content: p.description ?? `${p.name} at Brown Town Café.` },
  ] : [{ title: "Unavailable — Brown Town Café" }, { name: "robots", content: "noindex" }] }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const cat = categories.find((c) => c.slug === p.category);
  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 4);
  return (
    <>
      <section className="container-x pt-[184px] max-md:pt-36">
        <Link to="/menu" hash={p.category} className="text-base hover:text-caramel">← Back to menu</Link>
        <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
          <ProductImage p={p} className="aspect-square" />
          <div>
            {cat && <p className="text-sm uppercase tracking-widest text-caramel">{cat.name}</p>}
            <h1 className="h2 mt-2">{p.name}</h1>
            <p className="h3 mt-4">{formatAED(p.price)}</p>
            {p.description && <p className="mt-6 max-w-md">{p.description}</p>}
            {p.sizes?.length ? <ul className="mt-6">{p.sizes.map((s) => <li key={s.label}>{s.label} — {formatAED(s.price)}</li>)}</ul> : null}
            {p.addOns?.length ? <><h2 className="h5 mt-6">Add-ons</h2><ul>{p.addOns.map((s) => <li key={s.label}>{s.label} — {formatAED(s.price)}</li>)}</ul></> : null}
            {p.allergens?.length ? <p className="mt-6 text-base">Allergens: {p.allergens.join(", ")}</p> : null}
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="container-x section-y">
          <h2 className="h3">You might also like</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
        </section>
      )}
      <CtaBanner />
    </>
  );
}
