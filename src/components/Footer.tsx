import { NavLink } from "react-router-dom";
import { navLinks, site } from "../data/site.ts";
import { Logo } from "./Logo.tsx";
import { XIcon } from "./XIcon.tsx";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-20">
        <div>
          <Logo />
          <p className="mt-6 font-serif text-3xl font-normal italic text-ivory/85">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">Navigation</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm transition ${isActive ? "text-gold" : "text-ivory/75 hover:text-ivory"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">Contact</p>
          <a href={site.mailto} className="mt-5 inline-block text-sm text-ivory/80 transition hover:text-gold">
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-gold">Social</p>
          <a
            href={site.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.xLabel}
            className="mt-5 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-ivory transition hover:border-gold hover:text-gold"
          >
            <XIcon />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-sm text-stone lg:px-10">
          © 2026 VÉLORA MOTORS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
