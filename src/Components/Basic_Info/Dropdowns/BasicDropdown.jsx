import React from "react";
import "./BasicDropdown.css";
export default function BasicDropdown({ label, setFormData, name }) {
  const selectChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="fieldset-dropdown">
      <label>{label} </label>
      <select className="select" onChange={selectChangeHandler} name={name}>
        <option value="">- select</option>
        <option value="no">no</option>
        <option value="yes">yes</option>
      </select>
    </div>
  );
}
