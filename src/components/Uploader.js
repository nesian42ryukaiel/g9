import React from "react";

function Uploader() {
  return (
    <div className='Uploader centralize corefunc'>
      <input type="file" id="real-input" class="image_inputType_file" accept="img/*" />
      <button class="browse-btn">Upload</button>
    </div>
  );
}

export default Uploader;
