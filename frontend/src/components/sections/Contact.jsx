import React from "react";
import { Phone, MapPin, Clock, Navigation, CreditCard, ParkingCircle } from "lucide-react";
import { RESTAURANT } from "../../data/restaurant";

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-stone-900 text-stone-100"
    >
      <div className="max-w-7xl mx-auto">
        <p className="label-eyebrow text-amber-300/90 mb-5">
          Visit · Call · Order
        </p>
        <h2
          data-testid="contact-heading"
          className="font-display text-4xl sm:text-5xl md:text-6xl text-stone-50 leading-[1.05] max-w-3xl"
        >
          We’re on Bannerghatta Road,{" "}
          <span className="italic text-amber-200">until 2 AM</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left card stack */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`tel:${RESTAURANT.phoneTel}`}
              data-testid="contact-phone-card"
              className="block p-7 md:p-8 rounded-xl bg-stone-800/60 border border-stone-700 hover:border-amber-300/40 hover:bg-stone-800 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="label-eyebrow text-stone-400 text-[10px]">
                    Phone
                  </span>
                  <div className="font-display text-3xl md:text-4xl text-stone-50 mt-2">
                    {RESTAURANT.phone}
                  </div>
                  <p className="mt-2 text-stone-400 text-sm">
                    Tap to call · Order, takeaway & bookings
                  </p>
                </div>
                <Phone className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform" />
              </div>
            </a>

            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-address-card"
              className="block p-7 md:p-8 rounded-xl bg-stone-800/60 border border-stone-700 hover:border-amber-300/40 hover:bg-stone-800 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="label-eyebrow text-stone-400 text-[10px]">
                    Address
                  </span>
                  <div className="font-display text-2xl text-stone-50 mt-2 leading-snug">
                    {RESTAURANT.address.line1}
                    <br />
                    {RESTAURANT.address.line2}
                    <br />
                    {RESTAURANT.address.city}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-2 label-eyebrow text-amber-300 text-[11px]">
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </span>
                </div>
                <MapPin className="w-6 h-6 text-amber-300 shrink-0" />
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                data-testid="contact-hours-card"
                className="p-5 rounded-xl bg-stone-800/60 border border-stone-700"
              >
                <Clock className="w-5 h-5 text-amber-300 mb-3" />
                <div className="label-eyebrow text-stone-400 text-[10px]">
                  Hours
                </div>
                <div className="font-display text-lg text-stone-50 mt-1 leading-tight">
                  Daily
                  <br />
                  11 AM – 2 AM
                </div>
              </div>
              <div
                data-testid="contact-payments-card"
                className="p-5 rounded-xl bg-stone-800/60 border border-stone-700"
              >
                <CreditCard className="w-5 h-5 text-amber-300 mb-3" />
                <div className="label-eyebrow text-stone-400 text-[10px]">
                  Payments
                </div>
                <div className="font-display text-lg text-stone-50 mt-1 leading-tight">
                  Cards
                  <br />
                  Accepted
                </div>
              </div>
              <div
                data-testid="contact-parking-card"
                className="p-5 rounded-xl bg-stone-800/60 border border-stone-700"
              >
                <ParkingCircle className="w-5 h-5 text-amber-300 mb-3" />
                <div className="label-eyebrow text-stone-400 text-[10px]">
                  Parking
                </div>
                <div className="font-display text-lg text-stone-50 mt-1 leading-tight">
                  Valet
                  <br />
                  Available
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div
              data-testid="contact-map"
              className="relative w-full h-[420px] md:h-full min-h-[420px] rounded-xl overflow-hidden border border-stone-700"
            >
              <iframe
                title="Narmada Restaurant Bannerghatta — Map"
                src={`https://www.google.com/maps?q=${RESTAURANT.mapsEmbedQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
