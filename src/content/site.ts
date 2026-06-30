// ─────────────────────────────────────────────────────────────────────────
//  EDIT YOUR SITE HERE
//  This is the single source of truth: contact details, prices, image paths,
//  and all text in Romanian (ro), Hungarian (hu) and English (en).
//  Swap the placeholder images by replacing the files in /public/media.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = "ro" | "hu" | "en";
export const LANGS: Lang[] = ["ro", "hu", "en"];
export const DEFAULT_LANG: Lang = "ro";

export const SITE_URL = "https://exploremore.ro";

// Non-translatable facts ----------------------------------------------------
export const site = {
  brand: "Explore More",
  phone: "+40753538524",
  facebook: "https://www.facebook.com/EbikeSovata",
  location: "Sovata, Mureș, România",
  mapEmbed: "https://www.google.com/maps?q=Sovata%2C%20Romania&output=embed",

  // Business address & geo — used for the LocalBusiness schema (local SEO).
  address: {
    street: "", // TODO: add the real street address
    locality: "Sovata",
    region: "Mureș",
    postalCode: "545500",
    countryCode: "RO",
  },
  geo: { lat: 46.5979, lng: 25.0786 }, // approx Sovata centre — refine to the address
  hours: { opens: "09:00", closes: "19:00" }, // daily
  priceRange: "40–120 RON",

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
  // Per-language SEO metadata (<title> / meta description).
  seo: { title: string; description: string };
  // Descriptive image alt text (image SEO + accessibility).
  images: { heroAlt: string; aboutAlt: string; galleryAlt: string };
  nav: { about: string; prices: string; gallery: string; faq: string; contact: string };
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
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    lead: string;
    callLabel: string;
    whatsappLabel: string;
    whatsappMsg: string; // prefilled WhatsApp message
    contactLabel: string; // floating button: open
    closeLabel: string; // floating button: close
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
    seo: {
      title: "Închiriere biciclete electrice Sovata | Explore More",
      description:
        "Închiriază o bicicletă electrică de munte în Sovata — pe 1, 2 sau 4 ore. Explorează Lacul Ursu, dealurile de sare și potecile din pădure. Cască și încuietoare incluse.",
    },
    images: {
      heroAlt: "Bicicletă electrică pe potecile din jurul Sovatei",
      aboutAlt: "Peisaj montan în jurul Sovatei",
      galleryAlt: "Priveliște din jurul Sovatei",
    },
    nav: { about: "Despre", prices: "Prețuri", gallery: "Galerie", faq: "Întrebări", contact: "Contact" },
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
    faq: {
      title: "Întrebări frecvente",
      lead: "Răspunsuri rapide înainte să pornești la drum.",
      items: [
        {
          q: "Trebuie să rezerv în avans?",
          a: "Fără aplicație sau rezervare online — sună-ne sau scrie-ne pe WhatsApp ca să-ți păstrăm bicicleta. Poți veni și direct, în limita disponibilității.",
        },
        {
          q: "E greu să mergi pe o bicicletă electrică?",
          a: "Deloc. Asistența la pedalare îți ușurează urcușurile și se conduce exact ca o bicicletă obișnuită. Îți facem un scurt instructaj înainte de plecare, indiferent de experiență.",
        },
        {
          q: "Cât de departe pot ajunge cu o încărcare?",
          a: "Aproximativ 40 km cu asistență electrică la o încărcare — suficient pentru o jumătate de zi de explorat lacurile, dealurile de sare și potecile din jurul Sovatei.",
        },
        {
          q: "Ce este inclus în închiriere?",
          a: "Casca și încuietoarea vin cu fiecare bicicletă, plus un scurt instructaj și recomandări pentru cele mai frumoase trasee din apropiere.",
        },
        {
          q: "Cum pot plăti?",
          a: "Poți plăti pe loc, cash sau cu cardul, când ridici bicicleta.",
        },
      ],
    },
    contact: {
      title: "Contactează-ne",
      lead: "Rezervă-ți bicicleta sau întreabă-ne orice — îți răspundem cu drag.",
      callLabel: "Sună-ne",
      whatsappLabel: "Scrie-ne pe WhatsApp",
      whatsappMsg: "Bună! Aș dori să închiriez o bicicletă electrică în Sovata.",
      contactLabel: "Contactează-ne",
      closeLabel: "Închide",
      fbLabel: "Scrie-ne pe Facebook",
      locationLabel: "Locație",
      hoursLabel: "Program",
      hours: "Zilnic 09:00 – 19:00",
      trust: ["Cască și încuietoare incluse", "Pe loc, fără aplicație", "Recomandat pe Facebook"],
    },
    footer: { tagline: "Aventuri pe biciclete electrice în Sovata", rights: "Toate drepturile rezervate." },
  },

  hu: {
    seo: {
      title: "Elektromos kerékpár kölcsönzés Szováta | Explore More",
      description:
        "Bérelj elektromos hegyi kerékpárt Szovátán — 1, 2 vagy 4 órára. Fedezd fel a Medve-tavat, a sódombokat és az erdei ösvényeket. Sisak és zár mellékelve.",
    },
    images: {
      heroAlt: "Elektromos kerékpár Szováta környéki ösvényeken",
      aboutAlt: "Hegyi táj Szováta környékén",
      galleryAlt: "Látkép Szováta környékén",
    },
    nav: { about: "Rólunk", prices: "Árak", gallery: "Galéria", faq: "Kérdések", contact: "Kapcsolat" },
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
    faq: {
      title: "Gyakori kérdések",
      lead: "Gyors válaszok, mielőtt útnak indulsz.",
      items: [
        {
          q: "Kell előre foglalnom?",
          a: "Nincs szükség alkalmazásra vagy online foglalásra — hívj minket vagy írj WhatsAppon, és fenntartjuk a kerékpárt. Helyben is jöhetsz, amíg van szabad bicikli.",
        },
        {
          q: "Nehéz elektromos kerékpárral menni?",
          a: "Egyáltalán nem. A pedálsegítség könnyűvé teszi a kapaszkodókat, és pont úgy vezethető, mint egy hagyományos bicikli. Indulás előtt rövid eligazítást adunk, tapasztalattól függetlenül.",
        },
        {
          q: "Milyen messzire jutok egy töltéssel?",
          a: "Körülbelül 40 km elektromos segítséggel egy töltéssel — bőven elég egy fél napos felfedezéshez a tavak, sódombok és erdei ösvények körül.",
        },
        {
          q: "Mit tartalmaz a kölcsönzés?",
          a: "Sisak és zár minden kerékpárhoz jár, valamint egy rövid eligazítás és tippek a legszebb közeli útvonalakhoz.",
        },
        {
          q: "Hogyan fizethetek?",
          a: "Helyben fizethetsz készpénzzel vagy kártyával, amikor átveszed a kerékpárt.",
        },
      ],
    },
    contact: {
      title: "Lépj kapcsolatba velünk",
      lead: "Foglald le a kerékpárod, vagy kérdezz bármit — szívesen segítünk.",
      callLabel: "Hívj minket",
      whatsappLabel: "Írj nekünk WhatsAppon",
      whatsappMsg: "Szia! Szeretnék elektromos kerékpárt bérelni Szovátán.",
      contactLabel: "Kapcsolat",
      closeLabel: "Bezárás",
      fbLabel: "Írj a Facebookon",
      locationLabel: "Helyszín",
      hoursLabel: "Nyitvatartás",
      hours: "Naponta 09:00 – 19:00",
      trust: ["Sisak és zár mellékelve", "Helyben, alkalmazás nélkül", "Ajánlott a Facebookon"],
    },
    footer: { tagline: "Elektromos kerékpáros kalandok Szovátán", rights: "Minden jog fenntartva." },
  },

  en: {
    seo: {
      title: "E-bike Rental in Sovata | Explore More",
      description:
        "Rent an electric mountain bike in Sovata — by 1, 2 or 4 hours. Explore Bear Lake, the salt hills and forest trails. Helmet and lock included.",
    },
    images: {
      heroAlt: "Electric bike on the trails around Sovata",
      aboutAlt: "Mountain scenery around Sovata",
      galleryAlt: "View around Sovata",
    },
    nav: { about: "About", prices: "Prices", gallery: "Gallery", faq: "FAQ", contact: "Contact" },
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
    faq: {
      title: "Frequently asked questions",
      lead: "Quick answers before you set off.",
      items: [
        {
          q: "Do I need to book in advance?",
          a: "No app or online booking needed — just call or message us on WhatsApp to reserve your bike. You can also drop by, subject to availability.",
        },
        {
          q: "Is it hard to ride an electric bike?",
          a: "Not at all. The pedal assist makes the hills easy and it rides just like a normal bike. We'll give you a quick run-through before you set off, whatever your experience.",
        },
        {
          q: "How far can I go on a single charge?",
          a: "Around 40 km of electric-assisted riding on one charge — plenty for a half-day exploring the lakes, salt hills and forest trails around Sovata.",
        },
        {
          q: "What's included in the rental?",
          a: "A helmet and a lock come with every bike, plus a short tutorial and tips on the best nearby routes.",
        },
        {
          q: "How do I pay?",
          a: "You can pay on the spot by cash or card when you pick up the bike.",
        },
      ],
    },
    contact: {
      title: "Get in touch",
      lead: "Reserve your bike or ask us anything — we're happy to help.",
      callLabel: "Call us",
      whatsappLabel: "Message us on WhatsApp",
      whatsappMsg: "Hi! I'd like to rent an e-bike in Sovata.",
      contactLabel: "Contact us",
      closeLabel: "Close",
      fbLabel: "Message us on Facebook",
      locationLabel: "Location",
      hoursLabel: "Hours",
      hours: "Daily 9:00 – 19:00",
      trust: ["Helmet & lock included", "On the spot, no app", "Loved on Facebook"],
    },
    footer: { tagline: "E-bike adventures in Sovata", rights: "All rights reserved." },
  },
};

// Shape of one language's content — passed as a prop into section components.
export type Content = (typeof dict)[Lang];
