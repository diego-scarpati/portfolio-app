"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { submitContactForm, type ContactFormData } from "@/app/actions/contact";
import { CustomSelect } from "@/components/ui/CustomSelect";

const SERVICES = [
  "Landing Page",
  "Web App",
  "Web3 Projects",
  "MVP Build",
  "Retainer",
  "Other",
];

const BUDGETS = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure",
];

type Status = "idle" | "submitting" | "success" | "error";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.6rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  color: "var(--text-primary)",
  background: "var(--bg-primary)",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: "0.75rem 1rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Page-refresh case: key was set before reload
    const stored = sessionStorage.getItem("contact-preselect-service");
    if (stored) {
      setService(stored);
      sessionStorage.removeItem("contact-preselect-service");
    }

    // Same-page click case: custom event fired synchronously from PlansSection
    const handler = (e: Event) => {
      setService((e as CustomEvent<string>).detail);
    };
    window.addEventListener("contact-preselect", handler);
    return () => window.removeEventListener("contact-preselect", handler);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(undefined);

    const form = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: (form.get("company") as string) || undefined,
      service: String(form.get("service") ?? ""),
      budget: String(form.get("budget") ?? ""),
      message: String(form.get("message") ?? ""),
      honeypot,
    };

    const result = await submitContactForm(data);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  const focusBorder = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.currentTarget.style.borderColor = "var(--accent)";
  };
  const blurBorder = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.currentTarget.style.borderColor = "var(--border)";
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="reveal-on-scroll py-32 md:py-40 flex flex-col justify-center"
      style={{ background: "var(--bg-secondary)", minHeight: "100dvh" }}
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
          <p className="section-label">06 / Contact</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Got a project in mind?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Tell me about it. I respond within 24 hours.
          </p>
        </div>

        {/* Glass form card */}
        <div
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--glass-border)",
            borderRadius: 24,
            padding: "2.5rem",
          }}
        >
          {status === "success" ? (
            <div
              style={{
                minHeight: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(59,130,246,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Thanks!
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                  }}
                >
                  I&apos;ll be in touch within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setService("");
                  setBudget("");
                  setErrorMessage(undefined);
                }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "1px solid var(--glass-border)",
                  borderRadius: 999,
                  padding: "0.65rem 1.5rem",
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                }}
              >
                Send another brief
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  width: 0,
                }}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    style={inputStyle}
                    onFocus={focusBorder}
                    onBlur={blurBorder}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  placeholder="Optional"
                  style={inputStyle}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                />
              </div>

              {/* Service + Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" style={labelStyle}>
                    Service *
                  </label>
                  <CustomSelect
                    id="service"
                    name="service"
                    required
                    placeholder="Select a service"
                    options={SERVICES}
                    value={service}
                    onChange={setService}
                  />
                </div>
                <div>
                  <label htmlFor="budget" style={labelStyle}>
                    Budget *
                  </label>
                  <CustomSelect
                    id="budget"
                    name="budget"
                    required
                    placeholder="Select a budget"
                    options={BUDGETS}
                    value={budget}
                    onChange={setBudget}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Project description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline, and goals..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={focusBorder}
                  onBlur={blurBorder}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#f87171",
                    lineHeight: 1.5,
                  }}
                >
                  {errorMessage ??
                    "Something went wrong. Please email me directly."}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "var(--accent)",
                    color: "var(--accent-text)",
                    borderRadius: 999,
                    border: "none",
                    padding: "0.85rem 2rem",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    opacity: status === "submitting" ? 0.6 : 1,
                    transition: "background 0.2s, opacity 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "submitting")
                      e.currentTarget.style.background = "var(--accent-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                  }}
                >
                  {status === "submitting" ? "Sending..." : "Send Brief →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
