import React, { useState } from "react";

// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Companies from "./components/Companies";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Companies />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
