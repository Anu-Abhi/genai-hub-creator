
import React from "react";
import NavBar from "@/components/NavBar";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
