import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import jamilImage from "../../public/jamil.png"

export default function Hero() {
  return (
    <div className="h-[593px] flex items-center">
        <div className="flex flex-col justify-center items-center h-[500px] border-2 rounded-4xl bg-neutral-800 mx-52">
        <div className="avatar mb-4">
            <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
                <img src={jamilImage} />
            </div>
        </div>
        <div className="text-center">
            <p className=" mb-1 font-semibold">Hello! I'm </p>
            <h1 className="font-bold text-3xl mb-2 text-yellow-300 font-serif">Jamil Khan Riyed</h1>
            <p className="text-md font-semibold mb-5">I'm a <span className="bg-cyan-600 text-white p-1">MERN Stack</span> Developer</p>
            <p className="text-gray-300 mx-32 px-20 pb-5 ">I am a passionate fresher in front-end web development, skilled in HTML, CSS, and JavaScript. I enjoy creating responsive, visually appealing, and user-friendly websites</p>
        </div>
        <div className="flex gap-5 text-xl">
            <a href="https://www.facebook.com/Jamilkhan.jk7/"><FaFacebook /></a>
            <a href="https://www.instagram.com/__its__jamil_/"><FaInstagram /></a>
            <a href="www.linkedin.com/in/jamil-khan-893141227"><FaLinkedin /></a>
            <a href="https://github.com/Jamil115"><VscGithub /></a>
            <a href="https://x.com/Jamil_k710?t=BRAcRxIJzT8yeikFVVMwdg&s=09"><FaXTwitter /></a>
        </div>
        <div className="mt-8">
            <a href="/Resume.pdf" download><button className="font-semibold py-2 px-4 border-2 border-cyan-200 rounded-3xl mr-5 cursor-pointer hover:bg-black hover:border-white">Resume</button></a>
            <a href="/contact"><button className=" font-semibold py-2 px-4 border-2 border-cyan-200 rounded-3xl cursor-pointer hover:bg-black hover:border-white">Contact Me</button></a>
        </div>
    </div>
    </div>
  );
}
