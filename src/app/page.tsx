import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6">
      <header className="flex items-center justify-between py-10">
        <span className="font-display text-xl font-bold tracking-tight">
          IncluSend
        </span>
        <a
          href="mailto:info@inclusend.com"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          Contact
        </a>
      </header>

      <main className="flex-1">
        {/* Intro */}
        <section className="pt-16 pb-20 md:pt-24">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Software that helps educators reach every learner.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            IncluSend LLC is an independent educational technology company. We
            build focused tools for teachers - starting with Melaa.
          </p>
        </section>

        {/* Melaa */}
        <section
          aria-labelledby="melaa-heading"
          className="rounded-2xl border-2 border-ink bg-white/60 p-8 md:p-12"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/melaa-icon-large.png"
              alt=""
              width={64}
              height={64}
              priority
            />
            <div>
              <h2
                id="melaa-heading"
                className="font-display text-3xl font-bold tracking-tight"
              >
                Melaa
              </h2>
              <p className="text-sm font-medium text-rosa">
                For educators of multilingual learners
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg font-medium leading-snug">
            Turn WIDA ACCESS scores into classroom-ready instruction.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            Melaa translates proficiency scores and WIDA Can Do Descriptors
            into practical, grade-appropriate guidance - scaffolds, sentence
            stems, and differentiation strategies grounded in each
            student&apos;s real data.
          </p>

          <a
            href="https://melaa.app"
            className="mt-8 inline-block rounded-xl bg-ink px-6 py-3.5 font-display font-bold text-paper transition-colors hover:bg-rosa"
          >
            Visit melaa.app
          </a>
        </section>

        {/* About */}
        <section className="py-20">
          <h2 className="font-display text-xl font-bold tracking-tight">
            About IncluSend
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            We believe the students who are hardest to serve with generic
            software deserve tools built specifically for them. IncluSend
            makes small, careful products for educators working with
            multilingual and diverse learners.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Questions, partnerships, or school and district inquiries:{" "}
            <a
              href="mailto:info@inclusend.com"
              className="font-medium text-ink underline underline-offset-4 hover:text-rosa"
            >
              info@inclusend.com
            </a>
          </p>
        </section>
      </main>

      <footer className="flex flex-col gap-2 border-t border-ink/15 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} IncluSend LLC. All rights reserved.</p>
        <p>
          <a
            href="mailto:info@inclusend.com"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            info@inclusend.com
          </a>
          {" · "}
          <a
            href="tel:+19702810510"
            className="underline-offset-4 hover:text-ink hover:underline"
          >
            (970) 281-0510
          </a>
        </p>
      </footer>
    </div>
  );
}
