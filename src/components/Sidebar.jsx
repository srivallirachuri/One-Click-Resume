import React from "react";
import TabToggle from "./forms/TabToggle";

const formats = ["Modern", "Classic", "Minimal"];

const Sidebar = ({ tabs, toggleTab, selectedFormat, setSelectedFormat }) => {
  const tabKeys = Object.keys(tabs);

  return (
    <aside className="sidebar">
      <h2>🛠️ Resume Builder Options</h2>

      <div className="format-selection">
        <h3>🎨 Choose Format</h3>
        {formats.map((format) => (
          <label key={format}>
            <input
              type="radio"
              value={format.toLowerCase()}
              checked={selectedFormat === format.toLowerCase()}
              onChange={() => setSelectedFormat(format.toLowerCase())}
            />
            {format}
          </label>
        ))}
      </div>

      <hr />

      <div className="tab-control">
        <h3>🗑️ Sections to Include</h3>
        {tabKeys.map((key) => (
          <TabToggle
            key={key}
            sectionKey={key}
            title={tabs[key].title}
            isVisible={tabs[key].isVisible}
            onToggle={toggleTab}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
