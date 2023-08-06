import React from "react";

// import images
import InstaLogo from "../assets/instagram-logo.png";
import LinkedInLogo from "../assets/linkedin-logo.png";

function ContactUs() {
  return (
    <div className="bg-black text-white p-4 flex flex-col md:flex-row justify-center align-middle pt-[4rem] pb-[4rem]">
      {/* <div className="mr-auto ml-auto text-center">
        <div className="flex flex-col mt-[2rem] mb-[2rem]">
          <h1 className="text-[1.6rem] font-bold mb-4">Instagram</h1>
          <img src={InstaLogo} alt="Instagram logo" height="250" width="250" />
          <a href="https://www.instagram.com/" target="_blank">
            <button className="bg-[#41B22F] p-1 rounded-md mt-4 text-sm w-full h-[4vh] md:h-[5vh]">
              Go to Instagram
            </button>
          </a>
        </div>
      </div> */}
      <div className="mr-auto ml-auto text-center">
        <div className="flex flex-col mt-[2rem] mb-[2rem]">
          <h1 className="text-[1.6rem] md:text-[2rem] font-bold mb-3">
            Instagram
          </h1>
          <img src={InstaLogo} alt="Instagram logo" height="250" width="250" />
        </div>
        <a
          href="https://www.instagram.com/streetwyze_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
        >
          <button className="bg-[#a949a9] p-1 rounded-md mt-4 text-lg w-full h-[4vh] md:h-[5vh]">
            Go to Instagram
          </button>
        </a>
      </div>

      <div className="mr-auto ml-auto text-center">
        <div className="flex flex-col mt-[2rem] mb-[2rem]">
          <h1 className="text-[1.6rem] md:text-[2rem] font-bold mb-3">
            Linked In
          </h1>
          <img
            src={LinkedInLogo}
            alt="LinkedIn logo"
            height="250"
            width="250"
          />
        </div>
        <a href="https://www.linkedin.com/company/street-wyze/" target="_blank">
          <button className="bg-[#085B8C] p-1 rounded-md mt-4 text-lg w-full h-[4vh] md:h-[5vh]">
            Go to LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
