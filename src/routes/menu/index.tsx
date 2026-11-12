import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { categories, productsIn } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/menu/")({
  head: () => ({ meta: [
    { title: "Menu — Brown Town Café" },
    { name: "description", content: "The Brown Town Café menu, with prices in AED." },
    { property: "og:title", content: "Menu — Brown Town Café" },
    { property: "og:description", content: "Coffee, matcha and more at Brown Town Café, Mirdif." },
  ] }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState(categories[0]?.slug);
  const [showBar, setShowBar] = useState(false);
  const area = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    categories.forEach((c) => { const el = document.getElementById(c.slug); el && io.observe(el); });
    const bar = new IntersectionObserver((es) => setShowBar(!!es[0]?.isIntersecting), { rootMargin: "-200px 0px -40% 0px" });
    area.current && bar.observe(area.current);
    return () => { io.disconnect(); bar.disconnect(); };
  }, []);
  const links = (cls: string) => categories.map((c) => (
    <a key={c.slug} href={`#${c.slug}`} aria-current={active === c.slug ? "true" : undefined}
      tabIndex={showBar ? 0 : -1} className={`btn whitespace-nowrap ${active === c.slug ? "btn-espresso" : cls}`}>{c.name}</a>
  ));
  return (
    <>
      <section className="bg-espresso pb-24 pt-[184px] text-center text-ivory max-md:pt-36">
        <div className="container-x">
          <h1 className="h1">Our Menu</h1>
          <p className="mx-auto mt-3 max-w-[608px]">Every drink and bite at Brown Town, priced in AED.</p>
          <nav aria-label="Menu categories" className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((c) => <a key={c.slug} href={`#${c.slug}`} className="btn btn-outline-ivory">{c.name}</a>)}
          </nav>
        </div>
      </section>
      <div ref={area} className="container-x">
        {categories.map((c) => {
          const items = productsIn(c.slug);
          return (
            <section key={c.slug} id={c.slug} className="scroll-mt-32 pt-24 last:pb-24">
              <div className="flex flex-wrap items-baseline gap-4"><h2 className="h2">{c.name} <span lang="ar" dir="rtl" className="text-caramel">/ {c.nameAr}</span></h2><span className="text-sm text-muted-foreground">{items.length} {items.length === 1 ? "item" : "items"}</span></div>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">{items.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
            </section>
          );
        })}
      </div>
      <nav aria-label="Menu categories (floating)" aria-hidden={!showBar}
        className={`fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100%-32px)] -translate-x-1/2 gap-2 overflow-x-auto rounded-full bg-ivory p-2 shadow-[0_10px_40px_-10px_var(--espresso)] transition-transform duration-500 ease-in-out ${showBar ? "translate-y-0" : "pointer-events-none translate-y-[200%]"}`}>
        {links("text-espresso hover:bg-tint")}
      </nav>
      <CtaBanner />
    </>
  );
}
