import React from "react";

function Uploader() {
  const author = 'u/author';
  // fetch a function through reducer to add new article when clicked
  return (
    <div className='Uploader centralize corefunc'>
      <form>
        <div>
          <label htmlFor='file'>Choose image or video to upload</label><br />
          <input type="file" id="input-article-image input--file" className="image_inputType_file"
          accept=".gif, .jpeg, .jpg, .png, .mp4" /><br />
          <input type='text' id='input-article-title' placeholder='Title (required)' /><br />
          <input type='text' id='input-article-text' placeholder='optional text' />
        </div>
        <div>
          <input type='submit' className='input-article-new input--button' value='Upload' />
        </div>
      </form>
    </div>
  );
}

export default Uploader;
