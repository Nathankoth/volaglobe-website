import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern corporate architecture representing Volaris Global's strategic vision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Kicker */}
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 fade-up">
            Volaris Global Limited
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight fade-up" style={{ animationDelay: '100ms' }}>
            Building resilient businesses for sustainable returns
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed fade-up" style={{ animationDelay: '200ms' }}>
            Strategic capital, operational support and founder-friendly governance
            focused on long-term value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() =>
                (window.location.href =
                  "mailto:invest@volarisglobal.com?subject=Investor%20Enquiry")
              }
              className="bg-accent hover:bg-[hsl(100,60%,31%)] text-accent-foreground text-base px-8 min-h-[44px]"
              aria-label="Request Investor Pack"
            >
              Request Investor Pack
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="glass"
              onClick={() => scrollToSection("vision")}
              className="text-base px-8 min-h-[44px]"
              aria-label="Discover Our Vision"
            >
              Discover Our Vision
            </Button>
          </div>
        </div>
      </div>

      {/* Skip to content link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-24 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
      >
        Skip to content
      </a>
    </section>
  );
};

export default Hero;
