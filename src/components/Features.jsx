import React from "react";

import Feature1 from "../assets/Icon.svg";
import Feature2 from "../assets/Icon-1.svg";
import Feature3 from "../assets/Icon-2.svg";
import Feature4 from "../assets/Icon-3.svg";
import Feature5 from "../assets/Icon-4.svg";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Features = () => {
  return (
    <div
      data-aos="fade-in"
      id="features"
      className="h-auto w-full lg:h-[100vh]"
    >
      <h1 className="text-black text-center font-bold text-[30px] p-[5rem] md:pl-[6rem] lg:text-[40px] lg:text-left">
        Our Features
      </h1>

      <div className="flex flex-col mt-0 pt-0 p-[5rem] h-full md:flex-row md:justify-between lg:mt-auto lg:mb-auto">
        <div className="flex flex-col mr-2 lg:mt-14 xl:mr-0">
          <img
            src={Feature1}
            alt="Feature 1 icon"
            className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
          />
          <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
            Colour-coded
          </h2>
          <p className="text-[13px] md:text-[16px] md:text-center text-[#ABABAB] justify-center text-center max-w-[277px]">
            We provide a analytical colour-coded interface of Cape Town
          </p>
        </div>

        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature2}
              alt="Feature 2 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Location Saving
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[277px]">
              Choose your own favourite locations and save them with ease
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature4}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Information on Restaurants
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[280px]">
              Discover culinary wonders with curated restaurant recommendations
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-14">
            <img
              src={Feature5}
              alt="Feature 3 icon"
              className="h-[40px] w-[40px] ml-auto mr-auto mb-10"
            />
            <h2 className="text-[20px] md:text-[22px] text-[#137703] font-bold justify-center text-center mb-4">
              Information on Activities
            </h2>
            <p className="text-[13px] md:text-[16px] text-[#ABABAB] justify-center text-center max-w-[260px]">
              Explore activities with StreetWyze's reliable information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
