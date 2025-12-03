import React from "react";
import generatePdf from "../utils/pdfGenerator";

const ResumePreview = ({ data, tabs, format }) => {
  const formatClass = `resume-format-${format}`;
  const resumeId = "resume-content"; // ID for PDF generation

  // Helper component to conditionally render sections
  const Section = ({ dataKey, title, children }) =>
    tabs[dataKey] &&
    tabs[dataKey].isVisible && (
      <div className={`resume-section resume-${dataKey}`}>
        <h3 className="section-title">{title}</h3>
        {children}
      </div>
    );

  return (
    <div className="preview-container">
      <div id={resumeId} className={`resume-paper ${formatClass}`}>
        {/* 1. Name */}
        {tabs.name.isVisible && (
          <h1 className="resume-name">{data.name || "Your Full Name"}</h1>
        )}

        {/* 2. About - FIX: Check if the string exists and is not empty */}
        <Section dataKey="about" title="Profile Summary">
          {data.about && data.about.trim().length > 0 && <p>{data.about}</p>}
        </Section>

        {/* 3. Work Experience - FIX: Check if the array has entries */}
        <Section dataKey="workExperience" title="Work Experience">
          {data.workExperience.length > 0 &&
            data.workExperience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h4>
                  {exp.title} at {exp.company}
                </h4>
                <p className="duration">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
        </Section>

        {/* 4. Skills - FIX: Check if the array has entries and join */}
        <Section dataKey="skills" title="Skills">
          {data.skills.length > 0 && <p>{data.skills.join(", ")}</p>}
        </Section>

        {/* 5. Achievements - FIX: Check if the array has entries before mapping */}
        <Section dataKey="achievements" title="Achievements">
          {data.achievements.length > 0 && (
            <ul>
              {data.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </Section>

        {/* 6. Education Qualifications - FIX: Check if the array has entries */}
        <Section dataKey="education" title="Education Qualifications">
          {data.education.length > 0 &&
            data.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>
                  {edu.degree} - {edu.school}
                </h4>
                <p className="duration">{edu.duration}</p>
              </div>
            ))}
        </Section>

        {/* 7. PROJECTS - FIX: Check if the array has entries */}
        {/* <Section dataKey="projects" title="Projects">
          {data.projects.length > 0 &&
            data.projects.map((proj, index) => (
              <div key={index} className="project-item">
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
              </div>
            ))}
        </Section> */}
        <Section dataKey="projects" title="projects">
          {data.projects.length > 0 && <p>{data.projects.join(", ")}</p>}
        </Section>

        {/* 8. CERTIFICATES - FIX: Check if the array has entries */}
        <Section dataKey="certificates" title="Certificates">
          {data.certificates.length > 0 && (
            <p>{data.certificates.join(" | ")}</p>
          )}
        </Section>

        {/* 9. INTERNSHIPS - FIX: Check if the array has entries */}

        <Section dataKey="internships" title="Internships">
          {data.internships.length > 0 &&
            data.internships.map((intern, index) => (
              <div key={index} className="internship-item">
                <h4>
                  {intern.title} at {intern.company}
                </h4>
                <p className="duration">{intern.duration}</p>
                <p>{intern.description}</p>
              </div>
            ))}
        </Section>
      </div>

      <button
        className="pdf-export-btn"
        onClick={() => generatePdf(resumeId, data.name || "Resume")}
      >
        📥 Export Resume as PDF
      </button>
    </div>
  );
};

export default ResumePreview;
