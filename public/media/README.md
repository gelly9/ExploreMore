# Media — swap your real assets here

These files are **placeholders**. Replace them with your real photos/videos
from Facebook, keeping the **same filenames**, and the site updates automatically.

| File              | Used for                        | Suggested size        |
| ----------------- | ------------------------------- | --------------------- |
| `hero.jpg`        | Full-screen hero background     | landscape, ~2000px wide |
| `ebike.webp`      | "Why an e-bike?" + prices card  | ~1000px wide            |
| `gallery-1..9.webp`| Gallery grid                   | ~1400px long side       |

## Video hero (optional)

Drop a `hero.mp4` in this folder, then in `src/content/site.ts` set
`media.heroVideo: "/media/hero.mp4"`. The `hero.jpg` is used as the poster.

## Text, prices, phone number, languages

All editable in **`src/content/site.ts`** — phone number, prices, and the
Romanian / Hungarian / English copy all live there.
