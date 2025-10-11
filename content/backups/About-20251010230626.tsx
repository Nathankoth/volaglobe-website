import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Founder-led, governance-focused",
    "Strategic, long-term capital allocation",
    "Hands-on operational support",
    "Transparent investor communication",
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About Volaris Global
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                Volaris Global Limited is a forward-thinking company dedicated to delivering 
                professional, scientific, and technical services across diverse sectors.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We combine innovative technology solutions with strategic business development 
                to drive growth and create lasting value for our clients and partners. Our 
                comprehensive approach encompasses everything from early-stage startup support 
                to large-scale infrastructure investments, ensuring sustainable returns and 
                resilient business development.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16">

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Content */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Commitment to Excellence
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Strategic Investment Focus
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    We target high-potential ventures across technology, real estate, renewable energy, 
                    and customer service sectors, providing strategic capital and operational expertise.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Innovation & Technology
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    Leveraging AI, data analytics, and digital transformation to unlock insights, 
                    efficiency, and sustainable business opportunities for our portfolio companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
