const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Services & Investment Focus</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Services cards */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Professional & Scientific Services</h3>
            <p>Consultancy, research, development, and innovation-driven growth across diverse sectors.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Digital Transformation</h3>
            <p>Technology, AI, and scalable solutions that address real-world business problems.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">AI & Data Analytics</h3>
            <p>Applying machine learning and AI to unlock insights, efficiency, and business opportunities.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Innovation & Business Development</h3>
            <p>Helping early-stage startups and ventures grow with strategy and resource alignment.</p>
          </div>

          {/* Investment Focus cards */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Real Estate & Infrastructure</h3>
            <p>Creative development, asset strategy, and value-driven investments in infrastructure.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Renewable Energy</h3>
            <p>Reliable energy projects with strong returns and sustainable growth potential.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Customer Service</h3>
            <p>Scalable services with reputable units and strong economic models.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
