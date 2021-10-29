import React from "react";

function Poster() {
  return (
    <div className='Poster'>
      <input type="file" id="real-input" class="image_inputType_file" accept="img/*" />
      <button class="browse-btn">Upload</button>
    </div>
  );
}

export default Poster;
