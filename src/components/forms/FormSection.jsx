import React from "react";

const FormSection = ({ title, dataKey, value, updateData }) => {
  return (
    <div className="form-section">
      <h4>{title}</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => updateData(dataKey, e.target.value)}
        placeholder={`Enter your ${title.toLowerCase()}`}
      />
    </div>
  );
};

export default FormSection;
