import React from "react";

export default function MsgBox({title}) {
    const lowerCaseTitle = title.toLowerCase()
  return (
    <div>
      <div className="w-2xl">
        <label className="form-control flex flex-col">
          <div className="label mb-3">
            <span className="label-text text-white font-semibold">{title}</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 w-2xl text-lg"
            placeholder= {`Enter ${lowerCaseTitle}`}
          >
          </textarea>
        </label>
      </div>
    </div>
  );
}
