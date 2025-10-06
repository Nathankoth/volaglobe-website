import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; id: string }>;
  scrollToSection: (id: string) => void;
  hamburgerRef?: React.RefObject<HTMLButtonElement>;
}

const MobileMenu = ({ isOpen, onClose, navLinks, scrollToSection, hamburgerRef }: MobileMenuProps) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus first link when menu opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
        setFocusedIndex(0);
      }, 100);
    } else {
      setFocusedIndex(-1);
      // Return focus to hamburger button when menu closes
      if (hamburgerRef?.current) {
        hamburgerRef.current.focus();
      }
    }
  }, [isOpen, hamburgerRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'Tab':
          // Trap focus within the menu
          if (menuRef.current) {
            const focusableElements = menuRef.current.querySelectorAll(
              'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              // Tab
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div 
        className="mobile-menu-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        ref={menuRef}
        className="mobile-menu-content"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="mobile-menu-close"
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>

        {/* Navigation links */}
        <nav className="mobile-menu-nav" role="navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              ref={index === 0 ? firstLinkRef : undefined}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="mobile-menu-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mobile-menu-cta">
          <a
            href={`mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`}
            className="btn--primary w-full text-center"
          >
            Request Investor Pack
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
