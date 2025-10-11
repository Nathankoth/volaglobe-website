import { FaFlask, FaCogs, FaBrain, FaRocket, FaBuilding, FaLeaf, FaUsers } from 'react-icons/fa';

const ServicesGrid = () => {
  const services = [
    {
      key: "professional",
      title: "Professional & Scientific Services",
      description: "Consultancy, research, development, and innovation-driven growth across diverse sectors.",
      icon: <FaFlask className="text-accent" />
    },
    {
      key: "digital",
      title: "Digital Transformation",
      description: "Technology, AI, and scalable solutions that address real-world business problems.",
      icon: <FaCogs className="text-accent" />
    },
    {
      key: "ai",
      title: "AI & Data Analytics",
      description: "Applying machine learning and AI to unlock insights, efficiency, and business opportunities.",
      icon: <FaBrain className="text-accent" />
    },
    {
      key: "innovation",
      title: "Innovation & Business Development",
      description: "Helping early-stage startups and ventures grow with strategy and resource alignment.",
      icon: <FaRocket className="text-accent" />
    },
    {
      key: "realestate",
      title: "Real Estate & Infrastructure",
      description: "Creative development, asset strategy, and value-driven investments in infrastructure.",
      icon: <FaBuilding className="text-accent" />
    },
    {
      key: "renewable",
      title: "Renewable Energy",
      description: "Reliable energy projects with strong returns and sustainable growth potential.",
      icon: <FaLeaf className="text-accent" />
    },
    {
      key: "customerservice",
      title: "Customer Service",
      description: "Scalable service models with reputable units and strong economics.",
      icon: <FaUsers className="text-accent" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-100">
      {/* Full-width background */}
      <div className="w-full">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Our Core Services & Investment Focus
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Delivering professional, scientific, and technical services across diverse sectors with strategic investment focus
              </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={service.key} className="service-card">
                  <div className="icon">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
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

export default ServicesGrid;
