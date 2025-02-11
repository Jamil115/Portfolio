import React from "react";

export default function MsgBox({title}) {
    const lowerCaseTitle = title.toLowerCase()
  return (
    <div>
      <div className="w-[800px]">
        <label className="form-control flex flex-col">
          <div className="label mb-3">
            <span className="label-text text-white font-semibold">{title}</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 w-3xl text-lg"
            placeholder= {`Enter ${lowerCaseTitle}`}
          >
          </textarea>
        </label>
      </div>
    </div>
  );
}
