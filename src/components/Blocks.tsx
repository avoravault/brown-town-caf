import { Link } from "@tanstack/react-router";
import { location } from "@/data/site";

// A conceptual interior visualization, not a photograph of the finished café.
// URL encoding preserves the combining accent in the filename uploaded to GitHub.
export const interiorPhotos: string[] = ["/interiors/Brown%20Town%20Cafe%CC%81%20Interior.png"];

export function InteriorSlot({ src, className = "" }: { src?: string; className?: string }) {
  if (!src) return null;
  return (
    <figure className={`interior-reveal relative overflow-hidden rounded-3xl bg-tint ${className}`}>
      <img
        src={src}
        alt="Brown Town Café interior concept showing the espresso bar, caramel seating and checkerboard floor"
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <figcaption className="absolute bottom-4 left-4 rounded-full bg-espresso/85 px-4 py-2 text-xs font-medium uppercase tracking-widest text-ivory">
        Interior concept
      </figcaption>
    </figure>
  );
}

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
