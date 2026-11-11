import { createFileRoute } from "@tanstack/react-router";
import { InteriorSlot, interiorPhotos } from "@/components/Blocks";
import { CtaBanner } from "@/components/CtaBanner";
import { Ticker } from "@/components/Ticker";
import { logos } from "@/components/Logo";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [
    { title: "About Us — Brown Town Café" },
    { name: "description", content: "The story behind Brown Town Café, a neighbourhood coffee shop in Mirdif." },
    { property: "og:title", content: "About Brown Town Café" },
    { property: "og:description", content: "A neighbourhood coffee shop in Mirdif, Dubai." },
  ] }),
  component: () => (
    <>
      <section className="bg-espresso pb-24 pt-[184px] text-center text-ivory max-md:pt-36">
        <h1 className="h1 container-x">About Us</h1>
        <p className="mt-3">A neighbourhood coffee shop in Mirdif, Dubai.</p>
      </section>
      <Ticker />
      <section className="container-x section-y grid items-center gap-16 lg:grid-cols-2">
        <img src={logos.primaryEspresso} alt="Brown Town Café" className="mx-auto w-72" width={386} height={324} />
        <div>
          <h2 className="h2">Made for the neighbourhood</h2>
          <p className="mt-4">Brown Town is a café for Mirdif — a place for a morning cappuccino, an afternoon iced latte or a slow matcha with friends.</p>
        </div>
      </section>
      {interiorPhotos.length > 0 && (
        <section className="bg-tint section-y">
          <div className="container-x grid gap-6 md:grid-cols-3">
            {interiorPhotos.slice(0, 3).map((src, i) => <InteriorSlot key={src} src={src} className={`aspect-[3/4] ${i === 1 ? "md:mt-16" : ""}`} />)}
          </div>
        </section>
      )}
      <CtaBanner />
    </>
  ),
});
