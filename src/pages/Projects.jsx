import React from 'react'
import Navbar from '../component/Navbar'
import ProjectCard from '../component/ProjectCard'

import shoppy from "../../public/shoppy.png"
import bookshop from "../../public/bookshop.png"
import moveflix from "../../public/moveflix.png"
import Footer from '../component/Footer'

export default function Projects() {
    const info = [
        {
            title: "Shoppy - An E-commerce Website",
            description: "The website has a good looking user interface. Customers of this website can get the latest fashion newsletters, blogs. Anyone can buy their necessary things from this website.",
            button: [
                {
                    type: "Live",
                    link:"https://shoppy-bice-six.vercel.app/"
                }, 
                {
                    type:"Github", 
                    link:"https://github.com/Jamil115/Shoppy"}
                ],
            image: shoppy
        },
        {
            title: "BookShop",
            description: "This is a backend project with a simple frontend. JWT verification has been done for both server side and client side. Fetching books information from database. The password will be securely stored as a hashed value using the bcrypt function.",
            button: [
                {
                    type:"Github", 
                    link:"https://github.com/Jamil115/BookStore"
                }
            ],
            image: bookshop
        },
        {
            title: "MovieFlix - Movie Search Website ",
            description: "TIntegrated the OMDB API to fetch and display real-time movie data based on user input. Handled API requests efficiently with JavaScript, managing data fetching and display dynamically without page reloads.",
            button: [
                {
                    type:"Github", 
                    link:"https://github.com/Jamil115/Movie-Search"
                }
            ],
            image: moveflix
        }
    ]

    console.log(info[0])
    return (
        <div>
            <Navbar />
            <p className="text-center mt-12 text-xl font-serif border-2 border-slate-400 rounded mx-[350px] mb-14">My Projects</p>
            <ProjectCard info = {info}/>
            <Footer />
        </div>
    )
}
