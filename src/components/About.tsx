import { CheckCircle2 } from "lucide-react";
import ServicesGrid from "@/components/ServicesGrid";

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
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
              Volaris Global Limited is a forward-thinking company dedicated to delivering 
              professional, scientific, and technical services across diverse sectors. We 
              combine innovative technology solutions with strategic business development 
              to drive growth and create lasting value for our clients and partners.
            </p>
          </div>

          {/* Services Grid */}
          <ServicesGrid />

          {/* Main Content */}
          <div className="space-y-12 mt-16">

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
