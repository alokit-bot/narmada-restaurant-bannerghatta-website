import React from "react";
import { Flame, Users, Moon, BadgeCheck } from "lucide-react";
import { IMAGES } from "../../data/restaurant";

const stats = [
  { icon: Flame, label: "Andhra Spice", value: "Authentic" },
  { icon: Users, label: "Family Dining", value: "All Ages" },
  { icon: Moon, label: "Open Until", value: "2 AM" },
  { icon: BadgeCheck, label: "Google Rating", value: "4.4 ★" },
];

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-stone-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image — asymmetric */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl">
            <img
              src={IMAGES.thaliPortrait}
              alt="Traditional Andhra Thali"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              loading="lazy"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -right-8 w-56 aspect-square overflow-hidden rounded-xl shadow-2xl border-4 border-stone-50">
            <img
              src={IMAGES.biryaniCloseup}
              alt="Chicken Biryani"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 lg:pl-8">
          <p className="label-eyebrow text-orange-800 mb-5">
            Our Story · Since the neighbourhood loved us
          </p>
          <h2
            data-testid="about-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight"
          >
            Bannerghatta Road’s favourite stop for
            <span className="italic text-orange-800"> Andhra meals </span>
            and a serious biryani.
          </h2>

          <div className="mt-8 space-y-5 text-stone-600 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Tucked into NS Palya, BTM 2nd Stage, Narmada Restaurant has
              become a familiar name for families, late-night diners and
              biryani devotees on Bannerghatta Road. Our kitchen sticks to
              honest Andhra flavours — bright sambars, fiery curries,
              fragrant rice — alongside a broad multicuisine menu.
            </p>
            <p>
              From the slow-dum Narmada Special Chicken Biryani to a generous
              vegetarian thali, every plate is built on long-trusted recipes,
              fresh masalas and a warm room that feels distinctly Bengaluru.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="p-5 rounded-xl bg-white border border-stone-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <s.icon className="w-5 h-5 text-orange-700 mb-3" />
                <div className="font-display text-2xl text-stone-900 leading-none">
                  {s.value}
                </div>
                <div className="label-eyebrow text-stone-500 text-[10px] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
