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
    <header className="navbar fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo on left */}
        <div className="flex-shrink-0">
          <Logo 
            onClick={() => scrollToSection("hero")}
            showMarkOnly={false}
          />
        </div>

        {/* Center nav links */}
        <nav className="flex-1 flex justify-center space-x-10 text-white font-semibold hidden md:flex" role="navigation">
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
        <div className="flex-shrink-0">
          <a
            href={`mailto:${siteConfig.contact.investorEmail}?subject=Investor%20Enquiry`}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
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
        <nav className="md:hidden bg-black/95 backdrop-blur-md pb-6 animate-in fade-in slide-in-from-top-2 duration-200" role="navigation">
          <div className="container mx-auto px-8 flex flex-col gap-4">
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
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold w-full text-center transition-colors"
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
