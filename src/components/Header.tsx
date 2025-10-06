import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";

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
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Logo on left */}
          <div className="brand">
            <Logo 
              onClick={() => scrollToSection("hero")}
              showMarkOnly={false}
            />
          </div>

          {/* Center nav links - Desktop only */}
          <nav className="nav-center" role="navigation">
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

          {/* CTA on right - Desktop only */}
          <div className="nav-cta">
            <a
              href={`mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`}
              className="btn--primary"
            >
              Request Investor Pack
            </a>
          </div>

          {/* Mobile Menu Button - Right side */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger-btn"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Header;
