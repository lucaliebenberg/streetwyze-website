import React from "react";

// import logos
import Company1 from "../assets/company1.png";
import Company2 from "../assets/company2.png";
import Company3 from "../assets/company3.png";
import Company4 from "../assets/company4.png";
import Company5 from "../assets/company5.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhatWeOffer = () => {
  return (
    <div id="whatweoffer" className=" h-auto w-full bg-[white overflow-clip">
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[30px] md:text-[40px] text-center font-bold text-black lg:text-left">
          What We Offer
        </h1>
        <p className="text-[16px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#5E5E5E] pt-[3rem] font-light">
          At StreetWyze, we offer a revolutionary travel app designed to enhance
          your exploration experience in the beautiful city of Cape Town. Our
          app is centred on your safety, providing you with the tools and
          information you need to venture into the local scene with confidence
          and peace of mind.
          <br /> <br />
          Curated Recommendations: We pride ourselves on offering a refined and
          curated selection of the best local restaurants and activities in Cape
          Town. Whether you're seeking a hidden gem or a renowned establishment,
          StreetWyze has you covered. Our expertly curated list ensures that you
          experience the finest culinary delights and engaging activities the
          city has to offer.
          <br /> <br />
          Safety First: Our cutting-edge technology guides you along secure
          routes, prioritizing your safety at every turn. We understand the
          importance of feeling secure while exploring unfamiliar territories.
          StreetWyze provides you with reliable information on crime hotspots,
          enabling you to make informed decisions and navigate Cape Town
          confidently. With us, you can focus on creating memories without any
          worries.
          <br /> <br />
          Unforgettable Experiences: With StreetWyze, you'll embark on a journey
          of transformative and enriching experiences. Immerse yourself in the
          vibrant culture, awe-inspiring landmarks, and captivating attractions
          that Cape Town has to offer. Our app is designed to help you discover
          hidden treasures and create memories that will last a lifetime.
          <br /> <br />
          Local Dining Delights: Indulge your taste buds in Cape Town's culinary
          wonders with StreetWyze as your guide. We provide comprehensive
          information on local restaurants, ensuring that you savour every bite
          with confidence. Our safety ratings give you peace of mind, allowing
          you to relish the diverse flavours and culinary masterpieces the city
          has to offer.
          <br /> <br />
          Empowering Exploration: Whether you're a first-time visitor or a
          seasoned traveller, StreetWyze empowers you to explore Cape Town
          safely and independently. We equip you with the knowledge and insights
          needed to navigate the city's streets, cultural hubs, and hidden gems.
          With StreetWyze by your side, you can embrace the spirit of adventure
          without compromising your safety.
          <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
