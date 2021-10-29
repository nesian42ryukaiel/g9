import React from "react";

function Uploader() {
  return (
    <div className='Uploader centralize corefunc'>
      <input type="file" id="input-article-image" class="image_inputType_file" accept="img/*,.mp4" />
      <button class="input-article-new">Upload</button>
    </div>
  );
}

export default Uploader;
