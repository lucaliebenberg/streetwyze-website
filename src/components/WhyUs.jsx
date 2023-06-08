import React from "react";

// import Product2 from "../assets/product2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhyUs = () => {
  return (
    <div id="aboutus" className=" h-auto w-full bg-[#0A0A0A] overflow-clip">
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[30px] text-center font-bold text-white lg:text-left">
          About Us
        </h1>
        <p className="text-[16px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#FDFDFD] pt-[3rem] font-light">
          <strong>Empowering Safety Insights:</strong> At StreetWyze, we believe
          that everyone deserves to explore Cape Town with confidence and peace
          of mind. Our app is designed to provide you with valuable safety
          insights, empowering you to make informed decisions about your
          travels. We utilize advanced technology to colour-code different areas
          of Cape Town based on their safety levels, allowing you to easily
          identify and navigate through the city's neighbourhoods.
          <br />
          <br />
          <strong>Comprehensive Safety Tips:</strong> Safety is not just about
          knowing which areas to avoid; it's also about being equipped with the
          right knowledge and precautions. StreetWyze provides you with a wealth
          of comprehensive safety tips, tailored specifically for travellers
          exploring Cape Town. From general safety guidelines to specific advice
          for different locations and activities, our app equips you with the
          necessary information to stay safe while enjoying all that the city
          has to offer.
          <br />
          <br />
          <strong>Curated Recommendations:</strong> Cape Town is a vibrant city
          known for its diverse culinary scene and exciting activities.
          StreetWyze goes beyond safety and serves as your concierge, offering
          carefully curated recommendations for restaurants and activities that
          meet our high safety standards. Discover hidden gems, popular
          attractions, and local favourites, all with an assurance of safety and
          quality.
          <br />
          <br />
          <strong>User-Friendly Interface:</strong> We believe that technology
          should be accessible and easy to use for everyone. StreetWyze features
          a user-friendly interface that allows you to navigate the app
          effortlessly. Whether you're a tech-savvy explorer or someone who
          prefers simplicity, our app ensures a seamless experience for all
          users, making it a reliable companion throughout your Cape Town
          adventure.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
