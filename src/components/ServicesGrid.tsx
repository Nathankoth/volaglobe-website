import { FaFlask, FaCogs, FaChartLine, FaBrain } from 'react-icons/fa';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Professional & Scientific Services',
      icon: <FaFlask className="text-accent" />,
      list: ['Consultancy', 'Research & Development']
    },
    {
      title: 'Digital Transformation',
      icon: <FaCogs className="text-accent" />,
      list: ['Emerging tech', 'Advanced visualization']
    },
    {
      title: 'AI & Data Analytics',
      icon: <FaBrain className="text-accent" />,
      list: ['AI models', 'Data pipelines', 'Decision analytics']
    },
    {
      title: 'Innovation & Business Development',
      icon: <FaChartLine className="text-accent" />,
      list: ['Investor support', 'Strategic growth']
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Our Core Services
        </h2>
        <p className="text-md text-muted-foreground mb-8 max-w-3xl mx-auto">
          Volaris Global Limited provides professional, scientific, and technical services 
          across diverse sectors with a focus on innovation and growth.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="p-6 bg-white/90 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-border/50"
            >
              <div className="text-accent mb-4 flex justify-center">
                <div className="p-3 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.list.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        
        {/* Legal compliance section */}
        <details className="mt-8 text-left max-w-4xl mx-auto">
          <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
            Legal / Registered Activities
          </summary>
          <div className="mt-4 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground leading-relaxed">
            VALORIS GLOBAL LIMITED PROVIDES PROFESSIONAL, SCIENTIFIC, AND TECHNICAL SERVICES INCLUDING CONSULTANCY, RESEARCH AND DEVELOPMENT, DIGITAL TRANSFORMATION, AND THE APPLICATION OF EMERGING TECHNOLOGIES SUCH AS ARTIFICIAL INTELLIGENCE, DATA ANALYTICS, AND ADVANCED VISUALIZATION TOOLS, WHILE SUPPORTING INNOVATION AND BUSINESS DEVELOPMENT ACROSS DIVERSE SECTORS.
          </div>
        </details>
      </div>
    </section>
  );
};

export default ServicesGrid;
