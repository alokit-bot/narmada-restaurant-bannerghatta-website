import React, { useState } from "react";
import { MENU, RESTAURANT } from "../../data/restaurant";
import { Phone, ChevronRight } from "lucide-react";

const Menu = () => {
  const [active, setActive] = useState(MENU[0].category);
  const activeData = MENU.find((m) => m.category === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-stone-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="label-eyebrow text-orange-800 mb-4">
              The Menu · Prices in ₹ INR
            </p>
            <h2
              data-testid="menu-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.05]"
            >
              From dum biryani to
              <span className="italic text-orange-800"> Andhra meals</span>.
            </h2>
          </div>
          <a
            href={`tel:${RESTAURANT.phoneTel}`}
            data-testid="menu-call-to-order-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-orange-800 text-stone-50 transition-all duration-300 self-start"
          >
            <Phone className="w-4 h-4" />
            <span className="label-eyebrow text-xs">Call to Order</span>
          </a>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10 border-b border-stone-300/70"
          data-testid="menu-tabs"
        >
          {MENU.map((m) => (
            <button
              key={m.category}
              data-testid={`menu-tab-${m.category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(m.category)}
              className={`relative px-5 py-3 label-eyebrow text-xs transition-colors duration-300 ${
                active === m.category
                  ? "text-orange-800"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {m.category}
              {active === m.category && (
                <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-orange-700" />
              )}
            </button>
          ))}
        </div>

        {/* Items */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
          data-testid="menu-items-grid"
        >
          {activeData.items.map((item, idx) => (
            <div
              key={item.name}
              data-testid={`menu-item-${idx}`}
              className="group flex items-start justify-between gap-6 py-6 border-b border-stone-300/60"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-2xl md:text-[26px] text-stone-900 leading-tight">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="label-eyebrow text-[10px] px-2.5 py-1 rounded-full bg-orange-700/10 text-orange-800">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-stone-600 text-sm md:text-[15px] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="font-display text-2xl md:text-3xl text-orange-800">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-stone-500 text-sm flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          Prices are indicative. Please call us for today’s full menu and
          combo specials.
        </p>
      </div>
    </section>
  );
};

export default Menu;
