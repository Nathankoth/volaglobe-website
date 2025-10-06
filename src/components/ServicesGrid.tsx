import React from "react";

/* Provide icons under public/assets/icons/*.svg with these filenames, or the component will fallback to simple emoji. */
const CARDS = [
  { key: "professional", title: "Professional & Scientific Services", desc: "Consultancy, research, development, and innovation-driven growth across diverse sectors.", icon: "consultancy.svg" },
  { key: "digital", title: "Digital Transformation", desc: "Technology, AI, and scalable solutions that address real-world business problems.", icon: "digital.svg" },
  { key: "ai", title: "AI & Data Analytics", desc: "Applying machine learning and AI to unlock insights, efficiency, and business opportunities.", icon: "ai.svg" },
  { key: "innovation", title: "Innovation & Business Development", desc: "Helping early-stage startups and ventures grow with strategy and resource alignment.", icon: "innovation.svg" },
  { key: "realestate", title: "Real Estate & Infrastructure", desc: "Creative development, asset strategy, and value-driven investments in infrastructure.", icon: "realestate.svg" },
  { key: "renewable", title: "Renewable Energy", desc: "Reliable energy projects with strong returns and sustainable growth potential.", icon: "renewable.svg" },
  { key: "customerservice", title: "Customer Service", desc: "Scalable service models with reputable units and strong economics.", icon: "customerservice.svg" }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="services-bleed" aria-labelledby="services-title">
      <div className="services-inner">
        <h2 id="services-title" className="services-title">Our Core Services &amp; Investment Focus</h2>

        <div className="services-grid">
          {CARDS.map(c => (
            <article key={c.key} className="service-card" role="article">
              <div className="service-icon">
                {/* If you don't have the svg, place a file at /public/assets/icons/<icon> */}
                <img src={`/assets/icons/${c.icon}`} alt="" aria-hidden="true" onError={(e)=> (e.currentTarget.style.display = "none")} />
                <span className="icon-fallback" aria-hidden="true">🔹</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
