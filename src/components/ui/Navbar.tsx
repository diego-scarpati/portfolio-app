"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Plans", href: "#plans" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ── Desktop pill nav ── */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
        }}
      >
        <nav
          aria-label="Primary navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            padding: "0.65rem 1.5rem",
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--nav-border)",
            borderRadius: 999,
            whiteSpace: "nowrap",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--nav-text)",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            DS
          </a>

          <div
            style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--nav-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--nav-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--nav-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <ThemeToggle />
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "var(--accent)",
                color: "var(--accent-text)",
                padding: "0.45rem 1rem",
                borderRadius: 999,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>

      {/* ── Mobile top bar ── */}
      <nav
        aria-label="Mobile navigation"
        className="flex md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 56,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
          background: mobileOpen ? "var(--bg-primary)" : "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--nav-border)",
          transition: "background 0.2s",
        }}
      >
        <a
          href="#"
          onClick={close}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--nav-text)",
            textDecoration: "none",
          }}
        >
          DS
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
          >
            <span className="relative block w-4 h-4">
              <span
                className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "top-1.5 rotate-45" : "top-0.5"}`}
              />
              <span
                className={`absolute left-0 top-1.5 w-4 h-0.5 bg-current transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 w-4 h-0.5 bg-current transition-all duration-200 ${mobileOpen ? "top-1.5 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--glass-border)",
          }}
        >
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              padding: "1rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-body)",
                  padding: "0.875rem 0",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              style={{
                marginTop: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.75rem 1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "var(--accent)",
                color: "var(--accent-text)",
                textDecoration: "none",
                borderRadius: 999,
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}
