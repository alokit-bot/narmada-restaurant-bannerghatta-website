import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data/restaurant";

const TestimonialCard = ({ t, idx }) => (
  <div
    data-testid={`testimonial-card-${idx}`}
    className="shrink-0 w-[320px] md:w-[420px] p-7 md:p-8 mx-3 md:mx-4 bg-stone-50 border border-stone-200 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
  >
    <Quote className="w-6 h-6 text-orange-700/70 mb-4" />
    <p className="font-display text-xl md:text-2xl text-stone-800 leading-snug">
      “{t.quote}”
    </p>
    <div className="mt-6 flex items-center justify-between">
      <div>
        <div className="text-stone-900 font-semibold text-sm">{t.name}</div>
        <div className="label-eyebrow text-stone-500 text-[10px] mt-1">
          via {t.source}
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12 md:mb-16">
        <p className="label-eyebrow text-orange-800 mb-4">
          Words from our guests
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            data-testid="testimonials-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.05] max-w-3xl"
          >
            4.4★ on Google.{" "}
            <span className="italic text-orange-800">
              Loved by 945+ diners.
            </span>
          </h2>
          <p className="text-stone-600 max-w-sm text-sm md:text-base">
            Real reviews from neighbours, regulars and first-time visitors on
            Bannerghatta Road.
          </p>
        </div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative marquee-pause">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div
          className="flex animate-marquee w-max"
          data-testid="testimonials-marquee"
        >
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
