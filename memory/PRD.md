# Narmada Restaurant Bannerghatta — Website PRD

## Original Problem Statement
Build a frontend-only marketing/restaurant website for **Narmada Restaurant Bannerghatta**, an Andhra & multicuisine family restaurant on Bannerghatta Rd, NS Palya, BTM 2nd Stage, Bengaluru 560076. Phone: +91 97430 00923. Open daily 11 AM – 2 AM. 4.4★ on Google with 945+ reviews. Price ₹200–400/person. Frontend-only, no backend, no testing agent. Direct tel: links and Google Maps links.

## Architecture
- Stack: React (CRA) + Tailwind CSS + lucide-react icons. No backend used.
- Fonts: Cormorant Garamond (display) + Manrope (body) — loaded in `public/index.html`.
- Single-page layout with anchor navigation (`#about`, `#menu`, `#gallery`, `#testimonials`, `#contact`).
- Files:
  - `src/App.js` — assembles all sections.
  - `src/data/restaurant.js` — single source of truth (info, nav, menu, testimonials, images).
  - `src/components/sections/*` — Header, Hero, About, Menu, Gallery, Testimonials, Contact, Footer.
  - `src/index.css` — fonts, marquee, grain, selection, scrollbars.

## User Personas
- Hungry local on Bannerghatta Rd / BTM searching late-night food.
- Family looking for a sit-down Andhra meal.
- First-time visitor wanting menu + directions before walking in.
- Phone-call orderer doing takeaway.

## Core Requirements (Static)
- Glassmorphism fixed header with `Call Now` CTA + mobile menu toggle.
- Full-bleed hero with 4.4★ rating badge, headline, location strip, three CTAs (Order/Takeaway → tel:, View Menu, Get Directions → Google Maps).
- About section with asymmetric image overlap + 4 stat tiles.
- Menu with 3 tabs (Signature Biryanis, Andhra Specials, From The Kitchen) and INR pricing.
- Gallery bento/tetris grid with 5 image tiles.
- Marquee Testimonials ribbon (uses real Srija Reddy quote + thematic placeholder reviews).
- Contact section (dark) with phone card, address card, hours/payments/parking mini-cards, and Google Maps embed.
- Footer with quick links, social placeholders, repeat NAP info.
- Fully responsive (375 / 768 / 1440 / 1920).
- All interactive elements have `data-testid` attributes.

## What's Been Implemented (2025-12-06)
- Complete single-page marketing site for Narmada Restaurant Bannerghatta.
- All 8 sections built and styled following design_guidelines.json (Organic & Earthy archetype, terracotta primary).
- Verified visually via screenshots at desktop and mobile widths.
- No backend / no API calls. Pure frontend.

## Prioritized Backlog
- P1: Add real photography from the restaurant when supplied; replace Unsplash/Pexels placeholders.
- P1: Wire integration with Zomato / Swiggy / Magicpin delivery links for `Order / Takeaway`.
- P2: Add an embedded reservation widget (or WhatsApp click-to-chat).
- P2: Add a "Today's Specials" data section that owner can edit.
- P2: Add basic SEO/JSON-LD `Restaurant` schema markup for local SEO on Bannerghatta Rd.
- P3: Multi-language toggle (Kannada / Telugu).
