import React from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Skills() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <p className="text-center mt-16 text-xl font-semibold font-serif border-2 border-slate-400 rounded mx-[350px] ">Skills</p>
                    <p className="text-center mt-7 font-light font-mono text-neutral-300">The Essential Web Development Skills I Have Learned and Applied</p>
                    <div className="grid grid-cols-4 justify-items-center mx-64 my-20">
                        <Card image={"../../public/HTML.png"} name={"HTML"} />
                        <Card image={"../../public/css.png"} name={"CSS"} />
                        <Card image={"../../public/tailwind.png"} name={"Tailwind CSS"} />
                        <Card image={"../../public/javascript.png"} name={"JavaScript"} />
                        <Card image={"../../public/react.png"} name={"React"} />
                        <Card image={"../../public/express.png"} name={"Express JS"} />
                        <Card image={"../../public/mongo.png"} name={"Mongo DB"} />
                    </div>
                </div>

                <div>
                    <p className="text-center mt-12 text-xl font-semibold font-serif border-2 border-slate-400 rounded mx-[350px] ">Tools</p>
                    <p className="text-center mt-7 font-light font-mono text-neutral-300">Essential Tools That Helped Build This Project</p>
                    <div className="grid grid-cols-4 justify-items-center mx-64 my-20">
                        <Card image={"../../public/canva.jpg"} name={"Canva"} />
                        <Card image={"../../public/vscode.jpg"} name={"VS Code"} />
                        <Card image={"../../public/photoshop.png"} name={"Photoshop"} />
                        <Card image={"../../public/illustrator.png"} name={"Illustrator"} />
                        <Card image={"../../public/figma.png"} name={"Figma"}/>
                        <Card image={"../../public/github.webp"} name={"Github"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
