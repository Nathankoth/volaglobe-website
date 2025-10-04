import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Founder-led, governance-focused",
    "Strategic, long-term capital allocation",
    "Hands-on operational support",
    "Transparent investor communication",
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              About Volaris Global
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Paragraph */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              Volaris Global Limited is a strategic investments and advisory group focused on
              identifying and scaling high-potential ventures across Technology,
              Real Estate, Renewable Energy and Consumer Services.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 rounded-lg bg-background hover:shadow-soft transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-base font-medium text-foreground">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
