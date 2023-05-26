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
          Our comprehensive safety navigation app is designed to empower you
          with knowledge, guidance, and peace of mind. With Streetwyze we offer
          a range of features that go beyond traditional navigation.
          <br /> <br />
          Our app leverages advanced algorithms to colour code areas based on
          their crime rates, providing you with an intuitive visual
          representation of safety levels wherever you go. By highlighting
          potential risks, we help you make informed decisions about your
          surroundings, ensuring you stay safe and secure.
          <br /> <br />
          But that's not all – we take your safety a step further. We provide
          personalised safety advice tailored to your location and the time of
          day, empowering you to make informed choices and avoid potential
          risks.
          <br /> <br />
          At Streetwyze, we go the extra mile to offer you a comprehensive
          safety experience. In addition to our app features, we also offer a
          curated selection of stylish safety gadgets, including pepper sprays
          and car phone mounts, to further enhance your personal security.
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
