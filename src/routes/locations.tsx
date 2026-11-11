import { createFileRoute } from "@tanstack/react-router";
import { InteriorSlot, VisitCard, interiorPhotos } from "@/components/Blocks";
import { CtaBanner } from "@/components/CtaBanner";

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
      <section className={`container-x section-y grid items-center gap-12 ${interiorPhotos.length ? "lg:grid-cols-2" : "max-w-3xl"}`}>
        {interiorPhotos[0] && <InteriorSlot src={interiorPhotos[0]} className="aspect-[4/3]" />}
        <div className="rounded-3xl bg-espresso p-2"><VisitCard /></div>
      </section>
      <CtaBanner />
    </>
  ),
});
