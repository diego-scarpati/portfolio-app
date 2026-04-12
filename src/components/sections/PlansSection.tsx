"use client";

import { useEffect, useRef } from "react";
import { servicePlans, retainerPlans } from "@/data/services";

export function PlansSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="plans"
      className="reveal-on-scroll py-32 md:py-40 flex flex-col justify-center"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <p className="section-label">02 / What I Build</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Transparent pricing.
            <br />
            No surprises.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Fixed packages with clear deliverables. You know what you&apos;re
            getting before we start.
          </p>
        </div>

        {/* Service plan cards — 2×2 grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ marginBottom: "4rem" }}
        >
          {servicePlans.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`reveal-card relative flex flex-col group ${
                plan.popular
                  ? "border border-[var(--accent)]"
                  : "border border-[var(--glass-border)] hover:border-[var(--accent)]"
              } transition-all duration-200 hover:-translate-y-1`}
              style={{
                transitionDelay: `${i * 90}ms`,
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: 20,
                padding: "1.75rem",
              }}
            >
              {plan.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    right: "1.75rem",
                    transform: "translateY(-50%)",
                    background: "var(--accent)",
                    color: "var(--accent-text)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.75rem",
                    borderRadius: 999,
                  }}
                >
                  Popular
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {plan.timeline}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    ${plan.startingPrice.toLocaleString()}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      color: "var(--text-muted)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {plan.currency}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {plan.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        flexShrink: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => {
                  sessionStorage.setItem(
                    "contact-preselect-service",
                    plan.name
                  );
                  window.dispatchEvent(
                    new CustomEvent("contact-preselect", { detail: plan.name })
                  );
                }}
                className={`block text-center transition-colors duration-200 group-hover:opacity-90 ${
                  plan.popular
                    ? "bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)]"
                    : "border border-[var(--glass-border)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--text-primary)]"
                }`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: 999,
                }}
              >
                Send a Brief →
              </a>
            </div>
          ))}
        </div>

        {/* Retainer section */}
        <div
          style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "0.4rem",
              }}
            >
              Ongoing Collaboration
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              Dedicated development capacity on a monthly basis.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ marginBottom: "2rem" }}
          >
            {retainerPlans.map((plan, i) => (
              <div
                key={plan.id}
                ref={(el) => {
                  cardRefs.current[servicePlans.length + i] = el;
                }}
                className="reveal-card border border-[var(--glass-border)] hover:border-[var(--accent)] transition-colors duration-200"
                style={{
                  transitionDelay: `${(servicePlans.length + i) * 90}ms`,
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: 20,
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                    }}
                  >
                    {plan.name}
                  </h4>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        lineHeight: 1,
                      }}
                    >
                      ${plan.pricePerMonth.toLocaleString()}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.6rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {plan.currency} / month
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {plan.hoursPerMonth} hours / month
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                  }}
                >
                  {plan.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "var(--accent)",
              color: "var(--accent-text)",
              padding: "1rem",
              borderRadius: 999,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
