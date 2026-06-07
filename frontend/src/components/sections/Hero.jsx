import React from "react";
import { Star, MapPin, UtensilsCrossed, ArrowUpRight, Clock } from "lucide-react";
import { RESTAURANT, IMAGES } from "../../data/restaurant";

const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden grain"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBiryani}
          alt="Narmada Special Chicken Biryani"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-20 min-h-screen flex flex-col justify-end">
        <div className="max-w-4xl">
          {/* Rating badge */}
          <div
            data-testid="hero-rating-badge"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 mb-8"
          >
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span className="text-stone-50 font-semibold text-sm">
              {RESTAURANT.rating}
            </span>
            <span className="text-stone-200/80 text-xs uppercase tracking-[0.18em]">
              on Google · {RESTAURANT.reviewCount} reviews
            </span>
          </div>

          {/* Eyebrow */}
          <p className="label-eyebrow text-amber-200/90 mb-5">
            Bannerghatta Road · BTM 2nd Stage · Bengaluru
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-stone-50 leading-[1.02]">
            Late-night
            <span className="block italic text-amber-200/95">Andhra comfort</span>
            on Bannerghatta Rd.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-base md:text-lg text-stone-200/90 leading-relaxed">
            A family restaurant serving authentic Andhra meals, our famous
            Narmada Special Chicken Biryani, and a generous multicuisine
            menu — open daily until <span className="text-stone-50">2 AM</span>.
          </p>

          {/* Meta strip */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-stone-200/85 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {RESTAURANT.hours}
            </span>
            <span className="hidden sm:inline w-px h-4 bg-stone-400/40" />
            <span className="inline-flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4" />
              {RESTAURANT.priceRange}
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${RESTAURANT.phoneTel}`}
              data-testid="hero-order-takeaway-btn"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-stone-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <span className="label-eyebrow text-xs">Order / Takeaway</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#menu"
              data-testid="hero-view-menu-btn"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/25 text-stone-50 transition-all duration-300"
            >
              <span className="label-eyebrow text-xs">View Menu</span>
            </a>
            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-get-directions-btn"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-white/10 border border-white/30 text-stone-50 transition-all duration-300 group"
            >
              <MapPin className="w-4 h-4" />
              <span className="label-eyebrow text-xs">Get Directions</span>
            </a>
          </div>
        </div>

        {/* Bottom-right small detail */}
        <div className="hidden md:flex absolute right-12 lg:right-24 bottom-12 items-center gap-3 text-stone-200/80 text-xs">
          <span className="label-eyebrow">Scroll</span>
          <div className="h-px w-16 bg-stone-200/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
