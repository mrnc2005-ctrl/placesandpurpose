import { createFileRoute, Link } from "@tanstack/react-router";

import heroImageAsset from "@/assets/hero-plaza.jpg.asset.json";
import writingImageAsset from "@/assets/writing-pen.webp.asset.json";
import sustainabilityImageAsset from "@/assets/chapel-hill-aerial.jpg.asset.json";
import headshotAsset from "@/assets/0W4A9033.jpeg.asset.json";

const heroImage = heroImageAsset.url;
const writingImage = writingImageAsset.url;
const sustainabilityImage = sustainabilityImageAsset.url;

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
              alt="Pedestrian plaza with arched storefronts and plant-filled terraces at dusk"
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

        <section
          id="writing"
          className="grid gap-12 border-b border-border py-16 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <img
              src={writingImage}
              alt="A fountain pen nib laying ink onto lined paper"
              width={1000}
              height={1200}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-end md:col-span-7">
            <p className="eyebrow">Writing</p>
            <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Essays and reporting on business, real estate, and sustainability.
            </h3>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground">
              New pieces are on the way — this space will hold selected writing
              as it is published.
            </p>
          </div>
        </section>


        <section id="about" className="grid gap-10 py-16 md:grid-cols-12">
          <figure className="md:col-span-5">
            <img
              src={headshotAsset.url}
              alt="Meredith Clark in a black blazer, smiling with arms crossed"
              width={1440}
              height={1440}
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-center md:col-span-7">
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
