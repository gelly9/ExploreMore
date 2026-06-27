// Simple single-page presentation site.
// Edit the copy below, or split these sections into components under
// src/components/ as the site grows.

const features = [
  {
    title: "Fast",
    body: "A fully static site exported by Next.js — no server, just HTML and CSS served from the edge.",
  },
  {
    title: "Simple",
    body: "One page to start. Add sections, pages, or components whenever you're ready to grow it.",
  },
  {
    title: "Yours",
    body: "Built on Next.js 16 and Tailwind, deployed straight to GitHub Pages from your own repo.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">ExploreMore</span>
        <a
          href="https://github.com/gelly9/ExploreMore"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-20">
        <section className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            A presentation site
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Explore more,
            <br />
            built to grow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            This is a clean starting point — a simple static page deployed on
            GitHub Pages. Once you can see it live, we&apos;ll shape it into
            whatever you have in mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Learn more
            </a>
            <a
              href="https://github.com/gelly9/ExploreMore"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              View source
            </a>
          </div>
        </section>

        {/* Feature cards */}
        <section
          id="about"
          className="mt-24 grid gap-6 sm:grid-cols-3"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-foreground/10 p-6"
            >
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} ExploreMore
      </footer>
    </div>
  );
}
