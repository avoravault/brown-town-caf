import { Link } from "@tanstack/react-router";
import { categories, location, socialLinks } from "@/data/site";
import { logos } from "./Logo";
import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <>
      <Ticker />
      <footer className="bg-espresso text-ivory">
        <div className="container-x grid gap-12 py-24 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <img src={logos.primaryIvory} alt="Brown Town Café" className="h-auto w-52" width={386} height={324} loading="lazy" />
          <div><h2 className="h5 mb-4 text-caramel">Visit</h2><p>{location.address ?? location.area}</p></div>
          <div>
            <h2 className="h5 mb-4 text-caramel">Pages</h2>
            <ul className="space-y-2">
              {([["/menu","Menu"],["/locations","Location"],["/about-us","About Us"],["/news","News"]] as const).map(([to,l]) => <li key={to}><Link to={to} className="hover:text-caramel">{l}</Link></li>)}
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
