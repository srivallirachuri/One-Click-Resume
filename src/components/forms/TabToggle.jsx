import React from "react";

const TabToggle = ({ sectionKey, title, isVisible, onToggle }) => {
  return (
    <div className="tab-toggle">
      <label>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={() => onToggle(sectionKey)}
        />
        **{title}**
      </label>
      <span className="tab-status">
        {isVisible ? " (Visible)" : " (Hidden)"}
      </span>
    </div>
  );
};

export default TabToggle;
