import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaStore } from "react-icons/fa";

import { TbWriting } from "react-icons/tb";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-auto bg-white" data-aos="fade-in">
      <div className="flex flex-col justify-center mt-[2rem]">
        <p className="text-[#909090] font-semibold text-[12px] text-center">
          LIKE WHAT YOU SEE?
        </p>
        <h1 className="text-[#41B22F] font-semibold text-[24px] md:text-[28px] text-center">
          Have any further questions?
        </h1>
        <p className="mt-5 max-w-[300px] md:max-w-[384px] lg:max-w-[384px] text-black text-center justify-center text-[16px] ml-auto mr-auto">
          Feel free to get in touch with us!
        </p>
        <button className="w-[134px] h-[40px] rounded-[5px] bg-[#41B22F] text-white mt-5 ml-auto mr-auto hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
          <a
            href="mailto:contactstreetwyze@gmail.com"
            target={"_blank"}
            rel="no-refferer"
            className=""
          >
            Get in touch
          </a>
        </button>
      </div>
      <div className="w-[90vw] border-stone-900"></div>
      <div className="flex flex-row justify-between align-middle pt-[6rem] pb-2 text-[#CCC]">
        <p className="text-[12px] pt-1 ml-4 lg:ml-10">
          2023 &copy; Streetwyze. All right reserved.
        </p>
        <div className="flex flex-row mr-4 lg:mr-8">
          <a
            href="https://www.facebook.com/profile.php?id=100092980838508"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#41B22F] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillFacebook size={24} className="mr-3" />
          </a>
          <a
            href="https://twitter.com/Streetwyze2023"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#41B22F] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillTwitterSquare size={24} className="mr-3" />
          </a>
          <a
            href="https://instagram.com/streetwyze_?igshid=OGQ5ZDc2ODk2ZA=="
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#41B22F] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillInstagram size={24} className="mr-3" />
          </a>
          <a
            href="https://www.linkedin.com/company/96197496/admin/?feedType=following"
            target={"_blank"}
            className="text-[#CCC] font-semibold hover:text-[#41B22F] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <AiFillLinkedin size={24} />
          </a>
          <a
            href="https://streetwyze.blog"
            target={"_blank"}
            className="text-[#CCC] font-semibold pl-3 hover:text-[#41B22F] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-300 hover:ease-in-out"
          >
            <TbWriting size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
