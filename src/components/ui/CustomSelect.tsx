"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";

interface CustomSelectProps {
  id?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function CustomSelect({
  id,
  name,
  required,
  placeholder = "Select an option",
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [close]);

  // Scroll focused option into view
  useEffect(() => {
    if (!open || focusedIndex < 0 || !listRef.current) return;
    const item = listRef.current.children[focusedIndex] as HTMLElement;
    item?.scrollIntoView({ block: "nearest" });
  }, [open, focusedIndex]);

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setFocusedIndex(value ? options.indexOf(value) : 0);
    } else if (e.key === "Escape") {
      close();
    }
  };

  const handleListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIndex >= 0) {
        onChange(options[focusedIndex]);
        close();
        triggerRef.current?.focus();
      }
    } else if (e.key === "Escape" || e.key === "Tab") {
      close();
      triggerRef.current?.focus();
    }
  };

  const selectOption = (option: string) => {
    onChange(option);
    close();
    triggerRef.current?.focus();
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      {/* Hidden input so FormData picks up the value */}
      <input type="hidden" name={name} value={value} required={required} />

      {/* Trigger */}
      <button
        ref={triggerRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id ?? name}-listbox`}
        aria-required={required}
        onClick={() => {
          if (open) {
            close();
          } else {
            setOpen(true);
            setFocusedIndex(value ? options.indexOf(value) : 0);
          }
        }}
        onKeyDown={handleTriggerKeyDown}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: value ? "var(--text-primary)" : "var(--text-muted)",
          background: "var(--bg-primary)",
          border: `1px solid ${open ? "var(--accent)" : "var(--border)"}`,
          borderRadius: 16,
          padding: "0.75rem 1rem",
          outline: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "border-color 0.2s",
        }}
      >
        <span
          style={{
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value || placeholder}
        </span>
        {/* Chevron */}
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            color: "var(--text-muted)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          ref={listRef}
          id={`${id ?? name}-listbox`}
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 50,
            maxHeight: 220,
            overflowY: "auto",
            background: "var(--bg-card)",
            border: "1px solid var(--glass-border)",
            borderRadius: 14,
            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "0.35rem",
            margin: 0,
            listStyle: "none",
          }}
          className="scrollbar-hide"
        >
          {options.map((option, i) => {
            const isSelected = option === value;
            const isFocused = i === focusedIndex;
            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                onPointerDown={(e) => {
                  e.preventDefault();
                  selectOption(option);
                }}
                onPointerEnter={() => setFocusedIndex(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  padding: "0.6rem 0.85rem",
                  borderRadius: 10,
                  cursor: "pointer",
                  color: isSelected
                    ? "var(--accent-2)"
                    : "var(--text-secondary)",
                  background: isFocused ? "var(--tag-bg)" : "transparent",
                  transition: "background 0.12s, color 0.12s",
                }}
              >
                <span>{option}</span>
                {isSelected && (
                  <svg
                    aria-hidden="true"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--accent-2)", flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
