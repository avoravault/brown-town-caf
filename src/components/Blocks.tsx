import { Link } from "@tanstack/react-router";
import { location } from "@/data/site";

// Swap for real interior photography: pass `src`.
export function InteriorSlot({ src, className = "" }: { src?: string; className?: string }) {
  if (!src) return null; // hidden until interior photos are supplied
  return (
    <figure className={`relative overflow-hidden rounded-3xl bg-tint ${className}`}>
      <img src={src} alt="Brown Town interior" loading="lazy" className="h-full w-full object-cover" />
    </figure>
  );
}

export const interiorPhotos: string[] = []; // add interior photo URLs here

export function VisitCard() {
  const l = location;
  return (
    <div className="rounded-3xl bg-ivory p-10 text-espresso">
      <h2 className="h2">Visit us</h2>
      <p className="mt-4 h5">{l.name}</p>
      <p className="mt-1">{l.address ?? l.area}</p>
      <dl className="mt-6 space-y-2 text-base">
        <div><dt className="inline text-muted-foreground">Hours: </dt><dd className="inline">{l.hours ? l.hours.map((h) => `${h.days} ${h.time}`).join(" · ") : "To be announced"}</dd></div>
        {l.phone && <div><dt className="inline text-muted-foreground">Phone: </dt><dd className="inline"><a href={`tel:${l.phone}`}>{l.phone}</a></dd></div>}
        {l.email && <div><dt className="inline text-muted-foreground">Email: </dt><dd className="inline"><a href={`mailto:${l.email}`}>{l.email}</a></dd></div>}
      </dl>
      <div className="mt-8 flex flex-wrap gap-3">
        {l.mapUrl ? <a href={l.mapUrl} className="btn btn-espresso" target="_blank" rel="noreferrer">Get directions</a> : <Link to="/locations" className="btn btn-espresso">Location details</Link>}
      </div>
    </div>
  );
}
