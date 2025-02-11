import React from "react";

export default function ProjectCard({info}) {
  console.log(info);
  return (
    <div className="grid grid-cols-3 justify-items-center">
      {info.map((item) => (
        <div className="card bg-base-100 w-[500px] shadow-xl">
          <figure className="">
            <img src={item.image} alt="image" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl mb-2">{item.title}</h2>
            <p className="mb-5">{item.description}</p>

            <div className="card-actions gap-5">
              {item.button
                ? item.button.map((value) => (
                    console.log(value.type),
                    <a href={value.link}><button className="btn btn-primary">{value.type}</button></a>
                  ))
                : "hi"}
              {/* <button className="btn btn-primary">Github</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
