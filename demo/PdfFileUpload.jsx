import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import fileUpload from '../../data/Group.png';

// package 1 -- npm i pdfjs-dist@3.4.120
// package 2 -- npm i @react-pdf-viewer/core@3.7.0

export default function PdfFileUpload() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"]; // Adjusted file type check

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && fileType.includes(selectedFile.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setPdfFile(e.target.result);
      };
    } else {
      setPdfFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 shadow-md border border border-dashed border-green-500 h-72 flex flex-col justify-center items-center p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
          <img src={fileUpload} alt="Placeholder" className="mb-2 w-10 h-10" />
          <span className="text-center text-good-morning-text font-semibold w-24 text-sm ">Add another document</span>
          <input type="file" onChange={handleChange} />
          <button type="submit" className="text-white font-semibold text-sm bg-[#00A762] p-2 rounded">View PDF</button>
        </form>
      </div>
      <div className="flex-1 bg-background-color h-72 w-[320px] overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {viewPdf && (
            <Viewer fileUrl={viewPdf} />
          )}
          {!viewPdf && <p>Please select a PDF file</p>}
        </Worker>
      </div>
    </div>
  );
}
