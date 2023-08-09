import React, { useState, useEffect } from "react";

// import components
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import Companies from "../components/Companies";
import Chatbot from "../components/Chatbot";
import Iframe from "../components/IFrame";
import Popup from "../components/Popup";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Disable scrolling when the popup is open
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showPopup]);

  const iframe =
    ' <iframe src="https://ama-chat.com/chat?tou=city-of-cape-town-support" width="500px" height="600px" style="border:none;"</iframe>';
  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Hero />
      <Features />
      <WhyUs />
      <Companies />
      <Pricing />
      <div className="flex flex-row justify-center align-middle ml-auto mr-auto bg-black pb-8 p-12">
        <Iframe iframe={iframe} className="pr-8 rounded-md" />
      </div>
    </div>
  );
};

export default Home;
