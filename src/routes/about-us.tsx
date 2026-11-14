import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { cupImages, location } from "@/data/site";
import { InteriorSlot, interiorPhotos } from "@/components/Blocks";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [
    { title: "About Us — Brown Town Café" },
    { name: "description", content: "Coffee, matcha and bakery favourites at Brown Town Café in Mirdif, Dubai." },
    { property: "og:title", content: "About Brown Town Café" },
    { property: "og:description", content: "Your neighbourhood coffee stop in Mirdif, Dubai." },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-espresso pb-20 pt-[184px] text-center text-ivory max-md:pt-36">
        <div className="container-x">
          <p className="text-sm uppercase tracking-[.24em] text-caramel">Brown Town Café · Mirdif</p>
          <h1 className="h1 mt-5">A little more about us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-ivory/85">
            A neighbourhood spot for coffee breaks, something sweet, and the everyday moments in between.
          </p>
        </div>
      </section>

      <section className="container-x section-y grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="rounded-3xl bg-tint p-8 sm:p-12">
          <img src={cupImages.icedLatte} alt="Brown Town Café iced latte in a branded cup" loading="lazy" width={1024} height={1536} className="mx-auto h-[340px] w-full object-contain sm:h-[440px]" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[.22em] text-caramel">Our corner of Mirdif</p>
          <h2 className="h2 mt-4">Good coffee. Good company.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Some days call for a quick espresso. Others deserve a long catch-up over an iced latte.
            Brown Town Café brings hot coffee, iced drinks, matcha and bakery favourites together in one easygoing place.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed">
            Whether you are stopping by on your own or meeting friends, there is always room for another cup.
          </p>
          <Link to="/menu" className="btn btn-espresso mt-8">Explore our menu</Link>
        </div>
      </section>

      {interiorPhotos.length > 0 && (
        <section className="bg-tint section-y" aria-labelledby="interior-heading">
          <div className="container-x">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[.22em] text-caramel">A look inside</p>
                <h2 id="interior-heading" className="h2 mt-3">A place to settle in</h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed">
                An interior concept featuring warm textures, relaxed seating and Brown Town's signature palette.
              </p>
            </div>
            <InteriorSlot src={interiorPhotos[0]} className="aspect-[4/3] w-full sm:aspect-[16/9]" />
          </div>
        </section>
      )}

      <section className="bg-tint section-y">
        <div className="container-x">
          <h2 className="h2 text-center">Find your favourite</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Coffee", text: "Espresso, cappuccino and lattes, served hot or iced.", image: cupImages.cappuccino, alt: "Brown Town Café cappuccino" },
              { title: "Matcha", text: "A little green in your everyday coffee break.", image: cupImages.icedMatcha, alt: "Brown Town Café matcha latte" },
              { title: "Bakery", text: "Croissants, cookies and something sweet on the side.", image: "/bakery/chocolate-chip-cookie.webp", alt: "Brown Town Café chocolate chip cookie" },
            ].map((item) => (
              <Link key={item.title} to="/menu" className="zoom-img block rounded-3xl bg-ivory p-7 text-center">
                <div className="flex h-56 items-center justify-center">
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-full max-w-full object-contain" />
                </div>
                <h3 className="h3 mt-6">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y text-center">
        <p className="text-sm uppercase tracking-[.22em] text-caramel">Come say hello</p>
        <h2 className="h2 mt-4">See you in Mirdif</h2>
        <p className="mx-auto mt-5 max-w-xl">{location.address}</p>
        <p className="mx-auto mt-3 max-w-xl">{location.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</p>
        <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-espresso mt-8">Get directions</a>
      </section>
      <CtaBanner />
    </>
  );
}
