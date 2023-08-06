import React from "react";

function Blog() {
  return (
    <div className="bg-black min-h-[45vh] pt-8 flex justify-center align-middle">
      <div className="pb-5 pt-10 flex flex-col justify-center align-middle p-8">
        <img
          src="https://picsum.photos/545/300"
          alt="streetwyze blog"
          className="rounded-sm"
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
