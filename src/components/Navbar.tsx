import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/site.ts";
import { Logo } from "./Logo.tsx";

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  if (path !== location.pathname) {
    setPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${solid ? "border-b border-white/10 bg-ink/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-[0.68rem] font-medium uppercase tracking-[0.16em] transition xl:text-[0.72rem] xl:tracking-[0.2em] ${isActive ? "text-gold" : "text-ivory/75 hover:text-ivory"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <NavLink
            to="/vehicles"
            className="hidden min-h-11 items-center border border-ivory/30 px-5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ivory transition hover:border-gold hover:text-gold lg:inline-flex"
          >
            View Collection
          </NavLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-ink transition duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-6 py-8" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 font-serif text-4xl transition ${isActive ? "text-gold" : "text-ivory"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/vehicles"
            className="mt-8 inline-flex min-h-12 items-center justify-center border border-ivory/30 px-6 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory"
          >
            View Collection
          </NavLink>
        </nav>
      </div>
    </>
  );
}
