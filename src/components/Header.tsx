import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { logos } from "./Logo";

const left = [{ to: "/menu", label: "Menu" }, { to: "/locations", label: "Location" }] as const;
const right = [{ to: "/about-us", label: "About Us" }, { to: "/news", label: "News" }] as const;
const linkCls = "rounded-full px-3 py-2 text-base transition-colors duration-[350ms] hover:bg-ivory hover:text-espresso focus-visible:bg-ivory focus-visible:text-espresso";

function LogoButton() {
  return (
    <Link to="/" aria-label="Brown Town Café home" className="logo-roll grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-ivory">
      <span className="roll flex flex-col items-center" aria-hidden>
        <img src={logos.monogram} alt="" className="h-7 w-auto" style={{ marginBottom: 12 }} />
        <img src={logos.monogram} alt="" className="h-7 w-auto" />
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("keydown", esc); };
  }, []);

  const pill = `bg-espresso text-ivory transition-[box-shadow,border-color] duration-[350ms] border ${scrolled ? "border-ivory/40 shadow-[0_8px_30px_-8px_var(--espresso)]" : "border-transparent"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mt-4 flex justify-center px-4">
        <nav aria-label="Main" className={`hidden grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] items-center gap-5 rounded-full px-5 py-3 md:grid ${pill}`}>
          <div className="flex items-center justify-end gap-3">
            {left.map((l) => <Link key={l.to} to={l.to} className={linkCls} activeProps={{ className: "text-caramel" }}>{l.label}</Link>)}
          </div>
          <LogoButton />
          <div className="flex items-center justify-start gap-3">
            {right.map((l) => <Link key={l.to} to={l.to} className={linkCls} activeProps={{ className: "text-caramel" }}>{l.label}</Link>)}
          </div>
        </nav>
        <nav aria-label="Main" className={`w-full max-w-sm overflow-hidden rounded-[28px] md:hidden ${pill}`}>
          <div className="flex items-center justify-between p-2 pl-3">
            <LogoButton />
            <button className="burger grid h-10 w-10 place-items-center gap-1 rounded-full" aria-expanded={open} aria-controls="mnav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
              <span /><span /><span />
            </button>
          </div>
          <div id="mnav" className={`grid transition-[grid-template-rows] duration-[350ms] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <ul className="flex flex-col gap-1 overflow-hidden px-3" hidden={!open}>
              {[...left, ...right].map((l) => <li key={l.to}><Link to={l.to} className={`${linkCls} block`}>{l.label}</Link></li>)}
              <li className="h-3" />
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
