import React from "react";
import Navbar from "../component/Navbar";
import EduInfo from "../component/EduInfo";
import Footer from "../component/Footer";

export default function Education() {
    return (
        <div>
            <Navbar />
            <EduInfo exam={"B.Sc. in Information & Communication Technology"} institute={"Bangladesh University of Professionals"} year={2025} result={"CGPA: 3.62"} />
            <EduInfo exam={"HSC"} institute={"Dhaka Imperial College"} year={2020} result={"GPA: 3.62"} />
            <EduInfo exam={"SSC"} institute={"KPB School & College"} year={2018} result={"GPA: 3.62"} />
            <Footer />
        </div>
    );
}
