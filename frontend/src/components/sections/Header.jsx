import React, { useState, useEffect } from "react";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "../../data/restaurant";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 py-4 md:py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-baseline gap-2 group"
        >
          <span
            className={`font-display text-2xl md:text-3xl leading-none transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-stone-50"
            }`}
          >
            Narmada
          </span>
          <span
            className={`label-eyebrow hidden sm:inline transition-colors duration-300 ${
              scrolled ? "text-stone-500" : "text-stone-200/80"
            }`}
          >
            Bannerghatta
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={`label-eyebrow transition-colors duration-300 hover:text-orange-700 ${
                scrolled ? "text-stone-700" : "text-stone-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT.phoneTel}`}
            data-testid="header-call-now-btn"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-700 text-stone-50 hover:bg-orange-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span className="label-eyebrow text-xs">Call Now</span>
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-stone-900" : "text-stone-50"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-stone-200"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="label-eyebrow text-stone-700 hover:text-orange-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${RESTAURANT.phoneTel}`}
              data-testid="mobile-call-now-btn"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-orange-700 text-stone-50"
            >
              <Phone className="w-4 h-4" />
              <span className="label-eyebrow text-xs">Call {RESTAURANT.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
