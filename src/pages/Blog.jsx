import React from "react";
import blogImg from "../assets/blog/blog-image.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

// initialize AOS
AOS.init();

function Blog() {
  return (
    <div
      className="bg-black min-h-[45vh] pt-8 flex justify-center align-middle"
      data-aos="fade-up"
    >
      <div className="pb-5 pt-10 flex flex-col justify-center align-middle p-8">
        <img
          src={blogImg}
          alt="streetwyze blog"
          className="rounded-md"
          width="545"
          height="300"
        />
        <a
          href="https:x.com/"
          target="_blank"
          className="flex justify-center align-middle mt-12 mb-8"
        >
          <button className="bg-[#41B22F] text-white p-2 ml-auto mr-auto rounded-md w-full md:w-[38vw]">
            View blog
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
