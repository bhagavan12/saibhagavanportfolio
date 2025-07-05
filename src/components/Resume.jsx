import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;
import pdf from "./2100032454-J Sai Bhagavan _n1.pdf";
import "../styles/ResumeSection.css";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export default function ResumeSection() {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className="resume-section">
      <h2 className="resume-title">My Resume</h2>
      {/* <p className="resume-subtitle">Quick preview & download</p> */}

      <div className="pdf-preview">
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
          <Viewer fileUrl={pdf} className="pdf-viewer" />
        </Worker>
      </div>

      <div className="resume-buttons">
        <a href={pdf} download className="btn">📎 Download Resume</a>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn secondary">🔗 View Fullscreen</a>
      </div>
    </section>
  );
}
