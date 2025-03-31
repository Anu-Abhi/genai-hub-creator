
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ModelsSection from "@/components/ModelsSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ModelsSection />
        <PlaygroundSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
