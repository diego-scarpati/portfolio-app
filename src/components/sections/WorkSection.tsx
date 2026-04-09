import { projects } from '@/data/projects'

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-16">
          <p className="section-label">04 / Selected Work</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}>
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-7 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Project number */}
              <span
                className="mb-6 block"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--text-muted)",
                  opacity: 0.5,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Arrow indicator */}
              <span
                className="absolute top-6 right-6 text-lg transition-all duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                ↗
              </span>

              <h3
                className="mb-4 flex-none transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              <p
                className="mb-6 flex-1 line-clamp-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {project.brief}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                      color: "var(--tag-text)",
                      background: "var(--tag-bg)",
                      border: "1px solid var(--tag-border)",
                    }}
                    className="px-2 py-0.5 rounded-sm uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
