import { FaFlask, FaCogs, FaRocket } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Professional & Scientific Services",
      icon: <FaFlask size={40} className="text-accent" />,
      items: [
        "Consultancy",
        "Research & Development"
      ]
    },
    {
      title: "Digital Transformation",
      icon: <FaCogs size={40} className="text-accent" />,
      items: [
        "Application of Emerging Technologies",
        "Artificial Intelligence & Data Analytics",
        "Advanced Visualization Tools"
      ]
    },
    {
      title: "Innovation & Business Development",
      icon: <FaRocket size={40} className="text-accent" />,
      items: [
        "Supporting Innovation",
        "Driving Growth Across Diverse Sectors"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Delivering professional, scientific, and technical services across diverse sectors
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card shadow-sm border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent/10 rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>

                {/* Services List */}
                <ul className="text-foreground/70 space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
