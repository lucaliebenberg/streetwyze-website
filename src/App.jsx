import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import Companies from "./components/Companies";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurApp from "./pages/OurApp";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact="true" path="/home" element={<Home />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/app" element={<OurApp />} />
          <Route exact="true" path="/store" element={<OurStore />} />
          <Route exact="true" path="/blog" element={<Blog />} />
          <Route exact="true" path="/support" element={<Support />} />
          <Route exact="true" path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
