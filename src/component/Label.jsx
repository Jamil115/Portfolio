import React from "react";

export default function Label({title}) {
    const lowerCaseTitle = title.toLowerCase()
    console.log(title)
    console.log(lowerCaseTitle)
  return (
    <div>
      <div className="w-2xl mb-4">
        <label className="form-control w-full max-w-xs flex flex-col ">
          <div className="label mb-2">
            <span className="label-text text-white  font-semibold">{title}</span>
          </div>
          <input
            type="text"
            placeholder={`Enter ${lowerCaseTitle}`}
            className="input input-bordered w-2xl h-14"
          />
        </label>
      </div>
    </div>
  );
}
