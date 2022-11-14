import React from "react";

export default function CheckBox({ label, name, value }) {
  return (
    <div className="checkbox">
      <label>{label} </label>
      <input type="checkbox" name={name} value={value}></input>
    </div>
  );
}
