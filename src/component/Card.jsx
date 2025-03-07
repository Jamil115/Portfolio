import React from "react";

export default function Card({ image, name }) {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-44 h-60 shadow-xl">
        <figure className="w-44 object-cover">
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-semibold text-lg w-full">{name}</h2>
        </div>
      </div>
    </div>
  );
}
