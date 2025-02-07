import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-[800px]">
        <div className="avatar mb-8">
            <div className="ring-primary ring-offset-base-100 w-52 rounded-full ring ring-offset-2">
                <img src="../../public/jk.png"/>
            </div>
        </div>
        <div className="text-center">
            <p className="text-2xl mb-4 font-semibold">Hello! I'm </p>
            <h1 className="font-bold text-5xl mb-4 text-yellow-300">Jamil Khan Riyed</h1>
            <p className="text-xl font-semibold mb-7">I'm a <span className="bg-[#2c7852] text-white p-1">MERN Stack</span> Developer</p>
            <p className="text-gray-300 text-xl mx-52 px-96 h-20">I am a passionate fresher in front-end web development, skilled in HTML, CSS, and JavaScript. I enjoy creating responsive, visually appealing, and user-friendly websites</p>
        </div>
        <div className="flex gap-10 text-3xl mt-2">
            <a href="https://www.facebook.com/Jamilkhan.jk7/"><FaFacebook /></a>
            <a href="https://www.instagram.com/__its__jamil_/"><FaInstagram /></a>
            <a href="www.linkedin.com/in/jamil-khan-893141227"><FaLinkedin /></a>
            <a href="https://github.com/Jamil115"><VscGithub /></a>
            <a href="https://x.com/Jamil_k710?t=BRAcRxIJzT8yeikFVVMwdg&s=09"><FaXTwitter /></a>
        </div>
        <div className="mt-10">
            <button className="bg-cyan-500 text-black font-semibold text-xl py-3 px-8 border-2 border-neutral-200 rounded-3xl mr-8">Resume</button>
            <button className="bg-cyan-500 text-black font-semibold text-xl py-3 px-8 border-2 border-neutral-200 rounded-3xl">Contact Me</button>
        </div>
    </div>
  );
}
