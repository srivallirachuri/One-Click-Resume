import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ResumePreview from "./components/ResumePreview";
import FormSection from "./components/forms/FormSection";
import WorkExperienceForm from "./components/forms/WorkExperienceForm";
import "./styles/App.css"; // Import the main CSS

// --- INITIAL DATA ---
const initialResumeData = {
  name: "",
  about: "Highly motivated student...",
  workExperience: [],
  skills: ["React", "JavaScript", "HTML/CSS"],
  achievements: [],
  education: [
    // Must match the keys expected by ResumePreview (school, degree, duration)
    { school: "", degree: "", field: "", duration: "" },
  ],
  projects: [
    // Must match the keys expected by ResumePreview (title, description)
    { title: "", description: "" },
  ],
  certificates: [],
  internships: [],
};
const initialTabs = {
  name: { title: "1. Name", isVisible: true },
  about: { title: "2. About", isVisible: true },
  workExperience: { title: "3. Work Experience", isVisible: true },
  skills: { title: "4. Skills", isVisible: true },
  achievements: { title: "5. Achievements", isVisible: true },
  education: { title: "6. Education Qualifications", isVisible: true },
  projects: { title: "7. Projects", isVisible: true },
  certificates: { title: "8. Certificates", isVisible: true },
  internships: { title: "9. Internships", isVisible: true },
};

function App() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [tabs, setTabs] = useState(initialTabs);
  const [selectedFormat, setSelectedFormat] = useState("modern");

  // Universal function to update any field in the resume data state
  const updateData = (key, value) => {
    setResumeData((prev) => ({ ...prev, [key]: value }));
  };

  // Function to toggle tab visibility (used in Sidebar)
  const toggleTab = (key) => {
    setTabs((prev) => ({
      ...prev,
      [key]: { ...prev[key], isVisible: !prev[key].isVisible },
    }));
  };

  return (
    <div className="app-container">
      <Sidebar
        tabs={tabs}
        toggleTab={toggleTab}
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
      />

      <main className="main-content">
        <section className="form-area">
          <h2>📝 Enter Details</h2>

          {/* Use FormSection for simple inputs */}
          {tabs.name.isVisible && (
            <FormSection
              title={tabs.name.title}
              dataKey="name"
              value={resumeData.name}
              updateData={updateData}
            />
          )}
          {tabs.about.isVisible && (
            <FormSection
              title={tabs.about.title}
              dataKey="about"
              value={resumeData.about}
              updateData={updateData}
            />
          )}

          {/* Use dedicated component for list/array inputs */}
          {tabs.workExperience.isVisible && (
            <div className="data-section">
              <h3>{tabs.workExperience.title}</h3>
              <WorkExperienceForm
                dataKey="workExperience"
                data={resumeData.workExperience}
                updateData={updateData}
              />
            </div>
          )}

          {/* Example for Skills (simple array of strings, use comma separated input) */}
          {tabs.skills.isVisible && (
            <FormSection
              title={tabs.skills.title}
              dataKey="skills"
              value={resumeData.skills.join(", ")}
              updateData={(key, value) =>
                updateData(
                  key,
                  value.split(",").map((s) => s.trim())
                )
              }
            />
          )}

          {tabs.achievements.isVisible && (
            <FormSection
              title={tabs.achievements.title}
              dataKey="achievements"
              value={resumeData.achievements.join(", ")}
              updateData={(key, value) =>
                updateData(
                  key,
                  value.split(",").map((s) => s.trim())
                )
              }
            />
          )}

          {tabs.education.isVisible && (
            <div className="data-section">
              <h3>{tabs.education.title}</h3>
              <WorkExperienceForm
                dataKey="education"
                data={resumeData.education}
                updateData={updateData}
              />
            </div>
          )}

          {/* 7. PROJECTS (Use WorkExperienceForm structure for repeatable data) */}
          {/* {tabs.projects.isVisible && (
            <div className="data-section">
              <h3>{tabs.projects.title}</h3>
              <WorkExperienceForm
                dataKey="projects"
                data={resumeData.projects}
                updateData={updateData}
              />
            </div>
          )} */}
          {tabs.projects.isVisible && (
            <FormSection
              title={tabs.projects.title}
              dataKey="projects"
              value={resumeData.projects.join(", ")}
              updateData={(key, value) =>
                updateData(
                  key,
                  value.split(",").map((s) => s.trim())
                )
              }
            />
          )}
          {/* 8. CERTIFICATES (Simple text or comma-separated list like Skills) */}
          {tabs.certificates.isVisible && (
            <FormSection
              title={tabs.certificates.title}
              dataKey="certificates"
              value={resumeData.certificates.join(", ")}
              updateData={(key, value) =>
                updateData(
                  key,
                  value.split(",").map((s) => s.trim())
                )
              }
            />
          )}

          {/* 9. INTERNSHIPS (Use WorkExperienceForm structure for repeatable data) */}
          {tabs.internships.isVisible && (
            <div className="data-section">
              <h3>{tabs.internships.title}</h3>
              <WorkExperienceForm // Assuming you reuse this component structure for Internships
                dataKey="internships"
                data={resumeData.internships}
                updateData={updateData}
              />
            </div>
          )}

          {/* ... Add forms for all other tabs (Education, Projects, etc.) */}
        </section>

        <section className="preview-area">
          <h2>👁️ Resume Preview</h2>
          <ResumePreview
            data={resumeData}
            tabs={tabs}
            format={selectedFormat}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
