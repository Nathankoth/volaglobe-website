import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

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
    { label: "Focus", id: "focus" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[220ms] ease-out ${
        isScrolled 
          ? "bg-primary/[0.88] shadow-elevated border-b border-white/[0.06]" 
          : "bg-primary/[0.28] border-b border-white/[0.06]"
      }`}
      style={{
        backdropFilter: "blur(8px) saturate(1.05)",
        WebkitBackdropFilter: "blur(8px) saturate(1.05)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Desktop/Tablet: Full wordmark, Mobile: Mark only */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded"
              aria-label="Volaris — brand logo"
            >
              <img 
                src={siteConfig.navigation.logo.full} 
                alt="Volaris Global" 
                className="brand-logo hidden sm:block"
                style={{
                  height: '48px',
                  maxHeight: '56px',
                  width: 'auto',
                  display: 'block'
                }}
              />
              <img 
                src={siteConfig.navigation.logo.mark} 
                alt="Volaris Global" 
                className="brand-logo sm:hidden"
                style={{
                  height: '40px',
                  width: 'auto',
                  display: 'block'
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-7 lg:gap-8" role="navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-[#F3EFF5] hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-shrink-0">
            <Button
              onClick={() =>
                (window.location.href =
                  `mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`)
              }
              className="bg-accent hover:bg-accent-dark text-white focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Request Investor Pack
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F3EFF5] hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded p-1"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2 duration-200" role="navigation">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-base font-medium text-[#F3EFF5] hover:text-accent transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent rounded px-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() =>
                  (window.location.href =
                    `mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`)
                }
                className="bg-accent hover:bg-accent-dark text-white w-full focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Request Investor Pack
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
