import React from "react";

// import Product2 from "../assets/product2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhyUs = () => {
  return (
    <div
      id="aboutus"
      className=" h-auto w-full bg-[#0A0A0A] overflow-clip mr-auto ml-auto"
    >
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[30px] md:text-[40px] text-center font-bold text-white lg:text-left">
          About Us
        </h1>
        <p className="text-[16px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#FDFDFD] pt-[3rem] font-light mr-auto ml-auto">
          StreetWyze is your one-stop travel information app that is committed
          to recommending the most refined list of restaurants and activities at
          your chosen destination. We believe that every journey should be
          transformative and enriching, and we are dedicated to ensuring that
          you can explore with confidence and peace of mind. With our
          cutting-edge technology, StreetWyze guides users through secure
          routes, prioritising safety every step of the way.
          <br />
          <br />
          Whether you are a first-time visitor or a seasoned explorer,
          StreetWyze is your trusted companion for a safe and unforgettable
          journey. Use this app during your daily driving, outdoor adventures,
          or overseas travel. Join us in creating a safer world where everyone
          can move freely, feeling protected and empowered. Download StreetWyze
          today and embark on your next adventure with confidence!
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
