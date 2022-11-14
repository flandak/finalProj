import React, { useEffect, useState } from "react";
import Areas from "./Areas/Areas";
import BasicInfo from "./Basic_Info/BasicInfo";
import Date from "./Date/Date";
import "./Property.css";
import Other from "./Other/Other";
import Energy from "./Energy/Energy";

export default function Body() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div onSubmit={handleFormSubmit} className="body">
      <BasicInfo setFormData={setFormData} />
      <Areas setFormData={setFormData} />
      <Date setFormData={setFormData} />
      <Other setFormData={setFormData} />
      <Energy setFormData={setFormData} />
      <button type="submit"></button>
    </div>
  );
}
