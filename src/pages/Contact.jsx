import React from "react";
import Navbar from "../component/Navbar";
import Label from "../component/Label";
import Footer from "../component/Footer";
import MsgBox from "../component/MsgBox";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mb-16">
        <h1 className="text-center text-4xl mb-6 mt-5 font-semibold">
          Get in touch
        </h1>
        <p className="text-center text-lg text-gray-200">
          I would love to hear from you! Whether you have a question or just
          want to say hi, feel free to drop a message below
        </p>

        <div className="flex flex-col items-center mt-10 bg-[#1f2938] py-14 mx-[550px] border-2 rounded-2xl border-gray-400">
          <Label title={"Your Name"} />
          <Label title={"Your Email"} />
          <MsgBox title={"Your Message"} />
          <button className="btn btn-outline mt-10 w-3xl py-7 text-lg">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
