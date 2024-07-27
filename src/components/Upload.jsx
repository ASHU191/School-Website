import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  return (
    <div className="pt-5 flex gap-5">
      <label
        className="bg-gray text-black py-2 px-4 rounded cursor-pointer"
        htmlFor="file-input"
      >
        Choose File
      </label>
      <input
        type="file"
        id="file-input"
        className="hidden"
        onChange={handleFileChange}
      />
      {!selectedFile ? (
        <div className="mt-2 text-red-500">
          <p>No file chosen</p>
        </div>
      ) : (
        <div className="mt-2">
          <p>Selected file: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
