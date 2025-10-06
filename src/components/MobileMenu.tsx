import React, { useEffect, useRef } from "react";

export default function MobileMenu({ open, onClose, navLinks } : { open:boolean, onClose:()=>void, navLinks:{href:string,label:string}[] }) {
  const ref = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    // focus first link inside menu.
    const first = ref.current?.querySelector('a,button') as HTMLElement | null;
    first?.focus();
    return () => previous?.focus();
  }, [open]);

  if (!open) return null;
  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true">
      <div className="mobile-menu" ref={ref}>
        <button className="mobile-close" onClick={onClose} aria-label="Close menu">Close</button>
        <ul className="mobile-links">
          {navLinks.map(l => (
            <li key={l.href}><a href={l.href} onClick={onClose}>{l.label}</a></li>
          ))}
        </ul>
        <a className="btn--primary mobile-cta" href="#investor" onClick={onClose}>Request Investor Pack</a>
      </div>
    </div>
  );
}
