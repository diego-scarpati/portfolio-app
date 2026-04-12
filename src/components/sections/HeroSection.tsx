"use client";

import { useEffect, useRef } from "react";

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
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (blob1.current)
        blob1.current.style.transform = `translateY(${y * 0.15}px)`;
      if (blob2.current)
        blob2.current.style.transform = `translateY(${y * 0.08}px)`;
      if (blob3.current)
        blob3.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 1.5rem 2.5rem",
      }}
    >
      {/* Parallax blobs — 3 layers */}
      <div
        ref={blob1}
        aria-hidden
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "rgba(59,130,246,0.18)",
          top: -120,
          right: -80,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <div
        ref={blob2}
        aria-hidden
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "rgba(29,78,216,0.15)",
          bottom: 60,
          left: -60,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      <div
        ref={blob3}
        aria-hidden
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          filter: "blur(70px)",
          background: "rgba(96,165,250,0.12)",
          top: "40%",
          left: "30%",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Glass band */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          width: "100%",
          background: "var(--glass-bg)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid var(--glass-border)",
          borderRadius: 28,
          padding: "2.5rem 3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Availability pill */}
        <div
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.6s",
              "--hero-delay": "0.1s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.25rem",
            } as React.CSSProperties
          }
        >
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Available for freelance · Sydney, AU
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.7s",
              "--hero-delay": "0.2s",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "0.15em",
            } as React.CSSProperties
          }
        >
          Diego
          <br />
          <span style={{ color: "var(--accent-2)" }}>Scarpati</span>
        </h1>

        {/* Role */}
        <p
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.6s",
              "--hero-delay": "0.35s",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.62rem, 1.1vw, 0.75rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            } as React.CSSProperties
          }
        >
          Senior Fullstack Developer
        </p>

        {/* Description */}
        <p
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.6s",
              "--hero-delay": "0.45s",
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: 420,
              marginBottom: "1.75rem",
            } as React.CSSProperties
          }
        >
          Building production-grade web apps, landing pages &amp; Web3 products
          for Australian businesses.
        </p>

        {/* CTAs */}
        <div
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.6s",
              "--hero-delay": "0.55s",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            } as React.CSSProperties
          }
        >
          <a
            href="#plans"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--accent)",
              color: "var(--accent-text)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.75rem 1.5rem",
              borderRadius: 999,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-hover)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Plans ↓
          </a>
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid var(--glass-border)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.75rem 1.5rem",
              borderRadius: 999,
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--glass-border)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See My Work ↓
          </a>
        </div>

        {/* Tech tags */}
        <div
          className="animate-hero-in"
          style={
            {
              "--hero-duration": "0.6s",
              "--hero-delay": "0.65s",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
            } as React.CSSProperties
          }
        >
          {TECH.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-muted)",
                padding: "0.22rem 0.65rem",
                borderRadius: 999,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent-2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--glass-border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint — outside glass band */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.3,
        }}
      >
        <div
          className="animate-scroll-pulse"
          style={{
            width: 1,
            height: 36,
            background:
              "linear-gradient(to bottom, var(--accent-2), transparent)",
          }}
        />
      </div>
    </section>
  );
}
