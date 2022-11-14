import React from "react";
import BasicDropdown from "../Basic_Info/Dropdowns/BasicDropdown";
import InputField from "../Basic_Info/InputFields/InputField";
import Card from "../Cards/Card";

export default function Areas({ setFormData }) {
  const content = {
    usable: "Usable (in m²):",
    buildUp: "Built-up area (in m²):",
    garden: "Gardens (in m²):",
    floorArea: "Floor area (in m²):",
    balcony: "Balcony",
    loggia: "Loggia (in m²):",
    terrace: "Terrace (in m²):",
    pool: "Pool (in m²):",
    parking: "Parking space:",
    garage: "Garage:",
  };
  return (
    <Card className="basic-content">
      <div className="basic-contents">
        <h4>Areas</h4>
        <fieldset className="fieldset">
          <div className="fieldset-inputs">
            <form>
              <InputField
                type="text"
                label={content.usable}
                name="fLocation"
                value={undefined}
                setFormData={setFormData}
              />
              <InputField
                type="text"
                label={content.buildUp}
                name="fxxxx"
                value={undefined}
                setFormData={setFormData}
              />
              <InputField
                type="text"
                label={content.garden}
                name="fLocation"
                value={undefined}
                setFormData={setFormData}
              />
              <InputField
                type="text"
                label={content.floorArea}
                name="fLocation"
                value={undefined}
                setFormData={setFormData}
              />
            </form>
          </div>
          <div className="fieldset-inputs">
            <BasicDropdown
              name="loggia"
              setFormData={setFormData}
              label={content.loggia}
            />
            <BasicDropdown
              name="balcony"
              setFormData={setFormData}
              label={content.balcony}
            />
            <BasicDropdown
              name="terrace"
              setFormData={setFormData}
              label={content.terrace}
            />
            <BasicDropdown
              name="pool"
              setFormData={setFormData}
              label={content.pool}
            />
            <BasicDropdown
              name="parking"
              setFormData={setFormData}
              label={content.parking}
            />
            <BasicDropdown
              name="garage"
              setFormData={setFormData}
              label={content.garage}
            />
          </div>
        </fieldset>
      </div>
    </Card>
  );
}
