import React from "react";

function ContactUs() {
  return (
    <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-center align-middle pb-[2rem]">
      <div className="mr-auto ml-auto text-center">
        <div className="flex flex-col mb-[2rem]">
          <h1 className="text-[1.6rem] font-bold">Instagram</h1>
          <a href="https://www.instagram.com/" target="_blank">
            <button className="bg-[#41B22F] p-1 rounded-md mt-4 text-sm">
              Go to Facebook
            </button>
          </a>
        </div>
      </div>

      <div className="mr-auto ml-auto text-center">
        <div className="flex flex-col mt-[2rem]">
          <h1 className="text-[1.6rem] font-bold">Linked In</h1>
        </div>
        <a href="https://www.linkedin.com/" target="_blank">
          <button className="bg-[#41B22F] p-1 rounded-md mt-4 text-sm">
            Go to LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
