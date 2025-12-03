import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const generatePdf = (elementId, filename = "resume") => {
  const input = document.getElementById(elementId);

  if (!input) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  // Use scale to improve resolution of the generated PDF
  const scale = 2;

  html2canvas(input, { scale: scale, logging: false }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    // 'p' = portrait, 'mm' = units, 'a4' = format
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Handle multi-page content
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${filename}.pdf`);
  });
};

export default generatePdf;
