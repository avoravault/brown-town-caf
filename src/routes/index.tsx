import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, cupImages, featured, homeCategories, location, products, publishedPosts, site } from "@/data/site";
import { FeatureIcon } from "@/components/FeatureIcon";
import { logos } from "@/components/Logo";
import { Ticker } from "@/components/Ticker";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";
import { InteriorSlot, VisitCard, interiorPhotos } from "@/components/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brown Town Café — Coffee in Mirdif, Dubai" },
      { name: "description", content: "Brown Town Café is a neighbourhood coffee shop in Mirdif, Dubai. Explore the menu and find us." },
      { property: "og:title", content: "Brown Town Café — Coffee in Mirdif, Dubai" },
      { property: "og:description", content: "A neighbourhood coffee shop in Mirdif, Dubai." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="bg-espresso pt-[184px] text-ivory max-md:pt-36">
      <div className="container-x text-center">
        <h1 className="h1 mx-auto max-w-[680px]">{site.headline}</h1>
        <p className="mt-3">{site.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/menu" className="btn btn-ivory">Explore Menu</Link>
          <Link to="/locations" className="btn btn-outline-ivory">Our Location</Link>
        </div>
      </div>
      <div className="drink-stage mt-20 max-md:mt-12">
        <img src={cupImages.icedLatte} alt="Brown Town iced latte" width={762} height={1284} fetchPriority="high" className="drink drink-left" />
        <img src={cupImages.cappuccino} alt="Brown Town cappuccino" width={819} height={1301} fetchPriority="high" className="drink drink-center" />
        <img src={cupImages.icedMatcha} alt="Brown Town iced matcha latte" width={721} height={1289} fetchPriority="high" className="drink drink-right" />
      </div>
    </section>
  );
}

function Home() {
  const feat = featured.map((s) => products.find((p) => p.slug === s)!).filter(Boolean);
  const posts = publishedPosts().slice(0, 3);
  return (
    <>
      <Hero />
      <Ticker />

      <section className="container-x section-y">
        <h2 className="h2 text-center">Explore our menu</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {homeCategories.map((s) => categories.find((c) => c.slug === s)!).map((c) => (
            <Link key={c.slug} to="/menu" hash={c.slug} className="zoom-img zoom-lg block" aria-label={`${c.name} menu`}>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-tint">
                {c.image ? <img src={c.image} alt="" loading="lazy" className="h-full w-full object-contain p-10" /> : <div className="grid h-full place-items-center p-10 text-center"><FeatureIcon name="bakery" className="h-28 w-28" /></div>}
              </div>
              <h3 className="card-title h3 mt-5 text-center">{c.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-tint section-y">
        <div className="container-x">
          <div className="mx-auto max-w-[608px] text-center">
            <h2 className="h2">On the Menu</h2>
            <p className="mt-3">A few of the drinks you'll find at Brown Town.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {feat.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
          <div className="mt-14 text-center"><Link to="/menu" className="btn btn-espresso">Explore Menu</Link></div>
        </div>
      </section>

      <section className="container-x section-y grid items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="h2">Your coffee stop in Mirdif</h2>
          <p className="mt-4 max-w-lg">Brown Town is a neighbourhood café built around good coffee, a warm room and an easy welcome.</p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {([["cup","Espresso bar","Hot and iced espresso drinks."],["matcha","Matcha","Whisked to order."],["pin","Mirdif","Right in the neighbourhood."],["bakery","Fresh bakery","Croissants, muffins and cookies."]] as const).map(([i,t,d]) => (
              <div key={t}><FeatureIcon name={i} className="h-12 w-12" /><h3 className="h5 mt-3">{t}</h3><p className="mt-1 text-base">{d}</p></div>
            ))}
          </div>
        </div>
        {interiorPhotos.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            {interiorPhotos.slice(0, 3).map((src, i) => <InteriorSlot key={src} src={src} className={i === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"} />)}
          </div>
        ) : (
          <div className="grid place-items-center rounded-3xl bg-tint p-16"><img src={logos.primaryEspresso} alt="" className="w-64" /></div>
        )}
      </section>

      <section className="section-dark">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="grid aspect-[4/3] place-items-center rounded-3xl bg-ivory/10 text-center">
            <div><p className="h3">{location.area}</p><p className="mt-2 text-sm opacity-80">Map coming soon</p></div>
          </div>
          <VisitCard />
        </div>
      </section>

      {posts.length > 0 && (
        <section className="container-x section-y">
          <div className="flex items-end justify-between"><h2 className="h2">News</h2><Link to="/news" className="btn btn-espresso">View All</Link></div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
