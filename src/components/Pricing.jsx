import React, { useState, useRef } from "react";

import Pricing1 from "../assets/pricing1.png";
import Pricing2 from "../assets/pricing2.png";

import AOS from "aos";
import "aos/dist/aos.css";
// initialize AOS
AOS.init();

const Pricing = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m3d6aih",
        "template_qra90cs",
        formRef.current,
        "1MTBPSM2I49c_z_oI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Thank you. we will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.text);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="community" className="h-auto w-full bg-[#0A0A0A]">
      <div>
        <h1 className="text-[40px] font-bold text-center pt-8 text-white">
          Join Our Community
        </h1>
        <p className="text-[16px] max-w-[20rem] lg:max-w-[30rem] xl:max-w-[40rem] font-light text-center pt-3 text-white m-auto">
          Join the <span className="text-[#41B22F]">Streetwyze</span> community
          today and experience the power of safety at your fingertips.
          Navigating with confidence, staying connected, and equipping yourself
          with the right tools – all under the name{" "}
          <span className="text-[#41B22F]">Streetwyze</span>. Your safety is our
          mission.
        </p>
      </div>
      <div className="flex flex-col w-[50vw] md:flex-row justify-around ml-auto mr-auto pt-[4rem] pb-8 lg:align-middle">
        <div className="flex-[0.75] bg-white p-8 rounded-2xl mb-[5rem]">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
              />
            </label>

            <button
              type="submit"
              value="Send"
              className="bg-[#41B22F] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {/* {loading ? "Sending..." : "Send"} */}
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
