import React, { useEffect } from "react";
import ServicesGrid from "../components/ServicesGrid";

export default function Index() {
  // small helper to ensure hero has padding for sticky overlay header
  useEffect(() => {
    function setHeroPadding() {
      const header = document.querySelector(".header-overlay") as HTMLElement | null;
      const hero = document.querySelector(".hero__inner") as HTMLElement | null;
      if (!header || !hero) return;
      const h = Math.ceil(header.getBoundingClientRect().height || 72);
      hero.style.paddingTop = (h + 18) + "px";
    }
    setHeroPadding();
    window.addEventListener("resize", setHeroPadding);
    return () => window.removeEventListener("resize", setHeroPadding);
  }, []);

  return (
    <main>
      {/* HERO */}
      <div className="hero">
        <div className="hero__inner">
          <p className="eyebrow">VOLARIS GLOBAL LIMITED</p>
          <h1 className="hero-headline">Building resilient businesses for sustainable returns</h1>
          <p className="hero-sub">Strategic capital, operational support and founder-friendly governance focused on long-term value.</p>
          <div className="cta-group">
            <a className="btn--primary" href="#investor">Request Investor Pack</a>
            <a className="btn--ghost" href="#vision">Discover Our Vision</a>
          </div>
        </div>
      </div>

      {/* ABOUT (white card with more breathing room) */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About Volaris Global</h2>
          <p>
            VALORIS GLOBAL LIMITED PROVIDES PROFESSIONAL, SCIENTIFIC, AND TECHNICAL SERVICES INCLUDING
            CONSULTANCY, RESEARCH AND DEVELOPMENT, DIGITAL TRANSFORMATION, AND THE APPLICATION OF EMERGING
            TECHNOLOGIES SUCH AS ARTIFICIAL INTELLIGENCE, DATA ANALYTICS, AND ADVANCED VISUALIZATION TOOLS,
            WHILE SUPPORTING INNOVATION AND BUSINESS DEVELOPMENT ACROSS DIVERSE.
          </p>

          <details>
            <summary>Full registered business activities (legal)</summary>
            <p>
              VALORIS GLOBAL LIMITED PROVIDES PROFESSIONAL, SCIENTIFIC, AND TECHNICAL SERVICES INCLUDING...
              {/* keep full CAC text if needed */}
            </p>
          </details>
        </div>
      </section>

      {/* SERVICES - single canonical, full-bleed band */}
      <ServicesGrid />

      {/* rest of page ... */}
    </main>
  );
}
