import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Leadership from "@/components/Leadership";
import InvestorCTA from "@/components/InvestorCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <ServicesGrid />
        <VisionMission />
        <Values />
        <Leadership />
        <InvestorCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
