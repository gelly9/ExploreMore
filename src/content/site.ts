// ─────────────────────────────────────────────────────────────────────────
//  EDIT YOUR SITE HERE
//  This is the single source of truth: contact details, prices, image paths,
//  and all text in Romanian (ro), Hungarian (hu) and English (en).
//  Swap the placeholder images by replacing the files in /public/media.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = "ro" | "hu" | "en";
export const LANGS: Lang[] = ["ro", "hu", "en"];
export const DEFAULT_LANG: Lang = "ro";

// Non-translatable facts ----------------------------------------------------
export const site = {
  brand: "Explore More",
  // TODO: replace with the real phone number
  phone: "+40 7XX XXX XXX",
  facebook: "https://www.facebook.com/EbikeSovata",
  location: "Sovata, Mureș, România",
  mapEmbed: "https://www.google.com/maps?q=Sovata%2C%20Romania&output=embed",

  media: {
    logo: "/media/logo.png",
    hero: "/media/hero.jpg",
    // Optional: drop a /media/hero.mp4 in and set this to enable a video hero.
    heroVideo: "" as string,
    about: "/media/about.jpg",
    gallery: [
      "/media/gallery-1.jpg",
      "/media/gallery-2.jpg",
      "/media/gallery-3.jpg",
      "/media/gallery-4.jpg",
      "/media/gallery-5.jpg",
      "/media/gallery-6.jpg",
    ],
  },

  // One mountain e-bike, rented by the hour.
  bike: "/media/bike.jpg",
  // Prices are placeholders — edit the numbers freely. `popular` highlights one tier.
  pricing: [
    { hours: 1, price: 40 },
    { hours: 2, price: 70 },
    { hours: 4, price: 120, popular: true },
  ],
  currency: "lei",

  // Range comparison (About). Rough km reachable on one charge of effort.
  range: { pedalKm: 12, ebikeKm: 40 },
};

// Translatable copy ---------------------------------------------------------
type Dict = {
  nav: { about: string; prices: string; gallery: string; contact: string };
  hero: {
    kicker: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    ctaPrimary: string;
    ctaCall: string;
  };
  about: {
    title: string;
    lead: string;
    range: { pedalLabel: string; ebikeLabel: string; caption: string };
  };
  prices: {
    title: string;
    lead: string;
    bikeName: string;
    bikeDesc: string;
    includes: string;
    hourUnit: { one: string; many: string };
    popular: string;
    cta: string;
  };
  gallery: { title: string; lead: string };
  contact: {
    title: string;
    lead: string;
    callLabel: string;
    fbLabel: string;
    locationLabel: string;
    hoursLabel: string;
    hours: string;
    trust: string[];
  };
  footer: { tagline: string; rights: string };
};

export const dict: Record<Lang, Dict> = {
  ro: {
    nav: { about: "Despre", prices: "Prețuri", gallery: "Galerie", contact: "Contact" },
    hero: {
      kicker: "Închirieri biciclete electrice · Sovata",
      titleTop: "Mergi mai departe.",
      titleBottom: "Descoperă mai mult.",
      subtitle:
        "Vezi cât de departe poți ajunge în jurul Sovatei pe o bicicletă electrică premium — Lacul Ursu, dealurile de sare și potecile din pădure. În ritmul tău.",
      ctaPrimary: "Vezi prețurile",
      ctaCall: "Sună-ne",
    },
    about: {
      title: "Mai multă rază, același efort",
      lead: "Asistența electrică flaturează dealurile și scurtează distanțele. Cu același efort de pedalare, ajungi de aproape trei ori mai departe decât pe o bicicletă obișnuită.",
      range: {
        pedalLabel: "Bicicletă obișnuită",
        ebikeLabel: "Bicicletă electrică",
        caption: "Distanță aproximativă cu același efort.",
      },
    },
    prices: {
      title: "Bicicleta & prețurile",
      lead: "O bicicletă electrică de munte premium, întreținută cu grijă. Închiriaz-o pe 1, 2 sau 4 ore.",
      bikeName: "E-bike de munte",
      bikeDesc: "Robustă și fiabilă, pentru poteci, dealuri și drumurile din jurul Sovatei.",
      includes: "Cască și încuietoare incluse",
      hourUnit: { one: "oră", many: "ore" },
      popular: "Cea mai aleasă",
      cta: "Rezervă telefonic",
    },
    gallery: { title: "Locuri pe traseu", lead: "Câteva dintre priveliștile din jurul Sovatei." },
    contact: {
      title: "Contactează-ne",
      lead: "Rezervă-ți bicicleta sau întreabă-ne orice — îți răspundem cu drag.",
      callLabel: "Sună-ne",
      fbLabel: "Scrie-ne pe Facebook",
      locationLabel: "Locație",
      hoursLabel: "Program",
      hours: "Zilnic 09:00 – 19:00",
      trust: ["Cască și încuietoare incluse", "Pe loc, fără aplicație", "Recomandat pe Facebook"],
    },
    footer: { tagline: "Aventuri pe biciclete electrice în Sovata", rights: "Toate drepturile rezervate." },
  },

  hu: {
    nav: { about: "Rólunk", prices: "Árak", gallery: "Galéria", contact: "Kapcsolat" },
    hero: {
      kicker: "Elektromos kerékpár kölcsönzés · Szováta",
      titleTop: "Menj tovább.",
      titleBottom: "Fedezz fel többet.",
      subtitle:
        "Nézd meg, milyen messzire jutsz Szováta környékén egy prémium elektromos kerékpáron — Medve-tó, sódombok és erdei ösvények. A saját tempódban.",
      ctaPrimary: "Árak megtekintése",
      ctaCall: "Hívj minket",
    },
    about: {
      title: "Nagyobb táv, ugyanannyi erővel",
      lead: "Az elektromos segítség ellaposítja a dombokat és lerövidíti a távokat. Ugyanannyi tekeréssel közel háromszor messzebbre jutsz, mint egy hagyományos kerékpárral.",
      range: {
        pedalLabel: "Hagyományos kerékpár",
        ebikeLabel: "Elektromos kerékpár",
        caption: "Hozzávetőleges táv azonos erőkifejtéssel.",
      },
    },
    prices: {
      title: "A kerékpár és az árak",
      lead: "Egy prémium, gondosan karbantartott hegyi elektromos kerékpár. Bérelhető 1, 2 vagy 4 órára.",
      bikeName: "Hegyi e-bike",
      bikeDesc: "Strapabíró és megbízható, ösvényekre, dombokra és a Szováta környéki utakra.",
      includes: "Sisak és zár mellékelve",
      hourUnit: { one: "óra", many: "óra" },
      popular: "Legnépszerűbb",
      cta: "Foglalás telefonon",
    },
    gallery: { title: "Helyek az úton", lead: "Néhány a Szováta környéki látnivalókból." },
    contact: {
      title: "Lépj kapcsolatba velünk",
      lead: "Foglald le a kerékpárod, vagy kérdezz bármit — szívesen segítünk.",
      callLabel: "Hívj minket",
      fbLabel: "Írj a Facebookon",
      locationLabel: "Helyszín",
      hoursLabel: "Nyitvatartás",
      hours: "Naponta 09:00 – 19:00",
      trust: ["Sisak és zár mellékelve", "Helyben, alkalmazás nélkül", "Ajánlott a Facebookon"],
    },
    footer: { tagline: "Elektromos kerékpáros kalandok Szovátán", rights: "Minden jog fenntartva." },
  },

  en: {
    nav: { about: "About", prices: "Prices", gallery: "Gallery", contact: "Contact" },
    hero: {
      kicker: "E-bike rentals · Sovata",
      titleTop: "Ride further.",
      titleBottom: "Discover more.",
      subtitle:
        "See how far you can get around Sovata on a premium electric bike — Bear Lake, the salt hills and forest trails. At your own pace.",
      ctaPrimary: "View prices",
      ctaCall: "Call us",
    },
    about: {
      title: "More range, same effort",
      lead: "Electric assist flattens the hills and shrinks the distances. For the same pedalling effort, you reach almost three times further than on a regular bike.",
      range: {
        pedalLabel: "Regular bike",
        ebikeLabel: "Electric bike",
        caption: "Approximate distance for the same effort.",
      },
    },
    prices: {
      title: "The bike & prices",
      lead: "One premium, well-kept mountain e-bike. Rent it for 1, 2 or 4 hours.",
      bikeName: "Mountain e-bike",
      bikeDesc: "Rugged and reliable, built for the trails, hills and roads around Sovata.",
      includes: "Helmet & lock included",
      hourUnit: { one: "hour", many: "hours" },
      popular: "Most popular",
      cta: "Book by phone",
    },
    gallery: { title: "Places along the way", lead: "A few of the sights around Sovata." },
    contact: {
      title: "Get in touch",
      lead: "Reserve your bike or ask us anything — we're happy to help.",
      callLabel: "Call us",
      fbLabel: "Message us on Facebook",
      locationLabel: "Location",
      hoursLabel: "Hours",
      hours: "Daily 9:00 – 19:00",
      trust: ["Helmet & lock included", "On the spot, no app", "Loved on Facebook"],
    },
    footer: { tagline: "E-bike adventures in Sovata", rights: "All rights reserved." },
  },
};
