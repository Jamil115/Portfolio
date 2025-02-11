import React from "react";

export default function ProjectCard({info}) {
  console.log(info);
  return (
    <div className="mx-20 grid grid-cols-3 justify-items-center">
      {info.map((item) => (
        <div className="card bg-base-100 w-[400px] shadow-xl">
          <figure>
            <img src={item.image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-xl mb-1">{item.title}</h2>
            <p className="mb-3 font-light">{item.description}</p>

            <div className="card-actions gap-5">
              {item.button
                ? item.button.map((value) => (
                    console.log(value.type),
                    <a href={value.link}><button className="btn btn-primary">{value.type}</button></a>
                  ))
                : "No buttons are here"}
              {/* <button className="btn btn-primary">Github</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
