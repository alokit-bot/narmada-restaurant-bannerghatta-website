import React from "react";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "../../data/restaurant";

const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-stone-950 text-stone-300 px-6 md:px-12 lg:px-24 pt-20 md:pt-28 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl md:text-5xl text-stone-50 leading-tight">
              Narmada
              <span className="block italic text-amber-200/95 text-3xl md:text-4xl mt-1">
                Bannerghatta
              </span>
            </h3>
            <p className="mt-5 text-stone-400 max-w-md leading-relaxed">
              An Andhra-style and multicuisine family restaurant on
              Bannerghatta Road, BTM 2nd Stage — open daily till 2 AM.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-stone-700 hover:border-amber-300 hover:text-amber-300 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook-link"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-stone-700 hover:border-amber-300 hover:text-amber-300 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="label-eyebrow text-stone-500 text-[10px] mb-5">
              Explore
            </div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="text-stone-300 hover:text-amber-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="label-eyebrow text-stone-500 text-[10px] mb-5">
              Reach Us
            </div>
            <a
              href={`tel:${RESTAURANT.phoneTel}`}
              data-testid="footer-phone-link"
              className="flex items-center gap-3 text-stone-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {RESTAURANT.phone}
            </a>
            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-map-link"
              className="mt-4 flex items-start gap-3 text-stone-400 hover:text-amber-300 transition-colors leading-relaxed"
            >
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <span>
                {RESTAURANT.address.line1},{" "}
                {RESTAURANT.address.line2},{" "}
                {RESTAURANT.address.city}
              </span>
            </a>
            <p className="mt-4 text-stone-500 text-sm">{RESTAURANT.hours}</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Narmada Restaurant Bannerghatta. All
            rights reserved.
          </p>
          <p className="text-stone-600 text-xs label-eyebrow">
            Andhra · Multicuisine · Family · Late Night
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
