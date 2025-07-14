import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import CryptoDashboard from "@/components/CryptoDashboard";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Pricing />
      <CryptoDashboard />
      <Contact />
    </div>
  );
};

export default Index;