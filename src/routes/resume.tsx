import { createFileRoute, Link } from "@tanstack/react-router";

const photoGarman = "/IMG_0874.jpeg";
const photoBand = "/IMG_1927.jpeg";
const photoSingapore = "/IMG_8519.jpeg";
const photoBridge = "/IMG_0790.jpeg";

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
const PHONE = "336-944-3343";
const LINKEDIN = "https://www.linkedin.com/in/clarkmer23/";

const experience = [
  {
    role: "Rotational Intern",
    org: "Garman Homes",
    period: "June 2026 — July 2026",
    location: "Morrisville, NC",
    points: [
      "Rotated across land acquisition, purchasing, sales, and construction management, gaining experience throughout the residential real estate development lifecycle.",
      "Performed comparative market analyses (CMA) for land acquisition opportunities, analyzed lumber pricing, and supported preconstruction estimating for residential developments.",
      "Collaborated with 7 construction managers across active residential projects to resolve field issues and monitor project progress.",
      "Contributed to the development of Garman Homes' inaugural internship program by advising on onboarding, training, and rotational experiences for future cohorts.",
    ],
  },
  {
    role: "Academic Tutor",
    org: "Academic Support Program for Student-Athletes, UNC",
    period: "January 2026 — Present",
    location: "Chapel Hill, NC",
    points: [
      "Tutored 15+ NCAA student-athletes in economics coursework in one-on-one and small group settings, improving comprehension of course material and study strategies.",
      "Work closely with ASPSA staff through ongoing training and check-ins to support students in an NCAA-compliant academic environment.",
    ],
  },
  {
    role: "Sustainability Intern",
    org: "Bata",
    period: "June 2025 — August 2025",
    location: "Singapore",
    points: [
      "Supported global sustainability initiatives across 245 supplier facilities within Bata's Global Supply Chain organization.",
      "Led development of a supplier Social and Environmental Remediation (SER) compliance dashboard, analyzing audit findings, remediation status, and supplier risk levels.",
      "Assisted in developing long-term sustainability strategy by evaluating energy consumption, water usage, supplier performance, and emissions reduction opportunities.",
      "Collaborated with international stakeholders to standardize supplier compliance reporting and improve sustainability data quality.",
    ],
  },
  {
    role: "Sales Associate",
    org: "Loft",
    period: "June 2024 — July 2024",
    location: "Greensboro, NC",
    points: [
      "Drove revenue through excellent customer service, helping clients find and select products that met their needs.",
      "Received 2 personal mentions in client surveys for a friendly demeanor and exceptional assistance.",
    ],
  },
];

const leadership = [
  {
    role: "President | Fundraising Chair",
    org: "Kappa Kappa Psi Service Fraternity",
    period: "February 2024 — Present",
    location: "Chapel Hill, NC",
    points: [
      "Elected President of a 35-member service organization, overseeing chapter operations, national and university cooperation, officer leadership, and governance.",
      "Planned and executed 10+ fundraising events, coordinating budgets, logistics, and volunteer teams in partnership with the chapter treasurer.",
      "Supported community service initiatives including Adopt-a-Highway projects, emergency supply drives, and university outreach events.",
    ],
  },
  {
    role: "Member",
    org: "UNC Habitat for Humanity Club",
    period: "August 2024 — Present",
    location: "Chapel Hill, NC",
    points: [
      "Participated in affordable housing construction projects including framing, site preparation, and general construction activities.",
    ],
  },
  {
    role: "Drum Major | Pep Band Conductor | Alto Saxophonist",
    org: "University Marching Band",
    period: "August 2023 — Present",
    location: "Chapel Hill, NC",
    points: [
      "Led and conducted marching and pep band performances for NCAA Division I athletic events, including televised UNC football games before 50,000+ fans.",
      "Coordinated with production staff and athletic departments while mentoring student musicians to deliver precise performances in high-pressure environments.",
    ],
  },
];

const education = [
  {
    school: "University of North Carolina at Chapel Hill",
    degree:
      "B.S. Business Administration (Real Estate Concentration) · B.A. Economics · Minor in Music",
    period: "Expected May 2027",
    note: "GPA 3.59",
  },
];

const honors = [
  { label: "Danielle Elizabeth Liotta Award", period: "May 2025" },
  {
    label: "Third Place — International Business Club Case Competition",
    period: "February 2024",
  },
  {
    label: "First Place — University Career Services / TTi Business Case Competition",
    period: "November 2023",
  },
];

const credentials = [
  { label: "North Carolina Broker License (in progress)", period: "Expected September 2026" },
  { label: "Bloomberg Market Concepts", period: "May 2025" },
];


function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto max-w-6xl px-6 pt-8 pb-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="eyebrow">MEREDITH RENEE CLARK</p>
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
            Undergraduate at UNC Chapel Hill studying business administration
            with a real estate concentration and economics with work spanning
            residential development, global supply chain sustainability, and
            student leadership.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="border-b border-carolina pb-1 tracking-wide text-navy transition-colors hover:text-carolina"
            >
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="border-b border-carolina pb-1 tracking-wide text-navy transition-colors hover:text-carolina"
            >
              {PHONE}
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
            <p className="eyebrow md:sticky md:top-8">Leadership & Community</p>
          </div>
          <div className="md:col-span-9">
            <ul>
              {leadership.map((job) => (
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
                    {e.degree}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                    {e.period} · {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-12 border-b border-border py-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow md:sticky md:top-8">In the Field</p>
          </div>
          <div className="md:col-span-9 grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              {
                src: photoGarman.url,
                alt: "Meredith Clark in a hard hat on an unfinished road in a new housing development",
                caption: "On site with Garman Homes — Morrisville, NC",
              },
              {
                src: photoBand.url,
                alt: "Meredith Clark holding a saxophone in front of the UNC bell tower",
                caption: "Carolina marching band — Chapel Hill, NC",
              },
              {
                src: photoSingapore.url,
                alt: "Meredith Clark in front of the indoor waterfall at Jewel Changi Airport, Singapore",
                caption: "Summer with Bata — Singapore",
              },
              {
                src: photoBridge.url,
                alt: "Meredith Clark in a safety helmet crossing a wooden suspension bridge in a forest",
                caption: "For Fun — ziplining in Costa Rica",
              },
            ].map((photo) => (
              <figure key={photo.caption} className="bg-background">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs tracking-wide text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Honors & Credentials</p>
          </div>
          <div className="md:col-span-9 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">Honors & Awards</h3>
              <ul className="mt-3 space-y-3">
                {honors.map((h) => (
                  <li key={h.label} className="border-b border-border pb-3 text-sm text-muted-foreground">
                    {h.label}
                    <span className="mt-1 block text-xs tracking-wide text-carolina">
                      {h.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl">Certifications & Licenses</h3>
              <ul className="mt-3 space-y-3">
                {credentials.map((c) => (
                  <li key={c.label} className="border-b border-border pb-3 text-sm text-muted-foreground">
                    {c.label}
                    <span className="mt-1 block text-xs tracking-wide text-carolina">
                      {c.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="md:col-span-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
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
