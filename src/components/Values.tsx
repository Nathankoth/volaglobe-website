import { Shield, TrendingUp, Handshake } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent decision-making and governance."
    },
    {
      icon: TrendingUp,
      title: "Long-term Focus",
      description: "We prioritise durable returns over short-term gains."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We work closely with founders and stakeholders to scale responsibly."
    }
  ];

  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              What We Stand For
            </h3>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
