import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-places.jpg";
import writingImage from "@/assets/writing.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Places and Purpose — Meredith Clark's Portfolio" },
      {
        name: "description",
        content:
          "Meredith Clark writes on business, real estate, and sustainability — essays, market analysis, and reporting on how places are built and why they last.",
      },
      { property: "og:title", content: "Places and Purpose — Meredith Clark's Portfolio" },
      {
        property: "og:description",
        content:
          "Essays and analysis on business, real estate, and sustainability by Meredith Clark.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  {
    label: "Business",
    title: "The quiet economics of a slower market",
    dek: "What developers, lenders, and small operators are actually doing while everyone waits for rates to move.",
  },
  {
    label: "Real Estate",
    title: "Zoning is a story about who belongs",
    dek: "A close read of three municipal codes and the neighborhoods they produced over forty years.",
  },
  {
    label: "Sustainability",
    title: "Retrofit before rebuild",
    dek: "The greenest building is often the one already standing. The case for repair as climate policy.",
  },
];

const notes = [
  { year: "2026", title: "Field notes from a mill town in transition" },
  { year: "2025", title: "On buying a house you cannot afford to keep" },
  { year: "2025", title: "Twelve interviews about land" },
  { year: "2024", title: "What a warehouse remembers" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-6xl px-6 pt-8 pb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="eyebrow">Meredith Clark's Portfolio</p>
            <h1 className="mt-2 font-display text-4xl leading-none tracking-tight md:text-6xl">
              Places <span className="italic text-carolina">and</span> Purpose
            </h1>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link
              to="/resume"
              className="transition-colors hover:text-carolina"
            >
              Resume
            </Link>
            <a className="transition-colors hover:text-carolina" href="#writing">
              Writing
            </a>
            <a className="transition-colors hover:text-carolina" href="#about">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="grid gap-10 border-b border-border pb-16 md:grid-cols-12">
          <figure className="md:col-span-7">
            <img
              src={heroImage}
              alt="Concrete and glass building softened by hanging greenery"
              width={1600}
              height={1104}
              className="w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-end md:col-span-5">
            <p className="eyebrow">Issue No. 01</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Writing about how places are financed, built, and kept.
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground">
              I cover the business of real estate and the long arithmetic of
              sustainability — the deals, the codes, and the buildings that outlive
              both. My reporting sits where balance sheets meet the street.
            </p>
            <a
              href="#writing"
              className="mt-8 w-fit border-b border-carolina pb-1 text-sm tracking-wide text-navy transition-colors hover:text-carolina"
            >
              Read the writing
            </a>
          </div>
        </section>

        <section id="work" className="grid gap-px border-b border-border bg-border md:grid-cols-3">
          {sections.map((s) => (
            <article key={s.label} className="bg-background px-0 py-10 md:px-8">
              <p className="eyebrow">{s.label}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.dek}</p>
            </article>
          ))}
        </section>

        <section
          id="writing"
          className="grid gap-12 border-b border-border py-16 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <img
              src={writingImage}
              alt="Notebooks, a fountain pen, and a folded newspaper on a desk"
              width={1000}
              height={1200}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">Selected writing</p>
            <ul className="mt-6">
              {notes.map((n) => (
                <li
                  key={n.title}
                  className="flex items-baseline gap-6 border-b border-border py-5"
                >
                  <span className="w-12 shrink-0 text-xs text-muted-foreground">{n.year}</span>
                  <a
                    href="#writing"
                    className="font-display text-2xl leading-snug transition-colors hover:text-carolina"
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-12 border-b border-border py-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Sustainability</p>
            <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              A city keeps its promises in concrete.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Ongoing reporting on retrofits, embodied carbon, and the financing
              structures that decide whether a neighborhood gets rebuilt or repaired.
            </p>
          </div>
          <div className="md:col-span-6">
            <img
              src={sustainabilityImage}
              alt="Aerial view of a tree-lined neighborhood with solar rooftops"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section id="about" className="py-16 md:max-w-2xl">
          <p className="eyebrow">About</p>
          <p className="mt-5 font-display text-2xl leading-relaxed md:text-3xl">
            Meredith Clark is a writer and analyst working across business, real
            estate, and sustainability. She is currently writing about land, capital,
            and permanence.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="mailto:clarkmer@unc.edu"
              className="border-b border-carolina pb-1 text-sm tracking-wide transition-colors hover:text-carolina"
            >
              clarkmer@unc.edu
            </a>
            <a
              href="https://www.linkedin.com/in/clarkmer23/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-carolina pb-1 text-sm tracking-wide transition-colors hover:text-carolina"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-8 text-xs text-muted-foreground">
          <span>Places and Purpose</span>
          <span>© {new Date().getFullYear()} Meredith Clark</span>
        </div>
      </footer>
    </div>
  );
}
