import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import InvestmentFocus from "@/components/InvestmentFocus";
import Leadership from "@/components/Leadership";
import InvestorCTA from "@/components/InvestorCTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <VisionMission />
        <Values />
        <InvestmentFocus />
        <Leadership />
        <InvestorCTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
