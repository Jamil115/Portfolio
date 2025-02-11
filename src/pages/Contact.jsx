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
        <h1 className="text-center text-2xl mb-3 mt-12 font-semibold">
          Get in touch
        </h1>
        <p className="text-center text-md text-gray-200">
          I would love to hear from you! Whether you have a question or just
          want to say hi, feel free to drop a message below
        </p>

        <div className="flex flex-col items-center mt-12 mx-94 bg-[#1f2938] py-14 border-2 rounded-2xl border-gray-400">
          <Label title={"Your Name"} />
          <Label title={"Your Email"} />
          <MsgBox title={"Your Message"} />
          <button className="btn btn-outline mt-12 w-2xl py-4 text-lg">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
