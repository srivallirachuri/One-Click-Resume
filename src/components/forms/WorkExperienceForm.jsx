// src/components/forms/WorkExperienceForm.jsx

import React from "react";

const WorkExperienceForm = ({ dataKey, data, updateData }) => {
  // Defines the structure for a new entry based on the dataKey
  const getEmptyEntry = () => {
    switch (dataKey) {
      case "education":
        return { school: "", degree: "", field: "", duration: "" };
      case "projects":
        return { title: "", description: "" };
      // Add more cases for 'workExperience' and 'internships'
      default:
        return { title: "", company: "", duration: "", description: "" };
    }
  };

  // Function to handle changes in a specific input field
  const handleChange = (index, field, value) => {
    const newEntries = data.map((entry, i) => {
      if (i === index) {
        return { ...entry, [field]: value };
      }
      return entry;
    });
    updateData(dataKey, newEntries);
  };

  // Function to add a new blank entry
  const handleAdd = () => {
    updateData(dataKey, [...data, getEmptyEntry()]);
  };

  // Function to delete an entry
  const handleDelete = (index) => {
    const newEntries = data.filter((_, i) => i !== index);
    updateData(dataKey, newEntries);
  };

  return (
    <div>
      {data.map((entry, index) => (
        <div key={index} className="list-item-card">
          {/* --- DYNAMIC INPUT RENDERING --- */}
          {/* You need to decide which fields to show based on dataKey */}

          {/* Common fields (Example: Title/Degree) */}
          {(dataKey === "workExperience" ||
            dataKey === "internships" ||
            dataKey === "projects") && (
            <input
              type="text"
              placeholder="Title (e.g., Software Developer)"
              value={entry.title || ""}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
          )}
          {dataKey === "education" && (
            <input
              type="text"
              placeholder="Degree/Certification"
              value={entry.degree || ""}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          )}

          {/* School/Company Field */}
          {(dataKey === "workExperience" || dataKey === "internships") && (
            <input
              type="text"
              placeholder="Company"
              value={entry.company || ""}
              onChange={(e) => handleChange(index, "company", e.target.value)}
            />
          )}
          {dataKey === "education" && (
            <input
              type="text"
              placeholder="School/University"
              value={entry.school || ""}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            />
          )}

          {/* Duration Field */}
          <input
            type="text"
            placeholder="Duration (e.g., 2020 - 2024)"
            value={entry.duration || ""}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
          />

          {/* Description/Project Description Field */}
          {entry.description !== undefined && (
            <textarea
              placeholder="Description/Key Responsibilities"
              value={entry.description || ""}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
          )}

          <button className="delete-btn" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
      <button className="add-btn" onClick={handleAdd}>
        + Add New Entry
      </button>
    </div>
  );
};

export default WorkExperienceForm;
