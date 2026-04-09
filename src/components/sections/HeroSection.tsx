const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Node.js",
  "Solidity",
  "AWS",
  "Python",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Deep background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 90% 70% at -5% 10%, rgba(77,124,191,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 50% at 110% 90%, rgba(77,124,191,0.08) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* Large watermark number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(180px, 28vw, 380px)",
          lineHeight: 1,
          color: "var(--text-primary)",
          opacity: 0.025,
          letterSpacing: "-0.05em",
        }}
      >
        DS
      </span>

      <div className="max-w-5xl mx-auto px-6 w-full py-28 md:py-36">
        {/* Availability pill */}
        <div className="flex items-center gap-2.5 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span
            className="text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Available for freelance · Sydney, AU
          </span>
        </div>

        {/* Main heading — full Syne weight */}
        <div className="mb-8">
          <h1
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              color: "var(--text-primary)",
            }}
          >
            Diego<br />
            <span style={{ color: "var(--accent)" }}>Scarpati</span>
          </h1>
        </div>

        {/* Role line */}
        <p
          className="mb-6 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            color: "var(--text-muted)",
            letterSpacing: "0.22em",
          }}
        >
          Senior Fullstack Developer
        </p>

        {/* Description */}
        <p
          className="mb-12 max-w-md leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
          }}
        >
          Building production-grade web apps, landing pages & Web3 products for Australian businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#plans"
            style={{
              background: "var(--accent)",
              color: "var(--accent-text)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[11px] tracking-[0.18em] uppercase rounded-sm hover:opacity-90 transition-opacity duration-200"
          >
            View Plans ↓
          </a>
          <a
            href="#work"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[11px] tracking-[0.18em] uppercase rounded-sm hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors duration-200"
          >
            See My Work ↓
          </a>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span
              key={t}
              style={{
                background: "var(--tag-bg)",
                color: "var(--tag-text)",
                border: "1px solid var(--tag-border)",
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
              }}
              className="px-3 py-1 rounded-sm uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }}
        />
      </div>
    </section>
  );
}
