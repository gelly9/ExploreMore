# Google Business Profile — setup checklist (Explore More, Sovata)

A **Google Business Profile (GBP)** is the single biggest lever for showing up in
the Google **map pack** and Maps for searches like "bike rental Sovata". It's
separate from the website — do this in parallel.

## 1. Create & verify
- Go to https://business.google.com → **Add your business**.
- Name: **Explore More** (exactly as on the site — no extra keywords).
- Verify (postcard, phone, or video — Google picks the method). Verification can take a few days.

## 2. Category & details
- **Primary category:** *Bicycle rental service*.
- Secondary (optional): *Bicycle Shop*, *Tourist attraction*.
- **NAP must match the website + schema exactly:**
  - Name: `Explore More`
  - Phone: `+40753538524`
  - Address: Sovata, Mureș, `545500` (+ street once added)
- Hours: Daily 09:00–19:00 (update seasonally).
- Website: `https://exploremore.ro`
- Service area: Sovata + nearby (Praid, Corund, Sângeorgiu de Pădure).

## 3. Make it compelling
- Add **photos**: the bikes, riders, scenery (Bear Lake, trails). Profiles with photos get far more clicks.
- Add attributes (e.g. "helmets provided", languages spoken: RO/HU/EN).
- Add the **products/services**: e-bike rental — 1h (80 lei) / 2h (120 lei) / 3h (150 lei) / whole day (180 lei).

## 4. Reviews (the ranking driver)
- After each rental, ask happy customers to leave a Google review (share your review link).
- **Respond to every review** — it signals activity and helps ranking.
- Aim for a steady trickle rather than a burst.

## 5. Citations / consistency (do once)
Create matching listings so your NAP is consistent across the web:
- **Apple Maps** (Apple Business Connect), **Bing Places**, **OpenStreetMap**.
- Keep Name/Address/Phone **identical** everywhere (site, schema, GBP, Facebook).

## 6. Ongoing
- Post seasonal updates/offers via GBP Posts.
- Keep hours accurate (holidays).
- Once you have reviews, we can add `AggregateRating` to the website's
  LocalBusiness schema (only with real numbers).

---
**On-site NAP source of truth:** `src/content/site.ts` (`site.phone`, `site.address`).
Update the street address there + in GBP at the same time to keep them in sync.
