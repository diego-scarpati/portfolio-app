import { workItems } from '@/data/work'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-16">
          <p className="section-label">03 / Experience</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}>
            Where I&apos;ve worked
          </h2>
        </div>

        <ol className="space-y-0">
          {workItems.map((item, i) => (
            <li
              key={`${item.employer}-${item.start}`}
              className="group relative"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-12 items-start">

                <div>
                  {/* Number + title row */}
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 800,
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "var(--text-muted)",
                        opacity: 0.5,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.employer} ↗
                    </a>
                  </div>

                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </p>

                  <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {item.brief}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "var(--tag-bg)",
                          color: "var(--tag-text)",
                          border: "1px solid var(--tag-border)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.07em",
                        }}
                        className="px-2.5 py-1 rounded-sm uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right shrink-0">
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.start} — {item.end}
                  </span>
                </div>
              </div>
            </li>
          ))}
          {/* Bottom border */}
          <li style={{ borderTop: "1px solid var(--border)" }} />
        </ol>
      </div>
    </section>
  )
}
