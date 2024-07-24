import React from 'react';
import { FaRegFolder } from 'react-icons/fa'; // Assuming you're using react-icons for the folder icon
import PdfFileUpload from '../../../../common/components/PdfFileUpload';

const FilesTab = () => {
  return (
    <div className="px-3  ml-7 pb-7">
      {/* Google Drive Card */}
      <div className="flex justify-center items-center bg-white  rounded-3xl mb-4 w-52   p-2">
        <FaRegFolder className="text-blue-500 mr-4" size={24} />
        <a href="https://googledrive.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold">
          googledrive.com
        </a>
      </div>
      
      {/* Row with 4 Rectangles */}
      <div className="flex space-x-3">
        <PdfFileUpload/>
      {/* <div className="flex-1 shadow-md border border border-dashed border-green-500 h-72 flex flex-col justify-center items-center"> */}
          {/* <img src={fileUpload} alt="Placeholder"  className="mb-2 w-10 h-10" />
          <span className="text-center text-good-morning-text font-semibold w-24 text-sm ">Add another document</span> */}
          
        {/* </div> */}
        {/* <div className="flex-1 bg-background-color h-72 "></div>
        <div className="flex-1 bg-background-color h-72 "></div>
        <div className="flex-1 bg-background-color h-72 "></div>
        <div className="flex-1 bg-background-color h-72 "></div> */}
      </div>
    </div>
  );
};

export default FilesTab;
