import React from "react";
import { IMAGES } from "../../data/restaurant";

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-stone-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="label-eyebrow text-orange-800 mb-4">
              Gallery · Inside Narmada
            </p>
            <h2
              data-testid="gallery-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-900 leading-[1.05] max-w-2xl"
            >
              A warm room.{" "}
              <span className="italic text-orange-800">
                Honest food.
              </span>
            </h2>
          </div>
          <p className="text-stone-600 max-w-sm text-sm md:text-base">
            A peek into the dishes our regulars come back for, and the room
            that has welcomed Bannerghatta Road for years.
          </p>
        </div>

        {/* Bento Tetris grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] md:grid-rows-[260px_260px_260px] gap-3 md:gap-4"
          data-testid="gallery-grid"
        >
          <div
            className="col-span-2 row-span-2 overflow-hidden rounded-xl group relative"
            data-testid="gallery-tile-1"
          >
            <img
              src={IMAGES.biryaniCloseup}
              alt="Narmada Special Chicken Biryani"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 right-5 label-eyebrow text-stone-50 text-[11px]">
              Signature · Narmada Special Chicken Biryani
            </span>
          </div>

          <div
            className="col-span-2 md:col-span-1 row-span-1 overflow-hidden rounded-xl group"
            data-testid="gallery-tile-2"
          >
            <img
              src={IMAGES.thaliTop}
              alt="Andhra Thali Top View"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-2 md:col-span-1 row-span-1 overflow-hidden rounded-xl group"
            data-testid="gallery-tile-3"
          >
            <img
              src={IMAGES.interior}
              alt="Warm Restaurant Interior"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div
            className="col-span-2 row-span-1 overflow-hidden rounded-xl group relative"
            data-testid="gallery-tile-4"
          >
            <img
              src={IMAGES.thaliPortrait}
              alt="Traditional Indian Meal"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-5 left-5 label-eyebrow text-stone-50 text-[11px]">
              Andhra Meals · Generous & Authentic
            </span>
          </div>

          <div
            className="col-span-2 md:col-span-4 row-span-1 overflow-hidden rounded-xl group relative"
            data-testid="gallery-tile-5"
          >
            <img
              src={IMAGES.interiorDetail}
              alt="Cozy Restaurant Detail"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-5 left-5 label-eyebrow text-stone-50 text-[11px]">
              The Room · Bannerghatta Rd
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
