import React from "react";

function Blog() {
  return (
    <div className="bg-black min-h-[45vh] pt-8 flex justify-center align-middle">
      <div className="pb-5">
        <img src="https://picsum.photos/200/300" alt="streetwyze blog" />
        <a href="https:x.com/" target="_blank">
          <button className="bg-[#41B22F] text-white p-2 ml-auto mr-auto rounded-md mt-4 w-[38vw]">
            View blog
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
