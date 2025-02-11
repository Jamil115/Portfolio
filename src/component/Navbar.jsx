import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar h-28  ">
        <div className=" w-screen">
          <ul className="flex gap-x-14 mx-16 justify-end">
            <li>
            <a href="/" className="flex">
                <FaHome className="text-2xl mx-2 mt-1"/>
                <button className="text-2xl cursor-pointer">Home</button>
            </a>
            </li>

            <li>
            <a href="/education" className="flex">
                <PiGraduationCapFill className="text-2xl mx-2 mt-1"/>
                <button className="text-2xl cursor-pointer">Education</button>
            </a>
            </li>

            <li>
            <a href="/skills" className="flex">
                <BsCodeSlash className="text-2xl mx-2 mt-1"/>
                <button className="text-2xl cursor-pointer">Skills</button>
            </a>
            </li>
            <li>
            <a href="/projects" className="flex">
                <AiOutlineProject className="text-2xl mx-2 mt-1"/>
                <button className="text-2xl cursor-pointer">Projects</button>
            </a>
            </li>
            <li>
              <a href="/cantact" className="flex">
                <MdContacts className="text-2xl mx-2 mt-1"/>
                <button className="text-2xl cursor-pointer">Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
