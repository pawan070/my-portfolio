import React from "react";


const fileUrl = "/portfolio.pdf"; // Relative to public folder

const PortfolioViewer = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Resume</h1>
      
      <iframe
        src={fileUrl}
        title="Portfolio"
        width="70%"
        height="600px"
        className="mb-6 border"
      ></iframe>

      <a
        href={fileUrl}
        download
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Portfolio
      </a>
    </div>
  );
};

export default PortfolioViewer;
