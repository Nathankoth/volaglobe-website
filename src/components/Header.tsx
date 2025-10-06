import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Logo from "@/components/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 320;
      setIsScrolled(window.scrollY > heroHeight - 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Focus", id: "focus" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="header-overlay">
      <div className="header-inner">
        {/* Logo on left */}
        <div className="brand">
          <Logo 
            onClick={() => scrollToSection("hero")}
            showMarkOnly={false}
          />
        </div>

        {/* Center nav links */}
        <nav className="nav-center hidden md:flex" role="navigation">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="hover:text-green-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA on right */}
        <div className="nav-cta">
          <a
            href={`mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`}
            className="btn--primary"
          >
            Request Investor Pack
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-green-400 transition-colors"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mobile-nav" role="navigation">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-left text-base font-medium text-white hover:text-green-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`}
              className="btn--primary w-full text-center"
            >
              Request Investor Pack
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
