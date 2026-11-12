import { Link } from "@tanstack/react-router";
import { categories, location, socialLinks, publishedPosts } from "@/data/site";
import { logos } from "./Logo";

export function Footer() {
  return (
    <>
      <footer className="bg-espresso text-ivory">
        <div className="container-x grid gap-12 py-24 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <img src={logos.primaryIvory} alt="Brown Town Café" className="h-auto w-52" width={386} height={324} loading="lazy" />
          <div>
            <h2 className="h5 mb-4 text-caramel">Visit</h2>
            <p>{location.address ?? location.area}</p>
            {location.phone && <a href={`tel:${location.phone.replaceAll(" ", "")}`} className="mt-3 block hover:text-caramel">{location.phone}</a>}
            {location.email && <a href={`mailto:${location.email}`} className="mt-2 block break-all hover:text-caramel">{location.email}</a>}
            {location.mapUrl && <a href={location.mapUrl} target="_blank" rel="noreferrer" className="mt-3 block hover:text-caramel">Get directions</a>}
          </div>
          <div>
            <h2 className="h5 mb-4 text-caramel">Pages</h2>
            <ul className="space-y-2">
              {([["/menu","Menu"],["/locations","Location"],["/about-us","About Us"]] as const).map(([to,l]) => <li key={to}><Link to={to} className="hover:text-caramel">{l}</Link></li>)}
              {publishedPosts().length > 0 && <li><Link to="/news" className="hover:text-caramel">News</Link></li>}
            </ul>
          </div>
          <div>
            <h2 className="h5 mb-4 text-caramel">Menu</h2>
            <ul className="space-y-2">
              {categories.map((c) => <li key={c.slug}><Link to="/menu" hash={c.slug} className="hover:text-caramel">{c.name}</Link></li>)}
            </ul>
            {socialLinks.length > 0 && <ul className="mt-6 flex gap-4">{socialLinks.map((s) => <li key={s.url}><a href={s.url}>{s.label}</a></li>)}</ul>}
          </div>
        </div>
        <div className="checker opacity-90" />
        <div className="container-x py-5 text-sm opacity-80">© {new Date().getFullYear()} Brown Town Café. Mirdif, Dubai.</div>
      </footer>
    </>
  );
}
