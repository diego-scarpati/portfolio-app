const FACTS = [
  { label: 'Location', value: 'Sydney, Northern Beaches' },
  { label: 'Stack', value: 'Next.js · React · TS · Node · Python · Solidity' },
  { label: 'Currently', value: 'Freelance & contract work' },
  {
    label: 'LinkedIn',
    value: '@diego-scarpati',
    href: 'https://www.linkedin.com/in/diego-scarpati/',
  },
  {
    label: 'GitHub',
    value: '@diego-scarpati',
    href: 'https://github.com/diego-scarpati',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
            05 / About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
            A bit about me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              I&apos;m a Senior Fullstack Developer based in Sydney&apos;s Northern Beaches. I specialise in building production-grade web applications, landing pages, and Web3 products for Australian businesses and startups.
            </p>
            <p>
              Before switching to engineering, I spent years as a senior accountant at EY. That background shapes how I work — I think in systems, measure what matters, and take deadlines seriously. I bring financial precision to product thinking.
            </p>
            <p>
              I work with Next.js, React, TypeScript, Supabase, Node.js, Python, and Solidity. When I&apos;m not building, I&apos;m surfing the Northern Beaches.
            </p>
          </div>

          <aside className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6 h-fit">
            <h3 className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Quick facts
            </h3>
            <dl className="space-y-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    {f.label}
                  </dt>
                  <dd className="text-sm text-[var(--text-primary)]">
                    {f.href ? (
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {f.value} ↗
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
