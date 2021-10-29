import React from "react";

function Uploader() {
  const author = 'u/author';
  // fetch a function through reducer to add new article when clicked
  return (
    <div className='Uploader centralize corefunc'>
      <form>
        <div>
          <label for='file'>Choose image or video to upload</label><br />
          <input type="file" id="input-article-image" class="image_inputType_file" accept="img/*,.mp4" /><br />
          <input type='text' id='input-article-title' placeholder='Title' /><br />
          <input type='text' id='input-article-text' placeholder='addttional text' />
        </div>
        <div>
        <button class="input-article-new">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Uploader;
