import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar h-16  ">
        <div className="w-screen">
          <ul className="flex gap-x-10 mx-10 justify-end">
            <li>
            <a href="/" className="flex hover:text-neutral-400">
                <FaHome className="text-xl mx-2 mt-1"/>
                <button className="text-lg cursor-pointer">Home</button>
            </a>
            </li>

            <li>
            <a href="/education" className="flex hover:text-neutral-400">
                <PiGraduationCapFill className="text-xl mx-2 mt-1"/>
                <button className="text-lg cursor-pointer">Education</button>
            </a>
            </li>

            <li>
            <a href="/skills" className="flex hover:text-neutral-400">
                <BsCodeSlash className="text-xl mx-2 mt-1"/>
                <button className="text-lg cursor-pointer">Skills</button>
            </a>
            </li>
            <li>
            <a href="/projects" className="flex hover:text-neutral-400">
                <AiOutlineProject className="text-xl mx-2 mt-1"/>
                <button className="text-lg cursor-pointer">Projects</button>
            </a>
            </li>
            <li>
              <a href="/cantact" className="flex hover:text-neutral-400">
                <MdContacts className="text-xl mx-2 mt-1"/>
                <button className="text-lg cursor-pointer">Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
