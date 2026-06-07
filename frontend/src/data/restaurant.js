// Centralized restaurant data
export const RESTAURANT = {
  name: "Narmada Restaurant Bannerghatta",
  shortName: "Narmada",
  tagline: "Andhra • Multicuisine • Family Restaurant",
  phone: "+91 97430 00923",
  phoneTel: "+919743000923",
  address: {
    line1: "No. 193/4A, 193/4B, Bannerghatta Rd",
    line2: "NS Palya, BTM 2nd Stage, BTM Layout",
    city: "Bengaluru, Karnataka 560076",
  },
  hours: "Open Daily · 11:00 AM – 2:00 AM",
  rating: "4.4",
  reviewCount: "945+",
  priceRange: "₹200 – ₹400 / person",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Narmada+Restaurant+Bannerghatta+BTM+2nd+Stage+Bengaluru",
  mapsEmbedQuery:
    "Narmada+Restaurant+Bannerghatta+BTM+2nd+Stage+Bengaluru",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

export const MENU = [
  {
    category: "Signature Biryanis",
    items: [
      {
        name: "Narmada Special Chicken Biryani",
        desc: "Long-grain basmati layered with slow-cooked chicken, signature house masala and aromatic herbs.",
        price: "₹320",
        tag: "Signature",
      },
      {
        name: "Boneless Chicken Biryani",
        desc: "Fluffy basmati with tender boneless chicken, balanced spices and a hint of mint.",
        price: "₹340",
        tag: "Bestseller",
      },
      {
        name: "Mutton Biryani",
        desc: "Slow-dum cooked, melt-in-mouth mutton with rich saffron-infused rice.",
        price: "₹380",
      },
      {
        name: "Veg Dum Biryani",
        desc: "Garden vegetables, paneer and saffron rice, finished on slow dum.",
        price: "₹220",
      },
    ],
  },
  {
    category: "Andhra Specials",
    items: [
      {
        name: "Andhra Veg Meals",
        desc: "Rice, sambar, rasam, dal, two curries, curd, pickle & papad — served generously.",
        price: "₹190",
      },
      {
        name: "Andhra Non-Veg Meals",
        desc: "Andhra meals plus chicken curry, fry piece, boiled egg and traditional sides.",
        price: "₹280",
      },
      {
        name: "Gongura Chicken",
        desc: "Country chicken in tangy gongura leaves — fiery, soulful and very Andhra.",
        price: "₹310",
        tag: "Spicy",
      },
      {
        name: "Chicken 65",
        desc: "Crisp-fried chicken tossed with curry leaves, green chilli and house spice.",
        price: "₹260",
      },
    ],
  },
  {
    category: "From The Kitchen",
    items: [
      {
        name: "Aloo Matar Curry",
        desc: "Potatoes and peas simmered in a fragrant tomato-onion gravy.",
        price: "₹180",
      },
      {
        name: "Dal Fry",
        desc: "Yellow lentils tempered with garlic, cumin and dried red chillies.",
        price: "₹170",
      },
      {
        name: "Paneer Butter Masala",
        desc: "Cottage cheese in a velvety tomato cashew gravy.",
        price: "₹240",
      },
      {
        name: "Chilli Chicken (Indo-Chinese)",
        desc: "Crispy chicken tossed in a spicy soy-garlic sauce with capsicum and onion.",
        price: "₹250",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Srija Reddy",
    quote:
      "Not too pricey as well. Must visit place. Valet parking also was available.",
    rating: 5,
    source: "Google",
  },
  {
    name: "A Bannerghatta regular",
    quote:
      "The Narmada Special Chicken Biryani is something else — fluffy basmati and beautifully balanced spices.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Vegetarian diner",
    quote:
      "Aloo Matar Curry and Dal Fry hit the right notes. Authentic flavours, generous portions.",
    rating: 4,
    source: "Google",
  },
  {
    name: "Justdial reviewer",
    quote:
      "Warm ambience and friendly staff. The service was attentive without being intrusive.",
    rating: 5,
    source: "Justdial",
  },
  {
    name: "Boneless Biryani lover",
    quote:
      "The boneless chicken biryani is a winner — soft chicken, fragrant rice, and that signature Narmada touch.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Late-night diner",
    quote:
      "Open till 2 AM is a blessing on Bannerghatta Road. Hot food, clean tables, courteous staff.",
    rating: 4,
    source: "Google",
  },
];

export const IMAGES = {
  heroBiryani:
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbiUyMGZvb2R8ZW58MHx8fHwxNzgwODE3Nzk1fDA&ixlib=rb-4.1.0&q=85",
  biryaniCloseup:
    "https://images.pexels.com/photos/23830980/pexels-photo-23830980.jpeg",
  thaliPortrait:
    "https://images.unsplash.com/photo-1542367592-8849eb950fd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG1lYWxzJTIwdGhhbGl8ZW58MHx8fHwxNzgwODE3Nzk1fDA&ixlib=rb-4.1.0&q=85",
  thaliTop:
    "https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg",
  interior:
    "https://images.pexels.com/photos/10148453/pexels-photo-10148453.jpeg",
  interiorDetail:
    "https://images.pexels.com/photos/10810574/pexels-photo-10810574.jpeg",
};
