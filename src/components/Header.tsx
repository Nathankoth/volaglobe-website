import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header-overlay" role="banner">
      <div className="header-inner">
        {/* LEFT: Logo */}
        <div className="brand">
          <a href="/">
            {/* Replace path with your actual wordmark/png */}
            <img src="/assets/branding/volaris_mark_wordmark.png" alt="Volaris Global" className="brand-logo" />
          </a>
        </div>

        {/* CENTER: Nav links (hidden on small screens) */}
        <nav className="nav-center" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: CTA */}
        <div className="nav-cta">
          <a href="#investor" className="btn--primary">Request Investor Pack</a>
        </div>

        {/* Mobile hamburger (always present visually on small screens) */}
        <button
          className="mobile-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <MobileMenu open={open} onClose={() => setOpen(false)} navLinks={NAV_LINKS} />
    </header>
  );
}
