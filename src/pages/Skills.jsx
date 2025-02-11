import React from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import html from "../../public/HTML.png"
import css from "../../public/css.png"
import tailwind from "../../public/tailwind.png"
import react from "../../public/react.png"
import express from "../../public/express.png"
import mongo from "../../public/mongo.png"
import canva from "../../public/canva.jpg"
import vscode from "../../public/vscode.jpg"
import photoshop from "../../public/photoshop.png"
import illustrator from "../../public/illustrator.png"
import figma from "../../public/figma.png"
import github from "../../public/github.webp"


export default function Skills() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <p className="text-center mt-16 text-xl font-semibold font-serif border-2 border-slate-400 rounded mx-[350px] ">Skills</p>
                    <p className="text-center mt-7 font-light font-mono text-neutral-300">The Essential Web Development Skills I Have Learned and Applied</p>
                    <div className="grid grid-cols-4 justify-items-center mx-64 my-20">
                        <Card image={html} name={"HTML"} />
                        <Card image={css} name={"CSS"} />
                        <Card image={tailwind} name={"Tailwind CSS"} />
                        <Card image={javascript} name={"JavaScript"} />
                        <Card image={react} name={"React"} />
                        <Card image={express} name={"Express JS"} />
                        <Card image={mongo} name={"Mongo DB"} />
                    </div>
                </div>

                <div>
                    <p className="text-center mt-12 text-xl font-semibold font-serif border-2 border-slate-400 rounded mx-[350px] ">Tools</p>
                    <p className="text-center mt-7 font-light font-mono text-neutral-300">Essential Tools That Helped Build This Project</p>
                    <div className="grid grid-cols-4 justify-items-center mx-64 my-20">
                        <Card image={canva} name={"Canva"} />
                        <Card image={vscode} name={"VS Code"} />
                        <Card image={photoshop} name={"Photoshop"} />
                        <Card image={illustrator} name={"Illustrator"} />
                        <Card image={figma} name={"Figma"}/>
                        <Card image={github} name={"Github"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
