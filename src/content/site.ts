// ─────────────────────────────────────────────────────────────────────────
//  EDIT YOUR SITE HERE
//  This is the single source of truth: contact details, prices, image paths,
//  and all text in Romanian (ro), Hungarian (hu) and English (en).
//  Swap the placeholder images by replacing the files in /public/media.
// ─────────────────────────────────────────────────────────────────────────

export type Lang = "ro" | "hu" | "en";
export const LANGS: Lang[] = ["en", "ro", "hu"];
export const DEFAULT_LANG: Lang = "en";

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
  hours: { opens: "09:00", closes: "19:00" }, // daily — drives both the schema and the visible string

  media: {
    // Still image for the hero — used directly when no video is set, and as the
    // video's poster. Doubles as the LCP preload target in layout.tsx.
    hero: "/media/hero-poster.jpg",
    // Optional: drop a /media/hero.mp4 in and set this to enable a video hero.
    heroVideo: "/media/hero.mp4" as string,
    // Lighter, downscaled cut served to phones instead of the full web master.
    heroVideoMobile: "/media/hero-mobile.mp4" as string,
    // Poster shown while the video loads so playback starts seamlessly.
    heroPoster: "/media/hero-poster.jpg" as string,
    about: "/media/gallery-8.webp",
    gallery: [
      "/media/gallery-1.webp",
      "/media/gallery-2.webp",
      "/media/gallery-3.webp",
      "/media/gallery-4.webp",
      "/media/gallery-5.webp",
      "/media/gallery-6.webp",
      "/media/gallery-7.webp",
      "/media/gallery-8.webp",
      "/media/gallery-9.webp",
    ],
  },

  // One mountain e-bike, rented by the hour.
  bike: "/media/ebike.webp",
  // Prices are placeholders — edit the numbers freely. `popular` highlights one tier.
  pricing: [
    { hours: 1, price: 40 },
    { hours: 2, price: 70 },
    { hours: 4, price: 120, popular: true },
  ],
  guide: { price: 200 }, // optional local tour guide — flat rate per tour
  currency: "lei",

  // Range comparison (About). Rough km reachable on one charge of effort.
  range: { pedalKm: 12, ebikeKm: 40 },
};

// Translatable copy ---------------------------------------------------------
type Dict = {
  // Per-language SEO metadata (<title> / meta description).
  seo: { title: string; description: string };
  // Descriptive image alt text (image SEO + accessibility).
  // galleryAlts is index-aligned to site.media.gallery — one unique line per photo.
  images: { heroAlt: string; aboutAlt: string; galleryAlts: string[] };
  nav: { about: string; prices: string; gallery: string; faq: string; contact: string };
  hero: {
    kicker: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    ctaPrimary: string;
    ctaGallery: string;
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
    extrasLabel: string;
    guideLabel: string;
    guideNote: string;
  };
  gallery: { title: string; lead: string; prevLabel: string; nextLabel: string; viewAll: string };
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
    hoursPrefix: string; // e.g. "Daily" — times come from site.hours
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
      aboutAlt: "Bicicletele noastre electrice Haibike în Sovata",
      galleryAlts: [
        "Doi bicicliști pe biciclete electrice Haibike, oprindu-se pe o pajiște de vară deasupra Sovatei",
        "Biciclistă cu o bicicletă electrică pe un drum de pietriș, cu priveliște spre un sat de lângă Sovata",
        "Un cuplu pe biciclete electrice traversând o pajiște de deal deasupra orașului Sovata",
        "Doi bicicliști pe un drum forestier printre fagi aurii de toamnă, lângă Sovata",
        "Trei bicicliști traversând o pajiște deschisă înconjurată de pădure de toamnă",
        "Doi bicicliști pe o potecă îngustă spre un copac singuratic, sub un cer larg",
        "Trei bicicliști odihnindu-se pe un deal, cu priveliște spre Sovata și valea ei",
        "Două biciclete electrice Explore More parcate pe iarbă, în Sovata",
        "Biciclete electrice la un punct de belvedere, cu panoramă peste dealurile din jurul Sovatei",
      ],
    },
    nav: { about: "Despre", prices: "Prețuri", gallery: "Galerie", faq: "Întrebări", contact: "Contact" },
    hero: {
      kicker: "Închirieri biciclete electrice · Sovata",
      titleTop: "Trăiește clipa.",
      titleBottom: "Fără efort.",
      subtitle:
        "Descoperă Sovata și împrejurimile ei pe bicicletă electrică, în compania unui ghid local. Pe tururile presărate cu panorame superbe, experiența pedalării este garantată. Traseele pe teren variat, prin păduri și pajiști, îți oferă toate bucuriile mersului pe bicicletă.",
      ctaPrimary: "Vezi prețurile",
      ctaGallery: "Vezi galeria",
    },
    about: {
      title: "Mai multă rază, același efort",
      lead: "Asistența electrică aplatizează dealurile și scurtează distanțele. Cu același efort de pedalare, ajungi de aproape trei ori mai departe decât pe o bicicletă obișnuită.",
      range: {
        pedalLabel: "Bicicletă obișnuită",
        ebikeLabel: "Bicicletă electrică",
        caption: "Distanță aproximativă cu același efort.",
      },
    },
    prices: {
      title: "Bicicleta & prețurile",
      lead: "O bicicletă electrică de munte premium, întreținută cu grijă.",
      bikeName: "E-bike de munte",
      bikeDesc: "Robustă și fiabilă, pentru poteci, dealuri și drumurile din jurul Sovatei.",
      includes: "Cască și încuietoare incluse",
      hourUnit: { one: "oră", many: "ore" },
      popular: "Cea mai aleasă",
      extrasLabel: "Opțional",
      guideLabel: "Ghid de tură",
      guideNote: "preț fix pe tură",
    },
    gallery: {
      title: "Locuri pe traseu",
      lead: "Câteva dintre priveliștile din jurul Sovatei.",
      prevLabel: "Imaginea anterioară",
      nextLabel: "Imaginea următoare",
      viewAll: "Vezi toate pozele",
    },
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
          a: "Pe teren deluros 30–40 km, iar cu puțină atenție chiar și 50–60 km. Fiecare bicicletă pleacă la drum complet încărcată.",
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
      hoursPrefix: "Zilnic",
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
      aboutAlt: "Haibike elektromos kerékpárjaink Szovátán",
      galleryAlts: [
        "Két kerékpáros Haibike elektromos kerékpáron pihen egy nyári réten Szováta fölött",
        "Kerékpáros elektromos kerékpárral egy murvás úton, kilátással egy Szováta melletti falura",
        "Pár elektromos kerékpáron egy domboldali réten Szováta városa fölött",
        "Két kerékpáros erdei úton, aranyló őszi bükkfák között, Szováta közelében",
        "Három kerékpáros egy nyílt hegyi réten át, őszi erdővel körülvéve",
        "Két kerékpáros egy keskeny ösvényen egy magányos fa felé, tágas ég alatt",
        "Három kerékpáros egy dombtetőn pihen, kilátással Szovátára és völgyére",
        "Két Explore More elektromos kerékpár a füvön parkolva, Szovátán",
        "Elektromos kerékpárok egy kilátóponton, panorámával a Szováta környéki dombokra",
      ],
    },
    nav: { about: "Rólunk", prices: "Árak", gallery: "Galéria", faq: "Kérdések", contact: "Kapcsolat" },
    hero: {
      kicker: "Elektromos kerékpár kölcsönzés · Szováta",
      titleTop: "Élj a pillanatnak.",
      titleBottom: "Könnyedén.",
      subtitle:
        "Fedezd fel Szovátát és környékét elektromos kerékpáron, helyi idegenvezető kíséretében. A gyönyörű panorámákkal tűzdelt túrákon a kerékpározás élménye garantált. Változatos terepen, erdőn, mezőn keresztül haladó útvonalak a kerékpározás minden örömét biztosítják.",
      ctaPrimary: "Árak megtekintése",
      ctaGallery: "Galéria megtekintése",
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
      lead: "Egy prémium, gondosan karbantartott hegyi elektromos kerékpár.",
      bikeName: "Hegyi e-bike",
      bikeDesc: "Strapabíró és megbízható, ösvényekre, dombokra és a Szováta környéki utakra.",
      includes: "Sisak és zár mellékelve",
      hourUnit: { one: "óra", many: "óra" },
      popular: "Legnépszerűbb",
      extrasLabel: "Opcionális",
      guideLabel: "Túravezető",
      guideNote: "fix ár túránként",
    },
    gallery: {
      title: "Helyek az úton",
      lead: "Néhány a Szováta környéki látnivalókból.",
      prevLabel: "Előző kép",
      nextLabel: "Következő kép",
      viewAll: "Összes kép megtekintése",
    },
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
          a: "Dombos terepen 30–40 km, kis odafigyeléssel akár 50–60 km is lehet. Minden kerékpár teljesen feltöltve indul.",
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
      hoursPrefix: "Naponta",
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
      aboutAlt: "Our Haibike e-bikes in Sovata",
      galleryAlts: [
        "Two riders on Haibike e-bikes pausing in a summer meadow above Sovata",
        "Cyclist with an e-bike on a gravel track overlooking a village near Sovata",
        "A couple riding e-bikes across a hillside meadow above the town of Sovata",
        "Two cyclists on a forest road through golden autumn beech trees near Sovata",
        "Three riders crossing an open upland meadow ringed by autumn forest",
        "Two e-bike riders following a single track toward a lone tree under a wide sky",
        "Three riders resting on a hilltop looking down over Sovata and its valley",
        "Two Explore More branded e-bikes parked on the grass in Sovata",
        "E-bikes at a hilltop viewpoint with a panorama over the hills around Sovata",
      ],
    },
    nav: { about: "About", prices: "Prices", gallery: "Gallery", faq: "FAQ", contact: "Contact" },
    hero: {
      kicker: "E-bike rentals · Sovata",
      titleTop: "Live in the moment.",
      titleBottom: "Effortlessly.",
      subtitle:
        "Discover Sovata and its surroundings by e-bike, in the company of a local guide. On tours studded with beautiful panoramas, a great riding experience is guaranteed. Routes across varied terrain, through forests and meadows, offer all the joys of cycling.",
      ctaPrimary: "View prices",
      ctaGallery: "See the gallery",
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
      lead: "One premium, well-kept mountain e-bike.",
      bikeName: "Mountain e-bike",
      bikeDesc: "Rugged and reliable, built for the trails, hills and roads around Sovata.",
      includes: "Helmet & lock included",
      hourUnit: { one: "hour", many: "hours" },
      popular: "Most popular",
      extrasLabel: "Optional",
      guideLabel: "Tour guide",
      guideNote: "flat rate per tour",
    },
    gallery: {
      title: "Places along the way",
      lead: "A few of the sights around Sovata.",
      prevLabel: "Previous image",
      nextLabel: "Next image",
      viewAll: "View all photos",
    },
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
          a: "On hilly terrain 30–40 km, and with a little care even 50–60 km. Every bike starts fully charged.",
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
      hoursPrefix: "Daily",
    },
    footer: { tagline: "E-bike adventures in Sovata", rights: "All rights reserved." },
  },
};

// Shape of one language's content — passed as a prop into section components.
export type Content = (typeof dict)[Lang];
