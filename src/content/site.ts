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
  // Google Maps embed (no API key needed). Change the q= place if needed.
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
    ],
  },

  // Prices are shared across languages; the bike names/notes are translated
  // in `dict[...].bikes.items` below (same order).
  bikes: [
    { img: "/media/bike-1.jpg", priceDay: 90, priceHalf: 60 },
    { img: "/media/bike-2.jpg", priceDay: 120, priceHalf: 75 },
    { img: "/media/bike-3.jpg", priceDay: 110, priceHalf: 70 },
  ],
  currency: "lei",
};

// Translatable copy ---------------------------------------------------------
type Dict = {
  nav: { about: string; bikes: string; gallery: string; contact: string };
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
    features: { title: string; body: string }[];
  };
  bikes: {
    title: string;
    lead: string;
    perDay: string;
    perHalf: string;
    items: { name: string; note: string }[];
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
  };
  footer: { tagline: string; rights: string };
};

export const dict: Record<Lang, Dict> = {
  ro: {
    nav: { about: "Despre", bikes: "Biciclete", gallery: "Galerie", contact: "Contact" },
    hero: {
      kicker: "Închirieri biciclete electrice · Sovata",
      titleTop: "Mergi mai departe.",
      titleBottom: "Descoperă mai mult.",
      subtitle:
        "Explorează Lacul Ursu, dealurile de sare și potecile din pădure pe o bicicletă electrică premium. Aventură fără efort, în ritmul tău.",
      ctaPrimary: "Vezi prețurile",
      ctaCall: "Sună-ne",
    },
    about: {
      title: "De ce o bicicletă electrică?",
      lead: "Asistența electrică face dealurile ușoare și distanțele scurte — astfel poți vedea mai mult dintr-o singură tură.",
      features: [
        { title: "Fără efort", body: "Motorul te ajută la fiecare pedalare, mai ales la urcare. Te bucuri de priveliște, nu de oboseală." },
        { title: "Explorează mai departe", body: "Ajungi mai departe și mai sus decât pe o bicicletă obișnuită — perfect pentru ture de o zi." },
        { title: "Pentru oricine", body: "Indiferent de condiția fizică sau experiență, toată lumea poate ține pasul și se poate distra." },
      ],
    },
    bikes: {
      title: "Bicicletele & prețurile noastre",
      lead: "Biciclete electrice întreținute, cu cască și încuietoare incluse. Rezervă printr-un simplu apel.",
      perDay: "/ zi",
      perHalf: "½ zi",
      items: [
        { name: "E-bike de oraș", note: "Confortabilă și ușoară, ideală pentru plimbări relaxate." },
        { name: "E-bike de munte", note: "Robustă, pentru poteci și terenuri accidentate." },
        { name: "E-bike trekking", note: "Versatilă, perfectă pentru ture lungi de o zi." },
      ],
      cta: "Rezervă telefonic",
    },
    gallery: { title: "Galerie", lead: "Locuri pe care le vei descoperi în jurul Sovatei." },
    contact: {
      title: "Contactează-ne",
      lead: "Rezervă-ți bicicleta sau întreabă-ne orice — îți răspundem cu drag.",
      callLabel: "Sună-ne",
      fbLabel: "Scrie-ne pe Facebook",
      locationLabel: "Locație",
      hoursLabel: "Program",
      hours: "Zilnic 09:00 – 19:00",
    },
    footer: { tagline: "Aventuri pe biciclete electrice în Sovata", rights: "Toate drepturile rezervate." },
  },

  hu: {
    nav: { about: "Rólunk", bikes: "Kerékpárok", gallery: "Galéria", contact: "Kapcsolat" },
    hero: {
      kicker: "Elektromos kerékpár kölcsönzés · Szováta",
      titleTop: "Menj tovább.",
      titleBottom: "Fedezz fel többet.",
      subtitle:
        "Fedezd fel a Medve-tavat, a sódombokat és az erdei ösvényeket prémium elektromos kerékpáron. Erőfeszítés nélküli kaland, a saját tempódban.",
      ctaPrimary: "Árak megtekintése",
      ctaCall: "Hívj minket",
    },
    about: {
      title: "Miért elektromos kerékpár?",
      lead: "Az elektromos segítség könnyűvé teszi a dombokat és rövidíti a távokat — így egy túrán többet láthatsz.",
      features: [
        { title: "Erőfeszítés nélkül", body: "A motor minden tekerésnél segít, főleg emelkedőn. A kilátást élvezed, nem a fáradtságot." },
        { title: "Fedezz fel többet", body: "Messzebb és magasabbra jutsz, mint hagyományos kerékpárral — tökéletes egész napos túrákhoz." },
        { title: "Bárkinek", body: "Erőnléttől és tapasztalattól függetlenül mindenki lépést tarthat és jól érezheti magát." },
      ],
    },
    bikes: {
      title: "Kerékpárjaink és áraink",
      lead: "Karbantartott elektromos kerékpárok, sisakkal és zárral. Foglalás egyszerű telefonhívással.",
      perDay: "/ nap",
      perHalf: "½ nap",
      items: [
        { name: "Városi e-bike", note: "Kényelmes és könnyű, ideális laza túrázáshoz." },
        { name: "Hegyi e-bike", note: "Strapabíró, ösvényekre és nehéz terepre." },
        { name: "Trekking e-bike", note: "Sokoldalú, tökéletes hosszú, egész napos túrákhoz." },
      ],
      cta: "Foglalás telefonon",
    },
    gallery: { title: "Galéria", lead: "Helyek, amelyeket Szováta környékén fedezhetsz fel." },
    contact: {
      title: "Lépj kapcsolatba velünk",
      lead: "Foglald le a kerékpárod, vagy kérdezz bármit — szívesen segítünk.",
      callLabel: "Hívj minket",
      fbLabel: "Írj a Facebookon",
      locationLabel: "Helyszín",
      hoursLabel: "Nyitvatartás",
      hours: "Naponta 09:00 – 19:00",
    },
    footer: { tagline: "Elektromos kerékpáros kalandok Szovátán", rights: "Minden jog fenntartva." },
  },

  en: {
    nav: { about: "About", bikes: "Bikes", gallery: "Gallery", contact: "Contact" },
    hero: {
      kicker: "E-bike rentals · Sovata",
      titleTop: "Ride further.",
      titleBottom: "Discover more.",
      subtitle:
        "Explore Bear Lake, the salt hills and forest trails on a premium electric bike. Effortless adventure, at your own pace.",
      ctaPrimary: "View prices",
      ctaCall: "Call us",
    },
    about: {
      title: "Why an e-bike?",
      lead: "Electric assist flattens the hills and shrinks the distances — so you see more in a single ride.",
      features: [
        { title: "Effortless", body: "The motor helps every pedal stroke, especially uphill. Enjoy the view, not the burn." },
        { title: "Explore further", body: "Reach further and higher than on a regular bike — perfect for a full day out." },
        { title: "For everyone", body: "Whatever your fitness or experience, everyone can keep up and have fun." },
      ],
    },
    bikes: {
      title: "Our bikes & prices",
      lead: "Well-kept electric bikes, helmet and lock included. Book with a quick phone call.",
      perDay: "/ day",
      perHalf: "½ day",
      items: [
        { name: "City e-bike", note: "Comfortable and light, ideal for relaxed rides." },
        { name: "Mountain e-bike", note: "Rugged, built for trails and rough terrain." },
        { name: "Trekking e-bike", note: "Versatile, perfect for long full-day tours." },
      ],
      cta: "Book by phone",
    },
    gallery: { title: "Gallery", lead: "Places you'll discover around Sovata." },
    contact: {
      title: "Get in touch",
      lead: "Reserve your bike or ask us anything — we're happy to help.",
      callLabel: "Call us",
      fbLabel: "Message us on Facebook",
      locationLabel: "Location",
      hoursLabel: "Hours",
      hours: "Daily 9:00 – 19:00",
    },
    footer: { tagline: "E-bike adventures in Sovata", rights: "All rights reserved." },
  },
};
