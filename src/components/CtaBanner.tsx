import { Link } from "@tanstack/react-router";
import { orderingLinks, cupImages } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="container-x section-y">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-caramel px-8 py-16 text-ivory md:grid-cols-[1.3fr_1fr] md:px-16">
        <div>
          <h2 className="h2">Come by for a cup</h2>
          <p className="mt-3 max-w-md">Coffee, matcha and more — in the heart of Mirdif.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {orderingLinks.length ? (
              orderingLinks.map((o) => <a key={o.url} href={o.url} className="btn btn-ivory">{o.label}</a>)
            ) : (
              <Link to="/menu" className="btn btn-ivory">Explore the Menu</Link>
            )}
          </div>
        </div>
        <img src={cupImages.cappuccino} alt="" loading="lazy" className="mx-auto h-64 rotate-6 md:h-80" />
      </div>
    </section>
  );
}
