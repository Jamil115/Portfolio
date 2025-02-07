import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";

export default function Navbar() {
  return (
    <div>
      {/* bg-base-100 */}
      <div className="navbar h-28">
        {/* <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div> */}
        <div className="w-screen">
          <ul className="flex gap-x-14 mx-16 justify-end">
            <li className="flex">
                <FaHome className="text-2xl mx-2 mt-1"/>
                <a className="text-2xl">Home</a>
            </li>
            <li className="flex">
                <PiGraduationCapFill className="text-2xl mx-2 mt-1"/>
                <a className="text-2xl">Education</a>
            </li>
            <li className="flex">
                <BsCodeSlash className="text-2xl mx-2 mt-1"/>
                <a className="text-2xl">Skills</a>
            </li>
            <li className="flex">
                <AiOutlineProject className="text-2xl mx-2 mt-1"/>
                <a className="text-2xl">Projects</a>
            </li>
            <li className="flex">
                <MdContacts className="text-2xl mx-2 mt-1"/>
                <a className="text-2xl">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
