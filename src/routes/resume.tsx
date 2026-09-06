import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Meredith Clark" },
      {
        name: "description",
        content:
          "Work history, education, and experience of Meredith Clark — writer and analyst across business, real estate, and sustainability.",
      },
      { property: "og:title", content: "Resume — Meredith Clark" },
      {
        property: "og:description",
        content:
          "Work history, education, and experience of Meredith Clark — writer and analyst across business, real estate, and sustainability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

const EMAIL = "clarkmer@unc.edu";
const LINKEDIN = "https://www.linkedin.com/in/clarkmer23/";

const experience = [
  {
    role: "Writer & Analyst",
    org: "Independent",
    period: "2023 — Present",
    location: "Chapel Hill, NC",
    points: [
      "Reporting and essays on business, real estate, and sustainability — the deals, the codes, and the buildings that outlive both.",
      "Market analysis and long-form features for editorial and research clients.",
    ],
  },
  {
    role: "Previous Role",
    org: "Previous Organization",
    period: "20XX — 20XX",
    location: "City, State",
    points: [
      "Placeholder entry — send me the real role, employer, dates, and a few bullets and I'll drop them in.",
      "Placeholder entry — replace with an accomplishment or two.",
    ],
  },
  {
    role: "Previous Role",
    org: "Previous Organization",
    period: "20XX — 20XX",
    location: "City, State",
    points: [
      "Placeholder entry — replace with your earliest listed role.",
    ],
  },
];

const education = [
  {
    school: "University of North Carolina",
    degree: "Degree / Program",
    period: "20XX — 20XX",
  },
];

const skills = [
  "Market analysis",
  "Editorial writing",
  "Real estate research",
  "Sustainability reporting",
  "Interviewing & fieldwork",
];

function Resume() {
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
              to="/"
              className="transition-colors hover:text-carolina"
            >
              Home
            </Link>
            <Link
              to="/resume"
              className="text-foreground transition-colors hover:text-carolina"
            >
              Resume
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="border-b border-border py-14">
          <p className="eyebrow">Curriculum Vitae</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Meredith Clark
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
            Writer and analyst working across business, real estate, and
            sustainability. Currently writing about land, capital, and
            permanence.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="border-b border-carolina pb-1 tracking-wide text-navy transition-colors hover:text-carolina"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="border-b border-carolina pb-1 tracking-wide text-navy transition-colors hover:text-carolina"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        <section className="grid gap-12 border-b border-border py-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow md:sticky md:top-8">Experience</p>
          </div>
          <div className="md:col-span-9">
            <ul>
              {experience.map((job) => (
                <li
                  key={`${job.org}-${job.period}`}
                  className="grid gap-4 border-b border-border py-8 first:pt-0 last:border-b-0 md:grid-cols-12"
                >
                  <div className="md:col-span-3">
                    <p className="text-xs tracking-wide text-muted-foreground">
                      {job.period}
                      <br />
                      {job.location}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-2xl leading-snug">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.14em] text-carolina">
                      {job.org}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-12 border-b border-border py-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Education</p>
          </div>
          <div className="md:col-span-9">
            <ul>
              {education.map((e) => (
                <li key={e.school} className="border-b border-border py-6 first:pt-0 last:border-b-0">
                  <h3 className="font-display text-2xl leading-snug">{e.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.degree} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Skills & Interests</p>
          </div>
          <div className="md:col-span-9">
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-prose text-sm leading-relaxed text-muted-foreground">
              Looking for the person behind the page?{" "}
              <Link
                to="/"
                className="border-b border-carolina pb-0.5 text-navy transition-colors hover:text-carolina"
              >
                Read the writing
              </Link>{" "}
              or say hello by email.
            </p>
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
