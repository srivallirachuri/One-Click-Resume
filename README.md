# One-Click-Resume
One-Click-Resume is the project built using reactjs, creative modern css styling to look unique. This project is used to  generate  basic resume for students.
In this project when the user just fillup the details then the resumes fills automatically.
React.js
Familiarity with Functional Components, Hooks (useState, useEffect), Props, and Component Lifecycle.

a
1.Name
2.About
3.Work Experience
4.Skills
5.Achievements
6.Education qualifications 
7.Projects
8.Certificates
9.Internships


The user can import resume as pdf .
The user can delete tabs if they don’t wants to include that tab in their resume.
The resume also consists of 3 formats the user can choose on their interest to design resume.



The structure of the project includes:
Components,forms,FormSectiom.jsx,WorkExperienceForm.jsx,TabToggle.jsx,ResumePreview.jsx,Sidebar.jsx.

App.css is used to style the website.
App.jsx is the  main component of the website to render the components .
Index.js used for fumctionality.
Package.json includes dependencies required for our website.


Step1:Creaate react app
npm create vite@4.1.0
Node.js (version 16 or higher is recommended) is essential for running the JavaScript environment and managing packages. npm (Node Package Manager) comes with Node.js.
Here,npm is the node package manager used to download the dependencies into project.
Next we name the project .
Step2:Install required dependencies.
npm install jspdf,html2xanvas these dependencies are used to download the resume as pdf.

Required Components:
	• App.js: Main container and state management.
	• components/:
		Sidebar.js: For navigation and format selection.
		FormSection.js: A generic component for input forms (e.g., Name, Skills, Work Experience).
		ResumePreview.js: Renders the final resume using the selected format.
	• utils/:
		pdfGenerator.js: For the PDF export logic (requires a library like html2canvas and jspdf).
		


The App.js component will hold the main state representing the resume data and handle the logic for tab visibility and format selection.

ResumePreview.js
This component takes the data and the selected format to render the final resume.

Features of project :
User input automatically updates the resume preview.
Users can toggle sections (tabs) on or off.
Users can select different visual formats (Modern, Classic, Minimal).
The final output can be exported as a PDF.


Code Concept

Explanation

const [resumeData,  setResumeData] = useState(...)

This Hook holds all the user's resume information (Name, Skills, Work Experience, etc.). This data is the source of truth.

const [tabs, setTabs] = useState(...)

This state holds the configuration for which sections are visible on the resume, allowing the user to "delete tabs."

const updateData = (key, value) => {...}

A crucial function used by all input forms. It takes a key (e.g., 'name') and a new value, updating the central resumeData state.

Component Layout

App.jsx renders the three main structural pieces: <Sidebar /> (controls), the <FormSection /> components (data input), and <ResumePreview /> (output visualization).



 





<img width="918" height="3288" alt="image" src="https://github.com/user-attachments/assets/3d4e3694-dd19-4ac8-9a75-f751d1affafa" />
