import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { GrClose } from "react-icons/gr";

const Popup = ({ onClose }) => {
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
        "service_zlzn7pr",
        "template_qaj1s1a",
        formRef.current,
        "bF08oyEawBfcgePGL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
          onClose();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="" className="h-full w-full bg-[#0A0A0A] pb-[2rem]">
      <div
        className="flex flex-col w-[95vw] md:flex-row justify-around ml-auto mr-auto pt-[4rem] pb-8 lg:align-middle"
        data-aos="fade-up"
      >
        <div className="flex-[0.75] bg-white p-8 rounded-2xl mb-[2.5rem] h-[25%]">
          <div className="flex flex-row justify-between align-middle p-1">
            <h3 className="text-[2rem] text-black font-semibold">
              Join Our Community
            </h3>
            <button onClick={onClose}>
              <GrClose color="black" size={24} />
            </button>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-2 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-[#0A0A0A] font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
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
                placeholder="Enter your email address"
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
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
                placeholder="Enter your message..."
                className="bg-white py-4 px-6 placeholder:text-[#CCC] text-[#0A0A0A] rounded-lg border border-light-100 font-medium"
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

export default Popup;
