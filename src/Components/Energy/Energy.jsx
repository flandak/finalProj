import React, { useState } from "react";
import axios from "axios";
import InputField from "../Basic_Info/InputFields/InputField";
import CheckBox from "../CheckBox/CheckBox";
import Card from "../Cards/Card";

export default function Energy() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Card className="basic-content">
      <h4>Energy eficciency of the building</h4>
      <CheckBox label="low-energy" />
      <fieldset className="fieldset">
        {/* -------------------------------energy dropdown----------------------- */}
        <div className="fieldset-dropdown">
          <label>Energy efficiency class: </label>
          <select className="select">
            <option value="">- select</option>
            <option value="a">A - extremely efficient</option>
            <option value="b">B - very efficient</option>
            <option value="c">C - efficient</option>
            <option value="d">D - less efficient</option>
            <option value="e">E - uneconomical</option>
            <option value="f">F - very uneconomical</option>
            <option value="g">G - extremely uneconomical</option>
          </select>
        </div>
        <InputField label="Energy consumption index:(kWh/m2)" />

        {/* ---------------------------------------upload file form---------------------------------- */}

        <form onSubmit={handleSubmit}>
          <h5>React File Upload</h5>
          <input type="file" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
        {/* -------------------------------------decree dropdown-------------------------------- */}
        <div className="fieldset-dropdown">
          <label>According to a regulation: </label>
          <select className="select">
            <option value="">- select</option>
            <option value="idk">TBD</option>
            <option value="idk">TBD</option>
            <option value="idk">TBD</option>
          </select>
        </div>
      </fieldset>
    </Card>
  );
}
