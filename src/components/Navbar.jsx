import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import StreetwyzeLogo from "../assets/black-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[60px] bg-[#0A0A0A]">
      <div className="px-4 lg:px-14 mx-auto flex justify-between items-center h-full">
        <motion.div
          initial={{ x: "-200px" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="ml-7 mt-12">
            <img
              src={StreetwyzeLogo}
              alt="Onesheet Logo"
              className="w-[64px] hover:cursor-pointer p-0 xl:p-0"
            />
            STREETWYZE
          </h1>
        </motion.div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <motion.a
              href="#features"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Features
              </li>
            </motion.a>
            <motion.a
              href="#aboutus"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </motion.a>
            <motion.a
              href="#whatweoffer"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                What We Offer
              </li>
            </motion.a>
            <motion.a
              href="#community"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Community
              </li>
            </motion.a>
            <motion.a
              href="#footer"
              initial={{ x: "500px" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <li className="m-5 hover:cursor-pointer hover:text-[#00FF9D] hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out">
                Contact
              </li>
            </motion.a>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          initial={{ y: "-200px" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="block md:hidden"
          onClick={handleNav}
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-[95vw] rounded-md bg-white text-[#56AC8B] absolute top-[50px] left-0 flex justify-center text-center ml-1 mt-2 md:hidden lg:hidden xl:hidden"
              : // try 'hidden' instead of below
                "absolute left-[-100%]"
          }
        >
          <ul>
            <a href="#features">
              <li className="text-2xl pt-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Features
              </li>
            </a>

            <a href="#aboutus">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                About Us
              </li>
            </a>
            <a href="#whatweoffer">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                What We Offer
              </li>
            </a>
            <a href="#communiry">
              <li className="text-2xl pt-7 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Community
              </li>
            </a>
            <a href="#footer">
              <li className="text-2xl pt-5 pb-10 hover:cursor-pointer hover:text-[#00FF9D] hover:transition-all hover:duration-300 hover:ease-in-out">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
