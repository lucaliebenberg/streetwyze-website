import React from "react";

import Product2 from "../assets/product2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const WhyUs = () => {
  return (
    <div id="whyus" className=" h-auto w-full bg-[#0A0A0A] overflow-clip">
      <div className="p-[5rem] lg:p-[10rem]" data-aos="fade-right">
        <h1 className="text-[40px] text-center font-bold text-white lg:text-left">
          About Us
        </h1>
        <p className="text-[18px] w-auto max-w-[300px] md:text-[20px] md:max-w-[500px] lg:max-w-[1141px] lg:text-[23px] text-[#FDFDFD] pt-[3rem] font-light">
          Streetwyze is a safety navigation app that aims to create a safer city
          for travellers. We understand that travelling should be a
          transformative and enriching experience, and we are dedicated to
          ensuring that our users can explore with confidence and peace of mind.
          <br />
          <br />
          With our cutting-edge technology, Streetwyze guides users through
          secure routes, prioritising safety every step of the way. By providing
          reliable information on crime hotspots, our app allows you to arrive
          at your destination on time and in one piece.
          <br />
          <br />
          Whether you are a first-time visitor or a seasoned explorer,
          Streetwyze is your trusted companion for a safe and unforgettable
          journey. Use this app during your daily driving, outdoor adventures,
          or overseas travel. Join us in creating a safer world where everyone
          can move freely, feeling protected and empowered. Download Streetwyze
          today and embark on your next adventure with confidence.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
