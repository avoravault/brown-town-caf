import { createFileRoute } from "@tanstack/react-router";
import { VisitCard } from "@/components/Blocks";
import { CtaBanner } from "@/components/CtaBanner";
import { location } from "@/data/site";

export const Route = createFileRoute("/locations")({
  head: () => ({ meta: [
    { title: "Location — Brown Town Café, Mirdif" },
    { name: "description", content: "Find Brown Town Café in Mirdif, Dubai." },
    { property: "og:title", content: "Location — Brown Town Café" },
    { property: "og:description", content: "Brown Town Café, Mirdif, Dubai." },
  ] }),
  component: () => (
    <>
      <section className="bg-espresso pb-24 pt-[184px] text-center text-ivory max-md:pt-36">
        <h1 className="h1 container-x">Our Location</h1>
        <p className="mt-3">One café, in the heart of Mirdif.</p>
      </section>
      <section className="container-x section-y grid items-center gap-12 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-tint">
          <iframe title="Brown Town Café location map" src={location.mapEmbedUrl} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="rounded-3xl bg-espresso p-2"><VisitCard /></div>
      </section>
      <CtaBanner />
    </>
  ),
});
