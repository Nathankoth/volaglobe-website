import { Linkedin, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { siteConfig, getConfiguredSocials, isSocialConfigured } from "@/config/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-3">Volaris</h3>
              <p className="text-primary-foreground/70 text-sm">
                Building resilient businesses for sustainable returns.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#focus"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Investment Focus
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="space-y-3 mb-6">
                <a
                  href={`mailto:${siteConfig.contact.investorEmail}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.investorEmail}
                </a>
              </div>

              {/* Social Icons - Only show configured social media */}
              {getConfiguredSocials().length > 0 && (
                <div className="flex items-center gap-4">
                  {isSocialConfigured('linkedin') && (
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                      aria-label="Visit Volaris Global Limited on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {isSocialConfigured('facebook') && (
                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                      aria-label="Visit Volaris Global Limited on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {isSocialConfigured('twitter') && (
                    <a
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                      aria-label="Visit Volaris Global Limited on X (Twitter)"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {isSocialConfigured('instagram') && (
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                      aria-label="Visit Volaris Global Limited on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
              <p>
                © {currentYear} Volaris Global Limited. All rights reserved.
              </p>
              <p>Built with strategic vision.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
