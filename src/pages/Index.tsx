import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ForClinicians from "@/components/ForClinicians";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import Team from "@/components/Team";
import Customers from "@/components/Customers";
import News from "@/components/News";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ForClinicians />
        <Story />
        <Journey />
        <Customers />
        <Team />
        <News />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
